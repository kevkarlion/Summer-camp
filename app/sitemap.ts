import type { MetadataRoute } from "next";
import { routePaths, siteConfig } from "@/lib/site";

const changeFrequency: Record<(typeof routePaths)[number], MetadataRoute.Sitemap[number]["changeFrequency"]> = {
  "": "weekly",
  "/programa-ingles": "monthly",
  "/programa-ingles/ninos": "monthly",
  "/programa-ingles/adolescentes": "monthly",
  "/destino/villa-la-angostura": "monthly",
  "/itinerario-y-actividades": "monthly",
  "/seguridad-y-coordinacion": "monthly",
  "/preguntas-frecuentes": "weekly",
  "/guia-familias": "monthly",
  "/sobre-nosotros": "yearly",
  "/contacto": "monthly",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routePaths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: changeFrequency[path],
    priority: path === "" ? 1 : path === "/preguntas-frecuentes" ? 0.8 : 0.7,
  }));
}
