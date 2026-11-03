import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

import { nosotrosCopy } from "./copy";
import { NosotrosView } from "./nosotros-view";

import "./nosotros.css";

const pagePath = "/nosotros";
const { title, description } = nosotrosCopy.en.meta;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  keywords: ["Hernán Paulitti", "fundador Patagonia Summer Camp", "Hernán Paulitti inglés"],
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
        url: "/camp-media/hernan-bajo-las-auroras.webp",
        width: 1200,
        height: 630,
        alt: "Real photograph of Hernán Paulitti under the northern lights in Lapland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/camp-media/hernan-bajo-las-auroras.webp"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hernán Paulitti",
  alternateName: "Hernan Paulitti",
  jobTitle: "Founder",
  description,
  url: `${siteConfig.url}${pagePath}`,
  worksFor: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  knowsAbout: ["Language immersion", "Educational camps", "Adventure tourism"],
};

export default function NosotrosPage() {
  return (
    <>
      <JsonLd data={schema} />
      <NosotrosView />
    </>
  );
}
