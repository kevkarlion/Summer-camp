import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

import { agendaCopy } from "./copy";
import { AgendaView } from "./agenda-view";

import "./agenda.css";

const pagePath = "/agenda";
const { title, description } = agendaCopy.en.meta;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  keywords: [
    "videollamada summer camp Patagonia",
    "agenda tu videollamada summer camp",
    "información campamento Villa La Angostura",
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
        url: "/camp-media/residencia-y-parque.png",
        width: 1360,
        height: 906,
        alt: "The camp residence in Villa La Angostura with the park and the lenga forest behind it",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/camp-media/residencia-y-parque.png"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Video call with the camp team",
  description,
  url: `${siteConfig.url}${pagePath}`,
  inLanguage: ["es", "en"],
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  areaServed: {
    "@type": "Country",
    name: "Argentina",
  },
  availableLanguage: ["Spanish", "English"],
};

export default function AgendaPage() {
  return (
    <>
      <JsonLd data={schema} />
      <AgendaView />
    </>
  );
}
