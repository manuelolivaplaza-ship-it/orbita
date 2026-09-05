import type { MetadataRoute } from "next";
import { obras } from "@/lib/obra";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/obra", "/oficio", "/taller", "/contacto", "/privacidad"];
  const now = new Date();
  return [
    ...pages.map((path) => ({
      url: `${site.url}${path || "/"}`,
      lastModified: now,
    })),
    ...obras.map((obra) => ({
      url: `${site.url}/obra/${obra.slug}`,
      lastModified: now,
    })),
  ];
}
