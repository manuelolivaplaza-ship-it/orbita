import type { MetadataRoute } from "next";
import { examenes } from "@/data/examenes";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/examenes",
    "/chequeos",
    "/sucursales",
    "/domicilio",
    "/resultados",
    "/nosotros",
    "/contacto",
    "/preparacion",
    "/privacidad",
  ];

  return [
    ...pages.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
    })),
    ...examenes.map((item) => ({
      url: `${site.url}/examenes/${item.slug}`,
      lastModified: new Date(),
    })),
  ];
}
