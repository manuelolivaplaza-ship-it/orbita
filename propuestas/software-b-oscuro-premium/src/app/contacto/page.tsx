import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/page-intro";
import { encargo, site } from "@/lib/site";
import { uf } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Pida una mira a Sextante. Dos semanas en la operación, una tesis en una hoja. Desde 90 UF. Valparaíso.",
};

export default function ContactoPage() {
  return (
    <>
      <PageIntro
        kicker="Contacto"
        title="Cuéntenos qué opera hoy."
        lede="No hace falta un brief perfecto. Con el nombre de la operación y dónde se pierde el rumbo, basta para tomar la primera altura."
      />

      <div className="frame grid gap-16 pb-24 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
        <aside className="lg:col-span-4 lg:col-start-9">
          <p className="kicker">También</p>
          <p className="mt-4 font-display text-[1.8rem] font-semibold tracking-[-0.03em]">
            <a href={site.whatsappHref} className="link-line">
              {site.phone}
            </a>
          </p>
          <p className="mt-2 text-niebla">WhatsApp o llamada, hora Valparaíso.</p>
          <p className="mt-4">
            <a href={`mailto:${site.email}`} className="link-line">
              {site.email}
            </a>
          </p>

          <p className="kicker mt-12">La mira</p>
          <p className="mt-3 text-[1.02rem] leading-relaxed text-niebla">
            Dos semanas. Una en terreno, una para escribir. Precio cerrado:{" "}
            {uf(encargo[0].price)}. Honorario en UF, por escrito, antes de
            firmar.
          </p>

          <p className="kicker mt-12">Taller</p>
          <address className="mt-3 space-y-1 not-italic text-marfil-dim">
            <p>{site.address.street}</p>
            <p>Valparaíso</p>
            <p>{site.metro}</p>
            <p>{site.hoursShort}</p>
          </address>
        </aside>
      </div>
    </>
  );
}
