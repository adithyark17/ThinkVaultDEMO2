import { PAGES } from "@/components/sitemap";
import { PageHero, Section, CardGrid, Steps, Split, CtaBand, Box } from "@/components/Wire";
import { sanityFetch, QUERIES } from "@/lib/sanity";

export const metadata = { title: "Careers — Wireframe" };
export const revalidate = 60;

const FALLBACK_JOBS = [
  { title: "[Role title]", team: null },
  { title: "[Role title]", team: null },
  { title: "[Role title]", team: null },
  { title: "[Role title]", team: null },
];

export default async function Careers() {
  const { data: jobs, live } = await sanityFetch(QUERIES.jobs, FALLBACK_JOBS);

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
        note={
          live
            ? "[Sanity jobs CMS — live openings]"
            : "[Sanity jobs CMS wired + application workflow + resume upload per checklist — placeholders shown]"
        }
      >
        <div className="wf-index">
          {jobs.map((job, i) => (
            <a key={i} href={job.applyUrl || "#"}>
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <span className="title">{job.title}</span>
              <span className="desc">
                {[job.team ?? "[Team]", job.type ?? "[Type]", job.location ?? "Apply"].join(" · ")}
              </span>
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
