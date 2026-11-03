import type { Language } from "@/components/home/dictionary";

export type NosotrosCopy = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    titleLines: string[];
    lead: string;
    image: { src: string; alt: string };
  };
  biography: {
    heading: string;
    aside: string;
    paragraphs: string[];
    photos: { src: string; alt: string; caption: string }[];
  };
  values: {
    heading: string;
    lead: string;
    aside: string;
    items: { title: string; text: string }[];
  };
  interests: {
    heading: string;
    lead: string;
    items: string[];
  };
  cta: {
    heading: string;
    text: string;
    button: string;
  };
};

const en: NosotrosCopy = {
  meta: {
    title: "Hernán Paulitti | Patagonia Summer Camp 2027",
    description:
      "The story of Hernán Paulitti, founder of Patagonia Summer Camp: English in Escobar and Bologna, Ireland and England, Lapland at -35 °C and El Chaltén.",
  },
  hero: {
    titleLines: ["From Lapland", "to Patagonia"],
    lead: "Hernán Paulitti, founder of Patagonia Summer Camp, worked in Lapland under the northern lights; in Patagonia he keeps that promise with a camp for teenagers.",
    image: {
      src: "/camp-media/hernan-bajo-las-auroras.webp",
      alt: "Real photograph of Hernán Paulitti under the northern lights in Lapland",
    },
  },
  biography: {
    heading: "Lapland to Patagonia",
    aside: "Where the idea came from",
    paragraphs: [
      "In 2011, Hernán studied English at the Instituto de Formación Docente y Técnica N° 55 in Escobar, Buenos Aires. He then taught English in Argentina for many years.",
      "He moved to Bologna, Italy, where he studied Italian at Academia Lingue and worked with Italian agritech, design and technology companies, teaching English to architects, designers, operators and other professionals.",
      "He organised English learning trips for adults and teenagers to Ireland and England, and worked as a teacher and activity leader in summer camps in northern Italy.",
      "He then worked in Lapland, Finland, collaborating with Finnish tourism companies. He guided visitors under the northern lights and took huskies into snowy forests at -35°C.",
      "After spending a week camping in El Chaltén, he promised himself to return to Patagonia and share an experience that would help others explore other worlds through the language.",
    ],
    photos: [
      {
        src: "/camp-media/grupo-caminando.webp",
        alt: "Real camp photograph: a group walking with backpacks along a forest trail",
        caption: "The group walking through the native forest.",
      },
      {
        src: "/camp-media/senderismo-con-villa-al-fondo.webp",
        alt: "Real camp photograph: a forest trail with Villa La Angostura visible below",
        caption: "A trail through the forest above Villa La Angostura.",
      },
      {
        src: "/camp-media/mirando-el-valle.webp",
        alt: "Real camp photograph: a participant on fallen trunks looking over Villa La Angostura",
        caption: "A participant looking over Villa La Angostura from the forest.",
      },
    ],
  },
  values: {
    heading: "A mission to share Patagonia",
    lead: "Patagonia Summer Camp keeps that promise by valuing the region through friendship, the language, respect for local culture and curiosity about nature.",
    aside: "What guides our work",
    items: [
      {
        title: "Learn with purpose",
        text: "Every experience offers a reason to observe, take part, talk and discover.",
      },
      {
        title: "Value the territory",
        text: "Friendship, the language, respect for local culture and curiosity about nature guide the mission.",
      },
      {
        title: "Share clarity and energy",
        text: "Hernán wants to share with teenagers the clarity, the energy and the authenticity he finds in the mountains and in outdoor activities.",
      },
    ],
  },
  interests: {
    heading: "Clarity, energy and authenticity",
    lead: "Hernán wants to share that feeling with the teenagers who take part in the programme.",
    items: [
      "Training (CrossFit)",
      "Yoga",
      "Cycling",
      "Music production",
      "The mountains",
      "Outdoor activities",
    ],
  },
  cta: {
    heading: "An open eye for learning outside",
    text: "A space to discover what it means to learn outdoors, together and with purpose.",
    button: "Know our methodology",
  },
};

