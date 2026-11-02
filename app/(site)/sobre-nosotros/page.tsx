import type { Metadata } from "next";
import { ArrowRight, Compass, Heart, Mountain, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/site";

const pagePath = "/sobre-nosotros";
const title = "De Laponia a la Patagonia | Nuestra Historia";
const description =
  "Conocé la historia de Hernán Paulitti, fundador Patagonia Summer Camp, y el propósito de una experiencia que une inglés, aventura y aprendizaje en familia.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  keywords: ["hernan paulitti", "fundador patagonia summer camp"],
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
        url: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Paisaje de montañas de la Patagonia bajo un cielo amplio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
};

const values = [
  {
    icon: Compass,
    title: "Aprender con propósito",
    description: "Cada actividad debe tener un motivo para observar, participar, conversar y volver sobre lo aprendido.",
  },
  {
    icon: Heart,
    title: "Cuidar la experiencia",
    description: "La seguridad, el acompañamiento y el cuidado del entorno forman parte de la experiencia desde el primer momento.",
  },
  {
    icon: Sparkles,
    title: "Celebrar el progreso",
    description: "Reconocer la participación y los pequeños avances ayuda a construir confianza y motivación duradera.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hernán Paulitti",
  alternateName: "Hernan Paulitti",
  jobTitle: "Fundador",
  description,
  url: `${siteConfig.url}${pagePath}`,
  worksFor: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  knowsAbout: ["Inmersión lingüística", "Campamentos educativos", "Turismo de aventura"],
};

export default function SobreNosotrosPage() {
  return (
    <>
      <JsonLd data={schema} />
      <main id="main-content">
        <PageHero
          eyebrow="Nuestra historia"
          title="Una mirada amplia para una aventura que transforma"
          description="Hernán Paulitti, fundador Patagonia Summer Camp, imaginó una experiencia donde el paisaje patagónico se convierte en escenario para aprender y crecer."
          image="https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=2000&q=85"
          imageAlt="Montañas nevadas reflejadas en un lago de la Patagonia"
        >
          <Button href="/programa-ingles" size="lg">
            Conocer nuestra metodología <ArrowRight className="size-4" />
          </Button>
        </PageHero>

        <section className="py-20 sm:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <Reveal>
                <Badge variant="secondary">El origen de la idea</Badge>
                <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-main sm:text-4xl">
                  De una experiencia en Laponia a un proyecto ambicioso en Patagonia
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="space-y-6 text-lg leading-8 text-muted">
                  <p>
                    Hernán Paulitti, fundador de Patagonia Summer Camp, siempre vio la aventura como una forma de aprender. En sus experiencias anteriores en Laponia pudo comprobar que un entorno natural transforma la manera de escuchar, decidir y trabajar en equipo.
                  </p>
                  <p>
                    Al llevar esa mirada a Patagonia, la propuesta encontró un territorio de lagos, bosques y montañas capaz de convertir cada jornada en una historia compartida. La inmersión en inglés deja de ser un ejercicio aislado y se conecta con la exploración.
                  </p>
                  <p>
                    Desde entonces, el proyecto crece con una idea simple: recibir a cada participante en un ambiente cuidado, donde el idioma se vuelve una herramienta para descubrir el mundo.
                  </p>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="border-y border-subtle bg-surface py-20 sm:py-28">
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="Lo que guía nuestro trabajo"
                title="Una escala humana para construir experiencias memorables"
                description="La familia encuentra un equipo que escucha, el participante encuentra un propósito y cada actividad abre una posibilidad de aprendizaje."
              />
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Reveal key={value.title} delay={index * 0.07}>
                    <Card variant="glass" className="h-full p-6 sm:p-8">
                      <span className="grid size-12 place-items-center rounded-2xl border border-primary/25 bg-primary/10 text-primary-accent">
                        <Icon className="size-6" aria-hidden="true" />
                      </span>
                      <h3 className="mt-7 text-xl font-semibold text-main">{value.title}</h3>
                      <p className="mt-3 leading-7 text-muted">{value.description}</p>
                    </Card>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="py-20 sm:py-28">
          <Container>
            <Reveal>
              <Card variant="elevated" className="grid gap-8 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl">
                  <Badge variant="primary">La historia sigue creciendo</Badge>
                  <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-main sm:text-4xl">
                    Vení a descubrir una nueva forma de aprender en la Patagonia
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-muted">
                    Explora los programas por edad y conoce las actividades que convierten cada día en una experiencia con sentido.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <Button href="/itinerario-y-actividades" variant="secondary">Ver actividades <ArrowRight className="size-4" /></Button>
                  <Button href="/destino/villa-la-angostura" variant="outline">Conocer el destino</Button>
                </div>
              </Card>
            </Reveal>
          </Container>
        </section>

        <section className="border-t border-subtle py-16 sm:py-20">
          <Container>
            <Reveal>
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <Mountain className="mt-1 size-6 shrink-0 text-secondary-accent" aria-hidden="true" />
                  <div>
                    <h2 className="text-xl font-semibold text-main">El explorador</h2>
                    <p className="mt-2 leading-7 text-muted">Un espacio para descubrir qué significa aprender afuera, juntos y con propósito.</p>
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
