import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const ALLOWED_CURRENCIES = ["KES", "USD", "GHS", "NGN", "ZAR"] as const;
type Currency = typeof ALLOWED_CURRENCIES[number];

// Min/max in major units per currency (anti-abuse bounds)
const BOUNDS: Record<Currency, { min: number; max: number }> = {
  KES: { min: 10, max: 1_000_000 },
  USD: { min: 1, max: 10_000 },
  GHS: { min: 1, max: 100_000 },
  NGN: { min: 100, max: 5_000_000 },
  ZAR: { min: 10, max: 200_000 },
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simple in-memory rate limit (per cold start). Best-effort anti-spam.
const rateMap = new Map<string, { count: number; reset: number }>();
function rateLimit(key: string, limit = 5, windowMs = 60_000) {
  const now = Date.now();
  const entry = rateMap.get(key);
  if (!entry || entry.reset < now) {
    rateMap.set(key, { count: 1, reset: now + windowMs });
    return true;
  }
  entry.count += 1;
  return entry.count <= limit;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    if (req.method !== "POST") {
      return json({ error: "Method not allowed" }, 405);
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("cf-connecting-ip") ||
      "unknown";
    if (!rateLimit(ip)) {
      return json({ error: "Too many requests. Please try again shortly." }, 429);
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") return json({ error: "Invalid body" }, 400);

    const { amount, currency, email, name, message, callback_url } = body as Record<string, unknown>;

    // Validate currency
    if (typeof currency !== "string" || !ALLOWED_CURRENCIES.includes(currency as Currency)) {
      return json({ error: "Unsupported currency" }, 400);
    }
    const cur = currency as Currency;

    // Validate amount
    const amt = typeof amount === "number" ? amount : Number(amount);
    if (!Number.isFinite(amt) || amt <= 0) return json({ error: "Invalid amount" }, 400);
    const { min, max } = BOUNDS[cur];
    if (amt < min || amt > max) {
      return json({ error: `Amount must be between ${min} and ${max} ${cur}` }, 400);
    }

    // Validate email
    if (typeof email !== "string" || !EMAIL_RE.test(email) || email.length > 255) {
      return json({ error: "Invalid email" }, 400);
    }

    // Optional name / message
    const safeName =
      typeof name === "string" ? name.trim().slice(0, 100) : "";
    const safeMessage =
      typeof message === "string" ? message.trim().slice(0, 500) : "";

    // Validate callback URL (must be http/https)
    let cbUrl: string | undefined;
    if (typeof callback_url === "string") {
      try {
        const u = new URL(callback_url);
        if (u.protocol !== "https:" && u.protocol !== "http:") throw new Error("bad protocol");
        cbUrl = u.toString();
      } catch {
        return json({ error: "Invalid callback_url" }, 400);
      }
    }

    const PAYSTACK_SECRET_KEY = Deno.env.get("PAYSTACK_SECRET_KEY");
    if (!PAYSTACK_SECRET_KEY) return json({ error: "Server not configured" }, 500);

    // Convert to subunit (kobo/cents). Paystack expects integer subunits.
    const amountSubunit = Math.round(amt * 100);

    const paystackRes = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: amountSubunit,
        currency: cur,
        callback_url: cbUrl,
        metadata: {
          donor_name: safeName || undefined,
          message: safeMessage || undefined,
          custom_fields: [
            ...(safeName
              ? [{ display_name: "Donor Name", variable_name: "donor_name", value: safeName }]
              : []),
            ...(safeMessage
              ? [{ display_name: "Message", variable_name: "message", value: safeMessage }]
              : []),
          ],
        },
      }),
    });

    const data = await paystackRes.json();
    if (!paystackRes.ok || !data?.status) {
      console.error("Paystack init error", data);
      return json({ error: data?.message || "Failed to initialize payment" }, 502);
    }

    const reference: string = data.data.reference;
    const authorization_url: string = data.data.authorization_url;

    // Persist a pending donation record (server-side trusted amount)
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { error: dbErr } = await supabase.from("donations").insert({
      reference,
      amount: amt,
      currency: cur,
      status: "pending",
      donor_email: email,
      donor_name: safeName || null,
      message: safeMessage || null,
    });
    if (dbErr) console.error("DB insert error", dbErr);

    return json({ authorization_url, reference }, 200);
  } catch (e) {
    console.error("initialize-payment error", e);
    return json({ error: "Unexpected error" }, 500);
  }
});

function json(payload: unknown, status: number) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}