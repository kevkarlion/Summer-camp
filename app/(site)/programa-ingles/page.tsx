import type { Metadata } from "next";
import { ArrowRight, Compass, MessageCircle, Users } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CampIcon } from "@/components/ui/CampIcon";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TypicalDayTimeline } from "@/components/ui/TypicalDayTimeline";
import { siteConfig } from "@/lib/site";

const pagePath = "/programa-ingles";
const title = "Metodología Learning by Doing | Inmersión Lingüística";
const description =
  "Programa residencial de learning by doing para adolescentes de 13 a 17 años: inglés en la vida diaria, naturaleza y actividades en Villa La Angostura.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url), title, description,
  keywords: ["inmersion ingles verano", "aprender ingles haciendo", "learning by doing patagonia"],
  alternates: { canonical: pagePath },
  openGraph: {
    type: "website", locale: siteConfig.locale, url: pagePath, siteName: siteConfig.name, title, description,
    images: [{ url: "/camp-media/grupo-caminando.webp", width: 1200, height: 630, alt: "Fotografía real del campamento: grupo caminando con mochilas por el bosque" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/camp-media/grupo-caminando.webp"] },
};

const methodSteps = [
  { number: "01", icon: MessageCircle, title: "Escuchar en contexto", description: "Palabras y expresiones aparecen en conversaciones, indicaciones y decisiones del día, para que el idioma tenga un propósito." },
  { number: "02", icon: Compass, title: "Practicar al aire libre", description: "La exploración, las actividades y la convivencia ofrecen situaciones reales donde usar el inglés deja de sentirse como una clase." },
  { number: "03", icon: Users, title: "Reflexionar juntos", description: "La experiencia invita a compartir lo vivido, reconocer avances y descubrir nuevas formas de participar y expresarse." },
];

const schema = {
  "@context": "https://schema.org", "@type": "EducationalOccupationalProgram", name: title, description,
  url: `${siteConfig.url}${pagePath}`, inLanguage: "es-AR",
  educationalProgramType: "Inmersión lingüística en inglés", programType: "Programa residencial de verano al aire libre",
  startDate: "2027-12-04", endDate: "2027-12-12",
  audience: { "@type": "EducationalAudience", educationalRange: "13-17 años" },
  provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  location: { "@type": "Place", name: "Residencia en Villa La Angostura", address: { "@type": "PostalAddress", addressLocality: "Villa La Angostura", addressRegion: "Neuquén", addressCountry: "AR" } },
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
          description="Una metodología de inmersión convierte cada actividad, conversación y decisión en una razón para aprender inglés haciendo en Patagonia."
          image="/camp-media/grupo-caminando.webp"
          imageAlt="Fotografía real del campamento: grupo caminando con mochilas por un sendero de bosque"
        >
          <Button href="/programa-ingles/adolescentes" size="lg">Conocer el programa para adolescentes <ArrowRight className="size-4" /></Button>
        </PageHero>

        <section className="py-20 sm:py-28">
          <Container>
            <Reveal><SectionHeader eyebrow="Nuestro enfoque" title="Aprender haciendo, en un entorno que invita a participar" description="El inglés se integra en las rutinas del campamento: comprendemos el contexto, usamos el idioma y volvemos sobre lo aprendido." /></Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {methodSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Reveal key={step.number} delay={index * 0.08}>
                    <Card variant="glass" className="h-full p-6 sm:p-7">
                      <div className="flex items-center justify-between"><span className="text-sm font-semibold tracking-[0.16em] text-secondary-accent">{step.number}</span><CampIcon icon={Icon} size="sm" /></div>
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
                <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.035em] text-main sm:text-4xl">El inglés vive en la experiencia</h2>
                <p className="mt-5 leading-7 text-muted">Además de sesiones breves y participativas cada mañana, el inglés está presente en actividades, conversaciones y vida cotidiana.</p>
              </Reveal>
              <div className="grid gap-4">
                {[
                  ["Por la mañana", "Sesiones participativas de inglés, sin prometer un nivel fijo; el nivel recomendado y el apoyo se comunicarán antes de la inscripción."],
                  ["Durante las actividades", "El idioma sirve para comprender instrucciones, acordar, compartir ideas y descubrir el entorno."],
                  ["En la convivencia", "Conversaciones espontáneas y momentos de encuentro permiten usar el inglés de manera natural y respetuosa."],
                ].map(([label, text], index) => (
                  <Reveal key={label} delay={index * 0.08}>
                    <Card className="grid gap-3 p-6 sm:grid-cols-[10rem_1fr] sm:items-start sm:gap-7">
                      <Badge variant="primary" className="w-fit">{label}</Badge><p className="leading-7 text-muted">{text}</p>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
          <div aria-hidden="true" className="pointer-events-none absolute -left-28 top-12 size-[30rem] rounded-full bg-orb-emerald blur-[120px] animate-pulse-slow" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-4 size-[28rem] rounded-full bg-orb-amber blur-[120px] animate-pulse-slow" />
          <Container className="relative">
            <Reveal>
              <SectionHeader
                eyebrow="El itinerario diario"
                title="Aprender, explorar y compartir."
                description="Este recorrido visual presenta posibles momentos de la experiencia. Los horarios exactos y el fogón de la tarde son ilustrativos y están pendientes de confirmación."
              />
            </Reveal>
            <Reveal delay={0.08} className="mt-12 lg:mt-14">
              <TypicalDayTimeline />
            </Reveal>
          </Container>
        </section>

        <section className="py-20 sm:py-28">
          <Container>
            <Reveal>
              <Card variant="elevated" className="overflow-hidden p-8 sm:p-12 lg:p-16">
                <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div className="max-w-3xl">
                    <Badge variant="primary">13–17 años · 4–12 de diciembre de 2027</Badge>
                    <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-main sm:text-4xl">Una experiencia residencial para descubrir, conversar y crecer</h2>
                    <p className="mt-5 text-lg leading-8 text-muted">El programa combina naturaleza, conocimiento local, actividades al aire libre, inmersión en inglés y trabajo en equipo en Villa La Angostura.</p>
                  </div>
                  <Button href="/programa-ingles/adolescentes" variant="outline">Ver programa para adolescentes <ArrowRight className="size-4" /></Button>
                </div>
              </Card>
            </Reveal>
          </Container>
        </section>
      </main>
    </>
  );
}
