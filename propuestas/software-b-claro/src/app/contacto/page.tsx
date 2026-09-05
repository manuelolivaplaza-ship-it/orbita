import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { SunPath } from "@/components/sun-path";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Pedir un levantamiento a Meridiano. Taller de software en Providencia, Santiago.",
};

export default function ContactoPage() {
  return (
    <>
      <section className="sheet pb-10 pt-12 md:pb-14 md:pt-20">
        <p className="kicker">
          <span className="text-norte">04</span>
          <span className="mx-2">·</span>
          Contacto
        </p>
        <h1 className="display mt-5 max-w-[14ch] text-[clamp(3rem,8vw,6.4rem)]">
          Una hoja basta.
        </h1>
        <p className="mt-8 max-w-xl text-[1.12rem] leading-[1.7] text-muted">
          Cuéntanos qué opera hoy y dónde se pierde el rumbo. No hace falta un
          brief perfecto. Si el eje todavía no está claro, lo buscamos juntos.
        </p>
      </section>

      <section className="sheet grid gap-14 pb-24 md:grid-cols-12 md:pb-32">
        <div className="md:col-span-7">
          <ContactForm />
        </div>
        <aside className="md:col-span-4 md:col-start-9">
          <div className="img-cut relative mb-10 aspect-[4/5]">
            <Image
              src="/images/ventana.jpg"
              alt="Luz norte recortada sobre el muro del taller."
              fill
              className="object-cover"
              sizes="(min-width: 768px) 28vw, 100vw"
            />
          </div>
          <p className="kicker">Taller</p>
          <address className="mt-4 space-y-2 text-[1.02rem] not-italic leading-relaxed">
            <p>{site.address.street}</p>
            <p>
              {site.address.commune}, {site.address.city}
            </p>
            <p className="pt-4">
              <a className="link-n" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p>
              <a className="link-n" href={site.phoneHref}>
                {site.phone}
              </a>
            </p>
            <p>
              <a className="link-n" href={site.whatsappHref}>
                WhatsApp · {site.whatsapp}
              </a>
            </p>
          </address>
          <p className="mt-8 text-sm leading-relaxed text-muted">{site.hours}</p>
          <div className="mt-10">
            <SunPath compact />
          </div>
        </aside>
      </section>
    </>
  );
}
