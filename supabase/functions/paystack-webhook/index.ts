import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { createHmac } from "node:crypto";

// Webhook does NOT use CORS (server-to-server) and does NOT require JWT.
Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const PAYSTACK_SECRET_KEY = Deno.env.get("PAYSTACK_SECRET_KEY");
  if (!PAYSTACK_SECRET_KEY) return new Response("Not configured", { status: 500 });

  const signature = req.headers.get("x-paystack-signature");
  const rawBody = await req.text();

  // Verify HMAC SHA512 signature
  const expected = createHmac("sha512", PAYSTACK_SECRET_KEY).update(rawBody).digest("hex");
  if (!signature || signature !== expected) {
    console.warn("Invalid Paystack signature");
    return new Response("Invalid signature", { status: 401 });
  }

  let event: any;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return new Response("Bad JSON", { status: 400 });
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  try {
    const type: string = event?.event ?? "";
    const txn = event?.data;
    const reference: string | undefined = txn?.reference;

    if (!reference) return new Response("ok", { status: 200 });

    if (type === "charge.success") {
      // Idempotency: only mark success once
      const { data: existing } = await supabase
        .from("donations")
        .select("status, amount, currency")
        .eq("reference", reference)
        .maybeSingle();

      if (existing?.status === "success") {
        return new Response("ok", { status: 200 });
      }

      const paystackAmountMajor = Number(txn.amount) / 100;
      const paystackCurrency: string = txn.currency;

      // Validate amount/currency match our trusted record if present
      const matches = existing
        ? Math.abs(Number(existing.amount) - paystackAmountMajor) < 0.01 &&
          existing.currency === paystackCurrency
        : true;

      await supabase
        .from("donations")
        .update({
          status: matches ? "success" : "amount_mismatch",
          paid_at: txn.paid_at ?? new Date().toISOString(),
          raw_event: txn,
        })
        .eq("reference", reference);
    } else if (type.startsWith("charge.")) {
      await supabase
        .from("donations")
        .update({ status: "failed", raw_event: txn })
        .eq("reference", reference);
    }

    return new Response("ok", { status: 200 });
  } catch (e) {
    console.error("paystack-webhook error", e);
    return new Response("error", { status: 500 });
  }
});