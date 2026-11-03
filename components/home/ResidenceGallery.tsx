"use client";

import Image from "next/image";

import { useLanguage } from "./LanguageProvider";

export function ResidenceGallery() {
  const { dictionary } = useLanguage();
  const { residence } = dictionary;

  const images = [
    {
      src: "/camp-media/residencia-y-parque.png",
      alt: residence.galleryAlts[0],
      caption: residence.galleryCaptions[0],
      className: "home-gallery__item--wide",
    },
    {
      src: "/camp-media/residencia-de-piedra-y-madera.png",
      alt: residence.galleryAlts[1],
      caption: residence.galleryCaptions[1],
      className: "",
    },
    {
      src: "/camp-media/lago-al-atardecer.png",
      alt: residence.galleryAlts[2],
      caption: residence.galleryCaptions[2],
      className: "",
    },
  ];

  return (
    <figure className="home-gallery site-wrap">
      <div className="home-gallery__grid">
        {images.map((image) => (
          <div key={image.src} className={`home-gallery__item ${image.className}`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 42vw"
              className="home-gallery__image"
            />
            <figcaption>{image.caption}</figcaption>
          </div>
        ))}
      </div>
      <p className="home-gallery__disclaimer">{residence.galleryDisclaimer}</p>
    </figure>
  );
}
