import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { IMAGE_BLUR_DATA_URL } from "@/components/image/placeholder";
import { PageHero } from "@/components/marketing/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

import "./destino.css";

const pagePath = "/destino/villa-la-angostura";
const title = "Villa La Angostura | Destino del Summer Camp 2027";
const description =
  "Residencia a 2 km del centro de Villa La Angostura, con parque, bosque nativo, lago Nahuel Huapi y programa para adolescentes de 13 a 17 años.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  keywords: ["Villa La Angostura summer camp", "destino campamento Patagonia", "residencia adolescentes Neuquén"],
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
        url: "/camp-media/lago-al-atardecer.png",
        width: 1200,
        height: 630,
        alt: "Fotografía real del campamento: el lago al atardecer con las montañas de Patagonia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/camp-media/lago-al-atardecer.png"],
  },
};

const gallery = [
  {
    src: "/camp-media/kayak-en-el-lago.webp",
    alt: "Fotografía real del campamento: grupo en kayaks sobre el lago con montañas de fondo",
    eyebrow: "El agua",
    title: "Los tonos del Nahuel Huapi",
    text: "El lago es parte del paisaje cotidiano de la experiencia: un horizonte de agua clara entre montañas y bosque.",
    kind: "photo",
    size: "lead",
    sizes: "(max-width: 767px) 100vw, 58vw",
  },
  {
    src: "/camp-media/senderismo-con-villa-al-fondo.webp",
    alt: "Fotografía real del campamento: sendero de bosque con Villa La Angostura al fondo",
    eyebrow: "El bosque",
    title: "Bosque nativo everywhere",
    text: "El entorno de la residencia combina parque, bosque nativo y espacios abiertos para caminar y explorar.",
    kind: "photo",
    size: "tall",
    sizes: "(max-width: 767px) 100vw, 42vw",
  },
  {
    src: "/camp-media/mirando-el-valle.webp",
    alt: "Fotografía real del campamento: adolescente sobre un tronco caído contemplando el valle",
    eyebrow: "Las montañas",
    title: "La cordillera como horizonte",
    text: "Las montañas de la Patagonia acompañan cada jornada y marcan el ritmo de las actividades al aire libre.",
    kind: "photo",
    size: "tall",
    sizes: "(max-width: 767px) 100vw, 42vw",
  },
  {
    src: "/camp-media/residencia-y-parque.png",
    alt: "Fotografía real del campamento: la residencia con su parque y el bosque nativo alrededor",
    eyebrow: "El paisaje",
    title: "Un lugar para mirar y escuchar",
    text: "La cercanía del agua y el bosque convierte cada salida en una ocasión para observar el territorio con otra mirada.",
    kind: "photo",
    size: "wide",
    sizes: "(max-width: 767px) 100vw, 100vw",
  },
];

const experiences = [
  {
    title: "Naturaleza para mirar y recorrer",
    description:
      "El entorno del lago Nahuel Huapi invita a observar, caminar y comprender el territorio con curiosidad y respeto.",
  },
  {
    title: "Conocer a la comunidad local",
    description:
      "Visitar productores locales permite conocer a las personas que dan vida al territorio y valorar sus historias y trabajo.",
  },
  {
    title: "Una base para descubrir juntos",
    description:
      "La residencia reúne actividades al aire libre, descanso, convivencia y momentos compartidos en contacto con la naturaleza.",
  },
];

const placeSchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Villa La Angostura, Neuquén, Argentina",
  description,
  url: `${siteConfig.url}${pagePath}`,
  inLanguage: "es-AR",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Villa La Angostura",
    addressRegion: "Neuquén",
    addressCountry: "AR",
  },
};

const residenceSchema = {
  "@context": "https://schema.org",
  "@type": "Residence",
  name: "Residencia de Patagonia Summer Camp",
  description:
    "Residencia a 2 km del centro de Villa La Angostura con parque, bosque nativo, área deportiva y comedor amplio.",
  url: `${siteConfig.url}${pagePath}`,
  inLanguage: "es-AR",
};

