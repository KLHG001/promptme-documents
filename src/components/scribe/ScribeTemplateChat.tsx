import { useState, useCallback, useRef, useEffect } from "react";
import { ArrowLeft, Sparkles, Save, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChatWindow } from "@/components/interrogator/ChatWindow";
import { ChatInput } from "@/components/interrogator/ChatInput";
import { FeedbackModal } from "@/components/feedback/FeedbackModal";
import { ProgressOverlay } from "@/components/feedback/ProgressIndicator";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import type { ChatMessage } from "@/hooks/useInterrogator";

import { getSupabaseAnonKey, getSupabaseUrl } from "@/lib/supabaseEnv";

const CHAT_URL = `${getSupabaseUrl()}/functions/v1/interrogator-chat`;

const WELCOME =
  "I'm the Scribe. Describe the document template you need — fields, purpose, who it's for — and I'll draft a reusable template for you.";

const SYSTEM_PROMPT = `You are the Scribe — a document template architect inside PromptMe. Help the user design a reusable document template through conversation.

- Ask clarifying questions ONE AT A TIME about what fields the template needs.
- Suggest sensible fields for the document type they describe.
- Keep responses concise and professional.
- When you have enough information, summarize the proposed template (name, category, fields) and ask if they're ready to generate it.
- Do NOT output JSON — the app will generate the formal template separately.`;

interface ScribeTemplateChatProps {
  onCancel: () => void;
  onSaved: (template: Record<string, unknown>) => void;
  initialContext?: string;
}

function makeId() {
  return Math.random().toString(36).slice(2, 10);
}

