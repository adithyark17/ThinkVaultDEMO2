import { PAGES } from "@/components/sitemap";
import { PageHero, Section, CardGrid, Steps, CtaBand } from "@/components/Wire";

export const metadata = { title: "AI Models — Wireframe" };

export default function AiModels() {
  return (
    <>
      <PageHero page={PAGES.aiModels} />

      <Section
        kicker="Model library"
        title="Open-weight models"
        note="[Model library grid — model names/specs pending Product/Engineering approval]"
      >
        <CardGrid
          cols={3}
          items={[
            { title: "[Model family]", media: "[Model card]" },
            { title: "[Model family]", media: "[Model card]" },
            { title: "[Model family]", media: "[Model card]" },
            { title: "[Model family]", media: "[Model card]" },
            { title: "[Model family]", media: "[Model card]" },
            { title: "[Model family]", media: "[Model card]" },
          ]}
        />
      </Section>

      <Section kicker="Journey" title="Selection to deployment" alt>
        <Steps cols={3} items={["Select the right model", "Adapt & evaluate", "Deploy & serve"]} />
      </Section>

      <Section kicker="Related layers" title="Continue exploring the stack">
        <CardGrid
          cols={3}
          items={[
            { title: PAGES.aiCloud.title, desc: PAGES.aiCloud.purpose, href: PAGES.aiCloud.href },
            { title: PAGES.aiPlatform.title, desc: PAGES.aiPlatform.purpose, href: PAGES.aiPlatform.href },
            { title: PAGES.managedServices.title, desc: PAGES.managedServices.purpose, href: PAGES.managedServices.href },
          ]}
        />
      </Section>

      <CtaBand title="Find the right model for your use case" />
    </>
  );
}
