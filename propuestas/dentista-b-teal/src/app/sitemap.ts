import type { MetadataRoute } from "next";
import { site, treatments } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/clinica",
    "/tratamientos",
    "/equipo",
    "/casos",
    "/tecnologia",
    "/primera-hora",
    "/contacto",
    "/privacidad",
    "/cookies",
    "/aviso-legal",
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
