import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: site.name,
    legalName: site.legalName,
    description:
      "Clínica dental en Vitacura. Diagnóstico 3D, carillas, implantes y ortodoncia invisible.",
    url: site.url,
    telephone: site.phoneIntl,
    email: site.email,
    image: "/images/reception.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: site.comuna,
      addressRegion: site.region,
      postalCode: site.postal,
      addressCountry: "CL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.391,
      longitude: -70.587,
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
        closes: "17:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "386",
    },
    priceRange: "$$$",
    currenciesAccepted: "CLP",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
