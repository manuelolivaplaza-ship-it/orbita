import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { DM_Mono, Figtree, Instrument_Serif } from "next/font/google";
import { CartProvider } from "@/components/cart";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { Nav } from "@/components/nav";
import { ScrollProgress } from "@/components/scroll-progress";
import { StickyCta } from "@/components/sticky-cta";
import { site } from "@/data/site";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const dm = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ETER — Vinos de niebla · Casablanca",
    template: "%s — ETER",
  },
  description: site.description,
  applicationName: "ETER",
  authors: [{ name: site.legalName }],
  keywords: [
    "ETER",
    "viña Casablanca",
    "vinos de niebla",
    "Sauvignon Blanc Casablanca",
    "Pinot Noir Chile",
    "cata de vinos",
    "despacho vinos Chile",
    "Lo Ovalle",
  ],
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "ETER",
    title: "ETER — Vinos de niebla.",
    description: site.description,
    images: [{ url: "/images/og.jpg", width: 1920, height: 1080 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ETER — Vinos de niebla.",
    description: site.description,
    images: ["/images/og.jpg"],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#F6F1E8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="es-CL"
      className={`${figtree.variable} ${instrument.variable} ${dm.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-papel text-tinta">
        <CartProvider>
          <JsonLd />
          <a href="#contenido" className="skip">
            Saltar al contenido
          </a>
          <div className="grain" aria-hidden="true" />
          <ScrollProgress />
          <Nav />
          <main id="contenido">{children}</main>
          <Footer />
          <StickyCta />
        </CartProvider>
      </body>
    </html>
  );
}
