import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

import "./contacto.css";

const pagePath = "/contacto";
const title = "Contacto | Patagonia Summer Camp 2027";
const description =
  "Contactanos para conocer Patagonia Summer Camp 2027: fechas, inglés, actividades, alojamiento, seguridad e inscripción para adolescentes de 13 a 17 años.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  keywords: [
    "contacto summer camp Patagonia",
    "información campamento Villa La Angostura",
    "inscripción summer camp 2027",
  ],
  alternates: { canonical: pagePath },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: pagePath,
    siteName: siteConfig.name,
    title,
    description,
    images: [
      {
        url: "/hero-villa-la-angostura.webp",
        width: 1600,
        height: 1066,
        alt: "Villa La Angostura, Patagonia Argentina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/hero-villa-la-angostura.webp"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: title,
  description,
  url: `${siteConfig.url}${pagePath}`,
  inLanguage: "es-AR",
  mainEntity: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Villa La Angostura",
      addressRegion: "Neuquén",
      addressCountry: "AR",
    },
  },
};

const contactFacts = [
  "Consultas sobre el programa de inglés y las experiencias",
  "Fechas previstas: 4 al 12 de diciembre de 2027",
  "Experiencia residencial en Villa La Angostura, Neuquén",
];

export default function ContactoPage() {
  return (
    <>
      <JsonLd data={schema} />
      <main id="main-content" className="contacto-page">
        <section className="contacto-hero" aria-labelledby="contacto-title">
          <div className="site-wrap">
            <h1 id="contacto-title" className="site-display contacto-title">
              <span>Una conversación puede ser</span>
              <span>el comienzo de todo.</span>
            </h1>
            <p className="site-lead">
              Consultanos por Patagonia Summer Camp 2027. Te ayudaremos a entender el programa, las fechas y los próximos pasos para tu familia.
            </p>
          </div>
        </section>

        <section className="site-section contacto-body" aria-labelledby="contacto-body-title">
          <div className="site-wrap contacto-grid">
            <div className="contacto-copy">
              <div className="contacto-copy__sticky">
                <h2 id="contacto-body-title" className="site-heading contacto-heading">
                  <span>Contanos qué necesitás</span>
                  <span>saber.</span>
                </h2>
                <p className="site-body">
                  Podés preguntarnos por cualquier aspecto de la experiencia. Los datos pendientes —como precio, cobertura, habitaciones y organización final— se confirman antes de la inscripción.
                </p>
                <ul className="contacto-facts">
                  {contactFacts.map((fact) => <li key={fact}>{fact}</li>)}
                </ul>
              </div>
            </div>
            <div className="contacto-form-area">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
