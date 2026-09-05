import type { MetadataRoute } from "next";
import { families, pieces } from "@/data/catalog";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    "",
    "/cruce",
    "/familias",
    "/turno",
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
  const piecePages = pieces.map((piece) => ({
    url: `${site.url}/pieza/${piece.slug}`,
    lastModified: now,
  }));
  return [...pages, ...familyPages, ...piecePages];
}
