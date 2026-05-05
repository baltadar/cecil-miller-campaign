import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    const url = new URL(req.url);
    const reference = url.searchParams.get("reference");
    if (!reference || !/^[A-Za-z0-9_-]{4,100}$/.test(reference)) {
      return json({ error: "Invalid reference" }, 400);
    }

    const PAYSTACK_SECRET_KEY = Deno.env.get("PAYSTACK_SECRET_KEY");
    if (!PAYSTACK_SECRET_KEY) return json({ error: "Server not configured" }, 500);

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    // Look up our trusted record FIRST (expected amount/currency)
    const { data: record } = await supabase
      .from("donations")
      .select("reference, amount, currency, status")
      .eq("reference", reference)
      .maybeSingle();

    const res = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
      headers: { Authorization: `Bearer ${PAYSTACK_SECRET_KEY}` },
    });
    const data = await res.json();
    if (!res.ok || !data?.status) {
      return json({ verified: false, error: data?.message || "Verify failed" }, 502);
    }

    const txn = data.data;
    const paystackStatus: string = txn.status; // success | failed | abandoned
    const paystackAmountMajor = Number(txn.amount) / 100;
    const paystackCurrency: string = txn.currency;

    // Cross-check against our trusted record
    let amountMatches = true;
    if (record) {
      amountMatches =
        Math.abs(Number(record.amount) - paystackAmountMajor) < 0.01 &&
        record.currency === paystackCurrency;
    }

    const finalStatus = paystackStatus === "success" && amountMatches ? "success" : paystackStatus;

    await supabase
      .from("donations")
      .update({
        status: finalStatus,
        paid_at: txn.paid_at ?? null,
        raw_event: txn,
      })
      .eq("reference", reference);

    return json(
      {
        verified: finalStatus === "success",
        status: finalStatus,
        amount: paystackAmountMajor,
        currency: paystackCurrency,
      },
      200,
    );
  } catch (e) {
    console.error("verify-payment error", e);
    return json({ error: "Unexpected error" }, 500);
  }
});

function json(payload: unknown, status: number) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}