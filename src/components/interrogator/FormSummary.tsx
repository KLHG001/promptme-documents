import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RotateCcw, Download } from "lucide-react";
import { FormTemplate } from "@/lib/formTemplates";

interface FormSummaryProps {
  template: FormTemplate;
  answers: Record<string, string>;
  onReset: () => void;
}

function exportFormAsText(template: FormTemplate, answers: Record<string, string>) {
  const lines = [`${template.name}\n${"─".repeat(40)}\n`];
  for (const field of template.fields) {
    const val =
      field.type === "currency" && answers[field.id]
        ? `$${parseFloat(answers[field.id]).toFixed(2)}`
        : answers[field.id] || "—";
    lines.push(`${field.label}: ${val}`);
  }
  lines.push(`\n${"─".repeat(40)}\nGenerated: ${new Date().toLocaleString()}`);
  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${template.id}-submission.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function FormSummary({ template, answers, onReset }: FormSummaryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="max-w-md mx-auto mt-4"
    >
      <Card className="border-primary/30 bg-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-display">Submission Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {template.fields.map((field) => (
            <div key={field.id} className="flex justify-between items-start gap-4 text-sm">
              <span className="text-muted-foreground shrink-0">{field.label}</span>
              <span className="text-foreground text-right font-medium">
                {field.type === "currency" && answers[field.id]
                  ? `$${parseFloat(answers[field.id]).toFixed(2)}`
                  : answers[field.id] || "—"}
              </span>
            </div>
          ))}

          <div className="flex gap-2 pt-3 border-t border-border">
            <Button variant="outline" size="sm" onClick={onReset} className="flex-1">
              <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
              Start Over
            </Button>
            <Button size="sm" className="flex-1" onClick={() => exportFormAsText(template, answers)}>
              <Download className="w-3.5 h-3.5 mr-1.5" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}