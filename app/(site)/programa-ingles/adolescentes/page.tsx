import type { Metadata } from "next";
import { ArrowRight, Compass, Lightbulb, MessageCircle, Users } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/site";

const pagePath = "/programa-ingles/adolescentes";
const title = "Campamento de Inglés para Adolescentes (13-17 años)";
const description =
  "Campamento adolescentes inglés para jóvenes de 13 a 17 años: viaje verano jovenes Patagonia, aventura al aire libre y práctica del idioma en comunidad.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  keywords: ["campamento adolescentes ingles", "viaje verano jovenes patagonia"],
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
        url: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Jóvenes compartiendo una experiencia en la Patagonia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
};

const pillars = [
  {
    icon: MessageCircle,
    title: "Inglés para funciones reales",
    description: "Debates, decisiones y acuerdos naturales dan un uso preciso y útil al idioma.",
  },
  {
    icon: Compass,
    title: "Autonomía con apoyo",
    description: "La aventura se realiza con etapas y acompañamiento para que cada joven pueda organizar su participación.",
  },
  {
    icon: Lightbulb,
    title: "Reflexión y perspectiva",
    description: "El cierre de cada experiencia abre espacio para comparar ideas, explicar decisiones y reconocer nuevos aprendizajes.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: title,
  description,
  url: `${siteConfig.url}${pagePath}`,
  inLanguage: "es-AR",
  educationalLevel: "13-17 años",
  courseMode: "onsite",
  teaches: ["Inglés oral", "Comunicación", "Liderazgo", "Trabajo en equipo"],
  audience: {
    "@type": "EducationalAudience",
    educationalRange: "13-17 años",
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

export default function ProgramaAdolescentesPage() {
  return (
    <>
      <JsonLd data={schema} />
      <main id="main-content">
        <PageHero
          eyebrow="13 a 17 años"
          title="Una semana para pensar, decidir y conectar"
          description="El viaje verano jovenes Patagonia se vive entre naturaleza, desafíos y conversaciones que dan otra dimensión al inglés."
          image="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=2000&q=85"
          imageAlt="Adolescentes sonriendo durante una aventura al aire libre"
        >
          <Button href="#experiencias" size="lg">
            Explorar el programa <ArrowRight className="size-4" />
          </Button>
        </PageHero>

        <section id="experiencias" className="py-20 sm:py-28">
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="Inmersión con propósito"
                title="Menos idioma de aula, más idioma para la vida"
                description="La immersion ingles verano se vuelve concreta cuando los jóvenes necesitan comprender, explicar, negociar y colaborar en un entorno compartido."
              />
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <Reveal key={pillar.title} delay={index * 0.08}>
                    <Card variant="glass" className="h-full p-6 sm:p-7">
                      <span className="grid size-12 place-items-center rounded-2xl border border-primary/25 bg-primary/10 text-primary-accent">
                        <Icon className="size-6" aria-hidden="true" />
                      </span>
                      <h3 className="mt-7 text-xl font-semibold text-main">{pillar.title}</h3>
                      <p className="mt-3 leading-7 text-muted">{pillar.description}</p>
                    </Card>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="border-y border-subtle bg-surface py-20 sm:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <Reveal>
                <SectionHeader
                  eyebrow="Convivencia responsable"
                  title="Autonomía, pertenencia y límites claros"
                  description="La experiencia se diseña para respetar decisiones y fortalecer vínculos: grupos que colaboran, acuerdos claros y acompañamiento disponible."
                />
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/itinerario-y-actividades" variant="secondary">
                    Ver itinerario y actividades <ArrowRight className="size-4" />
                  </Button>
                  <Button href="/seguridad-y-coordinacion" variant="outline">
                    Conocer el acompañamiento
                  </Button>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <Card variant="elevated" className="p-7 sm:p-9">
                  <Users className="size-7 text-secondary-accent" aria-hidden="true" />
                  <h3 className="mt-6 text-2xl font-semibold text-main">Una experiencia que se comparte</h3>
                  <p className="mt-4 leading-7 text-muted">
                    El campamento reúne a jóvenes de distintas ciudades con intereses comunes. Los equipos comparten objetivos para aprender a colaborar con personas nuevas.
                  </p>
                  <ul className="mt-6 space-y-3 text-muted">
                    <li>Conversaciones en inglés dentro y fuera de las actividades.</li>
                    <li>Retos cooperativos con responsabilidades repartidas.</li>
                    <li>Tiempo libre para explorar la convivencia con autonomía.</li>
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
                  <Badge variant="primary">13 a 17 años</Badge>
                  <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-main sm:text-4xl">
                    Un verano para probar nuevas formas de comunicarte
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-muted">
                    Descubre el programa, sus experiencias y cómo se integra el inglés en una jornada pensada para el descubrimiento y la aventura.
                  </p>
                </div>
                <Button href="/programa-ingles" variant="secondary" size="lg">
                  Ver la metodología <ArrowRight className="size-4" />
                </Button>
              </Card>
            </Reveal>
          </Container>
        </section>
      </main>
    </>
  );
}
