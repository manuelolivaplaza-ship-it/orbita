import type { Metadata } from "next";
import Link from "next/link";
import { Frame } from "@/components/frame";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { accounts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cuentas",
  description:
    "Seis cuentas. Caleta, astillero, viña, logística, taller, editora. Lo que se sostuvo, con cifra.",
};

export default function CuentasPage() {
  return (
    <>
      <PageIntro
        mark="Bitácora"
        title="Seis cuentas. Cifra, no teatro."
        lead="No publicamos un ROAS de un día. Publicamos lo que se sostuvo un trimestre. La pauta la pagó el cliente."
      />

      <section className="pb-24 lg:pb-32">
        <div className="shell grid gap-x-8 gap-y-14 sm:grid-cols-2">
          {accounts.map((item, i) => (
            <Reveal key={item.slug} delay={0.04 * (i % 2)}>
              <Link href={`/cuentas/${item.slug}`} className="group block">
                <Frame
                  src={item.image}
                  alt=""
                  ratio={i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}
                  sizes="(min-width: 640px) 50vw, 100vw"
                  priority={i < 2}
                />
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <p className="font-mono text-[12px] tracking-[0.08em] text-muted uppercase">
                    {item.tx} · {item.place}
                  </p>
                  <p className="font-mono nums text-[12px] text-cyan-deep">
                    {item.year}
                  </p>
                </div>
                <h2 className="font-display mt-2 text-[1.7rem] leading-tight tracking-tight group-hover:text-blue">
                  {item.title}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {item.summary}
                </p>
                <p className="mt-3 font-mono nums text-[1.2rem] text-ink">
                  {item.metric}
                  <span className="ml-2 text-[12px] text-muted">
                    {item.metricLabel}
                  </span>
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
