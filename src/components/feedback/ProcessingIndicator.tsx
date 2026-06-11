import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface ProcessingIndicatorProps {
  message?: string;
  submessage?: string;
  /** 0–100 for determinate progress; omit for indeterminate spinner */
  progress?: number | null;
  className?: string;
  compact?: boolean;
}

export function ProcessingIndicator({
  message = "Processing your document…",
  submessage,
  progress = null,
  className,
  compact = false,
}: ProcessingIndicatorProps) {
  return (
    <div
      className={cn(
        "w-full max-w-md mx-auto rounded-xl border border-primary/30 bg-card text-center",
        compact ? "p-4" : "p-6 sm:p-8",
        className
      )}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      {progress != null ? (
        <div className="space-y-2 mb-4">
          <Progress value={progress} className="h-2" />
          <p className="text-xs text-muted-foreground tabular-nums">{Math.round(progress)}%</p>
        </div>
      ) : (
        <div className={cn("relative mx-auto mb-4", compact ? "w-10 h-10" : "w-12 h-12")}>
          <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
          <div className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        </div>
      )}
      <p className={cn("font-serif font-medium text-foreground animate-pulse", compact ? "text-sm" : "text-base")}>
        {message}
      </p>
      {submessage && (
        <p className="text-sm text-muted-foreground mt-1 break-words">{submessage}</p>
      )}
    </div>
  );
}
