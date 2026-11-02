import type { Metadata } from "next";
import { ArrowRight, CircleHelp } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/site";

const pagePath = "/preguntas-frecuentes";
const title = "Preguntas Frecuentes | Patagonia Summer Camp 2027";
const description =
  "Consultá sobre el summer camp para adolescentes de 13 a 17 años: fechas, destino, inglés, actividades, seguridad, alojamiento, transporte, precio e inscripción.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url), title, description,
  keywords: ["dudas campamento ingles", "preguntas summer camp Patagonia", "campamento adolescentes Patagonia"],
  alternates: { canonical: pagePath },
  openGraph: {
    type: "website", locale: siteConfig.locale, url: pagePath, siteName: siteConfig.name, title, description,
    images: [{ url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&h=630&q=80", width: 1200, height: 630, alt: "Grupo de amigos conversando al aire libre" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&h=630&q=80"] },
};

const faqs = [
  { question: "¿Qué es Patagonia Summer Camp?", answer: "Es una experiencia de verano residencial para adolescentes que combina aventura al aire libre, inmersión en inglés y descubrimiento de Patagonia." },
  { question: "¿Para qué edades es?", answer: "El programa es exclusivamente para adolescentes de 13 a 17 años." },
  { question: "¿Cuándo se realiza?", answer: "Las fechas planificadas son del 4 al 12 de diciembre de 2027." },
  { question: "¿Dónde se realiza?", answer: "El programa se realiza en una base residencial en Villa La Angostura, a minutos del centro. La residencia está a 2 km del centro de la ciudad." },
  { question: "¿Se requiere un nivel de inglés?", answer: "No se promete un nivel fijo. El nivel recomendado y el apoyo para distintos niveles se comunicarán antes de la inscripción." },
  { question: "¿Cómo se usa el inglés?", answer: "Cada mañana hay sesiones breves y participativas de inglés. El idioma también está presente en las actividades, las conversaciones y la vida cotidiana." },
  { question: "¿Qué actividades incluye?", answer: "El programa confirma kayak, trekking, visitas a productores locales, convivencia y exploración del entorno natural." },
  { question: "¿Se necesita experiencia outdoor previa?", answer: "No se requiere en general. Cada actividad puede tener requisitos específicos, que se comunicarán junto con el equipamiento necesario." },
  { question: "¿Cómo se realiza la supervisión?", answer: "Los participantes están acompañados por un equipo de coordinación. La organización, supervisión y reglas de convivencia se proporcionarán antes de la inscripción." },
  { question: "¿Cómo se atiende una incidencia médica?", answer: "Los procedimientos de emergencia, las medidas de asistencia médica, las condiciones del seguro y los canales de comunicación familiar se comunicarán antes de la inscripción." },
  { question: "¿Cómo son el alojamiento y las comidas?", answer: "La experiencia es residencial en Villa La Angostura. La distribución de habitaciones, las comidas, los servicios incluidos y otros detalles se proporcionarán con el programa definitivo." },
  { question: "¿El viaje está incluido?", answer: "Cada familia organiza y paga su transporte a Villa La Angostura. El transporte desde otras provincias no está incluido en el precio del programa." },
  { question: "¿Desde qué regiones se puede participar y cuál es el precio?", answer: "El programa está abierto a adolescentes de Buenos Aires y otras provincias. El valor y las condiciones de inscripción se comunicarán a las familias, con los servicios incluidos y los gastos adicionales." },
  { question: "¿Cómo se solicita el programa?", answer: "Las familias pueden solicitar a la organización el programa y la información sobre fechas, actividades, alojamiento, costos e inscripción." },
];

const schema = {
  "@context": "https://schema.org", "@type": "FAQPage", name: title, description,
  url: `${siteConfig.url}${pagePath}`, inLanguage: "es-AR",
  mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
};

export default function PreguntasFrecuentesPage() {
  return (
    <>
      <JsonLd data={schema} />
      <main id="main-content">
        <PageHero
          eyebrow="FAQ · Respuestas claras"
          title="Las dudas más comunes, reunidas en un mismo lugar"
          description="Información inicial sobre el programa, la experiencia, la logística y la seguridad para que las familias puedan avanzar con claridad."
          image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2000&q=85"
          imageAlt="Grupo de amigos conversando durante una actividad al aire libre"
        >
          <Button href="/guia-familias" size="lg">Consultar la guía para familias <ArrowRight className="size-4" /></Button>
        </PageHero>

        <section className="py-20 sm:py-28">
          <Container>
            <Reveal><SectionHeader eyebrow="Antes de decidirse" title="Información para responder las preguntas más importantes" description="Estas respuestas resumen los datos confirmados. Los detalles pendientes se comunicarán antes de la inscripción y antes de viajar." /></Reveal>
            <div className="mx-auto mt-12 max-w-4xl space-y-4">
              {faqs.map((faq, index) => (
                <Reveal key={faq.question} delay={Math.min(index * 0.04, 0.24)}>
                  <Card variant="glass">
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-5 p-6 text-lg font-semibold text-main marker:hidden sm:p-7 sm:text-xl">
                        <span>{faq.question}</span>
                        <span className="grid size-8 shrink-0 place-items-center rounded-full border border-subtle bg-overlay-soft text-primary-accent transition-transform duration-300 motion-reduce:transform-none" aria-hidden="true">+</span>
                      </summary>
                      <div className="px-6 pb-6 pr-14 leading-7 text-muted sm:px-7 sm:pb-7 sm:pr-20">{faq.answer}</div>
                    </details>
                  </Card>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-subtle bg-surface py-20 sm:py-28">
          <Container>
            <Reveal>
              <Card variant="elevated" className="grid gap-8 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl">
                  <Badge variant="primary">Solicitar información</Badge>
                  <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-main sm:text-4xl">Tu familia tiene una pregunta particular</h2>
                  <p className="mt-5 text-lg leading-8 text-muted">Podés solicitar a la organización el programa y la información sobre fechas, actividades, alojamiento, costos e inscripción.</p>
                </div>
                <Button href="/programa-ingles/adolescentes" variant="secondary">Conocer el programa <ArrowRight className="size-4" /></Button>
              </Card>
            </Reveal>
          </Container>
        </section>

        <section className="py-20 sm:py-28">
          <Container>
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <CircleHelp className="mx-auto size-10 text-secondary-accent" aria-hidden="true" />
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-main sm:text-4xl">Una respuesta útil empieza con una buena pregunta</h2>
                <p className="mt-5 text-lg leading-8 text-muted">Explorá el programa, las actividades y el destino para construir una visión completa antes de solicitar información.</p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button href="/programa-ingles" variant="secondary">Conocer el programa <ArrowRight className="size-4" /></Button>
                  <Button href="/itinerario-y-actividades" variant="outline">Ver actividades</Button>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
    </>
  );
}
