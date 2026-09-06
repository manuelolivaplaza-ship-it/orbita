import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/obras",
    "/estudio",
    "/oficio",
    "/contacto",
    "/privacidad",
    "/aviso-legal",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
  }));
  const projectRoutes = projects.map((item) => ({
    url: `${site.url}/obras/${item.slug}`,
    lastModified: now,
  }));
  return [...staticRoutes, ...projectRoutes];
}
