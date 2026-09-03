import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  image: `${site.url}/images/fachada.jpg`,
  telephone: site.phone,
  email: site.email,
  foundingDate: String(site.founded),
  areaServed: "CL",
  priceRange: "$$",
  taxID: site.rut,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postal,
    addressCountry: "CL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.4563,
    longitude: -70.5975,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [site.instagram],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
