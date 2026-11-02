import type { Metadata } from "next";
import { ArrowRight, Compass, MessageCircle, Users } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/site";

const pagePath = "/programa-ingles";
const title = "Metodología Learning by Doing | Inmersión Lingüística";
const description =
  "Aprender inglés haciendo en Patagonia: un programa de inmersión lingüística al aire libre para niños y adolescentes, con experiencias y familias presentes.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  keywords: ["inmersion ingles verano", "aprender ingles haciendo"],
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
        url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Aprender inglés mediante experiencias en la Patagonia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
};

const methodSteps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Escuchar en contexto",
    description:
      "Palabras y expresiones aparecen en conversaciones, indicaciones y decisiones del día, para que cada idioma tenga un propósito.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Practicar al aire libre",
    description:
      "La exploración, los juegos y la convivenciaetakan tareas reales donde usar el inglés deja de sentirse como una clase.",
  },
  {
    number: "03",
    icon: Users,
    title: "Reflexionar juntos",
    description:
      "Al cierre, cada grupo ordena lo que aprendió, comparte estrategias y reconoce sus avances desde la experiencia vivida.",
  },
];

const rhythm = [
  {
    label: "Antes de salir",
    title: "Prepararse para entender",
    description: "Anticipamos palabras clave y conectamos la actividad del día con algo que ya conocen.",
  },
  {
    label: "Durante la experiencia",
    title: "Comunicarse para participar",
    description: "Instrucciones, acuerdos y conversaciones acompañan las actividades y el trabajo en equipo.",
  },
  {
    label: "Después de la experiencia",
    title: "Poner en palabras",
    description: "Recuperamos lo vivido, practicamos expresiones útiles y celebramos los momentos del equipo.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalProgram",
  name: title,
  description,
  url: `${siteConfig.url}${pagePath}`,
  inLanguage: "es-AR",
  educationalProgramType: "Inmersión lingüística en inglés",
  programType: "Programa de verano al aire libre",
  audience: {
    "@type": "EducationalAudience",
    educationalRange: "8-17 años",
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
  teaches: ["Inglés oral", "Comunicación", "Trabajo en equipo", "Autonomía"],
};

export default function ProgramaInglesPage() {
  return (
    <>
      <JsonLd data={schema} />
      <main id="main-content">
        <PageHero
          eyebrow="Learning by Doing"
          title="El inglés se aprende usándolo"
          description="Una metodología de inmersión lingüística convierte cada actividad, conversación y decisión en una razón para aprender inglés haciendo en Patagonia."
          image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2000&q=85"
          imageAlt="Grupo joven aprendiendo y conversando en un entorno luminoso"
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/programa-ingles/ninos" size="lg">
              Conocer el programa para niños <ArrowRight className="size-4" />
            </Button>
            <Button href="/programa-ingles/adolescentes" size="lg" variant="outline">
              Conocer el programa para adolescentes
            </Button>
          </div>
        </PageHero>

        <section className="py-20 sm:py-28">
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="Nuestro enfoque"
                title="Aprender haciendo, en un entorno que invites a participar"
                description="La inmersión ingles verano se integra en las rutinas del campamento: primero comprendemos el contexto, luego usamos el idioma y finalmente volvemos sobre lo aprendido."
              />
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {methodSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Reveal key={step.number} delay={index * 0.08}>
                    <Card variant="glass" className="h-full p-6 sm:p-7">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold tracking-[0.16em] text-secondary-accent">{step.number}</span>
                        <span className="grid size-11 place-items-center rounded-2xl border border-primary/25 bg-primary/10 text-primary-accent">
                          <Icon className="size-5" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-xl font-semibold text-main">{step.title}</h3>
                      <p className="mt-3 leading-7 text-muted">{step.description}</p>
                    </Card>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="border-y border-subtle bg-surface py-20 sm:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <Reveal>
                <Badge variant="secondary">El ritmo de aprendizaje</Badge>
                <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.035em] text-main sm:text-4xl">
                  Cada momento tiene un propósito
                </h2>
                <p className="mt-5 leading-7 text-muted">
                  Una estructura clara ayuda a los grupos a concentrarse, participar y volver sobre sus hallazgos sin quitarle protagonismo a la experiencia.
                </p>
              </Reveal>
              <div className="grid gap-4">
                {rhythm.map((moment, index) => (
                  <Reveal key={moment.label} delay={index * 0.08}>
                    <Card className="grid gap-3 p-6 sm:grid-cols-[10rem_1fr] sm:items-start sm:gap-7">
                      <Badge variant="primary" className="w-fit">{moment.label}</Badge>
                      <div>
                        <h3 className="text-lg font-semibold text-main">{moment.title}</h3>
                        <p className="mt-2 leading-7 text-muted">{moment.description}</p>
                      </div>
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
              <Card variant="elevated" className="overflow-hidden p-8 sm:p-12 lg:p-16">
                <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div className="max-w-3xl">
                    <Badge variant="primary">Para cada etapa</Badge>
                    <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-main sm:text-4xl">
                      Un método común, una experiencia adecuada a cada edad
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-muted">
                      Los contenidos, los retos y la autonomía cambian según el grupo etario, manteniendo una misma lógica: crear, participar y descubrir.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button href="/programa-ingles/ninos" variant="secondary">
                      Niños de 8 a 11 años <ArrowRight className="size-4" />
                    </Button>
                    <Button href="/programa-ingles/adolescentes" variant="outline">
                      Adolescentes de 13 a 17 años
                    </Button>
                  </div>
                </div>
              </Card>
            </Reveal>
          </Container>
        </section>
      </main>
    </>
  );
}
