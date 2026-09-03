import type { MetadataRoute } from "next";
import { lawyers, practices } from "@/lib/data";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/estudio", "/areas", "/equipo", "/casos", "/contacto"].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
    })
  );
  const areaRoutes = practices.map((item) => ({
    url: `${site.url}/areas/${item.slug}`,
    lastModified: now,
  }));
  const teamRoutes = lawyers.map((item) => ({
    url: `${site.url}/equipo/${item.slug}`,
    lastModified: now,
  }));
  return [...staticRoutes, ...areaRoutes, ...teamRoutes];
}
