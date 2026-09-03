import type { MetadataRoute } from "next";

import { services } from "@/lib/clinic";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/la-clinica",
    "/servicios",
    "/equipo",
    "/urgencias",
    "/turnos",
    "/contacto",
    ...services.map((service) => `/servicios/${service.slug}`),
  ];

  return paths.map((path) => ({
    url: `https://alba.vet${path}`,
    lastModified: new Date(),
  }));
}
