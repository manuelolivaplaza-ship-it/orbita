import type { Metadata } from "next";
import Image from "next/image";
import { BookingForm } from "@/components/booking-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { comunasDomicilio, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Toma a domicilio",
  description:
    "Toma de muestra a domicilio en Santiago. ETER llega temprano, en silencio, a dieciséis comunas de la Región Metropolitana.",
};

const pasos = [
  {
    n: "01",
    t: "Pides la hora",
    d: "Indica dirección, comuna y si hay ayuno. Coordinamos una ventana de 45 minutos.",
  },
  {
    n: "02",
    t: "Llegamos",
    d: "Una profesional con maletín claro, no una ambulancia. El edificio ni se entera.",
  },
  {
    n: "03",
    t: "La muestra viaja",
    d: "Cadena de frío y trazabilidad. El informe llega al mismo correo que en sucursal.",
  },
];

export default function DomicilioPage() {
  return (
    <>
      <PageHero
        kicker="Domicilio"
        title="La mañana, en tu casa."
        lead={`Servicio de ${site.domicilioHours}. Recargo de traslado según comuna. El examen vale lo mismo que en sucursal.`}
      />
      <div className="wrap-wide grid items-center gap-12 pb-20 md:grid-cols-12">
        <Reveal className="md:col-span-6">
          <div className="img-frame aspect-[3/4]">
            <Image
              src="/images/domicilio.jpg"
              alt="Coordinadora de domicilio de ETER en un pasillo con piso de terrazo."
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <div className="md:col-span-5 md:col-start-8">
          {pasos.map((item) => (
            <Reveal key={item.n} className="border-t border-line py-6">
              <p className="eyebrow">{item.n}</p>
              <h2 className="mt-2 font-serif text-3xl">{item.t}</h2>
              <p className="mt-3 text-ink-soft">{item.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
      <section className="border-y border-line py-16">
        <div className="wrap">
          <p className="eyebrow">Comunas</p>
          <h2 className="display mt-4 text-4xl md:text-5xl">Dónde llegamos.</h2>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-4">
            {comunasDomicilio.map((comuna) => (
              <li key={comuna} className="border-t border-line py-3">
                {comuna}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-mute">
            ¿Otra comuna? Escríbenos. Si la ruta de la mañana pasa cerca, la
            abrimos.
          </p>
        </div>
      </section>
      <section className="wrap grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="eyebrow">Pedir visita</p>
          <h2 className="display mt-4 text-5xl">Agenda a domicilio.</h2>
          <p className="mt-4 text-ink-soft">
            Recargo desde $8.900 en el anillo oriente. Te lo confirmamos antes
            de salir.
          </p>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <BookingForm defaultMode="domicilio" />
        </div>
      </section>
    </>
  );
}
