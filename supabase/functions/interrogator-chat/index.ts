import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const ANTHROPIC_API_URL = "https://api.anthropic.com/v1/messages";
const ANTHROPIC_MODEL = "claude-sonnet-4-6";
const ANTHROPIC_VERSION = "2023-06-01";

const BASE_SYSTEM_PROMPT = `You are the Interrogator — a sharp, professional AI agent embedded in PromptMe, a "Street to Suite" business platform. Your job is to dynamically build forms and collect structured data from users through natural conversation.

## How you work

1. **When a user starts a conversation**, greet them briefly and ask what kind of form or document they need. Examples: reimbursement request, client intake, invoice, project brief, NDA, scope of work, etc.

2. **Once you know the form type**, tell the user you'll walk them through it one question at a time. Then begin asking questions — ONE AT A TIME. Never dump multiple questions.

3. **For each field you need**, ask a clear, conversational question. Wait for the user's answer before moving on. If the answer seems incomplete or invalid, politely ask for clarification.

4. **Adapt dynamically** — if the user's answers reveal they need additional fields (e.g. they mention international travel so you ask about currency), add them naturally.

5. **When all fields are collected**, provide a clean summary of everything they submitted in a formatted list, and ask if they'd like to edit anything or submit.

## Tone & Style
- Professional but approachable — like a sharp executive assistant
- Concise questions, no filler
- Use bold for field labels in summaries
- Keep responses short (1-3 sentences per turn unless summarizing)

## Important Rules
- NEVER ask more than one question per message
- NEVER make up data — only use what the user provides
- If the user asks you to build a form you're unsure about, ask clarifying questions about what fields they need
- You can handle ANY type of form or document — you are not limited to predefined templates`;

function buildSystemPrompt(identityContext?: {
  purpose_statement?: string | null;
  communication_style?: string | null;
  personality_traits?: string[] | null;
  financial_voice?: string | null;
}): string {
  if (!identityContext) return BASE_SYSTEM_PROMPT;

  const lines: string[] = [];
  if (identityContext.purpose_statement) {
    lines.push(`Purpose: ${identityContext.purpose_statement}`);
  }
  if (identityContext.communication_style) {
    lines.push(`Communication style: ${identityContext.communication_style}`);
  }
  if (identityContext.personality_traits?.length) {
    lines.push(`Personality traits: ${identityContext.personality_traits.join(", ")}`);
  }
  if (identityContext.financial_voice) {
    lines.push(`Financial voice: ${identityContext.financial_voice}`);
  }

  if (!lines.length) return BASE_SYSTEM_PROMPT;

  return `${BASE_SYSTEM_PROMPT}

## User voice profile
Draft all documents in this user's voice. Match their tone, phrasing, and priorities.
${lines.join("\n")}`;
}

type ChatMessage = { role: string; content: string };

function prepareAnthropicPayload(messages: ChatMessage[], systemPrompt: string) {
  const hasSystem = messages.some((m) => m.role === "system");
  let system = systemPrompt;
  let chatMessages = messages;

  if (hasSystem) {
    const systemMsg = messages.find((m) => m.role === "system");
    if (systemMsg) system = systemMsg.content;
    chatMessages = messages.filter((m) => m.role !== "system");
  }

  return {
    system,
    messages: chatMessages.map((m) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: m.content,
    })),
  };
}

/** Anthropic SSE → OpenAI chat-completions SSE (client parser unchanged) */
function openAiSseChunk(text: string): string {
  return `data: ${JSON.stringify({ choices: [{ delta: { content: text } }] })}\n\n`;
}

async function* anthropicToOpenAiStream(body: ReadableStream<Uint8Array>): AsyncGenerator<string> {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    let blockEnd: number;
    while ((blockEnd = buffer.indexOf("\n\n")) !== -1) {
      const block = buffer.slice(0, blockEnd);
      buffer = buffer.slice(blockEnd + 2);

      let eventType = "";
      let data = "";
      for (const line of block.split("\n")) {
        if (line.startsWith("event: ")) eventType = line.slice(7).trim();
        if (line.startsWith("data: ")) data = line.slice(6).trim();
      }

      if (!data || data === "[DONE]") continue;

      try {
        const parsed = JSON.parse(data);
        if (eventType === "content_block_delta" && parsed.delta?.type === "text_delta" && parsed.delta.text) {
          yield openAiSseChunk(parsed.delta.text);
        }
      } catch {
        // ignore malformed SSE blocks
      }
    }
  }

  yield "data: [DONE]\n\n";
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, identityContext } = await req.json();
    const systemPrompt = buildSystemPrompt(identityContext);
    const apiKey = Deno.env.get("ANTHROPIC_API_KEY");
    if (!apiKey) throw new Error("ANTHROPIC_API_KEY is not configured");

    const { system, messages: anthropicMessages } = prepareAnthropicPayload(messages, systemPrompt);

    const response = await fetch(ANTHROPIC_API_URL, {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": ANTHROPIC_VERSION,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: ANTHROPIC_MODEL,
        max_tokens: 4096,
        system,
        messages: anthropicMessages,
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402 || response.status === 529) {
        return new Response(
          JSON.stringify({ error: "AI quota exceeded. Please check your API billing." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("Anthropic API error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!response.body) {
      return new Response(
        JSON.stringify({ error: "No response stream" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        try {
          for await (const chunk of anthropicToOpenAiStream(response.body!)) {
            controller.enqueue(encoder.encode(chunk));
          }
          controller.close();
        } catch (e) {
          console.error("Stream transform error:", e);
          controller.error(e);
        }
      },
    });

    return new Response(stream, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("interrogator-chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
