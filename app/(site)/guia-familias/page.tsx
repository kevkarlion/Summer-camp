import type { Metadata } from "next";
import { ArrowRight, Check, FileText, HeartHandshake, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/site";

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
    images: [{ url: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&h=630&q=80", width: 1200, height: 630, alt: "Sendero de montaña entre árboles en la Patagonia" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&h=630&q=80"] },
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
      <main id="main-content">
        <PageHero
          eyebrow="Manual operativo para familias"
          title="Preparar el viaje también es construir confianza"
          description="Una guía concreta para organizar la llegada, la salud, la seguridad, la convivencia y el equipaje de cada participante."
          image="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=2000&q=85"
          imageAlt="Excursionistas preparando su equipaje junto a un sendero"
        >
          <Button href="/preguntas-frecuentes" size="lg">Resolver otras dudas <ArrowRight className="size-4" /></Button>
        </PageHero>

        <section className="py-20 sm:py-28">
          <Container>
            <Reveal><SectionHeader eyebrow="Antes de viajar" title="La organización familiar, paso a paso" description="Estos son los datos confirmados. Los horarios, cobertura, seguro, dispositivos y demás detalles operativos pendientes se comunicarán antes del campamento." /></Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {sections.map((section, index) => (
                <Reveal key={section.title} delay={index * 0.04}>
                  <Card variant="glass" className="h-full p-6 sm:p-7">
                    <h3 className="text-xl font-semibold text-main">{section.title}</h3>
                    <ul className="mt-5 space-y-3">
                      {section.items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-muted"><Check className="mt-1 size-4 shrink-0 text-primary-accent" aria-hidden="true" /><span>{item}</span></li>)}
                    </ul>
                  </Card>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-subtle bg-surface py-20 sm:py-28">
          <Container>
            <Reveal><SectionHeader eyebrow="Equipamiento confirmado" title="La lista de equipaje" description="Revisá la lista antes de cada actividad. Etiquetá la ropa y los objetos personales con el nombre completo del participante." /></Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {Object.entries(packing).map(([title, items], index) => (
                <Reveal key={title} delay={index * 0.05}>
                  <Card variant="glass" className="h-full p-6 sm:p-7">
                    <h3 className="text-xl font-semibold text-main">{title}</h3>
                    <ul className="mt-5 space-y-3">
                      {items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-muted"><Check className="mt-1 size-4 shrink-0 text-primary-accent" aria-hidden="true" /><span>{item}</span></li>)}
                    </ul>
                  </Card>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-8">
              <Card variant="elevated" className="p-7 sm:p-9">
                <div className="flex items-start gap-4"><ShieldCheck className="mt-1 size-6 shrink-0 text-secondary-accent" aria-hidden="true" /><div><h3 className="text-xl font-semibold text-main">Recomendaciones para el equipaje</h3><p className="mt-2 leading-7 text-muted">No traigas objetos de valor ni equipamiento especializado sin consulta previa. Esperá las instrucciones del equipo antes de comprar o rentar equipamiento para kayak, rafting u otras actividades.</p></div></div>
              </Card>
            </Reveal>
          </Container>
        </section>

        <section className="py-20 sm:py-28">
          <Container>
            <Reveal>
              <Card variant="glass" className="grid gap-8 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl">
                  <Badge variant="primary"><HeartHandshake className="size-4" aria-hidden="true" /> Acompañamiento</Badge>
                  <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-main sm:text-4xl">Respetar, participar y cuidar el entorno</h2>
                  <p className="mt-5 text-lg leading-8 text-muted">Las normas de seguridad, convivencia y cuidado de la naturaleza se explican al llegar. Cada participante las conoce y puede pedir ayuda para cumplirlas.</p>
                </div>
                <Button href="/seguridad-y-coordinacion" variant="secondary">Conocer la coordinación <ArrowRight className="size-4" /></Button>
              </Card>
            </Reveal>
          </Container>
        </section>

        <section className="border-t border-subtle py-16 sm:py-20">
          <Container>
            <Reveal>
              <div className="flex flex-col gap-5 rounded-3xl border border-subtle bg-card p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div className="flex items-start gap-4"><FileText className="mt-1 size-6 shrink-0 text-secondary-accent" aria-hidden="true" /><div><h2 className="text-xl font-semibold text-main">La lista se revisa antes de cada actividad</h2><p className="mt-2 leading-7 text-muted">Consultá las indicaciones operativas y los formularios que la organización comunique antes de salir.</p></div></div>
                <Button href="/preguntas-frecuentes" variant="outline">Consultar las preguntas frecuentes</Button>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
    </>
  );
}
