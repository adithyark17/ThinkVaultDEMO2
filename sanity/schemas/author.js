export default {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string", validation: (r) => r.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name" } },
    { name: "role", title: "Role / title", type: "string" },
    { name: "image", title: "Photo", type: "image", options: { hotspot: true } },
    { name: "bio", title: "Bio", type: "text", rows: 3 },
  ],
};
