import type { MetadataRoute } from "next";
import { treatments } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://albaatelier.com";
  const pages = [
    "",
    "/clinica",
    "/tratamientos",
    "/equipo",
    "/casos",
    "/primera-visita",
    "/cita",
    "/contacto",
  ];
  return [
    ...pages.map((p) => ({
      url: `${base}${p || "/"}`,
      lastModified: new Date(),
    })),
    ...treatments.map((t) => ({
      url: `${base}/tratamientos/${t.slug}`,
      lastModified: new Date(),
    })),
  ];
}
