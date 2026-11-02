import type { Metadata } from "next";
import { ArrowRight, Backpack, Check, FileText, Shirt, Sun } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/site";

const pagePath = "/guia-familias";
const title = "Guía para Familias: Logística, Equipamiento y Normas";
const description =
  "Qué llevar campamento verano y cómo preparar la logística familiar: indumentaria, equipaje summer camp, documentación y recomendaciones para la Patagonia.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  keywords: ["que llevar campamento verano", "equipamiento summer camp"],
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
        alt: "Sendero de montaña entre árboles en la Patagonia",
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

const packing = [
  {
    icon: Shirt,
    title: "Ropa cómoda",
    items: ["Camisetas cómodas para actividades", "Pantalón o shorts según el clima", "Zapatillas cómodas y un segundo par", "Una muda para actividad y otra de repuesto"],
  },
  {
    icon: Sun,
    title: "Protección y clima",
    items: ["Gorro y protector solar", "Campera impermeable según previsão", "Botella de agua reutilizable", "Ropa de abrigo para las noches"],
  },
  {
    icon: Backpack,
    title: "Elementos personales",
    items: ["Mochila liviana", "Libreta, útiles y objetos autorizados", "Necesidades personales identificadas", "Snacks según las indicaciones del equipo"],
  },
];

const steps = [
  {
    number: "01",
    title: "Revisá la comunicación de cada etapa",
    description: "La información de organización indica fechas, actividades, documentos y canales de contacto relevantes para la participación.",
  },
  {
    number: "02",
    title: "Completá la documentación necesaria",
    description: "La familia comparte los datos de salud y contacto requeridos para que el equipo pueda organizar la experiencia de forma adecuada.",
  },
  {
    number: "03",
    title: "Prepará el equipaje con tiempo",
    description: "Usá la lista de la modalidad elegida como base y confirmá los ajustes que el equipo comunique antes de partir.",
  },
  {
    number: "04",
    title: "Acompañá sin agregar presión",
    description: "Un diálogo abierto ayuda a explorar motivaciones, revisar expectativas y sostener la autonomía antes y después del campamento.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  url: `${siteConfig.url}${pagePath}`,
  inLanguage: "es-AR",
  author: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  about: ["Logística familiar", "Equipamiento para campamentos", "Normas de convivencia"],
};

export default function GuiaFamiliasPage() {
  return (
    <>
      <JsonLd data={schema} />
      <main id="main-content">
        <PageHero
          eyebrow="Manual operativo para familias"
          title="Preparar el viaje también es construir confianza"
          description="Una guía concreta para que cada familia sepa qué llevar, qué organizar y cómo acompañar el proceso antes del summer camp."
          image="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=2000&q=85"
          imageAlt="Excursionistas preparando su equipaje junto a un sendero"
        >
          <Button href="/preguntas-frecuentes" size="lg">
            Resolver otras dudas <ArrowRight className="size-4" />
          </Button>
        </PageHero>

        <section className="py-20 sm:py-28">
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="Qué llevar campamento verano"
                title="Un equipaje sencillo, pensado para participar y moverse"
                description="La lista de equipamiento summer camp parte de una regla práctica: comodidad, identificación y una organización que facilite la rutina de cada día."
              />
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {packing.map((group, index) => {
                const Icon = group.icon;
                return (
                  <Reveal key={group.title} delay={index * 0.07}>
                    <Card variant="glass" className="h-full p-6 sm:p-7">
                      <span className="grid size-12 place-items-center rounded-2xl border border-primary/25 bg-primary/10 text-primary-accent">
                        <Icon className="size-6" aria-hidden="true" />
                      </span>
                      <h3 className="mt-6 text-xl font-semibold text-main">{group.title}</h3>
                      <ul className="mt-5 space-y-3">
                        {group.items.map((item) => (
                          <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                            <Check className="mt-1 size-4 shrink-0 text-primary-accent" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
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
                <Badge variant="secondary">Checklist familiar</Badge>
                <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-main sm:text-4xl">
                  Cuatro pasos para llegar preparados
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted">
                  La organización se vuelve más simple cuando información, documentación y equipaje siguen una misma secuencia.
                </p>
              </Reveal>
              <div className="grid gap-4">
                {steps.map((step, index) => (
                  <Reveal key={step.number} delay={index * 0.06}>
                    <Card className="grid gap-4 p-6 sm:grid-cols-[4rem_1fr] sm:gap-6">
                      <span className="text-sm font-semibold tracking-[0.16em] text-secondary-accent">{step.number}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-main">{step.title}</h3>
                        <p className="mt-2 leading-7 text-muted">{step.description}</p>
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
              <Card variant="elevated" className="grid gap-8 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl">
                  <Badge variant="primary">Normas de convivencia</Badge>
                  <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-main sm:text-4xl">
                    Respetar, participar y cuidar el entorno
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-muted">
                    El equipo explica las normas de seguridad, convivencia y cuidado de la naturaleza al llegar. Cada participante las conoce y puede pedir ayuda para cumplirlas.
                  </p>
                </div>
                <Button href="/seguridad-y-coordinacion" variant="secondary">
                  Conocer la coordinación <ArrowRight className="size-4" />
                </Button>
              </Card>
            </Reveal>
          </Container>
        </section>

        <section className="border-t border-subtle py-16 sm:py-20">
          <Container>
            <Reveal>
              <div className="flex flex-col gap-5 rounded-3xl border border-subtle bg-card p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div className="flex items-start gap-4">
                  <FileText className="mt-1 size-6 shrink-0 text-secondary-accent" aria-hidden="true" />
                  <div>
                    <h2 className="text-xl font-semibold text-main">La lista final depende de cada etapa</h2>
                    <p className="mt-2 leading-7 text-muted">Confirmá el equipamiento summer camp y los documentos indicados antes de partir.</p>
                  </div>
                </div>
                <Button href="/preguntas-frecuentes" variant="outline">Consultar las preguntas frecuentes</Button>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
    </>
  );
}
