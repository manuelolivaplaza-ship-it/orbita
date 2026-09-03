import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, JetBrains_Mono, Outfit } from "next/font/google";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { Nav } from "@/components/nav";
import { site } from "@/data/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ETER — Casa de automóviles",
    template: "%s — ETER",
  },
  description: site.description,
  applicationName: "ETER",
  authors: [{ name: "ETER SpA" }],
  keywords: [
    "concesionaria",
    "autos de lujo",
    "eléctricos",
    "Santiago",
    "Lo Barnechea",
    "ETER",
    "Porsche",
    "Lucid",
    "seminuevos",
  ],
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "ETER",
    title: "ETER — Casa de automóviles",
    description: site.description,
    images: [{ url: "/images/hero.jpg", width: 1920, height: 1080 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ETER — Casa de automóviles",
    description: site.description,
    images: ["/images/hero.jpg"],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#f3f4f6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-CL"
      className={`${outfit.variable} ${cormorant.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink">
        <JsonLd />
        <a href="#contenido" className="skip">
          Saltar al contenido
        </a>
        <div className="grain" aria-hidden="true" />
        <Nav />
        <main id="contenido">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
