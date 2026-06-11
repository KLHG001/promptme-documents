import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

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

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, identityContext } = await req.json();
    const systemPrompt = buildSystemPrompt(identityContext);
    const AI_API_KEY = Deno.env.get("AI_API_KEY");
    if (!AI_API_KEY) throw new Error("AI_API_KEY is not configured");

    const AI_API_URL =
      Deno.env.get("AI_API_URL") ?? "https://openrouter.ai/api/v1/chat/completions";
    const AI_MODEL = Deno.env.get("AI_MODEL") ?? "google/gemini-2.0-flash-001";

    const response = await fetch(AI_API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: AI_MODEL,
          messages: messages.some((m: any) => m.role === "system")
            ? messages
            : [{ role: "system", content: systemPrompt }, ...messages],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI quota exceeded. Please check your API billing." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
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
