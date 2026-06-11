import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInterrogator } from "@/hooks/useInterrogator";
import { ChatWindow } from "@/components/interrogator/ChatWindow";
import { ChatInput } from "@/components/interrogator/ChatInput";
import { DocumentActions } from "@/components/interrogator/DocumentActions";
import { InterrogatorMenu } from "@/components/interrogator/InterrogatorMenu";
import { PmiLogo } from "@/components/branding/PmiLogo";
import { ModeToggle } from "@/components/branding/ModeToggle";
import { AppFooter } from "@/components/branding/AppFooter";
import { SaveToVaultDialog } from "@/components/vault/SaveToVaultDialog";
import { FeedbackModal } from "@/components/feedback/FeedbackModal";
import { ProcessingIndicator } from "@/components/feedback/ProcessingIndicator";
import { KnowledgeHarvestDialog } from "@/components/interrogator/KnowledgeHarvestDialog";
import { useSidebar } from "@/components/ui/sidebar";
import { useAuth } from "@/contexts/AuthContext";
import { saveToVault } from "@/lib/vaultStorage";
import { extractDocument, exportDocumentAsPdf } from "@/lib/chatExport";
import { randomEncouragement } from "@/lib/encouragement";
import { awardCoins } from "@/lib/masterVault/coins";

const WELCOME =
  "I'm The Interrogator. Tell me what you need — a form, a letter, a legal notice, a workflow — and I'll draft it for you.";

