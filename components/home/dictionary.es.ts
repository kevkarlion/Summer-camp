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
        line: "Cómo se aprende inglés haciendo: la rutina diaria, las actividades y el método.",
      },
      {
        href: "/residencia",
        title: "Residencia",
        line: "26 hectáreas de parque y bosque nativo, a 2 km del centro de Villa La Angostura, a orillas del lago Nahuel Huapi.",
      },
      {
        href: "/nosotros",
        title: "Nosotros",
        line: "Hernán Paulitti y el motivo de este campamento.",
      },
      {
        href: "/familias",
        title: "Familias",
        line: "Preguntas frecuentes, qué llevar, las normas de convivencia y la guía familiar.",
      },
    ],
  },
};
