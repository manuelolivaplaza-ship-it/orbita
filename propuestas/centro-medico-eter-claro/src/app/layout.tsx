import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, JetBrains_Mono, Outfit } from "next/font/google";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { Nav } from "@/components/nav";
import { ScrollProgress } from "@/components/scroll-progress";
import { StickyCta } from "@/components/sticky-cta";
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
    default: "ETER — Centro médico",
    template: "%s — ETER",
  },
  description: site.description,
  applicationName: "ETER",
  authors: [{ name: "ETER SpA" }],
  keywords: [
    "centro médico",
    "Providencia",
    "Santiago",
    "medicina interna",
    "pediatría",
    "ginecología",
    "cardiología",
    "bono electrónico",
    "FONASA",
    "ISAPRE",
    "ETER",
  ],
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "ETER",
    title: "ETER — La hora que sí ocurre",
    description: site.description,
    images: [{ url: "/images/espera.jpg", width: 1920, height: 1080 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ETER — Centro médico",
    description: site.description,
    images: ["/images/espera.jpg"],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#F6F3EC",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-CL"
      className={`${outfit.variable} ${cormorant.variable} ${jetbrains.variable} h-full antialiased`}
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
