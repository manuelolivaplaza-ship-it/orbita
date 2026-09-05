import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { rooms } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Espacio",
  description:
    "Casa en Antonio Varas 2650, Providencia. Luz norte, lino, un árbol en el patio. Metro Los Leones.",
};

const facts = [
  { label: "Dirección", value: `${site.address.line1}, ${site.address.commune}` },
  { label: "Metro", value: site.metro },
  { label: "Estacionamiento", value: site.parking },
  { label: "Horario", value: site.hoursShort },
];

export default function EspacioPage() {
  return (
    <>
      <PageIntro
        kicker="Espacio"
        title="Una casa. No un box de clínica."
        lead="Antonio Varas 2650, Providencia. Seis minutos a pie desde Los Leones. Luz norte, lino, un árbol en el patio. Sin letreros de pasillo."
      />

      <section className="pb-16">
        <div className="shell">
          <div className="frame relative aspect-[16/9] min-h-[280px]">
            <Image
              src="/images/fachada.jpg"
              alt="Casa de dos pisos en una calle arbolada de Providencia"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gris">
            Antonio Varas 2650, Providencia — la esquina con los plátanos
          </p>
        </div>
      </section>

      <section className="border-y border-linea">
        <div className="shell grid gap-8 py-10 md:grid-cols-4">
          {facts.map((item) => (
            <div key={item.label}>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
                {item.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-tinta-suave">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="shell grid gap-16">
          {rooms.map((room, index) => (
            <Reveal
              key={room.src}
              className={`grid items-center gap-10 lg:grid-cols-12 ${
                index % 2 ? "" : ""
              }`}
            >
              <div
                className={`frame relative aspect-[16/10] ${
                  index % 2
                    ? "lg:col-span-6 lg:col-start-7"
                    : "lg:col-span-7"
                }`}
              >
                <Image
                  src={room.src}
                  alt={room.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>
              <p
                className={`font-display text-3xl font-light italic leading-snug text-tinta-suave ${
                  index % 2
                    ? "lg:col-span-5 lg:col-start-1 lg:row-start-1"
                    : "lg:col-span-4"
                }`}
              >
                {room.caption}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-linea py-20">
        <div className="shell grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="kicker">Cómo llegar</p>
            <h2 className="mt-4 font-display text-4xl font-light tracking-tight">
              Los Leones. Seis minutos a pie.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-tinta-suave">
              Bajada Los Leones, hacia Antonio Varas. Timbre sin letrero
              clínico: dice ETER. Si vienes en auto, hay cuatro cupos en el
              predio — avísanos al agendar.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={site.address.maps} className="btn btn-ink">
                Abrir mapa
                <Arrow />
              </a>
              <Link href="/primera" className="btn btn-ghost">
                Pedir primera hora
              </Link>
            </div>
          </div>
          <div className="frame relative aspect-[16/10] lg:col-span-5 lg:col-start-8">
            <Image
              src="/images/patio.jpg"
              alt="Patio interior con un árbol, banco de madera y muro pálido"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
