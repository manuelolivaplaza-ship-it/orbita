import type { MetadataRoute } from "next";
import { families } from "@/data/catalog";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    "",
    "/familias",
    "/corte",
    "/patio",
    "/cotizar",
    "/aviso-legal",
    "/privacidad",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
  }));
  const familyPages = families.map((family) => ({
    url: `${site.url}/familias/${family.id}`,
    lastModified: now,
  }));
  return [...pages, ...familyPages];
}
