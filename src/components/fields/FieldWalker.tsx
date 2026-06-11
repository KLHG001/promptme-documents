import { useEffect, useRef, useState } from "react";
import { ArrowRight, SkipForward } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProgressDots } from "./ProgressDots";
import { VoiceMicButton } from "./VoiceMicButton";
import { FeedbackModal } from "@/components/feedback/FeedbackModal";
import { useFieldWalker, type WalkableField } from "@/hooks/useFieldWalker";
import { useVoiceInput } from "@/hooks/useVoiceInput";
import { cn } from "@/lib/utils";

interface FieldWalkerProps {
  fields: WalkableField[];
  title?: string;
  onComplete: (values: Record<string, string>) => void;
  encouragement?: (done: number, total: number) => string;
}

export function FieldWalker({ fields, title, onComplete, encouragement }: FieldWalkerProps) {
  const walker = useFieldWalker(fields);
  const [feedback, setFeedback] = useState<{
    open: boolean;
    title: string;
    description?: string;
  }>({ open: false, title: "" });
  const [micError, setMicError] = useState(false);

  const { isListening, toggle, stop } = useVoiceInput({
    onTranscript: (text) => {
      walker.setInputValue((prev) => {
        const sep = prev.trim() ? " " : "";
        return prev.trim() + sep + text;
      });
    },
    onError: () => setMicError(true),
  });

  const completedRef = useRef(false);

  useEffect(() => {
    if (walker.isComplete && !completedRef.current) {
      completedRef.current = true;
      stop();
      onComplete(walker.values);
    }
  }, [walker.isComplete, walker.values, onComplete, stop]);

  useEffect(() => {
    const field = fields[walker.currentIndex];
    if (!field) return;
    walker.setInputValue(walker.values[field.name] ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [walker.currentIndex]);

  if (!walker.currentField && !walker.isComplete) return null;

  const handleConfirm = () => {
    stop();
    const finished = walker.confirmValue();
    const done = finished ? walker.totalFields : walker.filledCount + 1;
    if (encouragement) {
      setFeedback({
        open: true,
        title: encouragement(done, walker.totalFields),
      });
    }
  };

  const handleSkip = () => {
    stop();
    const finished = walker.skipField();
    const done = finished ? walker.totalFields : walker.filledCount + 1;
    if (encouragement) {
      setFeedback({
        open: true,
        title: encouragement(done, walker.totalFields),
      });
    }
  };

  const field = walker.currentField!;
  const isSelect =
    field.type === "select" ||
    field.type === "dropdown" ||
    field.type === "radio";

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div className="px-4 py-4 border-b border-border bg-card/50">
        {title && (
          <p className="text-xs text-muted-foreground text-center mb-2 truncate">{title}</p>
        )}
        <ProgressDots
          total={walker.totalFields}
          current={walker.currentIndex}
          filled={walker.filledCount}
        />
        <p className="text-center text-xs text-muted-foreground mt-2">
          Field {walker.currentIndex + 1} of {walker.totalFields}
        </p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 gap-6 max-w-lg mx-auto w-full">
        <div className="text-center w-full">
          <Label className="text-xs uppercase tracking-wider text-muted-foreground">
            {field.type === "checkbox" ? "Yes / No" : "Current field"}
          </Label>
          <h2 className="font-serif text-xl font-semibold text-foreground mt-2">
            {field.label}
          </h2>
          {field.options?.length ? (
            <p className="text-xs text-muted-foreground mt-1">
              Options: {field.options.join(", ")}
            </p>
          ) : null}
        </div>

        <div className="w-full space-y-3">
          {isSelect && field.options?.length ? (
            <Select
              value={walker.inputValue}
              onValueChange={walker.setInputValue}
            >
              <SelectTrigger className="touch-target h-12 text-base border-primary/40">
                <SelectValue placeholder="Choose an option…" />
              </SelectTrigger>
              <SelectContent>
                {field.options.map((opt) => (
                  <SelectItem key={opt} value={opt} className="touch-target">
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <Input
              value={walker.inputValue}
              onChange={(e) => walker.setInputValue(e.target.value)}
              placeholder={field.placeholder || `Enter ${field.label.toLowerCase()}…`}
              className="touch-target h-12 text-base border-primary/40"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleConfirm();
              }}
            />
          )}
          <p className="text-[11px] text-center text-muted-foreground">
            &quot;Undecided&quot; or &quot;Skip&quot; are always valid
          </p>
        </div>

        <VoiceMicButton
          isListening={isListening}
          onClick={toggle}
        />

        <div className={cn("flex gap-3 w-full max-w-sm")}>
          <Button
            variant="outline"
            className="touch-target h-12 flex-1 gap-2 rounded-full border-muted-foreground/30"
            onClick={handleSkip}
          >
            <SkipForward className="h-4 w-4" />
            Skip
          </Button>
          <Button
            className="touch-target h-12 flex-1 gap-2 rounded-full"
            onClick={handleConfirm}
          >
            Confirm
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <FeedbackModal
        open={feedback.open}
        onOpenChange={(open) => setFeedback((f) => ({ ...f, open }))}
        title={feedback.title}
        variant="success"
        confirmLabel="Continue"
      />

      <FeedbackModal
        open={micError}
        onOpenChange={setMicError}
        title="Microphone"
        description="Speech recognition isn't available or permission was denied. You can still type your answer."
        variant="error"
      />
    </div>
  );
}

export function fieldEncouragement(done: number, total: number): string {
  return `Great, ${done} of ${total} fields done 💛`;
}
