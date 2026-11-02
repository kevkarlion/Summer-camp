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
import { Reveal } from "@/components/motion/Reveal";
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

        <Container className="relative py-16 lg:py-24">
          <Reveal className="max-w-4xl">
            <Badge variant="secondary" className="mb-7">
              <Sparkles aria-hidden="true" size={14} /> Temporada 2027
            </Badge>
            <h1 className="text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-main sm:text-7xl lg:text-[6.4rem]">
              Inglés, aventura y Patagonia.
            </h1>
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

      <section className="py-24 sm:py-28 lg:py-36">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Una aventura que transforma"
              title="No es un viaje más. Es una forma distinta de aprender."
              description="Combinamos inmersión real, desafío outdoors y acompañamiento humano para que el inglés se convierta en confianza, curiosidad y conexión."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.08}>
                <Card variant="glass" className="h-full p-7 hover:-translate-y-1 hover:border-primary/30 hover:bg-card-hover/70">
                  <span className="grid size-12 place-items-center rounded-2xl bg-primary/12 text-primary-accent">
                    <pillar.icon aria-hidden="true" size={23} />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-main">{pillar.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{pillar.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-surface py-24 sm:py-28 lg:py-36">
        <div className="absolute right-0 top-0 size-[34rem] rounded-full bg-primary/8 blur-[140px]" />
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-subtle sm:min-h-[38rem]">
            <Image
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=85"
              alt="Montañas nevadas de la Patagonia Argentina"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
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

      <section className="py-24 sm:py-28 lg:py-36">
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

      <section className="bg-surface py-24 sm:py-28 lg:py-36">
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

      <section className="py-24 sm:py-28 lg:py-36">
        <Container>
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_38%),linear-gradient(135deg,#10291f,#0f172a_58%)] p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <Badge variant="secondary"><ShieldCheck aria-hidden="true" size={14} /> Seguridad responsable</Badge>
              <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.035em] text-main sm:text-5xl">
                La familia descansa. Nosotros nos ocupamos.
              </h2>
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
