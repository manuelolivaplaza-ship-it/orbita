import type { MetadataRoute } from "next";
import { practices, team, works } from "@/lib/data";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/obra",
    "/practica",
    "/casa",
    "/mesa",
    "/contacto",
    "/privacidad",
    "/aviso-legal",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
  }));
  const practiceRoutes = practices.map((item) => ({
    url: `${site.url}/practica/${item.slug}`,
    lastModified: now,
  }));
  const workRoutes = works.map((item) => ({
    url: `${site.url}/obra/${item.slug}`,
    lastModified: now,
  }));
  const teamRoutes = team.map((item) => ({
    url: `${site.url}/mesa/${item.slug}`,
    lastModified: now,
  }));
  return [...staticRoutes, ...practiceRoutes, ...workRoutes, ...teamRoutes];
}
