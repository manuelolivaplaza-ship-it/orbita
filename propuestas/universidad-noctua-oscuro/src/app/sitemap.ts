import type { MetadataRoute } from "next";
import { careers } from "@/data/content";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    "",
    "/instituto",
    "/campus",
    "/carreras",
    "/admision",
    "/cuerpo",
    "/investigacion",
    "/contacto",
    "/privacidad",
    "/aviso-legal",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
  }));
  const programs = careers.map((career) => ({
    url: `${site.url}/carreras/${career.slug}`,
    lastModified: now,
  }));
  return [...pages, ...programs];
}
