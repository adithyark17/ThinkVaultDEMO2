/* Resources CMS — categories, author, date, SEO fields, featured image and
   related links, per the developer checklist. */
export default {
  name: "post",
  title: "Resource / Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (r) => r.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() },
    { name: "excerpt", title: "Excerpt", type: "text", rows: 3 },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (r) => r.required(),
    },
    { name: "author", title: "Author", type: "reference", to: [{ type: "author" }] },
    { name: "publishedAt", title: "Published at", type: "datetime", validation: (r) => r.required() },
    { name: "featuredImage", title: "Featured image", type: "image", options: { hotspot: true } },
    { name: "body", title: "Body", type: "array", of: [{ type: "block" }, { type: "image" }] },
    {
      name: "relatedPosts",
      title: "Related links",
      type: "array",
      of: [{ type: "reference", to: [{ type: "post" }] }],
    },
    {
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        { name: "metaTitle", title: "Meta title", type: "string" },
        { name: "metaDescription", title: "Meta description", type: "text", rows: 2 },
        { name: "canonicalUrl", title: "Canonical URL", type: "url" },
      ],
    },
  ],
  orderings: [
    {
      title: "Published, newest first",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
};
