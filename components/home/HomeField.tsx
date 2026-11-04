"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";

import { useLanguage } from "./LanguageProvider";

/**
 * The camp field: one composed section instead of two stacked paper blocks.
 * The copy column carries the argument in three scannable lines; the mosaic
 * holds the real photographs of the week.
 */
export function HomeField() {
  const { dictionary } = useLanguage();
  const { field } = dictionary.home;

  return (
    <section className="site-section site-section--paper" aria-labelledby="home-field-title">
      <div className="site-wrap">
        <div className="home-field">
          <div className="home-field__copy">
            <Reveal>
              <h2 id="home-field-title" className="site-heading home-field__title">
                {field.title}
              </h2>
              <p className="site-lead home-field__lead">{field.lead}</p>
            </Reveal>

            <dl className="home-field__points">
              {field.points.map((point, index) => (
                <Reveal key={point.label} delay={0.08 + index * 0.08} className="home-field__point">
                  <dt>{point.label}</dt>
                  <dd>{point.text}</dd>
                </Reveal>
              ))}
            </dl>

            <Reveal delay={0.32}>
              <Link className="site-text-link site-text-link--dark home-field__link" href="/programa">
                {field.link}
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="home-field__mosaic">
            {field.photos.map((photo, index) => (
              <Reveal
                key={photo.src}
                delay={index * 0.12}
                className={
                  index === 0 ? "home-field__photo home-field__photo--large" : "home-field__photo"
                }
              >
                <figure className="home-field__frame">
                  <div className="home-field__media">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 42vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption>{photo.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
