import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { chequeos } from "@/data/chequeos";
import { clp } from "@/lib/format";

export const metadata: Metadata = {
  title: "Chequeos",
  description:
    "Chequeos preventivos de NOCTUA: Amanecer, Ocaso, Constelación, Mujer y Hombre. Informe al amanecer.",
};

export default function ChequeosPage() {
  return (
    <>
      <PageIntro
        kicker="Chequeos"
        title="Un retrato, no un combo."
        lead="Cada paquete está armado por internista, no por marketing. El Ocaso existe para quien sale a las 18:00 y no puede ayunar de madrugada."
      />
      <section className="shell grid gap-px bg-line pb-28 md:grid-cols-2 md:pb-36">
        {chequeos.map((item, index) => (
          <Reveal key={item.slug} delay={index * 70} className="bg-void p-8 md:p-12">
            <p className="kicker">{item.destacado ? "Destacado" : item.plazo}</p>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight">
              {item.nombre}
            </h2>
            <p className="mt-4 max-w-md text-paper-dim">{item.tagline}</p>
            <p className="mt-8 font-display text-4xl font-semibold nums">
              {clp(item.precio)}
            </p>
            <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
              Ayuno {item.ayuno}
            </p>
            <p className="mt-8 text-sm text-paper-dim">{item.para}</p>
            <ul className="mt-6 space-y-2 text-sm text-paper-dim">
              {item.incluye.map((line) => (
                <li key={line} className="border-t border-line pt-2">
                  {line}
                </li>
              ))}
            </ul>
            <Link
              href={`/hora?chequeo=${item.slug}`}
              className="btn btn-amber mt-10"
            >
              Pedir este
              <Arrow />
            </Link>
          </Reveal>
        ))}
      </section>
    </>
  );
}
