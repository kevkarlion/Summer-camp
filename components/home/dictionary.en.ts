import type { Dictionary } from "./dictionary-types";

export const en: Dictionary = {
  nav: {
    items: [
      { href: "/", label: "Home" },
      { href: "/programa-ingles", label: "Programme" },
      { href: "/programa-ingles/adolescentes", label: "13–17 years" },
      { href: "/itinerario-y-actividades", label: "Experiences" },
      { href: "/destino/villa-la-angostura", label: "Destination" },
      { href: "/seguridad-y-coordinacion", label: "Safety" },
      { href: "/guia-familias", label: "Guide" },
      { href: "/preguntas-frecuentes", label: "FAQ" },
      { href: "/sobre-nosotros", label: "About us" },
      { href: "/contacto", label: "Contact" },
    ],
    groups: [
      {
        label: "The experience",
        hrefs: ["/programa-ingles", "/programa-ingles/adolescentes", "/itinerario-y-actividades", "/destino/villa-la-angostura"],
      },
      {
        label: "For families",
        hrefs: ["/seguridad-y-coordinacion", "/guia-familias", "/preguntas-frecuentes"],
      },
      {
        label: "The project",
        hrefs: ["/sobre-nosotros", "/contacto"],
      },
    ],
    home: "Home",
    primaryLabel: "Patagonia Summer Camp 2027, home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    contactCta: "Request information",
    languageLabel: "Language",
    primaryNavLabel: "Main navigation",
    mobileNavLabel: "Mobile navigation",
  },
  hero: {
    displayLines: ["Adventure &", "English Immersion"],
    lead:
      "Patagonia Summer Camp 2027 is a residential English summer camp in Villa La Angostura, Patagonia: 4–12 December 2027.",
    ctaPrimary: "Request availability",
    ctaSecondary: "See the programme",
    factsLabel: "Main camp details",
    facts: [
      { label: "Ages", value: "13–17" },
      { label: "Dates", value: "4–12 Dec 2027" },
      { label: "Format", value: "Residential" },
      { label: "Place", value: "Villa La Angostura" },
    ],
    imageAlt: "Panoramic view of Villa La Angostura: turquoise lake, native forest and mountains",
    imageCaption: "Villa La Angostura, on the shore of Lake Nahuel Huapi.",
  },
  experience: {
    heading: "One experience, three ways in.",
    lead:
      "A residential English camp is language, landscape and group life working together. These are the three things that make a day count.",
    columns: [
      {
        title: "Active learning",
        text: "English in real situations: the daily mission, the instructions on the trail and the conversations around the table give the language a reason to be used.",
      },
      {
        title: "Natural environment",
        text: "Villa La Angostura and Lake Nahuel Huapi: trekking, kayak and the native forest surround every activity with a landscape worth learning in.",
      },
      {
        title: "Community and ages",
        text: "From 13 to 17 years old, in autonomy and teamwork: participants take responsibility, care for the group and share a residential week.",
      },
    ],
    link: "See the programme for teenagers",
  },
  day: {
    heading: "A typical day",
    lead:
      "The routine of a camp day, from the first light to the night activity. Times are approximate and depend on the weather and on how each day is organised.",
    aside: "The final schedule will be communicated with the programme.",
  },
  residence: {
    heading: "Between the lake and the forest.",
    lead:
      "The residence is 2 km from the centre of Villa La Angostura and has 26 hectares of park and native forest, the shore of Lake Nahuel Huapi, a sports area and a wide dining room.",
    linkDestination: "See the destination",
    linkActivities: "See the activities",
    galleryAlts: [
      "Stone and wood residence next to an open area, editorial reference image",
      "Stone and wood building integrated into a forested setting, editorial reference image",
      "Lake at sunset with the Patagonian mountains behind",
    ],
    galleryCaptions: ["The residence and its park", "Stone, wood and forest", "The lake at sunset"],
    galleryDisclaimer:
      "Editorial reference images illustrating the intended experience; they do not show the real residence.",
  },
  about: {
    heading: "From Lapland to Patagonia.",
    promise:
      "Hernán Paulitti, founder of Patagonia Summer Camp, worked in Lapland under the northern lights; in Patagonia he keeps that promise with a camp for teenagers.",
    link: "Read our story",
    imageAlt: "Hernán Paulitti under the northern lights in Lapland",
    imageCaption: "Hernán Paulitti in Lapland, the experience that inspired Patagonia Summer Camp.",
  },
  packing: {
    heading: "What to pack",
    lead: "A short list to prepare the trip. The family guide holds every detail.",
    note: "Do not bring valuable objects or specialised equipment without prior consultation. Wait for the team instructions before buying or hiring equipment for kayak, rafting or other activities.",
    cards: [
      {
        title: "Clothes and warm layers",
        icon: "shirt",
        items: [
          "Underwear and socks for the whole stay",
          "Comfortable t-shirts and trousers",
          "Sportswear",
          "Fleece or warm layer",
          "Waterproof and windproof jacket",
          "Long trousers and comfortable clothes for free time",
          "Pyjamas",
          "Swimsuit",
          "Sun hat and sunglasses",
        ],
      },
      {
        title: "Footwear",
        icon: "footprints",
        items: [
          "Comfortable walking shoes",
          "Trekking footwear, as previously indicated",
          "Sandals or footwear for the residence facilities",
        ],
      },
      {
        title: "Adventure gear",
        icon: "backpack",
        items: [
          "Small backpack",
          "Reusable water bottle",
          "Sunscreen",
          "Insect repellent",
          "Sunglasses",
          "Personal towel and, if needed, an activity towel",
          "Bag for wet or used clothing",
        ],
      },
      {
        title: "Documents and hygiene",
        icon: "fileText",
        items: [
          "Toothbrush and toothpaste",
          "Shampoo and soap",
          "Deodorant",
          "Any other personal products you need",
          "Identity document",
          "Medical cover information",
          "Medication and instructions, if needed",
          "Authorisations and forms requested by the organisation",
        ],
      },
    ],
    link: "Open the full family guide",
  },
  safety: {
    heading: "Coordinated at every stage.",
    lead:
      "A team accompanies the experience, activities are assessed against the conditions, and the emergency, insurance and communication procedures are confirmed before the camp.",
    cta: "See the guide for families",
    linkSafety: "About safety and coordination",
    linkGuide: "Open the full family guide",
    linkFaq: "Read the frequently asked questions",
  },
  guide: {
    title: "Family guide",
    intro:
      "The operational guidance families need before the camp. Pending procedures are confirmed before the experience.",
    close: "Close",
    groups: [
      {
        title: "Personal money",
        items: [
          "A moderate amount of money for small personal expenses is recommended, if needed.",
          "Valuable objects, expensive devices, jewellery and unnecessary items should not be brought.",
          "The procedures for money, objects and lost belongings will be communicated before the camp.",
        ],
      },
      {
        title: "Phone custody",
        items: [
          "The use rules will prioritise participation, rest and face-to-face interaction, without cutting off family communication.",
          "The final schedules and the custody rules will be communicated before the camp.",
        ],
      },
      {
        title: "Living together",
        items: [
          "Respect peers, the team and the providers; follow safety instructions; care for the facilities, the equipment and the nature; and respect the schedules and the coexistence rules.",
          "Harassment, discrimination, intimidation, violence and the consumption of alcohol, drugs, tobacco or any other conduct that compromises safety or wellbeing are not permitted.",
        ],
      },
      {
        title: "Medical information and emergency contacts",
        items: [
          "Families must report allergies, medical conditions, medication and instructions, dietary restrictions, activity restrictions, medical cover and emergency contacts.",
          "Medication must arrive identified and accompanied by clear instructions.",
          "The procedure for storage, administration and supervision will be communicated before the camp.",
          "Families will be contacted as soon as possible when a medical or safety situation requires it.",
        ],
      },
      {
        title: "Preparing the trip",
        items: [
          "The coordination team receives participants at the place and time communicated in advance. On arrival, the team organises the luggage, introduces the coordinators and the facilities and explains the coexistence rules.",
          "Each family arranges and pays for its own transport to Villa La Angostura. The coordination of the return journeys will be communicated before the camp.",
          "The coordination centralises the updates and the communication channels will be communicated before the experience.",
          "The emergency procedure will cover family communication, access to medical assistance and the responsibilities of coordinators and providers.",
        ],
      },
    ],
    footnote: "The complete family guide stays available on its own page.",
    footnoteLink: "Open the full family guide",
  },
  closing: {
    heading: "How do they live the week?",
    text: "In Villa La Angostura, every family can ask about the programme, the dates and the availability for teenagers aged 13 to 17.",
    cta: "Request availability",
  },
};
