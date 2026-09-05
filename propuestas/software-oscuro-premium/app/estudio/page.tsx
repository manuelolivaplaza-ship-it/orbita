import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { disciplines, principles, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Estudio",
  description:
    "Obsidiana es un estudio de software en Lastarria, Santiago. Catorce personas. Cero productos de catálogo.",
};

export default function EstudioPage() {
  return (
    <>
      <PageIntro kicker="El estudio" title="Una mesa. Un filo. Santiago.">
        <p>
          Somos {site.people}. Ingeniería, diseño, operación. Un estudio, no una
          fábrica de features. Trabajamos desde Lastarria y donde esté la faena.
        </p>
      </PageIntro>

      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="relative aspect-[16/9] overflow-hidden ring-1 ring-gold/25">
          <Image
            src="/images/studio.jpg"
            alt="Mesa de trabajo del estudio Obsidiana en Lastarria, de noche."
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-4 font-mono text-[11px] tracking-[0.2em] text-mute uppercase">
          {site.address} · {site.comuna}
        </p>
      </div>

      <section className="mx-auto grid max-w-[1600px] gap-12 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
        <Reveal className="md:col-span-5">
          <h2 className="font-serif text-[clamp(1.8rem,3.4vw,2.8rem)] leading-snug text-ivory italic">
            El nombre no es un adorno. Es una instrucción.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="space-y-6 text-[17px] leading-relaxed text-stone md:col-span-6 md:col-start-7">
          <p>
            La obsidiana se forma cuando la lava se enfría tan rápido que no
            alcanza a cristalizar. Queda vidrio. Oscuro. Cortante. En Chile hay
            volcanes de sobra para entenderlo: la presión hace el material, no
            el discurso.
          </p>
          <p>
            Fundamos el estudio en {site.founded} porque estábamos cansados de
            software que se veía terminado y se deshacía a la tercera semana.
            El encargo típico —una pyme que creció, una operación que ya no cabe
            en Excel, una institución que merece mejor cara— no necesita un
            equipo de ochenta. Necesita criterio.
          </p>
          <p>
            Tomamos cuatro encargos por trimestre. El resto se espera. Preferimos
            decir que no a entregar un sistema que no vamos a poder mirar a la
            cara.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28">
          <p className="font-mono text-[11px] tracking-[0.28em] text-gold uppercase">
            Principios
          </p>
          <ul className="mt-10 grid gap-12 md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06} className="border-t border-line pt-8">
                <p className="font-mono text-[11px] tracking-[0.22em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-4 max-w-md text-stone">{p.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-12 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
        <div className="md:col-span-5">
          <p className="font-mono text-[11px] tracking-[0.28em] text-gold uppercase">
            Oficio en la mesa
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
            Catorce. Sin organigrama de teatro.
          </h2>
          <p className="mt-6 max-w-md text-stone">
            No publicamos retratos de stock ni cargos inflados. Estas son las
            disciplinas que se sientan a la misma mesa, en el mismo encargo.
          </p>
        </div>
        <ul className="divide-y divide-line border-y border-line md:col-span-6 md:col-start-7">
          {disciplines.map((d) => (
            <li
              key={d}
              className="flex items-center justify-between py-4 font-display text-xl tracking-tight md:text-2xl"
            >
              <span>{d}</span>
              <span className="h-[5px] w-[5px] rotate-45 bg-gold" />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
