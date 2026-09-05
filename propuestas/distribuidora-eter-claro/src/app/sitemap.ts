import type { MetadataRoute } from "next";
import { estados } from "@/data/catalog";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    "",
    "/lineas",
    "/red",
    "/nosotros",
    "/cuenta",
    "/aviso-legal",
    "/privacidad",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
  }));
  const lineas = estados.map((estado) => ({
    url: `${site.url}/lineas/${estado.id}`,
    lastModified: now,
  }));
  return [...pages, ...lineas];
}
