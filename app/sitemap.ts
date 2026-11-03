import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

type CanonicalRoute = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

/** The five canonical public routes. Legacy routes redirect and are not listed. */
const canonicalRoutes: CanonicalRoute[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/programa", changeFrequency: "monthly", priority: 0.9 },
  { path: "/residencia", changeFrequency: "monthly", priority: 0.8 },
  { path: "/nosotros", changeFrequency: "yearly", priority: 0.7 },
  { path: "/familias", changeFrequency: "weekly", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return canonicalRoutes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
