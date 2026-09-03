import type { MetadataRoute } from "next";
import { lawyers, practices, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    "",
    "/estudio",
    "/materias",
    "/equipo",
    "/honorarios",
    "/primera-hora",
  ];
  const urls = [
    ...pages.map((p) => ({
      url: `${site.url}${p || "/"}`,
      lastModified: now,
    })),
    ...practices.map((p) => ({
      url: `${site.url}/materias/${p.slug}`,
      lastModified: now,
    })),
    ...lawyers.map((l) => ({
      url: `${site.url}/equipo/${l.slug}`,
      lastModified: now,
    })),
  ];
  return urls;
}
