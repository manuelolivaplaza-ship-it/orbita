import type { MetadataRoute } from "next";
import { cases, oficios, site, team } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    "",
    "/trabajo",
    "/oficios",
    "/estudio",
    "/metodo",
    "/diagnostico",
  ];
  return [
    ...pages.map((p) => ({
      url: `${site.url}${p || "/"}`,
      lastModified: now,
    })),
    ...cases.map((c) => ({
      url: `${site.url}/trabajo/${c.slug}`,
      lastModified: now,
    })),
    ...oficios.map((o) => ({
      url: `${site.url}/oficios/${o.slug}`,
      lastModified: now,
    })),
    ...team.map((t) => ({
      url: `${site.url}/mesa/${t.slug}`,
      lastModified: now,
    })),
  ];
}
