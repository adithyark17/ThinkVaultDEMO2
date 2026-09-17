import Link from "next/link";
import { PAGES } from "@/components/sitemap";
import { Bars, Btn, Section, CardGrid, Split, CtaBand } from "@/components/Wire";
import StackExplorer from "@/components/StackExplorer";

export default function Home() {
  return (
    <>
      {/* 01 · Hero — brand story, positioning, core value proposition */}
      <section className="wf-hero">
        <video className="wf-hero__video" src="/video/hero.mp4" autoPlay muted loop playsInline />
        <div className="wf-hero__scrim" />
        <span className="wf-hero__note">[Hero video — supplied asset, full-bleed background]</span>
        <div className="wf-container wf-hero__content">
          <span className="wf-hero__tag">Purpose-Built AI Stack</span>
          <h1>Where Intelligence Lives.</h1>
          <Bars n={2} w={48} />
          <div className="wf-btn-row">
            <Btn href={PAGES.contact.href} primary>
              Talk to an Expert
            </Btn>
            <Btn href={PAGES.aiPlatform.href}>Explore the Stack</Btn>
          </div>
        </div>
      </section>

      {/* Stack explorer — key interactive experience; each layer routes to its page */}
      <Section
        kicker="The Purpose-Built AI Stack"
        title="One stack. Every layer."
        note="[Interactive stack explorer — hover a layer to preview, click to open its page]"
      >
        <StackExplorer />
      </Section>

      {/* Value proposition */}
      <Section kicker="Why ThinkVault" title="Core value proposition" alt>
        <CardGrid
          cols={4}
          items={[
            { title: "Purpose-built" },
            { title: "Sovereign by design" },
            { title: "Enterprise-grade" },
            { title: "Managed end-to-end" },
          ]}
        />
      </Section>

      {/* AI Sovereignty teaser (Trust) */}
      <Section>
        <Split
          kicker={`${PAGES.aiSovereignty.num} — Thought leadership`}
          title="AI Sovereignty"
          boxLabel="[AI Sovereignty visual / diagram]"
          href={PAGES.aiSovereignty.href}
        />
      </Section>

      {/* Solutions & Industries (Explore) */}
      <Section kicker="Explore" title="Solutions & Industries" alt>
        <CardGrid
          cols={2}
          items={[
            {
              title: PAGES.aiSolutions.title,
              desc: PAGES.aiSolutions.purpose,
              href: PAGES.aiSolutions.href,
              media: `[${PAGES.aiSolutions.num} — AI Solutions visual]`,
            },
            {
              title: PAGES.industries.title,
              desc: PAGES.industries.purpose,
              href: PAGES.industries.href,
              media: `[${PAGES.industries.num} — Industries visual]`,
            },
          ]}
        />
      </Section>

      {/* Learn: Resources & Case Studies */}
      <Section kicker="Learn" title="Insights & proof">
        <CardGrid
          cols={2}
          items={[
            { title: PAGES.resources.title, desc: PAGES.resources.purpose, href: PAGES.resources.href },
            {
              title: `${PAGES.caseStudies.title} (coming soon)`,
              desc: PAGES.caseStudies.purpose,
              href: PAGES.caseStudies.href,
            },
          ]}
        />
      </Section>

      {/* Full sitemap index — wireframe navigation aid */}
      <Section kicker="Wireframe aid" title="All 15 pages" alt note="[Dev/stakeholder aid — full sitemap index]">
        <div className="wf-index">
          {Object.values(PAGES).map((p) => (
            <Link key={p.href} href={p.href}>
              <span className="num">{p.num}</span>
              <span className="title">{p.title}</span>
              <span className="desc">{p.purpose}</span>
              <span className="arrow">→</span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
