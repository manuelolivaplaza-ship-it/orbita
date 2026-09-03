import type { MetadataRoute } from "next";
import { properties, territories } from "@/lib/properties";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "",
    "/propiedades",
    "/territorio",
    "/estudio",
    "/consulta",
  ];

  return [
    ...staticPaths.map((path) => ({
      url: `${site.url}${path || "/"}`,
      lastModified: now,
    })),
    ...properties.map((p) => ({
      url: `${site.url}/propiedades/${p.slug}`,
      lastModified: now,
    })),
    ...territories.map((t) => ({
      url: `${site.url}/territorio/${t.slug}`,
      lastModified: now,
    })),
  ];
}
