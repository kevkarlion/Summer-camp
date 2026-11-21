"use client";

import Image from "next/image";
import Link from "next/link";

import { VideoCallBooking } from "@/components/forms/VideoCallBooking";
import { useLanguage } from "@/components/home/LanguageProvider";
import { Reveal } from "@/components/motion/Reveal";

import { agendaCopy } from "./copy";

export function AgendaView() {
  const { language } = useLanguage();
  const copy = agendaCopy[language];
  const locale = language === "es" ? "es-AR" : "en-GB";

  return (
    <main id="main-content" className="agenda-page">
      <section className="agenda-hero" aria-labelledby="agenda-title">
        <figure className="agenda-hero__media" aria-hidden="true">
          <Image
            src={copy.hero.image.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="agenda-hero__image"
          />
        </figure>
        <div className="site-wrap agenda-hero__inner">
          <div className="agenda-sheet agenda-sheet--head">
            <div className="agenda-head">
              <h1 id="agenda-title" className="site-display agenda-head__title">
                {copy.hero.titleLines.map((line) => (
                  <span key={line} className="agenda-head__line">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="site-lead agenda-head__lead">{copy.hero.lead}</p>

              <dl className="agenda-facts">
                {copy.hero.facts.map((fact) => (
                  <div key={fact.value} className="agenda-fact">
                    <dt className="agenda-fact__value">{fact.value}</dt>
                    <dd className="agenda-fact__note">{fact.note}</dd>
                  </div>
                ))}
              </dl>

              <div className="agenda-head__actions">
                <a className="agenda-button" href="#turnos">
                  {copy.hero.primaryCta}
                </a>
                <Link className="site-text-link site-text-link--dark" href="/programa">
                  {copy.hero.secondaryCta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="agenda-desk" id="turnos" aria-labelledby="agenda-turnos-title">
        <div className="site-wrap">
          <div className="agenda-sheet agenda-sheet--body">
            <Reveal>
              <h2 id="agenda-turnos-title" className="site-heading agenda-sheet__title">
                {copy.slots.headingLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h2>
              <p className="site-body">{copy.slots.lead}</p>
            </Reveal>

            <Reveal>
              <VideoCallBooking copy={copy.form} slotsCopy={copy.slots} locale={locale} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="agenda-desk agenda-desk--gap" aria-labelledby="agenda-call-title">
        <div className="site-wrap">
          <div className="agenda-sheet">
            <Reveal>
              <h2 id="agenda-call-title" className="site-heading agenda-sheet__title">
                {copy.call.headingLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h2>
              <p className="site-body">{copy.call.lead}</p>
            </Reveal>

            <Reveal delay={0.05}>
              <ul className="agenda-topics">
                {copy.call.items.map((item) => (
                  <li key={item.title} className="agenda-topic">
                    <h3 className="agenda-topic__title">{item.title}</h3>
                    <p className="agenda-topic__text">{item.text}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="agenda-plates">
                {copy.call.photos.map((photo) => (
                  <li key={photo.src} className="agenda-plate">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={1200}
                      height={900}
                      sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
                      className="agenda-plate__image"
                    />
                    <span className="agenda-plate__caption">{photo.caption}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="agenda-desk agenda-desk--gap" aria-labelledby="agenda-faq-title">
        <div className="site-wrap">
          <div className="agenda-sheet">
            <div className="agenda-faq-sheet">
              <Reveal>
                <div className="agenda-faq-sheet__intro">
                  <h2 id="agenda-faq-title" className="site-heading agenda-sheet__title">
                    {copy.faq.headingLines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </h2>
                  <p className="site-body">{copy.faq.lead}</p>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <div className="agenda-faq">
                  {copy.faq.items.map((item) => (
                    <p key={item.question} className="agenda-faq__item">
                      <span className="agenda-faq__question">{item.question}</span> {item.answer}
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="agenda-closing" aria-labelledby="agenda-closing-title">
        <div className="site-wrap agenda-closing__inner">
          <p className="agenda-closing__text">{copy.closing.text}</p>
          <Reveal className="agenda-closing__slot">
            <div className="agenda-closing__card">
              <h2 id="agenda-closing-title" className="site-heading agenda-closing__title">
                {copy.closing.headingLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h2>
              <Link className="agenda-button" href="/contacto">
                {copy.closing.button}
              </Link>
              <Link className="site-text-link site-text-link--dark" href="/familias">
                {copy.closing.link}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
