import { useNavigate } from "react-router-dom";
import { useInterrogator } from "@/hooks/useInterrogator";
import { ChatWindow } from "@/components/interrogator/ChatWindow";
import { ChatInput } from "@/components/interrogator/ChatInput";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

export default function ConversationalForm() {
  const navigate = useNavigate();
  const { messages, isTyping, sendMessage, reset } = useInterrogator();

  return (
    <div className="flex flex-col h-full">
      {/* Header bar */}
      <div className="px-4 py-3 border-b border-border bg-card/50 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-display font-semibold text-foreground">Interrogator</h2>
          <p className="text-xs text-muted-foreground">AI-powered form builder</p>
        </div>
        {messages.length > 0 && (
          <Button variant="ghost" size="sm" onClick={reset} className="text-muted-foreground">
            <RotateCcw className="w-3.5 h-3.5 mr-1.5" /> New
          </Button>
        )}
      </div>

      <ChatWindow messages={messages} isTyping={isTyping} />

      <ChatInput
        onSend={sendMessage}
        disabled={isTyping}
        placeholder="e.g. I need a reimbursement form..."
      />
    </div>
  );
}
