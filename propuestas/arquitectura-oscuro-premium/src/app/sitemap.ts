import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { studio } from "@/lib/studio";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "",
    "/obras",
    "/estudio",
    "/enfoque",
    "/contacto",
    "/privacidad",
    "/aviso-legal",
  ];

  return [
    ...staticPaths.map((path) => ({
      url: `${studio.url}${path || "/"}`,
      lastModified: now,
    })),
    ...projects.map((project) => ({
      url: `${studio.url}/obras/${project.slug}`,
      lastModified: now,
    })),
  ];
}
