import { featuredSkus } from "@/data/catalog";
import { site } from "@/data/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["HardwareStore", "Organization"],
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
    areaServed: ["Región Metropolitana", "Santiago"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "13:00",
      },
    ],
    makesOffer: featuredSkus().map((item) => ({
      "@type": "Offer",
      price: item.priceIva,
      priceCurrency: "CLP",
      availability:
        item.stock === "patio"
          ? "https://schema.org/InStock"
          : "https://schema.org/LimitedAvailability",
      itemOffered: {
        "@type": "Product",
        name: `${item.name} ${item.measure}`,
        sku: item.code,
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
