export type Language = "en" | "es";

export type NavItem = { href: string; label: string };
export type HomeBadge = { text: string; tone: "primary" | "neutral" };
export type HomeFact = { label: string; value: string };
export type HomeLink = { href: string; title: string; context: string; seePage: string };

export type FooterCopy = {
  tagline: string;
  exploreTitle: string;
  campTitle: string;
  actionTitle: string;
  actionBody: string;
  actionCta: string;
  facts: HomeFact[];
  copyright: string;
  closing: string;
  navLabel: string;
};

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
    where: {
      title: string;
      lead: string;
      points: { label: string; text: string }[];
      residence: string;
      mapLabel: string;
      mapNote: string;
      map: {
        town: string;
        north: string;
        south: string;
        west: string;
        lake: string;
        range: string;
      };
    };
    field: {
      title: string;
      lead: string;
      points: { label: string; text: string }[];
      link: string;
      photos: { src: string; alt: string; caption: string }[];
    };
    linksLabel: string;
    links: HomeLink[];
  };
  footer: FooterCopy;
};
