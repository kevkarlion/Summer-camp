export type Language = "en" | "es";

export type NavItem = { href: string; label: string };
export type HomeBadge = { text: string; tone: "primary" | "neutral" };
export type HomeLink = { href: string; title: string; line: string };

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
      imageAlt: string;
      imageCaption: string;
    };
    summary: string;
    linksLabel: string;
    links: HomeLink[];
  };
};
