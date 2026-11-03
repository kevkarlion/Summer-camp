import type { Dictionary } from "./dictionary-types";

export const es: Dictionary = {
  nav: {
    items: [
      { href: "/", label: "Inicio" },
      { href: "/programa", label: "Programa" },
      { href: "/residencia", label: "Residencia" },
      { href: "/nosotros", label: "Nosotros" },
      { href: "/familias", label: "Familias" },
    ],
    primaryLabel: "Patagonia Summer Camp 2027, inicio",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    contactCta: "Consultar información",
    languageLabel: "Idioma",
    primaryNavLabel: "Navegación principal",
    mobileNavLabel: "Navegación móvil",
  },
  home: {
    hero: {
      titleLines: ["Inmersión en inglés", "en Patagonia"],
      subtitle:
        "Un campamento residencial de inmersión en inglés para adolescentes de 13 a 17 años, en Villa La Angostura, Patagonia.",
      badges: [
        { text: "4 al 12 de diciembre de 2027", tone: "primary" },
        { text: "Villa La Angostura", tone: "neutral" },
      ],
      cta: "Consultar disponibilidad",
      factsLabel: "Datos del campamento",
      facts: [
        { label: "Años", value: "13–17" },
        { label: "2027", value: "4–12 dic." },
        { label: "Formato", value: "Residencial" },
        { label: "Patagonia", value: "Villa La Angostura" },
      ],
      imageAlt: "Vista panorámica de Villa La Angostura: lago turquesa, bosque nativo y montañas",
      imageCaption: "Villa La Angostura, a orillas del lago Nahuel Huapi.",
    },
    summary:
      "Patagonia Summer Camp 2027 es un campamento residencial de inmersión en inglés en Villa La Angostura, Patagonia. Del 4 al 12 de diciembre de 2027, los adolescentes de 13 a 17 años conviven y usan el inglés en las situaciones reales de la vida de campamento: la misión diaria, las indicaciones en el sendero, las conversaciones en la mesa y las decisiones del grupo. El trekking, el kayak y el bosque nativo de la residencia son el escenario donde el idioma tiene una razón de uso.",
    linksLabel: "Explorá el campamento",
    links: [
      {
        href: "/programa",
        title: "Programa",
        context: "Conocé la rutina diaria de inmersión en inglés, las actividades al aire libre y cómo cada experiencia da confianza.",
        seePage: "Ver página",
      },
      {
        href: "/residencia",
        title: "Residencia",
        context: "Explorá los espacios compartidos y las 26 hectáreas de parque y bosque nativo que rodean la residencia.",
        seePage: "Ver página",
      },
      {
        href: "/nosotros",
        title: "Nosotros",
        context: "Conocé a Hernán Paulitti y descubrí la experiencia que dio origen a este campamento.",
        seePage: "Ver página",
      },
      {
        href: "/familias",
        title: "Familias",
        context: "Encontrá respuestas sobre el equipaje, la convivencia, la coordinación de seguridad y lo que necesitan las familias.",
        seePage: "Ver página",
      },
    ],
  },
};
