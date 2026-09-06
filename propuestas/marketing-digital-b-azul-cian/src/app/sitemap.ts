import type { MetadataRoute } from "next";
import { accounts, channels, mesa } from "@/lib/data";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/tabla",
    "/canales",
    "/cuentas",
    "/estudio",
    "/mesa",
    "/lectura",
    "/privacidad",
    "/aviso-legal",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
  }));
  const channelRoutes = channels.map((item) => ({
    url: `${site.url}/canales/${item.slug}`,
    lastModified: now,
  }));
  const accountRoutes = accounts.map((item) => ({
    url: `${site.url}/cuentas/${item.slug}`,
    lastModified: now,
  }));
  const teamRoutes = mesa.map((item) => ({
    url: `${site.url}/mesa/${item.slug}`,
    lastModified: now,
  }));
  return [...staticRoutes, ...channelRoutes, ...accountRoutes, ...teamRoutes];
}
