"use client";

/* Embedded Sanity Studio — available at /studio once
   NEXT_PUBLIC_SANITY_PROJECT_ID is set (see .env.example). */

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export default function StudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return (
      <div style={{ padding: "80px 24px", maxWidth: 640, margin: "0 auto" }}>
        <h1 style={{ marginBottom: 12 }}>Sanity Studio (not configured)</h1>
        <p style={{ color: "#737373" }}>
          Set <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> and{" "}
          <code>NEXT_PUBLIC_SANITY_DATASET</code> (see .env.example), then reload to open the
          embedded Studio. Schemas for Resources, Case Studies and Careers are already defined in{" "}
          <code>sanity/schemas/</code>.
        </p>
      </div>
    );
  }
  return <NextStudio config={config} />;
}
