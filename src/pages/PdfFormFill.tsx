import { useState, useCallback, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Upload, FileText, Download, Save, RotateCcw, CheckCircle2, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FieldWalker, fieldEncouragement } from "@/components/fields/FieldWalker";
import type { WalkableField } from "@/hooks/useFieldWalker";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FeedbackModal } from "@/components/feedback/FeedbackModal";
import { SaveToVaultDialog } from "@/components/vault/SaveToVaultDialog";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { saveToVault } from "@/lib/vaultStorage";
import { awardCoins } from "@/lib/masterVault/coins";
import { cn } from "@/lib/utils";
import type { ChatMessage } from "@/hooks/useInterrogator";

type Stage = "upload" | "preview" | "parsing" | "fill" | "filling" | "done";

const PARSE_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/pdf-parse-fields`;
const FILL_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/pdf-fill-fields`;

interface LocationState {
  templateFields?: Array<{
    id?: string;
    name?: string;
    label?: string;
    type?: string;
    options?: string[];
    placeholder?: string;
  }>;
  templateName?: string;
}

function mapToWalkableFields(
  raw: LocationState["templateFields"] | Array<{ name: string; type: string; label: string; options?: string[] }>
): WalkableField[] {
  return (raw ?? []).map((f) => ({
    name: ("name" in f && f.name) || f.id || f.label?.toLowerCase().replace(/\s+/g, "_") || "field",
    label: f.label || f.name || "Field",
    type: f.type || "text",
    options: f.options,
    placeholder: f.placeholder,
  }));
}

