import Image from "next/image";
import Link from "next/link";
import { Faq } from "@/components/faq";
import { Arrow } from "@/components/logo";
import { Reveal } from "@/components/reveal";
import { WineCard } from "@/components/wine-card";
import { shippingNotes, stats, visits, wines } from "@/data/content";
import { site } from "@/data/site";
import { formatCLP } from "@/lib/format";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Strip />
      <Manifesto />
      <Cuarteles />
      <Origen />
      <Cata />
      <Guarda />
      <Preguntas />
      <Cierre />
    </>
  );
}

function Hero() {
  return (
    <section id="niebla" className="relative pt-[4.5rem]">
      <div className="hero-mob lg:hidden">
        <Image
          src="/images/hero-m.jpg"
          alt="Hilera de parras en Lo Ovalle, Casablanca, desapareciendo en la niebla del amanecer"
          fill
          priority
          sizes="100vw"
          className="object-cover ken"
        />
        <div className="fog-lift absolute inset-0 bg-papel" aria-hidden="true" />
      </div>

      <div className="hero-desk hidden lg:block">
        <Image
          src="/images/hero.jpg"
          alt="Cuarteles de ETER en Casablanca: hileras ordenadas, suelo mineral y niebla costera al amanecer"
          fill
          priority
          sizes="100vw"
          className="object-cover ken"
        />
        <div className="fog-lift absolute inset-0 bg-papel" aria-hidden="true" />
        <p className="absolute bottom-6 right-8 font-mono text-[0.58rem] uppercase tracking-[0.22em] text-papel mix-blend-difference">
          Cuartel 3 · 248 m s.n.m. · última cata 16:00
        </p>
      </div>

      <div className="shell relative z-10 -mt-10 pb-6 lg:-mt-24">
        <p className="rise kicker" style={{ animationDelay: "0.2s" }}>
          Viña · Casablanca · Lo Ovalle
        </p>
        <h1
          className="rise mt-4 font-display text-[clamp(4.4rem,16vw,12rem)] leading-[0.78] tracking-tight"
          style={{ animationDelay: "0.35s" }}
        >
          ETER
        </h1>
        <div
          className="rise mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
          style={{ animationDelay: "0.55s" }}
        >
          <p className="max-w-[36ch] font-display text-2xl italic leading-snug text-tinta-suave md:text-3xl">
            Vinos de niebla.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/visitas" className="btn btn-ink">
              Reservar visita
              <Arrow />
            </Link>
            <Link
              href="/vinos"
              className="link-hoja font-mono text-[0.62rem] uppercase tracking-[0.22em]"
            >
              Ver vinos y despacho
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Strip() {
  return (
    <section
      id="cosecha"
      className="border-y border-linea"
      aria-label="Cifras de la casa"
    >
      <div className="shell grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`py-10 ${i % 2 === 1 ? "pl-6" : ""} ${i > 1 ? "border-t border-linea lg:border-t-0" : ""} ${i > 0 ? "lg:border-l lg:border-linea lg:pl-10" : ""}`}
          >
            <p className="font-display text-4xl tracking-tight md:text-5xl">
              <span className="nums">{stat.value}</span>
              <span className="ml-2 font-sans text-sm tracking-normal text-gris">
                {stat.unit}
              </span>
            </p>
            <p className="mt-3 max-w-[18ch] text-sm text-tinta-suave">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section id="manifiesto" className="shell py-24 md:py-36">
      <Reveal>
        <p className="kicker">Manifiesto</p>
        <h2 className="mt-8 max-w-[18ch] font-display text-[clamp(2.2rem,5.6vw,4.6rem)] leading-[1.05] tracking-tight">
          El quinto elemento del vino no es la barrica. Es el aire que baja del
          Pacífico cada mañana y se queda en las parras hasta el mediodía.
        </h2>
        <p className="mt-10 max-w-[48ch] text-lg leading-relaxed text-tinta-suave">
          En Lo Ovalle la camanchaca no es postal: es el clima. Baja la
          temperatura, alarga la madurez, guarda la acidez. Seis vinos. Dieciocho
          mil botellas. El precio que ves es el que pagas.
        </p>
        <Link
          href="/terroir"
          className="link-hoja mt-8 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.22em]"
        >
          El terroir <Arrow />
        </Link>
      </Reveal>
    </section>
  );
}

function Cuarteles() {
  return (
    <section id="cuarteles" className="pb-24 md:pb-32">
      <div className="shell flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <p className="kicker">La casa</p>
          <h2 className="mt-4 font-display text-5xl tracking-tight md:text-7xl">
            Seis vinos.
          </h2>
        </Reveal>
        <Link
          href="/vinos"
          className="link-hoja font-mono text-[0.62rem] uppercase tracking-[0.22em]"
        >
          Toda la cava
        </Link>
      </div>
      <div className="shell mt-12">
        <div className="rail">
          {wines.map((wine, i) => (
            <WineCard key={wine.slug} wine={wine} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Origen() {
  return (
    <section id="origen" className="border-t border-linea">
      <div className="grid lg:grid-cols-12">
        <div className="relative min-h-[52vh] lg:col-span-7 lg:min-h-[78vh]">
          <Image
            src="/images/hileras.jpg"
            alt="Camino entre dos hileras de parra, niebla al fondo, suelo arenoso de Casablanca"
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="shell flex flex-col justify-center py-16 lg:col-span-5 lg:px-16">
          <Reveal>
            <p className="kicker">Terroir</p>
            <h2 className="mt-5 font-display text-4xl tracking-tight md:text-5xl">
              Casablanca no es un valle caliente con nombre de mar.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-tinta-suave">
              Es costa, granito y una niebla que llega sin pedir permiso. El
              fundo está en Lo Ovalle, Ruta 68 km 68. Cincuenta y cinco minutos
              desde Santiago, si el taco no manda.
            </p>
            <dl className="mt-10 space-y-4 text-sm">
              <div className="flex justify-between border-b border-linea pb-3">
                <dt className="text-gris">Comuna</dt>
                <dd>Casablanca</dd>
              </div>
              <div className="flex justify-between border-b border-linea pb-3">
                <dt className="text-gris">Altitud</dt>
                <dd className="nums">{site.altitude} m s.n.m.</dd>
              </div>
              <div className="flex justify-between border-b border-linea pb-3">
                <dt className="text-gris">Plantadas</dt>
                <dd className="nums">{site.hectares} ha</dd>
              </div>
              <div className="flex justify-between pb-1">
                <dt className="text-gris">Última cata</dt>
                <dd>16:00</dd>
              </div>
            </dl>
            <Link href="/terroir" className="btn btn-ghost mt-10 w-max">
              Caminar el fundo
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Cata() {
  return (
    <section id="cata" className="shell py-24 md:py-32">
      <Reveal>
        <p className="kicker">Visitas</p>
        <h2 className="mt-4 max-w-[16ch] font-display text-5xl tracking-tight md:text-7xl">
          Cupo visible. Horario respetado.
        </h2>
        <p className="mt-6 max-w-[46ch] text-lg text-tinta-suave">
          No es un bus con parlante. Grupos chicos, vino a temperatura, y el
          precio incluye lo que dice. Niños no pagan si no degustan.
        </p>
      </Reveal>
      <div className="mt-16 divide-y divide-linea border-y border-linea">
        {visits.map((visit) => (
          <Link
            key={visit.slug}
            href={`/visitas#${visit.slug}`}
            className="group grid gap-4 py-8 md:grid-cols-12 md:items-baseline"
          >
            <p className="font-mono text-[0.62rem] text-hoja md:col-span-1">
              {visit.n}
            </p>
            <h3 className="font-display text-3xl tracking-tight md:col-span-5 md:text-4xl">
              {visit.name}
            </h3>
            <p className="text-sm text-tinta-suave md:col-span-3">
              {visit.duration} · máx. {visit.cupo}
            </p>
            <p className="nums text-sm md:col-span-3 md:text-right">
              {visit.slug === "cava-privada" ? "el grupo" : "por persona"}{" "}
              {formatCLP(visit.price)}
            </p>
          </Link>
        ))}
      </div>
      <Reveal className="mt-10">
        <Link href="/visitas" className="btn btn-ink">
          Reservar visita
          <Arrow />
        </Link>
      </Reveal>
    </section>
  );
}

function Guarda() {
  return (
    <section id="guarda" className="border-t border-linea bg-papel-2">
      <div className="shell grid gap-12 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <Reveal>
            <p className="kicker">Despacho</p>
            <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
              La caja sale de la misma cava.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-tinta-suave">
              Sin quiebre después de pagar. Si no está, no está. Retiro en viña
              o despacho a todo Chile.
            </p>
          </Reveal>
        </div>
        <div className="grid gap-8 md:col-span-7 md:grid-cols-3">
          {shippingNotes.map((note) => (
            <Reveal key={note.title}>
              <h3 className="font-display text-2xl">{note.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-tinta-suave">
                {note.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section id="preguntas" className="shell py-24 md:py-32">
      <Reveal>
        <p className="kicker">Preguntas</p>
        <h2 className="mt-4 font-display text-5xl tracking-tight md:text-6xl">
          Sin letra chica.
        </h2>
      </Reveal>
      <div className="mt-12">
        <Faq />
      </div>
    </section>
  );
}

function Cierre() {
  return (
    <section id="reserva" className="relative min-h-[70vh] overflow-hidden">
      <Image
        src="/images/fundo.jpg"
        alt="Casa blanca de ETER entre las parras, envuelta en niebla de amanecer"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-papel/55" />
      <div className="shell relative flex min-h-[70vh] flex-col justify-end py-16">
        <Reveal>
          <p className="kicker">Reserva</p>
          <h2 className="mt-4 max-w-[12ch] font-display text-5xl tracking-tight md:text-7xl">
            Reserva tu visita. Nosotros ponemos la niebla.
          </h2>
          <p className="mt-6 nums font-display text-4xl md:text-5xl">
            {site.phone}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/visitas" className="btn btn-ink">
              Reservar
              <Arrow />
            </Link>
            <a href={site.whatsappHref} className="btn btn-ghost">
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
