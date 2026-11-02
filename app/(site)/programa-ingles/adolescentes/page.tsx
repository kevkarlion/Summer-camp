import type { Metadata } from "next";
import { ArrowRight, Compass, Lightbulb, MessageCircle, Users } from "lucide-react";
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

const pagePath = "/programa-ingles/adolescentes";
const title = "Campamento de Inglés para Adolescentes (13-17 años)";
const description =
  "Programa residencial para adolescentes de 13 a 17 años: inglés por inmersión, kayak, trekking y naturaleza en Villa La Angostura durante diciembre de 2027.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url), title, description,
  keywords: ["campamento adolescentes ingles", "viaje verano jovenes patagonia", "summer camp villa la angostura"],
  alternates: { canonical: pagePath },
  openGraph: {
    type: "website", locale: siteConfig.locale, url: pagePath, siteName: siteConfig.name, title, description,
    images: [{ url: "/camp-media/grupo-jugando.webp", width: 1200, height: 630, alt: "Fotografía real del campamento: grupo de adolescentes jugando al aire libre" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/camp-media/grupo-jugando.webp"] },
};

const pillars = [
  { icon: MessageCircle, title: "Inglés para la vida real", description: "El idioma aparece en actividades, conversaciones y decisiones para ganar confianza y disposición para comunicarte." },
  { icon: Compass, title: "Autonomía con acompañamiento", description: "La aventura y la convivencia ofrecen nuevas formas de organizar la participación y resolver desafíos." },
  { icon: Lightbulb, title: "Reflexión y perspectiva", description: "Las experiencias abren espacio para comparar ideas, reconocer avances y descubrir nuevas formas de expresarse." },
];

const schema = {
  "@context": "https://schema.org", "@type": "Course", name: title, description,
  url: `${siteConfig.url}${pagePath}`, inLanguage: "es-AR",
  educationalLevel: "13-17 años", courseMode: "onsite",
  startDate: "2027-12-04", endDate: "2027-12-12",
  teaches: ["Inglés oral", "Comunicación", "Convivencia", "Trabajo en equipo", "Autonomía"],
  audience: { "@type": "EducationalAudience", educationalRange: "13-17 años" },
  provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  location: { "@type": "Place", name: "Residencia en Villa La Angostura", address: { "@type": "PostalAddress", addressLocality: "Villa La Angostura", addressRegion: "Neuquén", addressCountry: "AR" } },
};

export default function ProgramaAdolescentesPage() {
  return (
    <>
      <JsonLd data={schema} />
      <main id="main-content">
        <PageHero
          eyebrow="13–17 años · 4–12 de diciembre de 2027"
          title="Una experiencia para pensar, decidir y conectar"
          description="Naturaleza, actividades y conversaciones dan otra dimensión al inglés en una experiencia residencial en Villa La Angostura."
          image="/camp-media/grupo-jugando.webp"
          imageAlt="Fotografía real del campamento: grupo de adolescentes jugando al aire libre"
        >
          <Button href="#experiencias" size="lg">Explorar el programa <ArrowRight className="size-4" /></Button>
        </PageHero>

        <section id="experiencias" className="py-20 sm:py-28">
          <Container>
            <Reveal><SectionHeader eyebrow="Inmersión con propósito" title="Menos idioma de aula, más idioma para la vida" description="El inglés se integra en la vida diaria, las actividades y las conversaciones. El nivel recomendado y el apoyo para distintos niveles se comunicarán antes de la inscripción." /></Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <Reveal key={pillar.title} delay={index * 0.08}>
                    <Card variant="glass" className="h-full p-6 sm:p-7">
                      <CampIcon icon={Icon} />
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
                <SectionHeader eyebrow="Convivencia responsable" title="Autonomía, pertenencia y límites claros" description="La experiencia se diseña para fortalecer vínculos, responsabilidades y una convivencia respetuosa." />
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/itinerario-y-actividades" variant="secondary">Ver actividades <ArrowRight className="size-4" /></Button>
                  <Button href="/seguridad-y-coordinacion" variant="outline">Conocer la coordinación</Button>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <Card variant="elevated" className="p-7 sm:p-9">
                  <CampIcon icon={Users} size="lg" tone="oxblood" />
                  <h3 className="mt-6 text-2xl font-semibold text-main">Una experiencia que se comparte</h3>
                  <p className="mt-4 leading-7 text-muted">El programa reúne a adolescentes de Buenos Aires y otras provincias. El transporte interprovincial no está incluido.</p>
                  <ul className="mt-6 space-y-3 text-muted">
                    <li>Kayak, trekking y exploración del entorno natural.</li>
                    <li>Visitas a productores locales para conocer el territorio.</li>
                    <li>Tiempo de convivencia y experiencia compartida en la residencia.</li>
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
                  <Badge variant="primary">Residencia en Villa La Angostura</Badge>
                  <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-main sm:text-4xl">Naturaleza, comunidad y un espacio para crecer</h2>
                  <p className="mt-5 text-lg leading-8 text-muted">La residencia está a 2 km del centro, cuenta con 26 hectáreas de parque y bosque nativo, costa sobre el lago Nahuel Huapi, área deportiva y comedor amplio.</p>
                  <p className="mt-4 leading-7 text-muted">Cada familia organiza y paga su transporte. Las recepciones, el regreso, la distribución de habitaciones, los servicios incluidos y otros detalles operativos se comunicarán antes del campamento.</p>
                </div>
                <Button href="/programa-ingles" variant="secondary" size="lg">Ver la metodología <ArrowRight className="size-4" /></Button>
              </Card>
            </Reveal>
          </Container>
        </section>
      </main>
    </>
  );
}
