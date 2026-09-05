import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SunPath } from "@/components/sun-path";
import { site, stats } from "@/lib/site";
import { team } from "@/lib/team";

export const metadata: Metadata = {
  title: "Taller",
  description:
    "Meridiano es un taller de once personas en Providencia. Piso norte, mesa única, bitácora.",
};

export default function TallerPage() {
  return (
    <>
      <section className="sheet pb-10 pt-12 md:pb-14 md:pt-20">
        <p className="kicker">
          <span className="text-norte">03</span>
          <span className="mx-2">·</span>
          Taller
        </p>
        <h1 className="display mt-5 max-w-[14ch] text-[clamp(3rem,8vw,6.4rem)]">
          Un piso con orientación norte.
        </h1>
        <p className="mt-8 max-w-xl text-[1.12rem] leading-[1.7] text-muted">
          En Chile, el norte es el sol. El taller ocupa el piso 7 de un edificio
          de Providencia: ventanales de acero, terrazo, una sola mesa. Desde
          2018, once personas y pocos encargos.
        </p>
      </section>

      <section className="sheet pb-8">
        <div className="img-cut relative aspect-[16/9] md:aspect-[16/7.5]">
          <Image
            src="/images/hero.jpg"
            alt="Interior del taller: mesa de roble, ventanales a los árboles y los Andes."
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="mt-3 flex flex-col gap-1 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-muted md:flex-row md:justify-between">
          <p>{site.address.street}</p>
          <p>{site.coords.label}</p>
        </div>
      </section>

      <section className="sheet grid gap-12 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <p className="kicker">Instrumento</p>
          <h2 className="display mt-4 text-4xl md:text-5xl">
            El sol sobre Providencia, ahora.
          </h2>
          <p className="mt-6 text-[1.05rem] leading-relaxed text-muted">
            No es un adorno. En este taller el norte se siente: a mediodía el
            muro se pone blanco y las pantallas bajan brillo. El software que
            sale de aquí se diseña con esa misma luz — sin sombras donde
            esconder un módulo.
          </p>
        </div>
        <div className="md:col-span-7">
          <SunPath />
        </div>
      </section>

      <section className="border-y border-line bg-foam/50">
        <div className="sheet grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="display text-4xl md:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sheet py-20 md:py-28">
        <p className="kicker">Quiénes</p>
        <h2 className="display mt-3 text-4xl md:text-5xl">La mesa</h2>
        <ul className="mt-14 grid gap-12 md:grid-cols-2">
          {team.map((person, index) => (
            <Reveal as="li" key={person.name} delay={index * 50} className="grid grid-cols-5 gap-5">
              <div className="img-cut relative col-span-2 aspect-[3/4]">
                <Image
                  src={person.image}
                  alt={person.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 18vw, 40vw"
                />
              </div>
              <div className="col-span-3 flex flex-col justify-end pb-1">
                <p className="font-mono text-[0.68rem] tracking-[0.12em] uppercase text-norte">
                  {person.role}
                </p>
                <h3 className="font-display mt-2 text-2xl tracking-[-0.03em]">
                  {person.name}
                </h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">
                  {person.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
        <p className="mt-12 max-w-xl text-[1.02rem] leading-relaxed text-muted">
          Las otras cinco personas del taller no salen en esta lámina: ingeniería,
          producto y un oficio que no cabe en un retrato. Si vienes, la mesa es
          de todos.
        </p>
      </section>

      <section className="sheet grid gap-8 pb-24 md:grid-cols-2 md:pb-32">
        <div className="img-cut relative aspect-[4/5] md:aspect-[4/4.6]">
          <Image
            src="/images/terraza.jpg"
            alt="Terraza del taller en Providencia, mediodía, cordillera al horizonte."
            fill
            className="object-cover"
            sizes="(min-width: 768px) 46vw, 100vw"
          />
        </div>
        <div className="img-cut relative aspect-[4/5] md:aspect-[4/4.6]">
          <Image
            src="/images/calle.jpg"
            alt="Avenida Providencia con plátanos y jacarandás al mediodía."
            fill
            className="object-cover"
            sizes="(min-width: 768px) 46vw, 100vw"
          />
        </div>
      </section>

      <section className="sheet grid gap-10 pb-24 md:grid-cols-12 md:pb-32">
        <p className="kicker md:col-span-4">Visita</p>
        <div className="md:col-span-8">
          <p className="font-display text-[clamp(1.6rem,3vw,2.3rem)] leading-[1.2] tracking-[-0.03em]">
            Recibimos con hora. La mesa tiene sitio. El café, también.
          </p>
          <address className="mt-8 not-italic leading-relaxed">
            <p>{site.address.street}</p>
            <p>
              {site.address.commune}, {site.address.city}
            </p>
            <p className="mt-4 text-muted">{site.hours}</p>
          </address>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contacto" className="btn btn-ink">
              Pedir un levantamiento
            </Link>
            <a href={site.address.maps} className="btn btn-ghost">
              Cómo llegar
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
