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
    const { pdfBase64, fieldValues } = await req.json();
    if (!pdfBase64 || !fieldValues) {
      return new Response(
        JSON.stringify({ error: "pdfBase64 and fieldValues are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const pdfBytes = Uint8Array.from(atob(pdfBase64), (c) => c.charCodeAt(0));
    const pdfDoc = await PDFDocument.load(pdfBytes, { ignoreEncryption: true });
    const form = pdfDoc.getForm();

    for (const [fieldName, value] of Object.entries(fieldValues)) {
      try {
        const field = form.getField(fieldName);
        const type = field.constructor.name;

        if (type === "PDFTextField") {
          (field as any).setText(String(value));
        } else if (type === "PDFCheckBox") {
          if (value === true || value === "true" || value === "yes" || value === "Yes") {
            (field as any).check();
          } else {
            (field as any).uncheck();
          }
        } else if (type === "PDFDropdown") {
          (field as any).select(String(value));
        } else if (type === "PDFRadioGroup") {
          (field as any).select(String(value));
        } else if (type === "PDFOptionList") {
          (field as any).select(String(value));
        }
      } catch (err) {
        console.warn(`Could not fill field "${fieldName}":`, err);
      }
    }

    // Flatten so fields are no longer editable
    form.flatten();
    const filledBytes = await pdfDoc.save();
    const filledBase64 = btoa(String.fromCharCode(...filledBytes));

    return new Response(
      JSON.stringify({ pdfBase64: filledBase64 }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("pdf-fill-fields error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Failed to fill PDF" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
