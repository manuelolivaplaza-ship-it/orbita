import type { MetadataRoute } from "next";
import { vehicles } from "@/data/vehicles";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/coleccion", "/la-casa", "/visita"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
  }));
  const pieces = vehicles.map((vehicle) => ({
    url: `${site.url}/coleccion/${vehicle.slug}`,
    lastModified: now,
  }));
  return [...pages, ...pieces];
}
