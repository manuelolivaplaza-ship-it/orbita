import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: site.legalName,
  url: site.url,
  image: `${site.url}/images/hero.jpg`,
  telephone: site.phone,
  email: site.email,
  foundingDate: String(site.founded),
  areaServed: "CL",
  priceRange: "UF",
  taxID: site.rut,
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
    latitude: site.lat,
    longitude: site.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "19:00",
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
