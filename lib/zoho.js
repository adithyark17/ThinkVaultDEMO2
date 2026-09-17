/* Zoho CRM lead routing — per checklist: "All forms route to
   ThinkVault-approved email/CRM; confirm destinations before launch."

   Server-side only (no NEXT_PUBLIC_*): credentials never reach the browser.
   Without credentials the API runs in stub mode so the wireframe works
   end-to-end and Zoho can be connected later via env vars alone. */

const CLIENT_ID = process.env.ZOHO_CLIENT_ID;
const CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN;
// Region-specific domains, e.g. accounts.zoho.eu / www.zohoapis.eu
const ACCOUNTS_DOMAIN = process.env.ZOHO_ACCOUNTS_DOMAIN || "https://accounts.zoho.com";
const API_DOMAIN = process.env.ZOHO_API_DOMAIN || "https://www.zohoapis.com";

export const zohoConfigured = Boolean(CLIENT_ID && CLIENT_SECRET && REFRESH_TOKEN);

let cachedToken = null;
let cachedTokenExpiry = 0;

async function getAccessToken() {
  if (cachedToken && Date.now() < cachedTokenExpiry) return cachedToken;

  const params = new URLSearchParams({
    refresh_token: REFRESH_TOKEN,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: "refresh_token",
  });

  const res = await fetch(`${ACCOUNTS_DOMAIN}/oauth/v2/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
    cache: "no-store",
  });
  const json = await res.json();
  if (!res.ok || !json.access_token) {
    throw new Error(`Zoho token refresh failed: ${json.error || res.status}`);
  }
  cachedToken = json.access_token;
  // Refresh a minute before Zoho's expiry (seconds).
  cachedTokenExpiry = Date.now() + (Number(json.expires_in || 3600) - 60) * 1000;
  return cachedToken;
}

/** Create a Lead in Zoho CRM. `lead` uses site field names; mapped to Zoho here. */
export async function createZohoLead(lead) {
  if (!zohoConfigured) {
    console.info("[zoho stub] lead received (set ZOHO_* env vars to route to CRM):", {
      ...lead,
      email: lead.email ? "<redacted>" : undefined,
    });
    return { ok: true, stub: true };
  }

  const token = await getAccessToken();
  const [firstName, ...rest] = (lead.name || "").trim().split(/\s+/);
  const record = {
    // Zoho requires Last_Name; fall back to the full/first name.
    Last_Name: rest.join(" ") || firstName || "Unknown",
    First_Name: rest.length ? firstName : undefined,
    Email: lead.email,
    Company: lead.company || "Unknown",
    Description: lead.message,
    Lead_Source: lead.source || "Website — Talk to an Expert",
    Industry: lead.interest || undefined,
  };

  const res = await fetch(`${API_DOMAIN}/crm/v8/Leads`, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: [record] }),
    cache: "no-store",
  });
  const json = await res.json();
  const status = json?.data?.[0]?.status;
  if (!res.ok || status !== "success") {
    throw new Error(`Zoho lead create failed: ${JSON.stringify(json?.data?.[0] || json)}`);
  }
  return { ok: true, stub: false, id: json.data[0].details?.id };
}
