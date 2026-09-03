import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { SantiagoClock } from "@/components/santiago-clock";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escribe a Alba. Estudio de software en Lastarria, Santiago. Correo, WhatsApp o una visita con hora.",
};

export default function ContactoPage() {
  return (
    <>
      <section className="wrap pb-10 pt-12 md:pb-14 md:pt-20">
        <p className="eyebrow">Contacto</p>
        <h1 className="display mt-5 max-w-[14ch] text-[clamp(3rem,8vw,6.4rem)]">
          Un correo basta.
        </h1>
        <p className="mt-8 max-w-xl text-[1.12rem] leading-[1.7] text-muted">
          Cuéntanos qué opera hoy y qué duele. No hace falta un brief
          perfecto. Si el problema está claro —o si todavía no— lo miramos
          juntos.
        </p>
      </section>

      <section className="wrap grid gap-14 pb-24 md:grid-cols-12 md:pb-32">
        <div className="md:col-span-7">
          <ContactForm />
        </div>
        <aside className="md:col-span-4 md:col-start-9">
          <div className="img-frame relative mb-10 aspect-[4/3]">
            <Image
              src="/images/table.jpg"
              alt="Mesa del estudio con café y un peso de cobre."
              fill
              className="object-cover"
              sizes="(min-width: 768px) 30vw, 100vw"
            />
          </div>
          <p className="eyebrow">Estudio</p>
          <address className="mt-4 space-y-2 text-[1.02rem] not-italic leading-relaxed">
            <p>{site.address.street}</p>
            <p>
              {site.address.commune}, {site.address.city}
            </p>
            <p className="pt-4">
              <a className="link-line" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p>
              <a className="link-line" href={site.phoneHref}>
                {site.phone}
              </a>
            </p>
            <p>
              <a className="link-line" href={site.whatsappHref}>
                WhatsApp · {site.whatsapp}
              </a>
            </p>
          </address>
          <p className="mt-8 text-sm leading-relaxed text-muted">{site.hours}</p>
          <SantiagoClock className="mt-3 block eyebrow" />
        </aside>
      </section>
    </>
  );
}
