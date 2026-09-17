import { PAGES } from "@/components/sitemap";
import { PageHero, Section, CardGrid, Steps, Split, CtaBand } from "@/components/Wire";

export const metadata = { title: "Managed AI Services — Wireframe" };

export default function ManagedAiServices() {
  return (
    <>
      <PageHero page={PAGES.managedServices} />

      <Section kicker="Services" title="Deployment, optimization, management">
        <CardGrid
          cols={3}
          items={[
            { title: "Deployment" },
            { title: "Optimization" },
            { title: "Ongoing management" },
          ]}
        />
      </Section>

      <Section kicker="Engagement" title="How an engagement works" alt>
        <Steps cols={4} items={["Assess", "Design", "Deploy", "Operate"]} />
      </Section>

      <Section>
        <Split
          kicker="Your team + ours"
          title="An extension of your team"
          boxLabel="[Operating model visual]"
        />
      </Section>

      <Section kicker="Related" title="Built on the full stack" alt>
        <CardGrid
          cols={3}
          items={[
            { title: PAGES.aiInfrastructure.title, desc: PAGES.aiInfrastructure.purpose, href: PAGES.aiInfrastructure.href },
            { title: PAGES.aiPlatform.title, desc: PAGES.aiPlatform.purpose, href: PAGES.aiPlatform.href },
            { title: PAGES.aiSolutions.title, desc: PAGES.aiSolutions.purpose, href: PAGES.aiSolutions.href },
          ]}
        />
      </Section>

      <CtaBand title="Let us run AI for you" />
    </>
  );
}
