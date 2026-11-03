import type { Dictionary } from "./dictionary-types";

export const en: Dictionary = {
  nav: {
    items: [
      { href: "/", label: "Home" },
      { href: "/programa", label: "Programme" },
      { href: "/residencia", label: "Residence" },
      { href: "/nosotros", label: "About us" },
      { href: "/familias", label: "Families" },
    ],
    primaryLabel: "Patagonia Summer Camp 2027, home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    contactCta: "Request information",
    languageLabel: "Language",
    primaryNavLabel: "Main navigation",
    mobileNavLabel: "Mobile navigation",
  },
  home: {
    hero: {
      titleLines: ["English immersion", "in Patagonia"],
      subtitle:
        "A residential English immersion camp for teenagers aged 13 to 17, in Villa La Angostura, Patagonia.",
      badges: [
        { text: "4–12 December 2027", tone: "primary" },
        { text: "Villa La Angostura", tone: "neutral" },
      ],
      cta: "Request availability",
      imageAlt: "Panoramic view of Villa La Angostura: turquoise lake, native forest and mountains",
      imageCaption: "Villa La Angostura, on the shore of Lake Nahuel Huapi.",
    },
    summary:
      "Patagonia Summer Camp 2027 is a residential English immersion camp in Villa La Angostura, Patagonia. From 4 to 12 December 2027, teenagers aged 13 to 17 live together and use English in the real situations of camp life: the daily mission, the instructions on the trail, the conversations around the table and the decisions of the group. Trekking, kayak and the native forest of the residence are the setting where the language has a reason to be used.",
    linksLabel: "Explore the camp",
    links: [
      {
        href: "/programa",
        title: "Programme",
        line: "How English is learned by doing: the daily routine, the activities and the method.",
      },
      {
        href: "/residencia",
        title: "Residence",
        line: "26 hectares of park and native forest, 2 km from the centre of Villa La Angostura, on the shore of Lake Nahuel Huapi.",
      },
      {
        href: "/nosotros",
        title: "About us",
        line: "Hernán Paulitti and the reason this camp exists.",
      },
      {
        href: "/familias",
        title: "Families",
        line: "Frequent questions, what to pack, the rules of living together and the family guide.",
      },
    ],
  },
};
