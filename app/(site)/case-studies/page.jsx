import { PAGES } from "@/components/sitemap";
import { Section, CardGrid, CtaBand, Box } from "@/components/Wire";
import { sanityFetch, QUERIES } from "@/lib/sanity";

export const metadata = { title: "Case Studies — Wireframe" };
export const revalidate = 60;

const FALLBACK = [
  { title: "[Case study]", summary: null },
  { title: "[Case study]", summary: null },
  { title: "[Case study]", summary: null },
];

export default async function CaseStudies() {
  const { data: studies, live } = await sanityFetch(QUERIES.caseStudies, FALLBACK);

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
        note={
          live
            ? "[Sanity CMS — approved case studies only]"
            : "[Sanity CMS template wired (approved-only filter); content launches later — no customer names/logos without written approval]"
        }
      >
        <CardGrid
          cols={3}
          items={studies.map((s) => ({
            title: s.title,
            media: s.imageUrl ? "[Cover ✓]" : "[Cover — coming soon]",
            desc: s.summary ?? undefined,
          }))}
        />
      </Section>

      <Section alt kicker="Be first to know" title="Get notified">
        <Box label="[Notify-me capture — email field, routes to approved CRM]" h={120} />
      </Section>

      <CtaBand title="Want to be an early proof point?" />
    </>
  );
}
