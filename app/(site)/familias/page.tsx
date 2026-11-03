import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

import { familiasCopy } from "./copy";
import { FamiliasView } from "./familias-view";

import "./familias.css";

const pagePath = "/familias";
const { title, description } = familiasCopy.en.meta;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  keywords: ["guía familias summer camp", "equipamiento summer camp", "preguntas frecuentes campamento"],
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
        url: "/camp-media/grupo-caminando.webp",
        width: 1200,
        height: 630,
        alt: "Real camp photograph: a group walking with backpacks along a forest trail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/camp-media/grupo-caminando.webp"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  name: title,
  description,
  url: `${siteConfig.url}${pagePath}`,
  inLanguage: "en",
  mainEntity: familiasCopy.en.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FamiliasPage() {
  return (
    <>
      <JsonLd data={schema} />
      <FamiliasView />
    </>
  );
}
