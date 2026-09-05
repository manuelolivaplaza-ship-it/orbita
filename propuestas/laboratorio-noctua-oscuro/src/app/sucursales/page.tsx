import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { sucursales } from "@/data/sucursales";

export const metadata: Metadata = {
  title: "Sucursales",
  description:
    "NOCTUA en Vitacura, Providencia y Ñuñoa. El procesamiento nocturno corre en la casa madre.",
};

export default function SucursalesPage() {
  return (
    <>
      <PageIntro
        kicker="Santiago"
        title="Tres puertas. Un turno."
        lead="Se toma en Vitacura, Providencia o Ñuñoa. Se lee en Vitacura. Las muestras viajan antes de las 18:30. El resto es noche."
      />
      <section className="shell grid gap-16 pb-28 md:pb-36">
        {sucursales.map((item, index) => (
          <Reveal
            key={item.slug}
            delay={index * 80}
            className="grid items-center gap-10 border-t border-line pt-12 md:grid-cols-12"
          >
            <div className="md:col-span-6">
              <div className="frame aspect-[3/2]">
                <Image
                  src={item.foto}
                  alt={`NOCTUA ${item.nombre}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <p className="kicker">{item.rol}</p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
                {item.nombre}
              </h2>
              <p className="mt-5 text-paper-dim">{item.direccion}</p>
              <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                {item.metro}
              </p>
              <p className="mt-6 text-sm leading-relaxed text-paper-dim">
                {item.nota}
              </p>
              <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">
                {item.horas}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={item.maps} className="btn btn-ghost">
                  Mapa
                </a>
                <Link href={`/hora`} className="btn btn-amber">
                  Pedir hora
                  <Arrow />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
