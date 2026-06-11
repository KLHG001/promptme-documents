import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle2, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export type FeedbackVariant = "success" | "error" | "info";

interface FeedbackModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  variant?: FeedbackVariant;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  showCancel?: boolean;
}

const icons: Record<FeedbackVariant, typeof CheckCircle2> = {
  success: CheckCircle2,
  error: AlertCircle,
  info: Info,
};

const iconColors: Record<FeedbackVariant, string> = {
  success: "text-primary",
  error: "text-destructive",
  info: "text-secondary",
};

export function FeedbackModal({
  open,
  onOpenChange,
  title,
  description,
  variant = "info",
  confirmLabel = "Got it",
  cancelLabel = "Cancel",
  onConfirm,
  showCancel = false,
}: FeedbackModalProps) {
  const Icon = icons[variant];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-start gap-3">
            <Icon className={cn("h-6 w-6 flex-shrink-0 mt-0.5", iconColors[variant])} />
            <div>
              <DialogTitle className="font-serif text-lg">{title}</DialogTitle>
              {description && (
                <DialogDescription className="mt-2 text-sm leading-relaxed">
                  {description}
                </DialogDescription>
              )}
            </div>
          </div>
        </DialogHeader>
        <DialogFooter className="gap-2 sm:gap-0">
          {showCancel && (
            <Button
              variant="ghost"
              className="touch-target"
              onClick={() => onOpenChange(false)}
            >
              {cancelLabel}
            </Button>
          )}
          <Button
            className="touch-target"
            onClick={() => {
              onConfirm?.();
              onOpenChange(false);
            }}
          >
            {confirmLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