export function ScribeTemplateChat({ onCancel, onSaved, initialContext }: ScribeTemplateChatProps) {
  const { user } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [hasSent, setHasSent] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);
  const [preview, setPreview] = useState<Record<string, unknown> | null>(null);
  const [feedback, setFeedback] = useState<{
    open: boolean;
    title: string;
    description?: string;
    variant?: "success" | "error" | "info";
  }>({ open: false, title: "" });
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (initialContext) {
      setMessages([
        { id: makeId(), role: "user", content: initialContext, timestamp: new Date() },
      ]);
      setHasSent(true);
    }
  }, [initialContext]);

  const readFileAsText = (file: File, onProgress?: (pct: number) => void): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onprogress = (e) => {
        if (e.lengthComputable && onProgress) {
          onProgress(Math.round((e.loaded / e.total) * 100));
        }
      };
      reader.onload = () => resolve((reader.result as string).slice(0, 8000));
      reader.onerror = () => reject(new Error("Could not read the file."));
      reader.readAsText(file);
    });

  const sendMessage = useCallback(
    async (input: string, files?: File[]) => {
      let trimmed = input.trim();
      if ((!trimmed && !files?.length) || isTyping || generating || uploading) return;

      let fileContext = "";
      if (files?.length) {
        setUploading(true);
        setUploadProgress(0);
        try {
          const parts: string[] = [];
          for (const file of files.slice(0, 3)) {
            const text = await readFileAsText(file, setUploadProgress);
            parts.push(`[Attached: ${file.name}]\n${text}`);
          }
          fileContext = parts.join("\n\n");
        } catch (e: unknown) {
          const message = e instanceof Error ? e.message : "Upload failed";
          setFeedback({ open: true, title: "Upload failed", description: message, variant: "error" });
          setUploading(false);
          setUploadProgress(null);
          return;
        } finally {
          setUploading(false);
          setUploadProgress(null);
        }
      }

      if (!trimmed && fileContext) {
        trimmed = "Please use the attached file(s) to help draft this template.";
      }
      if (!trimmed) return;

      const content = fileContext ? `${trimmed}\n\n${fileContext}` : trimmed;

      setHasSent(true);
      const userMsg: ChatMessage = {
        id: makeId(),
        role: "user",
        content: trimmed,
        timestamp: new Date(),
      };
      const updated = [...messages, userMsg];
      setMessages(updated);
      setIsTyping(true);

      const apiMessages = [
        { role: "system" as const, content: SYSTEM_PROMPT },
        ...updated.map((m, i) => ({
          role: m.role as "user" | "assistant",
          content: i === updated.length - 1 && m.role === "user" ? content : m.content,
        })),
      ];

      const controller = new AbortController();
      abortRef.current = controller;
      let assistantContent = "";
      const assistantId = makeId();

      try {
        const resp = await fetch(CHAT_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getSupabaseAnonKey()}`,
          },
          body: JSON.stringify({ messages: apiMessages }),
          signal: controller.signal,
        });

        if (!resp.ok) {
          const errBody = await resp.json().catch(() => ({ error: "Request failed" }));
          throw new Error(errBody.error || `Error ${resp.status}`);
        }
        if (!resp.body) throw new Error("No response stream");

        const reader = resp.body.getReader();
        const decoder = new TextDecoder();
        let buf = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buf += decoder.decode(value, { stream: true });

          let idx: number;
          while ((idx = buf.indexOf("\n")) !== -1) {
            let line = buf.slice(0, idx);
            buf = buf.slice(idx + 1);
            if (line.endsWith("\r")) line = line.slice(0, -1);
            if (!line.startsWith("data: ")) continue;
            const json = line.slice(6).trim();
            if (json === "[DONE]") break;
            try {
              const parsed = JSON.parse(json);
              const content = parsed.choices?.[0]?.delta?.content;
              if (content) {
                assistantContent += content;
                setMessages((prev) => {
                  const last = prev[prev.length - 1];
                  if (last?.id === assistantId) {
                    return prev.map((m) =>
                      m.id === assistantId ? { ...m, content: assistantContent } : m
                    );
                  }
                  return [
                    ...prev,
                    { id: assistantId, role: "assistant", content: assistantContent, timestamp: new Date() },
                  ];
                });
              }
            } catch {
              buf = line + "\n" + buf;
              break;
            }
          }
        }
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") return;
        const message = err instanceof Error ? err.message : "Something went wrong.";
        setMessages((prev) => [
          ...prev,
          { id: makeId(), role: "assistant", content: message, timestamp: new Date(), isError: true },
        ]);
      } finally {
        setIsTyping(false);
        abortRef.current = null;
      }
    },
    [messages, isTyping, generating, uploading]
  );

  const handleDraftTemplate = async () => {
    const userMessages = messages.filter((m) => m.role === "user");
    if (!userMessages.length) {
      setFeedback({ open: true, title: "Describe your template first", variant: "info" });
      return;
    }

    setGenerating(true);
    setPreview(null);
    const context = messages
      .map((m) => `${m.role === "user" ? "User" : "Scribe"}: ${m.content}`)
      .join("\n\n");
    const keywords = userMessages.map((m) => m.content).join(", ").slice(0, 500);

    try {
      const { data, error } = await supabase.functions.invoke("scribe-generate", {
        body: { keywords: keywords.split(/[,.]/).map((k) => k.trim()).filter(Boolean).slice(0, 12), context },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setPreview(data.template);
      setFeedback({
        open: true,
        title: "Template drafted!",
        description: "Review below and save to your library.",
        variant: "success",
      });
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : "Generation failed";
      setFeedback({ open: true, title: "Couldn't draft template", description: message, variant: "error" });
    } finally {
      setGenerating(false);
    }
  };

  const handleSave = async () => {
    if (!preview || !user) return;
    setSaving(true);
    try {
      const { data, error } = await supabase.from("document_templates").insert({
        user_id: user.id,
        name: preview.name as string,
        description: preview.description as string,
        category: preview.category as string,
        fields: preview.fields,
        keywords: [],
        is_ai_generated: true,
        completion_message: preview.completionMessage as string,
      }).select().single();
      if (error) throw error;
      onSaved(data as Record<string, unknown>);
      setFeedback({ open: true, title: "Template saved", description: preview.name as string, variant: "success" });
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : "Save failed";
      setFeedback({ open: true, title: "Save failed", description: message, variant: "error" });
    } finally {
      setSaving(false);
    }
  };

  const userMessageCount = messages.filter((m) => m.role === "user").length;

  return (
    <div className="flex flex-col h-full bg-background">
      <header className="flex items-center justify-between px-4 py-3 border-b border-primary/20 bg-card/60 shrink-0">
        <div>
          <h1 className="font-serif text-lg font-semibold text-foreground">Create New Template</h1>
          <p className="text-xs text-muted-foreground">Chat with the Scribe · save as reusable template</p>
        </div>
        <Button variant="ghost" className="touch-target h-12 gap-2" onClick={onCancel}>
          <ArrowLeft className="h-4 w-4" /> Back
        </Button>
      </header>

      {!hasSent && (
        <div className="px-4 pt-6 pb-2 max-w-2xl mx-auto w-full">
          <p className="text-sm text-muted-foreground text-center font-serif leading-relaxed">{WELCOME}</p>
        </div>
      )}

      <div className="flex-1 min-h-0 flex flex-col">
        {messages.length > 0 && (
          <ChatWindow messages={messages} isTyping={isTyping} showAvatars={false} />
        )}
        {isTyping && messages.length === 0 && (
          <ChatWindow messages={[]} isTyping={isTyping} showAvatars={false} />
        )}
      </div>

      {preview && (
        <Card className="mx-4 mb-2 border-primary/30 bg-card shrink-0">
          <CardContent className="p-4 space-y-2">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-serif font-semibold text-sm">{preview.name as string}</h3>
                <p className="text-xs text-muted-foreground">{preview.description as string}</p>
              </div>
              <Badge variant="outline" className="text-[10px] border-primary/30">{preview.category as string}</Badge>
            </div>
            <p className="text-[11px] text-muted-foreground">
              {(preview.fields as unknown[])?.length ?? 0} fields ready
            </p>
            <Button
              className="touch-target h-12 w-full rounded-full gap-2"
              onClick={handleSave}
              disabled={saving}
            >
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              Save to Template Library
            </Button>
          </CardContent>
        </Card>
      )}

      <div className="shrink-0 border-t border-border bg-card/80">
        {userMessageCount > 0 && !preview && (
          <div className="px-4 pt-3 flex justify-center">
            <Button
              variant="outline"
              className="touch-target h-12 rounded-full gap-2 border-primary/40"
              onClick={handleDraftTemplate}
              disabled={generating || isTyping}
            >
              {generating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
              {generating ? "Drafting template…" : "Draft Template from Chat"}
            </Button>
          </div>
        )}
        <ChatInput
          onSend={sendMessage}
          disabled={isTyping || generating || uploading}
          placeholder="Describe your template needs…"
          voicePrimary
        />
      </div>

      {uploading && (
        <ProgressOverlay
          message="Uploading…"
          submessage="Reading your file for template creation"
          progress={uploadProgress}
        />
      )}

      {generating && (
        <ProgressOverlay
          message="Generating your document…"
          submessage="The Scribe is drafting your template fields"
        />
      )}

      {saving && (
        <ProgressOverlay
          message="Saving template…"
          submessage={preview?.name as string | undefined}
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
