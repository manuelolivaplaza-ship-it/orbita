import { studio } from "@/lib/studio";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ArchitecturalOffice",
    name: studio.legal,
    alternateName: studio.name,
    description: studio.description,
    url: studio.url,
    email: studio.email,
    telephone: studio.phone,
    foundingDate: String(studio.founded),
    address: {
      "@type": "PostalAddress",
      streetAddress: studio.address,
      addressLocality: "Santiago",
      addressRegion: "Región Metropolitana",
      addressCountry: "CL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: studio.lat,
      longitude: studio.lng,
    },
    openingHours: "Mo-Fr 09:30-18:30",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
