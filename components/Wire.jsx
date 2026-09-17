import Link from "next/link";
import { PAGES } from "./sitemap";

/* Low-fidelity wireframe primitives */

/** Dashed placeholder box with a label, e.g. for imagery / diagrams / media */
export function Box({ label, h = 220, className = "" }) {
  return (
    <div className={`wf-box ${className}`} style={{ minHeight: h }}>
      <span>{label}</span>
    </div>
  );
}

/** Grey bars simulating body copy */
export function Bars({ n = 3, w = 100 }) {
  const widths = Array.from({ length: n }, (_, i) => (i === n - 1 ? Math.max(35, w - 30) : w));
  return (
    <div className="wf-bars" aria-hidden="true">
      {widths.map((width, i) => (
        <i key={i} style={{ width: `${width}%` }} />
      ))}
    </div>
  );
}

/** Wireframe button */
export function Btn({ children, href = "#", primary = false }) {
  return (
    <Link href={href} className={primary ? "wf-btn wf-btn--primary" : "wf-btn"}>
      {children}
    </Link>
  );
}

/** Page section wrapper with optional annotation note */
export function Section({ title, kicker, note, alt = false, children }) {
  return (
    <section className={alt ? "wf-section wf-section--alt" : "wf-section"}>
      <div className="wf-container">
        {note && <div className="wf-note">{note}</div>}
        {(kicker || title) && (
          <header className="wf-section__head">
            {kicker && <p className="wf-kicker">{kicker}</p>}
            {title && <h2>{title}</h2>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

/** Sub-page hero: page number, title, purpose from sitemap, intro bars + CTAs */
export function PageHero({ page, children, cta = true }) {
  return (
    <section className="wf-page-hero">
      <div className="wf-container">
        <p className="wf-kicker">
          {page.num} — {page.title}
        </p>
        <h1>{page.title}</h1>
        <p className="wf-purpose">{page.purpose}</p>
        <Bars n={2} w={55} />
        {children}
        {cta && (
          <div className="wf-btn-row">
            <Btn href={PAGES.contact.href} primary>
              Talk to an Expert
            </Btn>
            <Btn href={PAGES.resources.href}>Explore Resources</Btn>
          </div>
        )}
      </div>
    </section>
  );
}

/** Grid of wireframe cards */
export function CardGrid({ cols = 3, items }) {
  return (
    <div className={`wf-grid wf-grid--${cols}`}>
      {items.map((item, i) => {
        const inner = (
          <>
            {item.media && <Box label={item.media} h={110} />}
            {item.icon !== false && !item.media && <div className="wf-icon" aria-hidden="true" />}
            <h3>{item.title}</h3>
            {item.desc ? <p className="wf-desc">{item.desc}</p> : <Bars n={item.bars ?? 2} w={90} />}
            {item.href && <span className="wf-link">View page →</span>}
          </>
        );
        return item.href ? (
          <Link key={i} href={item.href} className="wf-card wf-card--link">
            {inner}
          </Link>
        ) : (
          <div key={i} className="wf-card">
            {inner}
          </div>
        );
      })}
    </div>
  );
}

/** Numbered process steps */
export function Steps({ items, cols = 4 }) {
  return (
    <div className={`wf-grid wf-grid--${cols}`}>
      {items.map((step, i) => (
        <div key={i} className="wf-card wf-step">
          <span className="wf-step__num">{String(i + 1).padStart(2, "0")}</span>
          <h3>{step}</h3>
          <Bars n={2} w={85} />
        </div>
      ))}
    </div>
  );
}

/** Split section: text column + placeholder visual */
export function Split({ title, kicker, boxLabel, reverse = false, href, children }) {
  return (
    <div className={reverse ? "wf-split wf-split--reverse" : "wf-split"}>
      <div className="wf-split__body">
        {kicker && <p className="wf-kicker">{kicker}</p>}
        <h2>{title}</h2>
        {children || <Bars n={4} w={95} />}
        {href && (
          <div className="wf-btn-row">
            <Btn href={href}>Learn more</Btn>
          </div>
        )}
      </div>
      <Box label={boxLabel} h={320} />
    </div>
  );
}

/** Bottom conversion band (Explore → Learn → Trust → Talk journey endpoint) */
export function CtaBand({ title = "Ready to build on the Purpose-Built AI Stack?" }) {
  return (
    <section className="wf-cta">
      <div className="wf-container wf-cta__inner">
        <div>
          <h2>{title}</h2>
          <Bars n={2} w={60} />
        </div>
        <div className="wf-btn-row">
          <Btn href={PAGES.contact.href} primary>
            Talk to an Expert
          </Btn>
        </div>
      </div>
    </section>
  );
}
