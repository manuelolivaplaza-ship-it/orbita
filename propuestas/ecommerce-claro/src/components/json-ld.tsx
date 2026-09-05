import { products } from "@/lib/products";
import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: site.legalName,
    url: site.url,
    image: `${site.url}/images/interior.jpg`,
    telephone: site.phone,
    email: site.email,
    taxID: site.rut,
    foundingDate: String(site.founded),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line,
      addressLocality: site.address.commune,
      addressRegion: site.address.region,
      addressCountry: "CL",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "11:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "11:00",
        closes: "17:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Colección",
      itemListElement: products.map((p) => ({
        "@type": "Offer",
        price: p.price,
        priceCurrency: "CLP",
        availability: "https://schema.org/InStock",
        itemOffered: {
          "@type": "Product",
          name: p.name,
          sku: p.sku,
          image: `${site.url}${p.image}`,
        },
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
