import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export interface ProgressIndicatorProps {
  message?: string;
  submessage?: string;
  /** 0–100 for determinate progress; omit for indeterminate spinner */
  progress?: number | null;
  className?: string;
  compact?: boolean;
  /** Cover the viewport with a calm backdrop — use during uploads & generation */
  fullscreen?: boolean;
}

export function ProgressIndicator({
  message = "Processing…",
  submessage,
  progress = null,
  className,
  compact = false,
  fullscreen = false,
}: ProgressIndicatorProps) {
  const content = (
    <div
      className={cn(
        "w-full max-w-md mx-auto rounded-xl border border-primary/30 bg-card text-center shadow-lg",
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
        <div className={cn("relative mx-auto mb-4", compact ? "w-12 h-12" : "w-14 h-14")}>
          <div
            className="absolute inset-0 rounded-full border-2 border-primary/25 animate-pulse"
            aria-hidden
          />
          <div className="absolute inset-0 rounded-full border-2 border-primary/15" aria-hidden />
          <div
            className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent animate-spin"
            aria-hidden
          />
          <div
            className="absolute inset-1 rounded-full bg-primary/10 animate-pulse"
            aria-hidden
          />
        </div>
      )}
      <p
        className={cn(
          "font-serif font-medium text-foreground",
          compact ? "text-sm" : "text-base"
        )}
      >
        {message}
      </p>
      {submessage && (
        <p className="text-sm text-muted-foreground mt-1.5 break-words px-2">{submessage}</p>
      )}
    </div>
  );

  if (fullscreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/85 backdrop-blur-sm p-4">
        {content}
      </div>
    );
  }

  return content;
}

/** Full-screen overlay wrapper — same calm centered layout everywhere */
export function ProgressOverlay(props: ProgressIndicatorProps) {
  return <ProgressIndicator {...props} fullscreen />;
}
