import { cn } from "@/lib/utils";

interface AppFooterProps {
  className?: string;
}

export function AppFooter({ className }: AppFooterProps) {
  return (
    <footer className={cn("text-center py-2 px-4", className)}>
      <p className="text-xs text-muted-foreground">
        Built by ADHD. Made for everyone.
      </p>
    </footer>
  );
}
