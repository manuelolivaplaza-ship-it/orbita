import type { MetadataRoute } from "next";
import { oficios } from "@/lib/oficio";
import { site } from "@/lib/site";
import { team } from "@/lib/team";
import { projects } from "@/lib/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/trabajo",
    "/oficio",
    "/estudio",
    "/contacto",
    "/privacidad",
    "/aviso-legal",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...projects.map((project) => ({
      url: `${site.url}/trabajo/${project.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...oficios.map((item) => ({
      url: `${site.url}/oficio/${item.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.55,
    })),
    ...team.map((person) => ({
      url: `${site.url}/estudio/${person.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
