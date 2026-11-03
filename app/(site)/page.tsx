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

<section className="relative isolate overflow-hidden bg-surface py-24 sm:py-28 lg:py-36">
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-20 -z-10 size-[30rem] rounded-full bg-orb-emerald blur-[120px] animate-pulse-slow" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-8 -z-10 size-[28rem] rounded-full bg-orb-amber blur-[120px] animate-pulse-slow" />
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-subtle sm:min-h-[38rem]">
            <ParallaxImageContainer
              src="/camp-media/senderismo-con-villa-al-fondo.webp"
              alt="Fotografía real del campamento: grupo en un sendero con Villa La Angostura iluminada al fondo"
              className="absolute inset-0"
              imageClassName="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-x-4 bottom-4 copy-scrim rounded-2xl p-5 sm:inset-x-6 sm:bottom-6 sm:p-6">
              <Badge variant="secondary"><MapPin aria-hidden="true" size={13} /> Villa La Angostura</Badge>
              <p className="mt-4 text-2xl font-semibold tracking-tight text-main">Donde la Patagonia se convierte en aula.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeader
              eyebrow="Learning by doing"
              title="Aprender inglés viviendo la Patagonia."
              description="El inglés se integra en la vida diaria, las actividades y las conversaciones. Cada experiencia ofrece una razón para participar, explorar y construir nuevos vínculos."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Inmersión en actividades, conversaciones y vida cotidiana",
                "Sesiones breves y participativas de inglés cada mañana",
                "Aprendizaje a través de la naturaleza y la convivencia",
                "Acompañamiento de un equipo de coordinación",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-7 text-main">
                  <CheckCircle2 aria-hidden="true" size={19} className="mt-1 shrink-0 text-secondary-accent" /> {item}
                </li>
              ))}
            </ul>
            <Button href="/programa-ingles" variant="outline" className="mt-9">Explorar metodología <ArrowRight aria-hidden="true" size={17} /></Button>
          </Reveal>
        </Container>
      </section>

<section className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-16 size-[32rem] rounded-full bg-orb-emerald blur-[120px] animate-pulse-slow" />
        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <Reveal>
              <Badge variant="primary" className="mb-5">Nuestra historia</Badge>
              <TextReveal as="h2" className="text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-main sm:text-4xl lg:text-5xl">
                De Laponia a Patagonia
              </TextReveal>
              <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
                Hernán Paulitti, fundador de Patagonia Summer Camp, trabajó en Laponia, acompañando visitantes bajo las auroras boreales y llevando huskies por bosques nevados. Después de pasar una semana acampando en El Chaltén, se prometió volver a Patagonia y compartir una experiencia que ayudara a otros a explorar otros mundos a través del idioma.
              </p>
              <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
                El campamento cumple esa promesa valorando la región a través de la amistad, el idioma, el respeto por la cultura local y la curiosidad por la naturaleza.
              </p>
              <Button href="/sobre-nosotros" variant="secondary" className="mt-8">Conocer nuestra historia <ArrowRight aria-hidden="true" size={17} /></Button>
            </Reveal>

            <Reveal delay={0.08} className="relative pb-8 sm:pb-12 lg:pb-0">
              <div className="relative min-h-[31rem] sm:min-h-[38rem]">
                <OrganicMaskImage
                  src="/camp-media/hernan-bajo-las-auroras.webp"
                  alt="Fotografía real de Hernán Paulitti bajo las auroras boreales en Laponia"
                  variant="asymmetric"
                  className="absolute inset-x-0 top-0 h-[72%] min-h-[25rem]"
                  imageClassName="object-cover"
                  sizes="(max-width: 1024px) 88vw, 45vw"
                />
                <figure className="absolute bottom-0 right-0 w-[72%] shadow-2xl sm:w-[62%]">
                  <OrganicMaskImage
                    src="/camp-media/fogata-en-el-bosque.webp"
                    alt="Fotografía real del campamento: fogata con marshmallows en el bosque"
                    variant="arch"
                    className="aspect-[4/3] min-h-0"
                    imageClassName="object-cover"
                    sizes="(max-width: 1024px) 65vw, 34vw"
                  />
                  <figcaption className="mt-3 text-xs leading-5 text-muted">Hernán en Laponia y la fogata del campamento: fotografías reales del programa.</figcaption>
                </figure>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

<section className="relative overflow-hidden bg-surface py-24 sm:py-28 lg:py-36">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="26 hectáreas de naturaleza"
              title="Una residencia entre el lago y el bosque."
              description="La residencia está a 2 km del centro de Villa La Angostura y cuenta con 26 hectáreas de parque y bosque nativo, orilla del lago Nahuel Huapi, un área deportiva y un comedor amplio."
            />
          </Reveal>
          <Reveal delay={0.08} className="mt-12">
            <ImageLightbox items={residenceImages} />
            <p className="mt-5 text-sm leading-6 text-muted">
              Imágenes editoriales de referencia para ilustrar la experiencia envisioned; no muestran la residencia real.
            </p>
          </Reveal>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/destino/villa-la-angostura" variant="outline">Conocer el destino <ArrowRight aria-hidden="true" size={17} /></Button>
            <Button href="/itinerario-y-actividades" variant="ghost">Ver actividades</Button>
          </div>
        </Container>
      </section>

<section className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Un programa para adolescentes"
              title="Una etapa, muchas formas de descubrir."
              description="Una experiencia residencial centrada en la autonomía, la convivencia y el aprendizaje del 4 al 12 de diciembre de 2027."
              align="center"
            />
          </Reveal>
          <div className="mx-auto mt-12 max-w-4xl">
            <Reveal>
              <Link href="/programa-ingles/adolescentes" className="group block h-full">
                <Card variant="elevated" className="h-full overflow-hidden p-8 group-hover:-translate-y-1 group-hover:border-primary/35 sm:p-10">
                  <Badge variant="primary">13–17 años</Badge>
                  <h3 className="mt-6 text-3xl font-semibold tracking-[-0.03em] text-main">Young leaders</h3>
                  <p className="mt-4 leading-7 text-muted">Autonomía, naturaleza, inglés y comunidad para aprender haciendo junto a otros adolescentes.</p>
                  <span className="mt-7 inline-flex items-center gap-2 font-semibold text-primary-accent">Descubrir programa <ArrowRight aria-hidden="true" size={17} className="transition-transform duration-300 group-hover:translate-x-1" /></span>
                </Card>
              </Link>
            </Reveal>
          </div>
        </Container>
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
