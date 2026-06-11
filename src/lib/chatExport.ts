import type { ChatMessage } from "@/hooks/useInterrogator";

/**
 * Extract the final document/form summary from chat messages.
 * Looks for the last assistant message with structured content.
 */
const SIGN_OFF_PATTERNS = [
  /^let me know/i,
  /^feel free/i,
  /^would you like/i,
  /^if you('d| would) like/i,
  /^is there anything/i,
  /^shall i/i,
  /^do you want/i,
  /^please let me know/i,
  /^i hope this/i,
  /^happy to help/i,
  /^i('m| am) here/i,
  /^don't hesitate/i,
  /^this (document|agreement|contract|form)/i,
  /^note:/i,
  /^\*+$/,
];

const PREAMBLE_PATTERNS = [
  /^instructions?:?/i,
  /^follow these steps/i,
  /^\d+\.\s+(highlight|copy|paste|save|upload)\b/i,
  /^\d+\.\s*\*\*(highlight|copy|paste|save|upload)\b/i,
  /^(highlight and copy|paste it into|save as pdf)/i,
  /^here(?:'s| is) (?:your|the) (?:completed|final)/i,
];

const DOCUMENT_TITLE_KEYWORDS = /\b(agreement|contract|form|policy|proposal|plan|summary|report|letter|statement|notice|invoice|application|addendum)\b/i;

function stripMarkdownDecorators(line: string): string {
  return line.replace(/\*\*/g, "").replace(/^#{1,3}\s+/, "").trim();
}

function isLikelyPreambleLine(line: string): boolean {
  const normalized = stripMarkdownDecorators(line);
  return PREAMBLE_PATTERNS.some((p) => p.test(normalized));
}

function isLikelyDocumentTitle(line: string): boolean {
  const normalized = stripMarkdownDecorators(line);
  if (!normalized || normalized.length < 8 || normalized.length > 120) return false;
  if (/[.:;!?]$/.test(normalized)) return false;
  if (isSignOff(normalized) || isLikelyPreambleLine(normalized)) return false;

  const words = normalized.split(/\s+/).filter(Boolean);
  if (words.length < 2 || words.length > 12) return false;

  const letters = normalized.replace(/[^A-Za-z]/g, "");
  if (letters.length < 6) return false;

  const uppercaseRatio = letters.replace(/[^A-Z]/g, "").length / letters.length;
  return DOCUMENT_TITLE_KEYWORDS.test(normalized) || uppercaseRatio >= 0.72;
}

function isStructuredLine(line: string): boolean {
  return (
    /^#{1,3}\s+\S+/.test(line) ||                    // # Heading
    /\*\*[^*]+\*\*\s*[:：]/.test(line) ||          // **Label**: value
    /^[-•*]\s+[^\n:：]{2,60}\s*[:：]/.test(line) || // - Label: value
    /^\d+\.\s+\*\*[^*]+\*\*\s*[:：]/.test(line) || // 1. **SECTION**: value
    /^\d+\.\s+[A-Z][A-Z\s&\/-]{3,}$/.test(line)   // 1. SECTION TITLE
  );
}

function isChatMetaLine(line: string): boolean {
  return (
    /^\d{1,2}\/\d{1,2}\/\d{2,4}/.test(line) ||
    /^\[?(you|interrogator)\]?\s*(\(|:)/i.test(line)
  );
}

function isLikelyDocumentContinuation(line: string): boolean {
  const normalized = stripMarkdownDecorators(line);
  if (!normalized) return false;
  if (isSignOff(normalized) || isLikelyPreambleLine(normalized) || isChatMetaLine(normalized)) return false;
  if (/\?$/.test(normalized)) return false;
  if (/^(here(?:'s| is)|i can|i'll|would you like|do you want|let me know|if you)/i.test(normalized)) return false;
  return true;
}

function isSignOff(line: string): boolean {
  const trimmed = line.trim();
  return SIGN_OFF_PATTERNS.some((p) => p.test(trimmed));
}

function trimDocumentContent(content: string): string {
  const lines = content.split("\n");

  const firstStructuredIdx = lines.findIndex((l) => isStructuredLine(l.trim()));
  const firstTitleIdx = lines.findIndex((l) => {
    const trimmed = l.trim();
    return /^#{1,3}\s+\S+/.test(trimmed) || isLikelyDocumentTitle(trimmed);
  });

  const startIdx = firstTitleIdx !== -1 ? firstTitleIdx : firstStructuredIdx;
  if (startIdx === -1) return content.trimEnd();

  let lastAnchorIdx = startIdx;
  for (let i = lines.length - 1; i >= startIdx; i--) {
    const trimmed = lines[i].trim();
    if (!trimmed) continue;
    if (isSignOff(trimmed) || isLikelyPreambleLine(trimmed) || isChatMetaLine(trimmed)) continue;

    if (isStructuredLine(trimmed) || isLikelyDocumentTitle(trimmed) || isLikelyDocumentContinuation(trimmed)) {
      lastAnchorIdx = i;
      break;
    }
  }

  let endIdx = lastAnchorIdx;
  for (let i = lastAnchorIdx + 1; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (!trimmed) continue;

    if (isSignOff(trimmed) || isLikelyPreambleLine(trimmed) || isChatMetaLine(trimmed)) break;

    if (isStructuredLine(trimmed) || isLikelyDocumentTitle(trimmed) || isLikelyDocumentContinuation(trimmed)) {
      endIdx = i;
      continue;
    }

    break;
  }

  return lines.slice(startIdx, endIdx + 1).join("\n").trimEnd();
}

export function extractDocument(messages: ChatMessage[]): string | null {
  const assistantMessages = messages
    .filter((m) => m.role === "assistant")
    .reverse();

  for (const msg of assistantMessages) {
    const lines = msg.content.split("\n").filter((l) => l.trim().length > 0);
    const structuredLines = lines.filter((l) => isStructuredLine(l));
    if (structuredLines.length >= 3) {
      return trimDocumentContent(msg.content);
    }
  }

  // Fallback: last assistant message if it's substantial (5+ lines)
  if (assistantMessages.length > 0) {
    const last = assistantMessages[0];
    const lines = last.content.split("\n").filter((l) => l.trim().length > 0);
    if (lines.length >= 5) return trimDocumentContent(last.content);
  }

  return null;
}

/**
 * Format extracted document as clean plain text.
 */
function formatDocumentAsText(documentContent: string): string {
  // Strip markdown bold markers for plain text
  const cleaned = documentContent
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/^#{1,3}\s+/gm, "");

  return `${cleaned}\n`;
}

/**
 * Format chat messages into a clean plain-text document (full chat).
 */
function formatAsText(messages: ChatMessage[], title: string): string {
  const divider = "─".repeat(50);
  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  let doc = `${title}\n`;
  doc += `Generated: ${date}\n`;
  doc += `${divider}\n\n`;

  for (const msg of messages) {
    const label = msg.role === "user" ? "You" : "Interrogator";
    const time = new Date(msg.timestamp).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    doc += `[${label}] (${time})\n`;
    doc += `${msg.content}\n\n`;
  }

  doc += `${divider}\n`;
  doc += `End of document · ${messages.length} messages\n`;
  return doc;
}

/**
 * Download extracted document as .txt
 */
export function exportDocumentAsText(messages: ChatMessage[], title = "Document Export") {
  const doc = extractDocument(messages);
  if (!doc) {
    exportAsText(messages, title);
    return;
  }
  const text = formatDocumentAsText(doc);
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  downloadBlob(blob, `${slugify(title)}.txt`);
}

/**
 * Download full chat as a .txt file.
 */
export function exportAsText(messages: ChatMessage[], title = "Chat Export") {
  const text = formatAsText(messages, title);
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  downloadBlob(blob, `${slugify(title)}.txt`);
}

/**
 * Print extracted document as a clean PDF.
 */
export function exportDocumentAsPdf(messages: ChatMessage[], title = "Document Export") {
  const doc = extractDocument(messages);
  if (!doc) {
    exportAsPdf(messages, title);
    return;
  }

  // Convert markdown-style content to HTML — no extra header/footer wrapping
  const contentHtml = doc
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/^### (.+)$/gm, '<h3 style="font-size:14px;margin:10px 0 4px;color:#1a1a2e;">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 style="font-size:15px;margin:12px 0 4px;color:#1a1a2e;">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 style="font-size:17px;margin:14px 0 6px;color:#1a1a2e;">$1</h1>')
    .replace(/^[-•*]\s+(.+)$/gm, '<div style="padding-left:16px;margin:2px 0;">• $1</div>')
    .replace(/\n/g, "<br/>");

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>${escapeHtml(title)}</title>
  <style>
    @media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; max-width: 700px; margin: 0 auto; padding: 40px 24px; color: #1a1a2e; font-size: 12px; line-height: 1.4; }
  </style>
</head>
<body>
  ${contentHtml}
</body>
</html>`;

  const printWindow = window.open("", "_blank");
  if (!printWindow) return;
  printWindow.document.write(html);
  printWindow.document.close();
  setTimeout(() => printWindow.print(), 400);
}

/**
 * Generate a styled HTML document with full chat and trigger browser Print → PDF.
 */
export function exportAsPdf(messages: ChatMessage[], title = "Chat Export") {
  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const messageHtml = messages
    .map((msg) => {
      const label = msg.role === "user" ? "You" : "Interrogator";
      const bgColor = msg.role === "user" ? "#1a1a2e" : "#f8f9fa";
      const textColor = msg.role === "user" ? "#e0e0e0" : "#1a1a2e";
      const borderColor = msg.role === "user" ? "#2d2d4e" : "#dee2e6";
      const content = msg.content
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\n/g, "<br/>");

      return `
        <div style="margin-bottom:12px;padding:12px 16px;border-radius:8px;background:${bgColor};color:${textColor};border:1px solid ${borderColor};">
          <div style="font-size:11px;font-weight:600;margin-bottom:6px;opacity:0.7;">${label}</div>
          <div style="font-size:13px;line-height:1.6;">${content}</div>
        </div>`;
    })
    .join("");

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>${escapeHtml(title)}</title>
  <style>
    @media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; max-width: 700px; margin: 0 auto; padding: 40px 24px; color: #1a1a2e; }
    .header { margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid #dee2e6; }
    .header h1 { font-size: 20px; margin: 0 0 4px; }
    .header p { font-size: 12px; color: #6c757d; margin: 0; }
    .footer { margin-top: 24px; padding-top: 12px; border-top: 1px solid #dee2e6; font-size: 11px; color: #adb5bd; text-align: center; }
  </style>
</head>
<body>
  <div class="header">
    <h1>${escapeHtml(title)}</h1>
    <p>${date} · ${messages.length} messages</p>
  </div>
  ${messageHtml}
  <div class="footer">Generated from PromptMe Chat</div>
</body>
</html>`;

  const printWindow = window.open("", "_blank");
  if (!printWindow) return;
  printWindow.document.write(html);
  printWindow.document.close();
  setTimeout(() => printWindow.print(), 400);
}

/**
 * Get document content as plain text for vault saving.
 */
export function getDocumentText(messages: ChatMessage[], title: string): string | null {
  const doc = extractDocument(messages);
  if (!doc) return null;
  return formatDocumentAsText(doc);
}

/* ---- Helpers ---- */

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 40) || "chat-export";
}

function escapeHtml(text: string) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
