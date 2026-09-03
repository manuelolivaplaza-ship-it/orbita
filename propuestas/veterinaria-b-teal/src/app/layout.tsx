import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { EmergencyBar } from "@/components/layout/emergency-bar";
import { MobileCta } from "@/components/layout/mobile-cta";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

export const metadata: Metadata = {
  title: {
    default: "Estuario · Hospital veterinario en Valdivia",
    template: "%s · Estuario",
  },
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    title: "Estuario · Hospital veterinario en Valdivia",
    description:
      "UCI las 24 horas a orillas del Calle-Calle. Isla Teja, Valdivia.",
    locale: "es_CL",
    type: "website",
    images: [{ url: "/images/facade.jpg", width: 1600, height: 900 }],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#F6F1E6",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-CL"
      className={`${outfit.variable} ${fraunces.variable} h-full`}
    >
      <body
        className={`${outfit.className} flex min-h-full flex-col bg-background pb-20 text-foreground lg:pb-0`}
      >
        <JsonLd />
        <EmergencyBar />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <MobileCta />
        <p className="sr-only">
          {site.name}. {site.fullAddress}. {site.phoneIntl}.
        </p>
      </body>
    </html>
  );
}
