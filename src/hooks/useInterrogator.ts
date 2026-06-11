import { useState, useCallback, useRef, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import {
  fetchUserIdentityVoice,
  formatIdentityForPrompt,
  type UserIdentityVoice,
} from "@/lib/masterVault/identity";

export interface ChatMessage {
  id: string;
  role: "assistant" | "user";
  content: string;
  timestamp: Date;
  isError?: boolean;
}

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/interrogator-chat`;

function makeId() {
  return Math.random().toString(36).slice(2, 10);
}

/** Derive a short title from the first user message */
function deriveTitle(messages: ChatMessage[]): string {
  const first = messages.find((m) => m.role === "user");
  if (!first) return "New Chat";
  const text = first.content.slice(0, 60);
  return text.length < first.content.length ? text + "…" : text;
}

export function useInterrogator() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [identityVoice, setIdentityVoice] = useState<UserIdentityVoice | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!user) {
      setIdentityVoice(null);
      return;
    }
    fetchUserIdentityVoice(user.id).then(setIdentityVoice);
  }, [user]);

  const persistSession = useCallback(
    (msgs: ChatMessage[], sid: string | null) => {
      if (!user) return;
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
      saveTimerRef.current = setTimeout(async () => {
        const title = deriveTitle(msgs);
        const payload = {
          user_id: user.id,
          title,
          messages: msgs as any,
          status: "active" as const,
        };
        if (sid) {
          await supabase.from("chat_sessions").update(payload).eq("id", sid);
        } else {
          const { data } = await supabase
            .from("chat_sessions")
            .insert(payload)
            .select("id")
            .single();
          if (data) setSessionId(data.id);
        }
      }, 800);
    },
    [user]
  );

  const sendMessage = useCallback(
    async (input: string) => {
      const trimmed = input.trim();
      if (!trimmed || isTyping) return;

      const userMsg: ChatMessage = {
        id: makeId(),
        role: "user",
        content: trimmed,
        timestamp: new Date(),
      };

      const updatedMessages = [...messages, userMsg];
      setMessages(updatedMessages);
      setIsTyping(true);

      const apiMessages = updatedMessages.map((m) => ({
        role: m.role === "user" ? ("user" as const) : ("assistant" as const),
        content: m.content,
      }));

      const controller = new AbortController();
      abortRef.current = controller;

      let assistantContent = "";
      const assistantId = makeId();

      try {
        const resp = await fetch(CHAT_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({
            messages: apiMessages,
            identityContext: identityVoice,
          }),
          signal: controller.signal,
        });

        if (!resp.ok) {
          const errBody = await resp.json().catch(() => ({ error: "Request failed" }));
          throw new Error(errBody.error || `Error ${resp.status}`);
        }

        if (!resp.body) throw new Error("No response stream");

        const reader = resp.body.getReader();
        const decoder = new TextDecoder();
        let textBuffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          textBuffer += decoder.decode(value, { stream: true });

          let newlineIndex: number;
          while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
            let line = textBuffer.slice(0, newlineIndex);
            textBuffer = textBuffer.slice(newlineIndex + 1);

            if (line.endsWith("\r")) line = line.slice(0, -1);
            if (line.startsWith(":") || line.trim() === "") continue;
            if (!line.startsWith("data: ")) continue;

            const jsonStr = line.slice(6).trim();
            if (jsonStr === "[DONE]") break;

            try {
              const parsed = JSON.parse(jsonStr);
              const content = parsed.choices?.[0]?.delta?.content as string | undefined;
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
              textBuffer = line + "\n" + textBuffer;
              break;
            }
          }
        }

        if (textBuffer.trim()) {
          for (let raw of textBuffer.split("\n")) {
            if (!raw) continue;
            if (raw.endsWith("\r")) raw = raw.slice(0, -1);
            if (raw.startsWith(":") || raw.trim() === "") continue;
            if (!raw.startsWith("data: ")) continue;
            const jsonStr = raw.slice(6).trim();
            if (jsonStr === "[DONE]") continue;
            try {
              const parsed = JSON.parse(jsonStr);
              const content = parsed.choices?.[0]?.delta?.content as string | undefined;
              if (content) {
                assistantContent += content;
                setMessages((prev) =>
                  prev.map((m) => (m.id === assistantId ? { ...m, content: assistantContent } : m))
                );
              }
            } catch {
              /* ignore */
            }
          }
        }

        setMessages((prev) => {
          persistSession(prev, sessionId);
          return prev;
        });
      } catch (err: any) {
        if (err.name === "AbortError") return;
        const errorMsgs: ChatMessage[] = [
          ...updatedMessages,
          {
            id: makeId(),
            role: "assistant",
            content: err.message || "Something went wrong. Try again.",
            timestamp: new Date(),
            isError: true,
          },
        ];
        setMessages(errorMsgs);
        persistSession(errorMsgs, sessionId);
      } finally {
        setIsTyping(false);
        abortRef.current = null;
      }
    },
    [messages, isTyping, sessionId, persistSession, identityVoice]
  );

  const reset = useCallback(() => {
    abortRef.current?.abort();
    setMessages([]);
    setSessionId(null);
    setIsTyping(false);
  }, []);

  const markCompleted = useCallback(async () => {
    if (!sessionId) return;
    await supabase
      .from("chat_sessions")
      .update({ status: "completed" })
      .eq("id", sessionId);
  }, [sessionId]);

  return {
    messages,
    isTyping,
    sendMessage,
    reset,
    sessionId,
    markCompleted,
    identityVoice,
    identityPrompt: formatIdentityForPrompt(identityVoice),
  };
}

/** Fetch active (unfinished) sessions for the current user */
export async function fetchActiveSessions(userId: string) {
  const { data } = await supabase
    .from("chat_sessions")
    .select("id, title, status, updated_at, created_at")
    .eq("user_id", userId)
    .eq("status", "active")
    .order("updated_at", { ascending: false })
    .limit(10);
  return data ?? [];
}
