import type { MetadataRoute } from "next";
import { people, practices } from "@/lib/data";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/estudio",
    "/servicios",
    "/equipo",
    "/honorarios",
    "/calendario",
    "/casos",
    "/contacto",
    "/aviso-legal",
    "/privacidad",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
  }));
  const serviceRoutes = practices.map((item) => ({
    url: `${site.url}/servicios/${item.slug}`,
    lastModified: now,
  }));
  const teamRoutes = people.map((item) => ({
    url: `${site.url}/equipo/${item.slug}`,
    lastModified: now,
  }));
  return [...staticRoutes, ...serviceRoutes, ...teamRoutes];
}
