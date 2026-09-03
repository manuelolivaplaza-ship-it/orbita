import type { Metadata, Viewport } from "next";
import { Bitter, Outfit } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
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

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Obsidiana · Odontología de especialista en Vitacura",
    template: "%s · Obsidiana",
  },
  description:
    "Clínica odontológica boutique en Vitacura. Diagnóstico con scanner, plan fotografiado y presupuesto por escrito. El mismo especialista de principio a fin.",
  metadataBase: new URL(site.url),
  openGraph: {
    title: "Obsidiana · Odontología de especialista en Vitacura",
    description:
      "Diagnóstico con scanner, plan fotografiado y presupuesto por escrito. Sin apuro ni sorpresas.",
    locale: "es_CL",
    type: "website",
    images: [{ url: "/images/sillon.jpg", width: 1600, height: 900 }],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#121110",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-CL"
      className={`dark ${outfit.variable} ${bitter.variable} h-full`}
    >
      <body
        className={`${outfit.className} flex min-h-full flex-col bg-background pb-20 text-foreground lg:pb-0`}
      >
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <JsonLd />
        <SiteHeader />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <MobileCta />
        <div className="grain" aria-hidden />
        <p className="sr-only">
          {site.name}. {site.fullAddress}. {site.phoneIntl}.
        </p>
      </body>
    </html>
  );
}
