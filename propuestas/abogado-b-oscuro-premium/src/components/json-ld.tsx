import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: site.legalName,
  url: site.url,
  image: `${site.url}/images/fachada.jpg`,
  telephone: site.phone,
  email: site.email,
  foundingDate: String(site.founded),
  areaServed: "CL",
  priceRange: "$$",
  taxID: site.rut,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postal,
    addressCountry: "CL",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
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
