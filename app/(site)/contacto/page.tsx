import type { Metadata } from "next";
import { Clock3, MapPin, MessageCircle, Sparkles } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { CampIcon } from "@/components/ui/CampIcon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/site";

const pagePath = "/contacto";
const title = "Contacto | Patagonia Summer Camp 2027";
const description =
  "Contactanos para conocer Patagonia Summer Camp 2027: fechas, inglés, actividades, alojamiento, seguridad e inscripción para adolescentes de 13 a 17 años.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  keywords: [
    "contacto summer camp Patagonia",
    "información campamento Villa La Angostura",
    "inscripción summer camp 2027",
  ],
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
        url: "/hero-villa-la-angostura.webp",
        width: 1600,
        height: 1066,
        alt: "Villa La Angostura, Patagonia Argentina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/hero-villa-la-angostura.webp"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: title,
  description,
  url: `${siteConfig.url}${pagePath}`,
  inLanguage: "es-AR",
  mainEntity: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Villa La Angostura",
      addressRegion: "Neuquén",
      addressCountry: "AR",
    },
  },
};

export default function ContactoPage() {
  return (
    <>
      <JsonLd data={schema} />
      <main id="main-content">
        <section className="relative overflow-hidden pb-16 pt-36 sm:pt-40 lg:pb-20 lg:pt-44">
          <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-16 size-[30rem] rounded-full bg-orb-emerald blur-[120px] animate-pulse-slow" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-0 size-[26rem] rounded-full bg-orb-amber blur-[120px] animate-pulse-slow" />
          <Container className="relative">
            <Reveal className="max-w-4xl">
              <Badge variant="secondary" className="mb-6">
                <Sparkles aria-hidden="true" size={14} /> Estamos para ayudarte
              </Badge>
              <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-main sm:text-6xl lg:text-7xl">
                Una conversación puede ser el comienzo de todo.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                Consultanos por Patagonia Summer Camp 2027. Te ayudaremos a entender el programa, las fechas y los próximos pasos para tu familia.
              </p>
            </Reveal>
          </Container>
        </section>

        <section className="pb-24 sm:pb-28 lg:pb-36">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
              <Reveal>
                <div className="sticky top-28 space-y-5">
                  <SectionHeader
                    eyebrow="Hablemos"
                    title="Contanos qué necesitás saber."
                    description="Podés preguntarnos por cualquier aspecto de la experiencia. Los datos pendientes —como precio, cobertura, habitaciones y organización final— se confirman antes de la inscripción."
                  />
                  <ul className="space-y-4 pt-3">
                    {[
                      { icon: MessageCircle, text: "Consultas sobre el programa de inglés y las experiencias" },
                      { icon: Clock3, text: "Fechas previstas: 4 al 12 de diciembre de 2027" },
                      { icon: MapPin, text: "Experiencia residencial en Villa La Angostura, Neuquén" },
                    ].map((item) => (
                      <li key={item.text} className="flex items-start gap-3 leading-7 text-muted">
                        <CampIcon icon={item.icon} size="sm" tone="khaki" />
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <ContactForm />
              </Reveal>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
