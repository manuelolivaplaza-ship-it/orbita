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
    image: `${studio.url}/images/hero.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: studio.address,
      addressLocality: "Las Condes",
      addressRegion: "Región Metropolitana",
      addressCountry: "CL",
    },
    openingHours: "Mo-Fr 10:00-19:00",
    areaServed: "CL",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
