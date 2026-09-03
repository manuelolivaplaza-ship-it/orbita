import type { Metadata, Viewport } from "next";
import { Newsreader, Public_Sans } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Newsreader({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400"],
  variable: "--font-display",
  display: "swap",
});

const text = Public_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-text",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0F1A24",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Estudio jurídico en Las Condes`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "abogado Las Condes",
    "defensa penal Santiago",
    "divorcio Chile",
    "abogado tributario",
    "urgencia penal",
    "pensión de alimentos",
    "estudio jurídico Santiago",
  ],
  openGraph: {
    title: `${site.legalName} — ${site.tagline}`,
    description: site.description,
    locale: "es_CL",
    type: "website",
    images: [{ url: "/media/mesa.jpg", width: 1600, height: 900 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.legalName} — ${site.tagline}`,
    description: site.description,
    images: ["/media/mesa.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: site.legalName,
  url: site.url,
  image: `${site.url}/media/fachada.jpg`,
  telephone: site.phone,
  email: site.email,
  foundingDate: String(site.founded),
  areaServed: "CL",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Condes",
    addressRegion: "Región Metropolitana",
    addressCountry: "CL",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:30",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-CL"
      className={`${display.variable} ${text.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a className="skip" href="#contenido">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
