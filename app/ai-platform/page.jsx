import { PAGES } from "@/components/sitemap";
import { PageHero, Section, CardGrid, CtaBand } from "@/components/Wire";
import StackExplorer from "@/components/StackExplorer";

export const metadata = { title: "AI Platform / Stack — Wireframe" };

export default function AiPlatform() {
  return (
    <>
      <PageHero page={PAGES.aiPlatform} />

      <Section
        kicker="The stack"
        title="The Purpose-Built AI Stack, explained"
        note="[Interactive stack explorer — each layer routes to its page]"
      >
        <StackExplorer />
      </Section>

      <Section kicker="Platform" title="Platform capabilities" alt>
        <CardGrid
          cols={4}
          items={[
            { title: "Orchestration" },
            { title: "APIs & tooling" },
            { title: "Security & governance" },
            { title: "Observability" },
          ]}
        />
      </Section>

      <Section kicker="Why purpose-built" title="Stack vs. patchwork">
        <CardGrid
          cols={2}
          items={[
            { title: "General-purpose patchwork", desc: "[Comparison column — the fragmented alternative]", bars: 3 },
            { title: "Purpose-Built AI Stack", desc: "[Comparison column — the integrated ThinkVault approach]", bars: 3 },
          ]}
        />
      </Section>

      <CtaBand title="See the full stack in action" />
    </>
  );
}
