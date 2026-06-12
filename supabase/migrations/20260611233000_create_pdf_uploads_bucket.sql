-- Public bucket for PDF uploads (PromptMe Documents)
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'pdf-uploads',
  'pdf-uploads',
  true,
  5242880,
  ARRAY['application/pdf']::text[]
)
ON CONFLICT (id) DO UPDATE SET
  public = EXCLUDED.public,
  file_size_limit = EXCLUDED.file_size_limit,
  allowed_mime_types = EXCLUDED.allowed_mime_types;

CREATE POLICY "Public read pdf uploads"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'pdf-uploads');

CREATE POLICY "Authenticated upload pdf uploads"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'pdf-uploads');

CREATE POLICY "Authenticated update own pdf uploads"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'pdf-uploads' AND (storage.foldername(name))[1] = auth.uid()::text)
  WITH CHECK (bucket_id = 'pdf-uploads' AND (storage.foldername(name))[1] = auth.uid()::text);

CREATE POLICY "Authenticated delete own pdf uploads"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'pdf-uploads' AND (storage.foldername(name))[1] = auth.uid()::text);
