import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { saveTechniqueToKnowledgeVault } from "@/lib/masterVault/knowledge";
import { useAuth } from "@/contexts/AuthContext";

interface KnowledgeHarvestDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  documentContent: string;
  defaultName?: string;
  onSaved?: (result: { template?: boolean; knowledge?: boolean }) => void;
}

export function KnowledgeHarvestDialog({
  open,
  onOpenChange,
  documentContent,
  defaultName = "Interrogator Document",
  onSaved,
}: KnowledgeHarvestDialogProps) {
  const { user } = useAuth();
  const [name, setName] = useState(defaultName);
  const [saveTemplate, setSaveTemplate] = useState(true);
  const [saveKnowledge, setSaveKnowledge] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = async () => {
    if (!user) return;
    if (!saveTemplate && !saveKnowledge) {
      onOpenChange(false);
      return;
    }

    setSaving(true);
    setError(null);
    const result: { template?: boolean; knowledge?: boolean } = {};

    try {
      if (saveTemplate) {
        const { error: tplError } = await supabase.from("document_templates").insert({
          user_id: user.id,
          name: name.trim() || defaultName,
          description: documentContent.slice(0, 500),
          category: "Interrogator",
          fields: [],
          is_ai_generated: true,
          keywords: ["interrogator", "ai-generated"],
        });
        if (tplError) throw new Error(tplError.message);
        result.template = true;
      }

      if (saveKnowledge) {
        const kv = await saveTechniqueToKnowledgeVault({
          userId: user.id,
          content: documentContent,
          domain: "documents",
          tags: ["interrogator", name.trim() || defaultName],
          source: name.trim() || defaultName,
        });
        if (!kv.success) throw new Error(kv.error ?? "Knowledge vault save failed");
        result.knowledge = true;
      }

      onSaved?.(result);
      onOpenChange(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif">Harvest this document?</DialogTitle>
          <DialogDescription>
            Save to your Scribe templates and/or add the technique to PMI MasterVault knowledge.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div className="space-y-2">
            <Label htmlFor="harvest-name">Template name</Label>
            <Input
              id="harvest-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={defaultName}
            />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="save-template"
              checked={saveTemplate}
              onCheckedChange={(v) => setSaveTemplate(v === true)}
            />
            <Label htmlFor="save-template" className="text-sm font-normal cursor-pointer">
              Save as Scribe template
            </Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="save-knowledge"
              checked={saveKnowledge}
              onCheckedChange={(v) => setSaveKnowledge(v === true)}
            />
            <Label htmlFor="save-knowledge" className="text-sm font-normal cursor-pointer">
              Add to Knowledge Vault (technique)
            </Label>
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>

        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="ghost" onClick={() => onOpenChange(false)} disabled={saving}>
            Skip
          </Button>
          <Button onClick={handleSave} disabled={saving || (!saveTemplate && !saveKnowledge)}>
            {saving ? "Saving…" : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
