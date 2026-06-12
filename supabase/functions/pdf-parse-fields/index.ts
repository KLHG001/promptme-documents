import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { PDFDocument } from "https://esm.sh/pdf-lib@1.17.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const ANTHROPIC_API_URL = "https://api.anthropic.com/v1/messages";
const ANTHROPIC_MODEL = "claude-sonnet-4-6";
const ANTHROPIC_VERSION = "2023-06-01";

const CLAUDE_SYSTEM_PROMPT = `You are a PDF form analyst for PromptMe Documents. Your job is to inspect an uploaded PDF and identify every field a user must fill in.

Include ALL of the following when present:
- Names, addresses, cities, states, ZIP codes
- Dates, phone numbers, email addresses
- Account numbers, policy numbers, SSN/TIN fields
- Signature lines and initials
- Checkboxes and radio buttons
- Dropdown or selection fields (include options when visible)
- Blank lines, underscores, or labeled empty boxes

For each field provide:
- name: unique snake_case identifier (ASCII, no spaces) — use AcroForm field names when visible in the PDF structure
- label: human-readable label exactly as shown on the form
- type: one of text, checkbox, date, signature, number, dropdown, radio, select
- order: 1-based reading order (top to bottom, left to right)
- options: array of strings (only for dropdown/radio/select; omit or use empty array otherwise)

Return results ONLY via the identify_form_fields tool. Be thorough — do not skip fields.`;

const USER_PROMPT = `Analyze this PDF and identify every fillable or blank field a user needs to complete. Return all fields in reading order with clear labels.`;

const IDENTIFY_FIELDS_TOOL = {
  name: "identify_form_fields",
  description: "Return all fillable fields detected in the PDF",
  input_schema: {
    type: "object",
    properties: {
      fields: {
        type: "array",
        items: {
          type: "object",
          properties: {
            name: { type: "string" },
            label: { type: "string" },
            type: {
              type: "string",
              enum: ["text", "checkbox", "date", "signature", "number", "dropdown", "radio", "select"],
            },
            order: { type: "number" },
            options: { type: "array", items: { type: "string" } },
          },
          required: ["name", "label", "type", "order"],
        },
      },
    },
    required: ["fields"],
  },
};

type ParsedField = {
  name: string;
  label: string;
  type: string;
  order?: number;
  options?: string[];
};

function decodeBase64Pdf(pdfBase64: string): Uint8Array {
  const cleaned = pdfBase64.replace(/\s/g, "");
  console.log("[pdf-parse-fields] base64 length (raw):", pdfBase64.length);
  console.log("[pdf-parse-fields] base64 length (cleaned):", cleaned.length);
  console.log("[pdf-parse-fields] base64 prefix:", cleaned.slice(0, 32));
  console.log("[pdf-parse-fields] base64 suffix:", cleaned.slice(-16));

  if (!cleaned.length) {
    throw new Error("pdfBase64 is empty after trimming whitespace");
  }

  let binary: string;
  try {
    binary = atob(cleaned);
  } catch (e) {
    console.error("[pdf-parse-fields] atob failed:", e);
    throw new Error("Invalid base64 PDF data");
  }

  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
  console.log("[pdf-parse-fields] decoded PDF byte length:", bytes.length);
  console.log(
    "[pdf-parse-fields] PDF header:",
    String.fromCharCode(...bytes.slice(0, 5))
  );

  if (bytes.length < 5 || String.fromCharCode(...bytes.slice(0, 5)) !== "%PDF-") {
    throw new Error("Decoded data is not a valid PDF (missing %PDF- header)");
  }

  return bytes;
}

