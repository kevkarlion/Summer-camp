"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useLanguage } from "@/components/home/LanguageProvider";
import { Reveal } from "@/components/motion/Reveal";

import { nosotrosCopy } from "./copy";

export function NosotrosView() {
  const { language } = useLanguage();
  const copy = nosotrosCopy[language];

  return (
    <main id="main-content" className="nosotros-page">
      <section className="site-hero nosotros-page__hero" aria-labelledby="nosotros-title">
        <div className="site-hero__copy">
            <div className="site-hero__intro">
    <h1 id="nosotros-title" className="site-display nosotros-page__hero-title">
      {copy.hero.titleLines.map((line) => (
        <span key={line}>{line}</span>
      ))}
    </h1>
    <p className="site-lead">{copy.hero.lead}</p>
  </div>
        </div>
        <Reveal delay={0.08}>
          <figure className="site-hero__media">
            <Image
              src={copy.hero.image.src}
              alt={copy.hero.image.alt}
              fill
              priority
              sizes="(max-width: 767px) 100vw, 54vw"
              className="site-hero__image"
            />
          </figure>
        </Reveal>
      </section>

      <section className="site-section site-section--paper" aria-labelledby="nosotros-biography-title">
        <div className="site-wrap site-section__split nosotros-page__biography-layout">
          <Reveal className="nosotros-page__biography-intro">
            <div>
              <h2 id="nosotros-biography-title" className="site-heading">
                {copy.biography.heading}
              </h2>
              <p className="site-section__aside site-section__aside--dark">{copy.biography.aside}</p>
            </div>
          </Reveal>
          <Reveal className="nosotros-page__biography-copy" delay={0.1}>
            <div className="nosotros-page__biography">
              <p className="nosotros-page__biography-opening">
                {copy.biography.paragraphs[0]}
              </p>
              <div className="nosotros-page__biography-body">
                {copy.biography.paragraphs.slice(1).map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal className="nosotros-page__story-reveal" delay={0.08}>
            <div className="nosotros-page__story-gallery">
              {copy.biography.photos.map((photo) => (
                <figure key={photo.src} className="nosotros-page__story-band">
                  <div className="nosotros-page__story-media">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 767px) 100vw, 44vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption>{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-section site-section--paper" aria-labelledby="nosotros-cta-title">
        <div className="site-wrap nosotros-page__cta">
          <Reveal>
            <div>
              <h2 id="nosotros-cta-title" className="site-heading">
                {copy.cta.heading}
              </h2>
              <p className="site-body">{copy.cta.text}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="nosotros-page__cta-action">
              <Link className="site-button site-button--primary" href="/programa">
                {copy.cta.button}
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
