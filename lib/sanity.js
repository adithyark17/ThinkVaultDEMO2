import { createClient } from "next-sanity";

/* Sanity client — env-gated like analytics. Without a project ID the site
   falls back to wireframe placeholder content, so the CMS can be connected
   later without code changes. */

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2024-06-01";

export const sanityConfigured = Boolean(projectId);

export const client = sanityConfigured
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null;

export const QUERIES = {
  posts: `*[_type == "post"] | order(publishedAt desc)[0...12]{
    title, "slug": slug.current, excerpt, publishedAt,
    "category": category->title, "author": author->name,
    "imageUrl": featuredImage.asset->url
  }`,
  categories: `*[_type == "category"] | order(title asc){ title, "slug": slug.current }`,
  caseStudies: `*[_type == "caseStudy" && approved == true] | order(publishedAt desc){
    title, "slug": slug.current, industry, summary, "imageUrl": coverImage.asset->url
  }`,
  jobs: `*[_type == "job" && open == true] | order(title asc){
    title, "slug": slug.current, team, type, location, applyUrl
  }`,
};

/** Fetch from Sanity when configured; otherwise return the provided
 *  wireframe fallback so pages render without a CMS connection. */
export async function sanityFetch(query, fallback = []) {
  if (!client) return { data: fallback, live: false };
  try {
    const data = await client.fetch(query);
    return { data: data?.length ? data : fallback, live: true };
  } catch {
    return { data: fallback, live: false };
  }
}
