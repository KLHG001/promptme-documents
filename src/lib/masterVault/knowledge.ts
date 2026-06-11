import { masterVault } from "@/integrations/supabase/masterVaultClient";
import { APP_SOURCE } from "@/lib/pmi/constants";

export interface SaveTechniqueInput {
  userId: string;
  content: string;
  domain?: string;
  tags?: string[];
  source?: string;
}

/** Harvest a document technique into MasterVault knowledge_vault */
export async function saveTechniqueToKnowledgeVault(
  input: SaveTechniqueInput
): Promise<{ success: boolean; id?: string; error?: string }> {
  const { data, error } = await masterVault
    .from("knowledge_vault")
    .insert({
      user_id: input.userId,
      content: input.content,
      knowledge_type: "technique",
      app_source: APP_SOURCE,
      domain: input.domain ?? "documents",
      tags: input.tags ?? ["promptme", "document"],
      source: input.source ?? "The Interrogator",
    })
    .select("id")
    .single();

  if (error) {
    return { success: false, error: error.message };
  }
  return { success: true, id: data.id };
}
