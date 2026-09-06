import type { MetadataRoute } from "next";
import { studio } from "@/lib/studio";
import { works } from "@/lib/works";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/obras", "/estudio", "/oficio", "/encargo", "/aviso-legal", "/privacidad"];
  return [
    ...pages.map((path) => ({
      url: `${studio.url}${path || "/"}`,
      lastModified: now,
    })),
    ...works.map((work) => ({
      url: `${studio.url}/obras/${work.slug}`,
      lastModified: now,
    })),
  ];
}
