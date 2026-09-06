import type { MetadataRoute } from "next";
import { bands, mesa, site, transmissions } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    "",
    "/estudio",
    "/bandas",
    "/aire",
    "/mesa",
    "/lectura",
    "/aviso-legal",
    "/privacidad",
  ];
  return [
    ...pages.map((p) => ({
      url: `${site.url}${p || "/"}`,
      lastModified: now,
    })),
    ...bands.map((b) => ({
      url: `${site.url}/bandas/${b.slug}`,
      lastModified: now,
    })),
    ...transmissions.map((t) => ({
      url: `${site.url}/aire/${t.slug}`,
      lastModified: now,
    })),
    ...mesa.map((p) => ({
      url: `${site.url}/mesa/${p.slug}`,
      lastModified: now,
    })),
  ];
}
