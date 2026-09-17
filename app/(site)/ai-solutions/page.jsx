import { PAGES } from "@/components/sitemap";
import { PageHero, Section, CardGrid, Steps, CtaBand } from "@/components/Wire";

export const metadata = { title: "AI Solutions — Wireframe" };

export default function AiSolutions() {
  return (
    <>
      <PageHero page={PAGES.aiSolutions} />

      <Section kicker="Use cases" title="End-to-end business use cases" note="[Use-case taxonomy — final list pending Marketing approval]">
        <CardGrid
          cols={3}
          items={[
            { title: "[Use case]" },
            { title: "[Use case]" },
            { title: "[Use case]" },
            { title: "[Use case]" },
            { title: "[Use case]" },
            { title: "[Use case]" },
          ]}
        />
      </Section>

      <Section kicker="From idea to impact" title="How solutions come together" alt>
        <Steps cols={4} items={["Identify the use case", "Shape the solution", "Build on the stack", "Run & scale"]} />
      </Section>

      <Section kicker="Explore further" title="Where solutions live">
        <CardGrid
          cols={3}
          items={[
            { title: PAGES.industries.title, desc: PAGES.industries.purpose, href: PAGES.industries.href },
            { title: PAGES.managedServices.title, desc: PAGES.managedServices.purpose, href: PAGES.managedServices.href },
            { title: PAGES.caseStudies.title, desc: PAGES.caseStudies.purpose, href: PAGES.caseStudies.href },
          ]}
        />
      </Section>

      <CtaBand title="Bring us your use case" />
    </>
  );
}
