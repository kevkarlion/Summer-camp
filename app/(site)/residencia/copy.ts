import type { Language } from "@/components/home/dictionary";

export type ResidencePhoto = {
  src: string;
  alt: string;
  caption: string;
  kind: string;
};

export type ResidenceCopy = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    titleLines: string[];
    lead: string;
    image: { src: string; alt: string };
    factsLabel: string;
    facts: { label: string; value: string }[];
  };
  property: {
    heading: string;
    lead: string;
    body: string;
  };
  experiences: {
    heading: string;
    lead: string;
    items: { title: string; text: string }[];
  };
  gallery: {
    heading: string;
    lead: string;
    photos: ResidencePhoto[];
    disclaimer: string;
  };
  cta: {
    heading: string;
    text: string;
    button: string;
  };
};

const en: ResidenceCopy = {
  meta: {
    title: "The Residence | Patagonia Summer Camp 2027",
    description:
      "A 26-hectare residence in Villa La Angostura, 2 km from the centre, on the shore of Lake Nahuel Huapi, with a sports area and a wide dining room.",
  },
  hero: {
    titleLines: ["Lake, forest, residence"],
    lead: "The residence is 2 km from the centre of Villa La Angostura and has 26 hectares of park and native forest, the shore of Lake Nahuel Huapi, a sports area and a wide dining room.",
    image: {
      src: "/camp-media/lago-al-atardecer.png",
      alt: "Real camp photograph: the lake at sunset with the Patagonian mountains behind",
    },
    factsLabel: "Main details of the residence",
    facts: [
      { label: "Extension", value: "26 hectares" },
      { label: "Distance", value: "2 km from the centre" },
      { label: "Shoreline", value: "Lake Nahuel Huapi" },
      { label: "Facilities", value: "Sports area and wide dining room" },
    ],
  },
  property: {
    heading: "A residence in the territory",
    lead: "The programme is based in a residence in Villa La Angostura; the town and its surroundings are the context of the experiences, not the place of each activity.",
    body: "Twenty-six hectares of park and native forest surround the property. The shore of Lake Nahuel Huapi is close enough to be part of the everyday landscape, and the sports area and the wide dining room complete the facilities.",
  },
  experiences: {
    heading: "What surrounds the residence",
    lead: "Getting to know a place changes the way it is cared for. The stay combines nature, communities, stories and local knowledge.",
    items: [
      {
        title: "Nature to look at and walk",
        text: "The surroundings of Lake Nahuel Huapi invite you to observe, walk and understand the territory with curiosity and respect.",
      },
      {
        title: "Getting to know the local community",
        text: "Visiting local producers lets participants meet the people who give life to the territory and value their stories and their work.",
      },
      {
        title: "A base to discover together",
        text: "The residence brings together outdoor activities, rest, living together and shared moments in contact with nature.",
      },
    ],
  },
  gallery: {
    heading: "The residence, the forest and the lake",
    lead: "Three views of the place where the programme takes place: the building, its park and the water in front of it.",
    photos: [
      {
        src: "/camp-media/residencia-y-parque.png",
        alt: "Editorial reference image: the residence with its park and the native forest around it",
        caption: "The residence and its park",
        kind: "Editorial reference image",
      },
      {
        src: "/camp-media/residencia-de-piedra-y-madera.png",
        alt: "Editorial reference image: the stone and wood construction of the residence",
        caption: "Stone, wood and forest",
        kind: "Editorial reference image",
      },
      {
        src: "/camp-media/lago-al-atardecer.png",
        alt: "Real camp photograph: the lake at sunset with the Patagonian mountains behind",
        caption: "The lake at sunset",
        kind: "Real camp photograph",
      },
    ],
    disclaimer:
      "Editorial reference images illustrating the intended experience; they do not show the real residence.",
  },
  cta: {
    heading: "See how the days are lived",
    text: "The programme combines English, outdoor activities and local knowledge in Villa La Angostura, from 4 to 12 December 2027.",
    button: "Know the programme",
  },
};

