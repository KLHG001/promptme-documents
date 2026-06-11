import { useState, useCallback, useRef } from "react";
import type { ChatMessage } from "@/hooks/useInterrogator";

export interface PdfField {
  name: string;
  type: string;
  label: string;
  options?: string[];
}

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/interrogator-chat`;

function makeId() {
  return Math.random().toString(36).slice(2, 10);
}

function buildSystemContext(fields: PdfField[]): string {
  const fieldList = fields
    .map((f, i) => {
      let desc = `${i + 1}. "${f.label}" (type: ${f.type})`;
      if (f.options?.length) desc += ` — options: ${f.options.join(", ")}`;
      return desc;
    })
    .join("\n");

  return `You are a PDF form-filling assistant. The user uploaded a PDF with the following fillable fields:\n\n${fieldList}\n\nYour job:\n1. Ask the user for each field ONE AT A TIME, in order.\n2. For checkboxes, ask a yes/no question.\n3. For dropdowns/radio, present the options.\n4. After collecting ALL fields, output a summary with each field name and value, then ask if they want to edit anything or finalize.\n5. When they confirm, respond with EXACTLY this JSON block on its own line:\n\`\`\`FIELD_VALUES\n{"fieldName": "value", ...}\n\`\`\`\nUse the original field names (not labels) as keys.\n\nKeep responses concise. Start by greeting the user and asking the first field.`;
}

export function usePdfInterrogator(fields: PdfField[]) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [completedValues, setCompletedValues] = useState<Record<string, string> | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const systemContext = useRef(buildSystemContext(fields));

  const answeredCount = (() => {
    // Count how many fields the assistant has asked about based on conversation length
    const userMsgCount = messages.filter((m) => m.role === "user").length;
    return Math.min(userMsgCount, fields.length);
  })();

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

      const updated = [...messages, userMsg];
      setMessages(updated);
      setIsTyping(true);

      const apiMessages = [
        { role: "system" as const, content: systemContext.current },
        ...updated.map((m) => ({
          role: m.role as "user" | "assistant",
          content: m.content,
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
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
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

        // Check if the assistant returned FIELD_VALUES
        const match = assistantContent.match(/```FIELD_VALUES\s*\n([\s\S]*?)\n```/);
        if (match) {
          try {
            const values = JSON.parse(match[1]);
            setCompletedValues(values);
          } catch { /* ignore parse error */ }
        }
      } catch (err: any) {
        if (err.name === "AbortError") return;
        setMessages((prev) => [
          ...prev,
          {
            id: makeId(),
            role: "assistant",
            content: err.message || "Something went wrong.",
            timestamp: new Date(),
            isError: true,
          },
        ]);
      } finally {
        setIsTyping(false);
        abortRef.current = null;
      }
    },
    [messages, isTyping]
  );

  const reset = useCallback(() => {
    abortRef.current?.abort();
    setMessages([]);
    setCompletedValues(null);
    setIsTyping(false);
  }, []);

  return {
    messages,
    isTyping,
    sendMessage,
    reset,
    completedValues,
    answeredCount,
    totalFields: fields.length,
  };
}
