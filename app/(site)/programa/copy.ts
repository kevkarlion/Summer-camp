import type { Language } from "@/components/home/dictionary";

export type ProgrammePhoto = {
  src: string;
  alt: string;
  caption: string;
};

export type ProgrammeActivity = {
  title: string;
  text: string;
  photo: ProgrammePhoto;
};

export type ProgrammeCopy = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    titleLines: string[];
    lead: string;
    image: ProgrammePhoto;
    factsLabel: string;
    facts: { label: string; value: string }[];
  };
  method: {
    heading: string;
    lead: string;
    body: string;
    steps: { title: string; text: string }[];
  };
  rhythm: {
    heading: string;
    statement: string;
    lead: string;
    items: { label: string; text: string }[];
  };
  activities: {
    heading: string;
    lead: string;
    items: ProgrammeActivity[];
  };
  band: {
    heading: string;
    lead: string;
    photos: ProgrammePhoto[];
  };
  day: {
    heading: string;
    lead: string;
    aside: string;
  };
  cta: {
    heading: string;
    text: string;
    button: string;
  };
};

const en: ProgrammeCopy = {
  meta: {
    title: "Learning by Doing | Patagonia Summer Camp 2027",
    description:
      "A residential learning by doing programme for teenagers aged 13 to 17: English in daily life, outdoor activities and the daily timeline in Villa La Angostura.",
  },
  hero: {
    titleLines: ["Learning by doing"],
    lead: "An immersion methodology turns every activity, conversation and decision into a reason to learn English by doing it in Patagonia.",
    image: {
      src: "/camp-media/grupo-caminando.webp",
      alt: "Real camp photograph: a group walking with backpacks along a forest trail",
      caption: "The group on the trail.",
    },
    factsLabel: "Main programme details",
    facts: [
      { label: "Ages", value: "13–17 years" },
      { label: "Dates", value: "4–12 December 2027" },
      { label: "Format", value: "Residential" },
      { label: "Place", value: "Villa La Angostura" },
    ],
  },
  method: {
    heading: "Our approach",
    lead: "Learning by doing, in a setting that invites you to take part.",
    body: "English is woven into the routines of the camp: we understand the context, we use the language and we come back to what we learned.",
    steps: [
      {
        title: "Listen in context",
        text: "Words and expressions come up in conversations, instructions and the decisions of the day, so the language has a purpose.",
      },
      {
        title: "Practise outdoors",
        text: "Exploration, activities and living together offer real situations where using English stops feeling like a class.",
      },
      {
        title: "Reflect together",
        text: "The experience invites participants to share what they lived, recognise progress and discover new ways of taking part and expressing themselves.",
      },
    ],
  },
  rhythm: {
    heading: "The rhythm of learning",
    statement: "English lives in the experience.",
    lead: "Besides short and participatory sessions each morning, English is present in the activities, the conversations and daily life.",
    items: [
      {
        label: "In the morning",
        text: "Short, participatory English sessions. No fixed level is promised; the recommended level and the support for different levels will be communicated before enrolment.",
      },
      {
        label: "During the activities",
        text: "The language serves to understand instructions, to agree, to share ideas and to discover the surroundings.",
      },
      {
        label: "Living together",
        text: "Spontaneous conversations and moments of meeting let English be used in a natural and respectful way.",
      },
    ],
  },
  activities: {
    heading: "Trekking, kayak and workshops",
    lead: "The outdoors is where English finds a reason to be used.",
    items: [
      {
        title: "Trekking",
        text: "Trails through the native forest and open ground, with the Patagonian mountains as the horizon of every stage.",
        photo: {
          src: "/camp-media/senderismo-con-villa-al-fondo.webp",
          alt: "Real camp photograph: a forest trail with Villa La Angostura in the background",
          caption: "Trails with the town in the background.",
        },
      },
      {
        title: "Kayak",
        text: "On the water of Lake Nahuel Huapi, with the mountains behind: the lake is part of the everyday landscape of the experience.",
        photo: {
          src: "/camp-media/kayak-en-el-lago.webp",
          alt: "Real camp photograph: a group in kayaks on the lake with the mountains behind",
          caption: "The water as a classroom.",
        },
      },
      {
        title: "Workshops and local producers",
        text: "Sports and art workshops at the residence, and visits to local producers, so participants get to know the people who give life to the territory.",
        photo: {
          src: "/camp-media/productores-locales.webp",
          alt: "Real camp photograph: a visit to local producers and their craft",
          caption: "Encounters with the territory.",
        },
      },
    ],
  },
  band: {
    heading: "The evening belongs to the group.",
    lead: "The camp day ends where the forest begins: star gazing, stories and games around the fire.",
    photos: [
      {
        src: "/camp-media/fogata-en-el-bosque.webp",
        alt: "Real camp photograph: a campfire with marshmallows in the forest",
        caption: "The big campfire is the last night.",
      },
      {
        src: "/camp-media/mirando-el-valle.webp",
        alt: "Real camp photograph: a teenager on a fallen log looking at the valley",
        caption: "A pause to look at the valley.",
      },
    ],
  },
  day: {
    heading: "A typical day",
    lead: "From the first light to the night activity: this is the routine of a camp day.",
    aside: "Times are approximate and depend on the weather, on the requirements of each activity and on how each day is organised.",
  },
  cta: {
    heading: "Do you want to know the programme?",
    text: "Ask about the dates, the destination and the availability for teenagers aged 13 to 17.",
    button: "Request availability",
  },
};

