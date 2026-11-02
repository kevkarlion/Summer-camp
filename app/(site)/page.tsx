import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Compass,
  Languages,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/site";

const description =
  "Summer camp en Villa La Angostura: inglés por inmersión, aventura en la Patagonia y experiencias naturales para jóvenes de 8 a 17 años. Reservá tu lugar.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Patagonia Summer Camp 2027 | Inmersión en Inglés & Aventura",
  description,
  keywords: ["summer camp patagonia", "campamento de ingles argentina"],
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
    icon: Languages,
    title: "Inmersión real",
    text: "El inglés vive en cada actividad, conversación y nuevo vínculo.",
  },
  {
    icon: Compass,
    title: "Aventura Patagonia",
    text: "Bosques, lagos y montaña para descubrir con curiosidad y seguridad.",
  },
  {
    icon: ShieldCheck,
    title: "Confianza para crecer",
    text: "Equipos reducidos, personal capacitado y planificación responsable.",
  },
];

const dayFlow = [
  { icon: Sparkles, time: "08:30", title: "Despertar y conectar", text: "Una dinámica de inicio que activa el idioma y el equipo." },
  { icon: Compass, time: "10:00", title: "Misión en la naturaleza", text: "Kayak, trekking o exploración con un reto lingüístico." },
  { icon: Users, time: "16:30", title: "Tiempo libre y comunidad", text: "Juegos, actividades recreativas y conversaciones espontáneas." },
  { icon: CalendarDays, time: "20:00", title: "Cierre del día", text: "Reflexión, planificación y una noche tranquila." },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Event",
        name: "Patagonia Summer Camp 2027",
        description,
        startDate: "2027-01-01",
        endDate: "2027-12-31",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: {
          "@type": "Place",
          name: "Villa La Angostura",
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
      {
        "@type": "AggregateRating",
        ratingValue: "0",
        reviewCount: "0",
        bestRating: "5",
        itemReviewed: { "@type": "Organization", name: siteConfig.name },
      },
    ],
  };

  return (
    <main id="main-content">
      <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden pb-16 pt-32 sm:pt-36">
        <Image
          src="https://images.unsplash.com/photo-1531761535209-180857e963b9?auto=format&fit=crop&w=2200&q=88"
          alt="Lago de montaña en Patagonia bajo un cielo luminoso"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,19,32,0.96)_0%,rgba(11,19,32,0.76)_48%,rgba(11,19,32,0.22)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(11,19,32,0.18)_0%,rgba(11,19,32,0.42)_62%,var(--bg-main)_100%)]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-24 -z-10 size-[30rem] rounded-full bg-orb-emerald blur-[120px] animate-pulse-slow"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 bottom-10 -z-10 size-[26rem] rounded-full bg-orb-amber blur-[120px] animate-pulse-slow"
        />

        <Container className="relative py-16 lg:py-24">
          <Reveal className="max-w-4xl">
            <Badge variant="secondary" className="mb-7">
              <Sparkles aria-hidden="true" size={14} /> Temporada 2027
            </Badge>
            <TextReveal
              as="h1"
              className="text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-main sm:text-7xl lg:text-[6.4rem]"
            >
              Inglés, aventura y Patagonia.
            </TextReveal>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-main sm:text-xl">
              Una experiencia al aire libre para que cada joven vuelva más seguro, curioso y conectado con el mundo.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/preguntas-frecuentes" size="lg">
                Consultar disponibilidad <ArrowRight aria-hidden="true" size={18} />
              </Button>
              <Button href="/programa-ingles" variant="outline" size="lg">
                Conocer el programa
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
              {["Edades 8–17 años", "Grupos reducidos", "Coordinación bilingüe"].map((item) => (
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
            ["8–17", "Años"],
            ["4:1", "Ratio de grupo"],
            ["7", "Días de aventura"],
            ["360°", "Experiencia integral"],
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
              eyebrow="Una aventura que transforma"
              title="No es un viaje más. Es una forma distinta de aprender."
              description="Combinamos inmersión real, desafío outdoors y acompañamiento humano para que el inglés se convierta en confianza, curiosidad y conexión."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-12" data-cursor="EXPLORAR">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const bentoClass = index === 0
                ? "lg:col-span-5"
                : index === 1
                  ? "lg:col-span-7"
                  : "lg:col-span-12";

              return (
                <Reveal key={pillar.title} delay={index * 0.08} className={bentoClass}>
                  <Card
                    interactive
                    variant={index === 2 ? "elevated" : "glass"}
                    className="h-full overflow-hidden p-7 sm:p-9"
                  >
                    <div className="flex h-full flex-col items-start">
                      <span className="grid size-12 place-items-center rounded-2xl bg-primary/12 text-primary-accent">
                        <Icon aria-hidden="true" size={23} />
                      </span>
                      <h3 className="mt-6 text-xl font-semibold tracking-tight text-main">{pillar.title}</h3>
                      <p className="mt-3 max-w-xl leading-7 text-muted">{pillar.text}</p>
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-surface py-24 sm:py-28 lg:py-36">
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-20 -z-10 size-[30rem] rounded-full bg-orb-emerald blur-[120px] animate-pulse-slow" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-8 -z-10 size-[28rem] rounded-full bg-orb-amber blur-[120px] animate-pulse-slow" />
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-subtle sm:min-h-[38rem]">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=85"
              alt="Montañas nevadas de la Patagonia Argentina"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              containerClassName="absolute inset-0"
              imageClassName="object-cover"
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
              description="Cada actividad tiene un propósito lingüístico. El idioma deja de ser una materia y se vuelve la herramienta para explorar, conocer y construir nuevos vínculos."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Inmersión en actividades y vida cotidiana",
                "Desafíos colaborativos con objetivos lingüísticos",
                "Reflexiones para transformar la experiencia en aprendizaje",
                "Acompañamiento cercano de coordinadores bilingües",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-7 text-main">
                  <CheckCircle2 aria-hidden="true" size={19} className="mt-1 shrink-0 text-primary-accent" /> {item}
                </li>
              ))}
            </ul>
            <Button href="/programa-ingles" variant="outline" className="mt-9">
              Explorar metodología <ArrowRight aria-hidden="true" size={17} />
            </Button>
          </Reveal>
        </Container>
      </section>

      <section className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-16 size-[32rem] rounded-full bg-orb-emerald blur-[120px] animate-pulse-slow" />
        <Container className="relative">
          <div className="grid items-stretch gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <Reveal className="flex flex-col justify-center">
              <Badge variant="primary" className="mb-5 self-start">Villa La Angostura · Patagonia</Badge>
              <TextReveal
                as="h2"
                className="text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-main sm:text-4xl lg:text-5xl"
              >
                Entre lagos, bosques y montañas
              </TextReveal>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
                Un summer camp villa la angostura donde el paisaje se convierte en contexto para aprender inglés, explorar habilidades y vivir nuevas experiencias.
              </p>
              <Button href="/destino/villa-la-angostura" variant="outline" className="mt-8 self-start">
                Conocer el destino <ArrowRight aria-hidden="true" size={17} />
              </Button>
            </Reveal>

            <Reveal delay={0.08} className="min-h-[28rem]">
              <figure
                className="grid h-full min-h-[28rem] gap-4 overflow-hidden rounded-[2rem] border border-subtle p-4 md:grid-cols-12"
                data-cursor="PATAGONIA"
              >
                <div className="relative min-h-[24rem] overflow-hidden rounded-[1.5rem] md:col-span-8 md:min-h-[34rem]">
                  <ParallaxImage
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85"
                    alt="Lagos y montañas del entorno de Villa La Angostura"
                    fill
                    sizes="(max-width: 768px) 100vw, 55vw"
                    containerClassName="absolute inset-0"
                    imageClassName="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-main/50 to-transparent" />
                </div>
                <div className="relative min-h-[18rem] overflow-hidden rounded-[1.5rem] md:col-span-4 md:min-h-[34rem]">
                  <ParallaxImage
                    src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=85"
                    alt="Montañas nevadas de la Patagonia Argentina"
                    fill
                    sizes="(max-width: 768px) 100vw, 35vw"
                    containerClassName="absolute inset-0"
                    imageClassName="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-main/90 via-bg-main/10 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary-accent">La Patagonia como parte del aprendizaje</p>
                    <p className="mt-3 text-xl font-semibold leading-snug text-main sm:text-2xl">
                      Del paisaje a la conversación.
                    </p>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden py-24 sm:py-28 lg:py-36">
        <div aria-hidden="true" className="pointer-events-none absolute -left-28 top-12 -z-10 size-[32rem] rounded-full bg-orb-emerald blur-[120px] animate-pulse-slow" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-28 bottom-4 -z-10 size-[30rem] rounded-full bg-orb-amber blur-[120px] animate-pulse-slow" />
        <Container className="relative">
          <Reveal>
            <SectionHeader
              eyebrow="Nuestra historia"
              title="Una mirada amplia para una aventura que transforma"
              description="Hernán Paulitti, fundador Patagonia Summer Camp, imaginó una experiencia donde el paisaje patagónico se convierte en escenario para aprender y crecer."
            />
            <Button href="/sobre-nosotros" variant="secondary" className="mt-8">
              Conocer nuestra historia <ArrowRight aria-hidden="true" size={17} />
            </Button>
          </Reveal>
          <Reveal delay={0.08} className="mt-12">
            <Card variant="glass" className="relative overflow-hidden p-8 sm:p-12 lg:p-16">
              <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.16),transparent_58%)]" aria-hidden="true" />
              <div className="relative grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
                <div>
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary-accent">Patagonia Summer Camp 2027</span>
                  <p className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-main sm:text-4xl">
                    Inglés, aventura y Patagonia.
                  </p>
                </div>
                <p className="max-w-2xl text-lg leading-8 text-muted">
                  Una experiencia que une inglés, aventura y aprendizaje en familia, con el paisaje patagónico como escenario para descubrir, conversar y crecer.
                </p>
              </div>
            </Card>
          </Reveal>
        </Container>
      </section>

      <section className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Un programa para cada etapa"
              title="La aventura se adapta a ellos."
              description="Dos grupos etarios, un mismo principio: que cada joven se sienta capaz, incluido y protagonista."
              align="center"
            />
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
            {[
              { age: "8–11", title: "Junior explorers", text: "Juego, curiosidad y confianza para empezar a hablar con emoción.", href: "/programa-ingles/ninos" },
              { age: "13–17", title: "Young leaders", text: "Autonomía, retos y una inmersión ligada a sus intereses.", href: "/programa-ingles/adolescentes" },
            ].map((program, index) => (
              <Reveal key={program.age} delay={index * 0.08}>
                <Link href={program.href} className="group block h-full">
                  <Card variant="elevated" className="h-full overflow-hidden p-8 group-hover:-translate-y-1 group-hover:border-primary/35 sm:p-10">
                    <Badge variant="primary">{program.age} años</Badge>
                    <h3 className="mt-6 text-3xl font-semibold tracking-[-0.03em] text-main">{program.title}</h3>
                    <p className="mt-4 leading-7 text-muted">{program.text}</p>
                    <span className="mt-7 inline-flex items-center gap-2 font-semibold text-primary-accent">
                      Descubrir programa <ArrowRight aria-hidden="true" size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-surface py-24 sm:py-28 lg:py-36">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <SectionHeader
                eyebrow="Un día en la montaña"
                title="Ritmo, pausa y mucho descubrimiento."
                description="Un equilibrio entre estímulo, descanso y conexión. Cada jornada avanza a un ritmo que respeta la energía del grupo."
              />
              <Button href="/itinerario-y-actividades" variant="secondary" className="mt-9">
                Ver itinerario completo <ArrowRight aria-hidden="true" size={17} />
              </Button>
            </Reveal>
            <div className="space-y-4">
              {dayFlow.map((item, index) => (
                <Reveal key={item.time} delay={index * 0.05}>
                  <Card variant="glass" className="grid gap-4 p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                    <span className="grid size-11 place-items-center rounded-xl bg-primary/12 text-primary-accent"><item.icon aria-hidden="true" size={20} /></span>
                    <div>
                      <h3 className="font-semibold text-main">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted">{item.text}</p>
                    </div>
                    <span className="text-sm font-semibold tracking-[0.08em] text-secondary-accent">{item.time}</span>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
        <Container>
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-primary/20 surface-cta p-8 sm:p-12 lg:p-16">
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 size-72 rounded-full bg-orb-amber blur-[120px] animate-pulse-slow" />
            <div className="relative max-w-3xl">
              <Badge variant="secondary"><ShieldCheck aria-hidden="true" size={14} /> Seguridad responsable</Badge>
              <TextReveal
                as="h2"
                className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.035em] text-main sm:text-5xl"
              >
                La familia descansa. Nosotros nos ocupamos.
              </TextReveal>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                Protocolos claros, ratios cuidados, coordinadores bilingües y comunicación constante con cada familia.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="/seguridad-y-coordinacion">
                  Conocer la seguridad <ArrowRight aria-hidden="true" size={17} />
                </Button>
                <Button href="/preguntas-frecuentes" variant="ghost">
                  Ver preguntas frecuentes
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <JsonLd data={jsonLd} />
    </main>
  );
}
