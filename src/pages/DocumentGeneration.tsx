import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  FileText,
  Sparkles,
  Plus,
  PenTool,
  Wand2,
  Download,
  FolderOpen,
  Trash2,
  ScrollText,
  DollarSign,
  Home,
  Gavel,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FieldWalker, fieldEncouragement } from "@/components/fields/FieldWalker";
import { ScribeTemplateChat } from "@/components/scribe/ScribeTemplateChat";
import type { WalkableField } from "@/hooks/useFieldWalker";
import { FeedbackModal } from "@/components/feedback/FeedbackModal";
import { ProcessingIndicator } from "@/components/feedback/ProcessingIndicator";
import { SaveToVaultDialog } from "@/components/vault/SaveToVaultDialog";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { exportFieldsAsPdf, formatFieldsAsText } from "@/lib/documentExport";
import { saveToVault } from "@/lib/vaultStorage";
import { awardCoins } from "@/lib/masterVault/coins";
import type { ChatMessage } from "@/hooks/useInterrogator";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface DocTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  autoFields: string[];
  isCustom?: boolean;
  isAiGenerated?: boolean;
  fields?: Array<{
    id?: string;
    name?: string;
    label: string;
    type?: string;
    options?: string[];
    placeholder?: string;
  }>;
}

interface CustomTemplateRow {
  id: string;
  name: string;
  description: string;
  category: string;
  fields: DocTemplate["fields"];
  is_ai_generated: boolean;
  keywords: string[];
}

const scribeTemplates: DocTemplate[] = [
  {
    id: "3day-pay",
    name: "3-Day Notice to Pay or Quit",
    category: "Notice",
    description: "Demand for overdue rent with a 3-day compliance window.",
    autoFields: ["Tenant Name", "Unit", "Property Address", "Amount Due", "Due Date", "Lease Date"],
  },
  {
    id: "3day-comply",
    name: "3-Day Notice to Comply or Quit",
    category: "Notice",
    description: "Notice for lease violations requiring corrective action within 3 days.",
    autoFields: ["Tenant Name", "Unit", "Property Address", "Violation Description", "Lease Clause"],
  },
  {
    id: "resolution-rent",
    name: "Resolution — Rent Delinquency",
    category: "Resolution",
    description: "Board resolution authorizing collection or legal action for unpaid rent.",
    autoFields: ["Tenant Name", "Total Owed", "Months Delinquent", "Property ID", "Resolution Date"],
  },
  {
    id: "resolution-lease",
    name: "Resolution — Lease Termination",
    category: "Resolution",
    description: "Formal resolution to terminate a lease agreement for cause.",
    autoFields: ["Tenant Name", "Unit", "Lease End Date", "Termination Reason", "Effective Date"],
  },
  {
    id: "jv-agreement",
    name: "Joint Venture Agreement",
    category: "Legal",
    description: "JV equity splits, roles, and exit clauses.",
    autoFields: ["Partner Names", "Equity Split", "Property ID", "Effective Date"],
  },
  {
    id: "invoice",
    name: "Invoice Template",
    category: "Finance",
    description: "Professional invoicing with line items and totals.",
    autoFields: ["Client Name", "Invoice Number", "Amount", "Due Date", "Line Items", "Notes"],
  },
];

const categoryIcon: Record<string, LucideIcon> = {
  Notice: Home,
  Resolution: ScrollText,
  Legal: Gavel,
  Finance: DollarSign,
  Business: FileText,
  HR: FileText,
  Custom: PenTool,
};

function autoFieldsToWalkable(fields: string[]): WalkableField[] {
  return fields.map((label) => ({
    name: label.toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, ""),
    label,
    type: "text",
    placeholder: `Enter ${label.toLowerCase()}…`,
  }));
}

