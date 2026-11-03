"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useLanguage } from "./LanguageProvider";

export function ExperienceSection() {
  const { dictionary } = useLanguage();
  const { experience } = dictionary;

  return (
    <section className="site-section site-section--forest home-experience" aria-labelledby="home-experience-title">
      <div className="site-wrap">
        <div className="site-section__intro site-section__intro--wide">
          <div>
            <h2 id="home-experience-title" className="site-heading site-heading--light">
              {experience.heading}
            </h2>
            <p className="site-lead site-lead--light">{experience.lead}</p>
          </div>
        </div>

        <div className="home-experience__grid">
          {experience.columns.map((column) => (
            <article key={column.title} className="home-experience__block">
              <h3>{column.title}</h3>
              <p>{column.text}</p>
            </article>
          ))}
        </div>

        <p className="home-experience__link">
          <Link className="site-text-link" href="/programa-ingles/adolescentes">
            {experience.link} <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </p>
      </div>
    </section>
  );
}
