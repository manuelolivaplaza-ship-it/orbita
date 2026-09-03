import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
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

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alba · Odontología de autor en Madrid",
    template: "%s · Alba",
  },
  description:
    "Atelier dental en el barrio de Salamanca. Diseño de sonrisa, carillas, implantes y ortodoncia invisible. Precisión clínica, calma de hotel.",
  metadataBase: new URL("https://albaatelier.com"),
  openGraph: {
    title: "Alba · Odontología de autor en Madrid",
    description:
      "Un atelier en Salamanca donde la precisión clínica se vive como hospitalidad.",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 1600 }],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#F6F1EA",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${fraunces.variable} h-full`}
    >
      <body className={`${outfit.className} flex min-h-full flex-col bg-background pb-20 text-foreground lg:pb-0`}>
        <JsonLd />
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
