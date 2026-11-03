export type Language = "en" | "es";

export type NavItem = { href: string; label: string };
export type NavGroup = { label: string; hrefs: string[] };
export type Fact = { label: string; value: string };
export type ExperienceColumn = { title: string; text: string };
export type PackingCard = {
  title: string;
  icon: "shirt" | "footprints" | "backpack" | "fileText";
  items: string[];
};
export type GuideGroup = { title: string; items: string[] };

export type Dictionary = {
  nav: {
    items: NavItem[];
    groups: NavGroup[];
    home: string;
    primaryLabel: string;
    openMenu: string;
    closeMenu: string;
    contactCta: string;
    languageLabel: string;
    primaryNavLabel: string;
    mobileNavLabel: string;
  };
  hero: {
    displayLines: string[];
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    factsLabel: string;
    facts: Fact[];
    imageAlt: string;
    imageCaption: string;
  };
  experience: {
    heading: string;
    lead: string;
    columns: ExperienceColumn[];
    link: string;
  };
  day: {
    heading: string;
    lead: string;
    aside: string;
  };
  residence: {
    heading: string;
    lead: string;
    linkDestination: string;
    linkActivities: string;
    galleryAlts: string[];
    galleryCaptions: string[];
    galleryDisclaimer: string;
  };
  about: {
    heading: string;
    promise: string;
    link: string;
    imageAlt: string;
    imageCaption: string;
  };
  packing: {
    heading: string;
    lead: string;
    note: string;
    cards: PackingCard[];
    link: string;
  };
  safety: {
    heading: string;
    lead: string;
    cta: string;
    linkSafety: string;
    linkGuide: string;
    linkFaq: string;
  };
  guide: {
    title: string;
    intro: string;
    close: string;
    groups: GuideGroup[];
    footnote: string;
    footnoteLink: string;
  };
  closing: {
    heading: string;
    text: string;
    cta: string;
  };
};
