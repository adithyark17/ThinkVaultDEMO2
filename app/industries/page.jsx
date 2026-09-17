import { PAGES } from "@/components/sitemap";
import { PageHero, Section, CardGrid, Split, CtaBand } from "@/components/Wire";

export const metadata = { title: "Industries — Wireframe" };

export default function Industries() {
  return (
    <>
      <PageHero page={PAGES.industries} />

      <Section kicker="Sectors" title="Industry-specific AI applications" note="[Industry list — final sectors pending Marketing approval]">
        <CardGrid
          cols={3}
          items={[
            { title: "[Industry]", media: "[Industry visual]" },
            { title: "[Industry]", media: "[Industry visual]" },
            { title: "[Industry]", media: "[Industry visual]" },
            { title: "[Industry]", media: "[Industry visual]" },
            { title: "[Industry]", media: "[Industry visual]" },
            { title: "[Industry]", media: "[Industry visual]" },
          ]}
        />
      </Section>

      <Section alt>
        <Split
          kicker="Regulated environments"
          title="Sovereignty where it matters most"
          boxLabel="[Regulated-industry visual]"
          href={PAGES.aiSovereignty.href}
        />
      </Section>

      <Section kicker="Explore further" title="Related">
        <CardGrid
          cols={2}
          items={[
            { title: PAGES.aiSolutions.title, desc: PAGES.aiSolutions.purpose, href: PAGES.aiSolutions.href },
            { title: PAGES.caseStudies.title, desc: PAGES.caseStudies.purpose, href: PAGES.caseStudies.href },
          ]}
        />
      </Section>

      <CtaBand title="Talk to an expert in your industry" />
    </>
  );
}
