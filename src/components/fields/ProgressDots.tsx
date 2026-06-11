import { cn } from "@/lib/utils";

interface ProgressDotsProps {
  total: number;
  current: number;
  filled?: number;
  className?: string;
}

export function ProgressDots({ total, current, filled, className }: ProgressDotsProps) {
  return (
    <div
      className={cn("flex items-center justify-center gap-2 flex-wrap", className)}
      role="progressbar"
      aria-valuenow={filled ?? current}
      aria-valuemin={0}
      aria-valuemax={total}
    >
      {Array.from({ length: total }).map((_, i) => {
        const done = filled !== undefined ? i < filled : i < current;
        const active = i === current;
        return (
          <div
            key={i}
            className={cn(
              "h-2.5 w-2.5 rounded-full transition-colors",
              done && "bg-primary",
              active && !done && "bg-primary/40 ring-2 ring-primary/30",
              !done && !active && "bg-muted"
            )}
          />
        );
      })}
    </div>
  );
}
