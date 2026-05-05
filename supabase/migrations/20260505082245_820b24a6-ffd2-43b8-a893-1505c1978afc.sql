CREATE POLICY "Deny all public access to donations"
ON public.donations
FOR ALL
TO anon, authenticated
USING (false)
WITH CHECK (false);