import { site } from "@/data/site";
import { vehicles } from "@/data/vehicles";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    image: `${site.url}/images/facade.jpg`,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.commune,
      addressRegion: site.address.region,
      addressCountry: "CL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.39,
      longitude: -70.572,
    },
    areaServed: "Santiago, Chile",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "18:00",
        closes: "00:00",
      },
    ],
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
