import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useMode } from "@/contexts/ModeContext";

interface ModeToggleProps {
  className?: string;
  compact?: boolean;
}

export function ModeToggle({ className, compact }: ModeToggleProps) {
  const { mode, toggleMode, isLive } = useMode();

  return (
    <Button
      type="button"
      variant="outline"
      onClick={toggleMode}
      className={cn(
        "touch-target gap-2 rounded-full border-primary/30",
        compact ? "h-10 px-3" : "h-12 px-4",
        className
      )}
      aria-label={isLive ? "Switch to Love mode" : "Switch to Live mode"}
      title={isLive ? "Love mode — warm & calm" : "Live mode — focused & dark"}
    >
      {isLive ? (
        <Moon className="h-4 w-4 text-primary" />
      ) : (
        <Sun className="h-4 w-4 text-secondary" />
      )}
      {!compact && (
        <span className="text-sm font-medium">{isLive ? "Live" : "Love"}</span>
      )}
      <span className="sr-only">Current mode: {mode}</span>
    </Button>
  );
}
