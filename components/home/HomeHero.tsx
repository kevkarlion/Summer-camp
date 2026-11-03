"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { IMAGE_BLUR_DATA_URL } from "@/components/image/placeholder";
import { useLanguage } from "./LanguageProvider";

export function HomeHero() {
  const { dictionary } = useLanguage();
  const { hero } = dictionary;

  return (
    <section className="site-hero home-hero" aria-labelledby="home-hero-title">
      <div className="site-hero__copy">
        <div className="site-hero__intro">
          <h1 id="home-hero-title" className="site-display home-display">
            {hero.displayLines.map((line) => (
              <span key={line} className="home-display__line">
                {line}
              </span>
            ))}
          </h1>
          <p className="site-lead">{hero.lead}</p>
          <div className="site-hero__actions">
            <Link className="site-button site-button--primary" href="/contacto">
              {hero.ctaPrimary}
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link className="site-text-link site-text-link--dark" href="/programa-ingles">
              {hero.ctaSecondary}
            </Link>
          </div>
        </div>

        <dl className="site-facts home-facts" aria-label={hero.factsLabel}>
          {hero.facts.map((fact) => (
            <div key={fact.label} className="site-fact">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
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
