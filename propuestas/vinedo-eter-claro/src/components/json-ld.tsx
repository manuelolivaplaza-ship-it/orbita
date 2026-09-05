import { wines, visits } from "@/data/content";
import { site } from "@/data/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Winery",
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
        geo: {
          "@type": "GeoCoordinates",
          elevation: `${site.altitude} m`,
        },
      },
      {
        "@type": "OfferCatalog",
        name: "Vinos ETER",
        itemListElement: wines.map((wine) => ({
          "@type": "Product",
          name: `${wine.name} ${wine.vintage}`,
          description: wine.lead,
          brand: site.name,
          offers: {
            "@type": "Offer",
            priceCurrency: "CLP",
            price: wine.price,
            availability: "https://schema.org/InStock",
          },
        })),
      },
      {
        "@type": "OfferCatalog",
        name: "Visitas ETER",
        itemListElement: visits.map((visit) => ({
          "@type": "Service",
          name: visit.name,
          description: visit.lead,
          offers: {
            "@type": "Offer",
            priceCurrency: "CLP",
            price: visit.price,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
