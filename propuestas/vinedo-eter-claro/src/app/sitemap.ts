import type { MetadataRoute } from "next";
import { wines } from "@/data/content";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    "",
    "/vinos",
    "/terroir",
    "/visitas",
    "/seleccion",
    "/contacto",
    "/privacidad",
    "/aviso-legal",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
  }));
  const winePages = wines.map((wine) => ({
    url: `${site.url}/vinos/${wine.slug}`,
    lastModified: now,
  }));
  return [...pages, ...winePages];
}
