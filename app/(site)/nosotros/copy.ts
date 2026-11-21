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
    titleLines: ["From Lapland", "to the Patagonia"],
    lead: "Hernán Paulitti, founder of Patagonia Summer Camp, worked in Lapland under the northern lights; in the Patagonia he keeps that promise with a camp for teenagers.",
    image: {
      src: "/camp-media/hernan-bajo-las-auroras.webp",
      alt: "Real photograph of Hernán Paulitti under the northern lights in Lapland",
    },
  },
  biography: {
    heading: "About Hernán",
    aside: "From teaching English to sharing new worlds",
    paragraphs: [
      "In 2011, Hernán studied English at the Instituto de Formación Docente y Técnica N° 55 in Escobar, Buenos Aires. He then taught English in Argentina for many years.",
      "He moved to Bologna, Italy, where he studied Italian at Academya Lingue and worked with Italian design and technology companies, teaching English to architects, designers, operators and other professionals.",
      "Throughout his journey, he also organised English learning trips for adults and teenagers to Ireland and England, and worked as a teacher and activity leader in summer camps in northern Italy.",
      "He currently continues developing education and tourism projects in Italy, accompanying teenagers and adults on study trips to Ireland and England. These experiences allow him to combine language teaching with travel, cultural exchange and the discovery of new environments.",
      "Later, his path led him to Lapland, Finland, where he continues collaborating with local tourism companies. There he guides visitors from around the world beneath the northern lights and leads huskies experiences through snowy forests, even at temperatures of -35 °C.",
      "He also currently collaborates with luxury resorts and tourism companies in Finland, working closely with international hospitality, attention-to-detail and tourism-service standards. His experience in the Nordic environment has also shaped his understanding of safety: through planning, prevention, responsibility and special attention to people's wellbeing.",
      "After a week of camping in the mountains of El Chaltén back in 2015, he promised himself to return to Patagonia and share an experience that would help others explore new worlds through language, nature and encounters with other cultures.",
      "This is how Patagonia Summer Camp “Explore Beyond” was born: from the union of his experience in education, travel and tourism, and the desire to create meaningful experiences for new generations.",
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
    lead: "Hernán Paulitti, fundador de Patagonia Summer Camp, trabajó en Laponia bajo las auroras boreales; en la Patagonia mantiene esa promesa con un campamento para adolescentes.",
    image: {
      src: "/camp-media/hernan-bajo-las-auroras.webp",
      alt: "Fotografía real de Hernán Paulitti bajo las auroras boreales en Laponia",
    },
  },
  biography: {
    heading: "Sobre Hernán",
    aside: "De la enseñanza del inglés a compartir nuevos mundos",
    paragraphs: [
      "En 2011, Hernán estudió inglés en el Instituto de Formación Docente y Técnica N° 55 de Escobar, Buenos Aires. Después enseñó inglés en Argentina durante muchos años.",
      "Se mudó a Bolonia, Italia, donde estudió italiano en Academya Lingue y trabajó con empresas italianas de diseño y tecnología, enseñando inglés a arquitectos, diseñadores, operadores y otros profesionales.",
      "A lo largo de su recorrido, también organizó viajes de aprendizaje de inglés para adultos y adolescentes a Irlanda e Inglaterra, y trabajó como profesor y responsable de actividades en campamentos de verano al norte de Italia.",
      "Actualmente continúa desarrollando proyectos de educación y turismo en Italia, acompañando a adolescentes y adultos en viajes de estudio a Irlanda e Inglaterra. Estas experiencias le permiten combinar la enseñanza de idiomas con los viajes, el intercambio cultural y el descubrimiento de nuevos entornos.",
      "Más adelante, su camino lo llevó hasta Laponia, Finlandia, donde continúa colaborando con empresas de turismo locales. Allí guía a visitantes de todo el mundo bajo auroras boreales y acompaña experiencias con huskies a través de bosques nevados, incluso con temperaturas de -35 °C.",
      "Actualmente también colabora con resorts de lujo y empresas del sector turístico en Finlandia, trabajando de cerca con estándares internacionales de hospitalidad, atención al detalle y organización de servicios turísticos. Su experiencia en el entorno nórdico también ha influido en su manera de entender la seguridad: a través de la planificación, la prevención, la responsabilidad y una atención especial al bienestar de las personas.",
      "Después de una semana de acampe en las montanas de El Chaltén allá por el 2015, se prometió volver a la Patagonia y compartir una experiencia que ayudara a otros a explorar nuevos mundos a través del idioma, la naturaleza y el encuentro con otras culturas.",
      "Así nace Patagonia Summer Camp “Explore Beyond”: de la unión entre su recorrido por la educación, los viajes y el turismo, y el deseo de crear experiencias significativas para las nuevas generaciones.",
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
  cta: {
    heading: "El explorador",
    text: "Un espacio para descubrir qué significa aprender afuera, juntos y con propósito.",
    button: "Conocer nuestra metodología",
  },
};

export const nosotrosCopy: Record<Language, NosotrosCopy> = { en, es };
