import type { Metadata } from "next";
import Image from "next/image";
import { ConsultForm } from "@/components/consult-form";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mostrador",
  description:
    "ETER en Av. Independencia 3142. Sala de piezas, cruce por ficha, retiro altiro.",
};

export default function MostradorPage() {
  return (
    <>
      <PageIntro
        kicker="La sala"
        title="Independencia, con luz."
        lead="La calle de los repuestos de Santiago, tratada como sala. No hay mostrador de rejas. Hay ficha, estantería y una mesa para cruzar la pieza."
      />
      <section className="py-16 lg:py-24">
        <div className="shell grid gap-10 lg:grid-cols-12">
          <Reveal className="relative aspect-[16/9] overflow-hidden lg:col-span-7">
            <Image
              src="/images/sala.jpg"
              alt="Pasillo de estantería blanca que se pierde en la niebla, nave de concreto"
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5">
            <p className="kicker">Dirección</p>
            <p className="font-display mt-4 text-4xl leading-tight tracking-tight">
              {site.address.line}
              <br />
              {site.address.city}
            </p>
            <p className="mt-6 text-[16px] leading-relaxed text-muted">
              {site.metro}. Estacionamiento en calle. Si vienes con el auto en
              grúa, avisa: te preparamos la pieza.
            </p>
            <dl className="mt-8 space-y-4 text-[15px]">
              <div>
                <dt className="text-[11px] tracking-[0.16em] text-muted uppercase">
                  Horario
                </dt>
                <dd className="mt-1">{site.hours}</dd>
              </div>
              <div>
                <dt className="text-[11px] tracking-[0.16em] text-muted uppercase">
                  RUT
                </dt>
                <dd className="font-sku mt-1 text-[13px]">{site.rut}</dd>
              </div>
            </dl>
            <a
              href={site.address.maps}
              className="font-ui mt-8 inline-flex h-12 items-center border border-ink px-6 text-[0.78rem] font-medium tracking-[0.14em] uppercase"
            >
              Cómo llegar
            </a>
          </Reveal>
        </div>
      </section>
      <section className="border-t border-line py-20">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="relative aspect-[4/3] overflow-hidden lg:col-span-5">
            <Image
              src="/images/mostrador.jpg"
              alt="Cajas mate sobre el mostrador de concreto, luz de clerestory"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="kicker">Escribir</p>
            <h2 className="font-display mt-4 text-4xl tracking-tight">
              Avisa antes si la pieza es grande.
            </h2>
            <p className="mt-4 mb-8 text-[16px] text-muted">
              Radiadores, kits y baterías se apartan. El resto, altiro.
            </p>
            <ConsultForm />
          </div>
        </div>
      </section>
    </>
  );
}
