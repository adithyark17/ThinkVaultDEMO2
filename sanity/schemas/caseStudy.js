/* Case Studies CMS — template built now even though the page launches as
   "Coming soon" (checklist). Customer names/logos require written approval. */
export default {
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (r) => r.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() },
    { name: "customer", title: "Customer (requires written approval)", type: "string" },
    { name: "industry", title: "Industry", type: "string" },
    { name: "summary", title: "Summary", type: "text", rows: 3 },
    { name: "coverImage", title: "Cover image", type: "image", options: { hotspot: true } },
    { name: "challenge", title: "Challenge", type: "array", of: [{ type: "block" }] },
    { name: "solution", title: "Solution", type: "array", of: [{ type: "block" }] },
    { name: "outcome", title: "Outcome", type: "array", of: [{ type: "block" }] },
    { name: "publishedAt", title: "Published at", type: "datetime" },
    {
      name: "approved",
      title: "Approved for publication",
      type: "boolean",
      initialValue: false,
      description: "Only approved case studies are shown on the site.",
    },
  ],
};
