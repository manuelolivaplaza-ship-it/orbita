import type { MetadataRoute } from "next";
import { articles, lawyers, practices } from "@/lib/data";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/estudio",
    "/areas",
    "/equipo",
    "/casos",
    "/perspectivas",
    "/contacto",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  const dynamic = [
    ...practices.map((item) => `/areas/${item.slug}`),
    ...lawyers.map((item) => `/equipo/${item.slug}`),
    ...articles.map((item) => `/perspectivas/${item.slug}`),
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...dynamic];
}
