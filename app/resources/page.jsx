import { PAGES } from "@/components/sitemap";
import { PageHero, Section, CardGrid, CtaBand, Box } from "@/components/Wire";

export const metadata = { title: "Resources — Wireframe" };

const CATEGORIES = ["All", "Blog", "Insights", "Reports", "Guides"];

export default function Resources() {
  return (
    <>
      <PageHero page={PAGES.resources} cta={false} />

      <Section
        kicker="Library"
        title="Latest resources"
        note="[CMS-driven — categories, author, date, featured image, related links per checklist]"
      >
        <div className="wf-btn-row" style={{ marginTop: 0, marginBottom: 28 }}>
          {CATEGORIES.map((c) => (
            <span key={c} className="wf-badge">{c}</span>
          ))}
        </div>
        <CardGrid
          cols={3}
          items={[
            { title: "[Article title]", media: "[Featured image]", desc: "[Category · Author · Date]" },
            { title: "[Article title]", media: "[Featured image]", desc: "[Category · Author · Date]" },
            { title: "[Article title]", media: "[Featured image]", desc: "[Category · Author · Date]" },
            { title: "[Report title]", media: "[Featured image]", desc: "[Category · Author · Date]" },
            { title: "[Guide title]", media: "[Featured image]", desc: "[Category · Author · Date]" },
            { title: "[Insight title]", media: "[Featured image]", desc: "[Category · Author · Date]" },
          ]}
        />
      </Section>

      <Section alt kicker="Stay informed" title="Newsletter signup">
        <Box label="[Newsletter capture — email field + subscribe CTA, routes to approved CRM]" h={120} />
      </Section>

      <Section kicker="Trust" title="Proof of capability">
        <CardGrid
          cols={1}
          items={[{ title: PAGES.caseStudies.title, desc: PAGES.caseStudies.purpose, href: PAGES.caseStudies.href }]}
        />
      </Section>

      <CtaBand />
    </>
  );
}
