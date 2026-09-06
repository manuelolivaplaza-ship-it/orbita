import Image from "next/image";
import Link from "next/link";
import { Arco } from "@/components/arco";
import { encargo, principles, questions, services, site } from "@/lib/site";
import { obras, type Obra } from "@/lib/obra";
import { uf } from "@/lib/utils";

export default function HomePage() {
  const featured = obras[0];
  const rest = obras.slice(1);

  return (
    <>
      <Hero />
      <Bahia />
      <Manifesto />
      <Obra featured={featured} rest={rest} />
      <Oficio />
      <Encargo />
      <Preguntas />
    </>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="frame grid min-h-[calc(100svh-var(--header))] items-center gap-10 pb-12 pt-6 lg:grid-cols-12 lg:gap-8 lg:pb-16 lg:pt-4">
        <div className="flex flex-col justify-center lg:col-span-5">
          <h1
            className="display rise text-[clamp(3rem,8.2vw,5.8rem)]"
            style={{ animationDelay: "0.06s" }}
          >
            Primero la mira.
          </h1>
          <p
            className="rise mt-7 max-w-[38ch] text-[1.1rem] leading-[1.7] text-niebla md:text-[1.18rem]"
            style={{ animationDelay: "0.18s" }}
          >
            Estudio de software en el plan de Valparaíso. Tomamos altura de la
            operación — puerto, flota, planta — y recién entonces construimos.
            Si no se puede mirar, no se puede zarpar.
          </p>
          <div
            className="rise mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.3s" }}
          >
            <Link href="/contacto" className="btn btn-primary">
              Pedir una mira
            </Link>
            <Link href="/obra" className="btn btn-ghost">
              Ver la obra
            </Link>
          </div>
          <p
            className="rise mt-10 font-mono text-[0.72rem] tracking-[0.12em] text-niebla uppercase"
            style={{ animationDelay: "0.4s" }}
          >
            {site.coords.short}
            <span className="mx-2 text-linea">·</span>
            Blanco 1199
            <span className="mx-2 text-linea">·</span>
            {site.people} personas
          </p>
        </div>
        <div
          className="rise lg:col-span-7"
          style={{ animationDelay: "0.16s" }}
        >
          <div className="border border-linea bg-mar px-3 py-4 sm:px-6 sm:py-6">
            <Arco />
          </div>
        </div>
      </div>
    </section>
  );
}

function Bahia() {
  return (
    <section className="relative">
      <div className="relative aspect-[16/9] min-h-[42vh] w-full">
        <Image
          src="/images/bahia.jpg"
          alt="Bahía de Valparaíso de noche, vista desde una ventana alta: techos de zinc, grúas y el agua como seda."
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="frame flex flex-wrap items-start justify-between gap-3 py-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-niebla">
        <p>Ventana del taller · piso 4</p>
        <p>33°02′S · 71°37′O · Valparaíso</p>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="frame grid gap-8 py-24 md:grid-cols-12 md:py-32">
      <p className="kicker md:col-span-4 md:pt-2">Por qué existimos</p>
      <div className="md:col-span-8">
        <h2 className="display text-[clamp(2rem,4.4vw,3.5rem)] font-semibold">
          Hay software que se presenta. Decks, demos, una arquitectura que cabe
          en un slide y no en el turno.
        </h2>
        <p className="mt-8 max-w-xl text-[1.08rem] leading-[1.75] text-niebla">
          Nosotros hacemos lo otro. Nos sentamos en el patio, la cámara, la
          caleta. Tomamos altura — qué se mueve, qué se pierde, qué no puede
          fallar a las tres — y no escribimos una línea hasta que la mira
          aguanta una pregunta incómoda. Chile no es un mercado de paso. Es el
          terreno: UF, faena, zarpe, SAG, el tren de las 16:10.
        </p>
      </div>
    </section>
  );
}

