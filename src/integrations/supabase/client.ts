/**
 * Default Supabase client — operational DB (documents, vault, templates).
 * For MasterVault identity/check-ins/coins/knowledge, use masterVaultClient.
 */
export { operationalSupabase as supabase } from "./operationalClient";
export { masterVault } from "./masterVaultClient";
