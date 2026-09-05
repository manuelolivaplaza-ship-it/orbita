import type { MetadataRoute } from "next";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/catalogo", "/medida", "/taller", "/noctua", "/cita"].map(
    (path) => ({
      url: `https://noctua.cl${path}`,
      lastModified: now,
    }),
  );
  const items = products.map((p) => ({
    url: `https://noctua.cl/catalogo/${p.slug}`,
    lastModified: now,
  }));
  return [...pages, ...items];
}
