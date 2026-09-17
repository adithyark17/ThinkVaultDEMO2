/* Careers CMS — jobs + application workflow per checklist (resume upload is
   handled by the application form/ATS integration, not stored in the CMS). */
export default {
  name: "job",
  title: "Job Opening",
  type: "document",
  fields: [
    { name: "title", title: "Role title", type: "string", validation: (r) => r.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() },
    { name: "team", title: "Team", type: "string" },
    {
      name: "type",
      title: "Employment type",
      type: "string",
      options: { list: ["Full-time", "Part-time", "Contract", "Internship"] },
    },
    { name: "location", title: "Location", type: "string" },
    { name: "summary", title: "Summary", type: "text", rows: 3 },
    { name: "description", title: "Description", type: "array", of: [{ type: "block" }] },
    { name: "applyUrl", title: "Apply URL (ATS / application workflow)", type: "url" },
    {
      name: "open",
      title: "Open for applications",
      type: "boolean",
      initialValue: true,
    },
  ],
};
