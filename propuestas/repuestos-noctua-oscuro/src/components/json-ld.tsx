import { featuredPieces } from "@/data/catalog";
import { site } from "@/data/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["AutoPartsStore", "Organization"],
    name: site.name,
    legalName: site.legalName,
    taxID: site.rut,
    url: site.url,
    image: `${site.url}/images/og.jpg`,
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
      latitude: -33.35,
      longitude: -70.733,
    },
    areaServed: ["Región Metropolitana", "Santiago", "Quilicura"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "18:00",
        closes: "23:59",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "00:00",
        closes: "06:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "18:00",
        closes: "23:59",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "00:00",
        closes: "02:00",
      },
    ],
    makesOffer: featuredPieces().map((item) => ({
      "@type": "Offer",
      price: item.priceIva,
      priceCurrency: "CLP",
      availability:
        item.stock === "bahia"
          ? "https://schema.org/InStock"
          : "https://schema.org/LimitedAvailability",
      itemOffered: {
        "@type": "Product",
        name: item.name,
        sku: item.sku,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
