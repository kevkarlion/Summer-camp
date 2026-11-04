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
  footer: {
    tagline: "English immersion in the Patagonia for teenagers aged 13 to 17.",
    exploreTitle: "Explore",
    campTitle: "The camp",
    actionTitle: "Ready for the Patagonia?",
    actionBody: "Ask us about dates, activities, accommodation and how to enrol.",
    actionCta: "Request information",
    facts: [
      { label: "Place", value: "Villa La Angostura, Patagonia" },
      { label: "Dates", value: "4–12 December 2027" },
      { label: "Ages", value: "13–17 years" },
      { label: "Format", value: "Residential" },
    ],
    copyright: "© 2027 Patagonia Summer Camp. All rights reserved.",
    closing: "Designed for families who learn by exploring.",
    navLabel: "Footer navigation",
  },
  home: {
    hero: {
      titleLines: ["English immersion", "in the Patagonia"],
      subtitle:
        "A residential English immersion camp for teenagers aged 13 to 17, in Villa La Angostura, Patagonia.",
      badges: [
        { text: "4–12 December 2027", tone: "primary" },
        { text: "Villa La Angostura", tone: "neutral" },
      ],
      cta: "Request availability",
      secondaryCta: "See the programme",
      factsLabel: "Camp essentials",
      facts: [
        { label: "Ages", value: "13–17" },
        { label: "Dates", value: "4–12 December 2027" },
        { label: "Format", value: "Residential" },
        { label: "Place", value: "Villa La Angostura" },
      ],
      imageAlt: "Panoramic view of Villa La Angostura: turquoise lake, native forest and mountains",
      imageCaption: "Villa La Angostura, on the shore of Lake Nahuel Huapi.",
    },
    where: {
      title: "Where Villa La Angostura is",
      lead: "In Neuquén, in the Argentine Patagonia, on the shore of Lake Nahuel Huapi and among the mountains of the Andes.",
      points: [
        {
          label: "To the north",
          text: "San Martín de los Andes, the capital of the province's lakes.",
        },
        {
          label: "To the south",
          text: "Bariloche, the city of the lakes, on the same shore.",
        },
        {
          label: "To the west",
          text: "Cerro López and the mountain range, the natural setting of every day.",
        },
      ],
      residence:
        "The residence sits 2 km from the town centre, with 26 hectares of park and native forest around it.",
      mapLabel: "Schematic map of the location of Villa La Angostura",
      mapNote: "Schematic map. Not to scale.",
      map: {
        town: "Villa La Angostura",
        north: "San Martín de los Andes",
        south: "Bariloche",
        west: "Cerro López",
        lake: "Lake Nahuel Huapi",
        range: "The Andes",
      },
    },
    field: {
      title: "Come for the adventure. Stay for the English.",
      lead: "One week in Villa La Angostura where English is used in the real situations of camp life.",
      points: [
        {
          label: "English",
          text: "The daily mission, the instructions on the trail, the conversations around the table and the decisions of the group.",
        },
        {
          label: "Adventure",
          text: "Trekking and kayak, with the native forest of the residence as the setting.",
        },
        {
          label: "Life together",
          text: "Teenagers aged 13 to 17 live together for a week, with 26 hectares of park and native forest around the residence.",
        },
      ],
      link: "See the programme",
      photos: [
        {
          src: "/camp-media/fogata-en-el-bosque.webp",
          alt: "Real camp photograph: a campfire with marshmallows in the woods",
          caption: "The campfire at the end of the day.",
        },
        {
          src: "/camp-media/grupo-caminando.webp",
          alt: "Real camp photograph: the group walking with backpacks along a forest trail",
          caption: "Walking out in the morning.",
        },
        {
          src: "/camp-media/kayak-en-el-lago.webp",
          alt: "Real camp photograph: a group kayaking on the lake with the mountains behind",
          caption: "The lake as a classroom.",
        },
      ],
    },
    linksLabel: "Explore the camp",
    links: [
      {
        href: "/programa",
        title: "Programme",
        context: "See the daily English immersion routine, the outdoor activities and how each experience builds confidence.",
        seePage: "See page",
      },
      {
        href: "/residencia",
        title: "Residence",
        context: "Explore the shared spaces and the 26 hectares of park and native forest surrounding the residence.",
        seePage: "See page",
      },
      {
        href: "/nosotros",
        title: "About us",
        context: "Meet Hernán Paulitti and discover the experience that shaped this camp.",
        seePage: "See page",
      },
      {
        href: "/familias",
        title: "Families",
        context: "Find answers about packing, shared living, safety coordination and what families need to know.",
        seePage: "See page",
      },
    ],
  },
};
