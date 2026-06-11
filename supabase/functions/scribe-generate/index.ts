import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are the Scribe — a document template architect. Given a set of keywords, a document name, and optional context, you generate a structured document template with fields that would be needed to create that document.

## Output Format (strict JSON via tool call)

Return a template object with:
- name: The document title
- description: A one-sentence description of what this document does
- category: One of: Notice, Resolution, Legal, Finance, Business, HR, Custom
- fields: An array of field objects, each with:
  - id: camelCase identifier
  - label: Human-readable label
  - type: One of: text, number, date, select, currency
  - question: A conversational question the Interrogator would ask to collect this field
  - placeholder: Example input
  - options: (only for select type) array of string options
- completionMessage: What to show when the form is done

## Rules
- Generate 4-8 fields that make sense for the document type
- Questions should be conversational and clear
- Include relevant legal/business fields based on keywords
- Always include a date field and a notes/comments field
- For financial documents, include currency fields`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { keywords, name, context } = await req.json();
    const AI_API_KEY = Deno.env.get("AI_API_KEY");
    if (!AI_API_KEY) throw new Error("AI_API_KEY is not configured");

    const AI_API_URL =
      Deno.env.get("AI_API_URL") ?? "https://openrouter.ai/api/v1/chat/completions";
    const AI_MODEL = Deno.env.get("AI_MODEL") ?? "google/gemini-2.0-flash-001";

    const prompt = `Create a document template for: "${name || keywords}".
Keywords: ${Array.isArray(keywords) ? keywords.join(", ") : keywords}
${context ? `Additional context: ${context}` : ""}`;

    const response = await fetch(AI_API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: AI_MODEL,
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: prompt },
          ],
          tools: [
            {
              type: "function",
              function: {
                name: "create_template",
                description: "Create a structured document template",
                parameters: {
                  type: "object",
                  properties: {
                    name: { type: "string", description: "Document template name" },
                    description: { type: "string", description: "One-sentence description" },
                    category: {
                      type: "string",
                      enum: ["Notice", "Resolution", "Legal", "Finance", "Business", "HR", "Custom"],
                    },
                    fields: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          id: { type: "string" },
                          label: { type: "string" },
                          type: { type: "string", enum: ["text", "number", "date", "select", "currency"] },
                          question: { type: "string" },
                          placeholder: { type: "string" },
                          options: { type: "array", items: { type: "string" } },
                        },
                        required: ["id", "label", "type", "question"],
                      },
                    },
                    completionMessage: { type: "string" },
                  },
                  required: ["name", "description", "category", "fields", "completionMessage"],
                },
              },
            },
          ],
          tool_choice: { type: "function", function: { name: "create_template" } },
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

    const data = await response.json();
    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall?.function?.arguments) {
      return new Response(
        JSON.stringify({ error: "Failed to generate template structure" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const template = JSON.parse(toolCall.function.arguments);

    return new Response(JSON.stringify({ template }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("scribe-generate error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
