import { productos } from "@/data/catalog";
import { site } from "@/data/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Organization", "WholesaleStore"],
    name: site.name,
    legalName: site.legalName,
    taxID: site.rut,
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
    areaServed: [
      "Región Metropolitana",
      "Valparaíso",
      "O’Higgins",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "06:30",
        closes: "17:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "07:00",
        closes: "12:00",
      },
    ],
    makesOffer: productos.slice(0, 9).map((item) => ({
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
