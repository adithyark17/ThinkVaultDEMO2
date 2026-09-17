"use client";

import Link from "next/link";
import { useState } from "react";
import { STACK_LAYERS } from "./sitemap";

/* Key interactive experience per checklist: each stack layer routes to its page. */
export default function StackExplorer() {
  const [active, setActive] = useState(0);
  const layer = STACK_LAYERS[active];

  return (
    <div className="wf-stack">
      <div className="wf-stack__layers">
        {STACK_LAYERS.map((l, i) => (
          <Link
            key={l.page.href}
            href={l.page.href}
            className={i === active ? "wf-stack__layer is-active" : "wf-stack__layer"}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
          >
            <span className="wf-stack__num">{l.page.num}</span>
            <span>
              <strong>{l.page.title}</strong>
              <small>{l.tag}</small>
            </span>
            <span aria-hidden="true">→</span>
          </Link>
        ))}
      </div>
      <div className="wf-stack__detail">
        <p className="wf-kicker">
          Layer {layer.page.num} — {layer.page.title}
        </p>
        <h3>{layer.page.title}</h3>
        <p className="wf-desc">{layer.page.purpose}</p>
        <div className="wf-box" style={{ minHeight: 160 }}>
          <span>[Layer diagram / visual — {layer.page.title}]</span>
        </div>
        <Link href={layer.page.href} className="wf-link">
          Go to {layer.page.title} →
        </Link>
      </div>
    </div>
  );
}