const es: ProgrammeCopy = {
  meta: {
    title: "Learning by Doing | Patagonia Summer Camp 2027",
    description:
      "Programa residencial de learning by doing para adolescentes de 13 a 17 años: inglés en la vida diaria, actividades al aire libre y el itinerario diario en Villa La Angostura.",
  },
  hero: {
    titleLines: ["Aprender haciendo"],
    lead: "Una metodología de inmersión convierte cada actividad, conversación y decisión en una razón para aprender inglés haciendo en Patagonia.",
    image: {
      src: "/camp-media/grupo-caminando.webp",
      alt: "Fotografía real del campamento: grupo caminando con mochilas por un sendero de bosque",
      caption: "El grupo en el sendero.",
    },
    factsLabel: "Datos principales del programa",
    facts: [
      { label: "Edad", value: "13–17 años" },
      { label: "Fechas", value: "4–12 de diciembre de 2027" },
      { label: "Formato", value: "Residencial" },
      { label: "Lugar", value: "Villa La Angostura" },
    ],
  },
  method: {
    heading: "Nuestro enfoque",
    lead: "Aprender haciendo, en un entorno que invita a participar.",
    body: "El inglés se integra en las rutinas del campamento: comprendemos el contexto, usamos el idioma y volvemos sobre lo aprendido.",
    steps: [
      {
        title: "Escuchar en contexto",
        text: "Palabras y expresiones aparecen en conversaciones, indicaciones y decisiones del día, para que el idioma tenga un propósito.",
      },
      {
        title: "Practicar al aire libre",
        text: "La exploración, las actividades y la convivencia ofrecen situaciones reales donde usar el inglés deja de sentirse como una clase.",
      },
      {
        title: "Reflexionar juntos",
        text: "La experiencia invita a compartir lo vivido, reconocer avances y descubrir nuevas formas de participar y expresarse.",
      },
    ],
  },
  rhythm: {
    heading: "El ritmo de aprendizaje",
    statement: "El inglés vive en la experiencia.",
    lead: "Además de sesiones breves y participativas cada mañana, el inglés está presente en las actividades, las conversaciones y la vida cotidiana.",
    items: [
      {
        label: "Por la mañana",
        text: "Sesiones participativas de inglés, sin prometer un nivel fijo; el nivel recomendado y el apoyo se comunicarán antes de la inscripción.",
      },
      {
        label: "Durante las actividades",
        text: "El idioma sirve para comprender instrucciones, acordar, compartir ideas y descubrir el entorno.",
      },
      {
        label: "En la convivencia",
        text: "Conversaciones espontáneas y momentos de encuentro permiten usar el inglés de manera natural y respetuosa.",
      },
    ],
  },
  activities: {
    heading: "Trekking, kayak y talleres",
    lead: "Al aire libre es donde el inglés encuentra una razón de uso.",
    items: [
      {
        title: "Trekking",
        text: "Senderos por el bosque nativo y los espacios abiertos, con las montañas de la Patagonia como horizonte de cada etapa.",
        photo: {
          src: "/camp-media/senderismo-con-villa-al-fondo.webp",
          alt: "Fotografía real del campamento: sendero de bosque con Villa La Angostura al fondo",
          caption: "Senderos con el pueblo al fondo.",
        },
      },
      {
        title: "Kayak",
        text: "Sobre el agua del lago Nahuel Huapi, con las montañas de fondo: el lago es parte del paisaje cotidiano de la experiencia.",
        photo: {
          src: "/camp-media/kayak-en-el-lago.webp",
          alt: "Fotografía real del campamento: grupo en kayaks sobre el lago con montañas de fondo",
          caption: "El agua como aula.",
        },
      },
      {
        title: "Talleres y productores locales",
        text: "Talleres de deporte y arte en la residencia, y visitas a productores locales, para conocer a las personas que dan vida al territorio.",
        photo: {
          src: "/camp-media/productores-locales.webp",
          alt: "Fotografía real del campamento: visita a productores locales y su oficio",
          caption: "Encuentros con el territorio.",
        },
      },
    ],
  },
  band: {
    heading: "La noche es del grupo.",
    lead: "El día de campamento termina donde empieza el bosque: observación de estrellas, relatos y juegos alrededor del fuego.",
    photos: [
      {
        src: "/camp-media/fogata-en-el-bosque.webp",
        alt: "Fotografía real del campamento: fogata con marshmallows en el bosque",
        caption: "La gran fogata es la última noche.",
      },
      {
        src: "/camp-media/mirando-el-valle.webp",
        alt: "Fotografía real del campamento: adolescente sobre un tronco caído contemplando el valle",
        caption: "Una pausa para mirar el valle.",
      },
    ],
  },
  day: {
    heading: "Un día típico",
    lead: "De la primera luz a la actividad nocturna: así es la rutina de un día de campamento.",
    aside: "Los horarios son aproximados y pueden variar según el clima, los requisitos de cada actividad y la organización de cada día.",
  },
  cta: {
    heading: "¿Querés conocer el programa?",
    text: "Consultá las fechas, el destino y la disponibilidad para adolescentes de 13 a 17 años.",
    button: "Consultar disponibilidad",
  },
};

export const programaCopy: Record<Language, ProgrammeCopy> = { en, es };