const es: ResidenceCopy = {
  meta: {
    title: "La Residencia | Patagonia Summer Camp 2027",
    description:
      "Una residencia de 26 hectáreas en Villa La Angostura, a 2 km del centro, a orillas del lago Nahuel Huapi, con área deportiva y comedor amplio.",
  },
  hero: {
    titleLines: ["Lago, bosque, residencia"],
    lead: "La residencia está a 2 km del centro de Villa La Angostura y tiene 26 hectáreas de parque y bosque nativo, la orilla del lago Nahuel Huapi, un área deportiva y un comedor amplio.",
    image: {
      src: "/camp-media/lago-al-atardecer.png",
      alt: "Fotografía real del campamento: el lago al atardecer con las montañas de Patagonia",
    },
    factsLabel: "Datos principales de la residencia",
    facts: [
      { label: "Superficie", value: "26 hectáreas" },
      { label: "Distancia", value: "2 km del centro" },
      { label: "Orilla", value: "Lago Nahuel Huapi" },
      { label: "Instalaciones", value: "Área deportiva y comedor amplio" },
    ],
  },
  property: {
    heading: "Una residencia en el territorio",
    lead: "El programa se basa en una residencia de Villa La Angostura; el pueblo y su entorno constituyen el contexto de las experiencias, no el lugar de cada actividad.",
    body: "Veintiséis hectáreas de parque y bosque nativo rodean la propiedad. La orilla del lago Nahuel Huapi está lo bastante cerca para formar parte del paisaje cotidiano, y el área deportiva y el comedor amplio completan las instalaciones.",
  },
  experiences: {
    heading: "Lo que rodea la residencia",
    lead: "Conocer un lugar cambia la forma de cuidarlo. La experiencia combina naturaleza, comunidades, historias y conocimiento local.",
    items: [
      {
        title: "Naturaleza para mirar y recorrer",
        text: "El entorno del lago Nahuel Huapi invita a observar, caminar y comprender el territorio con curiosidad y respeto.",
      },
      {
        title: "Conocer a la comunidad local",
        text: "Visitar productores locales permite conocer a las personas que dan vida al territorio y valorar sus historias y su trabajo.",
      },
      {
        title: "Una base para descubrir juntos",
        text: "La residencia reúne actividades al aire libre, descanso, convivencia y momentos compartidos en contacto con la naturaleza.",
      },
    ],
  },
  gallery: {
    heading: "La residencia, el bosque y el lago",
    lead: "Tres vistas del lugar donde se realiza el programa: la construcción, su parque y el agua que tiene enfrente.",
    photos: [
      {
        src: "/camp-media/residencia-y-parque.png",
        alt: "Imagen editorial de referencia: la residencia con su parque y el bosque nativo alrededor",
        caption: "La residencia y su parque",
        kind: "Imagen editorial de referencia",
      },
      {
        src: "/camp-media/residencia-de-piedra-y-madera.png",
        alt: "Imagen editorial de referencia: la construcción de piedra y madera de la residencia",
        caption: "Piedra, madera y bosque",
        kind: "Imagen editorial de referencia",
      },
      {
        src: "/camp-media/lago-al-atardecer.png",
        alt: "Fotografía real del campamento: el lago al atardecer con las montañas de Patagonia",
        caption: "El lago al atardecer",
        kind: "Fotografía real del campamento",
      },
    ],
    disclaimer:
      "Imágenes editoriales de referencia que ilustran la experiencia prevista; no muestran la residencia real.",
  },
  cta: {
    heading: "Mirá cómo se viven los días",
    text: "El programa combina inglés, actividades al aire libre y conocimiento local en Villa La Angostura, del 4 al 12 de diciembre de 2027.",
    button: "Conocer el programa",
  },
};

export const residenciaCopy: Record<Language, ResidenceCopy> = { en, es };