function customFieldsToWalkable(fields: DocTemplate["fields"]): WalkableField[] {
  return (fields ?? []).map((f) => ({
    name: f.id || f.name || f.label.toLowerCase().replace(/\s+/g, "_"),
    label: f.label,
    type: f.type || "text",
    options: f.options,
    placeholder: f.placeholder,
  }));
}

function ScribeTemplateCard({
  template,
  onUse,
  onDelete,
}: {
  template: DocTemplate;
  onUse: () => void;
  onDelete?: () => void;
}) {
  const Icon = categoryIcon[template.category] ?? FileText;

  return (
    <Card className="border-primary/30 bg-card/90 hover:border-primary/60 hover:bg-card transition-colors flex flex-col h-full shadow-sm">
      <CardContent className="p-4 flex flex-col flex-1 gap-3">
        <div className="flex items-start justify-between gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <div className="flex items-center gap-1">
            {template.isCustom && (
              <Badge variant="outline" className="text-[10px] border-secondary/40 text-secondary">
                {template.isAiGenerated ? "AI" : "Yours"}
              </Badge>
            )}
            {onDelete && (
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); onDelete(); }}
                className="touch-target p-2 rounded-full hover:bg-destructive/10"
                aria-label="Delete template"
              >
                <Trash2 className="w-4 h-4 text-destructive" />
              </button>
            )}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <Badge variant="outline" className="text-[10px] mb-2 border-primary/20 text-muted-foreground">
            {template.category}
          </Badge>
          <h3 className="font-serif font-semibold text-foreground text-sm leading-snug">
            {template.name}
          </h3>
          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{template.description}</p>
          <p className="text-[11px] text-muted-foreground mt-2">
            {template.isCustom
              ? `${template.fields?.length ?? 0} fields`
              : `${template.autoFields.length} fields`}
          </p>
        </div>
        <Button
          className="touch-target h-12 w-full rounded-full gap-2"
          onClick={onUse}
        >
          <Sparkles className="w-4 h-4" />
          Use
        </Button>
      </CardContent>
    </Card>
  );
}

