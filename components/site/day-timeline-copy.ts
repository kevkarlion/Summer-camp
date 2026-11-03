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
{ time: "8:00", period: "First light", title: "Waking up", description: "A calm start: beds, backpacks and a little stretching.", src: "/camp-media/senderismo-con-villa-al-fondo.webp", alt: "Real camp photograph: a group on a trail with Villa La Angostura in the background" },
{ time: "8:30", period: "Morning", title: "Breakfast", description: "A full breakfast at the residence.", src: "/camp-media/grupo-jugando.webp", alt: "Real camp photograph: a group of teenagers playing outdoors" },
{ time: "9:15", period: "Morning", title: "The daily mission", description: "The day's challenge, explained in English in small groups.", src: "/camp-media/mirando-el-valle.webp", alt: "Real camp photograph: a teenager on a fallen trunk looking at the valley" },
{ time: "10:00", period: "Morning", title: "Adventure block", description: "Trekking or kayaking on adventure days; sports and arts at the residence on the others.", src: "/camp-media/kayak-en-el-lago.webp", alt: "Real camp photograph: a group kayaking on the lake with the mountains behind" },
{ time: "13:30", period: "Midday", title: "Lunch", description: "A picnic on the trail or at the residence.", src: "/camp-media/productores-locales.webp", alt: "Real camp photograph: a visit to local producers and their craft" },
{ time: "15:00", period: "Afternoon", title: "Free time", description: "An hour of calm, games, reading and calls home.", src: "/camp-media/grupo-caminando.webp", alt: "Real camp photograph: a group hiking with backpacks along a forest trail" },
{ time: "16:00", period: "Afternoon", title: "English in action", description: "Real challenges: ordering, orienting and working as a team.", src: "/camp-media/grupo-jugando.webp", alt: "Real camp photograph: a group of teenagers playing outdoors" },
{ time: "18:00", period: "Afternoon", title: "Showers", description: "A good shower after a full day outdoors.", src: "/camp-media/residencia-de-piedra-y-madera.png", alt: "Editorial reference image: the stone and wood residence" },
{ time: "19:30", period: "Evening", title: "Dinner", description: "Everyone together around the table.", src: "/camp-media/fogata-en-el-bosque.webp", alt: "Real camp photograph: a campfire with marshmallows in the woods" },
{ time: "21:00", period: "Evening", title: "Night activity", description: "Stargazing, stories and games. The big campfire is the last night.", src: "/camp-media/fogata-en-el-bosque.webp", alt: "Real camp photograph: a campfire with marshmallows in the woods" },
{ time: "22:30", period: "Night", title: "Lights out", description: "Everyone sleeps after a full day. Sweet dreams!", src: "/camp-media/residencia-y-parque.png", alt: "Editorial reference image: the residence with its park and native forest around it" },
];

const es: DayBlock[] = [
  { time: "8:00", period: "Primera luz", title: "Despertar", description: "Un comienzo tranquilo: camas, mochilas y un poco de estiramiento.", src: "/camp-media/senderismo-con-villa-al-fondo.webp", alt: "Fotografía real del campamento: grupo en un sendero con Villa La Angostura al fondo" },
  { time: "8:30", period: "Mañana", title: "Desayuno", description: "Desayuno completo en la residencia.", src: "/camp-media/grupo-jugando.webp", alt: "Fotografía real del campamento: grupo de adolescentes jugando al aire libre" },
  { time: "9:15", period: "Mañana", title: "Misión del día", description: "El desafío del día, explicado en inglés en grupos pequeños.", src: "/camp-media/mirando-el-valle.webp", alt: "Fotografía real del campamento: adolescente sobre un tronco caído contemplando el valle" },
  { time: "10:00", period: "Mañana", title: "Bloque de aventura", description: "Trekking o kayak en los días de aventura; deportes y arte en la residencia los demás días.", src: "/camp-media/kayak-en-el-lago.webp", alt: "Fotografía real del campamento: grupo en kayaks sobre el lago con montañas de fondo" },
  { time: "13:30", period: "Mediodía", title: "Almuerzo", description: "Picnic en el sendero o en la residencia.", src: "/camp-media/productores-locales.webp", alt: "Fotografía real del campamento: visita a productores locales y su oficio" },
  { time: "15:00", period: "Tarde", title: "Descanso y tiempo libre", description: "Una hora de calma, juegos, lectura y llamadas a casa.", src: "/camp-media/grupo-caminando.webp", alt: "Fotografía real del campamento: grupo caminando con mochilas por un sendero de bosque" },
  { time: "16:00", period: "Tarde", title: "Inglés en acción", description: "Desafíos reales: pedir, orientarse y trabajar en equipo.", src: "/camp-media/grupo-jugando.webp", alt: "Fotografía real del campamento: grupo de adolescentes jugando al aire libre" },
  { time: "18:00", period: "Tarde", title: "Duchas", description: "Un buen baño después de un día entero al aire libre.", src: "/camp-media/residencia-de-piedra-y-madera.png", alt: "Imagen editorial de referencia: la construcción de piedra y madera de la residencia" },
  { time: "19:30", period: "Noche", title: "Cena", description: "Todos juntos, alrededor de la mesa.", src: "/camp-media/fogata-en-el-bosque.webp", alt: "Fotografía real del campamento: fogata con marshmallows en el bosque" },
  { time: "21:00", period: "Noche", title: "Actividad nocturna", description: "Observación de estrellas, relatos y juegos. La gran fogata es la última noche.", src: "/camp-media/fogata-en-el-bosque.webp", alt: "Fotografía real del campamento: fogata con marshmallows en el bosque" },
  { time: "22:30", period: "Noche", title: "A dormir", description: "Todos a dormir después de un día completo. ¡Dulces sueños!", src: "/camp-media/residencia-y-parque.png", alt: "Imagen editorial de referencia: la residencia con su parque y el bosque nativo alrededor" },
];

export const dayBlocks: Record<Language, DayBlock[]> = { en, es };

export const dayNote: Record<Language, { label: string; title: string; body: string }> = {
  en: {
    label: "Note about the schedule",
    title: "A typical day · The times are approximate",
    body: "Times may vary with the weather, the requirements of each activity and how each day is organised.",
  },
  es: {
    label: "Nota sobre los horarios",
    title: "Un día típico · Los horarios son aproximados",
    body: "Los horarios pueden variar según el clima, los requisitos de cada actividad y la organización de cada día.",
  },
};
