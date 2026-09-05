import type { MetadataRoute } from "next";
import { ventanas } from "@/data/catalog";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    "",
    "/carta",
    "/ronda",
    "/casa",
    "/cuenta",
    "/aviso-legal",
    "/privacidad",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
  }));
  const carta = ventanas.map((ventana) => ({
    url: `${site.url}/carta/${ventana.id}`,
    lastModified: now,
  }));
  return [...pages, ...carta];
}
