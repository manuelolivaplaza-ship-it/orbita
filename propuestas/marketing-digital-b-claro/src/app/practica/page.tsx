import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { practices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Práctica",
  description:
    "Lectura, territorio, inversión, piezas, canal y cuenta. El oficio de NORTE, en seis horas de luz.",
};

export default function PracticaPage() {
  return (
    <>
      <PageIntro
        kicker="Práctica"
        title="El oficio, en horas de luz."
        lead="No vendemos un 360. Vendemos seis oficios con un mismo criterio: si no se puede defender a las once de la mañana, no entra."
      />
      <section className="pb-24 lg:pb-32">
        <div className="shell">
          <ul className="divide-y divide-linea border-y border-linea">
            {practices.map((item, index) => (
              <li key={item.slug}>
                <Reveal delay={index * 0.04}>
                  <Link
                    href={`/practica/${item.slug}`}
                    className="group grid gap-4 py-10 lg:grid-cols-12 lg:items-baseline"
                  >
                    <span className="font-display nums text-norte lg:col-span-2">
                      {item.kicker}
                    </span>
                    <span className="font-display text-[2.1rem] leading-[0.95] tracking-tight group-hover:text-norte lg:col-span-4">
                      {item.title}
                    </span>
                    <span className="max-w-[46ch] text-[16px] leading-relaxed text-muted lg:col-span-5">
                      {item.lead}
                    </span>
                    <span className="hidden text-right text-norte lg:col-span-1 lg:block">
                      →
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
