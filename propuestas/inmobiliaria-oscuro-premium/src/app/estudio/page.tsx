import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { principles, site, steps, team } from "@/lib/site";

export const metadata: Metadata = {
  title: "El estudio",
  description:
    "Meridiano SpA. Corredora de presentación privada en Vitacura. Tres socios, mandato escrito, valores en UF.",
};

export default function EstudioPage() {
  return (
    <>
      <div className="shell">
        <PageIntro
          folio="03"
          kicker="Meridiano SpA"
          title="Una mesa. Tres firmas."
          lede="Fundada en 2014. No somos un portal con oficina. Somos una corredora chica que presenta poco, y bien. El honorario va por escrito antes de la primera visita al inmueble."
        />
      </div>

      <section className="shell py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="relative aspect-[16/10] overflow-hidden border border-line lg:col-span-7">
            <Image
              src="/images/estudio.jpg"
              alt="Interior del estudio en Nueva Costanera, Vitacura"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <div className="lg:col-span-5 lg:pl-6">
            <Reveal>
              <p className="kicker">{site.coords}</p>
              <h2 className="mt-4 font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-[0.95]">
                {site.address.line}
              </h2>
              <p className="mt-4 text-paper-dim">
                {site.address.city}
                <br />
                {site.hours}
                <br />
                {site.lastHour}
              </p>
              <p className="mt-6 text-[0.95rem] text-paper-dim">
                RUT {site.rut}
                <br />
                {site.cbr}
                <br />
                {site.email}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ink py-20 sm:py-28">
        <div className="shell">
          <Reveal>
            <p className="kicker">Criterio</p>
            <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(2rem,4vw,3.2rem)] leading-[0.95]">
              Lo que no hacemos también es el oficio.
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-10 lg:grid-cols-3">
            {principles.map((p) => (
              <li key={p.folio}>
                <span className="font-display text-3xl text-brass-deep">
                  {p.folio}
                </span>
                <h3 className="mt-4 font-display text-2xl">{p.title}</h3>
                <p className="mt-3 text-paper-dim">{p.text}</p>
              </li>
            ))}
          </ul>
          <ol className="mt-16 grid gap-8 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.folio}>
                <p className="kicker">{s.folio}</p>
                <h3 className="mt-3 font-medium">{s.title}</h3>
                <p className="mt-2 text-[0.95rem] text-paper-dim">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="shell py-20 sm:py-28">
        <Reveal>
          <p className="kicker">Quien firma</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[0.95]">
            Tres socios. El que presenta, responde.
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-12">
          {team.map((l) => (
            <li
              key={l.slug}
              className="grid gap-8 border-t border-line pt-10 lg:grid-cols-12"
            >
              <div className="img-zoom relative aspect-[3/4] max-w-sm lg:col-span-4">
                <Image
                  src={l.image}
                  alt={`Retrato de ${l.name}`}
                  fill
                  sizes="(min-width: 1024px) 30vw, 80vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center lg:col-span-7 lg:col-start-6">
                <p className="kicker">{l.role}</p>
                <h3 className="mt-3 font-display text-4xl leading-tight">
                  {l.name}
                </h3>
                <p className="mt-2 text-brass">{l.territory}</p>
                <p className="mt-5 max-w-[46ch] text-[1.05rem] leading-relaxed text-paper-dim">
                  {l.bio}
                </p>
                <a
                  href={`tel:${l.phone.replace(/\s/g, "")}`}
                  className="mt-6 inline-block tabular text-paper link-line"
                >
                  {l.phone}
                </a>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-16">
          <Link href="/consulta" className="btn btn-primary">
            Pedir un brief
          </Link>
        </div>
      </section>
    </>
  );
}
