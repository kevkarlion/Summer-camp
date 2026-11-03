"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, MessageCircle, Users } from "lucide-react";

import { useLanguage } from "@/components/home/LanguageProvider";
import { Reveal } from "@/components/motion/Reveal";
import { DayTimeline } from "@/components/site/DayTimeline";

import { programaCopy } from "./copy";

const stepIcons = [MessageCircle, Compass, Users] as const;

export function ProgramaView() {
  const { language } = useLanguage();
  const copy = programaCopy[language];

  return (
    <main id="main-content" className="programa-page">
      <section className="site-hero programa-page__hero" aria-labelledby="programa-title">
        <div className="site-hero__copy">
          <Reveal>
            <div className="site-hero__intro">
              <h1 id="programa-title" className="site-display programa-page__hero-title">
                {copy.hero.titleLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h1>
              <p className="site-lead">{copy.hero.lead}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="site-facts programa-page__facts" aria-label={copy.hero.factsLabel}>
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

      <section className="site-section site-section--paper" aria-labelledby="programa-method-title">
        <div className="site-wrap">
          <Reveal>
            <div className="site-section__intro site-section__intro--wide">
              <div>
                <h2 id="programa-method-title" className="site-heading">
                  {copy.method.heading}
                </h2>
                <p className="site-lead site-lead--dark">{copy.method.lead}</p>
              </div>
              <p className="site-section__aside site-section__aside--dark">{copy.method.body}</p>
            </div>
          </Reveal>
          <ol className="programa-page__steps">
            {copy.method.steps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <li key={step.title} className="programa-page__step">
                  <Reveal className="programa-page__step-reveal" delay={index * 0.08}>
                    <span className="programa-page__step-icon" aria-hidden="true">
                      <Icon size={26} strokeWidth={1.8} />
                    </span>
                    <h3 className="programa-page__step-title">{step.title}</h3>
                    <p className="programa-page__step-text">{step.text}</p>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="site-section site-section--forest" aria-labelledby="programa-rhythm-title">
        <div className="site-wrap programa-page__rhythm">
          <Reveal className="programa-page__rhythm-copy">
            <h2 id="programa-rhythm-title" className="site-heading site-heading--light">
              {copy.rhythm.heading}
            </h2>
            <p className="programa-page__statement">{copy.rhythm.statement}</p>
            <p className="site-lead site-lead--light">{copy.rhythm.lead}</p>
          </Reveal>
          <ol className="programa-page__rhythm-list">
            {copy.rhythm.items.map((item) => (
              <li key={item.label} className="programa-page__rhythm-item">
                <p className="programa-page__rhythm-label">{item.label}</p>
                <p className="programa-page__rhythm-text">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="site-section site-section--paper" aria-labelledby="programa-activities-title">
        <div className="site-wrap">
          <div className="site-section__intro site-section__intro--wide">
            <div>
              <h2 id="programa-activities-title" className="site-heading">
                {copy.activities.heading}
              </h2>
              <p className="site-lead site-lead--dark">{copy.activities.lead}</p>
            </div>
          </div>
          <div className="programa-page__activities">
            {copy.activities.items.map((activity) => (
              <article key={activity.title} className="programa-page__activity">
                <Reveal>
                  <figure className="programa-page__activity-media">
                    <Image
                      src={activity.photo.src}
                      alt={activity.photo.alt}
                      fill
                      sizes="(max-width: 899px) 100vw, 34vw"
                      className="object-cover"
                    />
                  </figure>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="programa-page__activity-copy">
                    <h3 className="programa-page__activity-title">{activity.title}</h3>
                    <p className="programa-page__activity-text">{activity.text}</p>
                    <p className="programa-page__caption">{activity.photo.caption}</p>
                  </div>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section site-section--lake" aria-labelledby="programa-band-title">
        <div className="site-wrap">
          <Reveal>
            <div className="site-section__intro site-section__intro--wide">
              <div>
                <h2 id="programa-band-title" className="site-heading site-heading--light">
                  {copy.band.heading}
                </h2>
                <p className="site-lead site-lead--light">{copy.band.lead}</p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="programa-page__band">
              {copy.band.photos.map((photo) => (
                <figure key={photo.src} className="programa-page__band-item">
                  <div className="programa-page__band-media">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 767px) 100vw, 50vw"
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

      <section className="site-section site-section--paper" aria-labelledby="programa-day-title">
        <div className="site-wrap">
          <Reveal>
            <div className="site-section__intro site-section__intro--wide">
              <div>
                <h2 id="programa-day-title" className="site-heading">
                  {copy.day.heading}
                </h2>
                <p className="site-lead site-lead--dark">{copy.day.lead}</p>
              </div>
              <p className="site-section__aside site-section__aside--dark">{copy.day.aside}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <DayTimeline />
          </Reveal>
        </div>
      </section>

      <section className="site-section site-section--forest" aria-labelledby="programa-cta-title">
        <div className="site-wrap programa-page__cta">
          <Reveal>
            <h2 id="programa-cta-title" className="programa-page__cta-title">
              {copy.cta.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="programa-page__cta-action">
              <p>{copy.cta.text}</p>
              <Link className="site-button site-button--paper" href="/contacto">
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
