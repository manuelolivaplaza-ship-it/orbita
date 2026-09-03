import type { Metadata, Viewport } from "next";
import { Fraunces, Geist } from "next/font/google";

import { CtaBand } from "@/components/cta-band";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsappFab } from "@/components/whatsapp-fab";
import { clinic } from "@/lib/clinic";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2C4A3E",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://alba.vet"),
  title: {
    default: "Alba · Clínica veterinaria en Palermo",
    template: "%s · Alba",
  },
  description:
    "Clínica veterinaria de alta complejidad en Palermo, Buenos Aires. Consulta, cirugía, laboratorio, internación y urgencias las 24 horas.",
  openGraph: {
    title: "Alba · Clínica veterinaria en Palermo",
    description: clinic.tagline,
    locale: "es_AR",
    type: "website",
    images: [{ url: "/images/facade.jpg", width: 1600, height: 900 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: clinic.legalName,
  description: clinic.lede,
  telephone: clinic.phoneTel,
  email: clinic.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: clinic.address,
    addressLocality: clinic.neighborhood,
    addressRegion: "CABA",
    addressCountry: "AR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-AR"
      className={`${geist.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#contenido"
          className="bg-primary text-primary-foreground sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:px-3 focus:py-2"
        >
          Saltar al contenido
        </a>
        <SiteHeader />
        <main id="contenido" className="flex-1 overflow-x-clip">
          {children}
        </main>
        <CtaBand />
        <SiteFooter />
        <WhatsappFab />
      </body>
    </html>
  );
}
