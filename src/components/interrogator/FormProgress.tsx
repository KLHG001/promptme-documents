import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { FormTemplate } from "@/lib/formTemplates";

interface FormProgressProps {
  template: FormTemplate;
  answers: Record<string, string>;
  progress: number;
  isComplete: boolean;
}

export function FormProgress({ template, answers, progress, isComplete }: FormProgressProps) {
  const answeredCount = Object.keys(answers).filter((k) => answers[k]?.trim()).length;
  const currentIndex = Math.min(answeredCount, template.fields.length - 1);

  return (
    <div className="px-4 py-3 border-b border-border bg-card/50">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-serif font-semibold text-foreground">{template.name}</h2>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            {answeredCount}/{template.fields.length}
            {isComplete && <CheckCircle className="w-3.5 h-3.5 text-primary" />}
          </span>
        </div>
        <div className="flex items-center gap-2" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
          {template.fields.map((field, i) => {
            const done = !!answers[field.id]?.trim();
            const current = !done && i === currentIndex;
            return (
              <div
                key={field.id}
                title={field.label}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-colors",
                  done && "bg-primary",
                  current && "bg-primary/40 ring-2 ring-primary/30",
                  !done && !current && "bg-muted"
                )}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
