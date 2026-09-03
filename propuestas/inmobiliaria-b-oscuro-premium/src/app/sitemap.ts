import type { MetadataRoute } from "next";
import { articles } from "@/data/journal";
import { neighborhoods } from "@/data/neighborhoods";
import { properties } from "@/data/properties";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://obsidiana.cl";
  const statics = ["", "/propiedades", "/barrios", "/estudio", "/diario", "/visita", "/privacidad"];
  return [
    ...statics.map((path) => ({ url: base + path })),
    ...properties.map((p) => ({ url: `${base}/propiedades/${p.slug}` })),
    ...neighborhoods.map((n) => ({ url: `${base}/barrios/${n.slug}` })),
    ...articles.map((a) => ({ url: `${base}/diario/${a.slug}` })),
  ];
}
