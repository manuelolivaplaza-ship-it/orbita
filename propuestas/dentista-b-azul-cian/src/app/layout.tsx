import type { Metadata, Viewport } from "next";
import { Manrope, Syne } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { MobileCta } from "@/components/layout/mobile-cta";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cian · Odontología contemporánea en Vitacura",
    template: "%s · Cian",
  },
  description:
    "Clínica dental en Vitacura. Diagnóstico 3D, carillas, implantes y ortodoncia invisible. Ves el plan en pantalla y la cifra en pesos. El mismo día.",
  metadataBase: new URL(site.url),
  openGraph: {
    title: "Cian · Odontología contemporánea en Vitacura",
    description:
      "Ver para decidir. Escáner, plan escrito y presupuesto en pesos. Vitacura, Santiago.",
    locale: "es_CL",
    type: "website",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 1600 }],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#F4FAFC",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-CL"
      className={`${manrope.variable} ${syne.variable} h-full`}
    >
      <body
        className={`${manrope.className} flex min-h-full flex-col bg-background pb-20 text-foreground lg:pb-0`}
      >
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
