import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Outfit, Syne } from "next/font/google";
import { SiteShell } from "@/components/site-shell";
import { site } from "@/lib/data";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex",
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://obsidiana.cl"),
  title: {
    default: "OBSIDIANA — Estudio de software",
    template: "%s — OBSIDIANA",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "estudio de software",
    "desarrollo a medida",
    "Santiago",
    "Chile",
    "producto digital",
    "sistemas internos",
  ],
  authors: [{ name: site.legal, url: "https://obsidiana.cl" }],
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: site.name,
    title: "OBSIDIANA — Estudio de software",
    description: site.tagline,
    images: [{ url: "/images/hero-obsidian.jpg", width: 1200, height: 675 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OBSIDIANA — Estudio de software",
    description: site.tagline,
    images: ["/images/hero-obsidian.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  legalName: site.legal,
  description: site.description,
  email: site.email,
  telephone: site.phone,
  url: "https://obsidiana.cl",
  foundingDate: String(site.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: "Santiago",
    addressCountry: "CL",
  },
  areaServed: "CL",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-CL"
      className={`${syne.variable} ${instrument.variable} ${outfit.variable} ${plex.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-void font-sans text-ivory">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem("obsidiana-intro"))document.documentElement.dataset.intro="done"}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
