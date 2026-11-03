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
  const walkingPhotoAlt =
    language === "en"
      ? "Camp participants walking together on a forest trail"
      : "Participantes del campamento caminando juntos por un sendero de bosque";

  return (
    <section className="site-hero home-hero" aria-labelledby="home-hero-title">
      <div className="site-hero__copy">
        <div className="site-hero__intro">
          <Reveal>
            <h1 id="home-hero-title" className="site-display home-display">
              {hero.titleLines.map((line) => (
                <span key={line} className="home-display__line">
                  {line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="site-lead">{hero.subtitle}</p>
          </Reveal>
          <Reveal delay={0.16}>
            <ul className="home-hero__badges">
              {hero.badges.map((badge) => (
                <li key={badge.text} className={`site-badge site-badge--${badge.tone}`}>
                  {badge.text}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="site-hero__actions">
              <Link className="site-button site-button--primary" href="/contacto">
                {hero.cta}
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal className="home-hero__media-reveal" delay={0.12}>
        <div className="site-hero__media home-hero__media">
          <figure className="home-hero__media-primary">
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
          <figure className="home-hero__media-secondary">
            <Image
              src="/camp-media/grupo-caminando.webp"
              alt={walkingPhotoAlt}
              fill
              sizes="(max-width: 767px) 100vw, 28vw"
              className="site-hero__image"
            />
          </figure>
        </div>
      </Reveal>
    </section>
  );
}
