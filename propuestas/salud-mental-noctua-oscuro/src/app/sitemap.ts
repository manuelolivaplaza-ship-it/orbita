import type { MetadataRoute } from "next";
import { areas, team } from "@/data/content";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    "",
    "/enfoque",
    "/areas",
    "/equipo",
    "/casa",
    "/noche",
    "/primera",
    "/valores",
    "/privacidad",
    "/aviso-legal",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
  }));
  const areaPages = areas.map((area) => ({
    url: `${site.url}/areas/${area.slug}`,
    lastModified: now,
  }));
  const people = team.map((person) => ({
    url: `${site.url}/equipo/${person.slug}`,
    lastModified: now,
  }));
  return [...pages, ...areaPages, ...people];
}
