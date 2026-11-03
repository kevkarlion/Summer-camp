import type { Metadata, Viewport } from "next";
import { Barlow_Condensed } from "next/font/google";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { siteConfig } from "@/lib/site";
import "./globals.css";
import "@/components/site/site.css";
import "@/components/site/site-responsive.css";
import "@/components/site/site-sections.css";

const homeDisplay = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-home-display",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1320",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: "Summer camp de inmersión en inglés y aventura en Villa La Angostura, Patagonia Argentina.",
  applicationName: siteConfig.name,
  category: "education",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: "Summer camp de inmersión en inglés y aventura en Villa La Angostura, Patagonia Argentina.",
    images: [{ url: "/og/summer-camp-2027.png", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: "Summer camp de inmersión en inglés y aventura en Villa La Angostura, Patagonia Argentina.",
    images: ["/og/summer-camp-2027.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Patagonia Summer Camp 2027",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es-AR">
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className={homeDisplay.variable}>
        <SmoothScrollProvider>
          <a
            href="#main-content"
            className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-brand-secondary px-4 py-2 text-sm font-semibold text-ink transition-transform focus:translate-y-0"
          >
            Saltar al contenido
          </a>
          <SiteHeader />
          {children}
          <SiteFooter />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
