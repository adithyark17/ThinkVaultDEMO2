import { PAGES } from "@/components/sitemap";
import { PageHero, Section, CardGrid, CtaBand, Box } from "@/components/Wire";

export const metadata = { title: "Case Studies — Wireframe" };

export default function CaseStudies() {
  return (
    <>
      <section className="wf-page-hero">
        <div className="wf-container">
          <p className="wf-kicker">
            {PAGES.caseStudies.num} — {PAGES.caseStudies.title}
          </p>
          <span className="wf-badge">
            <span className="dot" /> Coming soon
          </span>
          <h1>{PAGES.caseStudies.title}</h1>
          <p className="wf-purpose">{PAGES.caseStudies.purpose}</p>
        </div>
      </section>

      <Section
        kicker="Template"
        title="Case study grid"
        note="[CMS template built now per checklist; content launches later — no customer names/logos without written approval]"
      >
        <CardGrid
          cols={3}
          items={[
            { title: "[Case study]", media: "[Cover — coming soon]" },
            { title: "[Case study]", media: "[Cover — coming soon]" },
            { title: "[Case study]", media: "[Cover — coming soon]" },
          ]}
        />
      </Section>

      <Section alt kicker="Be first to know" title="Get notified">
        <Box label="[Notify-me capture — email field, routes to approved CRM]" h={120} />
      </Section>

      <CtaBand title="Want to be an early proof point?" />
    </>
  );
}
