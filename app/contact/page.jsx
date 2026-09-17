import { PAGES } from "@/components/sitemap";
import { PageHero, Section, Steps } from "@/components/Wire";

export const metadata = { title: "Contact / Talk to an Expert — Wireframe" };

const FIELDS = [
  { label: "Full name" },
  { label: "Work email" },
  { label: "Company" },
  { label: "Area of interest", hint: "[Dropdown — Infrastructure / Cloud / Models / Platform / Managed Services / Partnership / Careers]" },
  { label: "Message", full: true, area: true },
];

export default function Contact() {
  return (
    <>
      <PageHero page={PAGES.contact} cta={false} />

      <Section
        kicker="Talk to an expert"
        title="Start the conversation"
        note="[Form routes to ThinkVault-approved email/CRM — destination to confirm before launch]"
      >
        <div className="wf-split">
          <div className="wf-form">
            {FIELDS.map((f) => (
              <div key={f.label} className={f.full ? "wf-field wf-field--full" : "wf-field"}>
                <label>{f.label}</label>
                <div className={f.area ? "wf-input wf-input--area" : "wf-input"}>
                  {f.hint || `[${f.label} input]`}
                </div>
              </div>
            ))}
            <p className="wf-form__note">[Consent / privacy notice — wording requires legal approval]</p>
            <div className="wf-field--full">
              <span className="wf-btn wf-btn--primary">Submit → [CRM]</span>
            </div>
          </div>
          <div>
            <h2 style={{ marginBottom: 20 }}>What happens next</h2>
            <Steps cols={1} items={["We review your request", "An expert reaches out", "Scoping conversation"]} />
          </div>
        </div>
      </Section>
    </>
  );
}
