"use client";

import Link from "next/link";

import { useLanguage } from "./LanguageProvider";

export function HomeLinks() {
  const { dictionary } = useLanguage();

  return (
    <section className="site-section site-section--stone">
      <div className="site-wrap">
        <nav aria-label={dictionary.home.linksLabel}>
          <ul className="home-links">
            {dictionary.home.links.map((link) => (
              <li key={link.href} className="home-link">
                <h2 className="home-link__title">
                  <Link className="home-link__anchor" href={link.href}>
                    {link.title}
                  </Link>
                </h2>
                <p className="home-link__line">{link.line}</p>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
