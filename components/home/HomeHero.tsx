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
    <section className="home-hero" aria-labelledby="home-hero-title">
      <figure className="home-hero__media">
        <Image
          src="/hero-villa-la-angostura.webp"
          alt={hero.imageAlt}
          fill
          priority
          placeholder="blur"
          blurDataURL={IMAGE_BLUR_DATA_URL}
          sizes="100vw"
          className="home-hero__image"
        />
        <div className="home-hero__scrim" aria-hidden="true" />
      </figure>

      <div className="site-wrap home-hero__inner">
        <div className="home-hero__intro">
          <h1 id="home-hero-title" className="site-display home-display">
            {hero.titleLines.map((line) => (
              <span key={line} className="home-display__line">
                {line}
              </span>
            ))}
          </h1>
          <p className="site-lead home-hero__lead">{hero.subtitle}</p>
          <div className="home-hero__actions">
            <Link className="site-button site-button--primary" href="/contacto">
              {hero.cta}
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link className="site-text-link home-hero__secondary" href="/programa">
              {hero.secondaryCta}
            </Link>
          </div>
        </div>

        <dl className="home-hero__facts" aria-label={hero.factsLabel}>
          {hero.facts.map((fact) => (
            <div key={fact.label} className="home-hero__fact">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
