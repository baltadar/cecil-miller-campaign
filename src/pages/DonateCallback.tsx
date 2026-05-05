import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2, XCircle, Loader2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/site/Layout";

type State =
  | { kind: "loading" }
  | { kind: "success"; amount: number; currency: string }
  | { kind: "failed"; reason: string };

export default function DonateCallback() {
  const [params] = useSearchParams();
  const reference = params.get("reference") || params.get("trxref");
  const [state, setState] = useState<State>({ kind: "loading" });

  useEffect(() => {
    if (!reference) {
      setState({ kind: "failed", reason: "Missing payment reference." });
      return;
    }
    (async () => {
      try {
        const { data, error } = await supabase.functions.invoke("verify-payment", {
          method: "GET" as any,
          body: undefined,
          // pass reference as query string
          headers: {},
        } as any);
        // Fallback: invoke doesn't always pass query — use direct fetch
        const projectUrl = import.meta.env.VITE_SUPABASE_URL;
        const anon = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
        const res = await fetch(
          `${projectUrl}/functions/v1/verify-payment?reference=${encodeURIComponent(reference)}`,
          { headers: { apikey: anon, Authorization: `Bearer ${anon}` } },
        );
        const json = await res.json();
        if (!res.ok) throw new Error(json?.error || "Verification failed");
        if (json.verified) {
          setState({ kind: "success", amount: json.amount, currency: json.currency });
        } else {
          setState({ kind: "failed", reason: `Payment ${json.status ?? "not completed"}.` });
        }
      } catch (e: any) {
        setState({ kind: "failed", reason: e?.message ?? "Could not verify payment." });
      }
    })();
  }, [reference]);

  return (
    <Layout>
      <section className="container py-24">
        <div className="max-w-lg mx-auto text-center border border-border bg-background p-8">
          {state.kind === "loading" && (
            <>
              <Loader2 className="h-10 w-10 animate-spin mx-auto text-primary mb-4" />
              <h1 className="text-2xl font-bold mb-2">Verifying your payment…</h1>
              <p className="text-muted-foreground">Hang tight, this only takes a moment.</p>
            </>
          )}
          {state.kind === "success" && (
            <>
              <CheckCircle2 className="h-12 w-12 mx-auto text-[#4caf50] mb-4" />
              <h1 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
                Thank you! <Heart className="h-5 w-5 text-primary" fill="currentColor" />
              </h1>
              <p className="text-muted-foreground mb-6">
                We've received your contribution of <strong>{state.amount.toLocaleString()} {state.currency}</strong>. Your support means everything.
              </p>
              <Button asChild><Link to="/">Back to home</Link></Button>
            </>
          )}
          {state.kind === "failed" && (
            <>
              <XCircle className="h-12 w-12 mx-auto text-destructive mb-4" />
              <h1 className="text-2xl font-bold mb-2">Payment not completed</h1>
              <p className="text-muted-foreground mb-6">{state.reason}</p>
              <Button asChild variant="outline"><Link to="/#lets-talk">Try again</Link></Button>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
}