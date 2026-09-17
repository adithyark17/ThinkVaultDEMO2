import { PAGES } from "@/components/sitemap";
import { PageHero, Section, CardGrid, Steps, Split, CtaBand, Box } from "@/components/Wire";

export const metadata = { title: "Careers — Wireframe" };

export default function Careers() {
  return (
    <>
      <PageHero page={PAGES.careers} cta={false} />

      <Section kicker="Employer brand" title="Why build here">
        <Split
          kicker="Culture"
          title="Work where intelligence lives"
          boxLabel="[Team / culture imagery — pending approved photography]"
        />
      </Section>

      <Section kicker="Values" title="How we work" alt>
        <CardGrid
          cols={4}
          items={[
            { title: "[Value]" },
            { title: "[Value]" },
            { title: "[Value]" },
            { title: "[Value]" },
          ]}
        />
      </Section>

      <Section
        kicker="Open roles"
        title="Current openings"
        note="[Jobs CMS + application workflow + resume upload per checklist]"
      >
        <div className="wf-index">
          {["[Role title]", "[Role title]", "[Role title]", "[Role title]"].map((role, i) => (
            <a key={i} href="#">
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <span className="title">{role}</span>
              <span className="desc">[Team · Type · Apply]</span>
              <span className="arrow">→</span>
            </a>
          ))}
        </div>
      </Section>

      <Section kicker="Hiring" title="How hiring works" alt>
        <Steps cols={4} items={["Apply", "Intro conversation", "Interviews", "Offer"]} />
      </Section>

      <Section kicker="Applications" title="Apply">
        <Box label="[Application form — resume upload, routes to HR workflow]" h={140} />
      </Section>

      <CtaBand title="Don't see your role? Talk to us." />
    </>
  );
}
