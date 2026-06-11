import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { PDFDocument } from "https://esm.sh/pdf-lib@1.17.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { pdfBase64 } = await req.json();
    if (!pdfBase64) {
      return new Response(
        JSON.stringify({ error: "pdfBase64 is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const pdfBytes = Uint8Array.from(atob(pdfBase64), (c) => c.charCodeAt(0));
    const pdfDoc = await PDFDocument.load(pdfBytes, { ignoreEncryption: true });
    const form = pdfDoc.getForm();
    const rawFields = form.getFields();

    const fields = rawFields.map((field) => {
      const type = field.constructor.name;
      const name = field.getName();
      const result: Record<string, unknown> = {
        name,
        label: name.replace(/[_\-\.]/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2"),
      };

      if (type === "PDFTextField") {
        result.type = "text";
      } else if (type === "PDFCheckBox") {
        result.type = "checkbox";
      } else if (type === "PDFDropdown") {
        result.type = "dropdown";
        try {
          result.options = (field as any).getOptions();
        } catch { result.options = []; }
      } else if (type === "PDFRadioGroup") {
        result.type = "radio";
        try {
          result.options = (field as any).getOptions();
        } catch { result.options = []; }
      } else if (type === "PDFOptionList") {
        result.type = "select";
        try {
          result.options = (field as any).getOptions();
        } catch { result.options = []; }
      } else {
        result.type = "text";
      }

      return result;
    });

    return new Response(
      JSON.stringify({ fields, count: fields.length }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("pdf-parse-fields error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Failed to parse PDF" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
