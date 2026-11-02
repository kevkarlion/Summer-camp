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
  "Conocé la historia de Hernán Paulitti, fundador Patagonia Summer Camp: inglés, aventura y una misión para compartir la Patagonia con adolescentes.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url), title, description,
  keywords: ["hernan paulitti", "fundador patagonia summer camp", "Hernán Paulitti inglés"],
  alternates: { canonical: pagePath },
  openGraph: {
    type: "website", locale: siteConfig.locale, url: pagePath, siteName: siteConfig.name, title, description,
    images: [{ url: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1200&h=630&q=80", width: 1200, height: 630, alt: "Paisaje de montañas de la Patagonia bajo un cielo amplio" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1200&h=630&q=80"] },
};

const values = [
  { icon: Compass, title: "Aprender con propósito", description: "Cada experiencia ofrece una razón para observar, participar, conversar y descubrir." },
  { icon: Heart, title: "Valorar el territorio", description: "La amistad, el idioma, el respeto por la cultura local y la curiosidad por la naturaleza guían la misión." },
  { icon: Sparkles, title: "Compartir claridad y energía", description: "Hernán quiere compartir con los adolescentes la claridad, la energía y la autenticidad que encuentra en la montaña y las actividades outdoors." },
];

const schema = {
  "@context": "https://schema.org", "@type": "Person", name: "Hernán Paulitti", alternateName: "Hernan Paulitti",
  jobTitle: "Fundador", description, url: `${siteConfig.url}${pagePath}`,
  worksFor: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
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
          <Button href="/programa-ingles" size="lg">Conocer nuestra metodología <ArrowRight className="size-4" /></Button>
        </PageHero>

        <section className="py-20 sm:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <Reveal>
                <Badge variant="secondary">El origen de la idea</Badge>
                <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-main sm:text-4xl">De una experiencia en Laponia a un proyecto en Patagonia</h2>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="space-y-6 text-lg leading-8 text-muted">
                  <p>En 2011, Hernán estudió inglés en el Instituto de Formación Docente y Técnica N° 55 de Escobar, Buenos Aires. Después enseñó inglés en Argentina durante muchos años.</p>
                  <p>Se mudó a Bolonia, Italia, donde estudió italiano en Academia Lingue y trabajó con empresas italianas de agritech, diseño y tecnología, enseñando inglés a arquitectos, diseñadores, operadores y otros profesionales.</p>
                  <p>Organizó viajes de aprendizaje de inglés para adultos y adolescentes a Irlanda y Inglaterra, y trabajó como profesor y responsable de actividades en campamentos de verano del norte de Italia.</p>
                  <p>Luego trabajó en Laponia, Finlandia, colaborando con empresas de turismo finlandesas. Guió visitantes bajo las auroras boreales y llevó huskies a bosques nevados a -35°C.</p>
                  <p>Después de pasar una semana acampando en El Chaltén, se prometió a sí mismo volver a Patagonia y compartir una experiencia que ayudara a otros a explorar otros mundos a través del idioma.</p>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="border-y border-subtle bg-surface py-20 sm:py-28">
          <Container>
            <Reveal><SectionHeader eyebrow="Lo que guía nuestro trabajo" title="Una misión para compartir la Patagonia" description="Patagonia Summer Camp cumple esa promesa valorando la región a través de la amistad, el idioma, el respeto por la cultura local y la curiosidad por la naturaleza." /></Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Reveal key={value.title} delay={index * 0.07}>
                    <Card variant="glass" className="h-full p-6 sm:p-8">
                      <span className="grid size-12 place-items-center rounded-2xl border border-primary/25 bg-primary/10 text-primary-accent"><Icon className="size-6" aria-hidden="true" /></span>
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
                  <Badge variant="primary">Pasión y liderazgo</Badge>
                  <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-main sm:text-4xl">Claridad, energía y autenticidad</h2>
                  <p className="mt-5 text-lg leading-8 text-muted">A Hernán le gustan CrossFit, yoga, ciclismo, la producción musical, las montañas y las actividades al aire libre. Quiere compartir esa sensación con los adolescentes que participan del programa.</p>
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
                <div className="flex items-start gap-4"><Mountain className="mt-1 size-6 shrink-0 text-secondary-accent" aria-hidden="true" /><div><h2 className="text-xl font-semibold text-main">El explorador</h2><p className="mt-2 leading-7 text-muted">Un espacio para descubrir qué significa aprender afuera, juntos y con propósito.</p></div></div>
                <Button href="/preguntas-frecuentes" variant="outline">Consultar las preguntas frecuentes</Button>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
    </>
  );
}
