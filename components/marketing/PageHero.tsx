import Image from "next/image";
import type { ReactNode } from "react";

const facts = [
  { value: "13–17", label: "Años" },
  { value: "4–12 dic.", label: "2027" },
  { value: "Residencial", label: "Formato" },
  { value: "Villa La Angostura", label: "Patagonia" },
];

export interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, image, imageAlt, children }: PageHeroProps) {
  return (
    <section className="site-hero" aria-labelledby="page-hero-title">
      <figure className="site-hero__media">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="site-hero__image"
        />
      </figure>

      <div className="site-hero__copy">
        <div className="site-hero__intro">
          <h1 id="page-hero-title" className="site-display">
            {title}
          </h1>
          <p className="site-lead">{description}</p>
          <p className="site-label site-hero__label">{eyebrow}</p>
          {children ? <div className="site-hero__actions">{children}</div> : null}
        </div>

        <dl className="site-facts" aria-label="Datos principales del campamento">
          {facts.map((fact) => (
            <div key={fact.label} className="site-fact">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
