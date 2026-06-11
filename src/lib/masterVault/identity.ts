import { masterVault } from "@/integrations/supabase/masterVaultClient";

export interface UserIdentityVoice {
  purpose_statement: string | null;
  communication_style: string | null;
  personality_traits: string[] | null;
  financial_voice: string | null;
}

function buildFinancialVoice(row: {
  financial_outlook: string | null;
  debt_management_goals: string | null;
  voice_of_influence: string | null;
}): string | null {
  const parts = [
    row.financial_outlook,
    row.debt_management_goals,
    row.voice_of_influence,
  ].filter(Boolean);
  return parts.length ? parts.join(". ") : null;
}

/** Pull MasterVault profile fields so The Interrogator drafts in the user's voice */
export async function fetchUserIdentityVoice(userId: string): Promise<UserIdentityVoice | null> {
  const { data, error } = await masterVault
    .from("profiles")
    .select(
      "purpose_statement, communication_style, personality_traits, financial_outlook, debt_management_goals, voice_of_influence"
    )
    .eq("id", userId)
    .maybeSingle();

  if (error || !data) return null;

  return {
    purpose_statement: data.purpose_statement,
    communication_style: data.communication_style,
    personality_traits: data.personality_traits,
    financial_voice: buildFinancialVoice(data),
  };
}

export function formatIdentityForPrompt(identity: UserIdentityVoice | null): string {
  if (!identity) return "";

  const lines: string[] = [];
  if (identity.purpose_statement) {
    lines.push(`Purpose: ${identity.purpose_statement}`);
  }
  if (identity.communication_style) {
    lines.push(`Communication style: ${identity.communication_style}`);
  }
  if (identity.personality_traits?.length) {
    lines.push(`Personality traits: ${identity.personality_traits.join(", ")}`);
  }
  if (identity.financial_voice) {
    lines.push(`Financial voice: ${identity.financial_voice}`);
  }

  if (!lines.length) return "";

  return `\n\n## User voice profile (draft documents in this voice)\n${lines.join("\n")}`;
}
