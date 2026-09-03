import type { Metadata } from "next";
import Image from "next/image";
import { Cta } from "@/components/cta";
import { Reveal } from "@/components/reveal";
import { team } from "@/lib/team";

export const metadata: Metadata = {
  title: "El estudio",
  description:
    "Alba es un estudio de software en Lastarria, Santiago. Ocho personas. Diseño e ingeniería en la misma mesa.",
};

const principles = [
  {
    title: "Claridad antes que novedad",
    body: "Una interfaz famosa que nadie entiende es un fracaso. Preferimos lo obvio a lo ingenioso.",
  },
  {
    title: "El oficio manda",
    body: "Un puerto, una clínica, un fundo: cada uno tiene un lenguaje. El software lo aprende, no lo reemplaza.",
  },
  {
    title: "Pocos encargos",
    body: "Decimos que no con frecuencia. Un estudio chico no puede ser el departamento de TI de medio Chile.",
  },
  {
    title: "Dejar el lugar mejor",
    body: "El software se hereda. Documentamos, nombramos y nos quedamos el tiempo que hace falta para que no seamos imprescindibles.",
  },
];

export default function EstudioPage() {
  return (
    <>
      <section className="wrap pb-10 pt-12 md:pb-14 md:pt-20">
        <p className="eyebrow">El estudio</p>
        <h1 className="display mt-5 max-w-[16ch] text-[clamp(3rem,8vw,6.4rem)]">
          Un taller de software, no una agencia.
        </h1>
        <p className="mt-8 max-w-xl text-[1.12rem] leading-[1.7] text-muted">
          Alba nació en Santiago en 2016. Camila venía del diseño de producto.
          Tomás, de sistemas que se caían el día del lanzamiento. Los dos
          estaban cansados de software que se veía brillante y se usaba mal.
        </p>
      </section>

      <section className="wrap grid gap-6 md:grid-cols-12">
        <div className="img-frame relative aspect-[16/11] md:col-span-8 md:aspect-[16/10]">
          <Image
            src="/images/studio.jpg"
            alt="Reunión de trabajo en el estudio Alba, con la cordillera al fondo."
            fill
            priority
            className="object-cover"
            sizes="(min-width: 768px) 70vw, 100vw"
          />
        </div>
        <div className="img-frame relative aspect-[4/5] md:col-span-4 md:aspect-auto md:h-full">
          <Image
            src="/images/table.jpg"
            alt="Mesa de trabajo con cuaderno de lino, café y un peso de cobre."
            fill
            className="object-cover"
            sizes="(min-width: 768px) 30vw, 100vw"
          />
        </div>
      </section>

      <Reveal as="section" className="wrap grid gap-12 py-24 md:grid-cols-12 md:py-32">
        <p className="eyebrow md:col-span-4">Cómo pensamos</p>
        <div className="md:col-span-8">
          <p className="font-display text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.15] tracking-[-0.03em]">
            Creemos que el software de una empresa debería tener la misma
            calidad de luz que un buen edificio: que se entienda al entrar, que
            no pida un plano, que envejezca con dignidad.
          </p>
          <p className="mt-8 max-w-xl text-[1.05rem] leading-[1.75] text-muted">
            Por eso trabajamos en Santiago, con equipos chilenos y latinos, en
            industrias donde el error cuesta caro. No perseguimos el encargo de
            moda. Perseguimos el que, si sale bien, cambia cómo opera un lugar.
          </p>
        </div>
      </Reveal>

      <section className="wrap pb-12 md:pb-20">
        <p className="eyebrow">Principios</p>
        <ul className="mt-10 grid gap-8 md:grid-cols-2">
          {principles.map((principle, index) => (
            <Reveal
              as="li"
              key={principle.title}
              delay={index * 70}
              className="border-t border-line pt-6"
            >
              <h2 className="font-display text-2xl tracking-[-0.03em] md:text-3xl">
                {principle.title}
              </h2>
              <p className="mt-3 max-w-md text-[1.02rem] leading-relaxed text-muted">
                {principle.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="wrap py-12 md:py-20">
        <p className="eyebrow">Personas</p>
        <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] md:text-5xl">
          Quienes firman el trabajo
        </h2>
        <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person, index) => (
            <Reveal as="li" key={person.name} delay={index * 60}>
              <div className="img-frame relative aspect-[3/4]">
                <Image
                  src={person.image}
                  alt={person.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                />
              </div>
              <h3 className="mt-4 font-display text-2xl tracking-[-0.03em]">
                {person.name}
              </h3>
              <p className="mt-1 text-sm text-copper">{person.role}</p>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">
                {person.bio}
              </p>
            </Reveal>
          ))}
          <Reveal
            as="li"
            delay={300}
            className="flex flex-col justify-between border border-line bg-foam px-7 py-8 sm:aspect-[3/4]"
          >
            <p className="eyebrow">También</p>
            <div>
              <h3 className="font-display text-3xl tracking-[-0.03em]">
                Tres más en ingeniería y un oficio compartido.
              </h3>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-muted">
                Somos ocho. No publicamos a todos porque el estudio no es una
                vitrina. Si entras a Lastarria, los conoces a todos en un café.
              </p>
            </div>
          </Reveal>
        </ul>
      </section>

      <section className="wrap grid gap-10 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="eyebrow">Dónde</p>
          <h2 className="mt-4 font-display text-4xl tracking-[-0.04em]">
            Lastarria, Santiago
          </h2>
          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-muted">
            José Victorino Lastarria 123, piso 3. A una cuadra del Parque
            Forestal. Venimos a pie, en metro o en bici. Recibimos con hora,
            café y una mesa sin pantallas el primer rato.
          </p>
          <p className="mt-6 text-sm text-muted">
            Lunes a jueves, 9:30 a 18:30. Viernes, 9:30 a 14:00.
          </p>
        </div>
        <div className="img-frame relative aspect-[16/11]">
          <Image
            src="/images/hero.jpg"
            alt="Interior del estudio con vista a la cordillera al amanecer."
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </section>

      <Cta title="Si te gusta cómo pensamos, escribamos." />
    </>
  );
}
