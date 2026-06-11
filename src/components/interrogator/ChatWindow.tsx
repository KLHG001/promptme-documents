import { useEffect, useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage } from "./ChatMessage";
import { motion } from "framer-motion";
import type { ChatMessage as ChatMessageType } from "@/hooks/useInterrogator";

interface ChatWindowProps {
  messages: ChatMessageType[];
  isTyping: boolean;
  showAvatars?: boolean;
}

export function ChatWindow({ messages, isTyping, showAvatars = true }: ChatWindowProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <ScrollArea className="flex-1 px-4 py-4">
      <div className="flex flex-col gap-4 max-w-2xl mx-auto">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} showAvatar={showAvatars} />
        ))}

        {isTyping && !messages.some((m) => m.role === "assistant" && m.content === "") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-2 self-start"
          >
            <div className="flex gap-1.5 px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow [animation-delay:200ms]" />
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow [animation-delay:400ms]" />
            </div>
          </motion.div>
        )}

        <div ref={bottomRef} />
      </div>
    </ScrollArea>
  );
}
