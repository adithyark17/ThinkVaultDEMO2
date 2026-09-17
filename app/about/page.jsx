import { PAGES } from "@/components/sitemap";
import { PageHero, Section, Split, CardGrid, CtaBand, Box } from "@/components/Wire";

export const metadata = { title: "About ThinkVault — Wireframe" };

export default function About() {
  return (
    <>
      <PageHero page={PAGES.about} />

      <Section kicker="Vision" title="Vision & philosophy">
        <Split kicker="Our vision" title="Why we exist" boxLabel="[Vision / brand visual]" />
      </Section>

      <Section kicker="Philosophy" title="What we believe" alt>
        <CardGrid
          cols={3}
          items={[
            { title: "Purpose-built over general-purpose" },
            { title: "Sovereignty as a first principle" },
            { title: "Enterprise-grade by default" },
          ]}
        />
      </Section>

      <Section>
        <Split
          reverse
          kicker={`${PAGES.aiSovereignty.num} — Pillar`}
          title="AI Sovereignty"
          boxLabel="[Sovereignty narrative visual]"
          href={PAGES.aiSovereignty.href}
        />
      </Section>

      <Section kicker="People" title="Leadership" alt note="[Leadership profiles — pending approved bios & photography]">
        <CardGrid
          cols={4}
          items={[
            { title: "[Leader name]", media: "[Photo]" },
            { title: "[Leader name]", media: "[Photo]" },
            { title: "[Leader name]", media: "[Photo]" },
            { title: "[Leader name]", media: "[Photo]" },
          ]}
        />
      </Section>

      <Section kicker="Ecosystem" title="Partners & careers">
        <CardGrid
          cols={2}
          items={[
            { title: PAGES.partners.title, desc: PAGES.partners.purpose, href: PAGES.partners.href },
            { title: PAGES.careers.title, desc: PAGES.careers.purpose, href: PAGES.careers.href },
          ]}
        />
      </Section>

      <CtaBand />
    </>
  );
}
