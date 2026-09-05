import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { SizeDrum } from "@/components/size-drum";
import { lines, products } from "@/data/products";
import { faqs, voices } from "@/data/vehicles";
import { site } from "@/data/site";

const featured = products.filter((p) => p.featured);
const marquee = [
  "185/65 R15",
  "205/55 R16",
  "215/60 R17",
  "225/45 R17",
  "235/55 R18",
  "265/65 R17",
  "265/70 R16",
  "245/40 R18",
  "Mojado A",
  "69 dB",
  "Cita 21:00",
  "Huechuraba",
];

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Manifesto />
      <Territories />
      <Featured />
      <Measure />
      <Atelier />
      <Voices />
      <Faq />
      <Close />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <Image
        src="/images/hero-ruta.jpg"
        alt="Ruta chilena mojada de noche, faroles ámbar al fondo"
        fill
        priority
        sizes="100vw"
        className="ken object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/35 to-bg/20" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(243,238,228,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(243,238,228,0.04)_1px,transparent_1px)] bg-[size:72px_72px] mix-blend-overlay" />

      <div className="relative flex min-h-[100svh] flex-col justify-end">
        <div className="pad pb-8 pt-28 sm:pb-10">
          <p className="kicker rise text-amber-2" style={{ animationDelay: "0.15s" }}>
            Atelier de neumáticos · Chile
          </p>
          <h1
            className="display rise mt-5 text-[22vw] sm:text-[14vw] lg:text-[9.4rem]"
            style={{ animationDelay: "0.28s" }}
          >
            NOCTUA
          </h1>
          <p
            className="serif rise mt-4 max-w-xl text-[1.65rem] leading-snug text-ink sm:text-4xl"
            style={{ animationDelay: "0.42s" }}
          >
            {site.tagline}
          </p>
          <div
            className="rise mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: "0.55s" }}
          >
            <Link href="/catalogo" className="btn btn-solid">
              Ver catálogo
            </Link>
            <Link href="/medida" className="btn btn-line">
              Buscar medida
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 border-t border-line bg-bg/40 backdrop-blur-sm md:grid-cols-4">
          {[
            ["Medida", "205/55 R16"],
            ["Mojado", "A"],
            ["Ruido", "69 dB"],
            ["Índice nocturno", "94"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="flex items-baseline justify-between gap-4 border-line px-5 py-4 md:border-r md:last:border-r-0"
            >
              <span className="hud">{k}</span>
              <span className="num text-sm text-ink">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const loop = [...marquee, ...marquee];
  return (
    <div className="overflow-hidden border-b border-line py-4">
      <div className="marquee-track flex w-max gap-10 pr-10">
        {loop.map((item, i) => (
          <span key={i} className="hud whitespace-nowrap">
            <span className="mr-10 text-amber">●</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Manifesto() {
  return (
    <section className="pad grid items-center gap-12 py-24 lg:grid-cols-12 lg:py-32">
      <div className="lg:col-span-6">
        <Reveal>
          <p className="kicker">01 — El país</p>
          <h2 className="serif mt-6 max-w-xl text-4xl leading-[1.15] sm:text-5xl">
            Chile no es un solo asfalto.
          </h2>
          <p className="mt-8 max-w-md text-[1.05rem] leading-relaxed text-mute">
            Es Atacama a cuarenta grados. Es Farellones con hielo negro. Es la
            Ruta 68 bajo la lluvia. Es la Alameda a las dos de la mañana. Un
            neumático genérico no alcanza. NOCTUA calibra el compuesto para lo
            que el país realmente pide.
          </p>
          <Link href="/noctua" className="btn btn-ghost mt-8">
            La marca →
          </Link>
        </Reveal>
      </div>
      <div className="lg:col-span-6">
        <Reveal delay={120}>
          <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-full border border-line">
            <Image
              src="/images/owl-eye.jpg"
              alt="Ojo de búho, iris ámbar, reflejo de luna"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <p className="mt-4 text-center hud">noctua · del latín · búho</p>
        </Reveal>
      </div>
    </section>
  );
}

function Territories() {
  return (
    <section className="border-t border-line">
      <div className="pad flex items-end justify-between py-10">
        <div>
          <p className="kicker">02 — Territorios</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl">Cuatro Chiles.</h2>
        </div>
        <Link href="/catalogo" className="btn btn-ghost hidden sm:inline-flex">
          Catálogo →
        </Link>
      </div>
      <div className="grid md:grid-cols-2">
        {lines.slice(0, 4).map((line, i) => (
          <Link
            key={line.id}
            href={`/catalogo?linea=${line.id}`}
            className="group relative min-h-[58vh] overflow-hidden border-t border-line md:border-r md:odd:border-r md:even:border-r-0"
          >
            <Image
              src={line.image}
              alt={line.pitch}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10">
              <span className="hud text-amber-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display mt-3 text-5xl sm:text-6xl">{line.latin}</h3>
              <p className="serif mt-3 max-w-sm text-2xl text-ink">{line.pitch}</p>
              <p className="mt-3 text-sm text-mute">{line.where}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section className="pad py-24 lg:py-32">
      <Reveal>
        <p className="kicker">03 — En taller</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
          <h2 className="display max-w-xl text-4xl sm:text-5xl">
            Seis compuestos. Ninguno genérico.
          </h2>
          <Link href="/catalogo" className="btn btn-line">
            Ver los diez
          </Link>
        </div>
      </Reveal>
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => (
          <ProductCard key={p.slug} product={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function Measure() {
  return (
    <section className="border-y border-line">
      <div className="pad grid gap-10 py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-4">
          <p className="kicker">04 — Medida</p>
          <h2 className="display mt-4 text-4xl">
            205
            <span className="text-mute"> / </span>
            55
            <span className="text-mute"> R</span>
            16
          </h2>
          <p className="mt-6 max-w-sm text-mute leading-relaxed">
            Tres números. El resto es conversación. Gira los tambores o elige un
            auto que se vea en Chile — Swift, Hilux, CX-5 — y te decimos qué hay
            hoy en Huechuraba.
          </p>
          <Link href="/medida" className="btn btn-ghost mt-8">
            Abrir buscador →
          </Link>
        </div>
        <div className="lg:col-span-8">
          <SizeDrum compact />
        </div>
      </div>
    </section>
  );
}

function Atelier() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      <Image
        src="/images/taller.jpg"
        alt="Taller NOCTUA de noche, balanceadora bajo una lámpara ámbar"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-bg/20" />
      <div className="relative pad flex min-h-[80vh] items-end py-20 lg:items-center">
        <Reveal className="max-w-xl">
          <p className="kicker">05 — Taller</p>
          <h2 className="display mt-4 text-4xl sm:text-6xl">Cita nocturna.</h2>
          <p className="mt-6 text-[1.05rem] leading-relaxed text-ink/85">
            Jueves a sábado, 21:00 a 01:00. Un auto a la vez. Montaje, balanceo,
            alineación 3D. Sin fila, sin radio a todo volumen. El trabajo, con
            la lámpara encima.
          </p>
          <p className="mt-4 text-sm text-mute">{site.address}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/cita" className="btn btn-solid">
              Reservar
            </Link>
            <Link href="/taller" className="btn btn-line">
              El atelier
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Voices() {
  return (
    <section className="pad py-24 lg:py-32">
      <p className="kicker">06 — Voces</p>
      <h2 className="display mt-4 text-4xl sm:text-5xl">Quién ya rueda.</h2>
      <div className="mt-14 grid gap-px bg-line md:grid-cols-3">
        {voices.map((v) => (
          <figure key={v.name} className="bg-bg p-8 sm:p-10">
            <blockquote className="serif text-2xl leading-snug">
              “{v.quote}”
            </blockquote>
            <figcaption className="mt-8 text-sm text-mute">
              <span className="block text-ink">{v.name}</span>
              {v.where}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="border-t border-line">
      <div className="pad grid gap-10 py-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="kicker">07 — Precisión</p>
          <h2 className="display mt-4 text-4xl">Preguntas cortas.</h2>
        </div>
        <div className="lg:col-span-8">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group border-b border-line py-5 first:border-t"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg">
                {f.q}
                <span className="hud text-amber transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-mute">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Close() {
  return (
    <section className="relative overflow-hidden border-t border-line">
      <Image
        src="/images/tread.jpg"
        alt="Macro de banda de rodadura con gotas de agua"
        fill
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-bg/60" />
      <div className="relative pad py-28 text-center">
        <p className="kicker">Huechuraba · SCL</p>
        <h2 className="display mx-auto mt-6 max-w-4xl text-5xl sm:text-7xl">
          El camino no se apaga.
        </h2>
        <p className="serif mx-auto mt-6 max-w-lg text-2xl text-ink">
          Reserva una medida. O una hora. El resto lo vemos en el elevador.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/cita" className="btn btn-solid">
            Agendar montaje
          </Link>
          <Link href="/catalogo" className="btn btn-line">
            Catálogo
          </Link>
        </div>
      </div>
    </section>
  );
}