export default function DocumentGeneration() {
  const location = useLocation();
  const { user } = useAuth();

  const [step, setStep] = useState<"browse" | "fill" | "done" | "create">("browse");
  const [activeTemplate, setActiveTemplate] = useState<DocTemplate | null>(null);
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({});
  const [walkFields, setWalkFields] = useState<WalkableField[]>([]);
  const [customTemplates, setCustomTemplates] = useState<CustomTemplateRow[]>([]);
  const [createContext, setCreateContext] = useState<string | undefined>();
  const [vaultDialogOpen, setVaultDialogOpen] = useState(false);
  const [savingVault, setSavingVault] = useState(false);
  const [fillKey, setFillKey] = useState(0);
  const [feedback, setFeedback] = useState<{
    open: boolean;
    title: string;
    description?: string;
    variant?: "success" | "error" | "info";
  }>({ open: false, title: "" });

  const chatState = location.state as {
    fromChat?: boolean;
    chatTitle?: string;
    chatContext?: string;
  } | null;

  useEffect(() => {
    if (chatState?.fromChat) {
      setCreateContext(chatState.chatContext);
      setStep("create");
      window.history.replaceState({}, document.title);
    }
  }, [chatState?.fromChat]);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("document_templates")
      .select("id, name, description, category, fields, is_ai_generated, keywords")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        if (data) setCustomTemplates(data as unknown as CustomTemplateRow[]);
      });
  }, [user]);

  const userTemplates: DocTemplate[] = customTemplates.map((ct) => ({
    id: ct.id,
    name: ct.name,
    category: ct.category || "Custom",
    description: ct.description || "",
    autoFields: [],
    isCustom: true,
    isAiGenerated: ct.is_ai_generated,
    fields: ct.fields,
  }));

  const handleUseTemplate = (template: DocTemplate) => {
    const fields = template.isCustom
      ? customFieldsToWalkable(template.fields)
      : autoFieldsToWalkable(template.autoFields);

    if (!fields.length) {
      setFeedback({ open: true, title: "No fields", description: "This template has no fillable fields.", variant: "error" });
      return;
    }

    setActiveTemplate(template);
    setWalkFields(fields);
    setFillKey((k) => k + 1);
    setStep("fill");
  };

  const handleFillComplete = async (values: Record<string, string>) => {
    setFieldValues(values);
    setStep("done");

    let coinMsg = "Export as PDF or save to your Vault.";
    if (user && activeTemplate) {
      const coin = await awardCoins(user.id, "template_used", activeTemplate.id);
      if (coin.success && coin.amount) {
        coinMsg = `+${coin.amount} PMI coins. Export as PDF or save to your Vault.`;
      }
    }

    setFeedback({
      open: true,
      title: "Document complete!",
      description: coinMsg,
      variant: "success",
    });
  };

  const handleExportPdf = () => {
    if (!activeTemplate) return;
    const labels = Object.fromEntries(walkFields.map((f) => [f.name, f.label]));
    exportFieldsAsPdf(activeTemplate.name, fieldValues, labels);
  };

  const handleSaveToVault = async (folderPath: string, fileName: string) => {
    if (!activeTemplate) return;
    setSavingVault(true);
    const labels = Object.fromEntries(walkFields.map((f) => [f.name, f.label]));
    const text = formatFieldsAsText(activeTemplate.name, fieldValues, labels);
    const messages: ChatMessage[] = [
      { id: "1", role: "assistant", content: text, timestamp: new Date() },
    ];
    const result = await saveToVault(messages, folderPath, fileName, activeTemplate.name, true);
    setSavingVault(false);
    if (result.success) {
      setVaultDialogOpen(false);
      setFeedback({
        open: true,
        title: "Saved to Vault",
        description: `${fileName} saved to ${folderPath}.`,
        variant: "success",
      });
    } else {
      setFeedback({ open: true, title: "Vault save failed", description: result.error, variant: "error" });
    }
  };

  const handleDeleteTemplate = async (id: string) => {
    const { error } = await supabase.from("document_templates").delete().eq("id", id);
    if (!error) {
      setCustomTemplates((prev) => prev.filter((t) => t.id !== id));
      setFeedback({ open: true, title: "Template deleted", variant: "success" });
    }
  };

  const handleTemplateCreated = (t: CustomTemplateRow | Record<string, unknown>) => {
    setCustomTemplates((prev) => [t as CustomTemplateRow, ...prev]);
    setStep("browse");
    setCreateContext(undefined);
  };

  const handleReset = () => {
    setStep("browse");
    setActiveTemplate(null);
    setFieldValues({});
    setWalkFields([]);
  };

  if (step === "create") {
    return (
      <ScribeTemplateChat
        initialContext={createContext ?? chatState?.chatContext}
        onCancel={() => { setStep("browse"); setCreateContext(undefined); }}
        onSaved={handleTemplateCreated}
      />
    );
  }

  if (step === "fill" && activeTemplate && walkFields.length > 0) {
    return (
      <div className="flex flex-col h-full bg-background">
        <header className="flex items-center justify-between px-4 py-3 border-b border-primary/20 bg-card/60 shrink-0">
          <div>
            <h1 className="font-serif text-lg font-semibold text-foreground">{activeTemplate.name}</h1>
            <p className="text-xs text-muted-foreground">Fill each field — voice or type</p>
          </div>
          <Button variant="ghost" className="touch-target h-12" onClick={handleReset}>
            Cancel
          </Button>
        </header>
        <FieldWalker
          key={fillKey}
          fields={walkFields}
          title={activeTemplate.name}
          onComplete={handleFillComplete}
          encouragement={fieldEncouragement}
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

  if (step === "done" && activeTemplate) {
    const labels = Object.fromEntries(walkFields.map((f) => [f.name, f.label]));
    return (
      <div className="flex flex-col h-full items-center justify-center p-6 bg-background">
        <Card className="p-8 max-w-md w-full text-center border-primary/30 bg-card">
          <PenTool className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h2 className="font-serif text-xl font-semibold text-foreground mb-1">{activeTemplate.name}</h2>
          <p className="text-sm text-muted-foreground mb-6">Ready to export or archive.</p>
          <div className="text-left mb-6 max-h-48 overflow-y-auto bg-muted/50 rounded-lg p-4 border border-border text-xs space-y-1.5">
            {Object.entries(fieldValues).map(([key, val]) => (
              <div key={key} className="flex justify-between gap-4">
                <span className="text-muted-foreground">{labels[key] ?? key}</span>
                <span className="font-medium text-foreground text-right">{val || "(skipped)"}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button className="touch-target h-12 gap-2 rounded-full" onClick={handleExportPdf}>
              <Download className="w-4 h-4" /> Export PDF
            </Button>
            <Button
              variant="outline"
              className="touch-target h-12 gap-2 rounded-full border-primary/30"
              onClick={() => setVaultDialogOpen(true)}
            >
              <FolderOpen className="w-4 h-4" /> Save to Vault
            </Button>
            <Button variant="ghost" className="touch-target h-12" onClick={handleReset}>
              Back to Scribe
            </Button>
          </div>
        </Card>

        {savingVault && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4">
            <ProcessingIndicator message="Saving to Vault…" submessage={activeTemplate?.name} />
          </div>
        )}

        <SaveToVaultDialog
          open={vaultDialogOpen}
          onOpenChange={setVaultDialogOpen}
          defaultFileName={`${activeTemplate.name.slice(0, 30).replace(/[^a-zA-Z0-9 ]/g, "").trim()}.txt`}
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

  return (
    <div className="flex flex-col h-full min-w-0 max-w-full p-4 sm:p-6 gap-5 overflow-hidden bg-background">
      <header className="flex items-center justify-between shrink-0 gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center border border-primary/30">
            <PenTool className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-serif font-bold text-foreground">Scribe</h1>
            <p className="text-xs text-muted-foreground">Templates · voice fill · export</p>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button
            className="touch-target h-12 gap-2 rounded-full"
            onClick={() => setStep("create")}
          >
            <Wand2 className="w-4 h-4" /> Create New Template
          </Button>
        </div>
      </header>

      <ScrollArea className="flex-1 -mx-1 px-1">
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-4 h-4 text-primary" />
            <h2 className="font-serif text-sm font-semibold text-foreground">Built-in Templates</h2>
            <Badge variant="outline" className="text-[10px] border-primary/20">{scribeTemplates.length}</Badge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {scribeTemplates.map((tpl) => (
              <ScribeTemplateCard key={tpl.id} template={tpl} onUse={() => handleUseTemplate(tpl)} />
            ))}
          </div>
        </section>

        <Separator className="bg-primary/20 mb-8" />

        <section>
          <div className="flex items-center gap-2 mb-4">
            <Plus className="w-4 h-4 text-secondary" />
            <h2 className="font-serif text-sm font-semibold text-foreground">Your Templates</h2>
            <Badge variant="outline" className="text-[10px] border-secondary/30">{userTemplates.length}</Badge>
          </div>
          {userTemplates.length === 0 ? (
            <Card className={cn("p-8 text-center border-primary/20 bg-card/50")}>
              <p className="text-sm text-muted-foreground mb-4">No custom templates yet.</p>
              <Button className="touch-target h-12 rounded-full gap-2" onClick={() => setStep("create")}>
                <Wand2 className="w-4 h-4" /> Create with AI
              </Button>
            </Card>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {userTemplates.map((tpl) => (
                <ScribeTemplateCard
                  key={tpl.id}
                  template={tpl}
                  onUse={() => handleUseTemplate(tpl)}
                  onDelete={() => handleDeleteTemplate(tpl.id)}
                />
              ))}
            </div>
          )}
        </section>
      </ScrollArea>

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
