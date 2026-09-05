import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { equipo } from "@/data/equipo";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "ETER es un laboratorio clínico en Santiago. Precisión, calma y un informe que se puede leer.",
};

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        kicker="Nosotros"
        title="Un laboratorio que respira."
        lead="Nacimos en Providencia en 2022, cansados de salas de espera con televisor y de informes que parecen escritos para una máquina. Quisimos otra cosa."
      />
      <div className="wrap-wide pb-16">
        <div className="img-frame aspect-[16/8]">
          <Image
            src="/images/andes.jpg"
            alt="Un matraz vacío frente a un ventanal helado, con los Andes al amanecer."
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <figcaption>Vitacura · el laboratorio mira a la cordillera</figcaption>
      </div>
      <section className="wrap grid gap-12 pb-20 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <h2 className="display text-5xl md:text-6xl">Por qué Eter.</h2>
        </Reveal>
        <Reveal className="md:col-span-6 md:col-start-7" delay={80}>
          <p className="text-lg leading-relaxed text-ink-soft">
            En la física antigua, el éter era el medio invisible por el que
            viajaba la luz. Un laboratorio clínico hace el mismo trabajo: toma
            lo que el cuerpo no muestra y lo vuelve claro. Sin teatralidad. Sin
            bata como disfraz. Con métodos acreditados y una sala que no
            acelera el pulso.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Acreditamos calidad bajo ISO 15189. Los analizadores se calibran
            como se afina un instrumento. El equipo de toma de muestras ensaya
            el gesto hasta que deja de doler —en lo posible, y siempre con
            tiempo.
          </p>
        </Reveal>
      </section>
      <section className="wrap-wide pb-24">
        <p className="eyebrow">Equipo</p>
        <h2 className="display mt-4 text-5xl">Quienes leen y quienes toman.</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {equipo.map((persona, index) => (
            <Reveal key={persona.nombre} delay={index * 70}>
              <div className="img-frame aspect-[3/4]">
                <Image
                  src={persona.imagen}
                  alt={persona.nombre}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 font-serif text-2xl">{persona.nombre}</h3>
              <p className="eyebrow mt-1">{persona.cargo}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{persona.bio}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="border-t border-line py-20">
        <div className="wrap grid gap-10 md:grid-cols-3">
          {[
            {
              t: "ISO 15189",
              d: "Sistema de calidad de laboratorios clínicos. Auditoría anual, no un diploma en la pared.",
            },
            {
              t: "Trazabilidad",
              d: "Cada tubo tiene nombre, hora y temperatura. Si algo se desvía, se repite. No se maquilla.",
            },
            {
              t: "Privacidad",
              d: "Los informes no viajan a terceros. El VIH y todo lo demás se entregan con la reserva que corresponde.",
            },
          ].map((item) => (
            <Reveal key={item.t}>
              <p className="eyebrow">{item.t}</p>
              <p className="mt-4 text-ink-soft">{item.d}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
