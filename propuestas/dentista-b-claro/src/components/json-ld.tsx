import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: site.name,
    legalName: site.legalName,
    description:
      "Atelier dental en el barrio de Salamanca. Odontología de autor, diseño de sonrisa, implantes y ortodoncia invisible.",
    url: "https://albaatelier.com",
    telephone: site.phoneIntl,
    email: site.email,
    image: "/images/reception.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "Madrid",
      postalCode: "28001",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.425,
      longitude: -3.682,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "412",
    },
    priceRange: "€€€",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
