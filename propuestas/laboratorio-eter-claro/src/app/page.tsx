import Image from "next/image";
import Link from "next/link";
import { Figure } from "@/components/figure";
import { HomeSearch } from "@/components/home-search";
import { Reveal } from "@/components/reveal";
import { chequeos } from "@/data/chequeos";
import { voces } from "@/data/equipo";
import { examenes } from "@/data/examenes";
import { sucursales } from "@/data/sucursales";
import { clp } from "@/lib/format";

const destacados = examenes.filter((item) => item.destacado).slice(0, 6);
const proceso = [
  {
    n: "01",
    title: "Agenda",
    text: "Elige sucursal o domicilio. Te confirmamos por WhatsApp, con la preparación exacta para lo que te pidieron.",
  },
  {
    n: "02",
    title: "Toma",
    text: "Una sala en silencio, una punción breve. Si las agujas te pesan, dínoslo: hay tiempo, no hay fila de fábrica.",
  },
  {
    n: "03",
    title: "Informe",
    text: "El resultado llega a tu correo. Claro, con rangos y un comentario cuando un número pide conversación.",
  },
];

const cifras = [
  { n: "14.200", l: "pacientes el último año" },
  { n: "860", l: "exámenes en catálogo" },
  { n: "4 h", l: "los informes más rápidos" },
  { n: "4", l: "sucursales en Santiago" },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 md:pt-32">
        <div
          className="orb -left-24 top-20 h-72 w-72 bg-[color-mix(in_oklab,var(--sage)_28%,transparent)]"
          aria-hidden="true"
        />
        <div
          className="orb right-[-6rem] top-40 h-80 w-80 bg-[color-mix(in_oklab,var(--gold)_22%,transparent)]"
          style={{ animationDelay: "-6s" }}
          aria-hidden="true"
        />
        <div className="wrap-wide">
          <p className="eyebrow">Laboratorio clínico · Santiago</p>
          <h1 className="display mt-6 max-w-[18ch] text-[clamp(3.4rem,11vw,9.4rem)] text-ink">
            Lo invisible,
            <br />
            se vuelve <em className="italic text-sage-deep">claro</em>.
          </h1>
          <div className="mt-10 flex max-w-2xl flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-lg leading-relaxed text-ink-soft md:text-xl">
              Exámenes con la precisión que tu médico espera y la calma que tú
              mereces. En sucursal o a domicilio. Resultados que se leen.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contacto" className="btn btn-ink">
                Agendar hora
              </Link>
              <Link href="/examenes" className="btn btn-ghost">
                Ver exámenes
              </Link>
            </div>
          </div>
        </div>
        <div className="wrap-wide mt-14 md:mt-20">
          <Figure
            src="/images/hero-lab.jpg"
            alt="Laboratorio de piedra clara, viales de vidrio y la cordillera al fondo."
            caption="Providencia · 07:12 · luz de oriente"
            imgClassName="aspect-[16/9] md:aspect-[16/8]"
            priority
          />
        </div>
      </section>

      <section className="wrap-wide grid gap-6 py-16 md:grid-cols-4 md:py-20">
        {cifras.map((item, index) => (
          <Reveal key={item.l} delay={index * 80} className="border-t border-line pt-5">
            <p className="display text-5xl md:text-6xl">{item.n}</p>
            <p className="mt-3 text-sm text-mute">{item.l}</p>
          </Reveal>
        ))}
      </section>

      <section className="wrap-wide grid items-center gap-12 py-8 md:grid-cols-12 md:py-16">
        <Reveal className="md:col-span-5">
          <div className="img-frame aspect-[3/4]">
            <Image
              src="/images/drop.jpg"
              alt="Una gota de suero dorado suspendida en una pipeta de vidrio."
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption>El oficio es este: una gota, leída con rigor.</figcaption>
        </Reveal>
        <Reveal className="md:col-span-6 md:col-start-7" delay={120}>
          <p className="eyebrow">Manifiesto</p>
          <h2 className="display mt-4 text-[clamp(2.4rem,6vw,4.6rem)]">
            El cuerpo ya sabe.
            <br />
            Nosotros lo hacemos
            <br />
            legible.
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft">
            Eter es el medio por el que viaja la luz. Un laboratorio hace lo
            mismo con lo que no se ve: lo vuelve claro, sin drama y sin
            fábrica. Cada muestra tiene nombre. Cada informe, una voz.
          </p>
          <Link href="/nosotros" className="btn btn-ghost mt-8">
            Conocer ETER
          </Link>
        </Reveal>
      </section>

      <section className="wrap-wide py-20">
        <Reveal>
          <p className="eyebrow">Oficio</p>
          <h2 className="display mt-4 max-w-3xl text-[clamp(2.4rem,6vw,4.8rem)]">
            Tres gestos. Ninguno apurado.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5" delay={80}>
            <div className="img-frame aspect-[4/5]">
              <Image
                src="/images/hands.jpg"
                alt="Manos sosteniendo un antebrazo con una cinta de lino, preparando un vial."
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <ol className="md:col-span-6 md:col-start-7">
            {proceso.map((item, index) => (
              <Reveal as="li" key={item.n} delay={index * 90} className="border-t border-line py-7">
                <p className="eyebrow">{item.n}</p>
                <h3 className="mt-3 font-serif text-3xl">{item.title}</h3>
                <p className="mt-3 max-w-md text-ink-soft">{item.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-paper-2/50 py-20">
        <div className="wrap-wide">
          <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Catálogo</p>
              <h2 className="display mt-4 text-[clamp(2.4rem,6vw,4.6rem)]">
                Exámenes que importan.
              </h2>
            </div>
            <Link href="/examenes" className="btn btn-ghost">
              Catálogo completo
            </Link>
          </Reveal>
          <div className="mt-12 max-w-xl">
            <HomeSearch />
          </div>
          <ul className="mt-12 divide-y divide-line border-y border-line">
            {destacados.map((item, index) => (
              <Reveal as="li" key={item.slug} delay={index * 50}>
                <Link
                  href={`/examenes/${item.slug}`}
                  className="group grid grid-cols-12 items-baseline gap-3 py-5 text-ink no-underline"
                >
                  <span className="col-span-12 font-serif text-2xl md:col-span-7 md:text-3xl">
                    {item.nombre}
                  </span>
                  <span className="col-span-6 font-mono text-xs text-mute md:col-span-3">
                    {item.plazo}
                  </span>
                  <span className="col-span-6 text-right font-mono text-sm md:col-span-2">
                    {clp(item.precio)}
                    <span className="ml-3 text-mute group-hover:text-ink">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap-wide py-20">
        <Reveal>
          <p className="eyebrow">Chequeos</p>
          <h2 className="display mt-4 max-w-3xl text-[clamp(2.4rem,6vw,4.6rem)]">
            Un retrato, no una lista de compras.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {chequeos.slice(0, 3).map((item, index) => (
            <Reveal
              key={item.slug}
              delay={index * 80}
              className="flex flex-col border border-line bg-cream p-7"
            >
              <p className="eyebrow">{clp(item.precio)}</p>
              <h3 className="mt-4 font-serif text-3xl">{item.nombre}</h3>
              <p className="mt-4 flex-1 text-ink-soft">{item.tagline}</p>
              <Link href="/chequeos" className="mt-8 text-sm tracking-[0.14em] uppercase no-underline">
                Ver panel →
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative">
        <div className="img-frame min-h-[70vh]">
          <Image
            src="/images/domicilio.jpg"
            alt="Profesional de ETER en un pasillo de edificio santiaguino, con maletín claro."
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(27,29,26,0.55)] via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 md:p-16">
            <p className="eyebrow text-cream/80">Domicilio</p>
            <h2 className="display mt-4 max-w-2xl text-[clamp(2.4rem,6vw,5rem)] text-cream">
              A las 7:15, en tu casa, sin que se despierte nadie.
            </h2>
            <Link href="/domicilio" className="btn btn-cream mt-8">
              Pedir toma a domicilio
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap-wide grid items-center gap-12 py-20 md:grid-cols-12">
        <Reveal className="md:col-span-6">
          <p className="eyebrow">Casa</p>
          <h2 className="display mt-4 text-[clamp(2.4rem,6vw,4.6rem)]">
            Cuatro puertas en Santiago.
          </h2>
          <p className="mt-6 max-w-md text-lg text-ink-soft">
            Providencia, Las Condes, Ñuñoa y Vitacura. Luz de mañana, sillas de
            lino, y un laboratorio que no parece sala de espera de isapre.
          </p>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {sucursales.map((item) => (
              <li key={item.slug} className="flex items-baseline justify-between py-4">
                <span className="font-serif text-2xl">{item.nombre}</span>
                <span className="text-sm text-mute">{item.metro ?? item.comuna}</span>
              </li>
            ))}
          </ul>
          <Link href="/sucursales" className="btn btn-ghost mt-8">
            Cómo llegar
          </Link>
        </Reveal>
        <Reveal className="md:col-span-6" delay={100}>
          <Figure
            src="/images/sucursal-providencia.jpg"
            alt="Fachada de piedra y jacarandás en flor en Providencia."
            caption="Providencia · jacarandás en noviembre"
            imgClassName="aspect-[4/5] md:aspect-[4/5]"
          />
        </Reveal>
      </section>

      <section className="border-y border-line py-20">
        <div className="wrap-wide">
          <p className="eyebrow">Voces</p>
          <div className="mt-10 grid gap-12 md:grid-cols-3">
            {voces.map((item, index) => (
              <Reveal key={item.name} delay={index * 90}>
                <blockquote className="font-serif text-2xl leading-snug md:text-[1.7rem]">
                  “{item.quote}”
                </blockquote>
                <p className="mt-6 eyebrow">
                  {item.name} · {item.lugar}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="wrap-wide grid items-end gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-8">
            <h2 className="display text-[clamp(2.8rem,8vw,6.5rem)]">
              El cuerpo habla.
              <br />
              Agenda el silencio
              <br />
              para escucharlo.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-4 md:pb-3" delay={120}>
            <p className="text-ink-soft">
              Lun a vie desde las 7:00. Sábados hasta las 13:00. Domicilio en
              dieciséis comunas de la Región Metropolitana.
            </p>
            <Link href="/contacto" className="btn btn-ink mt-6">
              Agendar hora
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
