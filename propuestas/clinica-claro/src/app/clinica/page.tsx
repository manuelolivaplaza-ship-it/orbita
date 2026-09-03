import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { principles } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "La casa",
  description:
    "CLARO trabaja en una casa de Los Conquistadores, Providencia. Un pabellón de vidrio, ocho salas, un laboratorio. Desde 2018.",
};

export default function ClinicaPage() {
  return (
    <>
      <PageIntro
        kicker="La casa"
        title="Una casa, un pabellón, un patio de olivos."
        lead="CLARO no nació en un recinto. Nació cuando Elena Vargas dejó un box de doce minutos y buscó un lugar donde la consulta cupiera. Esta casa, 2018."
      />

      <section className="pb-16 lg:pb-24">
        <div className="shell">
          <Reveal className="relative aspect-[16/9]">
            <Image
              src="/images/fachada.jpg"
              alt="Fachada de CLARO en Los Conquistadores: estuco crema, pabellón de vidrio, olivos y la cordillera"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">El método</p>
            <h2 className="font-display mt-4 text-[clamp(1.9rem,3.4vw,2.8rem)] font-medium leading-[1.02] tracking-tight">
              El pabellón no es decoración. Es la espera que merecemos.
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="space-y-5 text-[17px] leading-[1.8] text-muted lg:col-span-6 lg:col-start-7">
            <p>
              La casa es de los años cuarenta. El pabellón de vidrio se agregó
              en 2018, cuando abrimos. El patio de olivos es el mismo que
              encontramos: lo único que hicimos fue dejarle luz.
            </p>
            <p>
              No competimos en volumen. El cupo de cada médico está cerrado a
              propósito. Si el mes está lleno, recepción se lo dice el mismo día
              hábil — no le inventa una hora de quince minutos «para que
              alcance».
            </p>
            <p>
              El laboratorio está en la planta baja. El ECG, en la sala 02. La
              ginecología tiene eco propio. La psiquiatría, una acústica
              distinta. El pasillo es corto para que una derivación no sea un
              trámite entre recintos.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[70vh]">
            <Image
              src="/images/pasillo.jpg"
              alt="Pasillo de luz: un banco de lino y un rectángulo de sol en el roble"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
          <div className="relative min-h-[70vh]">
            <Image
              src="/images/consulta.jpg"
              alt="Sala de consulta: escritorio de roble, dos sillones de lino y el patio detrás del vidrio"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="shell">
          <Reveal>
            <p className="kicker">Cinco reglas</p>
            <h2 className="font-display mt-4 max-w-[16ch] text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[0.98] tracking-tight">
              Lo que no se negocia en esta casa.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {principles.map((item) => (
              <Reveal key={item.n}>
                <p className="font-sans nums text-[12px] tracking-[0.18em] text-sol">
                  {item.n}
                </p>
                <h3 className="font-display mt-3 text-[1.3rem] font-medium leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-luz-2 py-24 lg:py-32">
        <div className="shell grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">Desde {site.founded}</p>
            <h2 className="font-display mt-4 text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[0.98] tracking-tight">
              Ocho años. La misma puerta.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-muted">
              No abrimos sucursales. No compramos un piso en un edificio de
              consultas. El estacionamiento son cuatro autos. El WhatsApp lo
              responde alguien que está en la casa.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              {site.colegio}. {site.superintendencia}. RUT {site.rut}.
            </p>
            <Link
              href="/equipo"
              className="font-sans mt-8 inline-flex text-[0.88rem] font-semibold tracking-wide text-sol"
            >
              Quién atiende →
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[4/5] lg:col-span-6 lg:col-start-7">
            <Image
              src="/images/patio.jpg"
              alt="Patio de olivos a la hora de la mañana"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
