import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cta } from "@/components/cta";
import { Reveal } from "@/components/reveal";
import { principles, site } from "@/lib/site";
import { team } from "@/lib/team";

export const metadata: Metadata = {
  title: "El estudio",
  description:
    "Nítida es un estudio de diseño digital en Avenida Italia, Ñuñoa. Seis personas. Identidad, producto y sitios.",
};

export default function EstudioPage() {
  return (
    <>
      <section className="wrap pb-10 pt-12 md:pb-14 md:pt-20">
        <p className="eyebrow">El estudio</p>
        <h1 className="display mt-5 max-w-[16ch] text-[clamp(3rem,8vw,6.4rem)]">
          Un taller de diseño, no una agencia.
        </h1>
        <p className="mt-8 max-w-xl text-[1.12rem] leading-[1.7] text-muted">
          Nítida nació en Ñuñoa en 2017. Amparo venía de agencias donde el
          diseño era un slide. Se cansó de marcas que se celebraban en una sala
          y se deshacían en un sitio. El estudio existe para cerrar esa
          distancia.
        </p>
      </section>

      <section className="wrap grid gap-6 md:grid-cols-12">
        <div className="img-frame relative aspect-[16/11] md:col-span-8 md:aspect-[16/10]">
          <Image
            src="/images/equipo.jpg"
            alt="Reunión de trabajo en Nítida, mesa de roble y luz de ventana."
            fill
            priority
            className="object-cover"
            sizes="(min-width: 768px) 70vw, 100vw"
          />
        </div>
        <div className="img-frame relative aspect-[4/5] md:col-span-4 md:aspect-auto md:h-full">
          <Image
            src="/images/mesa.jpg"
            alt="Mesa de trabajo con papel, lápiz y muestras de color."
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
            En el hemisferio sur el norte es el sol de la casa. Diseñamos con
            esa luz: abundante, clara, sin teatro. Que se entienda al entrar.
            Que no pida un plano.
          </p>
          <p className="mt-8 max-w-xl text-[1.05rem] leading-[1.75] text-muted">
            Por eso trabajamos en Santiago, con equipos chilenos, en encargos
            donde el error se nota. No perseguimos el de moda. Perseguimos el
            que, si sale bien, cambia cómo se ve y se usa un lugar.
          </p>
        </div>
      </Reveal>

      <section className="wrap pb-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="img-frame relative aspect-[16/11]">
            <Image
              src="/images/taller.jpg"
              alt="Muro de pruebas del estudio, grillas y color a la luz de la mañana."
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="img-frame relative aspect-[16/11]">
            <Image
              src="/images/italia.jpg"
              alt="Avenida Italia en Ñuñoa, árboles y talleres a primera hora."
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
        <p className="mt-4 text-sm text-muted">
          {site.address.street} · {site.metro}
        </p>
      </section>

      <section className="wrap py-24 md:py-32">
        <p className="eyebrow">La mesa</p>
        <h2 className="mt-3 font-display text-4xl tracking-[-0.03em] md:text-5xl">
          Seis personas.
        </h2>
        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person, index) => (
            <Reveal as="li" key={person.slug} delay={index * 60}>
              <Link href={`/estudio/${person.slug}`} className="group block">
                <div className="img-frame relative aspect-[3/4]">
                  <Image
                    src={person.photo}
                    alt={person.photoAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  />
                </div>
                <p className="mt-4 font-display text-2xl tracking-[-0.03em]">
                  {person.name}
                </p>
                <p className="mt-1 text-sm text-muted">{person.role}</p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="wrap pb-24 md:pb-32">
        <p className="eyebrow">Criterio</p>
        <ul className="mt-10 grid gap-10 md:grid-cols-2 md:gap-x-16">
          {principles.map((item, index) => (
            <Reveal as="li" key={item.title} delay={index * 70} className="border-t border-line pt-6">
              <h3 className="font-display text-2xl tracking-[-0.03em] md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">
                {item.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </section>

      <Cta />
    </>
  );
}
