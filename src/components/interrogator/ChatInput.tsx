import { useState, useRef, useEffect, useCallback } from "react";
import { ArrowUp, Mic, MicOff, Paperclip, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FeedbackModal } from "@/components/feedback/FeedbackModal";

interface ChatInputProps {
  onSend: (message: string, files?: File[]) => void;
  disabled?: boolean;
  placeholder?: string;
  voicePrimary?: boolean;
  showAttachment?: boolean;
  className?: string;
}

export function ChatInput({
  onSend,
  disabled,
  placeholder,
  voicePrimary,
  showAttachment = true,
  className,
}: ChatInputProps) {
  const [value, setValue] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const [micError, setMicError] = useState<{ open: boolean; message: string }>({
    open: false,
    message: "",
  });
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const isListeningRef = useRef(false);
  const lastFinalTranscriptRef = useRef("");
  const lastFinalAtRef = useRef(0);

  useEffect(() => {
    if (!disabled) inputRef.current?.focus();
  }, [disabled]);

  useEffect(() => {
    return () => {
      isListeningRef.current = false;
      recognitionRef.current?.stop();
    };
  }, []);

  const initRecognition = useCallback(() => {
    const SpeechRecognitionCtor =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognitionCtor) {
      setMicError({
        open: true,
        message: "Speech recognition isn't supported in this browser. You can still type your message.",
      });
      return null;
    }

    const recognition = new SpeechRecognitionCtor();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (!result.isFinal) continue;

        const transcript = result[0].transcript.trim();
        if (!transcript) continue;

        const now = Date.now();
        const isImmediateDuplicate =
          transcript === lastFinalTranscriptRef.current && now - lastFinalAtRef.current < 3000;
        if (isImmediateDuplicate) continue;

        lastFinalTranscriptRef.current = transcript;
        lastFinalAtRef.current = now;

        setValue((prev) => {
          const separator = prev.trim() ? " " : "";
          return prev.trim() + separator + transcript;
        });
      }
    };

    recognition.onend = () => {
      if (isListeningRef.current) {
        try {
          recognition.start();
        } catch {
          isListeningRef.current = false;
          setIsListening(false);
        }
      } else {
        setIsListening(false);
      }
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      if (event.error === "not-allowed") {
        setMicError({
          open: true,
          message: "Microphone permission denied. Please allow access in your browser settings.",
        });
        isListeningRef.current = false;
        setIsListening(false);
      }
    };

    return recognition;
  }, []);

  const toggleListening = useCallback(() => {
    if (isListeningRef.current) {
      isListeningRef.current = false;
      recognitionRef.current?.stop();
      setIsListening(false);
      lastFinalTranscriptRef.current = "";
      lastFinalAtRef.current = 0;
    } else {
      if (!recognitionRef.current) recognitionRef.current = initRecognition();
      if (recognitionRef.current) {
        lastFinalTranscriptRef.current = "";
        lastFinalAtRef.current = 0;
        isListeningRef.current = true;
        setIsListening(true);
        try {
          recognitionRef.current.start();
        } catch {
          isListeningRef.current = false;
          setIsListening(false);
        }
      }
    }
  }, [initRecognition]);

  const handleFileSelect = () => fileInputRef.current?.click();

  const handleFilesChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    setAttachedFiles((prev) => [...prev, ...Array.from(files)].slice(0, 10));
    e.target.value = "";
  };

  const removeFile = (index: number) => {
    setAttachedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if ((!value.trim() && attachedFiles.length === 0) || disabled) return;
    if (isListeningRef.current) {
      isListeningRef.current = false;
      recognitionRef.current?.stop();
      setIsListening(false);
    }
    onSend(value.trim(), attachedFiles.length > 0 ? attachedFiles : undefined);
    setValue("");
    setAttachedFiles([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  useEffect(() => {
    const textarea = inputRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = Math.min(textarea.scrollHeight, 200) + "px";
    }
  }, [value]);

  const hasContent = value.trim() || attachedFiles.length > 0;

  return (
    <>
      <form onSubmit={handleSubmit} className={cn("flex flex-col gap-2 p-3", className)}>
        {attachedFiles.length > 0 && (
          <div className="flex flex-wrap gap-1.5 px-1">
            {attachedFiles.map((file, i) => (
              <div
                key={`${file.name}-${i}`}
                className="flex items-center gap-1.5 rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground border border-border"
              >
                <Paperclip className="w-3 h-3 flex-shrink-0" />
                <span className="max-w-[120px] truncate">{file.name}</span>
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  className="touch-target ml-0.5 rounded-full hover:bg-destructive/15 hover:text-destructive p-1 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-end gap-2">
          <Button
            type="button"
            variant={voicePrimary ? "default" : "ghost"}
            size="icon"
            className={cn(
              "touch-target h-12 w-12 rounded-full flex-shrink-0 transition-colors",
              isListening
                ? "bg-destructive/15 text-destructive hover:bg-destructive/25 animate-pulse"
                : voicePrimary
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/10"
            )}
            onClick={toggleListening}
            disabled={disabled}
            title={isListening ? "Stop listening" : "Voice input"}
            aria-label={isListening ? "Stop listening" : "Voice input"}
          >
            {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </Button>

          <textarea
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder || "Type your answer… (Undecided is always valid)"}
            disabled={disabled}
            rows={1}
            className={cn(
              "flex-1 resize-none rounded-xl border-2 border-primary/40 bg-background px-4 py-3",
              "text-sm text-foreground placeholder:text-muted-foreground",
              "outline-none focus:ring-2 focus:ring-primary/30",
              "transition-colors min-h-12",
              "overflow-y-auto break-words whitespace-pre-wrap"
            )}
            style={{ maxHeight: 200 }}
          />

          {showAttachment && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="touch-target h-12 w-12 rounded-full flex-shrink-0 text-muted-foreground hover:text-primary hover:bg-primary/10"
              onClick={handleFileSelect}
              disabled={disabled}
              title="Attach files"
              aria-label="Attach files"
            >
              <Paperclip className="w-5 h-5" />
            </Button>
          )}

          <Button
            type="submit"
            size="icon"
            disabled={!hasContent || disabled}
            className="flex-shrink-0 touch-target h-12 w-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
            aria-label="Send message"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </form>

      {showAttachment && (
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.csv,.txt,.md"
          onChange={handleFilesChanged}
          className="hidden"
        />
      )}

      <FeedbackModal
        open={micError.open}
        onOpenChange={(open) => setMicError((e) => ({ ...e, open }))}
        title="Microphone"
        description={micError.message}
        variant="error"
      />
    </>
  );
}
