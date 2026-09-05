import type { MetadataRoute } from "next";
import { specialties } from "@/data/content";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    "",
    "/especialidades",
    "/sueno",
    "/casa",
    "/equipo",
    "/laboratorio",
    "/urgencia",
    "/valores",
    "/agenda",
    "/privacidad",
    "/aviso-legal",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
  }));
  const salas = specialties.map((service) => ({
    url: `${site.url}/especialidades/${service.slug}`,
    lastModified: now,
  }));
  return [...pages, ...salas];
}
