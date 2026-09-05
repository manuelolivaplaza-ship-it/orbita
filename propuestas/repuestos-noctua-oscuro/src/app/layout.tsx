import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Azeret_Mono, Big_Shoulders, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { Nav } from "@/components/nav";
import { StickyCta } from "@/components/sticky-cta";
import { site } from "@/data/site";
import "./globals.css";

const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-source_sans_3",
  display: "swap",
});

const display = Big_Shoulders({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-big_shoulders",
  display: "swap",
  fallback: ["Arial Narrow", "sans-serif"],
  adjustFontFallback: false,
});

const mono = Azeret_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-azeret_mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "NOCTUA — Repuestos de cruce nocturno",
    template: "%s — NOCTUA",
  },
  description: site.description,
  applicationName: "NOCTUA",
  authors: [{ name: "NOCTUA Repuestos SpA" }],
  keywords: [
    "repuestos",
    "repuestos automotrices",
    "cruce por patente",
    "turno noche",
    "Quilicura",
    "OEM",
    "taller",
    "flota",
    "NOCTUA",
  ],
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "NOCTUA",
    title: "NOCTUA — La pieza se cruza de noche.",
    description: site.description,
    images: [{ url: "/images/og.jpg", width: 1920, height: 1080 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NOCTUA — Repuestos de cruce nocturno",
    description: site.description,
    images: ["/images/og.jpg"],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#090a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="es-CL"
      className={`${sans.variable} ${display.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-void text-steel">
        <div className="grain" aria-hidden="true" />
        <JsonLd />
        <a href="#contenido" className="skip">
          Saltar al contenido
        </a>
        <Nav />
        <main id="contenido" className="pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