export default function DestinoVillaLaAngosturaPage() {
  return (
    <>
      <JsonLd data={[placeSchema, residenceSchema]} />
      <main id="main-content">
        <PageHero
          eyebrow="Villa La Angostura · Patagonia"
          title="Entre lagos y montañas"
          description="La experiencia se realiza en una residencia a 2 km del centro de Villa La Angostura, rodeada de parque, bosque nativo y naturaleza."
          image="/camp-media/lago-al-atardecer.png"
          imageAlt="Fotografía real del campamento: el lago al atardecer con las montañas de fondo"
        >
          <Button href="/itinerario-y-actividades" size="lg">
            Descubrir actividades <ArrowRight className="size-4" />
          </Button>
        </PageHero>

        <section className="site-section site-section--paper" aria-labelledby="destino-galeria-title">
          <div className="site-wrap">
            <div className="site-section__intro">
              <div>
                <h2 id="destino-galeria-title" className="site-heading">
                  La Patagonia como parte del aprendizaje
                </h2>
                <p className="site-lead site-lead--dark">
                  Conocer un lugar cambia la forma de cuidarlo. La experiencia combina naturaleza, comunidades, historias y conocimiento local.
                </p>
              </div>
            </div>

            <Reveal>
            <div className="destino-gallery">
              {gallery.map((item) => (
                <Reveal key={item.title}>
                <figure className={`destino-figure destino-figure--${item.size}`}>
                  <div className="destino-figure__media">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes={item.sizes}
                      placeholder="blur"
                      blurDataURL={IMAGE_BLUR_DATA_URL}
                      className="object-cover"
                    />
                  </div>
                  <figcaption>
                    <p className="destino-figure__eyebrow">{item.eyebrow}</p>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <p className="destino-figure__kind">Fotografía real del campamento</p>
                  </figcaption>
                </figure>
                </Reveal>
              ))}
            </div>
            </Reveal>

            <p className="destino-note">
              Fotografías reales de Patagonia Summer Camp 2027: el lago, el bosque nativo, la residencia y las experiencias del programa.
            </p>
          </div>
        </section>

        <section className="site-section site-section--forest" aria-labelledby="destino-residencia-title">
          <div className="site-wrap">
            <Reveal>
            <div className="site-section__split">
              <figure className="destino-fogata">
                <Image
                  src="/camp-media/fogata-en-el-bosque.webp"
                  alt="Fotografía real del campamento: fogata con marshmallows en el bosque"
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover"
                />
              </figure>
              <div>
                <h2 id="destino-residencia-title" className="site-heading site-heading--light">
                  Una residencia en el territorio
                </h2>
                <p className="site-lead site-lead--light">
                  El programa se basa en una residencia de Villa La Angostura; el pueblo y su entorno constituyen el contexto de las experiencias, no el lugar de cada actividad.
                </p>
                <p className="destino-figure__eyebrow">La tarde</p>
                <p className="destino-figure__kind">
                  Fotografía real del campamento. El fogón nocturno es ilustrativo y queda sujeto a confirmación del programa.
                </p>
                <div className="destino-experiences">
                  {experiences.map((experience) => (
                    <article key={experience.title} className="destino-experience">
                      <h3>{experience.title}</h3>
                      <p>{experience.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
            </Reveal>
          </div>
        </section>

        <section className="site-section site-section--paper" aria-labelledby="destino-cierre-title">
          <div className="site-wrap">
            <div className="site-section__intro">
              <Reveal>
              <div>
                <h2 id="destino-cierre-title" className="site-heading">
                  Un destino para descubrir
                </h2>
                <p className="site-lead site-lead--dark">
                  El programa residencial se realiza del 4 al 12 de diciembre de 2027 y combina inglés, actividades al aire libre y conocimiento local.
                </p>
              </div>
              <div>
                <Button href="/programa-ingles/adolescentes" variant="outline">
                  Programa para adolescentes <ArrowRight className="size-4" />
                </Button>
              </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
