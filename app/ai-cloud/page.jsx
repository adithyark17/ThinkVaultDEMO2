import { PAGES } from "@/components/sitemap";
import { PageHero, Section, CardGrid, Split, Steps, CtaBand } from "@/components/Wire";

export const metadata = { title: "AI Cloud — Wireframe" };

export default function AiCloud() {
  return (
    <>
      <PageHero page={PAGES.aiCloud} />

      <Section kicker="Capabilities" title="Cloud / compute capabilities">
        <CardGrid
          cols={4}
          items={[
            { title: "On-demand compute" },
            { title: "Reserved capacity" },
            { title: "Elastic scaling" },
            { title: "Secure tenancy" },
          ]}
        />
      </Section>

      <Section kicker="Consumption" title="Ways to consume" alt>
        <Steps cols={3} items={["Self-service", "Dedicated environments", "Managed for you"]} />
      </Section>

      <Section>
        <Split
          kicker="Control & visibility"
          title="Operate with confidence"
          boxLabel="[Console / observability UI placeholder]"
        />
      </Section>

      <Section kicker="Related layers" title="Continue exploring the stack" alt>
        <CardGrid
          cols={3}
          items={[
            { title: PAGES.aiInfrastructure.title, desc: PAGES.aiInfrastructure.purpose, href: PAGES.aiInfrastructure.href },
            { title: PAGES.aiModels.title, desc: PAGES.aiModels.purpose, href: PAGES.aiModels.href },
            { title: PAGES.aiPlatform.title, desc: PAGES.aiPlatform.purpose, href: PAGES.aiPlatform.href },
          ]}
        />
      </Section>

      <CtaBand title="Talk to us about AI Cloud capacity" />
    </>
  );
}