const es: NosotrosCopy = {
  meta: {
    title: "Hernán Paulitti | Patagonia Summer Camp 2027",
    description:
      "La historia de Hernán Paulitti, fundador de Patagonia Summer Camp: inglés en Escobar y Bolonia, Irlanda e Inglaterra, Laponia a -35 °C y El Chaltén.",
  },
  hero: {
    titleLines: ["De Laponia", "a la Patagonia"],
    lead: "Hernán Paulitti, fundador de Patagonia Summer Camp, trabajó en Laponia bajo las auroras boreales; en Patagonia mantiene esa promesa con un campamento para adolescentes.",
    image: {
      src: "/camp-media/hernan-bajo-las-auroras.webp",
      alt: "Fotografía real de Hernán Paulitti bajo las auroras boreales en Laponia",
    },
  },
  biography: {
    heading: "Laponia a Patagonia",
    aside: "El origen de la idea",
    paragraphs: [
      "En 2011, Hernán estudió inglés en el Instituto de Formación Docente y Técnica N° 55 de Escobar, Buenos Aires. Después enseñó inglés en Argentina durante muchos años.",
      "Se mudó a Bolonia, Italia, donde estudió italiano en Academia Lingue y trabajó con empresas italianas de agritech, diseño y tecnología, enseñando inglés a arquitectos, diseñadores, operadores y otros profesionales.",
      "Organizó viajes de aprendizaje de inglés para adultos y adolescentes a Irlanda e Inglaterra, y trabajó como profesor y responsable de actividades en campamentos de verano del norte de Italia.",
      "Luego trabajó en Laponia, Finlandia, colaborando con empresas de turismo finlandesas. Guió visitantes bajo las auroras boreales y llevó huskies a bosques nevados a -35°C.",
      "Después de pasar una semana acampando en El Chaltén, se prometió a sí mismo volver a Patagonia y compartir una experiencia que ayudara a otros a explorar otros mundos a través del idioma.",
    ],
    photos: [
      {
        src: "/camp-media/grupo-caminando.webp",
        alt: "Fotografía real del campamento: grupo caminando con mochilas por un sendero de bosque",
        caption: "El grupo caminando por el bosque nativo.",
      },
      {
        src: "/camp-media/senderismo-con-villa-al-fondo.webp",
        alt: "Fotografía real del campamento: sendero de bosque con Villa La Angostura al fondo",
        caption: "Un sendero por el bosque sobre Villa La Angostura.",
      },
      {
        src: "/camp-media/mirando-el-valle.webp",
        alt: "Fotografía real del campamento: participante sobre troncos caídos mirando Villa La Angostura",
        caption: "Un participante mira Villa La Angostura desde el bosque.",
      },
    ],
  },
  values: {
    heading: "Una misión para compartir la Patagonia",
    lead: "Patagonia Summer Camp cumple esa promesa valorando la región a través de la amistad, el idioma, el respeto por la cultura local y la curiosidad por la naturaleza.",
    aside: "Lo que guía nuestro trabajo",
    items: [
      {
        title: "Aprender con propósito",
        text: "Cada experiencia ofrece una razón para observar, participar, conversar y descubrir.",
      },
      {
        title: "Valorar el territorio",
        text: "La amistad, el idioma, el respeto por la cultura local y la curiosidad por la naturaleza guían la misión.",
      },
      {
        title: "Compartir claridad y energía",
        text: "Hernán quiere compartir con los adolescentes la claridad, la energía y la autenticidad que encuentra en la montaña y las actividades outdoors.",
      },
    ],
  },
  interests: {
    heading: "Claridad, energía y autenticidad",
    lead: "Quiere compartir esa sensación con los adolescentes que participan del programa.",
    items: [
      "Entrenamiento (CrossFit)",
      "Yoga",
      "Ciclismo",
      "Producción musical",
      "Las montañas",
      "Actividades al aire libre",
    ],
  },
  cta: {
    heading: "El explorador",
    text: "Un espacio para descubrir qué significa aprender afuera, juntos y con propósito.",
    button: "Conocer nuestra metodología",
  },
};

export const nosotrosCopy: Record<Language, NosotrosCopy> = { en, es };
