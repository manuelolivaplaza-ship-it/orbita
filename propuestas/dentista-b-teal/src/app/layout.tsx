import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Sora } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { MobileCta } from "@/components/layout/mobile-cta";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bruma · Odontología serena en Vitacura",
    template: "%s · Bruma",
  },
  description:
    "Clínica dental junto al Parque Bicentenario, Vitacura. Diseño de sonrisa, carillas, implantes y ortodoncia invisible. Precisión clínica, calma de lago.",
  metadataBase: new URL(site.url),
  openGraph: {
    title: "Bruma · Odontología serena en Vitacura",
    description:
      "Una clínica frente a la laguna. Precisión clínica, calma absoluta.",
    locale: "es_CL",
    type: "website",
    images: [{ url: "/images/facade.jpg", width: 1600, height: 900 }],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#E8F3F1",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-CL"
      className={`${sora.variable} ${cormorant.variable} h-full`}
    >
      <body
        className={`${sora.className} flex min-h-full flex-col bg-background pb-20 text-foreground lg:pb-0`}
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
