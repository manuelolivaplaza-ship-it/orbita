import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Pedir un levantamiento a Traza. Estudio de software en Ñuñoa, Santiago. WhatsApp, correo o el formulario.",
};

export default function ContactoPage() {
  return (
    <>
      <section className="shell pb-10 pt-12 md:pb-14 md:pt-20">
        <h1 className="display max-w-[14ch] text-[clamp(2.8rem,7vw,5.6rem)]">
          Una hoja basta.
        </h1>
        <p className="mt-6 max-w-xl text-[1.08rem] leading-[1.7] text-muted">
          Cuéntenos qué opera hoy y dónde se pierde el rastro. No hace falta un
          brief perfecto. Si el flujo todavía no está claro, lo buscamos juntos.
        </p>
      </section>

      <section className="shell grid gap-14 pb-20 md:grid-cols-12 md:pb-28">
        <div className="md:col-span-7">
          <ContactForm />
        </div>
        <aside className="md:col-span-4 md:col-start-9">
          <figure className="mb-10">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/ventana.jpg"
                alt="Ventana del estudio hacia los techos de Ñuñoa."
                fill
                className="object-cover"
                sizes="(min-width: 768px) 28vw, 100vw"
              />
            </div>
            <figcaption className="caption mt-3">Oficina 402 · Ñuñoa</figcaption>
          </figure>
          <p className="caption">Estudio</p>
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
          <a
            href={site.address.maps}
            className="link-line mt-6 inline-block text-sm"
          >
            Cómo llegar
          </a>
        </aside>
      </section>
    </>
  );
}
