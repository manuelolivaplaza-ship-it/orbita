import type { Metadata, Viewport } from "next";
import {
  Azeret_Mono,
  Bricolage_Grotesque,
  Instrument_Sans,
  Instrument_Serif,
} from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyCta } from "@/components/sticky-cta";
import { site } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-bricolage",
  display: "swap",
});

const sans = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-instrument",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  variable: "--font-instrument-serif",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

const mono = Azeret_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-azeret",
  display: "swap",
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  themeColor: "#f3f4f1",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — El corte es el proyecto`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "estudio de arquitectura Santiago",
    "arquitectura Chile",
    "casas en talud",
    "arquitectura Providencia",
    "COTA arquitectura",
    "permiso de edificación",
    "casas luz norte",
  ],
  openGraph: {
    title: `${site.legalName} — ${site.tagline}`,
    description: site.description,
    locale: "es_CL",
    type: "website",
    images: [{ url: "/images/casa-lo-curro.jpg", width: 1600, height: 900 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.legalName} — ${site.tagline}`,
    description: site.description,
    images: ["/images/casa-lo-curro.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ArchitecturalOffice",
  name: site.legalName,
  url: site.url,
  image: `${site.url}/images/taller.jpg`,
  telephone: site.phone,
  email: site.email,
  foundingDate: String(site.founded),
  taxID: site.rut,
  areaServed: "CL",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line,
    addressLocality: "Providencia",
    addressRegion: "Región Metropolitana",
    addressCountry: "CL",
  },
  openingHours: "Mo-Fr 09:30-18:30",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-CL"
      className={`${display.variable} ${sans.variable} ${serif.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-cal text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[80] focus:bg-ink focus:px-4 focus:py-2 focus:text-cal"
        >
          Saltar al contenido
        </a>
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[70] opacity-[0.035] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
              `<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>`
            )}")`,
          }}
        />
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
