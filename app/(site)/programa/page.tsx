import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

import { programaCopy } from "./copy";
import { ProgramaView } from "./programa-view";

import "./programa.css";
import "@/components/site/routes/programa-ingles.css";

const pagePath = "/programa";
const { title, description } = programaCopy.en.meta;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  keywords: ["inmersión inglés verano", "aprender inglés haciendo", "learning by doing patagonia"],
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
  "@type": "EducationalOccupationalProgram",
  name: title,
  description,
  url: `${siteConfig.url}${pagePath}`,
  inLanguage: "en",
  educationalProgramType: "English language immersion",
  programType: "Residential outdoor summer programme",
  startDate: "2027-12-04",
  endDate: "2027-12-12",
  audience: { "@type": "EducationalAudience", educationalRange: "13-17 years" },
  provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  location: {
    "@type": "Place",
    name: "Residence in Villa La Angostura",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Villa La Angostura",
      addressRegion: "Neuquén",
      addressCountry: "AR",
    },
  },
  teaches: ["Spoken English", "Communication", "Teamwork", "Autonomy"],
};

export default function ProgramaPage() {
  return (
    <>
      <JsonLd data={schema} />
      <ProgramaView />
    </>
  );
}
