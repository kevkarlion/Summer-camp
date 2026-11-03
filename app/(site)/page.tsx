import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { HomeHero } from "@/components/home/HomeHero";
import { ResidenceGallery } from "@/components/home/ResidenceGallery";
import { WeekRoute } from "@/components/home/WeekRoute";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

import { HomeHero } from "@/components/home/HomeHero";
import { WeekRoute } from "@/components/home/WeekRoute";
import "@/components/home/home-core.css";
import "@/components/home/home-hero.css";
import "@/components/home/home-journey.css";
import "@/components/home/home-closing.css";

import "@/components/home/home-core.css";
import "@/components/home/home-hero.css";
import "@/components/home/home-journey.css";
import "@/components/home/home-residence.css";
import "@/components/home/home-finish-a.css";
import "@/components/home/home-finish-b.css";

const description =
  "Summer camp residencial para adolescentes de 13 a 17 años en Villa La Angostura: inglés por inmersión, naturaleza y aventura del 4 al 12 de diciembre de 2027.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Patagonia Summer Camp 2027 | Inmersión en Inglés & Aventura",
  description,
  keywords: ["summer camp patagonia", "campamento de ingles argentina", "summer camp villa la angostura"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Patagonia Summer Camp 2027 | Inmersión en Inglés & Aventura",
    description,
    url: "/",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [{ url: "/og/summer-camp-2027.png", width: 1200, height: 630, alt: "Patagonia Summer Camp 2027" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patagonia Summer Camp 2027",
    description,
    images: ["/og/summer-camp-2027.png"],
  },
};

const programPoints = [
  {
    title: "Explorar con propósito",
    text: "Trekking, kayak, deportes y conocimiento local convierten cada jornada en una razón para participar.",
  },
  {
    title: "Usar el inglés",
    text: "La misión diaria, las indicaciones y las conversaciones dan sentido real al idioma.",
  },
  {
    title: "Aprender a convivir",
    text: "Cuidar el equipo, asumir responsabilidades y descubrir otras formas de participar.",
  },
];

const benefits = [
  "Inmersión en actividades, conversaciones y vida cotidiana",
  "Sesiones breves y participativas de inglés cada mañana",
  "Aprendizaje a través de la naturaleza y la convivencia",
  "Acompañamiento de un equipo de coordinación",
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Event",
        name: "Patagonia Summer Camp 2027",
        description,
        startDate: "2027-12-04",
        endDate: "2027-12-12",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        audience: {
          "@type": "EducationalAudience",
          educationalRange: "13-17 años",
        },
        location: {
          "@type": "Place",
          name: "Residencia en Villa La Angostura",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Villa La Angostura",
            addressRegion: "Neuquén",
            addressCountry: "AR",
          },
        },
        organizer: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      },
      {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/og/summer-camp-2027.png`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Villa La Angostura",
          addressRegion: "Neuquén",
          addressCountry: "AR",
        },
      },
    ],
  };

  return (
    <main id="main-content" className="home-page">
      <HomeHero />

            <HomeHero />

<section className="border-y border-subtle bg-surface/70 py-8">
        <Container className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            ["13–17", "Años"],
            ["4–12", "Diciembre 2027"],
            ["Residencial", "Formato"],
            ["Villa La Angostura", "Neuquén, Patagonia"],
          ].map(([value, label]) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-semibold tracking-tight text-main sm:text-3xl">{value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">{label}</p>
            </div>
          ))}
        </Container>
      </section>

<section className="home-section home-section--forest home-language" aria-labelledby="home-language-title">
        <div className="home-wrap">
          <div className="home-section__intro home-section__intro--wide">
            <div>
              <h2 id="home-language-title" className="home-heading home-heading--light">
                Una semana, una ruta diaria.
              </h2>
              <p className="home-lead home-lead--light">
                Cada jornada vuelve a unir actividad, inglés y responsabilidad compartida. Así se vive un día dentro del campamento.
              </p>
            </div>
            <p className="home-section__aside">
              El horario definitivo se comunicará con el programa. La secuencia del recorrido muestra los momentos del día ya publicados.
            </p>
          </div>
          <WeekRoute />
        </div>
      </section>

<section className="home-section home-section--paper home-program" aria-labelledby="home-program-title">
        <div className="home-wrap home-program__grid">
          <div className="home-program__copy">
            <h2 id="home-program-title" className="home-heading">
              Cada día construye la confianza.
            </h2>
            <p className="home-lead home-lead--dark">
              Autonomía, naturaleza, inglés y comunidad trabajan juntos en un programa residencial para adolescentes.
            </p>
            <Link className="home-button home-button--primary" href="/programa-ingles/adolescentes">
              Ver programa para adolescentes <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
          <div className="home-program__principles">
            {programPoints.map((point) => (
              <article key={point.title} className="home-program__principle">
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

<section className="home-section home-section--lake home-founder" aria-labelledby="home-founder-title">
        <div className="home-wrap home-founder__grid">
          <div className="home-founder__copy">
            <h2 id="home-founder-title" className="home-heading">
              De Laponia a Patagonia.
            </h2>
            <p className="home-lead home-lead--dark">
              Hernán Paulitti, fundador de Patagonia Summer Camp, trabajó en Laponia acompañando visitantes bajo las auroras boreales y llevando huskies por bosques nevados.
            </p>
            <p className="home-body">
              Después de pasar una semana acampando en El Chaltén, se prometió volver a Patagonia y compartir una experiencia que ayudara a otros a explorar otros mundos a través del idioma.
            </p>
            <p className="home-body">
              El campamento cumple esa promesa valorando la región a través de la amistad, el idioma, el respeto por la cultura local y la curiosidad por la naturaleza.
            </p>
            <Link className="home-text-link home-text-link--dark" href="/sobre-nosotros">
              Conocer nuestra historia <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
          <figure className="home-founder__media">
            <Image
              src="/camp-media/hernan-bajo-las-auroras.webp"
              alt="Hernán Paulitti bajo las auroras boreales en Laponia"
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              className="home-cover-image"
            />
            <figcaption>Hernán Paulitti en Laponia, la experiencia que inspiró Patagonia Summer Camp.</figcaption>
          </figure>
        </div>
      </section>

<section className="home-section home-section--paper home-residence" aria-labelledby="home-residence-title">
        <div className="home-wrap home-residence__intro">
          <div>
            <h2 id="home-residence-title" className="home-heading">
              Una residencia entre el lago y el bosque.
            </h2>
            <p className="home-lead home-lead--dark">
              La residencia está a 2 km del centro de Villa La Angostura y cuenta con 26 hectáreas de parque y bosque nativo, orilla del lago Nahuel Huapi, un área deportiva y un comedor amplio.
            </p>
          </div>
          <div className="home-residence__links">
            <Link className="home-text-link home-text-link--dark" href="/destino/villa-la-angostura">
              Conocer el destino <ArrowRight aria-hidden="true" size={17} />
            </Link>
            <Link className="home-text-link home-text-link--dark" href="/itinerario-y-actividades">
              Ver actividades <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </div>
        <ResidenceGallery />
      </section>

<section className="home-section home-section--paper home-safety" aria-labelledby="home-safety-title">
        <div className="home-wrap home-safety__grid">
          <figure className="home-safety__figure">
            <Image
              src="/camp-media/grupo-caminando.webp"
              alt="Grupo caminando con mochilas por un sendero de bosque"
              fill
              sizes="(max-width: 767px) 100vw, 45vw"
              className="home-cover-image"
            />
          </figure>
          <div className="home-safety__copy">
            <h2 id="home-safety-title" className="home-heading">
              Coordinamos cada etapa.
            </h2>
            <p className="home-lead home-lead--dark">
              Un equipo acompaña la experiencia, las actividades se evalúan según las condiciones y los procedimientos de emergencia, seguro y comunicación se confirman antes del campamento.
            </p>
            <Link className="home-button home-button--primary" href="/seguridad-y-coordinacion">
              Conocer la seguridad <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link className="home-text-link home-text-link--dark" href="/preguntas-frecuentes">
              Ver preguntas frecuentes
            </Link>
          </div>
        </div>
      </section>

<section className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
        <Container>
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-primary/20 surface-cta p-8 sm:p-12 lg:p-16">
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 size-72 rounded-full bg-orb-amber blur-[120px] animate-pulse-slow" />
            <div className="relative max-w-3xl">
              <Badge variant="secondary"><ShieldCheck aria-hidden="true" size={14} /> Seguridad responsable</Badge>
              <TextReveal as="h2" className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.035em] text-main sm:text-5xl">La familia descansa. Nosotros nos ocupamos.</TextReveal>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">Un equipo de coordinación acompaña la experiencia, las actividades se evalúan según las condiciones y los procedimientos de emergencia, seguro y comunicación se confirman antes del campamento.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="/seguridad-y-coordinacion">Conocer la seguridad <ArrowRight aria-hidden="true" size={17} /></Button>
                <Button href="/preguntas-frecuentes" variant="ghost">Ver preguntas frecuentes</Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <JsonLd data={jsonLd} />
    </main>
  );
}
