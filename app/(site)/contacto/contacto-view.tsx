"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ContactForm } from "@/components/forms/ContactForm";
import { useLanguage } from "@/components/home/LanguageProvider";
import { Reveal } from "@/components/motion/Reveal";

import { contactoCopy } from "./copy";

export function ContactoView() {
  const { language } = useLanguage();
  const copy = contactoCopy[language];

  return (
    <main id="main-content" className="contacto-page">
      <section className="contacto-hero" aria-labelledby="contacto-title">
        <div className="site-wrap contacto-hero__grid">
          <div className="contacto-hero__copy">
            <h1 id="contacto-title" className="site-display contacto-title">
              {copy.hero.titleLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>
            <p className="site-lead">{copy.hero.lead}</p>
            <a className="site-button site-button--paper" href="#contacto-form">
              {copy.hero.cta}
            </a>
          </div>
          <figure className="contacto-hero__media">
            <Image
              src={copy.hero.image.src}
              alt={copy.hero.image.alt}
              fill
              priority
              sizes="(max-width: 959px) 100vw, 46vw"
              className="object-cover"
            />
          </figure>
        </div>
      </section>

      <section className="site-section contacto-body" aria-labelledby="contacto-body-title">
        <div className="site-wrap contacto-grid">
          <Reveal>
            <div className="contacto-copy">
              <div className="contacto-copy__sticky">
                <h2 id="contacto-body-title" className="site-heading contacto-heading">
                  {copy.body.titleLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h2>
                <p className="site-body">{copy.body.text}</p>
                <ul className="contacto-facts">
                  {copy.body.facts.map((fact) => (
                    <li key={fact}>{fact}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="contacto-form-area" id="contacto-form">
              <ContactForm copy={copy.form} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-section site-section--paper" aria-labelledby="contacto-galeria-title">
        <div className="site-wrap">
          <div className="site-section__intro">
            <Reveal>
              <div>
                <h2 id="contacto-galeria-title" className="site-heading">
                  {copy.gallery.heading}
                </h2>
                <p className="site-lead site-lead--dark">{copy.gallery.lead}</p>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="contacto-band">
              {copy.gallery.photos.map((photo) => (
                <Reveal key={photo.src}>
                  <figure className="contacto-band__item">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 767px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <figcaption>{photo.caption}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-section site-section--forest" aria-labelledby="contacto-closing-title">
        <div className="site-wrap site-section__split">
          <Reveal>
            <div>
              <h2 id="contacto-closing-title" className="site-heading site-heading--light">
                {copy.closing.heading}
              </h2>
              <p className="site-lead site-lead--light">{copy.closing.text}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="contacto-closing__action">
              <Link className="site-button site-button--paper" href="#contacto-form">
                {copy.closing.button}
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
