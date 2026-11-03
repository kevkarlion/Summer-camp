import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

import "./sobre-nosotros.css";

const pagePath = "/sobre-nosotros";
const title = "De Laponia a la Patagonia | Nuestra Historia";
const description =
  "Conocé la historia de Hernán Paulitti, fundador de Patagonia Summer Camp: inglés, aventura y una misión para compartir la Patagonia con los adolescentes.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url), title, description,
  keywords: ["hernan paulitti", "fundador patagonia summer camp", "Hernán Paulitti inglés"],
  alternates: { canonical: pagePath },
  openGraph: {
    type: "website", locale: siteConfig.locale, url: pagePath, siteName: siteConfig.name, title, description,
    images: [{ url: "/camp-media/hernan-bajo-las-auroras.webp", width: 1200, height: 630, alt: "Fotografía real de Hernán Paulitti bajo las auroras boreales en Laponia" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/camp-media/hernan-bajo-las-auroras.webp"] },
};

const values = [
  { title: "Aprender con propósito", description: "Cada experiencia ofrece una razón para observar, participar, conversar y descubrir." },
  { title: "Valorar el territorio", description: "La amistad, el idioma, el respeto por la cultura local y la curiosidad por la naturaleza guían la misión." },
  { title: "Compartir claridad y energía", description: "Hernán quiere compartir con los adolescentes la claridad, la energía y la autenticidad que encuentra en la montaña y las actividades outdoors." },
];

const schema = {
  "@context": "https://schema.org", "@type": "Person", name: "Hernán Paulitti", alternateName: "Hernan Paulitti",
  jobTitle: "Fundador", description, url: `${siteConfig.url}${pagePath}`,
  worksFor: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  knowsAbout: ["Inmersión lingüística", "Campamentos educativos", "Turismo de aventura"],
};

export default function SobreNosotrosPage() {
  return (
    <>
      <JsonLd data={schema} />
      <main id="main-content" className="sobre-page">
        <section className="site-hero sobre-hero" aria-labelledby="sobre-title">
          <div className="site-hero__copy">
            <div className="site-hero__intro">
              <h1 id="sobre-title" className="site-display sobre-title">
                <span>Una mirada amplia para</span>
                <span>una aventura que transforma</span>
              </h1>
              <p className="site-lead">
                Hernán Paulitti, fundador Patagonia Summer Camp, imaginó una experiencia donde el paisaje patagónico se convierte en escenario para aprender y crecer.
              </p>
              <div className="site-hero__actions">
                <Link className="site-button site-button--primary" href="/programa-ingles">
                  Conocer nuestra metodología <ArrowRight aria-hidden="true" size={18} />
                </Link>
              </div>
            </div>
          </div>
          <figure className="site-hero__media">
            <Image
              src="/camp-media/hernan-bajo-las-auroras.webp"
              alt="Fotografía real de Hernán Paulitti bajo las auroras boreales en Laponia"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 54vw"
              className="site-hero__image"
            />
          </figure>
        </section>

        <section className="site-section site-section--paper sobre-biography" aria-labelledby="sobre-biography-title">
          <div className="site-wrap site-section__split">
            <div>
              <h2 id="sobre-biography-title" className="site-heading sobre-heading">
                <span>De una experiencia en Laponia</span>
                <span>a un proyecto en Patagonia</span>
              </h2>
              <p className="site-section__aside site-section__aside--dark">El origen de la idea</p>
            </div>
            <div className="sobre-biography__copy">
              <p>En 2011, Hernán estudió inglés en el Instituto de Formación Docente y Técnica N° 55 de Escobar, Buenos Aires. Después enseñó inglés en Argentina durante muchos años.</p>
              <p>Se mudó a Bolonia, Italia, donde estudió italiano en Academia Lingue y trabajó con empresas italianas de agritech, diseño y tecnología, enseñando inglés a arquitectos, diseñadores, operadores y otros profesionales.</p>
              <p>Organizó viajes de aprendizaje de inglés para adultos y adolescentes a Irlanda e Inglaterra, y trabajó como profesor y responsable de actividades en campamentos de verano del norte de Italia.</p>
              <p>Luego trabajó en Laponia, Finlandia, colaborando con empresas de turismo finlandesas. Guió visitantes bajo las auroras boreales y llevó huskies a bosques nevados a -35°C.</p>
              <p>Después de pasar una semana acampando en El Chaltén, se prometió a sí mismo volver a Patagonia y compartir una experiencia que ayudara a otros a explorar otros mundos a través del idioma.</p>
            </div>
          </div>
        </section>

        <section className="site-section site-section--forest sobre-values" aria-labelledby="sobre-values-title">
          <div className="site-wrap">
            <div className="site-section__intro site-section__intro--wide">
              <div>
                <h2 id="sobre-values-title" className="site-heading site-heading--light sobre-heading">
                  <span>Una misión para compartir</span>
                  <span>la Patagonia</span>
                </h2>
                <p className="site-lead site-lead--light">
                  Patagonia Summer Camp cumple esa promesa valorando la región a través de la amistad, el idioma, el respeto por la cultura local y la curiosidad por la naturaleza.
                </p>
              </div>
              <p className="site-section__aside">Lo que guía nuestro trabajo</p>
            </div>

            <div className="sobre-values__list">
              {values.map((value) => (
                <article key={value.title}>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="site-section site-section--lake sobre-clarity" aria-labelledby="sobre-clarity-title">
          <div className="site-wrap site-section__split">
            <div>
              <h2 id="sobre-clarity-title" className="site-heading sobre-heading">
                <span>Claridad, energía</span>
                <span>y autenticidad</span>
              </h2>
              <p className="site-lead site-lead--dark">
                A Hernán le gustan CrossFit, yoga, ciclismo, la producción musical, las montañas y las actividades al aire libre. Quiere compartir esa sensación con los adolescentes que participan del programa.
              </p>
            </div>
            <div className="sobre-clarity__actions">
              <p>Pasión y liderazgo</p>
              <Link className="site-button site-button--primary" href="/itinerario-y-actividades">
                Ver actividades <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link className="site-button site-button--outline" href="/destino/villa-la-angostura">
                Conocer el destino
              </Link>
            </div>
          </div>
        </section>

        <section className="site-section sobre-closing" aria-labelledby="sobre-closing-title">
          <div className="site-wrap sobre-closing__grid">
            <div>
              <h2 id="sobre-closing-title">El explorador</h2>
              <p>Un espacio para descubrir qué significa aprender afuera, juntos y con propósito.</p>
            </div>
            <Link className="site-button site-button--primary" href="/preguntas-frecuentes">
              Consultar las preguntas frecuentes
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
