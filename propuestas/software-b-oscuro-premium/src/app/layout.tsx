import type { Metadata, Viewport } from "next";
import { Alumni_Sans, Azeret_Mono, Source_Serif_4 } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyCta } from "@/components/sticky-cta";
import { site } from "@/lib/site";
import "./globals.css";

const display = Alumni_Sans({
  variable: "--font-alumni",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const serif = Source_Serif_4({
  variable: "--font-source",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const mono = Azeret_Mono({
  variable: "--font-azeret",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.descriptor} en Valparaíso`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legal }],
  keywords: [
    "desarrollo de software Valparaíso",
    "sistemas de operación Chile",
    "software portuario",
    "taller de software",
    "ingeniería de software Chile",
    "UTFSM",
  ],
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [{ url: "/images/mira.jpg", width: 1200, height: 1600 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/images/mira.jpg"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#090a0c",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  legalName: site.legal,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  foundingDate: String(site.founded),
  taxID: site.rut,
  areaServed: "CL",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: "Valparaíso",
    addressCountry: "CL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.coords.lat,
    longitude: site.coords.lon,
  },
  openingHours: "Mo-Th 09:30-18:30, Fr 09:30-15:00",
  sameAs: [site.social.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-CL"
      className={`${display.variable} ${serif.variable} ${mono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-lacca pb-16 text-marfil md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <div className="horizon" aria-hidden>
          <span className="horizon-line" />
          <span className="horizon-tick" />
        </div>
        <SiteHeader />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <StickyCta />
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
