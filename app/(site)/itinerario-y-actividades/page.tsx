import type { Metadata } from "next";
import { ArrowRight, Binoculars, Compass, Mountain, Waves } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/site";

const pagePath = "/itinerario-y-actividades";
const title = "Itinerario & Aventura al Aire Libre | Kayak y Trekking";
const description =
  "Descubre actividades verano Villa La Angostura con trekking, kayak y juegos al aire libre, en un itinerario seguro para aprender inglés junto a la naturaleza.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  keywords: ["actividades verano villa la angostura", "trekking kayak campamento"],
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
        url: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Grupo recorriendo un sendero de montaña en Patagonia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
};

const activities = [
  {
    icon: Mountain,
    title: "Trekking y observación",
    description:
      "Caminatas guiadas y observaciones del bosque para aprender nombres, direcciones y el vocabulario que aparece en el recorrido.",
    detail: "Ritmo dialogado · Adecuado al grupo · Escalas progressivas",
  },
  {
    icon: Waves,
    title: "Kayak sobre el lago",
    description:
      "Una experiencia en kayak para practicar instrucciones, seguridad y trabajo en equipo mientras se recorre el agua con atención.",
    detail: "Pautas antes de salir · Apoyo al grupo · Trabajo en equipo",
  },
  {
    icon: Compass,
    title: "Retos de orientación",
    description:
      "Dinámicas de navegación y resolución de problemas que convierten el entorno en un aula compartida, activa y colaborativa.",
    detail: "Navegación por etapas · Inglés aplicado",
  },
  {
    icon: Binoculars,
    title: "Descubrimiento natural",
    description:
      "Observación del paisaje y la fauna con una guía para identificar señales, formular preguntas y compartir descubrimientos.",
    detail: "Observación atenta · Curiosidad compartida",
  },
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
  return (
    <>
      <JsonLd data={schema} />
      <main id="main-content">
        <PageHero
          eyebrow="Aventura al aire libre"
          title="Un día entre naturaleza y nuevas formas de expresarse"
          description="El trekking y el kayak se viven en equipo: explorar, interpretar indicaciones y conversar hacen que cada actividad tenga propósito."
          image="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=2000&q=85"
          imageAlt="Personas recorriendo un sendero entre montañas y árboles"
        >
          <Button href="/seguridad-y-coordinacion" size="lg">
            Conocer la coordinación <ArrowRight className="size-4" />
          </Button>
        </PageHero>

        <section className="py-20 sm:py-28">
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="Itinerario outdoor"
                title="Actividades que conectan movimiento, equipo e inglés"
                description="Las actividades verano Villa La Angostura se adaptan al grupo y al entorno. Cada propuesta combina una experiencia clara, tiempo para conversar y una pausa para observar."
              />
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {activities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <Reveal key={activity.title} delay={index * 0.06}>
                    <Card variant="glass" className="h-full p-6 sm:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <span className="grid size-12 place-items-center rounded-2xl border border-primary/25 bg-primary/10 text-primary-accent">
                          <Icon className="size-6" aria-hidden="true" />
                        </span>
                        <Badge variant="secondary">Experiencia {String(index + 1).padStart(2, "0")}</Badge>
                      </div>
                      <h3 className="mt-7 text-2xl font-semibold tracking-[-0.025em] text-main">{activity.title}</h3>
                      <p className="mt-3 leading-7 text-muted">{activity.description}</p>
                      <p className="mt-6 border-t border-subtle pt-5 text-sm font-medium text-secondary-accent">{activity.detail}</p>
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
                <Badge variant="secondary">Cómo se vive el día</Badge>
                <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-main sm:text-4xl">
                  Del encuentro al cierre, siempre con una pauta clara
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted">
                  Antes de salir se explican los objetivos, el recorrido y las formas de comunicación. Durante la jornada, cada grupo cuenta con acompañamiento; al volver, el equipo comparte lo aprendido.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <Card variant="elevated" className="p-7 sm:p-9">
                  <ol className="space-y-7">
                    {[
                      ["Preparar", "Reunir al grupo, presentar la experiencia y acordar cómo se mantendrá la comunicación."],
                      ["Explorar", "Realizar la actividad con indicaciones, pausas y momentos de observación compartida."],
                      ["Integrar", "Volver sobre lo aprendido con una conversación que conecte la naturaleza con el inglés."],
                    ].map(([title, text], index) => (
                      <li key={title} className="flex gap-4">
                        <span className="grid size-10 shrink-0 place-items-center rounded-full border border-secondary/30 bg-secondary/10 font-semibold text-secondary-accent">{index + 1}</span>
                        <div>
                          <h3 className="text-lg font-semibold text-main">{title}</h3>
                          <p className="mt-1 leading-7 text-muted">{text}</p>
                        </div>
                      </li>
                    ))}
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
                  <Badge variant="primary">La experiencia completa</Badge>
                  <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-main sm:text-4xl">
                    Elegí el programa según la edad de tu hijo
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-muted">
                    Conoce cómo cambia la experiencia y el acompañamiento para cada etapa del summer camp.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <Button href="/programa-ingles/ninos" variant="secondary">Niños de 8 a 11 años <ArrowRight className="size-4" /></Button>
                  <Button href="/programa-ingles/adolescentes" variant="outline">Adolescentes de 13 a 17 años</Button>
                </div>
              </Card>
            </Reveal>
          </Container>
        </section>
      </main>
    </>
  );
}
