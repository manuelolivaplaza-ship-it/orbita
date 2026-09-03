import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { principles, steps } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "El estudio",
  description:
    "CLARO trabaja en un piso de Providencia, con terraza al cerro San Cristóbal. Cuatro contadores. Una libreta abierta.",
};

export default function EstudioPage() {
  return (
    <>
      <PageIntro
        kicker="El estudio"
        title="La casa donde las cifras se ven a plena luz."
        lead="Santa Magdalena 125, piso 4, Providencia. Un piso con ventana al cerro, una terraza con albahaca y una mesa de roble. No es una torre. Es el oficio."
      />

      <section className="pb-16 lg:pb-24">
        <div className="shell grid gap-3 lg:grid-cols-12">
          <Reveal className="relative aspect-[4/5] lg:col-span-7 lg:aspect-auto lg:min-h-[640px]">
            <Image
              src="/images/fachada.jpg"
              alt="Fachada de piedra crema en Santa Magdalena 125, Providencia"
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <div className="grid gap-3 lg:col-span-5">
            <Reveal delay={0.08} className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[314px]">
              <Image
                src="/images/terraza.jpg"
                alt="Terraza con vista al cerro San Cristóbal"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={0.14} className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[314px]">
              <Image
                src="/images/pasillo.jpg"
                alt="Pasillo de terrazo y aplique de cobre, luz de mañana"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">La casa</p>
            <h2 className="font-display mt-4 text-[clamp(2rem,3.6vw,3rem)] font-medium leading-[1.05] tracking-tight">
              Abrimos en 2014. El escritorio de Manuel Montt se fue. El método, no.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-5 text-[17px] leading-[1.8] text-muted">
              <p>
                Elena Vidal abrió CLARO cuando todavía era un solo escritorio
                al lado del metro Manuel Montt. El primer cliente era una
                diseñadora que boleteaba y no sabía cuánto guardar. Esa
                conversación — la de la plata de verdad — sigue siendo el
                oficio.
              </p>
              <p>
                Joaquín, Amparo y Nicolás se fueron sumando. Cuatro sillas
                alrededor de una mesa de roble. Si hay una quinta cartera que
                no cabe, no entra. El cupo no es marketing. Es cómo se lee un
                F29 hasta el final.
              </p>
              <p>
                En 2022 nos mudamos a Santa Magdalena. La terraza mira el
                cerro. En invierno el smog a veces no deja ver la Virgen. En
                esos días también se trabaja: el número no depende del cielo.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-24 lg:py-32">
        <div className="shell grid gap-px bg-line lg:grid-cols-3">
          {principles.map((item, index) => (
            <Reveal
              key={item.room}
              delay={index * 0.08}
              className="bg-luz px-8 py-10 lg:px-10 lg:py-12"
            >
              <p className="text-cobre text-sm font-semibold tracking-[0.18em]">
                {item.room}
              </p>
              <h3 className="font-display mt-5 text-3xl font-medium tracking-tight">
                {item.title}
              </h3>
              <p className="mt-4 text-[16px] leading-relaxed text-muted">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="shell">
          <Reveal>
            <p className="kicker">Cómo se entra</p>
            <h2 className="font-display mt-4 max-w-xl text-[clamp(2rem,3.8vw,3.2rem)] font-medium tracking-tight">
              Cuatro pasos. Ninguno es un embudo.
            </h2>
          </Reveal>
          <ol className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, index) => (
              <Reveal
                key={item.room}
                delay={index * 0.06}
                className="bg-luz px-6 py-8"
              >
                <p className="font-display nums text-4xl font-medium text-cobre/80">
                  {item.room}
                </p>
                <h3 className="font-display mt-5 text-xl font-medium tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative min-h-[56vh] overflow-hidden">
        <Image
          src="/images/ventana.jpg"
          alt="Ventana del cuarto piso, con el cerro y los Andes"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/30" />
        <div className="shell relative flex min-h-[56vh] items-end py-12">
          <div>
            <p className="text-[12px] tracking-[0.2em] text-luz/80 uppercase">
              {site.address.line} · {site.metro}
            </p>
            <p className="font-display mt-3 max-w-xl text-3xl font-medium text-luz">
              {site.terraceHours}
            </p>
            <Link
              href="/contacto"
              className="mt-8 inline-flex h-12 items-center bg-luz px-6 text-[0.9rem] font-semibold tracking-wide text-ink"
            >
              Pedir una hora
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
