import type { MetadataRoute } from "next";
import { barrios, solares, team } from "@/lib/data";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/solares",
    "/oficio",
    "/barrios",
    "/mesa",
    "/vender",
    "/contacto",
    "/privacidad",
    "/aviso-legal",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
  }));
  const solarRoutes = solares.map((item) => ({
    url: `${site.url}/solares/${item.slug}`,
    lastModified: now,
  }));
  const barrioRoutes = barrios.map((item) => ({
    url: `${site.url}/barrios/${item.slug}`,
    lastModified: now,
  }));
  const teamRoutes = team.map((item) => ({
    url: `${site.url}/mesa/${item.slug}`,
    lastModified: now,
  }));
  return [...staticRoutes, ...solarRoutes, ...barrioRoutes, ...teamRoutes];
}
