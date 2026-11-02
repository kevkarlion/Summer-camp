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
  "Residencia de summer camp en Villa La Angostura, a 2 km del centro, con 26 hectáreas de parque y bosque nativo, costa del Nahuel Huapi y actividades en naturaleza.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url), title, description,
  keywords: ["summer camp villa la angostura", "campamento Patagonia adolescentes", "residencia villa la angostura"],
  alternates: { canonical: pagePath },
  openGraph: {
    type: "website", locale: siteConfig.locale, url: pagePath, siteName: siteConfig.name, title, description,
    images: [{ url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&h=630&q=80", width: 1200, height: 630, alt: "Montañas y lago de Villa La Angostura en Patagonia" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&h=630&q=80"] },
};

const experiences = [
  { icon: Mountain, title: "Naturaleza para mirar y recorrer", description: "El entorno del lago Nahuel Huapi invita a observar, caminar y comprender el territorio con curiosidad y respeto." },
  { icon: Trees, title: "Conocer a la comunidad local", description: "Visitar productores locales permite conocer a las personas que dan vida al territorio y valorar sus historias y trabajo." },
  { icon: Compass, title: "Una base para descubrir juntos", description: "La residencia reúne actividades al aire libre, descanso, convivencia y momentos compartidos en contacto con la naturaleza." },
];

const placeSchema = {
  "@context": "https://schema.org", "@type": "Place", name: "Residencia Patagonia Summer Camp en Villa La Angostura",
  description, url: `${siteConfig.url}${pagePath}`,
  address: { "@type": "PostalAddress", addressLocality: "Villa La Angostura", addressRegion: "Neuquén", addressCountry: "AR" },
  containedInPlace: { "@type": "AdministrativeArea", name: "Provincia de Neuquén, Patagonia Argentina" },
};

const landmarksSchema = {
  "@context": "https://schema.org", "@type": "LandmarksOrHistoricalBuildings",
  name: "Residencia y entorno natural de Villa La Angostura",
  description: "Base residencial con parque, bosque nativo y acceso a la costa del lago Nahuel Huapi en Villa La Angostura.",
  url: `${siteConfig.url}${pagePath}`, containedInPlace: placeSchema,
};

export default function DestinoVillaLaAngosturaPage() {
  return (
    <>
      <JsonLd data={[placeSchema, landmarksSchema]} />
      <main id="main-content">
        <PageHero
          eyebrow="Villa La Angostura · Patagonia"
          title="Entre lagos, bosques y montañas"
          description="La experiencia se realiza en una residencia a 2 km del centro de Villa La Angostura, rodeada de parque, bosque nativo y naturaleza."
          image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85"
          imageAlt="Lagos y montañas del entorno de Villa La Angostura"
        >
          <Button href="/itinerario-y-actividades" size="lg">Descubrir actividades <ArrowRight className="size-4" /></Button>
        </PageHero>

        <section className="py-20 sm:py-28">
          <Container>
            <Reveal><SectionHeader eyebrow="Una base para conocer Patagonia" title="La Patagonia como parte del aprendizaje" description="Conocer un lugar cambia la forma de cuidarlo. La experiencia combina naturaleza, comunidades, historias y conocimiento local." /></Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {experiences.map((experience, index) => {
                const Icon = experience.icon;
                return (
                  <Reveal key={experience.title} delay={index * 0.08}>
                    <Card variant="glass" className="h-full p-6 sm:p-7">
                      <span className="grid size-12 place-items-center rounded-2xl border border-primary/25 bg-primary/10 text-primary-accent"><Icon className="size-6" aria-hidden="true" /></span>
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
                <Badge variant="secondary"><MapPin className="size-3.5" aria-hidden="true" /> Patagonia Argentina</Badge>
                <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.035em] text-main sm:text-4xl">Una residencia en contacto con el territorio</h2>
                <p className="mt-5 text-lg leading-8 text-muted">El programa se basa en una residencia de Villa La Angostura; el pueblo y su entorno constituyen el contexto de las experiencias, no el lugar de cada actividad.</p>
              </Reveal>
              <Reveal delay={0.08}>
                <Card variant="elevated" className="p-7 sm:p-9">
                  <h3 className="text-2xl font-semibold text-main">Datos confirmados de la residencia</h3>
                  <ul className="mt-7 space-y-4">
                    {[
                      "A 2 km del centro de Villa La Angostura.",
                      "26 hectáreas de parque y bosque nativo.",
                      "Costa sobre el lago Nahuel Huapi.",
                      "Área deportiva y espacios abiertos.",
                      "Comedor amplio para comidas y encuentros grupales.",
                    ].map((item) => <li key={item} className="flex gap-3 leading-7 text-muted"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" />{item}</li>)}
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
                  <Badge variant="primary">Adolescentes de 13–17 años</Badge>
                  <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-main sm:text-4xl">Un destino para descubrir Villa La Angostura</h2>
                  <p className="mt-5 text-lg leading-8 text-muted">El programa residencial se realiza del 4 al 12 de diciembre de 2027 y combina inglés, actividades al aire libre y conocimiento local.</p>
                </div>
                <Button href="/programa-ingles/adolescentes" variant="outline">Programa para adolescentes <ArrowRight className="size-4" /></Button>
              </Card>
            </Reveal>
          </Container>
        </section>
      </main>
    </>
  );
}
