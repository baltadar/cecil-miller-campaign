import { useState } from "react";
import { Heart, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const CURRENCIES = [
  { code: "KES", label: "KES — Kenyan Shilling", min: 10 },
  { code: "USD", label: "USD — US Dollar", min: 1 },
  { code: "GHS", label: "GHS — Ghanaian Cedi", min: 1 },
  { code: "NGN", label: "NGN — Nigerian Naira", min: 100 },
  { code: "ZAR", label: "ZAR — South African Rand", min: 10 },
] as const;

const schema = z.object({
  amount: z.number().positive(),
  currency: z.enum(["KES", "USD", "GHS", "NGN", "ZAR"]),
  email: z.string().trim().email().max(255),
  name: z.string().trim().max(100).optional(),
  message: z.string().trim().max(500).optional(),
});

interface Props {
  trigger: React.ReactNode;
}

export default function DonateDialog({ trigger }: Props) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currency, setCurrency] = useState<(typeof CURRENCIES)[number]["code"]>("KES");
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const minForCurrency = CURRENCIES.find((c) => c.code === currency)?.min ?? 1;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse({
      amount: Number(amount),
      currency,
      email,
      name: name || undefined,
      message: message || undefined,
    });
    if (!parsed.success) {
      toast({
        title: "Please check your details",
        description: parsed.error.issues[0]?.message ?? "Invalid input",
        variant: "destructive",
      });
      return;
    }
    if (parsed.data.amount < minForCurrency) {
      toast({
        title: "Amount too small",
        description: `Minimum is ${minForCurrency} ${currency}.`,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const callback_url = `${window.location.origin}/donate/callback`;
      const { data, error } = await supabase.functions.invoke("initialize-payment", {
        body: { ...parsed.data, callback_url },
      });
      if (error) throw error;
      if (!data?.authorization_url) throw new Error("Could not start payment");
      window.location.href = data.authorization_url;
    } catch (err: any) {
      console.error(err);
      toast({
        title: "Payment could not be started",
        description: err?.message ?? "Please try again in a moment.",
        variant: "destructive",
      });
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" fill="currentColor" />
            Donate to the Campaign
          </DialogTitle>
          <DialogDescription>
            Secure payment via Paystack. All donations are anonymous.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-1">
              <Label htmlFor="currency">Currency</Label>
              <Select value={currency} onValueChange={(v) => setCurrency(v as typeof currency)}>
                <SelectTrigger id="currency"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {CURRENCIES.map((c) => (
                    <SelectItem key={c.code} value={c.code}>{c.code}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-2">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                inputMode="decimal"
                min={minForCurrency}
                step="any"
                placeholder={`Min ${minForCurrency}`}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              maxLength={255}
            />
            <p className="text-[11px] text-muted-foreground mt-1">Required by Paystack for your receipt. Never shown publicly.</p>
          </div>

          <div>
            <Label htmlFor="name">Name (optional)</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} maxLength={100} />
          </div>

          <div>
            <Label htmlFor="message">Message of support (optional)</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={500}
              rows={3}
              placeholder="A short note for the campaign team"
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? (
              <><Loader2 className="h-4 w-4 animate-spin" /> Redirecting…</>
            ) : (
              <><Heart className="h-4 w-4" fill="currentColor" /> Continue to Secure Payment</>
            )}
          </Button>

          <p className="text-[11px] text-center text-muted-foreground">
            You'll be redirected to Paystack's secure checkout. We never see your card details.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}