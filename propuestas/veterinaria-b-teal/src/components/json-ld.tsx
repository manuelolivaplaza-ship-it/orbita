import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.phoneIntl,
    email: site.email,
    image: "/images/facade.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: site.city,
      addressRegion: "Región de Los Ríos",
      postalCode: "5090000",
      addressCountry: "CL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "194",
    },
    priceRange: "$$",
    availableService: [
      { "@type": "MedicalProcedure", name: "Urgencias 24 horas" },
      { "@type": "MedicalProcedure", name: "Hospitalización y UCI" },
      { "@type": "MedicalProcedure", name: "Cirugía veterinaria" },
      { "@type": "MedicalProcedure", name: "Medicina felina" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
