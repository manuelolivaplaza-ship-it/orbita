import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { materials, studio, team } from "@/lib/studio";

export const metadata: Metadata = {
  title: "Estudio",
  description:
    "UMBRAL es un estudio de arquitectura en Las Condes. Nueve personas, un arquitecto a cargo de cada encargo.",
};

export default function EstudioPage() {
  return (
    <>
      <PageIntro
        kicker="Las Condes · desde 2004"
        title="El estudio"
        lead="Nueve personas. Pocos encargos. Quien dibuja el corte visita el hormigón."
      />

      <section className="shell grid gap-12 py-16 md:py-24 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <p className="font-display text-3xl leading-snug md:text-[2.2rem]">
            La obra habla. El resto —el estudio, esta página, el render— calla.
          </p>
          <div className="mt-8 space-y-6 text-[15px] leading-8 text-paper-dim">
            <p>
              UMBRAL nació en {studio.founded} con una regla que todavía no
              negociamos: un encargo, un arquitecto a cargo, de la primera
              conversación hasta la entrega de llaves. No hay un equipo que
              “desarrolla” y otro que “administra”. Hay un nombre en el plano y
              el mismo nombre en la faena.
            </p>
            <p>
              Trabajamos residencial y obra nueva de alto estándar. Casas en
              ladera, costa y sur. Un taller. Un pabellón de tierra. Tomamos
              pocos para poder estar. Si el predio no calza —por programa, por
              presupuesto, por plazos— lo decimos altiro.
            </p>
            <p>
              El estudio está en El Golf, en un piso chico. Maquetas sobre la
              mesa, no en vitrina. La conversación de encargo dura una hora y no
              se cobra. El anteproyecto sí: es trabajo, no un sketch de
              cortesía.
            </p>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.1}>
          <figure>
            <div className="relative aspect-[4/5] overflow-hidden border border-line">
              <Image
                src="/images/estudio.jpg"
                alt="Estudio UMBRAL en Las Condes después de hora: mesa de roble, maquetas, una lámpara encendida"
                fill
                sizes="40vw"
                className="object-cover"
              />
            </div>
            <figcaption className="plaque mt-3">
              Estudio · Isidora Goyenechea 3470 · después de hora
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <section className="border-y border-line bg-ink py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="kicker">Materia</p>
            <h2 className="mt-4 font-display text-4xl">Lo que se toca.</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8">
            {materials.map((item) => (
              <div key={item.title} className="border-t border-line pt-5">
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-paper-dim">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-16 md:py-24">
        <p className="kicker">Equipo</p>
        <h2 className="mt-4 font-display text-4xl">Nombres, no retratos.</h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-paper-dim">
          No publicamos fotos del equipo. La obra se visita; las caras, no.
        </p>
        <ul className="mt-12 divide-y divide-line border-y border-line">
          {team.map((person) => (
            <li
              key={person.name}
              className="grid gap-1 py-5 sm:grid-cols-12 sm:items-baseline"
            >
              <p className="font-display text-xl sm:col-span-5">{person.name}</p>
              <p className="text-sm text-paper-dim sm:col-span-3">{person.role}</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted sm:col-span-4 sm:text-right">
                {person.focus}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <Link href="/encargo" className="btn">
            Conversar sobre tu proyecto
          </Link>
        </div>
      </section>
    </>
  );
}
