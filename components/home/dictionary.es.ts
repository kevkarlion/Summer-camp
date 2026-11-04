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
  footer: {
    tagline: "Inmersión en inglés en la Patagonia para adolescentes de 13 a 17 años.",
    exploreTitle: "Explorá",
    campTitle: "El campamento",
    actionTitle: "¿La Patagonia los espera?",
    actionBody: "Consultanos por fechas, actividades, alojamiento e inscripción.",
    actionCta: "Consultar información",
    facts: [
      { label: "Lugar", value: "Villa La Angostura, Patagonia" },
      { label: "Fechas", value: "4–12 de diciembre de 2027" },
      { label: "Edades", value: "13 a 17 años" },
      { label: "Modalidad", value: "Residencial" },
    ],
    copyright: "© 2027 Patagonia Summer Camp. Todos los derechos reservados.",
    closing: "Diseñado para familias que aprenden explorando.",
    navLabel: "Navegación del pie de página",
  },
  home: {
    hero: {
      titleLines: ["Inmersión en inglés", "en la Patagonia"],
      subtitle:
        "Un campamento residencial de inmersión en inglés para adolescentes de 13 a 17 años, en Villa La Angostura, Patagonia.",
      badges: [
        { text: "4 al 12 de diciembre de 2027", tone: "primary" },
        { text: "Villa La Angostura", tone: "neutral" },
      ],
      cta: "Consultar disponibilidad",
      secondaryCta: "Ver el programa",
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
    where: {
      title: "Dónde está Villa La Angostura",
      lead: "En el Neuquén, en la Patagonia argentina, a orillas del lago Nahuel Huapi y entre los cerros de la cordillera.",
      points: [
        {
          label: "Al norte",
          text: "San Martín de los Andes, la capital de los lagos de la provincia.",
        },
        {
          label: "Al sur",
          text: "Bariloche, la ciudad de los lagos, sobre la misma orilla.",
        },
        {
          label: "Al oeste",
          text: "El Cerro López y la cordillera, el escenario natural de cada jornada.",
        },
      ],
      residence:
        "La residencia queda a 2 km del centro del pueblo, con 26 hectáreas de parque y bosque nativo alrededor.",
      mapLabel: "Mapa esquemático de la ubicación de Villa La Angostura",
      mapNote: "Mapa esquemático. No está a escala.",
      map: {
        town: "Villa La Angostura",
        north: "San Martín de los Andes",
        south: "Bariloche",
        west: "Cerro López",
        lake: "Lago Nahuel Huapi",
        range: "La cordillera",
      },
    },
    field: {
      title: "Veni por la aventura. Quedate por el inglés.",
      lead: "Una semana en Villa La Angostura donde el inglés se usa en las situaciones reales de la vida de campamento.",
      points: [
        {
          label: "Inglés",
          text: "La misión diaria, las indicaciones en el sendero, las conversaciones en la mesa y las decisiones del grupo.",
        },
        {
          label: "Aventura",
          text: "Trekking y kayak, con el bosque nativo de la residencia como escenario.",
        },
        {
          label: "Convivencia",
          text: "Adolescentes de 13 a 17 años viven juntos una semana, con 26 hectáreas de parque y bosque nativo alrededor de la residencia.",
        },
      ],
      link: "Ver el programa",
      photos: [
        {
          src: "/camp-media/fogata-en-el-bosque.webp",
          alt: "Fotografía real del campamento: fogata con marshmallows en el bosque",
          caption: "La fogata al final del día.",
        },
        {
          src: "/camp-media/grupo-caminando.webp",
          alt: "Fotografía real del campamento: grupo caminando con mochilas por un sendero de bosque",
          caption: "Salir a caminar por la mañana.",
        },
        {
          src: "/camp-media/kayak-en-el-lago.webp",
          alt: "Fotografía real del campamento: grupo en kayaks sobre el lago con montañas de fondo",
          caption: "El lago como aula.",
        },
      ],
    },
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
