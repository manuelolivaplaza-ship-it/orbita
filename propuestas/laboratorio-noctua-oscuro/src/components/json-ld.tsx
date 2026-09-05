import { chequeos } from "@/data/chequeos";
import { sucursales } from "@/data/sucursales";
import { site } from "@/data/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    image: `${site.url}/images/hero.jpg`,
    telephone: site.phone,
    email: site.email,
    description: site.description,
    medicalSpecialty: "Laboratory",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.commune,
      addressRegion: site.address.region,
      addressCountry: "CL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.4,
      longitude: -70.58,
    },
    areaServed: "Santiago, Chile",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "06:30",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "16:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "07:00",
        closes: "12:00",
      },
    ],
    department: sucursales.map((item) => ({
      "@type": "MedicalClinic",
      name: `NOCTUA ${item.nombre}`,
      address: item.direccion,
    })),
    makesOffer: chequeos.map((item) => ({
      "@type": "Offer",
      name: item.nombre,
      price: item.precio,
      priceCurrency: "CLP",
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
