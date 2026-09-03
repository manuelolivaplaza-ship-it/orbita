import type { MetadataRoute } from "next";
import { treatments } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://cian.cl";
  const now = new Date();
  const staticPaths = [
    "",
    "/clinica",
    "/tratamientos",
    "/equipo",
    "/casos",
    "/tecnologia",
    "/primera-visita",
    "/reembolso",
    "/hora",
    "/contacto",
    "/aviso-legal",
    "/privacidad",
    "/cookies",
  ];

  return [
    ...staticPaths.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
    })),
    ...treatments.map((t) => ({
      url: `${base}/tratamientos/${t.slug}`,
      lastModified: now,
    })),
  ];
}
