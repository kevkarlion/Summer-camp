"use client";

import Image from "next/image";

import { useLanguage } from "./LanguageProvider";

export function HomeSummary() {
  const { dictionary } = useLanguage();

  return (
    <section className="site-section site-section--paper">
      <div className="site-wrap">
        <div className="home-summary__grid">
          <div className="home-summary__copy">
            <h2 className="site-heading home-summary__title">{dictionary.home.summaryTitle}</h2>
            <p className="site-body home-summary">{dictionary.home.summary}</p>
          </div>
          <figure className="home-summary__media">
            <Image
              src={dictionary.home.summaryImage.src}
              alt={dictionary.home.summaryImage.alt}
              fill
              sizes="(max-width: 767px) 100vw, 40vw"
              className="object-cover"
            />
            <figcaption>{dictionary.home.summaryImage.caption}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
