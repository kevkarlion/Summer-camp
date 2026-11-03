import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { IMAGE_BLUR_DATA_URL } from "@/components/image/placeholder";
import { PageHero } from "@/components/marketing/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

import "./itinerario.css";

const pagePath = "/itinerario-y-actividades";
const title = "Itinerario & Aventura al Aire Libre | Kayak y Trekking";
const description =
  "Actividades del summer camp en Villa La Angostura: kayak, trekking, productores locales, convivencia y exploración natural para adolescentes de 13 a 17 años.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  keywords: ["actividades verano villa la angostura", "trekking kayak campamento", "actividades Patagonia adolescentes"],
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
        url: "/camp-media/senderismo-con-villa-la-angostura.webp",
        width: 1200,
        height: 630,
        alt: "Fotografía real del campamento: grupo en un sendero con Villa La Angostura al fondo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/camp-media/senderismo-con-villa-la-angostura.webp"],
  },
};

const activities = [
  {
    title: "Kayak",
    description: "Una experiencia sobre el agua para compartir el día con trabajo en equipo y atención a la seguridad.",
    src: "/camp-media/kayak-en-el-lago.webp",
    alt: "Fotografía real del campamento: grupo en kayaks sobre el lago con montañas de fondo",
    kind: "photo",
    sizes: "(max-width: 767px) 100vw, 34vw",
  },
  {
    title: "Trekking",
    description: "Caminatas y observaciones del bosque en contacto con el entorno natural.",
    src: "/camp-media/senderismo-con-villa-la-angostura.webp",
    alt: "Fotografía real del campamento: grupo en un sendero con Villa La Angostura al fondo",
    kind: "photo",
    sizes: "(max-width: 767px) 100vw, 34vw",
  },
  {
    title: "Visitas a productores locales",
    description:
      "Encuentros con quienes producen y trabajan en el territorio para conocer su historia y su oficio.",
    src: "/camp-media/productores-locales.webp",
    alt: "Fotografía real del campamento: visita a productores locales y su oficio",
    kind: "photo",
    sizes: "(max-width: 767px) 100vw, 34vw",
  },
  {
    title: "Convivencia y naturaleza",
    description:
      "Tiempo para compartir experiencias, explorar el entorno natural y construir vínculos con el grupo.",
    src: "/camp-media/fogata-en-el-bosque.webp",
    alt: "Fotografía real del campamento: fogata con marshmallows en el bosque",
    kind: "photo",
    sizes: "(max-width: 767px) 100vw, 34vw",
  },
  {
    title: "Exploración del entorno",
    description: "Observación y descubrimiento de la naturaleza con una mirada curiosa y respetuosa.",
    src: "/camp-media/mirando-el-valle.webp",
    alt: "Fotografía real del campamento: adolescente sobre un tronco caído contemplando el valle",
    kind: "photo",
    sizes: "(max-width: 767px) 100vw, 34vw",
  },
];

const requirements = [
  "Se consideran el clima y las condiciones de seguridad.",
  "Se utilizan proveedores y profesionales adecuados, cuyas condiciones se verifican.",
  "El equipo de coordinación acompaña la organización de cada actividad.",
  "Los requisitos y el equipamiento específicos se comunican antes de la experiencia.",
];

const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Itinerario y actividades de Patagonia Summer Camp 2027",
  description,
  url: `${siteConfig.url}${pagePath}`,
  inLanguage: "es-AR",
  itemListElement: activities.map((activity, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: activity.title,
    description: activity.description,
  })),
};

export default function ItinerarioYActividadesPage() {
  const [lead, ...rest] = activities;

  return (
    <>
      <JsonLd data={schema} />
      <main id="main-content">
        <PageHero
          eyebrow="Aventura al aire libre"
          title="Actividades para descubrir la Patagonia"
          description="Kayak, trekking y encuentros con productores locales conectan movimiento, equipo, inglés y conocimiento del territorio."
          image="/camp-media/senderismo-con-villa-la-angostura.webp"
          imageAlt="Fotografía real del campamento: grupo en un sendero con Villa La Angostura al fondo"
        >
          <Button href="/seguridad-y-coordinacion" size="lg">
            Conocer la coordinación <ArrowRight className="size-4" />
          </Button>
        </PageHero>

        <section className="site-section site-section--paper" aria-labelledby="itinerario-actividades-title">
          <div className="site-wrap">
            <div className="site-section__intro">
              <div>
                <h2 id="itinerario-actividades-title" className="site-heading">
                  Naturaleza, comunidad y trabajo en equipo
                </h2>
                <p className="site-lead site-lead--dark">
                  Cada actividad considera las condiciones meteorológicas y los requisitos de seguridad. El horario definitivo se comunicará con el programa.
                </p>
              </div>
            </div>

            <div className="itinerario-lead">
              <figure className="itinerario-lead__media">
                <Image
                  src={lead.src}
                  alt={lead.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, 56vw"
                  placeholder="blur"
                  blurDataURL={IMAGE_BLUR_DATA_URL}
                  className="object-cover"
                />
              </figure>
              <div>
                <h3 className="site-heading">{lead.title}</h3>
                <p className="site-lead site-lead--dark">{lead.description}</p>
                <p className="itinerario-entry__kind">
                  Fotografía real del campamento
                </p>
              </div>
            </div>

            <div className="itinerario-list">
              {rest.map((activity) => (
                <article key={activity.title} className="itinerario-entry">
                  <figure
                    className="itinerario-entry__media"
                  >
                    <Image
                      src={activity.src}
                      alt={activity.alt}
                      fill
                      sizes={activity.sizes}
                      placeholder="blur"
                      blurDataURL={IMAGE_BLUR_DATA_URL}
                      className="object-cover"
                    />
                  </figure>
                  <div>
                    <h3>{activity.title}</h3>
                    <p>{activity.description}</p>
                    <p className="itinerario-entry__kind">
                      Fotografía real del campamento
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <p className="site-body itinerary-note">
              Fotografías reales de Patagonia Summer Camp 2027: kayak, trekking, productores locales y la convivencia del grupo.
            </p>
          </div>
        </section>

        <section className="site-section site-section--forest" aria-labelledby="itinerario-requisitos-title">
          <div className="site-wrap">
            <div className="site-section__intro">
              <div>
                <h2 id="itinerario-requisitos-title" className="site-heading site-heading--light">
                  Requisitos claros, experiencia previa no necesaria en general
                </h2>
                <p className="site-lead site-lead--light">
                  No se requiere experiencia outdoor previa en general. Cada actividad puede tener requisitos específicos, y el equipo comunicará el equipamiento final antes del campamento.
                </p>
              </div>
              <div>
                <h3 className="site-heading site-heading--light">La experiencia se adapta a las condiciones</h3>
                <ul className="itinerario-requirements">
                  {requirements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="site-section site-section--paper" aria-labelledby="itinerario-cierre-title">
          <div className="site-wrap">
            <div className="site-section__intro">
              <div>
                <h2 id="itinerario-cierre-title" className="site-heading">
                  Actividades con un propósito compartido
                </h2>
                <p className="site-lead site-lead--dark">
                  Descubrí cómo el programa integra las actividades con el inglés y la convivencia del 4 al 12 de diciembre de 2027.
                </p>
              </div>
              <div>
                <Button href="/programa-ingles/adolescentes" variant="outline">
                  Programa para adolescentes <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
