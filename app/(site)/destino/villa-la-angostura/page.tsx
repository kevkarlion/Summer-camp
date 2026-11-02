import type { Metadata } from "next";
import { ArrowRight, Compass, MapPin, Mountain, Trees } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/site";

const pagePath = "/destino/villa-la-angostura";
const title = "Campamento de Verano en Villa La Angostura | Nahuel Huapi";
const description =
  "Summer camp Villa La Angostura: turismo educativo Patagonia con campamento de inglés, naturaleza, experiencias y acompañamiento para descubrirla en familia.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  keywords: ["summer camp villa la angostura", "turismo educativo patagonia"],
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
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Montañas y lago de Villa La Angostura en Patagonia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
};

const experiences = [
  {
    icon: Mountain,
    title: "Paisajes que invitan a mirar",
    description: "La cordillera, los lagos y los bosques enmarcan actividades al aire libre donde cada grupo observa, pregunta y aprende de su entorno.",
  },
  {
    icon: Trees,
    title: "Naturaleza como aula compartida",
    description: "La summer camp Villa La Angostura integra el paisaje en la conversación: nombra, describe, descubre y actúa en inglés.",
  },
  {
    icon: Compass,
    title: "Un destino para descubrir juntos",
    description: "Las actividades combinan experiencias completas, porque cada grupo llega con diferentes intereses y preguntas.",
  },
];

const placeSchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Villa La Angostura",
  description,
  url: `${siteConfig.url}${pagePath}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Villa La Angostura",
    addressRegion: "Neuquén",
    addressCountry: "AR",
  },
  containedInPlace: {
    "@type": "AdministrativeArea",
    name: "Provincia de Neuquén, Patagonia Argentina",
  },
};

const landmarksSchema = {
  "@context": "https://schema.org",
  "@type": "LandmarksOrHistoricalBuildings",
  name: "Entorno natural de Villa La Angostura y Nahuel Huapi",
  description:
    "Paisajes de lagos, bosques y montañas que inspiran experiencias educativas al aire libre del Patagonia Summer Camp 2027.",
  url: `${siteConfig.url}${pagePath}`,
  containedInPlace: placeSchema,
};

export default function DestinoVillaLaAngosturaPage() {
  return (
    <>
      <JsonLd data={[placeSchema, landmarksSchema]} />
      <main id="main-content">
        <PageHero
          eyebrow="Villa La Angostura · Patagonia"
          title="Entre lagos, bosques y montañas"
          description="Un summer camp villa la angostura donde el paisaje se convierte en contexto para aprender inglés, explorar habilidades y vivir nuevas experiencias."
          image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85"
          imageAlt="Lagos y montañas del entorno de Villa La Angostura"
        >
          <Button href="/itinerario-y-actividades" size="lg">
            Descubrir actividades <ArrowRight className="size-4" />
          </Button>
        </PageHero>

        <section className="py-20 sm:py-28">
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="Un lugar para aprender"
                title="La Patagonia como parte del aprendizaje"
                description="El turismo educativo Patagonia no empieza dentro de una sala: se construye al caminar, observar, acordar y conversar mientras se descubre Villa La Angostura."
              />
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {experiences.map((experience, index) => {
                const Icon = experience.icon;
                return (
                  <Reveal key={experience.title} delay={index * 0.08}>
                    <Card variant="glass" className="h-full p-6 sm:p-7">
                      <span className="grid size-12 place-items-center rounded-2xl border border-primary/25 bg-primary/10 text-primary-accent">
                        <Icon className="size-6" aria-hidden="true" />
                      </span>
                      <h3 className="mt-7 text-xl font-semibold text-main">{experience.title}</h3>
                      <p className="mt-3 leading-7 text-muted">{experience.description}</p>
                    </Card>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="border-y border-subtle bg-surface py-20 sm:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <Reveal>
                <Badge variant="secondary">
                  <MapPin className="size-3.5" aria-hidden="true" /> Patagonia Argentina
                </Badge>
                <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.035em] text-main sm:text-4xl">
                  Un entorno natural para cada grupo
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted">
                  Los planes de actividades combinan momentos de movimiento, observación y conversación. El entorno cercano a Villa La Angostura y al lago Nahuel Huapi da contexto real a cada actividad.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <Card variant="elevated" className="p-7 sm:p-9">
                  <h3 className="text-2xl font-semibold text-main">Del paisaje a la conversación</h3>
                  <ol className="mt-7 space-y-6">
                    <li className="flex gap-4">
                      <span className="grid size-9 shrink-0 place-items-center rounded-full border border-secondary/30 bg-secondary/10 text-sm font-semibold text-secondary-accent">1</span>
                      <p className="leading-7 text-muted"><strong className="text-main">Observar.</strong> Identificar detalles y palabras que describen el lugar.</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="grid size-9 shrink-0 place-items-center rounded-full border border-secondary/30 bg-secondary/10 text-sm font-semibold text-secondary-accent">2</span>
                      <p className="leading-7 text-muted"><strong className="text-main">Experimentar.</strong> Resolver un reto que requiere cooperación y comunicación.</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="grid size-9 shrink-0 place-items-center rounded-full border border-secondary/30 bg-secondary/10 text-sm font-semibold text-secondary-accent">3</span>
                      <p className="leading-7 text-muted"><strong className="text-main">Compartir.</strong> Poner en palabras lo descubierto y aprender del equipo.</p>
                    </li>
                  </ol>
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
                  <Badge variant="primary">Elegí la experiencia según la edad</Badge>
                  <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-main sm:text-4xl">
                    Cada grupo encuentra su propio manera de descubrir Villa La Angostura
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-muted">
                    Compara la metodología y las experiencias adaptadas para niños y adolescentes antes de elegir el programa.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <Button href="/programa-ingles/ninos" variant="secondary">
                    Programa para niños <ArrowRight className="size-4" />
                  </Button>
                  <Button href="/programa-ingles/adolescentes" variant="outline">
                    Programa para adolescentes
                  </Button>
                </div>
              </Card>
            </Reveal>
          </Container>
        </section>
      </main>
    </>
  );
}
