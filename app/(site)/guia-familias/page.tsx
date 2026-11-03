import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

import "./guia.css";

const pagePath = "/guia-familias";
const title = "Guía para Familias: Logística, Equipamiento y Normas";
const description =
  "Guía familiar del summer camp 2027: llegada, dispositivos, alimentos, salud, seguridad, convivencia, comunicación y equipaje para adolescentes de 13 a 17 años.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url), title, description,
  keywords: ["que llevar campamento verano", "equipamiento summer camp", "guia familias campamento"],
  alternates: { canonical: pagePath },
  openGraph: {
    type: "website", locale: siteConfig.locale, url: pagePath, siteName: siteConfig.name, title, description,
    images: [{ url: "/camp-media/grupo-caminando.webp", width: 1200, height: 630, alt: "Fotografía real del campamento: grupo caminando con mochilas por un sendero" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/camp-media/grupo-caminando.webp"] },
};

const sections = [
  { title: "Llegada y recepción", items: ["La coordinación recibe a los participantes en el lugar y horario que se comuniquen previamente.", "Al llegar, el equipo organiza el equipaje, presenta a los coordinadores y las instalaciones y explica las reglas de convivencia."] },
  { title: "Salida y regreso", items: ["Cada familia arregla y paga su transporte a Villa La Angostura.", "La coordinación de los viajes de regreso se comunicará antes del campamento."] },
  { title: "Dispositivos", items: ["Las reglas de uso privilegiarán la participación, el descanso y la interacción cara a cara, sin cortar la comunicación familiar.", "Los horarios finales y las reglas de custodia se comunicarán antes del campamento."] },
  { title: "Alimentación y necesidades alimentarias", items: ["Las comidas serán apropiadas para adolescentes y se organizarán en torno a la actividad física.", "Las necesidades alimentarias y nutricionales se atenderán con cuidado y confidencialidad después de informarlas y confirmar qué puede acomodarse."] },
  { title: "Información médica y medicación", items: ["Las familias deben informar alergias, condiciones médicas, medicamentos e instrucciones, restricciones alimentarias, restricciones de actividad, cobertura médica y contactos de emergencia.", "Los medicamentos deben llegar identificados y acompañados de instrucciones claras. El procedimiento de almacenamiento, administración y supervisión se comunicará antes del campamento."] },
  { title: "Seguridad y emergencias", items: ["El procedimiento de emergencia cubrirá la comunicación familiar, el acceso a asistencia médica y las responsabilidades de coordinadores y proveedores.", "Las familias serán contactadas lo antes posible cuando una situación médica o de seguridad lo requiera."] },
  { title: "Cobertura médica y seguro", items: ["La cobertura médica requerida, el alcance del seguro y el procedimiento para consultas, accidentes y emergencias se comunicarán antes de viajar."] },
  { title: "Convivencia", items: ["Respetar a pares, equipo y proveedores; seguir instrucciones de seguridad; cuidar instalaciones, equipos y naturaleza; y respetar horarios y reglas de convivencia.", "No se permite acoso, discriminación, intimidación, violencia ni el consumo de alcohol, drogas, tabaco u otras conductas que comprometan la seguridad o el bienestar."] },
  { title: "Comunicación familiar", items: ["La coordinación centraliza las novedades y los canales de comunicación se comunicarán antes de la experiencia.", "Ante una situación médica o de seguridad, la familia será contactada lo antes posible."] },
  { title: "Dinero y objetos personales", items: ["Se recomienda llevar una cantidad moderada de dinero para gastos personales pequeños, si fuera necesario.", "No deben traerse objetos de valor, dispositivos caros, joyería ni objetos innecesarios. Los procedimientos para dinero, objetos y pertenencias perdidas se comunicarán antes del campamento."] },
  { title: "Adaptación y malestar emocional", items: ["La dificultad para adaptarse a la vida residencial se acompañará de cerca, respetando el ritmo de cada participante e involucrando a la familia cuando sea necesario."] },
];

const packing = {
  "Ropa": ["Ropa interior y calcetines para toda la estadía", "Camisetas y pantalones cómodos", "Ropa deportiva", "Polar o capa cálida", "Campera impermeable y cortaviento", "Pantalón largo y ropa cómoda para los momentos libres", "Pijama", "Bañador", "Gorro para el sol y anteojos"],
  "Calzado": ["Zapatillas cómodas para caminar", "Calzado de trekking, según las indicaciones previas", "Sandalias o calzado para las instalaciones de la residencia"],
  "Actividades al aire libre": ["Mochila pequeña", "Botella de agua reutilizable", "Protector solar", "Repelente de insectos", "Anteojos", "Toalla personal y, si corresponde, toalla de actividad", "Bolsa para ropa mojada o usada"],
  "Higiene y documentos": ["Cepillo de dientes y pasta", "Shampoo y jabón", "Desodorante", "Otros productos personales necesarios", "Documento de identidad", "Información de cobertura médica", "Medicamentos e instrucciones, si corresponde", "Autorizaciones y formularios solicitados por la organización"],
};

const schema = {
  "@context": "https://schema.org", "@type": "Article", headline: title, description,
  url: `${siteConfig.url}${pagePath}`, inLanguage: "es-AR",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  about: ["Logística familiar", "Equipamiento para campamentos", "Salud y seguridad", "Normas de convivencia"],
};

export default function GuiaFamiliasPage() {
  return (
    <>
      <JsonLd data={schema} />
      <main id="main-content" className="guia-page">
        <section className="site-hero guia-hero" aria-labelledby="guia-title">
          <div className="site-hero__copy">
            <div className="site-hero__intro">
              <h1 id="guia-title" className="site-display guia-title">
                <span>Preparar el viaje</span>
                <span>también es construir confianza</span>
              </h1>
              <p className="site-lead">
                Una guía concreta para organizar la llegada, la salud, la seguridad, la convivencia y el equipaje de cada participante.
              </p>
              <div className="site-hero__actions">
                <Link className="site-button site-button--primary" href="/preguntas-frecuentes">
                  Resolver otras dudas <ArrowRight aria-hidden="true" size={18} />
                </Link>
              </div>
            </div>
          </div>
          <figure className="site-hero__media">
            <Image
              src="/camp-media/grupo-caminando.webp"
              alt="Fotografía real del campamento: grupo caminando con mochilas por un sendero"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 54vw"
              className="site-hero__image"
            />
          </figure>
        </section>

        <section className="site-section site-section--paper guia-operations" aria-labelledby="guia-operations-title">
          <div className="site-wrap">
            <div className="site-section__intro site-section__intro--wide">
              <div>
                <h2 id="guia-operations-title" className="site-heading guia-heading">
                  <span>La organización familiar,</span>
                  <span>paso a paso</span>
                </h2>
                <p className="site-lead site-lead--dark">
                  Estos son los datos confirmados. Los horarios, cobertura, seguro, dispositivos y demás detalles operativos pendientes se comunicarán antes del campamento.
                </p>
              </div>
              <p className="site-section__aside site-section__aside--dark">Antes de viajar</p>
            </div>

            <div className="guia-ledger">
              {sections.map((section) => (
                <article key={section.title} className="guia-ledger__item">
                  <h3>{section.title}</h3>
                  <ul>
                    {section.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="site-section site-section--forest guia-packing" aria-labelledby="guia-packing-title">
          <div className="site-wrap">
            <div className="site-section__intro site-section__intro--wide">
              <div>
                <h2 id="guia-packing-title" className="site-heading site-heading--light guia-heading">
                  <span>La lista</span>
                  <span>de equipaje</span>
                </h2>
                <p className="site-lead site-lead--light">
                  Revisá la lista antes de cada actividad. Etiquetá la ropa y los objetos personales con el nombre completo del participante.
                </p>
              </div>
            </div>

            <div className="guia-packing__groups">
              {Object.entries(packing).map(([group, items]) => (
                <article key={group}>
                  <h3>{group}</h3>
                  <ul>
                    {items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>

            <div className="guia-recommendation">
              <h3>Recomendaciones para el equipaje</h3>
              <p>No traigas objetos de valor ni equipamiento especializado sin consulta previa. Esperá las instrucciones del equipo antes de comprar o rentar equipamiento para kayak, rafting u otras actividades.</p>
            </div>
          </div>
        </section>

        <section className="site-section site-section--paper guia-environment" aria-labelledby="guia-environment-title">
          <div className="site-wrap site-section__split">
            <div>
              <h2 id="guia-environment-title" className="site-heading guia-heading">
                <span>Respetar, participar</span>
                <span>y cuidar el entorno</span>
              </h2>
              <p className="site-lead site-lead--dark">
                Las normas de seguridad, convivencia y cuidado de la naturaleza se explican al llegar. Cada participante las conoce y puede pedir ayuda para cumplirlas.
              </p>
            </div>
            <div className="guia-environment__action">
              <p>Acompañamiento</p>
              <Link className="site-button site-button--primary" href="/seguridad-y-coordinacion">
                Conocer la coordinación <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section className="site-section guia-closing" aria-labelledby="guia-closing-title">
          <div className="site-wrap guia-closing__grid">
            <div>
              <h2 id="guia-closing-title">La lista se revisa antes de cada actividad</h2>
              <p>Consultá las indicaciones operativas y los formularios que la organización comunique antes de salir.</p>
            </div>
            <Link className="site-button site-button--primary" href="/preguntas-frecuentes">
              Consultar las preguntas frecuentes
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
