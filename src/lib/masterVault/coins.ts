import { masterVault } from "@/integrations/supabase/masterVaultClient";
import { APP_SOURCE } from "@/lib/pmi/constants";

export type CoinAction = "template_used" | "pdf_filled" | "ai_generated";

const AMOUNTS: Record<CoinAction, number> = {
  template_used: 10,
  pdf_filled: 15,
  ai_generated: 25,
};

/**
 * Award PMI coins via MasterVault coin_ledger.
 * app_source is encoded in transaction_type since coin_ledger has no app_source column.
 */
export async function awardCoins(
  userId: string,
  action: CoinAction,
  referenceId?: string
): Promise<{ success: boolean; amount?: number; error?: string }> {
  const amount = AMOUNTS[action];
  const transaction_type = `${APP_SOURCE}:${action}`;

  const { error } = await masterVault.from("coin_ledger").insert({
    user_id: userId,
    amount,
    transaction_type,
    reference_id: referenceId ?? null,
  });

  if (error) {
    return { success: false, error: error.message };
  }
  return { success: true, amount };
}
