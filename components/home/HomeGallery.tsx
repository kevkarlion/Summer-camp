"use client";

import Image from "next/image";

import { useLanguage } from "./LanguageProvider";

export function HomeGallery() {
  const { dictionary } = useLanguage();
  const { gallery } = dictionary.home;

  return (
    <section className="site-section site-section--paper" aria-label={gallery.label}>
      <div className="site-wrap">
        <div className="home-gallery-band">
          {gallery.items.map((item) => (
            <figure key={item.src} className="home-gallery-band__item">
              <div className="home-gallery-band__media">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
