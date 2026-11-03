import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

import "./adolescentes.css";

const pagePath = "/programa-ingles/adolescentes";
const title = "Campamento de Inglés para Adolescentes (13-17 años)";
const description =
  "Programa residencial para adolescentes de 13 a 17 años: inglés por inmersión, kayak, trekking y naturaleza en Villa La Angostura durante diciembre de 2027.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url), title, description,
  keywords: ["campamento adolescentes ingles", "viaje verano jovenes patagonia", "summer camp villa la angostura"],
  alternates: { canonical: pagePath },
  openGraph: {
    type: "website", locale: siteConfig.locale, url: pagePath, siteName: siteConfig.name, title, description,
    images: [{ url: "/camp-media/grupo-jugando.webp", width: 1200, height: 630, alt: "Fotografía real del campamento: grupo de adolescentes jugando al aire libre" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/camp-media/grupo-jugando.webp"] },
};

const facts = [
  { value: "13–17", label: "Años" },
  { value: "4–12 dic.", label: "2027" },
  { value: "Residencial", label: "Formato" },
  { value: "Villa La Angostura", label: "Patagonia" },
];

const pillars = [
  { title: "Inglés para la vida real", description: "El idioma aparece en actividades, conversaciones y decisiones para ganar confianza y disposición para comunicarte." },
  { title: "Autonomía con acompañamiento", description: "La aventura y la convivencia ofrecen nuevas formas de organizar la participación y resolver desafíos." },
  { title: "Reflexión y perspectiva", description: "Las experiencias abren espacio para comparar ideas, reconocer avances y descubrir nuevas formas de expresarse." },
];

const schema = {
  "@context": "https://schema.org", "@type": "Course", name: title, description,
  url: `${siteConfig.url}${pagePath}`, inLanguage: "es-AR",
  educationalLevel: "13-17 años", courseMode: "onsite",
  startDate: "2027-12-04", endDate: "2027-12-12",
  teaches: ["Inglés oral", "Comunicación", "Convivencia", "Trabajo en equipo", "Autonomía"],
  audience: { "@type": "EducationalAudience", educationalRange: "13-17 años" },
  provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  location: { "@type": "Place", name: "Residencia en Villa La Angostura", address: { "@type": "PostalAddress", addressLocality: "Villa La Angostura", addressRegion: "Neuquén", addressCountry: "AR" } },
};

export default function ProgramaAdolescentesPage() {
  return (
    <>
      <JsonLd data={schema} />
      <main id="main-content" className="adolescentes-page">
        <section className="site-hero adolescentes-hero" aria-labelledby="adolescentes-title">
          <div className="site-hero__copy">
            <div className="site-hero__intro">
              <h1 id="adolescentes-title" className="site-display adolescentes-title">
                <span>Una experiencia para</span>
                <span>pensar, decidir y conectar</span>
              </h1>
              <p className="site-lead">
                Naturaleza, actividades y conversaciones dan otra dimensión al inglés en una experiencia residencial en Villa La Angostura.
              </p>
              <div className="site-hero__actions">
                <Link className="site-button site-button--primary" href="#experiencias">
                  Explorar el programa <ArrowRight aria-hidden="true" size={18} />
                </Link>
              </div>
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

          <figure className="site-hero__media">
            <Image
              src="/camp-media/grupo-jugando.webp"
              alt="Fotografía real del campamento: grupo de adolescentes jugando al aire libre"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 54vw"
              className="site-hero__image"
            />
          </figure>
        </section>

        <section id="experiencias" className="site-section site-section--paper adolescentes-purpose" aria-labelledby="adolescentes-purpose-title">
          <div className="site-wrap">
            <div className="site-section__intro site-section__intro--wide">
              <div>
                <h2 id="adolescentes-purpose-title" className="site-heading adolescentes-heading">
                  <span>Menos idioma de aula,</span>
                  <span>más idioma para la vida</span>
                </h2>
                <p className="site-lead site-lead--dark">
                  El inglés se integra en la vida diaria, las actividades y las conversaciones. El nivel recomendado y el apoyo para distintos niveles se comunicarán antes de la inscripción.
                </p>
              </div>
              <p className="site-section__aside site-section__aside--dark">Inmersión con propósito</p>
            </div>

            <div className="adolescentes-pillars">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="adolescentes-pillar">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="site-section site-section--forest adolescentes-responsibility" aria-labelledby="adolescentes-responsibility-title">
          <div className="site-wrap site-section__split">
            <div>
              <h2 id="adolescentes-responsibility-title" className="site-heading site-heading--light">
                Autonomía, pertenencia y límites claros
              </h2>
              <p className="site-lead site-lead--light">
                La experiencia se diseña para fortalecer vínculos, responsabilidades y una convivencia respetuosa.
              </p>
              <div className="adolescentes-actions">
                <Link className="site-button site-button--paper" href="/itinerario-y-actividades">
                  Ver actividades <ArrowRight aria-hidden="true" size={18} />
                </Link>
                <Link className="site-text-link" href="/seguridad-y-coordinacion">
                  Conocer la coordinación
                </Link>
              </div>
            </div>

            <div className="adolescentes-shared">
              <h3>Una experiencia que se comparte</h3>
              <p>El programa reúne a adolescentes de Buenos Aires y otras provincias. El transporte interprovincial no está incluido.</p>
              <ul>
                <li>Kayak, trekking y exploración del entorno natural.</li>
                <li>Visitas a productores locales para conocer el territorio.</li>
                <li>Tiempo de convivencia y experiencia compartida en la residencia.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="site-section site-section--lake adolescents-residence" aria-labelledby="adolescentes-residence-title">
          <div className="site-wrap site-section__split">
            <div>
              <h2 id="adolescentes-residence-title" className="site-heading">
                <span>Naturaleza, comunidad</span>
                <span>y un espacio para crecer</span>
              </h2>
              <p className="site-lead site-lead--dark">
                La residencia está a 2 km del centro, cuenta con 26 hectáreas de parque y bosque nativo, costa sobre el lago Nahuel Huapi, área deportiva y comedor amplio.
              </p>
            </div>
            <div className="adolescentes-residence-note">
              <p>
                Cada familia organiza y paga su transporte. Las recepciones, el regreso, la distribución de habitaciones, los servicios incluidos y otros detalles operativos se comunicarán antes del campamento.
              </p>
              <Link className="site-button site-button--primary" href="/programa-ingles">
                Ver la metodología <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section className="adolescentes-closing" aria-labelledby="adolescentes-closing-title">
          <div className="site-wrap adolescentes-closing__grid">
            <h2 id="adolescentes-closing-title">Consultá el programa para tu familia</h2>
            <div>
              <p>En Villa La Angostura, cada familia puede consultar el programa, las fechas y la disponibilidad para adolescentes de 13 a 17 años.</p>
              <Link className="site-button site-button--paper" href="/contacto">
                Consultar disponibilidad <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
