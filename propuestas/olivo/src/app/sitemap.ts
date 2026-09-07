import type { MetadataRoute } from "next";

import { properties } from "@/lib/properties";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://olivo.cl";
  const staticRoutes = ["", "/propiedades", "/vender", "/nosotros", "/contacto", "/barrios"];

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
    })),
    ...properties.map((p) => ({
      url: `${base}/propiedades/${p.slug}`,
      lastModified: new Date(),
    })),
  ];
}
