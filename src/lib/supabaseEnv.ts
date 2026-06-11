/** Supabase anon key — supports both env var names used across deployments */
export function getSupabaseAnonKey(): string {
  return (
    import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
    import.meta.env.VITE_SUPABASE_ANON_KEY ||
    ""
  );
}

export function getSupabaseUrl(): string {
  return import.meta.env.VITE_SUPABASE_URL || "";
}
