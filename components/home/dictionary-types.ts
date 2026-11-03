export type Language = "en" | "es";

export type NavItem = { href: string; label: string };
export type HomeBadge = { text: string; tone: "primary" | "neutral" };
export type HomeFact = { label: string; value: string };
export type HomeLink = { href: string; title: string; context: string; seePage: string };

export type Dictionary = {
  nav: {
    items: NavItem[];
    primaryLabel: string;
    openMenu: string;
    closeMenu: string;
    contactCta: string;
    languageLabel: string;
    primaryNavLabel: string;
    mobileNavLabel: string;
  };
  home: {
    hero: {
      titleLines: string[];
      subtitle: string;
      badges: HomeBadge[];
      cta: string;
    secondaryCta: string;
      factsLabel: string;
      facts: HomeFact[];
      imageAlt: string;
      imageCaption: string;
    };
    summary: string;
    summaryImage: { src: string; alt: string; caption: string };
    gallery: { label: string; items: { src: string; alt: string; caption: string }[] };
    linksLabel: string;
    links: HomeLink[];
  };
};
