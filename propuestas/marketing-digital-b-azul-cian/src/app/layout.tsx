import type { Metadata, Viewport } from "next";
import { Figtree, IBM_Plex_Mono, Petrona } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyCta } from "@/components/sticky-cta";
import { site } from "@/lib/site";
import "./globals.css";

const display = Petrona({
  subsets: ["latin", "latin-ext"],
  variable: "--font-petrona",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sans = Figtree({
  subsets: ["latin", "latin-ext"],
  variable: "--font-figtree",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-plex",
  display: "swap",
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  themeColor: "#eef5f8",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Agencia de marketing digital en Valparaíso`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "agencia marketing digital Valparaíso",
    "agencia marketing Chile",
    "pauta digital Valparaíso",
    "performance marketing Chile",
    "agencia sin markup",
    "Google Ads Chile",
    "Meta Ads Chile",
  ],
  openGraph: {
    title: `${site.legalName} — ${site.tagline}`,
    description: site.description,
    locale: "es_CL",
    type: "website",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 1600 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.legalName} — ${site.tagline}`,
    description: site.description,
    images: ["/images/hero.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AdvertisingAgency",
  name: site.legalName,
  url: site.url,
  image: `${site.url}/images/hero.jpg`,
  telephone: site.phone,
  email: site.email,
  foundingDate: String(site.founded),
  taxID: site.rut,
  areaServed: "CL",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line,
    addressLocality: "Valparaíso",
    addressRegion: "Región de Valparaíso",
    addressCountry: "CL",
    postalCode: site.address.postal,
  },
  openingHours: "Mo-Fr 09:30-18:30",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-CL"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-foam text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-navy focus:px-4 focus:py-2 focus:text-foam"
        >
          Saltar al contenido
        </a>
        <SiteHeader />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <StickyCta />
      </body>
    </html>
  );
}