function parseAcroFormFields(pdfBytes: Uint8Array): ParsedField[] {
  console.log("[pdf-parse-fields] attempting pdf-lib AcroForm extraction…");

  const pdfDoc = PDFDocument.load(pdfBytes, { ignoreEncryption: true });
  return pdfDoc.then((doc) => {
    const form = doc.getForm();
    const rawFields = form.getFields();
    console.log("[pdf-parse-fields] pdf-lib AcroForm field count:", rawFields.length);

    return rawFields.map((field, index) => {
      const ctor = field.constructor.name;
      const name = field.getName();
      const result: ParsedField = {
        name,
        label: name.replace(/[_\-\.]/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2"),
        type: "text",
        order: index + 1,
      };

      if (ctor === "PDFTextField") {
        result.type = "text";
      } else if (ctor === "PDFCheckBox") {
        result.type = "checkbox";
      } else if (ctor === "PDFDropdown") {
        result.type = "dropdown";
        try {
          result.options = (field as { getOptions?: () => string[] }).getOptions?.() ?? [];
        } catch {
          result.options = [];
        }
      } else if (ctor === "PDFRadioGroup") {
        result.type = "radio";
        try {
          result.options = (field as { getOptions?: () => string[] }).getOptions?.() ?? [];
        } catch {
          result.options = [];
        }
      } else if (ctor === "PDFOptionList") {
        result.type = "select";
        try {
          result.options = (field as { getOptions?: () => string[] }).getOptions?.() ?? [];
        } catch {
          result.options = [];
        }
      }

      console.log("[pdf-parse-fields] AcroForm field:", JSON.stringify(result));
      return result;
    });
  });
}

async function parseWithClaude(pdfBase64: string): Promise<ParsedField[]> {
  const apiKey = Deno.env.get("ANTHROPIC_API_KEY");
  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY is not configured");
  }

  const cleanedBase64 = pdfBase64.replace(/\s/g, "");

  const requestBody = {
    model: ANTHROPIC_MODEL,
    max_tokens: 8192,
    system: CLAUDE_SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "document",
            source: {
              type: "base64",
              media_type: "application/pdf",
              data: cleanedBase64,
            },
          },
          {
            type: "text",
            text: USER_PROMPT,
          },
        ],
      },
    ],
    tools: [IDENTIFY_FIELDS_TOOL],
    tool_choice: { type: "tool", name: "identify_form_fields" },
  };

  console.log("[pdf-parse-fields] ── Anthropic request ──");
  console.log("[pdf-parse-fields] URL:", ANTHROPIC_API_URL);
  console.log("[pdf-parse-fields] model:", ANTHROPIC_MODEL);
  console.log("[pdf-parse-fields] system prompt:\n", CLAUDE_SYSTEM_PROMPT);
  console.log("[pdf-parse-fields] user prompt:", USER_PROMPT);
  console.log(
    "[pdf-parse-fields] PDF document block: base64,",
    cleanedBase64.length,
    "chars (~",
    Math.round(cleanedBase64.length * 0.75 / 1024),
    "KB decoded)"
  );
  console.log(
    "[pdf-parse-fields] request body (PDF data truncated):",
    JSON.stringify({
      ...requestBody,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "document",
              source: {
                type: "base64",
                media_type: "application/pdf",
                data: `[truncated ${cleanedBase64.length} chars]`,
              },
            },
            { type: "text", text: USER_PROMPT },
          ],
        },
      ],
    })
  );

  const response = await fetch(ANTHROPIC_API_URL, {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": ANTHROPIC_VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  const responseText = await response.text();
  console.log("[pdf-parse-fields] ── Anthropic response ──");
  console.log("[pdf-parse-fields] status:", response.status);
  console.log("[pdf-parse-fields] full response body:", responseText);

  if (!response.ok) {
    if (response.status === 429) {
      throw new Error("Rate limit exceeded. Please try again in a moment.");
    }
    throw new Error(`Anthropic API error ${response.status}: ${responseText.slice(0, 500)}`);
  }

  let data: {
    content?: Array<{ type: string; name?: string; input?: { fields?: ParsedField[] } }>;
    usage?: unknown;
  };
  try {
    data = JSON.parse(responseText);
  } catch {
    throw new Error("Failed to parse Anthropic response as JSON");
  }

  console.log("[pdf-parse-fields] token usage:", JSON.stringify(data.usage ?? null));

  const toolUse = data.content?.find(
    (block) => block.type === "tool_use" && block.name === "identify_form_fields"
  );

  if (!toolUse?.input?.fields?.length) {
    console.warn("[pdf-parse-fields] Claude returned no fields in tool_use block");
    console.log(
      "[pdf-parse-fields] content blocks:",
      JSON.stringify(data.content?.map((b) => ({ type: b.type, name: b.name })))
    );
    return [];
  }

  const fields = [...toolUse.input.fields].sort(
    (a, b) => (a.order ?? 999) - (b.order ?? 999)
  );

  console.log("[pdf-parse-fields] Claude identified", fields.length, "fields");
  fields.forEach((f, i) => {
    console.log(`[pdf-parse-fields] Claude field ${i + 1}:`, JSON.stringify(f));
  });

  return fields;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("[pdf-parse-fields] ── request received ──");
    const body = await req.json();
    const { pdfBase64 } = body;

    if (!pdfBase64 || typeof pdfBase64 !== "string") {
      console.error("[pdf-parse-fields] missing or invalid pdfBase64");
      return new Response(
        JSON.stringify({ error: "pdfBase64 is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const pdfBytes = decodeBase64Pdf(pdfBase64);

    let fields: ParsedField[] = [];
    let source: "acroform" | "claude" | "none" = "none";

    try {
      fields = await parseAcroFormFields(pdfBytes);
      if (fields.length > 0) {
        source = "acroform";
        console.log("[pdf-parse-fields] using AcroForm fields from pdf-lib");
      }
    } catch (acroErr) {
      console.warn("[pdf-parse-fields] pdf-lib AcroForm extraction failed:", acroErr);
    }

    if (fields.length === 0) {
      console.log("[pdf-parse-fields] no AcroForm fields — falling back to Claude PDF analysis");
      fields = await parseWithClaude(pdfBase64);
      source = fields.length > 0 ? "claude" : "none";
    }

    console.log("[pdf-parse-fields] ── result ──");
    console.log("[pdf-parse-fields] source:", source);
    console.log("[pdf-parse-fields] field count:", fields.length);

    return new Response(
      JSON.stringify({
        fields,
        count: fields.length,
        source,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("[pdf-parse-fields] error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Failed to parse PDF" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
