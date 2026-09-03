import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: site.name,
    legalName: site.legalName,
    description:
      "Clínica odontológica boutique en Vitacura. Diagnóstico con scanner, plan fotografiado y presupuesto por escrito.",
    url: site.url,
    telephone: site.phoneIntl,
    email: site.email,
    image: "/images/recepcion.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "Vitacura",
      addressRegion: "Región Metropolitana",
      postalCode: site.postal,
      addressCountry: "CL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.385,
      longitude: -70.58,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    priceRange: "$$$",
    areaServed: "Santiago",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
