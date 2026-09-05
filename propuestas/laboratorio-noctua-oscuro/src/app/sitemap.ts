import type { MetadataRoute } from "next";
import { examenes } from "@/data/examenes";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    "",
    "/examenes",
    "/chequeos",
    "/turno",
    "/espacio",
    "/equipo",
    "/sucursales",
    "/domicilio",
    "/preparacion",
    "/resultados",
    "/hora",
    "/privacidad",
    "/aviso-legal",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
  }));
  const items = examenes.map((item) => ({
    url: `${site.url}/examenes/${item.slug}`,
    lastModified: now,
  }));
  return [...pages, ...items];
}
