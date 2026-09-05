import type { MetadataRoute } from "next";
import { families, pieces } from "@/lib/data";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/familias",
    "/consulta",
    "/mostrador",
    "/despacho",
    "/aviso-legal",
    "/privacidad",
  ];
  return [
    ...staticRoutes.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
    })),
    ...families.map((item) => ({
      url: `${site.url}/familias/${item.slug}`,
      lastModified: now,
    })),
    ...pieces.map((item) => ({
      url: `${site.url}/pieza/${item.slug}`,
      lastModified: now,
    })),
  ];
}
