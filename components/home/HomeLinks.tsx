"use client";

import Link from "next/link";
import { ArrowRight, Backpack, Compass, MapPin, Users } from "lucide-react";

import { useLanguage } from "./LanguageProvider";

const linkIcons = {
  "/programa": Compass,
  "/residencia": MapPin,
  "/nosotros": Users,
  "/familias": Backpack,
} as const;

export function HomeLinks() {
  const { dictionary } = useLanguage();

  return (
    <section className="site-section site-section--stone">
      <div className="site-wrap">
        <nav aria-label={dictionary.home.linksLabel}>
          <ul className="home-links">
            {dictionary.home.links.map((link) => {
              const Icon = linkIcons[link.href as keyof typeof linkIcons];

              return (
                <li key={link.href} className="home-link">
                  <div className="home-link__heading">
                    {Icon ? <Icon className="home-link__icon" aria-hidden="true" size={24} /> : null}
                    <h2 className="home-link__title">
                      <Link className="home-link__anchor" href={link.href}>
                        {link.title}
                      </Link>
                    </h2>
                  </div>
                  <p className="home-link__line">{link.context}</p>
                  <Link className="home-link__cta" href={link.href}>
                    {link.seePage}
                    <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
}
