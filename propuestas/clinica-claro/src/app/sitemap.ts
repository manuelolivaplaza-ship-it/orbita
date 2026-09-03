import type { MetadataRoute } from "next";
import { doctors, specialties } from "@/lib/data";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "",
    "/clinica",
    "/especialidades",
    "/equipo",
    "/primera-consulta",
    "/laboratorio",
    "/convenios",
    "/agenda",
    "/contacto",
    "/privacidad",
    "/aviso-legal",
  ];

  return [
    ...staticPaths.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
    })),
    ...specialties.map((item) => ({
      url: `${site.url}/especialidades/${item.slug}`,
      lastModified: now,
    })),
    ...doctors.map((item) => ({
      url: `${site.url}/equipo/${item.slug}`,
      lastModified: now,
    })),
  ];
}
