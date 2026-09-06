import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { mesa } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mesa",
  description:
    "Cinco personas. Lectura, pauta, pieza, sitio y medición. Valparaíso.",
};

export default function MesaPage() {
  return (
    <>
      <PageIntro
        mark="Rol de guardia"
        title="Cinco. No un organigrama."
        lead="Quien toma la lectura sigue en la cuenta. No hay un ejecutivo que traduce y un junior que ejecuta. Si el mes está lleno, se lo decimos."
      />

      <section className="pb-24 lg:pb-32">
        <div className="shell">
          <ul>
            {mesa.map((person, i) => (
              <li key={person.slug}>
                <Reveal delay={0.04 * i}>
                  <Link
                    href={`/mesa/${person.slug}`}
                    className="group grid gap-4 border-t border-line py-8 sm:grid-cols-12 sm:items-center"
                  >
                    <span
                      className="flex h-14 w-14 items-center justify-center border border-line font-mono text-[13px] text-cyan-deep sm:col-span-1"
                      aria-hidden
                    >
                      {person.initials}
                    </span>
                    <span className="font-display text-[clamp(1.7rem,3.2vw,2.4rem)] leading-none tracking-tight group-hover:text-blue sm:col-span-4">
                      {person.name}
                    </span>
                    <span className="text-[15px] text-muted sm:col-span-4">
                      {person.role} · {person.station}
                    </span>
                    <span className="font-mono text-[13px] text-muted sm:col-span-3 sm:text-right">
                      {person.email}
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