export default function Chat() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sessionParam = searchParams.get("session");
  const { user } = useAuth();
  const { setOpen, setOpenMobile } = useSidebar();
  const { messages, isTyping, sendMessage, loadSession, sessionId } = useInterrogator();
  const loadedSessionRef = useRef<string | null>(null);

  const [hasSentMessage, setHasSentMessage] = useState(false);
  const [vaultDialogOpen, setVaultDialogOpen] = useState(false);
  const [harvestDialogOpen, setHarvestDialogOpen] = useState(false);
  const coinsAwardedRef = useRef(false);
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState<{
    open: boolean;
    title: string;
    description?: string;
    variant?: "success" | "error" | "info";
  }>({ open: false, title: "" });
  const [shownEncouragement, setShownEncouragement] = useState(false);

  useEffect(() => {
    setOpen(false);
    setOpenMobile(false);
  }, [setOpen, setOpenMobile]);

  useEffect(() => {
    if (!sessionParam || loadedSessionRef.current === sessionParam) return;

    loadedSessionRef.current = sessionParam;
    loadSession(sessionParam).then((ok) => {
      if (ok) setHasSentMessage(true);
    });
  }, [sessionParam, loadSession]);

  const documentContent = useMemo(() => {
    if (isTyping || messages.length === 0) return null;
    return extractDocument(messages);
  }, [messages, isTyping]);

  const showDocumentActions = !!documentContent && !isTyping;

  useEffect(() => {
    if (showDocumentActions && !shownEncouragement) {
      setShownEncouragement(true);
      setFeedback({
        open: true,
        title: "Document ready",
        description: randomEncouragement(),
        variant: "success",
      });
    }
  }, [showDocumentActions, shownEncouragement]);

  const handleSend = async (text: string) => {
    setHasSentMessage(true);
    await sendMessage(text);
  };

  const handleSaveToVault = async (folderPath: string, fileName: string) => {
    setSaving(true);
    const result = await saveToVault(messages, folderPath, fileName, "PromptMe Document", true);
    setSaving(false);
    if (result.success) {
      setVaultDialogOpen(false);
      setFeedback({
        open: true,
        title: "Saved to Vault",
        description: `${fileName} is in ${folderPath}.`,
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

  const handleEditScribe = () => {
    const chatContext = messages
      .map((m) => `${m.role === "user" ? "User" : "Interrogator"}: ${m.content}`)
      .join("\n\n");
    navigate("/document-gen", {
      state: {
        fromChat: true,
        chatSessionId: sessionId,
        chatTitle: "Interrogator Draft",
        chatContext,
      },
    });
  };

  const handleSendPlaceholder = () => {
    setFeedback({
      open: true,
      title: "Send — coming soon",
      description: "Sharing and delivery are on the roadmap. For now, export or save to Vault.",
      variant: "info",
    });
  };

  return (
    <div className="flex flex-col h-full min-w-0 max-w-full bg-background overflow-x-hidden">
      {/* Concierge header */}
      <header className="flex items-center justify-between gap-3 px-4 py-3 border-b border-border bg-card/60 shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          <PmiLogo size="sm" />
          <div className="min-w-0">
            <h1 className="font-serif text-base font-semibold text-foreground leading-tight truncate">
              The Interrogator
            </h1>
            <p className="text-[11px] text-muted-foreground truncate">
              PromptMe Docs · The Interrogator • Scribe • Vault
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <ModeToggle compact />
          <InterrogatorMenu onBack={() => navigate("/")} />
        </div>
      </header>

      {/* Chat area */}
      <div className="flex-1 min-h-0 flex flex-col">
        {!hasSentMessage && (
          <div className="px-4 pt-8 pb-4 max-w-2xl mx-auto w-full">
            <p className="text-sm text-muted-foreground leading-relaxed text-center font-serif">
              {WELCOME}
            </p>
          </div>
        )}

        {messages.length > 0 && (
          <ChatWindow messages={messages} isTyping={isTyping} showAvatars={false} />
        )}

        {isTyping && messages.length === 0 && (
          <ChatWindow messages={[]} isTyping={isTyping} showAvatars={false} />
        )}

        {isTyping && (
          <div className="px-4 py-2 shrink-0 border-t border-primary/10 bg-card/40">
            <ProcessingIndicator
              compact
              message="The Interrogator is drafting…"
              submessage="Processing your document…"
            />
          </div>
        )}

        {showDocumentActions && (
          <DocumentActions
            onSaveVault={() => setVaultDialogOpen(true)}
            onExportPdf={() => exportDocumentAsPdf(messages, "PromptMe Document")}
            onHarvest={() => setHarvestDialogOpen(true)}
            onEditScribe={handleEditScribe}
            onSend={handleSendPlaceholder}
          />
        )}
      </div>

      {/* Input + back */}
      <div className="shrink-0 border-t border-border bg-card/80 relative pb-safe">
        <div className="max-w-2xl mx-auto w-full">
          <ChatInput
            onSend={handleSend}
            disabled={isTyping}
            placeholder="Speak or type what you need…"
            voicePrimary
            className="pl-12 sm:pl-14"
          />
        </div>
        <Button
          variant="ghost"
          className="absolute left-2 bottom-2 touch-target h-12 w-12 rounded-full text-muted-foreground hover:text-foreground"
          onClick={() => navigate("/")}
          aria-label="Back to dashboard"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <AppFooter />
      </div>

      {saving && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4">
          <ProcessingIndicator message="Saving to Vault…" />
        </div>
      )}

      <SaveToVaultDialog
        open={vaultDialogOpen}
        onOpenChange={setVaultDialogOpen}
        defaultFileName="promptme-document.txt"
        onSave={handleSaveToVault}
        saving={saving}
      />

      {documentContent && (
        <KnowledgeHarvestDialog
          open={harvestDialogOpen}
          onOpenChange={setHarvestDialogOpen}
          documentContent={documentContent}
          defaultName="Interrogator Document"
          onSaved={(result) => {
            const parts: string[] = [];
            if (result.template) parts.push("Scribe template");
            if (result.knowledge) parts.push("Knowledge Vault");
            if (parts.length) {
              setFeedback({
                open: true,
                title: "Harvested",
                description: `Saved to ${parts.join(" and ")}.`,
                variant: "success",
              });
            }
          }}
        />
      )}

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
