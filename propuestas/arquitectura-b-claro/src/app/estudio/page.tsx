import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CotaLabel } from "@/components/cota-mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { awards, press, team } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Estudio",
  description:
    "COTA es un estudio de seis mesas en Pedro de Valdivia Norte. Arquitectura de talud, luz norte y corte.",
};

export default function EstudioPage() {
  return (
    <>
      <PageIntro
        cota="+612.40"
        kicker="Taller"
        title="Seis mesas bajo el San Cristóbal."
        lead="Una casa de los setenta abierta al norte. Aquí se toman las cotas, se cortan las maquetas y se discute el alero antes que la fachada."
      />

      <section className="pb-20">
        <div className="shell grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden bg-cal-2">
              <Image
                src="/images/taller.jpg"
                alt="Interior del taller COTA en Pedro de Valdivia Norte"
                fill
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-px bg-cobre" />
            </div>
          </Reveal>
          <Reveal className="flex flex-col justify-end lg:col-span-5" delay={0.1}>
            <p className="font-serif text-[1.35rem] leading-snug italic text-ink">
              En 2014 Magdalena Rojas y Vicente Palma abrieron COTA con un
              predio en Lo Curro que nadie quería rellenar. El estudio cabía en
              una mesa. Hoy caben seis, y el criterio es el mismo.
            </p>
            <p className="mt-6 text-[16px] leading-relaxed text-muted">
              No partimos de un estilo. Partimos de un corte: la pendiente, el
              norte, el sismo, la materia que ya está. Tomamos pocos encargos
              para poder estar en cada DOM y en cada vertido.
            </p>
            <p className="font-mono mt-8 text-[12px] tracking-wide text-oxido">
              {site.address.line}
              <br />
              {site.address.city}
              <br />
              {site.coords} · cota {site.cota}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-cal-2 py-20">
        <div className="shell">
          <Reveal>
            <div className="flex items-end justify-between border-b border-line pb-4">
              <h2 className="font-display text-3xl font-semibold tracking-tight">
                La mesa
              </h2>
              <CotaLabel value="6" align="right" />
            </div>
          </Reveal>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((person, index) => (
              <Reveal key={person.slug} delay={index * 0.05}>
                <article>
                  <div className="relative aspect-[3/4] overflow-hidden bg-cal-3">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="(min-width: 1024px) 30vw, 50vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <p className="font-mono mt-4 text-[11px] tracking-[0.16em] text-cobre uppercase">
                    {person.role} · {person.focus}
                  </p>
                  <h3 className="font-display mt-1 text-2xl font-semibold tracking-tight">
                    {person.name}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted">
                    {person.bio}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden bg-cal-2">
              <Image
                src="/images/mesa.jpg"
                alt="Mesa de dibujo en el taller COTA"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-8 relative aspect-[4/3] overflow-hidden bg-cal-2">
              <Image
                src="/images/modelo.jpg"
                alt="Maqueta de cartón de una casa en talud"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <p className="kicker">Premios</p>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight">
              Láminas que salieron de esta mesa.
            </h2>
            <ul className="mt-8">
              {awards.map((item) => (
                <li
                  key={`${item.year}-${item.project}`}
                  className="grid grid-cols-12 gap-3 border-t border-line py-4"
                >
                  <span className="font-mono nums col-span-2 text-[13px] text-cobre">
                    {item.year}
                  </span>
                  <span className="col-span-6 text-[15px]">{item.title}</span>
                  <span className="col-span-4 text-right text-[14px] text-muted">
                    {item.project}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-[13px] tracking-[0.14em] text-muted uppercase">
              {press.join(" · ")}
            </p>
            <Link
              href="/oficio"
              className="link-line mt-8 inline-block text-[12px] tracking-[0.16em] uppercase"
            >
              El oficio
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
