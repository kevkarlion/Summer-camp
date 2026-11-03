import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { IMAGE_BLUR_DATA_URL } from "@/components/image/placeholder";

const facts = [
  { value: "13–17", label: "Años" },
  { value: "4–12 dic.", label: "2027" },
  { value: "Residencial", label: "Formato" },
  { value: "Villa La Angostura", label: "Patagonia" },
];

export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="home-hero__copy">
        <div className="home-hero__intro">
          <h1 id="home-hero-title" className="home-display">
            <span className="home-display__line">Inglés para vivir</span>
            <span className="home-display__line">en Patagonia</span>
          </h1>
          <p className="home-lead">
            Un campamento residencial donde adolescentes usan el inglés en actividades, conversaciones y vida cotidiana.
          </p>
          <div className="home-hero__actions">
            <Link className="home-button home-button--primary" href="/contacto">
              Consultar disponibilidad
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link className="home-text-link" href="/programa-ingles">
              Conocer el programa
            </Link>
          </div>
        </div>

        <dl className="home-facts" aria-label="Datos principales del campamento">
          {facts.map((fact) => (
            <div key={fact.label} className="home-fact">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <figure className="home-hero__media">
        <Image
          src="/hero-villa-la-angostura.webp"
          alt="Vista panorámica de Villa La Angostura: lago turquesa, bosque nativo y montañas"
          fill
          priority
          placeholder="blur"
          blurDataURL={IMAGE_BLUR_DATA_URL}
          sizes="(max-width: 767px) 100vw, 54vw"
          className="home-hero__image"
        />
        <figcaption>Villa La Angostura, sobre el lago Nahuel Huapi.</figcaption>
      </figure>
    </section>
  );
}
