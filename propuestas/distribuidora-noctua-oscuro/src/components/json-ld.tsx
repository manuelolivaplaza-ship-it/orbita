import { productos } from "@/data/catalog";
import { site } from "@/data/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    image: `${site.url}/images/cd.jpg`,
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
      latitude: -33.361,
      longitude: -70.729,
    },
    areaServed: "Santiago, Chile",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "20:00",
        closes: "06:00",
      },
    ],
    makesOffer: productos.map((item) => ({
      "@type": "Offer",
      price: item.priceNeto,
      priceCurrency: "CLP",
      itemOffered: {
        "@type": "Product",
        name: item.name,
        sku: item.sku,
        brand: item.producer,
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
