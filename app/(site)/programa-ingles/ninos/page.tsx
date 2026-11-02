import type { Metadata } from "next";
import { ArrowRight, Compass, Heart, MessageCircle, Puzzle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/site";

const pagePath = "/programa-ingles/ninos";
const title = "Campamento de Inglés para Niños (8-11 años)";
const description =
  "Campamento ninos Patagonia para niños de 8 a 11 años: aprender inglés jugando, explorar Villa La Angostura y crecer con un acompañamiento cercano y familiar.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  keywords: ["campamento ninos patagonia", "summer camp ninos argentina"],
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: pagePath,
    siteName: siteConfig.name,
    title,
    description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Niños descubriendo un verano al aire libre en Patagonia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
};

const activities = [
  {
    icon: MessageCircle,
    title: "Inglés en cada momento",
    description: "Instrucciones, juegos y dinámicas diarias convierten palabras útiles en algo que los niños eligen usar.",
  },
  {
    icon: Puzzle,
    title: "Retos con propósito",
    description: "Actividades breves y variadas mantienen la atención y permiten descubrir el idioma dentro de un equipo.",
  },
  {
    icon: Compass,
    title: "Curiosidad al aire libre",
    description: "Explorar, observar y moverse ayuda a vivenciar el summer camp ninos Argentina como una aventura compartida.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: title,
  description,
  url: `${siteConfig.url}${pagePath}`,
  inLanguage: "es-AR",
  educationalLevel: "8-11 años",
  courseMode: "onsite",
  teaches: ["Inglés oral", "Juego y comunicación", "Convivencia", "Autonomía"],
  audience: {
    "@type": "EducationalAudience",
    educationalRange: "8-11 años",
  },
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
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
};

export default function ProgramaNinosPage() {
  return (
    <>
      <JsonLd data={schema} />
      <main id="main-content">
        <PageHero
          eyebrow="8 a 11 años"
          title="Una aventura para hablar, jugar y descubrir"
          description="En este campamento ninos Patagonia, cada juego, decisión y conversación se convierten en una oportunidad natural para usar inglés."
          image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=2000&q=85"
          imageAlt="Niños sonriendo durante una actividad al aire libre"
        >
          <Button href="#experiencias" size="lg">
            Ver cómo Learn by Doing <ArrowRight className="size-4" />
          </Button>
        </PageHero>

        <section id="experiencias" className="py-20 sm:py-28">
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="Aprender jugando"
                title="Una inmersión en inglés que se siente como aventura"
                description="Los niños no estudian inglés en abstracto: lo usan para resolver un reto, coordinar un equipo, reconocer algo o decidir qué hacer después."
              />
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {activities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <Reveal key={activity.title} delay={index * 0.08}>
                    <Card variant="glass" className="h-full p-6 sm:p-7">
                      <span className="grid size-12 place-items-center rounded-2xl border border-secondary/25 bg-secondary/10 text-secondary-accent">
                        <Icon className="size-6" aria-hidden="true" />
                      </span>
                      <h3 className="mt-7 text-xl font-semibold text-main">{activity.title}</h3>
                      <p className="mt-3 leading-7 text-muted">{activity.description}</p>
                    </Card>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="border-y border-subtle bg-surface py-20 sm:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <Reveal>
                <Badge variant="secondary">Pensado para su edad</Badge>
                <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.035em] text-main sm:text-4xl">
                  Confianza para atreverse
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted">
                  Las reglas claras y una rutina que alterna actividad y descanso ayudan a que cada niño encuentre su lugar, haga preguntas y participe a su ritmo.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <Card variant="elevated" className="p-7 sm:p-9">
                  <Heart className="size-7 text-primary-accent" aria-hidden="true" />
                  <h3 className="mt-6 text-2xl font-semibold text-main">Un ambiente que acompaña</h3>
                  <ul className="mt-5 space-y-4 text-muted">
                    <li className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" />Actividades variadas para evitar el exceso de estímulo.</li>
                    <li className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" />Pausas y momentos de compañía dentro de la jornada.</li>
                    <li className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" />Lenguaje cuidado y ejemplos adaptados a la edad.</li>
                  </ul>
                </Card>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="py-20 sm:py-28">
          <Container>
            <Reveal>
              <Card variant="glass" className="grid gap-8 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl">
                  <Badge variant="primary">La decisión de las familias</Badge>
                  <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-main sm:text-4xl">
                    Un verano para descubrir cuánto puede hacer tu hijo
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-muted">
                    Conoce los grupos de 8 a 11 años, sus experiencias y el acompañamiento diseñado para aprender, conversar y descubrir en inglés.
                  </p>
                </div>
                <Button href="/programa-ingles/adolescentes" variant="secondary" size="lg">
                  Conocer adolescentes <ArrowRight className="size-4" />
                </Button>
              </Card>
            </Reveal>
          </Container>
        </section>
      </main>
    </>
  );
}
