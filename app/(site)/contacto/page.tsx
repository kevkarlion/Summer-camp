import type { Metadata } from "next";
import Image from "next/image";

import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { Reveal } from "@/components/motion/Reveal";
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
          <div className="site-wrap contacto-hero__grid">
            <div>
              <h1 id="contacto-title" className="site-display contacto-title">
                <span>Una conversación puede ser</span>
                <span>el comienzo de todo.</span>
              </h1>
              <p className="site-lead">
                Consultanos por Patagonia Summer Camp 2027. Te ayudaremos a entender el programa, las fechas y los próximos pasos para tu familia.
              </p>
            </div>
            <figure className="contacto-hero__media">
              <Image
                src="/hero-villa-la-angostura.webp"
                alt="Vista panorámica de Villa La Angostura: lago turquesa, bosque nativo y montañas"
                fill
                priority
                sizes="(max-width: 767px) 100vw, 46vw"
                className="object-cover"
              />
            </figure>
          </div>
        </section>

        <section className="site-section contacto-body" aria-labelledby="contacto-body-title">
          <div className="site-wrap contacto-grid">
            <Reveal>
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
            </Reveal>
            <Reveal>
            <div className="contacto-form-area">
              <ContactForm />
            </div>
            </Reveal>
          </div>
        </section>

        <section className="site-section site-section--paper" aria-labelledby="contacto-galeria-title">
          <div className="site-wrap">
            <div className="site-section__intro">
              <Reveal>
              <div>
                <h2 id="contacto-galeria-title" className="site-heading">
                  El campamento que estás por conocer
                </h2>
                <p className="site-lead site-lead--dark">
                  El equipo, el territorio y la convivencia que hacen posible una semana en Villa La Angostura.
                </p>
              </div>
              </Reveal>
            </div>
            <Reveal>
              <div className="contacto-band">
                {[
                  {
                    src: "/camp-media/grupo-caminando.webp",
                    alt: "Fotografía real del campamento: grupo caminando con mochilas por un sendero de bosque",
                    caption: "El grupo en la montaña",
                  },
                  {
                    src: "/camp-media/productores-locales.webp",
                    alt: "Fotografía real del campamento: visita a productores locales y su oficio",
                    caption: "Encuentros con el territorio",
                  },
                  {
                    src: "/camp-media/kayak-en-el-lago.webp",
                    alt: "Fotografía real del campamento: grupo en kayaks sobre el lago con montañas de fondo",
                    caption: "El agua como aula",
                  },
                ].map((item) => (
                  <Reveal key={item.src}>
                  <figure className="contacto-band__item">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 767px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <figcaption>{item.caption}</figcaption>
                  </figure>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