function Obra({
  featured,
  rest,
}: {
  featured: Obra;
  rest: readonly Obra[];
}) {
  return (
    <section className="border-y border-linea py-24 md:py-28">
      <div className="frame">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="display text-[clamp(2.2rem,5vw,3.6rem)]">Obra</h2>
          <Link href="/obra" className="link-line text-[1.05rem]">
            Índice de miras
          </Link>
        </div>

        <Link href={`/obra/${featured.slug}`} className="group mt-10 block">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={featured.cover}
              alt={featured.coverAlt}
              fill
              className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
              sizes="(min-width: 1180px) 1180px, 100vw"
            />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-12">
            <p className="kicker md:col-span-3">
              {featured.year} · {featured.location}
            </p>
            <div className="md:col-span-9">
              <h3 className="font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold tracking-[-0.03em]">
                {featured.name}
              </h3>
              <p className="mt-2 max-w-[48ch] text-[1.05rem] leading-relaxed text-niebla">
                {featured.lede}
              </p>
            </div>
          </div>
        </Link>

        <ul className="mt-14 divide-y divide-linea border-y border-linea">
          {rest.map((obra) => (
            <li key={obra.slug}>
              <Link
                href={`/obra/${obra.slug}`}
                className="grid gap-2 py-6 transition-colors hover:text-limbo md:grid-cols-12 md:items-baseline"
              >
                <p className="kicker md:col-span-3">
                  {obra.year} · {obra.location}
                </p>
                <p className="font-display text-[1.7rem] font-semibold tracking-[-0.03em] md:col-span-4">
                  {obra.name}
                </p>
                <p className="text-[1.02rem] leading-relaxed text-niebla md:col-span-5">
                  {obra.headline}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Oficio() {
  return (
    <section className="frame py-24 md:py-28">
      <div className="grid gap-4 md:grid-cols-12">
        <p className="kicker md:col-span-4 md:pt-3">Oficio</p>
        <h2 className="display text-[clamp(2.2rem,5vw,3.6rem)] md:col-span-8">
          Cuatro encargos. Los que leemos de verdad.
        </h2>
      </div>
      <ul className="mt-14 divide-y divide-linea border-y border-linea">
        {services.map((item) => (
          <li key={item.slug} className="grid gap-4 py-10 md:grid-cols-12">
            <h3 className="font-display text-[1.85rem] font-semibold tracking-[-0.03em] md:col-span-4">
              {item.title}
            </h3>
            <div className="md:col-span-8">
              <p className="max-w-[52ch] text-[1.06rem] leading-relaxed text-marfil-dim">
                {item.lede}
              </p>
              <p className="mt-3 max-w-[52ch] text-[1.02rem] leading-relaxed text-niebla">
                {item.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-8">
        <Link href="/oficio" className="link-line">
          Cómo tomamos altura
        </Link>
      </p>
    </section>
  );
}

function Encargo() {
  return (
    <section className="border-y border-linea bg-mar py-24 md:py-28">
      <div className="frame">
        <div className="grid gap-4 md:grid-cols-12">
          <p className="kicker md:col-span-4 md:pt-3">Encargo</p>
          <div className="md:col-span-8">
            <h2 className="display text-[clamp(2.2rem,5vw,3.6rem)]">
              Honorario en UF, por escrito, antes de firmar.
            </h2>
            <p className="mt-5 max-w-[46ch] text-[1.05rem] leading-relaxed text-niebla">
              La mira tiene precio cerrado. El sistema, un rango y un primer
              corte. No empezamos a construir sobre una cifra que se mueve.
            </p>
          </div>
        </div>
        <div className="mt-12 overflow-x-auto">
          <table className="encargo-table min-w-[640px]">
            <thead>
              <tr>
                <th>Encargo</th>
                <th>Plazo</th>
                <th>Desde</th>
                <th>Qué incluye</th>
              </tr>
            </thead>
            <tbody>
              {encargo.map((row) => (
                <tr key={row.name}>
                  <td className="font-display text-[1.45rem] font-semibold tracking-[-0.03em]">
                    {row.name}
                  </td>
                  <td className="text-marfil-dim">{row.time}</td>
                  <td className="tabular text-marfil">
                    {row.unit === "desde"
                      ? `${uf(row.price)}`
                      : `${row.price} ${row.unit}`}
                  </td>
                  <td className="max-w-[34ch] text-[0.98rem] leading-relaxed text-niebla">
                    {row.body}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contacto" className="btn btn-primary">
            Pedir una mira
          </Link>
          <a href={site.whatsappHref} className="btn btn-ghost">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Preguntas() {
  const [first, ...rest] = questions;
  return (
    <section className="frame py-24 md:py-28">
      <div className="grid gap-4 md:grid-cols-12">
        <p className="kicker md:col-span-4 md:pt-3">Antes de escribirnos</p>
        <h2 className="display text-[clamp(2.2rem,5vw,3.6rem)] md:col-span-8">
          {first.q}
        </h2>
      </div>
      <p className="mt-8 max-w-[54ch] text-[1.08rem] leading-[1.75] text-niebla md:ml-[33.3%]">
        {first.a}
      </p>
      <ul className="mt-14 grid gap-10 md:grid-cols-3">
        {rest.map((item) => (
          <li key={item.q}>
            <h3 className="font-display text-[1.45rem] font-semibold tracking-[-0.03em]">
              {item.q}
            </h3>
            <p className="mt-3 text-[1rem] leading-relaxed text-niebla">
              {item.a}
            </p>
          </li>
        ))}
      </ul>
      <ul className="mt-16 grid gap-8 border-t border-linea pt-12 md:grid-cols-2">
        {principles.map((item) => (
          <li key={item.title}>
            <h3 className="font-display text-[1.5rem] font-semibold tracking-[-0.03em]">
              {item.title}
            </h3>
            <p className="mt-2 max-w-[44ch] text-[1.02rem] leading-relaxed text-niebla">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
