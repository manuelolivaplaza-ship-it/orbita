import { site } from "@/data/site";
import { tires } from "@/data/tires";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    image: `${site.url}/images/hero.jpg`,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.commune,
      addressRegion: site.address.region,
      addressCountry: "CL",
    },
    areaServed: "Santiago, Chile",
    openingHours: "Mo-Fr 08:30-19:00, Sa 09:00-14:00",
    makesOffer: tires.map((tire) => ({
      "@type": "Offer",
      price: tire.priceCLP,
      priceCurrency: "CLP",
      availability:
        tire.stock === "hoy"
          ? "https://schema.org/InStock"
          : "https://schema.org/LimitedAvailability",
      itemOffered: {
        "@type": "Product",
        name: `${tire.brand} ${tire.model} ${tire.width}/${tire.aspect} R${tire.rim}`,
        brand: tire.brand,
        category: "Neumático",
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
