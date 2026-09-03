import { site } from "@/data/site";
import { vehicles } from "@/data/vehicles";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    image: `${site.url}/images/showroom.jpg`,
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
    numberOfEmployees: 2,
    makesOffer: vehicles.map((vehicle) => ({
      "@type": "Offer",
      availability:
        vehicle.status === "disponible"
          ? "https://schema.org/InStock"
          : vehicle.status === "proxima"
            ? "https://schema.org/PreOrder"
            : "https://schema.org/SoldOut",
      price: vehicle.priceCLP,
      priceCurrency: "CLP",
      itemOffered: {
        "@type": "Car",
        name: `${vehicle.brand} ${vehicle.model}`,
        brand: vehicle.brand,
        model: vehicle.model,
        vehicleModelDate: String(vehicle.year),
        mileageFromOdometer: {
          "@type": "QuantitativeValue",
          value: vehicle.km,
          unitCode: "KMT",
        },
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
