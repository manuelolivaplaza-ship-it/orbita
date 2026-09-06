import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { trabajos } from "@/lib/trabajo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/trabajo", "/oficio", "/estudio", "/contacto", "/privacidad"];
  const now = new Date();
  return [
    ...pages.map((path) => ({
      url: `${site.url}${path || "/"}`,
      lastModified: now,
    })),
    ...trabajos.map((item) => ({
      url: `${site.url}/trabajo/${item.slug}`,
      lastModified: now,
    })),
  ];
}
