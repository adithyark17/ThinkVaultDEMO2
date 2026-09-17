import { NextResponse } from "next/server";
import { createZohoLead, zohoConfigured } from "@/lib/zoho";

export const runtime = "nodejs";

/* POST /api/lead — single lead-routing endpoint for all site forms
   (contact, newsletter, case-study notify). Routes to Zoho CRM when
   ZOHO_* env vars are set; stub-logs otherwise. */
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const email = (body.email || "").trim();
  const name = (body.name || "").trim();
  if (!email || !/.+@.+\..+/.test(email)) {
    return NextResponse.json({ ok: false, error: "A valid email is required" }, { status: 400 });
  }

  // Honeypot: bots fill the hidden field; pretend success and drop.
  if (body.website) return NextResponse.json({ ok: true });

  try {
    const result = await createZohoLead({
      name: name || email,
      email,
      company: (body.company || "").trim().slice(0, 200),
      interest: (body.interest || "").trim().slice(0, 100),
      message: (body.message || "").trim().slice(0, 5000),
      source: (body.source || "").trim().slice(0, 100) || undefined,
    });
    return NextResponse.json({ ok: true, stub: result.stub === true });
  } catch (err) {
    console.error("[lead route]", err.message);
    return NextResponse.json(
      { ok: false, error: "Could not submit right now. Please try again.", configured: zohoConfigured },
      { status: 502 }
    );
  }
}
