# ThinkVault — Website Wireframe (Low Fidelity)

Next.js (App Router) low-fidelity wireframe covering the approved 15-page sitemap.
Goal: agree structure, navigation and user journey before high-fidelity design.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## What's here

- **All 15 core pages** per the developer checklist, numbered 01–15 (see `components/sitemap.js`).
- **Navigation** exactly per checklist menus: AI Infrastructure / Solutions / ThinkVault / Resources / Connect (Talk to an Expert CTA).
- **Hero video** (supplied asset) used full-bleed in the Home hero (`public/video/hero.mp4`), rendered greyscale to stay low-fi.
- **Interactive stack explorer** on Home and AI Platform / Stack — each layer routes to its page (checklist requirement).
- **Explore → Learn → Trust → Talk** journey wired through cross-links and the persistent conversion CTA.
- Wireframe annotations (`[square-bracket labels]`) mark content pending approval: partner logos, model specs, leadership bios, industries, legal wording, CRM/form destinations.
- **Analytics stubs** (`components/Analytics.jsx`): gtag (GA4) and Microsoft Clarity load only when `NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_CLARITY_ID` are set (see `.env.example`). Until then, no-op stubs keep `window.gtag` / `window.clarity` callable and a `trackEvent()` helper is exported for approved conversion events — so no unapproved trackers ship in the wireframe.

## Deliberately out of scope (wireframe stage)

- SEO (titles/meta/sitemap/schema), analytics, CMS integration, form backends, final copy, brand typography (Montserrat) and high-fidelity visual design.
- Orange `#FF3E00` appears only on primary conversion CTAs as a signal colour; everything else is greyscale by design.
