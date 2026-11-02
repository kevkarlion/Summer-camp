import type { Metadata } from "next";
import { ArrowRight, BellRing, HeartHandshake, Radio, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/site";

const pagePath = "/seguridad-y-coordinacion";
const title = "Seguridad, Acompañamiento y Salud 24/7 | Summer Camp";
const description =
  "Conoce protocolos, coordinación y acompañamiento del summer camp: responsables claros, comunicación con familias y organización para cada actividad outdoor.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  keywords: ["seguridad campamentos residenciales", "coordinadores bilingues"],
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
        url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Equipo de campamento reunida alrededor de una mesa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
};

const protocols = [
  {
    icon: Radio,
    title: "Comunicación antes de salir",
    description:
      "Cada grupo conoce quién acompaña la actividad, cómo se pide ayuda y qué canal se utiliza para una comunicación urgente.",
  },
  {
    icon: ShieldCheck,
    title: "Actividades con evaluación previa",
    description:
      "Las condiciones del lugar, las condiciones físicas del grupo y los recursos disponibles se revisan antes de definir la propuesta de la jornada.",
  },
  {
    icon: HeartHandshake,
    title: "Acompañamiento durante el día",
    description:
      "El equipo mantiene presencia durante las actividades, comidas, traslados y conversaciones, con protocolos claros de escalamiento.",
  },
  {
    icon: BellRing,
    title: "Información para las familias",
    description:
      "La coordinación centraliza consultas y novedades para que las familias sepan cómo contactarse y recibir información del campamento.",
  },
];

const safetySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      name: "Coordinación de salud y seguridad · Patagonia Summer Camp 2027",
      description:
        "Información de salud, coordinación y comunicación segura para participantes y familias del Patagonia Summer Camp 2027.",
      url: `${siteConfig.url}${pagePath}`,
      inLanguage: "es-AR",
      availableLanguage: ["es", "en"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Villa La Angostura",
        addressRegion: "Neuquén",
        addressCountry: "AR",
      },
    },
    {
      "@type": "SafetyRule",
      name: "Protocolos de seguridad y coordinación del summer camp",
      description:
        "Pautas de organización, comunicación, acompañamiento y coordinación para las actividades del Patagonia Summer Camp 2027.",
      url: `${siteConfig.url}${pagePath}`,
      inLanguage: "es-AR",
      safetyConsideration: [
        "Evaluación de actividades antes de su realización",
        "Canales de comunicación e información para familias",
        "Acompañamiento durante las actividades",
        "Escalamiento de situaciones que requieren asistencia",
      ],
      responsibleOrganization: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
    },
  ],
};

export default function SeguridadYCoordinacionPage() {
  return (
    <>
      <JsonLd data={safetySchema} />
      <main id="main-content">
        <PageHero
          eyebrow="Confianza y cuidado"
          title="Seguridad que se explica, acompaña y se revisa"
          description="La seguridad campamentos residenciales se construye con roles claros, comunicación fluida y una coordinación atenta a cada grupo."
          image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=85"
          imageAlt="Equipo de personas trabajando de forma coordinada alrededor de una mesa"
        >
          <Button href="/guia-familias" size="lg">
            Ver la guía para familias <ArrowRight className="size-4" />
          </Button>
        </PageHero>

        <section className="py-20 sm:py-28">
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="Coordinadores bilingües"
                title="Un equipo que conoce a los grupos y mantiene comunicación constante"
                description="La experiencia se realiza con coordinadores bilingües que se comunican con participantes y familias en el idioma que mejor facilite la conversación."
              />
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {protocols.map((protocol, index) => {
                const Icon = protocol.icon;
                return (
                  <Reveal key={protocol.title} delay={index * 0.06}>
                    <Card variant="glass" className="h-full p-6 sm:p-8">
                      <span className="grid size-12 place-items-center rounded-2xl border border-primary/25 bg-primary/10 text-primary-accent">
                        <Icon className="size-6" aria-hidden="true" />
                      </span>
                      <h3 className="mt-7 text-xl font-semibold text-main">{protocol.title}</h3>
                      <p className="mt-3 leading-7 text-muted">{protocol.description}</p>
                    </Card>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="border-y border-subtle bg-surface py-20 sm:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <Reveal>
                <Badge variant="secondary">Responsabilidad compartida</Badge>
                <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-main sm:text-4xl">
                  Roles claros para cada momento del campamento
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted">
                  El equipo de coordinación mantiene información actualizada sobre grupos, actividades y necesidades. Las familias pueden resolver dudas con una persona claramente identificable.
                </p>
              </Reveal>
              <div className="grid gap-4">
                {[
                  ["Coordinación central", "Reúne las novedades de cada área y canaliza consultas o incidentes según el protocolo previsto."],
                  ["Acompañamiento del grupo", "Observa la dinámica, acompaña decisiones y verifica que cada participante conoce las pautas de su actividad."],
                  ["Comunicación con familias", "Centraliza mensajes, documenta lo acordado y ofrece un punto de contacto durante la operación del campamento."],
                ].map(([title, text], index) => (
                  <Reveal key={title} delay={index * 0.07}>
                    <Card className="grid gap-3 p-6 sm:grid-cols-[10rem_1fr] sm:gap-7">
                      <Badge variant="primary" className="w-fit">{title}</Badge>
                      <p className="leading-7 text-muted">{text}</p>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-20 sm:py-28">
          <Container>
            <Reveal>
              <Card variant="elevated" className="grid gap-8 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl">
                  <Badge variant="primary">Preparación familiar</Badge>
                  <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-main sm:text-4xl">
                    Informarse antes también forma parte del cuidado
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-muted">
                    Revisá el programa, la documentación necesaria y los canales de contacto indicados para cada etapa del verano.
                  </p>
                </div>
                <Button href="/preguntas-frecuentes" variant="secondary">
                  Consultar preguntas frecuentes <ArrowRight className="size-4" />
                </Button>
              </Card>
            </Reveal>
          </Container>
        </section>
      </main>
    </>
  );
}
