import { supabase } from "@/integrations/supabase/client";
import type { ChatMessage } from "@/hooks/useInterrogator";
import { getDocumentText } from "@/lib/chatExport";

function formatAsText(messages: ChatMessage[], title: string): string {
  const divider = "─".repeat(50);
  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit",
  });
  let doc = `${title}\nGenerated: ${date}\n${divider}\n\n`;
  for (const msg of messages) {
    const label = msg.role === "user" ? "You" : "Interrogator";
    const time = new Date(msg.timestamp).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
    doc += `[${label}] (${time})\n${msg.content}\n\n`;
  }
  doc += `${divider}\nEnd of document · ${messages.length} messages\n`;
  return doc;
}

export async function saveToVault(
  messages: ChatMessage[],
  folderPath: string,
  fileName: string,
  title = "PromptMe Chat",
  documentOnly = false
): Promise<{ success: boolean; error?: string }> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { success: false, error: "Not authenticated" };

  let text: string;
  if (documentOnly) {
    const docText = getDocumentText(messages, title);
    text = docText ?? formatAsText(messages, title);
  } else {
    text = formatAsText(messages, title);
  }

  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const fileId = crypto.randomUUID();
  const storagePath = `${user.id}/${fileId}-${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from("vault_documents")
    .upload(storagePath, blob, { contentType: "text/plain" });

  if (uploadError) return { success: false, error: uploadError.message };

  const { error: dbError } = await supabase
    .from("vault_documents")
    .insert({
      user_id: user.id,
      name: fileName,
      file_path: storagePath,
      folder_path: folderPath,
      type: "Export",
      status: "draft",
      size: blob.size,
      mime_type: "text/plain",
    });

  if (dbError) return { success: false, error: dbError.message };

  return { success: true };
}

function inferFileType(file: File): string {
  if (file.type.startsWith("image/")) return "Image";
  if (file.type === "application/pdf") return "PDF";
  if (file.type.includes("word") || file.name.endsWith(".docx")) return "Document";
  if (file.type.startsWith("text/")) return "Text";
  return "File";
}

export async function uploadVaultFile(
  file: File,
  folderPath: string,
  onProgress?: (pct: number) => void
): Promise<{ success: boolean; error?: string }> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { success: false, error: "Not authenticated" };

  onProgress?.(10);
  const fileId = crypto.randomUUID();
  const storagePath = `${user.id}/${fileId}-${file.name}`;

  const { error: uploadError } = await supabase.storage
    .from("vault_documents")
    .upload(storagePath, file, { contentType: file.type || "application/octet-stream" });

  onProgress?.(70);
  if (uploadError) return { success: false, error: uploadError.message };

  const { error: dbError } = await supabase.from("vault_documents").insert({
    user_id: user.id,
    name: file.name,
    file_path: storagePath,
    folder_path: folderPath,
    type: inferFileType(file),
    status: "draft",
    size: file.size,
    mime_type: file.type || null,
  });

  onProgress?.(100);
  if (dbError) return { success: false, error: dbError.message };
  return { success: true };
}

export async function deleteVaultFile(
  id: string,
  filePath: string
): Promise<{ success: boolean; error?: string }> {
  await supabase.storage.from("vault_documents").remove([filePath]);
  const { error } = await supabase.from("vault_documents").delete().eq("id", id);
  if (error) return { success: false, error: error.message };
  return { success: true };
}

export async function renameVaultFile(
  id: string,
  name: string
): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabase.from("vault_documents").update({ name }).eq("id", id);
  if (error) return { success: false, error: error.message };
  return { success: true };
}

export async function moveVaultFile(
  id: string,
  folderPath: string
): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabase.from("vault_documents").update({ folder_path: folderPath }).eq("id", id);
  if (error) return { success: false, error: error.message };
  return { success: true };
}

export async function downloadVaultFile(filePath: string, fileName: string) {
  const { data, error } = await supabase.storage
    .from("vault_documents")
    .download(filePath);

  if (error || !data) return;

  const url = URL.createObjectURL(data);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
