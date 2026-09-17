"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV, PAGES } from "./sitemap";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);

  return (
    <header className="wf-nav">
      <div className="wf-container wf-nav__inner">
        <Link href="/" className="wf-brand" onClick={() => setOpen(false)}>
          <span className="wf-brand__mark" aria-hidden="true">T</span>
          <span className="wf-brand__word">
            THINK<em>VAULT</em>
          </span>
        </Link>

        <nav className="wf-nav__menu" aria-label="Primary">
          {NAV.map((group) => (
            <div key={group.label} className="wf-nav__item">
              <button type="button" className="wf-nav__trigger">
                {group.label} <span aria-hidden="true">▾</span>
              </button>
              <div className="wf-nav__dropdown">
                {group.items.map((page) => (
                  <Link key={page.href} href={page.href} className="wf-nav__link">
                    <span className="wf-nav__num">{page.num}</span> {page.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="wf-nav__cta">
          <Link href={PAGES.contact.href} className="wf-btn wf-btn--primary wf-btn--sm">
            Talk to an Expert
          </Link>
        </div>

        <button
          type="button"
          className="wf-nav__burger"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="wf-mobile">
          {NAV.map((group) => (
            <div key={group.label} className="wf-mobile__group">
              <button
                type="button"
                className="wf-mobile__trigger"
                onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
              >
                {group.label} <span>{openGroup === group.label ? "−" : "+"}</span>
              </button>
              {openGroup === group.label && (
                <div className="wf-mobile__links">
                  {group.items.map((page) => (
                    <Link key={page.href} href={page.href} onClick={() => setOpen(false)}>
                      {page.num} · {page.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href={PAGES.contact.href}
            className="wf-btn wf-btn--primary"
            onClick={() => setOpen(false)}
          >
            Talk to an Expert
          </Link>
        </div>
      )}
    </header>
  );
}
