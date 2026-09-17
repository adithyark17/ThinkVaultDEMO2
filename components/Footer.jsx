import Link from "next/link";
import { NAV, PAGES } from "./sitemap";

export default function Footer() {
  return (
    <footer className="wf-footer">
      <div className="wf-container">
        <div className="wf-footer__top">
          <div className="wf-footer__brand">
            <span className="wf-brand__word">
              THINK<em>VAULT</em>
            </span>
            <p>Purpose-Built AI Stack. Where Intelligence Lives.</p>
          </div>
          {NAV.map((group) => (
            <div key={group.label} className="wf-footer__col">
              <h4>{group.label}</h4>
              <ul>
                {group.items.map((page) => (
                  <li key={page.href}>
                    <Link href={page.href}>{page.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="wf-footer__col">
            <h4>Connect</h4>
            <ul>
              <li>
                <Link href={PAGES.contact.href}>Talk to an Expert</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="wf-footer__bottom">
          <span>© ThinkVault. Wireframe — content pending approval.</span>
          <div className="wf-footer__legal">
            <span>[Privacy Policy]</span>
            <span>[Terms of Use]</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
