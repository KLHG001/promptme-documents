import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const MASTER_VAULT_URL =
  import.meta.env.VITE_MASTERVAULT_SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL;
const MASTER_VAULT_KEY =
  import.meta.env.VITE_MASTERVAULT_SUPABASE_PUBLISHABLE_KEY ||
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!MASTER_VAULT_URL || !MASTER_VAULT_KEY) {
  throw new Error(
    "Missing MasterVault env vars. Set VITE_MASTERVAULT_SUPABASE_URL and VITE_MASTERVAULT_SUPABASE_PUBLISHABLE_KEY, or use VITE_SUPABASE_* for a single project."
  );
}

/** PMI OS MasterVault — identity, check-ins, coins, knowledge */
export const masterVault = createClient<Database>(MASTER_VAULT_URL, MASTER_VAULT_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  },
});
