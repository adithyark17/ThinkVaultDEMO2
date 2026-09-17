import Script from "next/script";

/* Analytics loaders — gated by env vars so no unapproved trackers ship.
   Set NEXT_PUBLIC_GA_ID / NEXT_PUBLIC_CLARITY_ID (see .env.example) to go live;
   without them, no-op stubs keep window.gtag / window.clarity callable so
   conversion events can be wired now and activated later. */

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

export default function Analytics() {
  return (
    <>
      {GA_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
          </Script>
        </>
      ) : (
        <Script id="gtag-stub" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function(){
  window.dataLayer.push(arguments);
  if (typeof console !== 'undefined') console.debug('[gtag stub]', arguments);
};`}
        </Script>
      )}

      {CLARITY_ID ? (
        <Script id="clarity-init" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", '${CLARITY_ID}');`}
        </Script>
      ) : (
        <Script id="clarity-stub" strategy="afterInteractive">
          {`window.clarity = window.clarity || function(){
  (window.clarity.q = window.clarity.q || []).push(arguments);
  if (typeof console !== 'undefined') console.debug('[clarity stub]', arguments);
};`}
        </Script>
      )}
    </>
  );
}

/** Fire an approved conversion event (no-ops against the stubs until IDs are set). */
export function trackEvent(name, params = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") window.gtag("event", name, params);
  if (typeof window.clarity === "function") window.clarity("event", name);
}
