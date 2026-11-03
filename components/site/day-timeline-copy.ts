import type { Language } from "@/components/home/dictionary";

export type DayBlock = {
  time: string;
  period: string;
  title: string;
  description: string;
  src: string;
  alt: string;
};

const en: DayBlock[] = [
  { time: "8:00", period: "First light", title: "Waking up", description: "A calm start: beds, backpacks and a little stretching.", src: "/camp-media/senderismo-con-villa-al-fondo.webp", alt: "Real camp photograph: the group on the trail with Villa La Angostura in the background" },
  { time: "8:30", period: "Morning", title: "Breakfast", description: "A full breakfast at the residence.", src: "/camp-media/residencia-y-parque.png", alt: "Editorial reference image: the residence and its park" },
  { time: "9:15", period: "Morning", title: "The daily mission", description: "The day's challenge, explained in English in small groups.", src: "/camp-media/mirando-el-valle.webp", alt: "Real camp photograph: a participant on fallen trunks looking at the valley" },
  { time: "10:00", period: "Morning", title: "Adventure block", description: "Trekking or kayaking on adventure days; sports and arts at the residence on the others.", src: "/camp-media/kayak-en-el-lago.webp", alt: "Real camp photograph: a group kayaking on the lake with the mountains behind" },
  { time: "13:30", period: "Midday", title: "Lunch", description: "A picnic on the trail or at the residence.", src: "/camp-media/almuerzo-camp.jpg", alt: "Illustrative photo: teenagers sharing a meal at a picnic table in the forest" },
  { time: "15:00", period: "Afternoon", title: "Free time", description: "An hour of calm, games, reading and calls home.", src: "/camp-media/grupo-jugando.webp", alt: "Real camp photograph: the group of teenagers playing outdoors" },
  { time: "16:00", period: "Afternoon", title: "English in action", description: "Real challenges: ordering, orienting and working as a team.", src: "/camp-media/productores-locales.webp", alt: "Real camp photograph: a visit to local producers and their craft" },
  { time: "18:00", period: "Afternoon", title: "Showers", description: "A good shower after a full day outdoors.", src: "/duchas.webp", alt: "Real camp photograph: the group of teenagers talking in the wood-panelled common room of the residence" },
  { time: "19:30", period: "Evening", title: "Dinner", description: "Everyone together around the table.", src: "/camp-media/fogata-en-el-bosque.webp", alt: "Real camp photograph: the campfire with marshmallows in the woods" },
  { time: "21:00", period: "Evening", title: "Night activity", description: "Stories and games around the fire, and stargazing when the sky is clear.", src: "/camp-media/actividad-nocturna.jpg", alt: "Illustrative photo: the group around a small fire by the lake at night" },
  { time: "22:30", period: "Night", title: "Lights out", description: "Everyone sleeps after a full day. Sweet dreams!", src: "/camp-media/noche-estrellada-cordillera.jpg", alt: "Illustrative photo: the Milky Way over the mountain range at night" },
];

const es: DayBlock[] = [
  { time: "8:00", period: "Primera luz", title: "Despertar", description: "Un comienzo tranquilo: camas, mochilas y un poco de estiramiento.", src: "/camp-media/senderismo-con-villa-al-fondo.webp", alt: "Fotografía real del campamento: el grupo en el sendero con Villa La Angostura al fondo" },
  { time: "8:30", period: "Mañana", title: "Desayuno", description: "Desayuno completo en la residencia.", src: "/camp-media/residencia-y-parque.png", alt: "Imagen editorial de referencia: la residencia y su parque" },
  { time: "9:15", period: "Mañana", title: "Misión del día", description: "El desafío del día, explicado en inglés en grupos pequeños.", src: "/camp-media/mirando-el-valle.webp", alt: "Fotografía real del campamento: un participante sobre troncos caídos mirando el valle" },
  { time: "10:00", period: "Mañana", title: "Bloque de aventura", description: "Trekking o kayak en los días de aventura; deportes y arte en la residencia los demás días.", src: "/camp-media/kayak-en-el-lago.webp", alt: "Fotografía real del campamento: grupo en kayaks sobre el lago con montañas de fondo" },
  { time: "13:30", period: "Mediodía", title: "Almuerzo", description: "Picnic en el sendero o en la residencia.", src: "/camp-media/almuerzo-camp.jpg", alt: "Imagen ilustrativa: adolescentes compartiendo el almuerzo en una mesa de bosque" },
  { time: "15:00", period: "Tarde", title: "Descanso y tiempo libre", description: "Una hora de calma, juegos, lectura y llamadas a casa.", src: "/camp-media/grupo-jugando.webp", alt: "Fotografía real del campamento: grupo de adolescentes jugando al aire libre" },
  { time: "16:00", period: "Tarde", title: "Inglés en acción", description: "Desafíos reales: pedir, orientarse y trabajar en equipo.", src: "/camp-media/productores-locales.webp", alt: "Fotografía real del campamento: visita a productores locales y su oficio" },
  { time: "18:00", period: "Tarde", title: "Duchas", description: "Un buen baño después de un día entero al aire libre.", src: "/duchas.webp", alt: "Fotografía real del campamento: el grupo de adolescentes conversando en la sala común de madera de la residencia" },
  { time: "19:30", period: "Noche", title: "Cena", description: "Todos juntos, alrededor de la mesa.", src: "/camp-media/fogata-en-el-bosque.webp", alt: "Fotografía real del campamento: fogata con marshmallows en el bosque" },
  { time: "21:00", period: "Noche", title: "Actividad nocturna", description: "Relatos y juegos alrededor del fuego, y observación de estrellas cuando el cielo acompaña.", src: "/camp-media/actividad-nocturna.jpg", alt: "Imagen ilustrativa: el grupo alrededor de una fogata pequeña junto al lago de noche" },
  { time: "22:30", period: "Noche", title: "A dormir", description: "Todos a dormir después de un día completo. ¡Dulces sueños!", src: "/camp-media/noche-estrellada-cordillera.jpg", alt: "Imagen ilustrativa: la Vía Láctea sobre la cordillera de noche" },
];

export const dayBlocks: Record<Language, DayBlock[]> = { en, es };

export const dayNote: Record<Language, { label: string; title: string; body: string; credit: string }> = {
  en: {
    label: "Note about the schedule",
    title: "A typical day · The times are approximate",
    body: "Times may vary with the weather, the requirements of each activity and how each day is organised.",
    credit: "Photographs marked as illustrative are editorial references of the camp experience.",
  },
  es: {
    label: "Nota sobre los horarios",
    title: "Un día típico · Los horarios son aproximados",
    body: "Los horarios pueden variar según el clima, los requisitos de cada actividad y la organización de cada día.",
    credit: "Las fotografías señaladas como ilustrativas son referencias editoriales de la experiencia del campamento.",
  },
};
