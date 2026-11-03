import type { Metadata } from "next";

import { AboutSnippet } from "@/components/home/AboutSnippet";
import { ClosingSection } from "@/components/home/ClosingSection";
import { DaySection } from "@/components/home/DaySection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { FamilyGuideModal } from "@/components/home/FamilyGuideModal";
import { HomeHero } from "@/components/home/HomeHero";
import { PackingList } from "@/components/home/PackingList";
import { ResidenceSection } from "@/components/home/ResidenceSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

import "@/components/home/home-core.css";
import "@/components/home/home-hero.css";
import "@/components/home/home-journey.css";
import "@/components/home/home-closing.css";
import "@/components/home/home-tablet.css";
import "@/components/home/home-mobile.css";
// The shared daily-routine timeline (components/site/DayTimeline.tsx) keeps its styles in the
// programme stylesheet; the Home imports them to render the same scroll-driven component.
import "@/components/site/routes/programa-ingles.css";

const description =
  "Summer camp residencial para adolescentes de 13 a 17 años en Villa La Angostura: inglés por inmersión, naturaleza y aventura del 4 al 12 de diciembre de 2027.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Patagonia Summer Camp 2027 | Inmersión en Inglés & Aventura",
  description,
  keywords: ["summer camp patagonia", "campamento de ingles argentina", "summer camp villa la angostura"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Patagonia Summer Camp 2027 | Inmersión en Inglés & Aventura",
    description,
    url: "/",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [{ url: "/og/summer-camp-2027.png", width: 1200, height: 630, alt: "Patagonia Summer Camp 2027" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patagonia Summer Camp 2027",
    description,
    images: ["/og/summer-camp-2027.png"],
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Event",
        name: "Patagonia Summer Camp 2027",
        description,
        startDate: "2027-12-04",
        endDate: "2027-12-12",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        audience: {
          "@type": "EducationalAudience",
          educationalRange: "13-17 años",
        },
        location: {
          "@type": "Place",
          name: "Residencia en Villa La Angostura",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Villa La Angostura",
            addressRegion: "Neuquén",
            addressCountry: "AR",
          },
        },
        organizer: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      },
      {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/og/summer-camp-2027.png`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Villa La Angostura",
          addressRegion: "Neuquén",
          addressCountry: "AR",
        },
      },
    ],
  };

  return (
    <main id="main-content" className="home-page">
      <HomeHero />

      <ExperienceSection />

      <DaySection />

      <ResidenceSection />

      <AboutSnippet />

      <PackingList />

      <FamilyGuideModal />

      <ClosingSection />

      <JsonLd data={jsonLd} />
    </main>
  );
}
