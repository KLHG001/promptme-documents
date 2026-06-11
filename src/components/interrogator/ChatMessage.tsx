import { motion } from "framer-motion";
import { Bot, User, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import type { ChatMessage as ChatMessageType } from "@/hooks/useInterrogator";

interface ChatMessageProps {
  message: ChatMessageType;
  showAvatar?: boolean;
}

export function ChatMessage({ message, showAvatar = true }: ChatMessageProps) {
  const isAi = message.role === "assistant";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "flex gap-3 max-w-[90%]",
        isAi ? "self-start" : "self-end flex-row-reverse ml-auto"
      )}
    >
      {showAvatar && (
        <div
          className={cn(
            "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center touch-target",
            isAi ? "bg-primary/20 text-primary" : "bg-secondary/20 text-secondary"
          )}
        >
          {isAi ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
        </div>
      )}

      <div
        className={cn(
          "rounded-2xl px-4 py-3 text-sm leading-relaxed",
          isAi
            ? "bg-card text-card-foreground border border-border"
            : "bg-primary text-primary-foreground",
          message.isError && "border-destructive/50 bg-destructive/10 text-destructive"
        )}
      >
        {message.isError && (
          <AlertCircle className="w-3.5 h-3.5 inline-block mr-1.5 -mt-0.5" />
        )}
        {isAi ? (
          <div className="prose prose-sm max-w-none dark:prose-invert [&>p]:m-0 [&>ul]:mt-1 [&>ol]:mt-1 font-sans">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        ) : (
          message.content
        )}
      </div>
    </motion.div>
  );
}
