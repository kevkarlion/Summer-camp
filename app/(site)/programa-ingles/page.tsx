import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, MessageCircle, Users } from "lucide-react";
import { DayTimeline } from "@/components/site/DayTimeline";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";
import "@/components/site/routes/programa-ingles.css";

const pagePath = "/programa-ingles";
const title = "Metodología Learning by Doing | Inmersión Lingüística";
const description = "Programa residencial de learning by doing para adolescentes de 13 a 17 años: inglés en la vida diaria, naturaleza y actividades en Villa La Angostura.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url), title, description,
  keywords: ["inmersion ingles verano", "aprender ingles haciendo", "learning by doing patagonia"],
  alternates: { canonical: pagePath },
  openGraph: { type: "website", locale: siteConfig.locale, url: pagePath, siteName: siteConfig.name, title, description, images: [{ url: "/camp-media/grupo-caminando.webp", width: 1200, height: 630, alt: "Fotografía real del campamento: grupo caminando con mochilas por el bosque" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/camp-media/grupo-caminando.webp"] },
};

const methodSteps = [
  { icon: MessageCircle, title: "Escuchar en contexto", description: "Palabras y expresiones aparecen en conversaciones, indicaciones y decisiones del día, para que el idioma tenga un propósito." },
  { icon: Compass, title: "Practicar al aire libre", description: "La exploración, las actividades y la convivencia ofrecen situaciones reales donde usar el inglés deja de sentirse como una clase." },
  { icon: Users, title: "Reflexionar juntos", description: "La experiencia invita a compartir lo vivido, reconocer avances y descubrir nuevas formas de participar y expresarse." },
];
const learningRhythm = [
  ["Por la mañana", "Sesiones participativas de inglés, sin prometer un nivel fijo; el nivel recomendado y el apoyo se comunicarán antes de la inscripción."],
  ["Durante las actividades", "El idioma sirve para comprender instrucciones, acordar, compartir ideas y descubrir el entorno."],
  ["En la convivencia", "Conversaciones espontáneas y momentos de encuentro permiten usar el inglés de manera natural y respetuosa."],
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
      <main id="main-content" className="programa-ingles">
        <section className="site-hero programa-ingles__hero" aria-labelledby="programa-ingles-title">
          <div className="site-hero__copy">
            <div className="site-hero__intro">
              <h1 id="programa-ingles-title" className="site-display programa-ingles__hero-title">El inglés se aprende usándolo</h1>
              <p className="site-lead programa-ingles__hero-lead"><span className="programa-ingles__method-label">Learning by Doing</span>Una metodología de inmersión convierte cada actividad, conversación y decisión en una razón para aprender inglés haciendo en Patagonia.</p>
              <div className="site-hero__actions"><Link className="site-button site-button--primary" href="/programa-ingles/adolescentes">Conocer el programa para adolescentes <ArrowRight aria-hidden="true" size={18} /></Link></div>
            </div>
            <dl className="site-facts programa-ingles__facts" aria-label="Datos principales del programa">
              <div className="site-fact"><dt>Edad</dt><dd>13–17 años</dd></div>
              <div className="site-fact"><dt>Fechas</dt><dd>4–12 de diciembre de 2027</dd></div>
              <div className="site-fact"><dt>Formato</dt><dd>Residencial</dd></div>
              <div className="site-fact"><dt>Lugar</dt><dd>Villa La Angostura</dd></div>
            </dl>
          </div>
          <figure className="site-hero__media">
            <Image src="/camp-media/grupo-caminando.webp" alt="Fotografía real del campamento: grupo caminando con mochilas por un sendero de bosque" fill priority sizes="(max-width: 767px) 100vw, 54vw" className="site-hero__image" />
          </figure>
        </section>

        <section className="site-section site-section--paper programa-ingles__method" aria-labelledby="programa-ingles-method-title">
          <div className="site-wrap">
            <div className="programa-ingles__section-intro">
              <div><h2 id="programa-ingles-method-title" className="site-heading">Nuestro enfoque</h2><p className="site-lead site-lead--dark">Aprender haciendo, en un entorno que invita a participar</p></div>
              <p className="site-body programa-ingles__section-copy">El inglés se integra en las rutinas del campamento: comprendemos el contexto, usamos el idioma y volvemos sobre lo aprendido.</p>
            </div>
            <ol className="programa-ingles__method-list">
              {methodSteps.map((step) => {
                const Icon = step.icon;
                return <li key={step.title} className="programa-ingles__method-item"><span className="programa-ingles__method-icon" aria-hidden="true"><Icon size={26} strokeWidth={1.8} /></span><div><h3 className="programa-ingles__item-title">{step.title}</h3><p className="programa-ingles__item-copy">{step.description}</p></div></li>;
              })}
            </ol>
          </div>
        </section>

        <section className="site-section site-section--forest programa-ingles__rhythm" aria-labelledby="programa-ingles-rhythm-title">
          <div className="site-wrap programa-ingles__rhythm-grid">
            <div className="programa-ingles__rhythm-copy">
              <h2 id="programa-ingles-rhythm-title" className="site-heading site-heading--light">El ritmo de aprendizaje</h2>
              <h3 className="programa-ingles__section-statement">El inglés vive en la experiencia</h3>
              <p className="site-lead site-lead--light">Además de sesiones breves y participativas cada mañana, el inglés está presente en actividades, conversaciones y vida cotidiana.</p>
            </div>
            <ol className="programa-ingles__rhythm-list">
              {learningRhythm.map(([label, text]) => <li key={label} className="programa-ingles__rhythm-item"><p className="programa-ingles__rhythm-label">{label}</p><p className="programa-ingles__rhythm-text">{text}</p></li>)}
            </ol>
          </div>
        </section>

        <section className="site-section site-section--paper programa-ingles__itinerary" aria-labelledby="programa-ingles-itinerary-title">
          <div className="site-wrap">
            <div className="programa-ingles__itinerary-intro">
              <h2 id="programa-ingles-itinerary-title" className="site-heading">El itinerario diario</h2>
              <h3 className="programa-ingles__section-statement">Aprender, explorar y compartir.</h3>
              <p className="site-body programa-ingles__section-copy">Así se vive un día en Patagonia Summer Camp: de la primera luz al último cuento antes de dormir. Los horarios son aproximados y pueden variar según el clima, los requisitos de cada actividad y la organización de cada día.</p>
            </div>
            <DayTimeline />
          </div>
        </section>

        <section className="site-section site-section--lake programa-ingles__residence" aria-labelledby="programa-ingles-residence-title">
          <div className="site-wrap programa-ingles__residence-grid">
            <figure className="programa-ingles__residence-media"><Image src="/camp-media/residencia-de-piedra-y-madera.png" alt="La residencia de piedra y madera" fill sizes="(max-width: 767px) 100vw, 46vw" className="programa-ingles__cover-image" /></figure>
            <div className="programa-ingles__residence-copy">
              <h2 id="programa-ingles-residence-title" className="site-heading">Una experiencia residencial</h2>
              <p className="programa-ingles__residence-badge">13–17 años · 4–12 de diciembre de 2027</p>
              <p className="site-lead site-lead--dark">Una experiencia residencial para descubrir, conversar y crecer. El programa combina naturaleza, conocimiento local, actividades al aire libre, inmersión en inglés y trabajo en equipo en Villa La Angostura.</p>
              <Link className="site-button site-button--primary" href="/programa-ingles/adolescentes">Ver programa para adolescentes <ArrowRight aria-hidden="true" size={18} /></Link>
            </div>
          </div>
        </section>

        <section className="site-section site-section--forest programa-ingles__inquiry" aria-labelledby="programa-ingles-inquiry-title">
          <div className="site-wrap programa-ingles__inquiry-grid">
            <h2 id="programa-ingles-inquiry-title" className="programa-ingles__inquiry-title">¿Querés conocer el programa?</h2>
            <div className="programa-ingles__inquiry-action"><p>Consultá las fechas, el destino y la disponibilidad para adolescentes de 13 a 17 años.</p><Link className="site-button site-button--paper" href="/contacto">Consultar disponibilidad <ArrowRight aria-hidden="true" size={18} /></Link></div>
          </div>
        </section>
      </main>
    </>
  );
}
