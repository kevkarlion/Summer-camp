import type { Metadata } from "next";
import { ArrowRight, BellRing, HeartHandshake, Radio, ShieldCheck } from "lucide-react";
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

const pagePath = "/seguridad-y-coordinacion";
const title = "Seguridad, Acompañamiento y Salud | Summer Camp";
const description =
  "Coordinación, evaluación de actividades, comunicación con familias y procedimientos de salud y seguridad del summer camp, que se confirman antes del campamento.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url), title, description,
  keywords: ["seguridad campamentos residenciales", "coordinación summer camp Patagonia"],
  alternates: { canonical: pagePath },
  openGraph: {
    type: "website", locale: siteConfig.locale, url: pagePath, siteName: siteConfig.name, title, description,
    images: [{ url: "/camp-media/grupo-caminando.webp", width: 1200, height: 630, alt: "Fotografía real del campamento: grupo caminando con mochilas por el bosque" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/camp-media/grupo-caminando.webp"] },
};

const protocols = [
  { icon: Radio, title: "Coordinación del equipo", description: "La organización del equipo, la supervisión y las reglas de convivencia se proporcionarán antes de la inscripción. La proporción exacta entre participantes y acompañantes aún no está confirmada." },
  { icon: ShieldCheck, title: "Actividades evaluadas", description: "Cada actividad considera el clima, la seguridad y los requisitos específicos. Se utilizan proveedores y profesionales adecuados, cuyas cualificaciones, seguros, protocolos y condiciones se verifican." },
  { icon: HeartHandshake, title: "Información médica", description: "Las familias deben informar alergias, condiciones médicas, medicamentos, restricciones y contactos de emergencia. La medicación debe llegar identificada y con instrucciones claras." },
  { icon: BellRing, title: "Comunicación familiar", description: "Las familias serán contactadas lo antes posible cuando una situación médica o de seguridad lo requiera. Los canales y el procedimiento de emergencia se comunicarán antes del campamento." },
];

const safetySchema = {
  "@context": "https://schema.org",
  "@type": "SafetyGuide",
  name: "Guía de seguridad y coordinación de Patagonia Summer Camp 2027",
  description: "Información sobre coordinación, evaluación de actividades, salud y comunicación familiar; los procedimientos operativos se confirman antes del campamento.",
  url: `${siteConfig.url}${pagePath}`, inLanguage: "es-AR",
  safetyConsideration: [
    "Actividades evaluadas según condiciones meteorológicas y requisitos de seguridad",
    "Información médica y medicación revisada con las familias",
    "Proveedores y profesionales con condiciones verificadas",
    "Procedimiento de emergencia y comunicación familiar antes del campamento",
  ],
};

export default function SeguridadYCoordinacionPage() {
  return (
    <>
      <JsonLd data={safetySchema} />
      <main id="main-content">
        <PageHero
          eyebrow="Confianza y cuidado"
          title="Seguridad que se explica y se confirma"
          description="La coordinación del equipo, la evaluación de actividades y los procedimientos médicos se organizan con información clara para las familias."
          image="/camp-media/grupo-caminando.webp"
          imageAlt="Fotografía real del campamento: grupo caminando con mochilas por un sendero"
        >
          <Button href="/guia-familias" size="lg">Ver la guía para familias <ArrowRight className="size-4" /></Button>
        </PageHero>

        <section className="py-20 sm:py-28">
          <Container>
            <Reveal><SectionHeader eyebrow="Coordinación responsable" title="Un equipo acompaña la experiencia" description="La organización, supervisión y reglas de convivencia se proporcionarán antes de la inscripción. No se publica una proporción exacta ni se atribuye un nivel de idioma al equipo mientras no estén confirmados." /></Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {protocols.map((protocol, index) => {
                const Icon = protocol.icon;
                return (
                  <Reveal key={protocol.title} delay={index * 0.06}>
                    <Card variant="glass" className="h-full p-6 sm:p-8">
                      <CampIcon icon={Icon} />
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
                <Badge variant="secondary">Información que se completa antes del viaje</Badge>
                <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-main sm:text-4xl">Procedimientos claros para familias y participantes</h2>
                <p className="mt-5 text-lg leading-8 text-muted">La cobertura médica, el alcance del seguro, el almacenamiento de medicación, las consultas, accidentes, emergencias y los canales de comunicación serán confirmados antes de viajar.</p>
              </Reveal>
              <div className="grid gap-4">
                {[
                  ["Salud y medicamentos", "Las familias informan condiciones, alergias, restricciones y medicamentos. El procedimiento de almacenamiento, administración y supervisión se comunica antes del campamento."],
                  ["Emergencias", "Antes del campamento se definirá un procedimiento con acceso a asistencia médica y responsabilidades de coordinadores y proveedores."],
                  ["Seguro y alcance", "La cobertura médica requerida, el alcance del seguro y las condiciones para consultas, accidentes y emergencias se comunicarán antes del viaje."],
                ].map(([label, text], index) => (
                  <Reveal key={label} delay={index * 0.07}>
                    <Card className="grid gap-3 p-6 sm:grid-cols-[10rem_1fr] sm:gap-7"><Badge variant="primary" className="w-fit">{label}</Badge><p className="leading-7 text-muted">{text}</p></Card>
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
                  <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-main sm:text-4xl">Toda la información pendiente se comunicará antes del campamento</h2>
                  <p className="mt-5 text-lg leading-8 text-muted">La organización del equipo, la cobertura, los procedimientos médicos y de emergencia, los horarios de dispositivos y la logística de recepción se confirman antes de la experiencia.</p>
                </div>
                <Button href="/preguntas-frecuentes" variant="secondary">Consultar preguntas frecuentes <ArrowRight className="size-4" /></Button>
              </Card>
            </Reveal>
          </Container>
        </section>
      </main>
    </>
  );
}
