import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [
    "",
    "/clinica",
    "/servicios",
    "/equipo",
    "/urgencias",
    "/hospitalizacion",
    "/primera-hora",
    "/contacto",
    "/privacidad",
    "/aviso-legal",
    "/cookies",
    ...services.map((s) => `/servicios/${s.slug}`),
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
  }));
}
