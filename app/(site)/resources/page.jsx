import { PAGES } from "@/components/sitemap";
import { PageHero, Section, CardGrid, CtaBand, Box } from "@/components/Wire";
import { sanityFetch, QUERIES, sanityConfigured } from "@/lib/sanity";

export const metadata = { title: "Resources — Wireframe" };
export const revalidate = 60;

const FALLBACK_POSTS = [
  { title: "[Article title]", category: "Blog", author: "[Author]", publishedAt: null },
  { title: "[Article title]", category: "Insights", author: "[Author]", publishedAt: null },
  { title: "[Article title]", category: "Blog", author: "[Author]", publishedAt: null },
  { title: "[Report title]", category: "Reports", author: "[Author]", publishedAt: null },
  { title: "[Guide title]", category: "Guides", author: "[Author]", publishedAt: null },
  { title: "[Insight title]", category: "Insights", author: "[Author]", publishedAt: null },
];

const FALLBACK_CATEGORIES = [{ title: "Blog" }, { title: "Insights" }, { title: "Reports" }, { title: "Guides" }];

export default async function Resources() {
  const [{ data: posts, live }, { data: categories }] = await Promise.all([
    sanityFetch(QUERIES.posts, FALLBACK_POSTS),
    sanityFetch(QUERIES.categories, FALLBACK_CATEGORIES),
  ]);

  return (
    <>
      <PageHero page={PAGES.resources} cta={false} />

      <Section
        kicker="Library"
        title="Latest resources"
        note={
          live
            ? "[Sanity CMS — live content]"
            : `[Sanity CMS wired — showing wireframe placeholders${sanityConfigured ? "" : "; set NEXT_PUBLIC_SANITY_PROJECT_ID to go live"}]`
        }
      >
        <div className="wf-btn-row" style={{ marginTop: 0, marginBottom: 28 }}>
          <span className="wf-badge">All</span>
          {categories.map((c) => (
            <span key={c.title} className="wf-badge">{c.title}</span>
          ))}
        </div>
        <CardGrid
          cols={3}
          items={posts.map((p) => ({
            title: p.title,
            media: p.imageUrl ? "[Featured image ✓]" : "[Featured image]",
            desc: `${p.category ?? "[Category]"} · ${p.author ?? "[Author]"} · ${
              p.publishedAt ? new Date(p.publishedAt).toLocaleDateString() : "[Date]"
            }`,
          }))}
        />
      </Section>

      <Section alt kicker="Stay informed" title="Newsletter signup">
        <Box label="[Newsletter capture — email field + subscribe CTA, routes to approved CRM]" h={120} />
      </Section>

      <Section kicker="Trust" title="Proof of capability">
        <CardGrid
          cols={1}
          items={[{ title: PAGES.caseStudies.title, desc: PAGES.caseStudies.purpose, href: PAGES.caseStudies.href }]}
        />
      </Section>

      <CtaBand />
    </>
  );
}
