import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { principles, schools } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "El instituto",
  description:
    "ETER es un instituto universitario de sede única en El Arrayán. Fundado en 2014. Ocho carreras, tres escuelas, un claustro.",
};

export default function InstitutoPage() {
  return (
    <>
      <PageIntro
        kicker="El instituto"
        title="Una sede. Un predio. Un criterio."
        lead="Fundado en 2014 en la precordillera de Santiago. No competimos por volumen. El cupo es el oficio: si no cabe en un taller de doce, no entra al plan."
      />

      <section className="border-t border-linea">
        <div className="grid md:grid-cols-12">
          <div className="relative min-h-[380px] md:col-span-7 md:min-h-[620px]">
            <Image
              src="/images/pasillo.jpg"
              alt="Pasillo de hormigón con una franja de sol y una puerta de raulí al fondo"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:col-span-5 md:px-12 lg:px-16">
            <Reveal>
              <p className="kicker">Por qué ETER</p>
              <h2 className="mt-5 font-display text-4xl font-light tracking-tight md:text-5xl">
                El éter era el medio de la luz.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-tinta-suave">
                El nombre no es un adorno. Un instituto chico, a 847 metros,
                con aire y rigor. Tres escuelas — Tierra y Atmósfera, Forma y
                Cálculo, Palabra y Ciudad — y nada que no se pueda decir en
                voz alta en el claustro.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-36">
        <div className="shell">
          <Reveal>
            <p className="kicker">Cuatro reglas</p>
            <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-light tracking-tight">
              Lo que no negociamos.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
            {principles.map((item, index) => (
              <Reveal
                key={item.n}
                delay={index * 80}
                className="border-t border-linea pt-8"
              >
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-cielo">
                  {item.n}
                </p>
                <h3 className="mt-4 font-display text-3xl font-light">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-tinta-suave">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-linea py-24 lg:py-36">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="kicker">Tres escuelas</p>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.6rem)] font-light tracking-tight">
              Tierra, forma, palabra.
            </h2>
          </Reveal>
          <div className="lg:col-span-8">
            {schools.map((school, index) => (
              <Reveal
                key={school.slug}
                delay={index * 80}
                className="border-t border-linea py-8 last:border-b"
              >
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-cielo">
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-display text-3xl font-light tracking-tight">
                  {school.title}
                </h3>
                <p className="mt-3 max-w-lg text-tinta-suave">{school.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-36">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="kicker">Cifras que importan</p>
            <h2 className="mt-4 font-display text-4xl font-light tracking-tight md:text-5xl">
              {site.founded}–{new Date().getFullYear()}. El mismo predio.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-tinta-suave">
              No hay segunda sede. No hay marca blanca. El instituto es este
              campus, este cuerpo, estas ocho carreras. Magdalena Vidal es
              rectora desde 2019.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/cuerpo" className="btn btn-ink">
                El cuerpo
                <Arrow />
              </Link>
              <Link href="/campus" className="btn btn-ghost">
                El campus
              </Link>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-8" delay={120}>
            <div className="frame relative aspect-[4/5]">
              <Image
                src="/images/papel.jpg"
                alt="Sello seco en papel hueso, luz rasante"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-gris">
              Sello de la Fundación · papel hueso
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
