import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FolderOpen } from "lucide-react";
import { VAULT_FOLDER_PATHS } from "@/lib/vaultFolders";

interface SaveToVaultDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (folderPath: string, fileName: string) => void;
  defaultFileName: string;
  saving?: boolean;
}

export function SaveToVaultDialog({
  open,
  onOpenChange,
  onSave,
  defaultFileName,
  saving,
}: SaveToVaultDialogProps) {
  const [selectedFolder, setSelectedFolder] = useState("/");
  const [fileName, setFileName] = useState(defaultFileName);

  const handleSave = () => {
    onSave(selectedFolder, fileName);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FolderOpen className="w-4 h-4 text-primary" />
            Save to Vault
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="file-name">File Name</Label>
            <Input
              id="file-name"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Destination Folder</Label>
            <ScrollArea className="h-48 rounded-md border border-border">
              <div className="p-1">
                {VAULT_FOLDER_PATHS.map((folder) => (
                  <button
                    key={folder.path}
                    onClick={() => setSelectedFolder(folder.path)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      selectedFolder === folder.path
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    <span className="whitespace-pre">{folder.label}</span>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={saving}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={saving || !fileName.trim()}>
            {saving ? "Saving..." : "Save to Vault"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
