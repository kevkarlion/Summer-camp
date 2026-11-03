import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

import { contactoCopy } from "./copy";
import { ContactoView } from "./contacto-view";

import "./contacto.css";

const pagePath = "/contacto";
const { title, description } = contactoCopy.en.meta;

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
        alt: "Panoramic view of Villa La Angostura: turquoise lake, native forest and mountains",
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
  inLanguage: "en",
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
      <ContactoView />
    </>
  );
}
