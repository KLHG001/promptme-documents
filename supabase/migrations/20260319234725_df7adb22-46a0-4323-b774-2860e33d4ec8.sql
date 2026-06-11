-- Create vault_documents table
CREATE TABLE public.vault_documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name text NOT NULL,
  file_path text NOT NULL,
  folder_path text NOT NULL DEFAULT '/',
  type text NOT NULL DEFAULT 'General',
  status text NOT NULL DEFAULT 'draft',
  size bigint,
  mime_type text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.vault_documents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own vault documents"
  ON public.vault_documents FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own vault documents"
  ON public.vault_documents FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own vault documents"
  ON public.vault_documents FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('vault_documents', 'vault_documents', false);

-- Storage RLS: users can upload to their own folder
CREATE POLICY "Users can upload vault files"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'vault_documents' AND (storage.foldername(name))[1] = auth.uid()::text);

CREATE POLICY "Users can read own vault files"
  ON storage.objects FOR SELECT
  TO authenticated
  USING (bucket_id = 'vault_documents' AND (storage.foldername(name))[1] = auth.uid()::text);

CREATE POLICY "Users can delete own vault files"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'vault_documents' AND (storage.foldername(name))[1] = auth.uid()::text);