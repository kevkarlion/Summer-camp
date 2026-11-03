"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/components/home/LanguageProvider";

export function SiteFooter() {
  const { dictionary } = useLanguage();
  const { footer, nav } = dictionary;

  return (
    <footer className="site-footer">
      <div className="site-wrap">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link href="/" className="site-footer__brand-link" aria-label={nav.primaryLabel}>
              <Image
                src="/patagonia-summer-camp-mark-new.png"
                alt=""
                width={44}
                height={44}
                className="site-footer__mark"
              />
              <span className="site-footer__wordmark">
                <span className="site-footer__wordmark-top">Patagonia</span>
                <span className="site-footer__wordmark-bottom">Summer Camp</span>
              </span>
            </Link>
            <p className="site-footer__tagline">{footer.tagline}</p>
          </div>

          <nav className="site-footer__column" aria-label={footer.navLabel}>
            <h2 className="site-footer__title">{footer.exploreTitle}</h2>
            <ul className="site-footer__list">
              {nav.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="site-footer__link">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contacto" className="site-footer__link">
                  {nav.contactCta}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="site-footer__column">
            <h2 className="site-footer__title">{footer.campTitle}</h2>
            <ul className="site-footer__facts">
              {footer.facts.map((fact) => (
                <li key={fact.label} className="site-footer__fact">
                  <span className="site-footer__fact-label">{fact.label}</span>
                  <span className="site-footer__fact-value">{fact.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__column site-footer__action">
            <h2 className="site-footer__title">{footer.actionTitle}</h2>
            <p className="site-footer__body">{footer.actionBody}</p>
            <Link href="/contacto" className="site-button site-button--paper">
              {footer.actionCta}
            </Link>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>{footer.copyright}</p>
          <p>{footer.closing}</p>
        </div>
      </div>
    </footer>
  );
}
