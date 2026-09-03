import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@/components/marquee";
import { PropertyCard } from "@/components/property-card";
import { Container, Reveal } from "@/components/reveal";
import { articles } from "@/data/journal";
import { neighborhoods } from "@/data/neighborhoods";
import { getAvailable, getFeatured } from "@/data/properties";
import { site } from "@/data/site";
import { method } from "@/data/team";
import { formatUF, padIndex } from "@/lib/format";

export default function Home() {
  const featured = getFeatured();
  const lead = featured[0];
  const side = featured.slice(1, 3);
  const rest = getAvailable().filter((p) => !p.featured).slice(0, 4);

  return (
    <>
      <section className="relative h-[100svh] min-h-[640px] overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Residencia de piedra volcánica frente a los Andes, al anochecer"
          fill
          priority
          className="ken object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070706] via-[#070706]/35 to-[#070706]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070706]/55 to-transparent" />

        <Container className="relative flex h-full flex-col justify-end pb-16 pt-28">
          <p className="kicker">N.º 11 · Santiago · Costa · Lagos</p>
          <h1 className="display mt-6 max-w-5xl text-[18vw] sm:text-[12vw] lg:text-[8.4rem]">
            Residencias
            <br />
            <em className="text-gold">de autor.</em>
          </h1>
          <div className="mt-8 flex max-w-xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-sm text-sm leading-relaxed text-ivory-soft">
              Un atelier que no publica en portales. Casas, áticos y predios que se
              muestran de a uno, a la hora en que la luz los explica.
            </p>
            <Link href="/propiedades" className="btn-gold shrink-0">
              Ver la colección
            </Link>
          </div>
          <div className="mt-12 flex items-center gap-4 font-mono text-[10px] tracking-[0.28em] text-gold uppercase">
            <span className="block h-10 w-px bg-gold" />
            Deslizar
          </div>
        </Container>
      </section>

      <Marquee />

      <section className="py-24 lg:py-32">
        <Container>
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="kicker">El oficio</p>
                <h2 className="display mt-5 text-5xl sm:text-6xl lg:text-7xl">
                  No vendemos metros.
                  <br />
                  <em className="text-gold">Custodiamos umbrales.</em>
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <p className="text-lg leading-relaxed text-ivory-soft">
                  Obsidiana nació en {site.founded} con una regla que todavía no
                  negociamos: si una residencia no resiste una visita al mediodía,
                  no resiste una escritura. Trabajamos Santiago, la Costa Central y
                  los Lagos del Sur. El inventario es breve a propósito.
                </p>
                <p className="mt-6 text-sm leading-relaxed text-muted">
                  No hay open house. No hay cartel en la reja. Hay una cita, una
                  hora —casi siempre el atardecer— y una conversación que no cabe
                  en un portal.
                </p>
                <Link href="/estudio" className="btn-ghost mt-8">
                  El estudio →
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-20 grid grid-cols-2 gap-px bg-[var(--line)] md:grid-cols-4" delay={80}>
            {[
              ["11", "años de oficio"],
              ["140", "residencias entregadas"],
              ["04", "territorios"],
              ["01", "criterio"],
            ].map(([n, l]) => (
              <div key={l} className="bg-background px-5 py-8 lg:px-8">
                <p className="font-display text-5xl text-gold lg:text-6xl">{n}</p>
                <p className="mt-3 font-mono text-[10px] tracking-[0.22em] text-muted uppercase">
                  {l}
                </p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container>
          <Reveal className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="kicker">Colección viva</p>
              <h2 className="display mt-4 text-5xl sm:text-6xl">
                Lo que se puede visitar ahora
              </h2>
            </div>
            <Link href="/propiedades" className="btn-ghost hidden sm:inline-flex">
              Toda la colección →
            </Link>
          </Reveal>

          {lead ? (
            <div className="grid gap-10 lg:grid-cols-12">
              <Reveal className="lg:col-span-7" as="article">
                <PropertyCard property={lead} index={0} large />
              </Reveal>
              <div className="grid gap-10 lg:col-span-5">
                {side.map((p, i) => (
                  <Reveal key={p.slug} delay={i * 90}>
                    <PropertyCard property={p} index={i + 1} />
                  </Reveal>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60}>
                <PropertyCard property={p} index={i + 3} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-8">
        <div className="absolute inset-0">
          <Image
            src="/images/santiago-aereo.jpg"
            alt=""
            fill
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#070706]/70" />
        </div>
        <Container className="relative py-20">
          <Reveal>
            <p className="kicker">Manifiesto</p>
            <blockquote className="mt-8 max-w-4xl font-display text-4xl leading-[1.15] sm:text-5xl lg:text-6xl">
              Una casa de verdad tiene predio, norte y silencio. Lo demás es
              equipamiento.
            </blockquote>
            <p className="mt-8 font-mono text-[11px] tracking-[0.22em] text-gold uppercase">
              Mateo Vial · Fundador
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24 lg:py-32">
        <Container>
          <Reveal className="mb-14">
            <p className="kicker">Atlas</p>
            <h2 className="display mt-4 text-5xl sm:text-6xl">
              Cuatro territorios, un criterio
            </h2>
          </Reveal>
          <ul>
            {neighborhoods.map((n, i) => (
              <li key={n.slug} className="border-t border-[var(--line)] last:border-b">
                <Link
                  href={`/barrios/${n.slug}`}
                  className="group grid items-center gap-6 py-8 lg:grid-cols-12"
                  data-cursor="hot"
                >
                  <span className="font-mono text-[11px] tracking-[0.24em] text-gold lg:col-span-1">
                    {padIndex(i)}
                  </span>
                  <span className="display text-4xl lg:col-span-4 lg:text-5xl">
                    {n.name}
                  </span>
                  <span className="text-sm text-muted lg:col-span-4">{n.excerpt}</span>
                  <span className="relative hidden h-20 overflow-hidden lg:col-span-2 lg:block">
                    <Image
                      src={n.image}
                      alt=""
                      fill
                      className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      sizes="180px"
                    />
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.18em] text-gold uppercase lg:col-span-1 lg:text-right">
                    Ver →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <Reveal className="grid gap-12 border border-[var(--line)] lg:grid-cols-12">
            <div className="relative min-h-[420px] lg:col-span-6">
              <Image
                src="/images/atelier.jpg"
                alt="El atelier de Obsidiana en Vitacura"
                fill
                className="object-cover"
                sizes="(min-width:1024px) 50vw, 100vw"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-12 lg:col-span-6 lg:px-14">
              <p className="kicker">Método</p>
              <h2 className="display mt-4 text-4xl sm:text-5xl">
                Tres gestos, ninguna prisa
              </h2>
              <ol className="mt-10 space-y-8">
                {method.map((m) => (
                  <li key={m.n} className="grid grid-cols-[auto_1fr] gap-5">
                    <span className="font-mono text-[11px] tracking-[0.22em] text-gold">
                      {m.n}
                    </span>
                    <div>
                      <p className="font-display text-2xl italic">{m.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{m.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-24 lg:py-32">
        <Container>
          <Reveal className="mb-12 flex items-end justify-between">
            <div>
              <p className="kicker">Diario</p>
              <h2 className="display mt-4 text-5xl">Notas de oficio</h2>
            </div>
            <Link href="/diario" className="btn-ghost">
              Leer el diario →
            </Link>
          </Reveal>
          <div className="grid gap-10 lg:grid-cols-3">
            {articles.slice(0, 3).map((a, i) => (
              <Reveal key={a.slug} delay={i * 80} as="article">
                <Link href={`/diario/${a.slug}`} className="group block">
                  <div className="img-zoom relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={a.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(min-width:1024px) 30vw, 100vw"
                    />
                  </div>
                  <p className="kicker mt-5">{a.kicker}</p>
                  <h3 className="mt-3 font-display text-3xl leading-tight group-hover:text-gold">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{a.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-8">
        <Container>
          <div className="relative overflow-hidden">
            <Image
              src="/images/obsidiana-still.jpg"
              alt=""
              fill
              className="object-cover opacity-40"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#070706]/55" />
            <div className="relative grid gap-10 px-6 py-20 lg:grid-cols-12 lg:px-16 lg:py-28">
              <div className="lg:col-span-7">
                <p className="kicker">Clientes privados</p>
                <h2 className="display mt-5 text-5xl sm:text-6xl lg:text-7xl">
                  La visita se pide.
                  <br />
                  <em className="text-gold">No se publica.</em>
                </h2>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory-soft">
                  Escríbenos. Coordinamos un atardecer. Si la casa no es para
                  ustedes, lo decimos antes de perder el jueves.
                </p>
              </div>
              <div className="flex items-end lg:col-span-5 lg:justify-end">
                <Link href="/visita" className="btn-solid">
                  Solicitar visita privada
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
