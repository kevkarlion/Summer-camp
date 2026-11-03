"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Backpack, FileText, Footprints, Shirt } from "lucide-react";

import { useLanguage } from "@/components/home/LanguageProvider";
import { Reveal } from "@/components/motion/Reveal";

import { familiasCopy, type PackingIcon } from "./copy";

const packingIcons: Record<PackingIcon, typeof Shirt> = {
  shirt: Shirt,
  footprints: Footprints,
  backpack: Backpack,
  fileText: FileText,
};

export function FamiliasView() {
  const { language } = useLanguage();
  const copy = familiasCopy[language];

  return (
    <main id="main-content" className="familias-page">
      <section className="site-hero familias-page__hero" aria-labelledby="familias-title">
        <div className="site-hero__copy">
          <Reveal>
            <div className="site-hero__intro">
              <h1 id="familias-title" className="site-display familias-page__hero-title">
                {copy.hero.titleLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h1>
              <p className="site-lead">{copy.hero.lead}</p>
            </div>
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

      <Reveal>
        <section className="site-section site-section--paper familias-page__photo-band" aria-label={copy.hero.photo.alt}>
          <div className="site-wrap">
            <figure className="familias-page__photo-band-figure">
              <div className="familias-page__photo-band-media">
                <Image
                  src={copy.hero.photo.src}
                  alt={copy.hero.photo.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, 88vw"
                  className="object-cover"
                />
              </div>
            </figure>
          </div>
        </section>
      </Reveal>

      <section className="site-section site-section--paper" aria-labelledby="familias-faq-title">
        <div className="site-wrap">
          <Reveal>
            <div className="site-section__intro site-section__intro--wide">
              <div>
                <h2 id="familias-faq-title" className="site-heading">
                  {copy.faq.heading}
                </h2>
                <p className="site-lead site-lead--dark">{copy.faq.lead}</p>
              </div>
              <p className="site-section__aside site-section__aside--dark">{copy.faq.aside}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="familias-page__faq">
              {copy.faq.items.map((item) => (
                <details key={item.question} className="familias-page__disclosure">
                  <summary>
                    <span className="familias-page__question">{item.question}</span>
                    <span className="familias-page__marker" aria-hidden="true" />
                  </summary>
                  <p className="familias-page__answer">{item.answer}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-section site-section--forest" aria-labelledby="familias-packing-title">
        <div className="site-wrap">
          <Reveal>
            <div className="site-section__intro site-section__intro--wide">
              <div>
                <h2 id="familias-packing-title" className="site-heading site-heading--light">
                  {copy.packing.heading}
                </h2>
                <p className="site-lead site-lead--light">{copy.packing.lead}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="familias-page__packing">
              {copy.packing.groups.map((group) => {
                const Icon = packingIcons[group.icon];
                return (
                  <article key={group.title} className="familias-page__group">
                    <h3 className="familias-page__group-title">
                      <Icon aria-hidden="true" size={22} strokeWidth={1.75} />
                      <span>{group.title}</span>
                    </h3>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="familias-page__note">{copy.packing.note}</p>
          </Reveal>
        </div>
      </section>

      <section className="site-section site-section--stone" aria-labelledby="familias-policies-title">
        <div className="site-wrap">
          <Reveal>
            <div className="site-section__intro site-section__intro--wide">
              <div>
                <h2 id="familias-policies-title" className="site-heading">
                  {copy.policies.heading}
                </h2>
                <p className="site-lead site-lead--dark">{copy.policies.lead}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="familias-page__policies">
              {copy.policies.groups.map((group) => (
                <article key={group.title} className="familias-page__policy">
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-section site-section--forest" aria-labelledby="familias-download-title">
        <div className="site-wrap familias-page__download">
          <Reveal>
            <div>
              <h2 id="familias-download-title" className="site-heading site-heading--light">
                {copy.download.heading}
              </h2>
              <p className="site-lead site-lead--light">{copy.download.text}</p>
              <p className="familias-page__download-note">{copy.download.note}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="familias-page__download-action">
              <a className="site-button site-button--paper" href="/guia-familias.pdf" download="guia-familias.pdf">
                {copy.download.button}
                <ArrowRight aria-hidden="true" size={18} />
              </a>
              <p className="familias-page__file-label">{copy.download.fileLabel}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-section site-section--paper" aria-labelledby="familias-closing-title">
        <div className="site-wrap site-section__split">
          <Reveal>
            <div>
              <h2 id="familias-closing-title" className="site-heading">
                {copy.closing.heading}
              </h2>
              <p className="site-lead site-lead--dark">{copy.closing.text}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="familias-page__closing-action">
              <Link className="site-button site-button--primary" href="/contacto">
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
