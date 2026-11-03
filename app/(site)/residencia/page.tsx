import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

import { residenciaCopy } from "./copy";
import { ResidenciaView } from "./residencia-view";

import "./residencia.css";

const pagePath = "/residencia";
const { title, description } = residenciaCopy.en.meta;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  keywords: ["Villa La Angostura summer camp", "residencia campamento Patagonia", "residencia adolescentes Neuquén"],
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
        url: "/camp-media/lago-al-atardecer.png",
        width: 1200,
        height: 630,
        alt: "Real camp photograph: the lake at sunset with the Patagonian mountains behind",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/camp-media/lago-al-atardecer.png"],
  },
};

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Villa La Angostura, Neuquén, Argentina",
    description,
    url: `${siteConfig.url}${pagePath}`,
    inLanguage: "en",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Villa La Angostura",
      addressRegion: "Neuquén",
      addressCountry: "AR",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: "Patagonia Summer Camp residence",
    description:
      "A residence 2 km from the centre of Villa La Angostura with 26 hectares of park and native forest, the shore of Lake Nahuel Huapi, a sports area and a wide dining room.",
    url: `${siteConfig.url}${pagePath}`,
    inLanguage: "en",
  },
];

export default function ResidenciaPage() {
  return (
    <>
      <JsonLd data={schema} />
      <ResidenciaView />
    </>
  );
}
