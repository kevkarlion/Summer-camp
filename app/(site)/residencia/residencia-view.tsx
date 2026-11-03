"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useLanguage } from "@/components/home/LanguageProvider";
import { Reveal } from "@/components/motion/Reveal";

import { residenciaCopy } from "./copy";

export function ResidenciaView() {
  const { language } = useLanguage();
  const copy = residenciaCopy[language];

  return (
    <main id="main-content" className="residencia-page">
      <section className="site-hero residencia-page__hero" aria-labelledby="residencia-title">
        <div className="site-hero__copy">
            <div className="site-hero__intro">
    <h1 id="residencia-title" className="site-display residencia-page__hero-title">
      {copy.hero.titleLines.map((line) => (
        <span key={line}>{line}</span>
      ))}
    </h1>
    <p className="site-lead">{copy.hero.lead}</p>
  </div>
          <Reveal delay={0.1}>
            <dl className="site-facts residencia-page__facts" aria-label={copy.hero.factsLabel}>
              {copy.hero.facts.map((fact) => (
                <div key={fact.label} className="site-fact">
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
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

      <section className="site-section site-section--paper" aria-labelledby="residencia-property-title">
        <div className="site-wrap site-section__split">
          <Reveal>
            <div>
              <h2 id="residencia-property-title" className="site-heading">
                {copy.property.heading}
              </h2>
              <p className="site-lead site-lead--dark">{copy.property.lead}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <p className="site-body">{copy.property.body}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-section site-section--forest" aria-labelledby="residencia-experiences-title">
        <div className="site-wrap">
          <Reveal>
            <div className="site-section__intro site-section__intro--wide">
              <div>
                <h2 id="residencia-experiences-title" className="site-heading site-heading--light">
                  {copy.experiences.heading}
                </h2>
                <p className="site-lead site-lead--light">{copy.experiences.lead}</p>
              </div>
            </div>
          </Reveal>
          <ol className="residencia-page__experiences">
            {copy.experiences.items.map((experience, index) => (
              <li key={experience.title} className="residencia-page__experience">
                <Reveal className="residencia-page__experience-reveal" delay={index * 0.08}>
                  <h3>{experience.title}</h3>
                  <p>{experience.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="site-section site-section--paper" aria-labelledby="residencia-gallery-title">
        <div className="site-wrap">
          <Reveal>
            <div className="site-section__intro site-section__intro--wide">
              <div>
                <h2 id="residencia-gallery-title" className="site-heading">
                  {copy.gallery.heading}
                </h2>
                <p className="site-lead site-lead--dark">{copy.gallery.lead}</p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="residencia-page__gallery">
              {copy.gallery.photos.map((photo) => (
                <figure key={photo.src} className="residencia-page__figure">
                  <div className="residencia-page__figure-media">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 767px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption>
                    <h3>{photo.caption}</h3>
                    <p className="residencia-page__kind">{photo.kind}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="residencia-page__disclaimer">{copy.gallery.disclaimer}</p>
          </Reveal>
        </div>
      </section>

      <section className="site-section site-section--lake" aria-labelledby="residencia-cta-title">
        <div className="site-wrap site-section__split">
          <Reveal>
            <div>
              <h2 id="residencia-cta-title" className="site-heading site-heading--light">
                {copy.cta.heading}
              </h2>
              <p className="site-lead site-lead--light">{copy.cta.text}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="residencia-page__cta-action">
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
