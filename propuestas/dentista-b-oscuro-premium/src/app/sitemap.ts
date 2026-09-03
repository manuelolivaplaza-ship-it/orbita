import type { MetadataRoute } from "next";
import { site, treatments } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/clinica",
    "/tratamientos",
    "/especialistas",
    "/primera-evaluacion",
    "/agenda",
    "/contacto",
  ];
  return [
    ...pages.map((p) => ({
      url: `${site.url}${p || "/"}`,
      lastModified: new Date(),
    })),
    ...treatments.map((t) => ({
      url: `${site.url}/tratamientos/${t.slug}`,
      lastModified: new Date(),
    })),
  ];
}
