import { BookMarked, FolderOpen, Printer, ScrollText, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DocumentActionsProps {
  onSaveVault: () => void;
  onExportPdf: () => void;
  onEditScribe: () => void;
  onSend: () => void;
  onHarvest?: () => void;
}

export function DocumentActions({
  onSaveVault,
  onExportPdf,
  onEditScribe,
  onSend,
  onHarvest,
}: DocumentActionsProps) {
  return (
    <div className="px-4 py-3 border-t border-border bg-card/80">
      <div className="max-w-2xl mx-auto flex flex-wrap gap-2 justify-center">
        <Button
          variant="default"
          className="touch-target h-12 gap-2 rounded-full"
          onClick={onSaveVault}
        >
          <FolderOpen className="h-4 w-4" />
          Save to Vault
        </Button>
        <Button
          variant="outline"
          className="touch-target h-12 gap-2 rounded-full border-primary/40"
          onClick={onExportPdf}
        >
          <Printer className="h-4 w-4" />
          Export as PDF
        </Button>
        {onHarvest && (
          <Button
            variant="outline"
            className="touch-target h-12 gap-2 rounded-full border-secondary/40"
            onClick={onHarvest}
          >
            <BookMarked className="h-4 w-4" />
            Harvest
          </Button>
        )}
        <Button
          variant="outline"
          className="touch-target h-12 gap-2 rounded-full border-secondary/40"
          onClick={onEditScribe}
        >
          <ScrollText className="h-4 w-4" />
          Edit in Scribe
        </Button>
        <Button
          variant="ghost"
          className="touch-target h-12 gap-2 rounded-full text-muted-foreground"
          onClick={onSend}
        >
          <Send className="h-4 w-4" />
          Send
        </Button>
      </div>
    </div>
  );
}
