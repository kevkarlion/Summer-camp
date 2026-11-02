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
  "Resolvé tus dudas sobre campamento inglés: admisiones, edades, programa, precio summer camp Patagonia, equipo y qué llevar antes de elegir nuestra experiencia.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  keywords: ["dudas campamento ingles", "precio summer camp patagonia"],
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
        url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Grupo de amigos conversando al aire libre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
};

const faqs = [
  {
    question: "¿Qué grupos de edad participan del campamento?",
    answer:
      "El programa se organiza en dos etapas: niños de 8 a 11 años y adolescentes de 13 a 17 años. Cada grupo tiene objetivos, dinámicas y acompañamiento acordes con sus intereses y autonomía.",
  },
  {
    question: "¿Cómo se organiza el uso del inglés durante el día?",
    answer:
      "El inglés aparece en instrucciones, equipos, conversaciones y momentos de reflexión. El equipo acompaña la comunicación para que cada participante pueda participar según su nivel y ganar confianza.",
  },
  {
    question: "¿Qué incluye el precio summer camp Patagonia?",
    answer:
      "La propuesta comercial se define según fechas, grupo etario y modalidad elegida. Antes de reservar, el equipo de contacto entrega el detalle de programas, servicios incluidos, condiciones y formas de pago.",
  },
  {
    question: "¿Qué documentación necesitan las familias?",
    answer:
      "La documentación específica se informa durante la inscripción. Las familias deben completar los formularios y entregar la información de salud necesaria para organizar una participación adecuada.",
  },
  {
    question: "¿Qué debe llevar un participante?",
    answer:
      "La guía para familias incluye una propuesta de equipaje por etapa, ropa cómoda y los elementos personales relevantes. Conviene consultar la lista final antes de viajar y ajustar todo a las indicaciones del campamento.",
  },
  {
    question: "¿Cómo se comunican las familias durante el campamento?",
    answer:
      "La coordinación centraliza las consultas y novedades. Cada familia recibe el canal y los horarios de comunicación definidos para el período correspondiente, junto con las indicaciones de contacto.",
  },
  {
    question: "¿Las actividades se adaptan a diferentes niveles de experiencia?",
    answer:
      "Sí. Antes de cada actividad se consideran el lugar, la condición del grupo, la experiencia previa y los recursos disponibles. El equipo define una propuesta con dificultad y acompañamiento proporcionales.",
  },
  {
    question: "¿Qué ocurre si una familia tiene una consulta específica?",
    answer:
      "Las preguntas sobre inscripción, documentación o características del programa pueden enviarse al equipo de contacto. Para información general, esta sección reúne las respuestas más consultadas.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  name: title,
  description,
  url: `${siteConfig.url}${pagePath}`,
  inLanguage: "es-AR",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function PreguntasFrecuentesPage() {
  return (
    <>
      <JsonLd data={schema} />
      <main id="main-content">
        <PageHero
          eyebrow="FAQ · Respuestas claras"
          title="Las dudas más comunes, reunidas en un mismo lugar"
          description="Dudas campamento inglés, logística y experiencia familiar: encontrá información inicial para avanzar con tranquilidad y hablar con el equipo."
          image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2000&q=85"
          imageAlt="Grupo de amigos conversando durante una actividad al aire libre"
        >
          <Button href="/guia-familias" size="lg">
            Consultar la guía para familias <ArrowRight className="size-4" />
          </Button>
        </PageHero>

        <section className="py-20 sm:py-28">
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="Antes de decidirse"
                title="Información para responder las preguntas más importantes"
                description="Estas respuestas ofrecen una primera orientación. Los detalles de una inscripción se confirman con el equipo, según fechas, edad y modalidad elegida."
              />
            </Reveal>

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
                  <Badge variant="primary">Seguimos la conversación</Badge>
                  <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-main sm:text-4xl">
                    Tu familia tiene una pregunta particular
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-muted">
                    Escribinos y te ayudaremos a identificar la información relevante para el programa, la edad y las necesidades de tu hijo.
                  </p>
                </div>
                <Button href="/guia-familias" variant="secondary">
                  Consultar la guía familiar <ArrowRight className="size-4" />
                </Button>
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
                <p className="mt-5 text-lg leading-8 text-muted">
                  Explorá el programa, las actividades y la experiencia del destino para construir una visión completa antes de contactarnos.
                </p>
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
