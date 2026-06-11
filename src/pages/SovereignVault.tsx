import { useState, useEffect, useCallback, useRef } from "react";
import {
  Shield, Search, Upload, Folder, ChevronRight, ChevronDown,
  FileText, Home as HomeIcon, Building2, HardHat, Receipt, Wrench,
  ShieldCheck, Zap, Droplets, Flame as FlameIcon, Users, ClipboardList,
  FileSignature, Download, MoreVertical, Image, FileType, Pencil, Trash2,
  FolderInput,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { FeedbackModal } from "@/components/feedback/FeedbackModal";
import { ProcessingIndicator } from "@/components/feedback/ProcessingIndicator";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import {
  downloadVaultFile,
  uploadVaultFile,
  deleteVaultFile,
  renameVaultFile,
  moveVaultFile,
} from "@/lib/vaultStorage";
import { VAULT_FOLDER_PATHS } from "@/lib/vaultFolders";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface VaultFile {
  id: string;
  name: string;
  type: string;
  date: string;
  status: string;
  size?: string;
  file_path?: string;
  mime_type?: string | null;
  isStatic?: boolean;
}

interface VaultFolder {
  id: string;
  name: string;
  icon: LucideIcon;
  children?: VaultFolder[];
  files?: VaultFile[];
}

const vaultTree: VaultFolder[] = [
  {
    id: "prop-1",
    name: "4B Elm Street — Unit 4B",
    icon: Building2,
    children: [
      {
        id: "prop-1-acq", name: "Acquisitions", icon: FileSignature,
        children: [
          { id: "prop-1-acq-offers", name: "Offers & Contracts", icon: ClipboardList, files: [
            { id: "f1", name: "Purchase Agreement — 4B Elm", type: "Legal", date: "2024-03-10", status: "signed", isStatic: true },
          ]},
          { id: "prop-1-acq-closing", name: "Closing Documents", icon: FileText, files: [] },
        ],
      },
      { id: "prop-1-ins", name: "Insurance", icon: ShieldCheck, files: [] },
      {
        id: "prop-1-pm", name: "Property Management", icon: Wrench,
        children: [
          { id: "prop-1-pm-leases", name: "Leases", icon: FileText, files: [] },
          { id: "prop-1-pm-const", name: "Construction", icon: HardHat, children: [
            { id: "prop-1-pm-const-rec", name: "Receipts", icon: Receipt, files: [] },
          ]},
        ],
      },
    ],
  },
  {
    id: "prop-2",
    name: "1200 N Charles — Project Alpha",
    icon: Building2,
    children: [
      { id: "prop-2-acq", name: "Acquisitions", icon: FileSignature, files: [] },
      { id: "prop-2-pm", name: "Property Management", icon: Wrench, children: [
        { id: "prop-2-pm-leases", name: "Leases", icon: FileText, files: [] },
      ]},
    ],
  },
];

function findFolder(tree: VaultFolder[], id: string): VaultFolder | null {
  for (const node of tree) {
    if (node.id === id) return node;
    if (node.children) {
      const found = findFolder(node.children, id);
      if (found) return found;
    }
  }
  return null;
}

function buildBreadcrumb(tree: VaultFolder[], targetId: string, path: VaultFolder[] = []): VaultFolder[] | null {
  for (const node of tree) {
    const next = [...path, node];
    if (node.id === targetId) return next;
    if (node.children) {
      const found = buildBreadcrumb(node.children, targetId, next);
      if (found) return found;
    }
  }
  return null;
}

function getFolderPath(tree: VaultFolder[], folderId: string | null): string {
  if (!folderId) return "/";
  const crumbs = buildBreadcrumb(tree, folderId);
  if (!crumbs) return "/";
  return "/" + crumbs.map((c) => c.name).join("/");
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1048576).toFixed(1)} MB`;
}

function fileTypeIcon(file: VaultFile): LucideIcon {
  const mime = file.mime_type ?? "";
  const name = file.name.toLowerCase();
  if (mime.startsWith("image/") || /\.(png|jpe?g|gif|webp)$/.test(name)) return Image;
  if (mime === "application/pdf" || name.endsWith(".pdf") || file.type === "PDF") return FileType;
  return FileText;
}

function FolderTreeNode({
  folder,
  depth,
  selectedId,
  expandedIds,
  onToggle,
  onSelect,
}: {
  folder: VaultFolder;
  depth: number;
  selectedId: string | null;
  expandedIds: Set<string>;
  onToggle: (id: string) => void;
  onSelect: (id: string) => void;
}) {
  const Icon = folder.icon;
  const hasChildren = (folder.children?.length ?? 0) > 0;
  const isExpanded = expandedIds.has(folder.id);
  const isSelected = selectedId === folder.id;

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          onSelect(folder.id);
          if (hasChildren) onToggle(folder.id);
        }}
        className={cn(
          "w-full flex items-center gap-1.5 py-2 pr-2 rounded-lg text-left touch-target min-h-12 transition-colors",
          isSelected ? "bg-primary/15 text-primary" : "hover:bg-muted/60 text-foreground"
        )}
        style={{ paddingLeft: `${8 + depth * 12}px` }}
      >
        {hasChildren ? (
          isExpanded ? <ChevronDown className="w-4 h-4 shrink-0 text-muted-foreground" /> : <ChevronRight className="w-4 h-4 shrink-0 text-muted-foreground" />
        ) : (
          <span className="w-4 shrink-0" />
        )}
        <Icon className="w-4 h-4 shrink-0" />
        <span className="text-xs font-medium truncate">{folder.name}</span>
      </button>
      {hasChildren && isExpanded && (
        <div>
          {folder.children!.map((child) => (
            <FolderTreeNode
              key={child.id}
              folder={child}
              depth={depth + 1}
              selectedId={selectedId}
              expandedIds={expandedIds}
              onToggle={onToggle}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function FileCard({
  file,
  onOpen,
  onAction,
}: {
  file: VaultFile;
  onOpen: () => void;
  onAction: (action: "download" | "rename" | "move" | "delete") => void;
}) {
  const Icon = fileTypeIcon(file);

  return (
    <Card
      className="border-primary/30 bg-card/90 hover:border-primary/50 transition-colors cursor-pointer group"
      onClick={onOpen}
    >
      <CardContent className="p-4 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          {!file.isStatic && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="touch-target h-10 w-10 opacity-70 group-hover:opacity-100"
                  aria-label="File actions"
                >
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="touch-target cursor-pointer" onClick={(e) => { e.stopPropagation(); onAction("download"); }}>
                  <Download className="mr-2 h-4 w-4" /> Download
                </DropdownMenuItem>
                <DropdownMenuItem className="touch-target cursor-pointer" onClick={(e) => { e.stopPropagation(); onAction("rename"); }}>
                  <Pencil className="mr-2 h-4 w-4" /> Rename
                </DropdownMenuItem>
                <DropdownMenuItem className="touch-target cursor-pointer" onClick={(e) => { e.stopPropagation(); onAction("move"); }}>
                  <FolderInput className="mr-2 h-4 w-4" /> Move
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="touch-target cursor-pointer text-destructive focus:text-destructive"
                  onClick={(e) => { e.stopPropagation(); onAction("delete"); }}
                >
                  <Trash2 className="mr-2 h-4 w-4" /> Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
        <div className="min-w-0">
          <p className="font-medium text-sm text-foreground truncate">{file.name}</p>
          <p className="text-[11px] text-muted-foreground mt-1">
            {file.type} · {file.date}{file.size ? ` · ${file.size}` : ""}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function SovereignVault() {
  const { user } = useAuth();
  const [currentFolderId, setCurrentFolderId] = useState<string | null>(null);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(["prop-1", "prop-2"]));
  const [search, setSearch] = useState("");
  const [dbFiles, setDbFiles] = useState<VaultFile[]>([]);
  const [allDbFiles, setAllDbFiles] = useState<VaultFile[]>([]);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [uploadingName, setUploadingName] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [previewFile, setPreviewFile] = useState<VaultFile | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [actionFile, setActionFile] = useState<VaultFile | null>(null);
  const [renameValue, setRenameValue] = useState("");
  const [movePath, setMovePath] = useState("/");
  const [modal, setModal] = useState<"rename" | "move" | "delete" | null>(null);
  const [feedback, setFeedback] = useState<{
    open: boolean;
    title: string;
    description?: string;
    variant?: "success" | "error" | "info";
  }>({ open: false, title: "" });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentFolderPath = getFolderPath(vaultTree, currentFolderId);
  const currentFolder = currentFolderId ? findFolder(vaultTree, currentFolderId) : null;
  const staticFiles = currentFolder?.files ?? [];

  const loadFiles = useCallback(async () => {
    if (!user) return;

    const { data: folderData } = await supabase
      .from("vault_documents")
      .select("*")
      .eq("user_id", user.id)
      .eq("folder_path", currentFolderPath)
      .order("created_at", { ascending: false });

    if (folderData) {
      setDbFiles(
        folderData.map((doc) => ({
          id: doc.id,
          name: doc.name,
          type: doc.type,
          date: new Date(doc.created_at).toLocaleDateString("en-US"),
          status: doc.status,
          size: doc.size ? formatBytes(doc.size) : undefined,
          file_path: doc.file_path,
          mime_type: doc.mime_type,
        }))
      );
    }

    const { data: allData } = await supabase
      .from("vault_documents")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (allData) {
      setAllDbFiles(
        allData.map((doc) => ({
          id: doc.id,
          name: doc.name,
          type: doc.type,
          date: new Date(doc.created_at).toLocaleDateString("en-US"),
          status: doc.status,
          size: doc.size ? formatBytes(doc.size) : undefined,
          file_path: doc.file_path,
          mime_type: doc.mime_type,
        }))
      );
    }
  }, [user, currentFolderPath]);

  useEffect(() => {
    loadFiles();
  }, [loadFiles]);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleUpload = async (fileList: FileList | null) => {
    if (!fileList?.length) return;
    const file = fileList[0];
    setUploadingName(file.name);
    setUploadProgress(5);

    const timeout = new Promise<{ success: false; error: string }>((resolve) => {
      window.setTimeout(
        () => resolve({ success: false, error: "Upload timed out — try again or use a smaller file." }),
        30_000
      );
    });

    const result = await Promise.race([
      uploadVaultFile(file, currentFolderPath, setUploadProgress),
      timeout,
    ]);

    setUploadProgress(null);
    setUploadingName(null);

    if (result.success) {
      await loadFiles();
      setFeedback({ open: true, title: "Uploaded", description: file.name, variant: "success" });
    } else {
      setFeedback({
        open: true,
        title: "Upload failed",
        description: result.error ?? "Try again or use a smaller file.",
        variant: "error",
      });
    }

    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleUpload(e.dataTransfer.files);
  };

  const openPreview = async (file: VaultFile) => {
    if (!file.file_path) {
      setFeedback({ open: true, title: "Preview unavailable", description: "This is a sample file.", variant: "info" });
      return;
    }
    setPreviewFile(file);
    const { data } = await supabase.storage.from("vault_documents").download(file.file_path);
    if (data) {
      const url = URL.createObjectURL(data);
      setPreviewUrl(url);
    }
  };

  const closePreview = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewFile(null);
    setPreviewUrl(null);
  };

  const handleFileAction = (file: VaultFile, action: "download" | "rename" | "move" | "delete") => {
    if (action === "download" && file.file_path) {
      downloadVaultFile(file.file_path, file.name);
      return;
    }
    setActionFile(file);
    setRenameValue(file.name);
    setMovePath(currentFolderPath);
    setModal(action);
  };

  const confirmDelete = async () => {
    if (!actionFile?.file_path) return;
    const result = await deleteVaultFile(actionFile.id, actionFile.file_path);
    setModal(null);
    setActionFile(null);
    if (result.success) {
      await loadFiles();
      setFeedback({ open: true, title: "Deleted", variant: "success" });
    } else {
      setFeedback({ open: true, title: "Delete failed", description: result.error, variant: "error" });
    }
  };

  const confirmRename = async () => {
    if (!actionFile || !renameValue.trim()) return;
    const result = await renameVaultFile(actionFile.id, renameValue.trim());
    setModal(null);
    setActionFile(null);
    if (result.success) {
      await loadFiles();
      setFeedback({ open: true, title: "Renamed", variant: "success" });
    } else {
      setFeedback({ open: true, title: "Rename failed", description: result.error, variant: "error" });
    }
  };

  const confirmMove = async () => {
    if (!actionFile) return;
    const result = await moveVaultFile(actionFile.id, movePath);
    setModal(null);
    setActionFile(null);
    if (result.success) {
      await loadFiles();
      setFeedback({ open: true, title: "Moved", description: movePath, variant: "success" });
    } else {
      setFeedback({ open: true, title: "Move failed", description: result.error, variant: "error" });
    }
  };

  const allFiles = [...staticFiles, ...dbFiles];
  const searchSource = search.trim() ? [...staticFiles, ...allDbFiles] : allFiles;
  const filteredFiles = search
    ? searchSource.filter((f) => f.name.toLowerCase().includes(search.toLowerCase()))
    : allFiles;

  return (
    <div className="flex h-full min-w-0 max-w-full overflow-hidden bg-background">
      {/* Folder tree */}
      <aside className="hidden md:flex w-56 lg:w-64 flex-col border-r border-primary/20 bg-card/40 shrink-0">
        <div className="p-3 border-b border-primary/20">
          <button
            type="button"
            onClick={() => setCurrentFolderId(null)}
            className={cn(
              "w-full flex items-center gap-2 touch-target min-h-12 px-2 rounded-lg text-sm font-medium",
              currentFolderId === null ? "bg-primary/15 text-primary" : "hover:bg-muted/60"
            )}
          >
            <HomeIcon className="w-4 h-4" />
            Vault Root
          </button>
        </div>
        <ScrollArea className="flex-1 p-2">
          {vaultTree.map((folder) => (
            <FolderTreeNode
              key={folder.id}
              folder={folder}
              depth={0}
              selectedId={currentFolderId}
              expandedIds={expandedIds}
              onToggle={toggleExpand}
              onSelect={setCurrentFolderId}
            />
          ))}
        </ScrollArea>
      </aside>

      {/* Main panel */}
      <div className="flex-1 flex flex-col min-w-0 p-4 sm:p-6 gap-4 overflow-hidden">
        <header className="flex items-center justify-between shrink-0 gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center border border-primary/30">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold text-foreground">Sovereign Vault</h1>
              <p className="text-xs text-muted-foreground truncate max-w-[200px] sm:max-w-none">
                {currentFolderPath === "/" ? "All properties" : currentFolderPath}
              </p>
            </div>
          </div>
          <Button
            className="touch-target h-12 gap-2 rounded-full"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="w-4 h-4" /> Upload
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={(e) => handleUpload(e.target.files)}
          />
        </header>

        <div className="relative shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search files by name…"
            className="pl-10 touch-target h-12 border-primary/30 bg-card"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {uploadProgress !== null && (
          <ProcessingIndicator
            compact
            message="Uploading to Vault…"
            submessage={uploadingName ?? undefined}
            progress={uploadProgress}
          />
        )}

        <div
          className={cn(
            "shrink-0 border-2 border-dashed rounded-xl p-4 text-center transition-colors",
            dragOver ? "border-primary bg-primary/10" : "border-primary/20 hover:border-primary/40"
          )}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          role="button"
          tabIndex={0}
        >
          <Upload className="w-6 h-6 mx-auto mb-1 text-primary" />
          <p className="text-xs text-muted-foreground">Drop files here or tap to upload to this folder</p>
        </div>

        <ScrollArea className="flex-1 -mx-1 px-1">
          {filteredFiles.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Folder className="w-12 h-12 text-muted-foreground/30 mb-3" />
              <p className="text-sm text-muted-foreground">
                {search ? "No matching files" : "No files in this folder yet"}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
              {filteredFiles.map((file) => (
                <FileCard
                  key={file.id}
                  file={file}
                  onOpen={() => openPreview(file)}
                  onAction={(action) => handleFileAction(file, action)}
                />
              ))}
            </div>
          )}
        </ScrollArea>
      </div>

      {/* Preview dialog */}
      <Dialog open={!!previewFile} onOpenChange={(open) => !open && closePreview()}>
        <DialogContent className="max-w-2xl max-h-[85vh]">
          <DialogHeader>
            <DialogTitle className="font-serif truncate pr-8">{previewFile?.name}</DialogTitle>
          </DialogHeader>
          {previewUrl && previewFile?.mime_type?.startsWith("image/") && (
            <img src={previewUrl} alt={previewFile.name} className="max-h-[60vh] w-full object-contain rounded-lg" />
          )}
          {previewUrl && previewFile?.mime_type === "application/pdf" && (
            <iframe title="Preview" src={previewUrl} className="w-full h-[60vh] rounded-lg border border-primary/20" />
          )}
          {previewUrl && !previewFile?.mime_type?.startsWith("image/") && previewFile?.mime_type !== "application/pdf" && (
            <p className="text-sm text-muted-foreground py-8 text-center">Preview not available for this file type.</p>
          )}
          <DialogFooter className="gap-2">
            {previewFile?.file_path && (
              <Button
                className="touch-target h-12 rounded-full gap-2"
                onClick={() => downloadVaultFile(previewFile.file_path!, previewFile.name)}
              >
                <Download className="w-4 h-4" /> Download
              </Button>
            )}
            <Button variant="ghost" className="touch-target h-12" onClick={closePreview}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Rename */}
      <Dialog open={modal === "rename"} onOpenChange={(o) => !o && setModal(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle className="font-serif">Rename file</DialogTitle></DialogHeader>
          <Label htmlFor="rename">File name</Label>
          <Input id="rename" value={renameValue} onChange={(e) => setRenameValue(e.target.value)} className="touch-target h-12 mt-2" />
          <DialogFooter className="gap-2 mt-4">
            <Button variant="ghost" className="touch-target h-12" onClick={() => setModal(null)}>Cancel</Button>
            <Button className="touch-target h-12 rounded-full" onClick={confirmRename}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Move */}
      <Dialog open={modal === "move"} onOpenChange={(o) => !o && setModal(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle className="font-serif">Move file</DialogTitle></DialogHeader>
          <ScrollArea className="h-48 rounded-md border border-primary/20 mt-2">
            <div className="p-1">
              {VAULT_FOLDER_PATHS.map((folder) => (
                <button
                  key={folder.path}
                  type="button"
                  onClick={() => setMovePath(folder.path)}
                  className={cn(
                    "w-full text-left px-3 py-2 rounded-md text-sm touch-target min-h-12",
                    movePath === folder.path ? "bg-primary/15 text-primary font-medium" : "hover:bg-muted/60"
                  )}
                >
                  <span className="whitespace-pre font-mono text-xs">{folder.label}</span>
                </button>
              ))}
            </div>
          </ScrollArea>
          <DialogFooter className="gap-2 mt-4">
            <Button variant="ghost" className="touch-target h-12" onClick={() => setModal(null)}>Cancel</Button>
            <Button className="touch-target h-12 rounded-full" onClick={confirmMove}>Move</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete confirmation */}
      <FeedbackModal
        open={modal === "delete"}
        onOpenChange={(open) => !open && setModal(null)}
        title="Delete this file?"
        description={`"${actionFile?.name}" will be permanently removed from your Vault.`}
        variant="error"
        confirmLabel="Delete"
        showCancel
        cancelLabel="Keep file"
        onConfirm={confirmDelete}
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
