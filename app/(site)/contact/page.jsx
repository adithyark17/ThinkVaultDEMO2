import { PAGES } from "@/components/sitemap";
import { PageHero, Section, Steps } from "@/components/Wire";
import LeadForm from "@/components/LeadForm";

export const metadata = { title: "Contact / Talk to an Expert — Wireframe" };

export default function Contact() {
  return (
    <>
      <PageHero page={PAGES.contact} cta={false} />

      <Section
        kicker="Talk to an expert"
        title="Start the conversation"
        note="[Working form → /api/lead → Zoho CRM when ZOHO_* env vars set; stub-logged otherwise — destination to confirm before launch]"
      >
        <div className="wf-split">
          <LeadForm />
          <div>
            <h2 style={{ marginBottom: 20 }}>What happens next</h2>
            <Steps cols={1} items={["We review your request", "An expert reaches out", "Scoping conversation"]} />
          </div>
        </div>
      </Section>
    </>
  );
}
