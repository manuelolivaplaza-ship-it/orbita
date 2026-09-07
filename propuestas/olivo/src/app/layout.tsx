import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";

import { MobileCta } from "@/components/mobile-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { site } from "@/lib/site";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://olivo.cl"),
  title: {
    default: "Olivo — Encuentra tu próxima casa",
    template: "%s — Olivo",
  },
  description: site.description,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Olivo — Corredora de propiedades",
    description: site.description,
    locale: "es_CL",
    type: "website",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 675 }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-CL"
      className={`${geist.variable} ${instrument.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
        >
          Saltar al contenido
        </a>
        <SiteHeader />
        <main id="contenido" className="flex-1 pb-20 md:pb-0">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppButton />
        <MobileCta />
      </body>
    </html>
  );
}
