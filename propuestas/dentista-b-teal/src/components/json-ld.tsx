import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: site.name,
    legalName: site.legalName,
    description:
      "Clínica dental en Vitacura, junto al Parque Bicentenario. Diseño de sonrisa, carillas, implantes y ortodoncia invisible.",
    url: site.url,
    telephone: site.phoneIntl,
    email: site.email,
    image: "/images/facade.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "Vitacura",
      addressRegion: "Región Metropolitana",
      postalCode: "7630000",
      addressCountry: "CL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.3985,
      longitude: -70.6024,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:30",
        closes: "19:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "08:30",
        closes: "18:00",
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
      reviewCount: "286",
    },
    priceRange: "$$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
