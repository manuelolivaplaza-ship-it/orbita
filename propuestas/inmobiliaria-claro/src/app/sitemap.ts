import type { MetadataRoute } from "next";
import { barrios, properties, team } from "@/lib/data";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/lista",
    "/criterio",
    "/barrios",
    "/mesa",
    "/vender",
    "/visita",
    "/privacidad",
    "/aviso-legal",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
    })),
    ...properties.map((item) => ({
      url: `${site.url}/lista/${item.slug}`,
      lastModified: new Date(),
    })),
    ...barrios.map((item) => ({
      url: `${site.url}/barrios/${item.slug}`,
      lastModified: new Date(),
    })),
    ...team.map((item) => ({
      url: `${site.url}/mesa/${item.slug}`,
      lastModified: new Date(),
    })),
  ];
}
