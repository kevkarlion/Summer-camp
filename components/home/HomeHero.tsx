"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { IMAGE_BLUR_DATA_URL } from "@/components/image/placeholder";
import { useLanguage } from "./LanguageProvider";

export function HomeHero() {
  const { dictionary } = useLanguage();
  const { hero } = dictionary.home;

  return (
    <section className="site-hero home-hero" aria-labelledby="home-hero-title">
      <div className="site-hero__copy">
        <div className="site-hero__intro">
          <h1 id="home-hero-title" className="site-display home-display">
            {hero.titleLines.map((line) => (
              <span key={line} className="home-display__line">
                {line}
              </span>
            ))}
          </h1>
          <p className="site-lead">{hero.subtitle}</p>
          <ul className="home-hero__badges">
            {hero.badges.map((badge) => (
              <li key={badge.text} className={`site-badge site-badge--${badge.tone}`}>
                {badge.text}
              </li>
            ))}
          </ul>
          <div className="site-hero__actions">
            <Link className="site-button site-button--primary" href="/contacto">
              {hero.cta}
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </div>

      <figure className="site-hero__media home-hero__media">
        <Image
          src="/hero-villa-la-angostura.webp"
          alt={hero.imageAlt}
          fill
          priority
          placeholder="blur"
          blurDataURL={IMAGE_BLUR_DATA_URL}
          sizes="(max-width: 767px) 100vw, 54vw"
          className="site-hero__image"
        />
        <figcaption>{hero.imageCaption}</figcaption>
      </figure>
    </section>
  );
}
