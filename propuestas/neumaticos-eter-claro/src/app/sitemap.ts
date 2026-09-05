import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { tires } from "@/data/tires";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    "",
    "/medida",
    "/compuestos",
    "/montaje",
    "/casa",
    "/cita",
    "/aviso-legal",
    "/privacidad",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
  }));
  const items = tires.map((tire) => ({
    url: `${site.url}/compuestos/${tire.slug}`,
    lastModified: now,
  }));
  return [...pages, ...items];
}
