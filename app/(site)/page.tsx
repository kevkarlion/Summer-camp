import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IMAGE_BLUR_DATA_URL } from "@/components/image/placeholder";
import { ImageLightbox, type ImageLightboxItem } from "@/components/ui/ImageLightbox";
import { OrganicMaskImage } from "@/components/ui/OrganicMaskImage";
import { ParallaxImageContainer } from "@/components/ui/ParallaxImage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TypicalDayTimeline } from "@/components/ui/TypicalDayTimeline";
import { siteConfig } from "@/lib/site";

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

const pillars = [
  {
    title: "Aventura y confianza",
    text: "Explorar y superar desafíos para ganar confianza en uno mismo y en los demás.",
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=900&q=78",
    alt: "Imagen editorial de referencia: grupo recorriendo un sendero de montaña",
  },
  {
    title: "Aprender haciendo",
    text: "Vivir el inglés en situaciones reales, comunicar ideas y descubrir nuevas perspectivas.",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=78",
    alt: "Imagen editorial de referencia: participantes intercambiando ideas en una actividad",
  },
  {
    title: "Libertad para expresarse",
    text: "Ser uno mismo, compartir ideas y encontrar diferentes formas de participar.",
    src: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=900&q=78",
    alt: "Imagen editorial de referencia: navegación sobre aguas de montaña",
  },
  {
    title: "Comunidad y respeto",
    text: "Crear amistades, valorar las diferencias y aprender a cuidarnos unos a otros.",
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=78",
    alt: "Imagen editorial de referencia: comunidad compartiendo una experiencia al aire libre",
  },
  {
    title: "Cuerpo y mente en equilibrio",
    text: "Mover el cuerpo, cuidar la mente y disfrutar del aire libre.",
    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=78",
    alt: "Imagen editorial de referencia: momento de bienestar y equilibrio junto a la naturaleza",
  },
];

