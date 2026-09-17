import Script from "next/script";

/* collect.chat widget — env-gated so no unapproved third-party scripts ship.
   Set NEXT_PUBLIC_COLLECTCHAT_ID (the collect.chat site/bot ID) to activate. */

const COLLECTCHAT_ID = process.env.NEXT_PUBLIC_COLLECTCHAT_ID;

export default function CollectChat() {
  if (!COLLECTCHAT_ID) {
    return (
      <Script id="collectchat-stub" strategy="lazyOnload">
        {`window.CollectId = window.CollectId || null;
if (typeof console !== 'undefined') console.debug('[collect.chat stub] set NEXT_PUBLIC_COLLECTCHAT_ID to enable the chat widget');`}
      </Script>
    );
  }
  return (
    <>
      <Script id="collectchat-init" strategy="lazyOnload">
        {`window.CollectId = '${COLLECTCHAT_ID}';`}
      </Script>
      <Script
        id="collectchat-launcher"
        src="https://collectcdn.com/launcher.js"
        strategy="lazyOnload"
      />
    </>
  );
}
