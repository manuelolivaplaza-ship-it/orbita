import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyCta } from "@/components/sticky-cta";
import { site } from "@/lib/site";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

const sans = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-plex",
  display: "swap",
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-plex-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const viewport = {
  themeColor: "#f4efe3",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Casas en sitio en el oriente de Santiago`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "corredora de propiedades Santiago",
    "casas en Ñuñoa",
    "casas en La Reina",
    "casas en Peñalolén",
    "casas en Macul",
    "casa en sitio",
    "inmobiliaria Santiago",
    "comprar casa UF Chile",
  ],
  openGraph: {
    title: `${site.legalName} — ${site.tagline}`,
    description: site.description,
    locale: "es_CL",
    type: "website",
    images: [{ url: "/images/hero.jpg", width: 1600, height: 2133 }],
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
  "@type": "RealEstateAgent",
  name: site.legalName,
  url: site.url,
  image: `${site.url}/images/fachada.jpg`,
  telephone: site.phone,
  email: site.email,
  foundingDate: String(site.founded),
  taxID: site.rut,
  areaServed: "CL",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line,
    addressLocality: "La Reina",
    addressRegion: "Región Metropolitana",
    addressCountry: "CL",
  },
  openingHours: "Mo-Fr 09:30-18:30",
  priceRange: "$$",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-CL"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-papel text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[80] focus:bg-ink focus:px-4 focus:py-2 focus:text-papel"
        >
          Saltar al contenido
        </a>
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[70] opacity-[0.04] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
              `<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>`
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