const residenceImages: ImageLightboxItem[] = [
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    alt: "Imagen editorial de referencia: lago y montañas de Patagonia",
    title: "Lago y montañas",
    description: "Referencia editorial del entorno de Villa La Angostura; no muestra la residencia real.",
    sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 58vw",
  },
  {
    src: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=900&q=78",
    alt: "Imagen editorial de referencia: residencia conceptual de madera y piedra en un bosque",
    title: "Residencia entre el bosque",
    description: "Referencia editorial de arquitectura; no documenta la propiedad ni sus instalaciones.",
    sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 42vw",
  },
  {
    src: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=78",
    alt: "Imagen editorial de referencia: comedor amplio iluminado para una convivencia",
    title: "Comedor y convivencia",
    description: "Referencia editorial de un espacio comedor; no muestra el comedor de la residencia.",
    sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 42vw",
  },
  {
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
    alt: "Imagen editorial de referencia: espacio exterior y paisaje al atardecer",
    title: "Aire libre al atardecer",
    description: "Referencia editorial de espacios exteriores; no muestra el área deportiva de la propiedad.",
    sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 58vw",
  },
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
    <main id="main-content">
      <section className="relative isolate flex min-h-[100svh] items-start overflow-hidden pb-14 pt-28 sm:min-h-[48rem] sm:pb-16 sm:pt-32 lg:min-h-[100svh] lg:items-start lg:pb-20 lg:pt-32">
        <Image
          src="/hero-villa-la-angostura.webp"
          alt="Vista panorámica de verano de Villa La Angostura: lago turquesa, bosque nativo y montañas"
          fill
          priority
          placeholder="blur"
          blurDataURL={IMAGE_BLUR_DATA_URL}
          sizes="100vw"
          className="-z-20 object-cover object-[58%_center] lg:object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,19,32,0.82)_0%,rgba(11,19,32,0.48)_48%,rgba(11,19,32,0.08)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(11,19,32,0.08)_0%,rgba(11,19,32,0.22)_62%,rgba(11,19,32,0.48)_100%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-24 -z-10 size-[30rem] rounded-full bg-orb-emerald blur-[120px] animate-pulse-slow" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-28 bottom-10 -z-10 size-[26rem] rounded-full bg-orb-amber blur-[120px] animate-pulse-slow" />

        <Container className="relative py-10 sm:py-12 lg:py-0">
          <Reveal className="max-w-5xl lg:max-w-[58rem]">
            <Badge variant="secondary" className="mb-7"><Sparkles aria-hidden="true" size={14} /> Temporada 2027</Badge>
            <TextReveal as="h1" className="text-[clamp(3.25rem,7.2vw,7.25rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-main">
              Inglés, aventura y Patagonia.
            </TextReveal>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-main/90 sm:mt-7 sm:text-xl">
              Una experiencia residencial al aire libre para que cada adolescente vuelva más seguro, curioso y conectado con el mundo.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center">
              <Button href="/preguntas-frecuentes" size="lg">Consultar disponibilidad <ArrowRight aria-hidden="true" size={18} /></Button>
              <Button href="/programa-ingles" variant="outline" size="lg">Conocer el programa</Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted sm:mt-10">
              {["Adolescentes de 13–17 años", "4–12 de diciembre de 2027", "Formato residencial", "Villa La Angostura"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 aria-hidden="true" size={16} className="text-primary-accent" /> {item}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

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

      <section className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-10 size-[32rem] -translate-x-1/2 rounded-full bg-orb-emerald blur-[120px] animate-pulse-slow" />
        <Container className="relative">
          <Reveal>
            <SectionHeader
              eyebrow="Nuestra filosofía"
              title="Crecer es explorar, expresarse y conectar."
              description="Cinco formas de vivir una experiencia que combina naturaleza, inglés, autonomía y comunidad con respeto por el entorno y las personas."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
            {pillars.map((pillar, index) => (
              <Reveal
                key={pillar.title}
                delay={index * 0.06}
                className={index < 2 ? "lg:col-span-6" : "lg:col-span-4"}
              >
                <article className="group relative isolate min-h-[25rem] overflow-hidden rounded-[2rem] border border-subtle bg-card focus-within:ring-2 focus-within:ring-secondary">
                  <Image
                    src={pillar.src}
                    alt={pillar.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL={IMAGE_BLUR_DATA_URL}
                    className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
                    <h3 className="text-2xl font-semibold tracking-[-0.025em] text-main">{pillar.title}</h3>
                    <p className="mt-3 max-w-md leading-7 text-main/90">{pillar.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-surface py-24 sm:py-28 lg:py-36">
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-20 -z-10 size-[30rem] rounded-full bg-orb-emerald blur-[120px] animate-pulse-slow" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-8 -z-10 size-[28rem] rounded-full bg-orb-amber blur-[120px] animate-pulse-slow" />
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-subtle sm:min-h-[38rem]">
            <ParallaxImageContainer
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
              alt="Montañas nevadas de la Patagonia Argentina"
              className="absolute inset-0"
              imageClassName="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
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
                  <CheckCircle2 aria-hidden="true" size={19} className="mt-1 shrink-0 text-primary-accent" /> {item}
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
                  src="https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1000&q=78"
                  alt="Imagen editorial de referencia: auroras boreales sobre un paisaje nevado"
                  variant="asymmetric"
                  className="absolute inset-x-0 top-0 h-[72%] min-h-[25rem]"
                  imageClassName="object-cover"
                  sizes="(max-width: 1024px) 88vw, 45vw"
                />
                <figure className="absolute bottom-0 right-0 w-[72%] shadow-2xl sm:w-[62%]">
                  <OrganicMaskImage
                    src="https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&w=900&q=78"
                    alt="Imagen editorial de referencia: fogata cálida junto a un paisaje de montaña"
                    variant="arch"
                    className="aspect-[4/3] min-h-0"
                    imageClassName="object-cover"
                    sizes="(max-width: 1024px) 65vw, 34vw"
                  />
                  <figcaption className="mt-3 text-xs leading-5 text-muted">Imágenes editoriales de referencia; no son fotografías de Hernán Paulitti.</figcaption>
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

      <section className="relative overflow-hidden bg-surface py-24 sm:py-28 lg:py-36">
        <Container>
          <Reveal className="max-w-3xl">
            <SectionHeader
              eyebrow="Una jornada ilustrativa"
              title="Aprender, explorar y compartir."
              description="Este recorrido visual presenta posibles momentos de la experiencia. Los horarios exactos y el fogón de la tarde son ilustrativos y están pendientes de confirmación."
            />
            <Button href="/itinerario-y-actividades" variant="secondary" className="mt-9">Ver actividades <ArrowRight aria-hidden="true" size={17} /></Button>
          </Reveal>
          <Reveal delay={0.08} className="mt-14 lg:mt-16">
            <TypicalDayTimeline />
          </Reveal>
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
