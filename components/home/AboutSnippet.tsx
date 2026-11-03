"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useLanguage } from "./LanguageProvider";

export function AboutSnippet() {
  const { dictionary } = useLanguage();
  const { about } = dictionary;

  return (
    <section className="site-section site-section--lake home-about" aria-labelledby="home-about-title">
      <div className="site-wrap home-about__grid">
        <div className="home-about__copy">
          <h2 id="home-about-title" className="site-heading site-heading--light">
            {about.heading}
          </h2>
          <p className="site-lead site-lead--light">{about.promise}</p>
          <Link className="site-text-link home-about__link" href="/sobre-nosotros">
            {about.link} <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
        <figure className="home-about__media">
          <Image
            src="/camp-media/hernan-bajo-las-auroras.webp"
            alt={about.imageAlt}
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="home-about__image"
          />
          <figcaption>{about.imageCaption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
