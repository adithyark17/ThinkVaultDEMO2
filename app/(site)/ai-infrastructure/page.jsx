import { PAGES } from "@/components/sitemap";
import { PageHero, Section, CardGrid, Split, CtaBand, Box } from "@/components/Wire";

export const metadata = { title: "AI Infrastructure — Wireframe" };

export default function AiInfrastructure() {
  return (
    <>
      <PageHero page={PAGES.aiInfrastructure} />

      <Section kicker="Offering" title="Core infrastructure offering">
        <CardGrid
          cols={3}
          items={[
            { title: "Compute" },
            { title: "Networking" },
            { title: "Storage & data" },
          ]}
        />
      </Section>

      <Section kicker="Architecture" title="How it fits together" alt note="[Architecture diagram — simple layers, directional flow, restrained orange emphasis]">
        <Box label="[Infrastructure architecture diagram]" h={360} />
      </Section>

      <Section>
        <Split
          kicker="Designed for AI workloads"
          title="Built for training & inference"
          boxLabel="[Workload visual]"
        />
      </Section>

      <Section kicker="Related layers" title="Continue exploring the stack" alt>
        <CardGrid
          cols={3}
          items={[
            { title: PAGES.aiCloud.title, desc: PAGES.aiCloud.purpose, href: PAGES.aiCloud.href },
            { title: PAGES.aiPlatform.title, desc: PAGES.aiPlatform.purpose, href: PAGES.aiPlatform.href },
            { title: PAGES.managedServices.title, desc: PAGES.managedServices.purpose, href: PAGES.managedServices.href },
          ]}
        />
      </Section>

      <CtaBand title="Discuss your infrastructure requirements" />
    </>
  );
}
