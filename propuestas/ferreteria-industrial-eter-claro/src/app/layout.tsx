import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Mono, IBM_Plex_Sans, Instrument_Serif } from "next/font/google";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { Nav } from "@/components/nav";
import { StickyCta } from "@/components/sticky-cta";
import { site } from "@/data/site";
import "./globals.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-ibm_plex_sans",
  display: "swap",
});

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument_serif",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm_plex_mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ETER — Ferretería industrial",
    template: "%s — ETER",
  },
  description: site.description,
  applicationName: "ETER",
  authors: [{ name: "ETER SpA" }],
  keywords: [
    "ferretería industrial",
    "fierro construcción",
    "pernos",
    "corte y doblado",
    "10 de Julio",
    "Santiago",
    "despacho a obra",
    "ETER",
  ],
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "ETER",
    title: "ETER — El peso, en claro.",
    description: site.description,
    images: [{ url: "/images/og.jpg", width: 1920, height: 1080 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ETER — Ferretería industrial",
    description: site.description,
    images: ["/images/og.jpg"],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#f3efe6",
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
      <body className="min-h-full bg-paper text-ink">
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
