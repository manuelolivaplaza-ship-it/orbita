import type { MetadataRoute } from "next";
import { specialties } from "@/data/content";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    "",
    "/especialidades",
    "/la-casa",
    "/equipo",
    "/laboratorio",
    "/agenda",
    "/privacidad",
    "/aviso-legal",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
  }));
  const inner = specialties.map((item) => ({
    url: `${site.url}/especialidades/${item.slug}`,
    lastModified: now,
  }));
  return [...pages, ...inner];
}
