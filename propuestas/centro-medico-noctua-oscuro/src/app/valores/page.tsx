import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { convenios, prices } from "@/data/content";
import { formatCLP } from "@/lib/format";

export const metadata: Metadata = {
  title: "Valores",
  description:
    "Valores de consulta NOCTUA Vitacura. Medicina interna, sueño, cardiología, neurología, ginecología, imagen y laboratorio. Bono electrónico.",
};

export default function ValoresPage() {
  return (
    <>
      <PageIntro
        kicker="Valores"
        title="Desde. Se confirma al agendar."
        lead="Bono electrónico. Boleta reembolsable el mismo día. El porcentaje lo define tu plan: te orientamos con el código, no con un número que no controlamos."
      />

      <section className="pb-16">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="border-t border-line">
              {prices.map((item) => (
                <Reveal
                  key={item.name}
                  className="grid gap-2 border-b border-line py-7 md:grid-cols-12 md:items-end"
                >
                  <p className="font-display text-3xl font-semibold tracking-tight md:col-span-5">
                    {item.name}
                  </p>
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted md:col-span-4">
                    {item.detail}
                  </p>
                  <p className="nums font-display text-2xl tracking-tight md:col-span-3 md:text-right">
                    {formatCLP(item.amount)}
                  </p>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted">
              Laboratorio, ver{" "}
              <Link href="/laboratorio" className="link-line text-paper">
                la sala 08
              </Link>
              . Polisomnografía incluye la noche en esta casa e informe.
            </p>
          </div>
          <div className="frame relative hidden min-h-[420px] lg:col-span-4 lg:block">
            <Image
              src="/images/detail.jpg"
              alt="Lino oscuro y fonendo bajo luz ámbar rasante"
              fill
              sizes="33vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-line py-24">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">Convenios</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
              Particular, ISAPRE, FONASA.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={80}>
            <ul className="space-y-4">
              {convenios.map((item) => (
                <li
                  key={item}
                  className="border-t border-line pt-4 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-paper-dim"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/agenda" className="btn btn-amber mt-12 w-fit">
              Pedir hora
              <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
