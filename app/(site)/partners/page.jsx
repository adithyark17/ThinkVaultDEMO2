import { PAGES } from "@/components/sitemap";
import { PageHero, Section, CardGrid, Split, CtaBand } from "@/components/Wire";

export const metadata = { title: "Partners / Ecosystem — Wireframe" };

export default function Partners() {
  return (
    <>
      <PageHero page={PAGES.partners} />

      <Section
        kicker="Ecosystem"
        title="Technology & strategic partnerships"
        note="[Partner logos/names only after written ThinkVault approval — placeholders for now]"
      >
        <CardGrid
          cols={4}
          items={[
            { title: "[Partner]", media: "[Logo — pending approval]" },
            { title: "[Partner]", media: "[Logo — pending approval]" },
            { title: "[Partner]", media: "[Logo — pending approval]" },
            { title: "[Partner]", media: "[Logo — pending approval]" },
          ]}
        />
      </Section>

      <Section kicker="Categories" title="How partners fit the stack" alt>
        <CardGrid
          cols={3}
          items={[
            { title: "Technology partners" },
            { title: "Strategic alliances" },
            { title: "Delivery partners" },
          ]}
        />
      </Section>

      <Section>
        <Split
          kicker="Become a partner"
          title="Build with ThinkVault"
          boxLabel="[Co-branding visual — approved lockups only]"
          href={PAGES.contact.href}
        />
      </Section>

      <CtaBand title="Partner with ThinkVault" />
    </>
  );
}
