import { PAGES } from "@/components/sitemap";
import { PageHero, Section, CardGrid, Split, CtaBand } from "@/components/Wire";

export const metadata = { title: "AI Sovereignty — Wireframe" };

export default function AiSovereignty() {
  return (
    <>
      <PageHero page={PAGES.aiSovereignty} />

      <Section kicker="Point of view" title="Why sovereignty, why now">
        <Split
          kicker="Thought leadership"
          title="Own your intelligence"
          boxLabel="[Sovereignty manifesto visual]"
        />
      </Section>

      <Section kicker="Pillars" title="What sovereignty means at ThinkVault" alt>
        <CardGrid
          cols={4}
          items={[
            { title: "Data control" },
            { title: "Model ownership" },
            { title: "Infrastructure control" },
            { title: "Operational independence" },
          ]}
        />
      </Section>

      <Section>
        <Split
          reverse
          kicker="In practice"
          title="Sovereignty across the stack"
          boxLabel="[Stack-wide sovereignty diagram]"
          href={PAGES.aiPlatform.href}
        />
      </Section>

      <Section kicker="Go deeper" title="Related reading" alt>
        <CardGrid
          cols={3}
          items={[
            { title: "[Sovereignty article]", href: PAGES.resources.href },
            { title: "[Sovereignty report]", href: PAGES.resources.href },
            { title: "[Sovereignty guide]", href: PAGES.resources.href },
          ]}
        />
      </Section>

      <CtaBand title="Discuss your sovereignty requirements" />
    </>
  );
}
