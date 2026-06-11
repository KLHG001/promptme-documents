import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { SaveToVaultDialog } from "@/components/vault/SaveToVaultDialog";
import { ChatWindow } from "@/components/interrogator/ChatWindow";
import { FeedbackModal } from "@/components/feedback/FeedbackModal";
import { exportAsText, exportAsPdf, exportDocumentAsText, exportDocumentAsPdf } from "@/lib/chatExport";
import { saveToVault } from "@/lib/vaultStorage";
import type { ChatMessage } from "@/hooks/useInterrogator";
import {
  History,
  MessageSquare,
  Download,
  Printer,
  FileText,
  FolderOpen,
  Loader2,
  MessagesSquare,
  Pencil,
  ScrollText,
  X,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SessionSummary {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
  message_count: number;
}

interface SessionWithMessages {
  id: string;
  title: string;
  messages: ChatMessage[];
}

export default function ChatHistory() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [sessions, setSessions] = useState<SessionSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [vaultDialogOpen, setVaultDialogOpen] = useState(false);
  const [vaultDocOnly, setVaultDocOnly] = useState(false);
  const [saving, setSaving] = useState(false);
  const [selectedSession, setSelectedSession] = useState<SessionWithMessages | null>(null);
  const [renamingId, setRenamingId] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState("");
  const [viewingSession, setViewingSession] = useState<SessionWithMessages | null>(null);
  const [loadingView, setLoadingView] = useState(false);
  const [feedback, setFeedback] = useState<{
    open: boolean;
    title: string;
    description?: string;
    variant?: "success" | "error" | "info";
  }>({ open: false, title: "" });

  useEffect(() => {
    if (!user) return;
    (async () => {
      const { data } = await supabase
        .from("chat_sessions")
        .select("id, title, status, created_at, updated_at, messages")
        .eq("user_id", user.id)
        .order("updated_at", { ascending: false });

      if (data) {
        setSessions(
          data.map((s: any) => ({
            id: s.id,
            title: s.title || "Untitled",
            status: s.status,
            created_at: s.created_at,
            updated_at: s.updated_at,
            message_count: Array.isArray(s.messages) ? s.messages.length : 0,
          }))
        );
      }
      setLoading(false);
    })();
  }, [user]);

  const loadSessionMessages = async (sessionId: string): Promise<SessionWithMessages | null> => {
    const { data } = await supabase
      .from("chat_sessions")
      .select("id, title, messages")
      .eq("id", sessionId)
      .single();

    if (!data) return null;

    const msgs = (data.messages as any[]).map((m: any) => ({
      ...m,
      timestamp: new Date(m.timestamp),
    }));

    return { id: data.id, title: data.title || "Chat Export", messages: msgs };
  };

  const handleExportDocPdf = async (sessionId: string) => {
    const session = await loadSessionMessages(sessionId);
    if (session) exportDocumentAsPdf(session.messages, session.title);
  };

  const handleExportDocText = async (sessionId: string) => {
    const session = await loadSessionMessages(sessionId);
    if (session) exportDocumentAsText(session.messages, session.title);
  };

  const handleExportChatPdf = async (sessionId: string) => {
    const session = await loadSessionMessages(sessionId);
    if (session) exportAsPdf(session.messages, session.title);
  };

  const handleExportChatText = async (sessionId: string) => {
    const session = await loadSessionMessages(sessionId);
    if (session) exportAsText(session.messages, session.title);
  };

  const handleOpenVaultDialog = async (sessionId: string, documentOnly: boolean) => {
    const session = await loadSessionMessages(sessionId);
    if (session) {
      setSelectedSession(session);
      setVaultDocOnly(documentOnly);
      setVaultDialogOpen(true);
    }
  };

  const handleSendToScribe = async (sessionId: string) => {
    const session = await loadSessionMessages(sessionId);
    if (!session) return;
    const chatContext = session.messages
      .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
      .join("\n\n");
    navigate("/document-gen", {
      state: {
        fromChat: true,
        chatSessionId: session.id,
        chatTitle: session.title,
        chatContext,
      },
    });
  };

  const handleSaveToVault = async (folderPath: string, fileName: string) => {
    if (!selectedSession) return;
    setSaving(true);
    const result = await saveToVault(selectedSession.messages, folderPath, fileName, selectedSession.title, vaultDocOnly);
    setSaving(false);
    if (result.success) {
      setVaultDialogOpen(false);
      setSelectedSession(null);
      setFeedback({
        open: true,
        title: "Saved to Vault",
        description: `${fileName} saved to ${folderPath}.`,
        variant: "success",
      });
    } else {
      setFeedback({
        open: true,
        title: "Couldn't save",
        description: result.error,
        variant: "error",
      });
    }
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleStartRename = (session: SessionSummary) => {
    setRenamingId(session.id);
    setRenameValue(session.title);
  };

  const handleConfirmRename = async () => {
    if (!renamingId || !renameValue.trim()) return;
    const { error } = await supabase
      .from("chat_sessions")
      .update({ title: renameValue.trim() })
      .eq("id", renamingId);
    if (error) {
      setFeedback({ open: true, title: "Couldn't rename", description: error.message, variant: "error" });
    } else {
      setSessions((prev) =>
        prev.map((s) => (s.id === renamingId ? { ...s, title: renameValue.trim() } : s))
      );
      setFeedback({ open: true, title: "Renamed", variant: "success" });
    }
    setRenamingId(null);
  };

  return (
    <div className="flex flex-col h-full min-w-0 max-w-full overflow-x-hidden">
      <div className="px-4 py-3 border-b border-border bg-primary/5 flex items-center gap-3">
        <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
        <History className="w-5 h-5 text-primary" />
        <div>
          <h2 className="text-sm font-serif font-semibold text-foreground">Chat History</h2>
          <p className="text-xs text-muted-foreground">Browse and export past conversations</p>
        </div>
      </div>

      {viewingSession && (
        <div className="flex flex-col flex-1 min-h-0 border-b border-border">
          <div className="flex items-center justify-between px-4 py-2 bg-card/60 border-b border-border">
            <h3 className="font-serif text-sm font-semibold truncate">{viewingSession.title}</h3>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="touch-target h-10"
                onClick={() => navigate("/chat")}
              >
                New chat
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="touch-target"
                onClick={() => setViewingSession(null)}
                aria-label="Close session"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <ChatWindow messages={viewingSession.messages} isTyping={false} showAvatars={false} />
        </div>
      )}

      <ScrollArea className={viewingSession ? "h-48 shrink-0" : "flex-1"}>
        <div className="p-4 max-w-3xl mx-auto w-full min-w-0 space-y-3">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
            </div>
          ) : sessions.length === 0 ? (
            <div className="text-center py-20">
              <MessageSquare className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">No chat sessions yet.</p>
              <Button variant="outline" size="sm" className="mt-3" onClick={() => navigate("/chat")}>
                Start a conversation
              </Button>
            </div>
          ) : (
            sessions.map((session) => (
              <Card key={session.id} className="p-4 flex items-center justify-between gap-3 hover:bg-accent/30 transition-colors">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {renamingId === session.id ? (
                      <form
                        className="flex items-center gap-1.5 flex-1 min-w-0"
                        onSubmit={(e) => { e.preventDefault(); handleConfirmRename(); }}
                      >
                        <Input
                          value={renameValue}
                          onChange={(e) => setRenameValue(e.target.value)}
                          className="h-7 text-sm"
                          autoFocus
                          onBlur={handleConfirmRename}
                          onKeyDown={(e) => { if (e.key === "Escape") setRenamingId(null); }}
                        />
                      </form>
                    ) : (
                      <>
                        <p className="text-sm font-medium text-foreground truncate">{session.title}</p>
                        <button
                          onClick={() => handleStartRename(session)}
                          className="text-muted-foreground hover:text-foreground shrink-0"
                          title="Rename"
                        >
                          <Pencil className="w-3.5 h-3.5" />
                        </button>
                      </>
                    )}
                    <Badge variant={session.status === "active" ? "default" : "secondary"} className="text-[10px] px-1.5 py-0">
                      {session.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {session.message_count} messages · {formatDate(session.updated_at)}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="touch-target h-10 text-muted-foreground hover:text-foreground"
                    disabled={loadingView}
                    onClick={async () => {
                      setLoadingView(true);
                      const loaded = await loadSessionMessages(session.id);
                      setLoadingView(false);
                      if (loaded) setViewingSession(loaded);
                    }}
                  >
                    <MessageSquare className="w-3.5 h-3.5 mr-1" />
                    View
                  </Button>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                        <Download className="w-3.5 h-3.5 mr-1" />
                        Export
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleExportDocPdf(session.id)} className="cursor-pointer">
                        <Printer className="mr-2 h-4 w-4" />
                        Save Document as PDF
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleExportDocText(session.id)} className="cursor-pointer">
                        <FileText className="mr-2 h-4 w-4" />
                        Save Document as Text
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleOpenVaultDialog(session.id, true)} className="cursor-pointer">
                        <FolderOpen className="mr-2 h-4 w-4" />
                        Save Document to Vault
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => handleSendToScribe(session.id)} className="cursor-pointer">
                        <ScrollText className="mr-2 h-4 w-4" />
                        Create Document with Scribe
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => handleExportChatPdf(session.id)} className="cursor-pointer text-muted-foreground">
                        <MessagesSquare className="mr-2 h-4 w-4" />
                        Export Full Chat as PDF
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleExportChatText(session.id)} className="cursor-pointer text-muted-foreground">
                        <MessagesSquare className="mr-2 h-4 w-4" />
                        Export Full Chat as Text
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleOpenVaultDialog(session.id, false)} className="cursor-pointer text-muted-foreground">
                        <MessagesSquare className="mr-2 h-4 w-4" />
                        Save Full Chat to Vault
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </Card>
            ))
          )}
        </div>
      </ScrollArea>

      <SaveToVaultDialog
        open={vaultDialogOpen}
        onOpenChange={setVaultDialogOpen}
        defaultFileName={
          selectedSession
            ? `${selectedSession.title.slice(0, 30).replace(/[^a-zA-Z0-9 ]/g, "").trim()}.txt`
            : "chat-export.txt"
        }
        onSave={handleSaveToVault}
        saving={saving}
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
