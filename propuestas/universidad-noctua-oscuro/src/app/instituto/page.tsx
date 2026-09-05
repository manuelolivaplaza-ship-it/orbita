import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { masters, principles, schools } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "El instituto",
  description:
    "NOCTUA es un instituto universitario nocturno de sede única en Recoleta. Ocho carreras, tres escuelas, seminario de doce.",
};

export default function InstitutoPage() {
  return (
    <>
      <PageIntro
        kicker="El instituto"
        title="Una sede. Una hora. Ocho oficios."
        lead={`Fundación Instituto NOCTUA, ${site.founded}. Recoleta, falda del San Cristóbal. No somos el vespertino de otra universidad: el recinto eligió la noche porque el objeto de estudio ocurre entonces.`}
      />

      <section className="relative min-h-[56svh] overflow-hidden">
        <Image
          src="/images/terraza.jpg"
          alt="Terraza del campus con un farol ámbar y Santiago encendido"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/10 to-transparent" />
      </section>

      <section className="border-y border-line py-24 lg:py-32">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">Principios</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Lo que no se negocia.
            </h2>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            {principles.map((item, index) => (
              <Reveal
                key={item.n}
                delay={index * 70}
                className="border-t border-line py-8 last:border-b"
              >
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
                  {item.n}
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-paper-dim">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="shell">
          <Reveal>
            <p className="kicker">Escuelas</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Tres. El cielo, el cuerpo, la ciudad.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-line md:grid-cols-3">
            {schools.map((school, index) => (
              <Reveal
                key={school.slug}
                delay={index * 80}
                className="bg-void p-8 md:p-10"
              >
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
                  0{index + 1}
                </p>
                <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight">
                  {school.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-paper-dim">
                  {school.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line py-24 lg:py-32">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">Postgrado</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
              Tres magíster. El mismo recinto.
            </h2>
            <p className="mt-6 max-w-sm text-paper-dim">
              No son un anexo comercial. Se abren cuando el pregrado ya tiene
              oficio. Cupos chicos, titulares que firman.
            </p>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            {masters.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 70}
                className="border-t border-line py-8 last:border-b"
              >
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-amber">
                  {item.years}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper-dim">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="shell flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <p className="kicker">Siguiente</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
              El campus. La terraza. El cerro.
            </h2>
          </Reveal>
          <Link href="/campus" className="btn btn-amber">
            Entrar
            <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
