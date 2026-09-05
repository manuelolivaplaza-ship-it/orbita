import { careers } from "@/data/content";
import { site } from "@/data/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    image: `${site.url}/images/hero.jpg`,
    telephone: site.phone,
    email: site.email,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.commune,
      addressRegion: site.address.region,
      addressCountry: "CL",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pregrado",
      itemListElement: careers.map((career) => ({
        "@type": "Course",
        name: career.title,
        description: career.lead,
        provider: { "@type": "CollegeOrUniversity", name: site.name },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
