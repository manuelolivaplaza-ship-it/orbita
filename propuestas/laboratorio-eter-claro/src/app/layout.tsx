import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, JetBrains_Mono, Outfit } from "next/font/google";
import { Cursor } from "@/components/cursor";
import { Footer } from "@/components/footer";
import { Grain } from "@/components/grain";
import { Nav } from "@/components/nav";
import { WhatsApp } from "@/components/whatsapp";
import { site } from "@/data/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F4F1EA",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ETER · Laboratorio clínico",
    template: "%s · ETER",
  },
  description: site.description,
  applicationName: "ETER",
  keywords: [
    "laboratorio clínico",
    "exámenes de sangre",
    "Santiago",
    "Providencia",
    "toma de muestra a domicilio",
    "resultados de laboratorio",
    "Chile",
  ],
  openGraph: {
    title: "ETER · Laboratorio clínico",
    description: site.tagline,
    locale: "es_CL",
    type: "website",
    images: [{ url: "/images/hero-lab.jpg", width: 1376, height: 768 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ETER · Laboratorio clínico",
    description: site.tagline,
    images: ["/images/hero-lab.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "ETER Laboratorio Clínico",
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Providencia 2148",
    addressLocality: "Providencia",
    addressRegion: "Región Metropolitana",
    addressCountry: "CL",
  },
  areaServed: "Santiago de Chile",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-CL"
      className={`${outfit.variable} ${cormorant.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body
        className={`${outfit.className} flex min-h-full flex-col bg-paper text-ink`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Grain />
        <Cursor />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsApp />
      </body>
    </html>
  );
}
