CREATE TABLE public.donations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  reference TEXT NOT NULL UNIQUE,
  amount NUMERIC(14,2) NOT NULL,
  currency TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  donor_email TEXT NOT NULL,
  donor_name TEXT,
  message TEXT,
  paid_at TIMESTAMPTZ,
  raw_event JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_donations_status ON public.donations(status);
CREATE INDEX idx_donations_created_at ON public.donations(created_at DESC);

ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;

-- No public policies. Only service role (used by edge functions) can read/write.

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_donations_updated_at
BEFORE UPDATE ON public.donations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();