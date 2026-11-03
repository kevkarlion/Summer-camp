"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { IMAGE_BLUR_DATA_URL } from "@/components/image/placeholder";
import { Reveal } from "@/components/motion/Reveal";
import { useLanguage } from "./LanguageProvider";

export function HomeHero() {
  const { dictionary, language } = useLanguage();
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
          <div className="site-hero__actions">
            <Link className="site-button site-button--primary" href="/contacto">
              {hero.cta}
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>

        <dl className="site-facts home-facts" aria-label={hero.factsLabel}>
          {hero.facts.map((fact, index) => (
            <Reveal key={fact.label} className="home-fact-reveal" delay={index * 0.06}>
              <div className="site-fact">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>

      <div className="site-hero__media home-hero__media">
        <figure className="home-hero__media-figure home-hero__media-figure--primary">
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
        <figure className="home-hero__media-figure home-hero__media-figure--secondary">
          <Image
            src="/camp-media/mirando-el-valle.webp"
            alt={
              language === "es"
                ? "Fotografía real del campamento: un participante sobre troncos caídos mirando Villa La Angostura y el valle"
                : "Real camp photograph: a participant on fallen trunks looking at Villa La Angostura and the valley"
            }
            fill
            sizes="(max-width: 767px) 100vw, 54vw"
            className="site-hero__image"
          />
          <figcaption>
            {language === "es"
              ? "Mirar el valle desde el bosque."
              : "Looking at the valley from the forest."}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
