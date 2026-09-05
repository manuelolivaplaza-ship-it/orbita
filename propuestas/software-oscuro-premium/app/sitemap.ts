import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://obsidiana.cl";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/trabajo`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/estudio`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/contacto`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    ...projects.map((p) => ({
      url: `${base}/trabajo/${p.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
