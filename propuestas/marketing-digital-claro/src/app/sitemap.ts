import type { MetadataRoute } from "next";
import { services, works } from "@/lib/data";
import { site } from "@/lib/site";

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
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
  }));
  const workRoutes = works.map((item) => ({
    url: `${site.url}/trabajo/${item.slug}`,
    lastModified: now,
  }));
  const oficioRoutes = services.map((item) => ({
    url: `${site.url}/oficio/${item.slug}`,
    lastModified: now,
  }));
  return [...staticRoutes, ...workRoutes, ...oficioRoutes];
}
