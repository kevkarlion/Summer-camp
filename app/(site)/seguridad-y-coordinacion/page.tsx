import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/marketing/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

import "./seguridad.css";

const pagePath = "/seguridad-y-coordinacion";
const title = "Seguridad, Acompañamiento y Salud | Summer Camp";
const description =
  "Coordinación, evaluación de actividades, comunicación con familias y procedimientos de salud y seguridad del summer camp, que se confirman antes del campamento.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  keywords: ["seguridad campamentos residenciales", "coordinación summer camp Patagonia"],
  alternates: { canonical: pagePath },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: pagePath,
    siteName: siteConfig.name,
    title,
    description,
    images: [
      {
        url: "/camp-media/grupo-caminando.webp",
        width: 1200,
        height: 630,
        alt: "Fotografía real del campamento: grupo caminando con mochilas por el bosque",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/camp-media/grupo-caminando.webp"],
  },
};

const protocols = [
  {
    title: "Coordinación del equipo",
    description:
      "La organización del equipo, la supervisión y las reglas de convivencia se proporcionarán antes de la inscripción. La proporción exacta entre participantes y acompañantes aún no está confirmada.",
  },
  {
    title: "Actividades evaluadas",
    description:
      "Cada actividad considera el clima, la seguridad y los requisitos específicos. Se utilizan proveedores y profesionales adecuados, cuyas cualificaciones, seguros, protocolos y condiciones se verifican.",
  },
  {
    title: "Información médica",
    description:
      "Las familias deben informar alergias, condiciones médicas, medicamentos, restricciones y contactos de emergencia. La medicación debe llegar identificada y con instrucciones claras.",
  },
  {
    title: "Comunicación familiar",
    description:
      "Las familias serán contactadas lo antes posible cuando una situación médica o de seguridad lo requiera. Los canales y el procedimiento de emergencia se comunicarán antes del campamento.",
  },
];

const procedures = [
  {
    label: "Salud y medicamentos",
    text: "Las familias informan condiciones, alergias, restricciones y medicamentos. El procedimiento de almacenamiento, administración y supervisión se comunica antes del campamento.",
  },
  {
    label: "Emergencias",
    text: "Antes del campamento se definirá un procedimiento con acceso a asistencia médica y responsabilidades de coordinadores y proveedores.",
  },
  {
    label: "Seguro y alcance",
    text: "La cobertura médica requerida, el alcance del seguro y las condiciones para consultas, accidentes y emergencias se comunicarán antes del viaje.",
  },
];

const safetySchema = {
  "@context": "https://schema.org",
  "@type": "SafetyGuide",
  name: "Guía de seguridad y coordinación de Patagonia Summer Camp 2027",
  description:
    "Información sobre coordinación, evaluación de actividades, salud y comunicación familiar; los procedimientos operativos se confirman antes del campamento.",
  url: `${siteConfig.url}${pagePath}`,
  inLanguage: "es-AR",
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
          <Button href="/guia-familias" size="lg">
            Ver la guía para familias <ArrowRight className="size-4" />
          </Button>
        </PageHero>

        <section className="site-section site-section--paper" aria-labelledby="seguridad-coordinacion-title">
          <div className="site-wrap">
            <div className="site-section__intro">
              <div>
                <h2 id="seguridad-coordinacion-title" className="site-heading">
                  Un equipo acompaña la experiencia
                </h2>
                <p className="site-lead site-lead--dark">
                  La organización, supervisión y reglas de convivencia se proporcionarán antes de la inscripción. No se publica una proporción exacta ni se atribuye un nivel de idioma al equipo mientras no estén confirmados.
                </p>
              </div>
              <p className="site-section__aside">
                Todo lo que las familias necesitan saber se define y se comunica antes de la inscripción.
              </p>
            </div>
            <div className="seguridad-protocols">
              {protocols.map((protocol) => (
                <article key={protocol.title} className="seguridad-protocol">
                  <h3>{protocol.title}</h3>
                  <p>{protocol.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="site-section site-section--forest" aria-labelledby="seguridad-procedimientos-title">
          <div className="site-wrap">
            <div className="site-section__intro">
              <div>
                <h2 id="seguridad-procedimientos-title" className="site-heading site-heading--light">
                  Procedimientos claros para familias y participantes
                </h2>
                <p className="site-lead site-lead--light">
                  La cobertura médica, el alcance del seguro, el almacenamiento de medicación, las consultas, accidentes, emergencias y los canales de comunicación serán confirmados antes de viajar.
                </p>
              </div>
            </div>
            <div className="seguridad-procedures">
              {procedures.map((procedure) => (
                <article key={procedure.label} className="seguridad-procedure">
                  <h3>{procedure.label}</h3>
                  <p>{procedure.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="site-section site-section--paper" aria-labelledby="seguridad-preparacion-title">
          <div className="site-wrap">
            <div className="seguridad-closing">
              <div>
                <h2 id="seguridad-preparacion-title" className="site-heading">
                  Toda la información pendiente se comunicará antes del campamento
                </h2>
                <p className="site-lead site-lead--dark">
                  La organización del equipo, la cobertura, los procedimientos médicos y de emergencia, los horarios de dispositivos y la logística de recepción se confirman antes de la experiencia.
                </p>
              </div>
              <div className="site-section__aside">
                <Button href="/preguntas-frecuentes" variant="secondary">
                  Consultar preguntas frecuentes <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
