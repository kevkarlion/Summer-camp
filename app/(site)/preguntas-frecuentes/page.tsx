import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { JsonLd } from "@/components/seo/JsonLd";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/site";

import "./preguntas.css";

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
    images: [{ url: "/camp-media/grupo-jugando.webp", width: 1200, height: 630, alt: "Fotografía real del campamento: grupo de adolescentes jugando al aire libre" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/camp-media/grupo-jugando.webp"] },
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
      <main id="main-content" className="preguntas-page">
        <section className="site-hero preguntas-hero" aria-labelledby="preguntas-title">
          <div className="site-hero__copy">
            <div className="site-hero__intro">
              <h1 id="preguntas-title" className="site-display preguntas-title">
                <span>Las dudas más comunes,</span>
                <span>reunidas en un mismo lugar</span>
              </h1>
              <p className="site-lead">
                Información inicial sobre el programa, la experiencia, la logística y la seguridad para que las familias puedan avanzar con claridad.
              </p>
              <div className="site-hero__actions">
                <Link className="site-button site-button--primary" href="/guia-familias">
                  Consultar la guía para familias <ArrowRight aria-hidden="true" size={18} />
                </Link>
              </div>
            </div>
          </div>
          <figure className="site-hero__media">
            <Image
              src="/camp-media/grupo-jugando.webp"
              alt="Fotografía real del campamento: grupo de adolescentes jugando al aire libre"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 54vw"
              className="site-hero__image"
            />
          </figure>
        </section>

        <section className="site-section site-section--paper preguntas-list-section" aria-labelledby="preguntas-list-title">
          <div className="site-wrap">
            <div className="site-section__intro site-section__intro--wide">
              <div>
                <h2 id="preguntas-list-title" className="site-heading preguntas-heading">
                  <span>Información para responder</span>
                  <span>las preguntas más importantes</span>
                </h2>
                <p className="site-lead site-lead--dark">
                  Estas respuestas resumen los datos confirmados. Los detalles pendientes se comunicarán antes de la inscripción y antes de viajar.
                </p>
              </div>
              <p className="site-section__aside site-section__aside--dark">Antes de decidirse</p>
            </div>

            <div className="preguntas-list">
              {faqs.map((faq) => (
                <Reveal key={faq.question}>
                <details className="preguntas-disclosure">
                  <summary>
                    <span>{faq.question}</span>
                    <span className="preguntas-disclosure__icon" aria-hidden="true" />
                  </summary>
                  <div className="preguntas-disclosure__answer">{faq.answer}</div>
                </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="site-section site-section--forest preguntas-particular" aria-labelledby="preguntas-particular-title">
          <div className="site-wrap site-section__split">
            <div>
              <h2 id="preguntas-particular-title" className="site-heading site-heading--light preguntas-heading">
                <span>Tu familia tiene</span>
                <span>una pregunta particular</span>
              </h2>
              <p className="site-lead site-lead--light">
                Podés solicitar a la organización el programa y la información sobre fechas, actividades, alojamiento, costos e inscripción.
              </p>
            </div>
            <div className="site-card site-card--paper preguntas-particular__action">
              <p>Solicitar información</p>
              <Link className="site-button site-button--paper" href="/programa-ingles/adolescentes">
                Conocer el programa <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
        </section>


        <section className="site-section site-section--paper" aria-labelledby="preguntas-galeria-title">
          <div className="site-wrap">
            <div className="site-section__intro">
              <div>
                <h2 id="preguntas-galeria-title" className="site-heading">
                  El campamento detrás de cada respuesta
                </h2>
                <p className="site-lead site-lead--dark">
                  Estas son las imágenes que acompañan al programa: el grupo, el territorio y las actividades que esperan en diciembre.
                </p>
              </div>
            </div>
            <Reveal>
              <div className="preguntas-band">
                {[
                  {
                    src: "/camp-media/grupo-caminando.webp",
                    alt: "Fotografía real del campamento: grupo caminando con mochilas por un sendero de bosque",
                    caption: "El grupo en la montaña",
                  },
                  {
                    src: "/camp-media/productores-locales.webp",
                    alt: "Fotografía real del campamento: visita a productores locales y su oficio",
                    caption: "Encuentros con el territorio",
                  },
                  {
                    src: "/camp-media/kayak-en-el-lago.webp",
                    alt: "Fotografía real del campamento: grupo en kayaks sobre el lago con montañas de fondo",
                    caption: "El agua como aula",
                  },
                ].map((item) => (
                  <figure key={item.src} className="preguntas-band__item">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 767px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <figcaption>{item.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="site-section site-section--lake preguntas-closing" aria-labelledby="preguntas-closing-title">
          <div className="site-wrap site-section__split">
            <div>
              <h2 id="preguntas-closing-title" className="site-heading site-heading--light preguntas-heading">
                <span>Una respuesta útil empieza</span>
                <span>con una buena pregunta</span>
              </h2>
              <p className="site-lead site-lead--light">
                Explorá el programa, las actividades y el destino para construir una visión completa antes de solicitar información.
              </p>
            </div>
            <div className="preguntas-closing__actions">
              <Link className="site-button site-button--primary" href="/programa-ingles">
                Conocer el programa <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link className="site-button site-button--outline" href="/itinerario-y-actividades">
                Ver actividades
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
