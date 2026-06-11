import { Mic, MicOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface VoiceMicButtonProps {
  isListening: boolean;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

export function VoiceMicButton({ isListening, onClick, disabled, className }: VoiceMicButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={isListening ? "Stop listening" : "Voice input"}
      className={cn(
        "flex items-center justify-center rounded-full transition-all",
        "h-20 w-20 touch-target",
        "bg-primary text-primary-foreground shadow-lg shadow-primary/25",
        "hover:bg-primary/90 active:scale-95",
        isListening && "animate-pulse ring-4 ring-primary/30",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {isListening ? <MicOff className="h-8 w-8" /> : <Mic className="h-8 w-8" />}
    </button>
  );
}
