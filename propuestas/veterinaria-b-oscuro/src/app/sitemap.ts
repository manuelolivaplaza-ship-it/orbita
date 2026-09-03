import type { MetadataRoute } from "next";
import { services, site, team } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = [
    "",
    "/hospital",
    "/servicios",
    "/urgencias",
    "/internacion",
    "/equipo",
    "/hora",
    "/contacto",
    "/privacidad",
    "/aviso-legal",
  ].map((path) => ({
    url: `${site.url}${path || "/"}`,
    lastModified: now,
  }));

  const servicePages = services.map((s) => ({
    url: `${site.url}/servicios/${s.slug}`,
    lastModified: now,
  }));

  const teamPages = team.map((v) => ({
    url: `${site.url}/equipo/${v.slug}`,
    lastModified: now,
  }));

  return [...staticPages, ...servicePages, ...teamPages];
}
