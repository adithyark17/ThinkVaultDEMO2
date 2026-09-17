"use client";

import { useState } from "react";
import { trackEvent } from "./Analytics";

/* Working lead form — posts to /api/lead (Zoho CRM when configured,
   stub-logged otherwise) and fires the lead_submit conversion event. */

const INTERESTS = [
  "AI Infrastructure",
  "AI Cloud",
  "AI Models",
  "AI Platform / Stack",
  "Managed AI Services",
  "Partnership",
  "Careers",
  "Other",
];

export default function LeadForm({ source = "Website — Talk to an Expert" }) {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    payload.source = source;

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Submission failed");
      trackEvent("lead_submit", { source, stub: json.stub === true });
      setStatus("sent");
      form.reset();
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="wf-form" style={{ display: "block" }}>
        <h3 style={{ marginBottom: 8 }}>Thanks — we've got it.</h3>
        <p className="wf-desc">
          Your request has been routed to the ThinkVault team. An expert will reach out shortly.
        </p>
      </div>
    );
  }

  return (
    <form className="wf-form" onSubmit={onSubmit}>
      <div className="wf-field">
        <label htmlFor="lead-name">Full name</label>
        <input id="lead-name" name="name" className="wf-input wf-input--real" required />
      </div>
      <div className="wf-field">
        <label htmlFor="lead-email">Work email</label>
        <input id="lead-email" name="email" type="email" className="wf-input wf-input--real" required />
      </div>
      <div className="wf-field">
        <label htmlFor="lead-company">Company</label>
        <input id="lead-company" name="company" className="wf-input wf-input--real" />
      </div>
      <div className="wf-field">
        <label htmlFor="lead-interest">Area of interest</label>
        <select id="lead-interest" name="interest" className="wf-input wf-input--real" defaultValue="">
          <option value="" disabled>
            Select…
          </option>
          {INTERESTS.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>
      <div className="wf-field wf-field--full">
        <label htmlFor="lead-message">Message</label>
        <textarea id="lead-message" name="message" rows={5} className="wf-input wf-input--real wf-input--area" />
      </div>
      {/* Honeypot — hidden from humans, dropped server-side when filled */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", height: 0, width: 0, opacity: 0 }}
      />
      <p className="wf-form__note">[Consent / privacy notice — wording requires legal approval]</p>
      <div className="wf-field--full">
        <button type="submit" className="wf-btn wf-btn--primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Submit"}
        </button>
        {status === "error" && (
          <p className="wf-form__note" style={{ color: "#ff3e00", marginTop: 10 }}>
            {error}
          </p>
        )}
      </div>
    </form>
  );
}
