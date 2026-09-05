import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escríbenos. Un correo, una reunión de cuarenta minutos. Estudio en Lastarria, Santiago.",
};

export default function ContactoPage() {
  return (
    <>
      <PageIntro kicker="Contacto" title="Si el problema es de verdad, escríbenos.">
        <p>
          Si buscas el proveedor más barato, hay directorios para eso. Si el
          nudo es operativo —y no un rediseño cosmético del mismo Excel—
          estamos.
        </p>
      </PageIntro>

      <div className="mx-auto grid max-w-[1600px] gap-16 px-5 pb-24 md:grid-cols-12 md:px-10">
        <div className="md:col-span-7">
          <ContactForm />
        </div>
        <aside className="md:col-span-4 md:col-start-9">
          <div className="relative aspect-[4/5] overflow-hidden ring-1 ring-gold/25">
            <Image
              src="/images/lastarria.jpg"
              alt="Calle de Lastarria de noche, adoquines mojados y una puerta iluminada."
              fill
              sizes="(min-width: 768px) 30vw, 100vw"
              className="object-cover"
            />
          </div>
          <dl className="mt-8 space-y-6 text-sm">
            <div>
              <dt className="font-mono text-[10px] tracking-[0.22em] text-mute uppercase">
                Estudio
              </dt>
              <dd className="mt-2 text-ivory">
                {site.address}
                <br />
                {site.comuna}
              </dd>
              <dd className="mt-1 text-mute">{site.coords}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.22em] text-mute uppercase">
                Correo y celular
              </dt>
              <dd className="mt-2">
                <a href={`mailto:${site.email}`} className="link-line text-ivory">
                  {site.email}
                </a>
              </dd>
              <dd className="mt-1">
                <a href={site.phoneHref} className="link-line text-stone">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.22em] text-mute uppercase">
                Horario
              </dt>
              <dd className="mt-2 text-ivory">{site.hours}</dd>
              <dd className="mt-1 text-stone">
                Reunión en el estudio o por videollamada. Respondemos en 48 horas
                hábiles.
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </>
  );
}
