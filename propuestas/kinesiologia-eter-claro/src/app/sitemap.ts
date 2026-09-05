import type { MetadataRoute } from "next";
import { services } from "@/data/content";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    "",
    "/oficio",
    "/espacio",
    "/equipo",
    "/valores",
    "/agenda",
    "/privacidad",
    "/aviso-legal",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
  }));
  const oficios = services.map((service) => ({
    url: `${site.url}/oficio/${service.slug}`,
    lastModified: now,
  }));
  return [...pages, ...oficios];
}
