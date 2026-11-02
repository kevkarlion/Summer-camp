export const siteConfig = {
  name: "Patagonia Summer Camp 2027",
  shortName: "PSC 2027",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.patagoniasummercamp.com",
  locale: "es_AR",
  location: {
    name: "Villa La Angostura",
    region: "Neuquén",
    country: "Argentina",
  },
} as const;

export type RoutePath =
  | ""
  | "/programa-ingles"
  | "/programa-ingles/adolescentes"
  | "/destino/villa-la-angostura"
  | "/itinerario-y-actividades"
  | "/seguridad-y-coordinacion"
  | "/preguntas-frecuentes"
  | "/guia-familias"
  | "/sobre-nosotros"
  | "/contacto"
  | "/programa-ingles/ninos";

export const routePaths: readonly RoutePath[] = [
  "",
  "/programa-ingles",
  "/programa-ingles/adolescentes",
  "/destino/villa-la-angostura",
  "/itinerario-y-actividades",
  "/seguridad-y-coordinacion",
  "/preguntas-frecuentes",
  "/guia-familias",
  "/sobre-nosotros",
  "/contacto",
];
