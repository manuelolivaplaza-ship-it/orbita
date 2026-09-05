import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { Nav } from "@/components/nav";
import { ScrollProgress } from "@/components/scroll-progress";
import { StickyCta } from "@/components/sticky-cta";
import { site } from "@/data/site";
import "./globals.css";

const outfit = { variable: "" };
const fraunces = { variable: "" };
const plex = { variable: "" };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ETER — Instituto Universitario",
    template: "%s — ETER",
  },
  description: site.description,
  applicationName: "ETER",
  authors: [{ name: site.legalName }],
  keywords: [
    "ETER",
    "instituto universitario",
    "universidad Santiago",
    "El Arrayán",
    "Lo Barnechea",
    "admisión 2027",
    "arquitectura",
    "ciencias del clima",
    "pregrado Chile",
  ],
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "ETER",
    title: "ETER — A esta altura.",
    description: site.description,
    images: [{ url: "/images/hero.jpg", width: 1920, height: 1080 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ETER — Instituto Universitario",
    description: site.description,
    images: ["/images/hero.jpg"],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#F3F5F4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="es-CL"
      className={`${outfit.variable} ${fraunces.variable} ${plex.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-papel text-tinta">
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
      </body>
    </html>
  );
}