export default function PdfFormFill() {
  const { user } = useAuth();
  const location = useLocation();
  const locationState = location.state as LocationState | null;

  const [stage, setStage] = useState<Stage>("upload");
  const [walkFields, setWalkFields] = useState<WalkableField[]>([]);
  const [pdfBase64, setPdfBase64] = useState("");
  const [fileName, setFileName] = useState("");
  const [filledPdfBase64, setFilledPdfBase64] = useState("");
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({});
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [vaultDialogOpen, setVaultDialogOpen] = useState(false);
  const [templateName, setTemplateName] = useState("");
  const [templateCategory, setTemplateCategory] = useState("general");
  const [saving, setSaving] = useState(false);
  const [savingVault, setSavingVault] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [isTemplateMode, setIsTemplateMode] = useState(false);
  const [feedback, setFeedback] = useState<{
    open: boolean;
    title: string;
    description?: string;
    variant?: "success" | "error" | "info";
  }>({ open: false, title: "" });
  const fillKeyRef = useRef(0);

  useEffect(() => {
    if (locationState?.templateFields?.length) {
      const mapped = mapToWalkableFields(locationState.templateFields);
      setWalkFields(mapped);
      setFileName(locationState.templateName || "Template");
      setTemplateName(locationState.templateName || "");
      setIsTemplateMode(true);
      setStage("fill");
      fillKeyRef.current += 1;
    }
  }, [locationState?.templateFields, locationState?.templateName]);

  const readFileAsBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.split(",")[1]);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const handleFile = useCallback(async (file: File) => {
    if (file.type !== "application/pdf") {
      setFeedback({ open: true, title: "PDF only", description: "Please upload a PDF file.", variant: "error" });
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      setFeedback({ open: true, title: "File too large", description: "Maximum size is 20 MB.", variant: "error" });
      return;
    }

    setFileName(file.name);
    setTemplateName(file.name.replace(/\.pdf$/i, ""));

    try {
      const base64 = await readFileAsBase64(file);
      setPdfBase64(base64);
      setStage("preview");

      setTimeout(async () => {
        setStage("parsing");
        try {
          const resp = await fetch(PARSE_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
            },
            body: JSON.stringify({ pdfBase64: base64 }),
          });

          if (!resp.ok) {
            const err = await resp.json().catch(() => ({ error: "Parse failed" }));
            throw new Error(err.error || "Failed to parse PDF");
          }

          const data = await resp.json();
          if (!data.fields?.length) {
            setFeedback({
              open: true,
              title: "No fields found",
              description: "No fillable form fields detected in this PDF.",
              variant: "error",
            });
            setStage("upload");
            return;
          }

          setWalkFields(mapToWalkableFields(data.fields));
          fillKeyRef.current += 1;
          setStage("fill");
          setFeedback({
            open: true,
            title: `${data.count} fields detected`,
            description: "Let's fill them one at a time. Voice or type — your choice.",
            variant: "success",
          });
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : "Failed to parse PDF.";
          setFeedback({ open: true, title: "Parse failed", description: message, variant: "error" });
          setStage("preview");
        }
      }, 600);
    } catch {
      setFeedback({ open: true, title: "Upload failed", description: "Could not read the file.", variant: "error" });
      setStage("upload");
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const fillPdf = useCallback(
    async (values: Record<string, string>) => {
      if (!pdfBase64) {
        setFieldValues(values);
        setStage("done");
        return;
      }
      setFieldValues(values);
      setStage("filling");
      try {
        const resp = await fetch(FILL_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ pdfBase64, fieldValues: values }),
        });

        if (!resp.ok) {
          const err = await resp.json().catch(() => ({ error: "Fill failed" }));
          throw new Error(err.error);
        }

        const data = await resp.json();
        setFilledPdfBase64(data.pdfBase64);
        setStage("done");

        let coinMsg = "Your filled PDF is ready to download or save.";
        if (user) {
          const coin = await awardCoins(user.id, "pdf_filled", fileName);
          if (coin.success && coin.amount) {
            coinMsg = `+${coin.amount} PMI coins. Your filled PDF is ready to download or save.`;
          }
        }

        setFeedback({
          open: true,
          title: "PDF ready!",
          description: coinMsg,
          variant: "success",
        });
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Failed to fill PDF.";
        setFeedback({ open: true, title: "Fill failed", description: message, variant: "error" });
        setStage("fill");
      }
    },
    [pdfBase64, user, fileName]
  );

  const handleFieldsComplete = useCallback(
    (values: Record<string, string>) => {
      if (isTemplateMode || !pdfBase64) {
        setFieldValues(values);
        setStage("done");
        setFeedback({
          open: true,
          title: "All fields complete!",
          description: "You can export or save this as a template.",
          variant: "success",
        });
      } else {
        fillPdf(values);
      }
    },
    [isTemplateMode, pdfBase64, fillPdf]
  );

  const handleDownload = () => {
    if (filledPdfBase64) {
      const link = document.createElement("a");
      link.href = `data:application/pdf;base64,${filledPdfBase64}`;
      link.download = `filled_${fileName}`;
      link.click();
      return;
    }
    const blob = new Blob([JSON.stringify(fieldValues, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${fileName.replace(/\.[^.]+$/, "")}_answers.json`;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const handleSaveTemplate = async () => {
    if (!user || !templateName.trim()) return;
    setSaving(true);

    const templateFields = walkFields.map((f) => ({
      name: f.name,
      label: f.label,
      type:
        f.type === "checkbox"
          ? "checkbox"
          : f.type === "dropdown" || f.type === "radio" || f.type === "select"
            ? "select"
            : "text",
      required: false,
      options: f.options || [],
      placeholder: f.placeholder || `Enter ${f.label.toLowerCase()}`,
    }));

    try {
      const { error } = await supabase.from("document_templates").insert({
        user_id: user.id,
        name: templateName.trim(),
        category: templateCategory,
        description: `Extracted from PDF: ${fileName}`,
        fields: templateFields,
        is_ai_generated: false,
      });

      if (error) throw error;
      setSaveDialogOpen(false);
      setFeedback({
        open: true,
        title: "Template saved",
        description: "Find it in the Scribe template library.",
        variant: "success",
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to save template.";
      setFeedback({ open: true, title: "Save failed", description: message, variant: "error" });
    } finally {
      setSaving(false);
    }
  };

  const handleSaveToVault = async (folderPath: string, vaultFileName: string) => {
    setSavingVault(true);
    const labelMap = Object.fromEntries(walkFields.map((f) => [f.name, f.label]));
    const lines = Object.entries(fieldValues)
      .map(([k, v]) => `${labelMap[k] ?? k}: ${v || "(skipped)"}`)
      .join("\n");
    const messages: ChatMessage[] = [
      {
        id: "1",
        role: "assistant",
        content: `# ${templateName || fileName}\n\n${lines}`,
        timestamp: new Date(),
      },
    ];
    const result = await saveToVault(messages, folderPath, vaultFileName, templateName || fileName, true);
    setSavingVault(false);
    if (result.success) {
      setVaultDialogOpen(false);
      setFeedback({
        open: true,
        title: "Saved to Vault",
        description: `${vaultFileName} saved to ${folderPath}.`,
        variant: "success",
      });
    } else {
      setFeedback({ open: true, title: "Vault save failed", description: result.error, variant: "error" });
    }
  };

  const handleReset = () => {
    setStage("upload");
    setWalkFields([]);
    setPdfBase64("");
    setFilledPdfBase64("");
    setFieldValues({});
    setFileName("");
    setIsTemplateMode(false);
    fillKeyRef.current += 1;
  };

  const fieldLabels = Object.fromEntries(walkFields.map((f) => [f.name, f.label]));

  return (
    <div className="flex flex-col h-full bg-background">
      <header className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-primary/20 bg-card/60 shrink-0">
        <div>
          <h1 className="text-xl font-serif font-bold text-foreground">
            {isTemplateMode ? "Voice Form Filler" : "PDF Form Filler"}
          </h1>
          <p className="text-sm text-muted-foreground">
            Upload, detect fields, fill by voice — one field at a time
          </p>
        </div>
        <div className="flex gap-2">
          {walkFields.length > 0 && stage !== "upload" && (
            <Button
              variant="outline"
              className="touch-target h-12 gap-2 rounded-full border-primary/30"
              onClick={() => setSaveDialogOpen(true)}
            >
              <Save className="w-4 h-4" /> Save as Template
            </Button>
          )}
          {stage !== "upload" && (
            <Button variant="ghost" className="touch-target h-12" onClick={handleReset}>
              <RotateCcw className="w-4 h-4 mr-1.5" /> Start Over
            </Button>
          )}
        </div>
      </header>

      {stage === "upload" && (
        <div className="flex-1 flex items-center justify-center p-6">
          <div
            className={cn(
              "w-full max-w-lg border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-colors touch-target",
              dragOver
                ? "border-primary bg-primary/10"
                : "border-primary/30 hover:border-primary/60 hover:bg-card/50"
            )}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => document.getElementById("pdf-upload-input")?.click()}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && document.getElementById("pdf-upload-input")?.click()}
          >
            <Upload className="w-14 h-14 mx-auto mb-4 text-primary" />
            <p className="text-lg font-serif font-medium text-foreground mb-1">
              Drop your PDF here
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              or tap to upload — fillable PDFs only
            </p>
            <input
              id="pdf-upload-input"
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={handleInputChange}
            />
          </div>
        </div>
      )}

      {(stage === "preview" || stage === "parsing") && pdfBase64 && (
        <div className="flex-1 flex flex-col p-4 sm:p-6 gap-4 max-w-3xl mx-auto w-full">
          <Card className="overflow-hidden border-primary/30 bg-card">
            <iframe
              title="PDF preview"
              src={`data:application/pdf;base64,${pdfBase64}`}
              className="w-full h-64 sm:h-80 border-0"
            />
          </Card>
          {stage === "parsing" && (
            <Card className="p-6 text-center border-primary/30">
              <FileText className="w-10 h-10 mx-auto mb-3 text-primary animate-pulse" />
              <p className="font-serif font-medium text-foreground">Detecting form fields…</p>
              <p className="text-sm text-muted-foreground mt-1">{fileName}</p>
            </Card>
          )}
        </div>
      )}

      {stage === "fill" && walkFields.length > 0 && (
        <div className="flex-1 flex flex-col min-h-0">
          {pdfBase64 && !isTemplateMode && (
            <div className="px-4 pt-3 shrink-0 max-w-3xl mx-auto w-full">
              <iframe
                title="PDF preview"
                src={`data:application/pdf;base64,${pdfBase64}`}
                className="w-full h-32 rounded-lg border border-primary/30"
              />
            </div>
          )}
          <FieldWalker
            key={fillKeyRef.current}
            fields={walkFields}
            title={fileName}
            onComplete={handleFieldsComplete}
            encouragement={fieldEncouragement}
          />
        </div>
      )}

      {stage === "filling" && (
        <div className="flex-1 flex items-center justify-center p-6">
          <Card className="p-8 text-center max-w-sm border-primary/30">
            <FileText className="w-10 h-10 mx-auto mb-3 text-primary animate-pulse" />
            <p className="font-serif font-medium text-foreground">Generating your filled PDF…</p>
          </Card>
        </div>
      )}

      {stage === "done" && (
        <div className="flex-1 flex items-center justify-center p-6">
          <Card className="p-8 text-center max-w-md w-full border-primary/30 bg-card">
            <CheckCircle2 className="w-14 h-14 mx-auto mb-4 text-primary" />
            <p className="text-lg font-serif font-medium text-foreground mb-2">
              {filledPdfBase64 ? "PDF Ready!" : "Form Complete!"}
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Download your document or save it to the Vault.
            </p>
            <div className="text-left mb-6 max-h-48 overflow-y-auto bg-muted/50 rounded-lg p-4 border border-border">
              {Object.entries(fieldValues).map(([key, val]) => (
                <div key={key} className="flex justify-between text-xs py-1.5 border-b border-border last:border-0 gap-4">
                  <span className="text-muted-foreground shrink-0">{fieldLabels[key] ?? key}</span>
                  <span className="font-medium text-foreground text-right">{val || "(skipped)"}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button className="touch-target h-12 gap-2 rounded-full" onClick={handleDownload}>
                <Download className="w-4 h-4" />
                {filledPdfBase64 ? "Download PDF" : "Download Answers"}
              </Button>
              <Button
                variant="outline"
                className="touch-target h-12 gap-2 rounded-full border-primary/30"
                onClick={() => setVaultDialogOpen(true)}
              >
                <FolderOpen className="w-4 h-4" /> Save to Vault
              </Button>
              <Button
                variant="outline"
                className="touch-target h-12 gap-2 rounded-full"
                onClick={() => setSaveDialogOpen(true)}
              >
                <Save className="w-4 h-4" /> Save as Template
              </Button>
            </div>
          </Card>
        </div>
      )}

      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-serif">Save as Reusable Template</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label>Template Name</Label>
              <Input
                value={templateName}
                onChange={(e) => setTemplateName(e.target.value)}
                placeholder="e.g. W-9 Tax Form"
                className="touch-target h-12"
              />
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <Select value={templateCategory} onValueChange={setTemplateCategory}>
                <SelectTrigger className="touch-target h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General</SelectItem>
                  <SelectItem value="legal">Legal</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="hr">HR / Employment</SelectItem>
                  <SelectItem value="real-estate">Real Estate</SelectItem>
                  <SelectItem value="compliance">Compliance</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <p className="text-xs text-muted-foreground">
              {walkFields.length} fields will be saved to the Scribe library.
            </p>
          </div>
          <DialogFooter>
            <Button variant="ghost" className="touch-target h-12" onClick={() => setSaveDialogOpen(false)}>
              Cancel
            </Button>
            <Button className="touch-target h-12" onClick={handleSaveTemplate} disabled={saving || !templateName.trim()}>
              {saving ? "Saving…" : "Save Template"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <SaveToVaultDialog
        open={vaultDialogOpen}
        onOpenChange={setVaultDialogOpen}
        defaultFileName={`${(templateName || fileName).replace(/\.[^.]+$/, "")}.txt`}
        onSave={handleSaveToVault}
        saving={savingVault}
      />

      <FeedbackModal
        open={feedback.open}
        onOpenChange={(open) => setFeedback((f) => ({ ...f, open }))}
        title={feedback.title}
        description={feedback.description}
        variant={feedback.variant}
      />
    </div>
  );
}
