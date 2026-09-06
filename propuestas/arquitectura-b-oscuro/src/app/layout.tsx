import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Figtree, IBM_Plex_Mono } from "next/font/google";
import { Cursor } from "@/components/cursor";
import { JsonLd } from "@/components/json-ld";
import { Preloader } from "@/components/preloader";
import { Progress } from "@/components/progress";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyCta } from "@/components/sticky-cta";
import { studio } from "@/lib/studio";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const ibm = IBM_Plex_Mono({
  variable: "--font-ibm",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(studio.url),
  title: {
    default: "UMBRAL · Arquitectura en Las Condes",
    template: "%s · UMBRAL",
  },
  description: studio.description,
  keywords: [
    "estudio de arquitectura Santiago",
    "arquitecto Las Condes",
    "casa de alto estándar Chile",
    "permisería DOM",
    "anteproyecto arquitectura",
    "administración de obra",
  ],
  openGraph: {
    title: `${studio.name} — ${studio.tagline}`,
    description: studio.description,
    locale: "es_CL",
    type: "website",
    images: [{ url: "/images/hero.jpg", width: 1600, height: 900 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${studio.name} — ${studio.tagline}`,
    description: studio.description,
    images: ["/images/hero.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#131210",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-CL"
      className={`${figtree.variable} ${bodoni.variable} ${ibm.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-void pb-14 text-paper lg:pb-0">
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <JsonLd />
        <Preloader />
        <Progress />
        <Cursor />
        <SiteHeader />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <StickyCta />
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
