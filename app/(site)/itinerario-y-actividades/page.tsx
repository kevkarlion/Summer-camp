import type { Metadata } from "next";
import { ArrowRight, Binoculars, Compass, Mountain, Users, Waves } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CampIcon } from "@/components/ui/CampIcon";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/site";

const pagePath = "/itinerario-y-actividades";
const title = "Itinerario & Aventura al Aire Libre | Kayak y Trekking";
const description =
  "Actividades del summer camp en Villa La Angostura: kayak, trekking, productores locales, convivencia y exploración natural para adolescentes de 13 a 17 años.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url), title, description,
  keywords: ["actividades verano villa la angostura", "trekking kayak campamento", "actividades Patagonia adolescentes"],
  alternates: { canonical: pagePath },
  openGraph: {
    type: "website", locale: siteConfig.locale, url: pagePath, siteName: siteConfig.name, title, description,
    images: [{ url: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&h=630&q=80", width: 1200, height: 630, alt: "Grupo recorriendo un sendero de montaña en Patagonia" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&h=630&q=80"] },
};

const activities = [
  { icon: Waves, title: "Kayak", description: "Una experiencia sobre el agua para compartir el día con trabajo en equipo y atención a la seguridad." },
  { icon: Mountain, title: "Trekking", description: "Caminatas y observaciones del bosque en contacto con el entorno natural." },
  { icon: Compass, title: "Visitas a productores locales", description: "Encuentros con quienes producen y trabajan en el territorio para conocer su historia y su oficio." },
  { icon: Users, title: "Convivencia y naturaleza", description: "Tiempo para compartir experiencias, explorar el entorno natural y construir vínculos con el grupo." },
  { icon: Binoculars, title: "Exploración del entorno", description: "Observación y descubrimiento de la naturaleza con una mirada curiosa y respetuosa." },
];

const schema = {
  "@context": "https://schema.org", "@type": "ItemList",
  name: "Itinerario y actividades de Patagonia Summer Camp 2027", description,
  url: `${siteConfig.url}${pagePath}`, inLanguage: "es-AR",
  itemListElement: activities.map((activity, index) => ({ "@type": "ListItem", position: index + 1, name: activity.title, description: activity.description })),
};

export default function ItinerarioYActividadesPage() {
  return (
    <>
      <JsonLd data={schema} />
      <main id="main-content">
        <PageHero
          eyebrow="Aventura al aire libre"
          title="Actividades para descubrir la Patagonia"
          description="Kayak, trekking y encuentros con productores locales conectan movimiento, equipo, inglés y conocimiento del territorio."
          image="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=2000&q=85"
          imageAlt="Personas recorriendo un sendero entre montañas y árboles"
        >
          <Button href="/seguridad-y-coordinacion" size="lg">Conocer la coordinación <ArrowRight className="size-4" /></Button>
        </PageHero>

        <section className="py-20 sm:py-28">
          <Container>
            <Reveal><SectionHeader eyebrow="Actividades confirmadas" title="Naturaleza, comunidad y trabajo en equipo" description="Cada actividad considera las condiciones meteorológicas y los requisitos de seguridad. El horario definitivo se comunicará con el programa." /></Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {activities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <Reveal key={activity.title} delay={index * 0.06}>
                    <Card variant="glass" className="h-full p-6 sm:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <CampIcon icon={Icon} />
                        <Badge variant="secondary">Actividad {String(index + 1).padStart(2, "0")}</Badge>
                      </div>
                      <h3 className="mt-7 text-2xl font-semibold tracking-[-0.025em] text-main">{activity.title}</h3>
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
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <Reveal>
                <Badge variant="secondary">Antes de cada actividad</Badge>
                <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-main sm:text-4xl">Requisitos claros, experiencia previa no necesaria en general</h2>
                <p className="mt-5 text-lg leading-8 text-muted">No se requiere experiencia outdoor previa en general. Cada actividad puede tener requisitos específicos, y el equipo comunicará el equipamiento final antes del campamento.</p>
              </Reveal>
              <Reveal delay={0.08}>
                <Card variant="elevated" className="p-7 sm:p-9">
                  <h3 className="text-2xl font-semibold text-main">La experiencia se adapta a las condiciones</h3>
                  <ul className="mt-7 space-y-4">
                    {["Se consideran el clima y las condiciones de seguridad.", "Se utilizan proveedores y profesionales adecuados, cuyas condiciones se verifican.", "El equipo de coordinación acompaña la organización de cada actividad.", "Los requisitos y el equipamiento específicos se comunican antes de la experiencia."].map((item) => <li key={item} className="flex gap-3 leading-7 text-muted"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" />{item}</li>)}
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
                  <Badge variant="primary">Programa de verano</Badge>
                  <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-main sm:text-4xl">Actividades con un propósito compartido</h2>
                  <p className="mt-5 text-lg leading-8 text-muted">Descubrí cómo el programa integra las actividades con el inglés y la convivencia del 4 al 12 de diciembre de 2027.</p>
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
