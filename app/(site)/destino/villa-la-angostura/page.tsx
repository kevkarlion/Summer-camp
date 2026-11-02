import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Compass, MapPin, Mountain, Trees } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { ParallaxImageContainer } from "@/components/ui/ParallaxImage";
import { JsonLd } from "@/components/seo/JsonLd";
import { IMAGE_BLUR_DATA_URL } from "@/components/image/placeholder";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CampIcon } from "@/components/ui/CampIcon";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/site";

const pagePath = "/destino/villa-la-angostura";
const title = "Campamento de Verano en Villa La Angostura | Nahuel Huapi";
const description =
  "Residencia de summer camp en Villa La Angostura, a 2 km del centro, con 26 hectáreas de parque, bosque nativo, costa del Nahuel Huapi y espacios naturales.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url), title, description,
  keywords: ["summer camp villa la angostura", "campamento Patagonia adolescentes", "residencia villa la angostura"],
  alternates: { canonical: pagePath },
  openGraph: {
    type: "website", locale: siteConfig.locale, url: pagePath, siteName: siteConfig.name, title, description,
    images: [{ url: "/camp-media/lago-al-atardecer.png", width: 1200, height: 630, alt: "Fotografía real del campamento: el lago al atardecer con las montañas de Patagonia" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/camp-media/lago-al-atardecer.png"] },
};

const experiences = [
  { icon: Mountain, title: "Naturaleza para mirar y recorrer", description: "El entorno del lago Nahuel Huapi invita a observar, caminar y comprender el territorio con curiosidad y respeto." },
  { icon: Trees, title: "Conocer a la comunidad local", description: "Visitar productores locales permite conocer a las personas que dan vida al territorio y valorar sus historias y trabajo." },
  { icon: Compass, title: "Una base para descubrir juntos", description: "La residencia reúne actividades al aire libre, descanso, convivencia y momentos compartidos en contacto con la naturaleza." },
];

const placeSchema = {
  "@context": "https://schema.org", "@type": "Place", name: "Residencia Patagonia Summer Camp en Villa La Angostura",
  description, url: `${siteConfig.url}${pagePath}`,
  address: { "@type": "PostalAddress", addressLocality: "Villa La Angostura", addressRegion: "Neuquén", addressCountry: "AR" },
  containedInPlace: { "@type": "AdministrativeArea", name: "Provincia de Neuquén, Patagonia Argentina" },
};

const residenceSchema = {
  "@context": "https://schema.org", "@type": "Residence",
  name: "Residencia Patagonia Summer Camp",
  description:
    "Base residencial a 2 km del centro de Villa La Angostura, con 26 hectáreas de parque y bosque nativo, costa sobre el lago Nahuel Huapi, área deportiva y comedor amplio.",
  url: `${siteConfig.url}${pagePath}`, containedInPlace: placeSchema,
};

const gallery = [
  {
    src: "/camp-media/kayak-en-el-lago.webp",
    alt: "Fotografía real del campamento: grupo en kayaks sobre el lago con montañas de fondo",
    eyebrow: "El agua",
    title: "Los tonos del Nahuel Huapi",
    text: "El lago es parte del paisaje cotidiano de la experiencia: un horizonte de agua clara entre montañas y bosque.",
    className: "lg:col-span-7 lg:row-span-2",
    ratio: "aspect-[4/5] lg:aspect-auto lg:min-h-[42rem]",
    sizes: "(max-width: 1024px) 100vw, 58vw",
  },
  {
    src: "/camp-media/senderismo-con-villa-al-fondo.webp",
    alt: "Fotografía real del campamento: sendero de bosque con Villa La Angostura al fondo",
    eyebrow: "El bosque",
    title: "Bosque nativo everywhere",
    text: "El entorno de la residencia combina parque, bosque nativo y espacios abiertos para caminar y explorar.",
    className: "lg:col-span-5",
    ratio: "aspect-[4/3]",
    sizes: "(max-width: 1024px) 100vw, 42vw",
  },
  {
    src: "/camp-media/mirando-el-valle.webp",
    alt: "Fotografía real del campamento: adolescente sobre un tronco caído contemplando el valle",
    eyebrow: "Las montañas",
    title: "La cordillera como horizonte",
    text: "Las montañas de la Patagonia acompañan cada jornada y marcan el ritmo de las actividades al aire libre.",
    className: "lg:col-span-5",
    ratio: "aspect-[4/3]",
    sizes: "(max-width: 1024px) 100vw, 42vw",
  },
  {
    src: "/camp-media/residencia-y-parque.png",
    alt: "Fotografía real del campamento: la residencia con su parque y el bosque nativo alrededor",
    eyebrow: "El paisaje",
    title: "Un lugar para mirar y escuchar",
    text: "La cercanía del agua y el bosque convierte cada salida en una ocasión para observar el territorio con otra mirada.",
    className: "lg:col-span-12",
    ratio: "aspect-[16/7]",
    sizes: "100vw",
  },
];

export default function DestinoVillaLaAngosturaPage() {
  return (
    <>
      <JsonLd data={[placeSchema, residenceSchema]} />
      <main id="main-content">
        <PageHero
          eyebrow="Villa La Angostura · Patagonia"
          title="Entre lagos, bosques y montañas"
          description="La experiencia se realiza en una residencia a 2 km del centro de Villa La Angostura, rodeada de parque, bosque nativo y naturaleza."
          image="/camp-media/lago-al-atardecer.png"
          imageAlt="Fotografía real del campamento: el lago al atardecer con las montañas de fondo"
        >
          <Button href="/itinerario-y-actividades" size="lg">Descubrir actividades <ArrowRight className="size-4" /></Button>
        </PageHero>

        <section className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
          <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-16 size-[30rem] rounded-full bg-orb-emerald blur-[120px] animate-pulse-slow" />
          <Container className="relative">
            <Reveal>
              <SectionHeader
                eyebrow="Una base para conocer Patagonia"
                title="La Patagonia como parte del aprendizaje"
                description="Conocer un lugar cambia la forma de cuidarlo. La experiencia combina naturaleza, comunidades, historias y conocimiento local."
              />
            </Reveal>

            <div className="mt-12 grid gap-4 lg:grid-cols-12 lg:grid-rows-[auto_auto_auto]">
              {gallery.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.06} className={item.className}>
                  <figure className={`group relative overflow-hidden rounded-[1.75rem] border border-subtle ${item.ratio}`}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes={item.sizes}
                      placeholder="blur"
                      blurDataURL={IMAGE_BLUR_DATA_URL}
                      className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
                    />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/35 to-transparent" />
                    <figcaption className="absolute inset-x-4 bottom-4 copy-scrim rounded-2xl p-5 sm:inset-x-6 sm:bottom-6 sm:p-6">
                      <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-secondary-accent">
                        {item.eyebrow}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-main">{item.title}</h3>
                      <p className="mt-2 max-w-xl leading-7 text-main/90">{item.text}</p>
                      <p className="mt-3 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-main/60">
                        Fotografía real del campamento
                      </p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>

            <p className="mt-6 max-w-3xl text-sm leading-6 text-muted">
              Fotografías reales de Patagonia Summer Camp 2027: el lago, el bosque nativo, la residencia y las experiencias del programa.
            </p>
          </Container>
        </section>

        <section className="border-y border-subtle bg-surface py-20 sm:py-28">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
              <Reveal className="relative min-h-[26rem] overflow-hidden rounded-[2rem] border border-subtle sm:min-h-[34rem]">
                <ParallaxImageContainer
                  src="/camp-media/fogata-en-el-bosque.webp"
                  alt="Fotografía real del campamento: fogata con marshmallows en el bosque"
                  className="absolute inset-0"
                  sizes="(max-width: 1024px) 100vw, 52vw"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-transparent" />
                <div className="absolute inset-x-4 bottom-4 copy-scrim rounded-2xl p-5 sm:inset-x-6 sm:bottom-6 sm:p-6">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-secondary-accent">La tarde</p>
                  <p className="mt-2 text-xl font-semibold text-main">El fuego como encuentro</p>
                  <p className="mt-2 text-sm leading-6 text-main/90">
                    Fotografía real del campamento. El fogón nocturno es ilustrativo y queda sujeto a confirmación del programa.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <Badge variant="secondary"><MapPin className="size-3.5" aria-hidden="true" /> Patagonia Argentina</Badge>
                <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.035em] text-main sm:text-4xl">
                  Una residencia en contacto con el territorio
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted">
                  El programa se basa en una residencia de Villa La Angostura; el pueblo y su entorno constituyen el contexto de las experiencias, no el lugar de cada actividad.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {experiences.map((experience) => {
                    const Icon = experience.icon;
                    return (
                      <Card key={experience.title} variant="elevated" className="p-5">
                        <CampIcon icon={Icon} size="sm" />
                        <h3 className="mt-5 text-base font-semibold text-main">{experience.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted">{experience.description}</p>
                      </Card>
                    );
                  })}
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="py-20 sm:py-28">
          <Container>
            <Reveal>
              <Card variant="glass" className="grid gap-8 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl">
                  <Badge variant="primary">Adolescentes de 13–17 años</Badge>
                  <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-main sm:text-4xl">Un destino para descubrir Villa La Angostura</h2>
                  <p className="mt-5 text-lg leading-8 text-muted">El programa residencial se realiza del 4 al 12 de diciembre de 2027 y combina inglés, actividades al aire libre y conocimiento local.</p>
                </div>
                <Button href="/programa-ingles/adolescentes" variant="outline">Programa para adolescentes <ArrowRight className="size-4" /></Button>
              </Card>
            </Reveal>
          </Container>
        </section>
      </main>
    </>
  );
}
