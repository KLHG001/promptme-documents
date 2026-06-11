export function exportFieldsAsPdf(
  title: string,
  values: Record<string, string>,
  fieldLabels?: Record<string, string>
) {
  const rows = Object.entries(values)
    .map(([key, val]) => {
      const label = fieldLabels?.[key] ?? key.replace(/_/g, " ");
      const display = val || "(skipped)";
      return `<tr><td style="padding:8px 12px;border-bottom:1px solid #e8e4dc;font-weight:600;color:#2C1A0E;width:40%">${escapeHtml(label)}</td><td style="padding:8px 12px;border-bottom:1px solid #e8e4dc;color:#2C1A0E">${escapeHtml(display)}</td></tr>`;
    })
    .join("");

  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>${escapeHtml(title)}</title>
  <style>
    @media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
    body { font-family: Georgia, 'Times New Roman', serif; max-width: 700px; margin: 0 auto; padding: 40px 24px; color: #2C1A0E; background: #FFFEF8; }
    h1 { color: #2ABFBF; font-size: 22px; margin-bottom: 4px; }
    .meta { font-family: Inter, sans-serif; font-size: 12px; color: #6b5c4f; margin-bottom: 24px; }
    table { width: 100%; border-collapse: collapse; font-family: Inter, sans-serif; font-size: 13px; }
    .footer { margin-top: 32px; font-family: Inter, sans-serif; font-size: 11px; color: #9a8b7a; text-align: center; }
  </style>
</head>
<body>
  <h1>${escapeHtml(title)}</h1>
  <p class="meta">Generated ${date} · PromptMe Documents</p>
  <table>${rows}</table>
  <p class="footer">Built by ADHD. Made for everyone.</p>
</body>
</html>`;

  const printWindow = window.open("", "_blank");
  if (!printWindow) return;
  printWindow.document.write(html);
  printWindow.document.close();
  setTimeout(() => printWindow.print(), 400);
}

export function formatFieldsAsText(
  title: string,
  values: Record<string, string>,
  fieldLabels?: Record<string, string>
): string {
  const divider = "─".repeat(50);
  let doc = `${title}\n${divider}\n\n`;
  for (const [key, val] of Object.entries(values)) {
    const label = fieldLabels?.[key] ?? key;
    doc += `${label}: ${val || "(skipped)"}\n`;
  }
  doc += `\n${divider}\n`;
  return doc;
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
