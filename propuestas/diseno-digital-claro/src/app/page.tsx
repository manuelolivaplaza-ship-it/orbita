import Image from "next/image";
import Link from "next/link";
import { Cta } from "@/components/cta";
import { LuzNorte } from "@/components/luz";
import { Marquee } from "@/components/marquee";
import { ProjectTeaser } from "@/components/project-teaser";
import { Reveal } from "@/components/reveal";
import { oficios } from "@/lib/oficio";
import { clients, fees, marquee, method, principles, stats } from "@/lib/site";
import { projects } from "@/lib/work";

export default function Home() {
  const [featured, ...rest] = projects;

  return (
    <>
      <section className="wrap pb-10 pt-10 md:pb-16 md:pt-16">
        <p className="eyebrow rise" style={{ animationDelay: "0.05s" }}>
          Estudio de diseño digital · Ñuñoa
        </p>
        <h1
          className="display rise mt-6 max-w-[14ch] text-[clamp(3.2rem,9.4vw,8.6rem)]"
          style={{ animationDelay: "0.12s" }}
        >
          Diseño a luz <em className="italic text-norte">norte</em>.
        </h1>
        <div
          className="rise mt-10 flex max-w-3xl flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between md:gap-16"
          style={{ animationDelay: "0.28s" }}
        >
          <p className="text-[1.12rem] leading-[1.7] text-muted md:text-[1.22rem]">
            Identidad, producto y sitios para marcas chilenas que ya facturan y
            todavía se ven como un template. Seis personas. Una mesa. Luz que
            entra por el norte.
          </p>
          <div className="flex shrink-0 flex-col gap-4">
            <Link
              href="/contacto"
              className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-sm tracking-[0.04em] text-foam transition-colors hover:bg-norte"
            >
              Conversar un encargo
            </Link>
            <LuzNorte className="eyebrow" />
          </div>
        </div>
      </section>

      <section className="pb-8 md:pb-12">
        <div
          className="img-frame relative mx-auto aspect-[16/10] w-[min(1320px,calc(100%-2.5rem))] rise md:aspect-[16/8] md:w-[min(1320px,calc(100%-4.5rem))]"
          style={{ animationDelay: "0.4s" }}
        >
          <Image
            src="/images/hero.jpg"
            alt="El estudio en Avenida Italia: mesa de roble, ventanal hacia Ñuñoa y un muro de pruebas."
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="wrap mt-4 flex flex-col gap-1 text-sm text-muted md:flex-row md:justify-between">
          <p>El estudio, Avenida Italia. Ñuñoa, un martes a las once.</p>
          <p>Desde 2017.</p>
        </div>
      </section>

      <div className="border-y border-line">
        <Marquee items={marquee} />
      </div>

      <Reveal as="section" className="wrap grid gap-12 py-24 md:grid-cols-12 md:gap-8 md:py-32">
        <p className="eyebrow md:col-span-4">Por qué existimos</p>
        <div className="md:col-span-8">
          <h2 className="font-display text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.08] tracking-[-0.03em]">
            Hay demasiado diseño que pide una reunión para entenderse. Marcas
            que se esconden en un degradé. Productos que se ven caros y se leen
            mal.
          </h2>
          <p className="mt-8 max-w-xl text-[1.08rem] leading-[1.75] text-muted">
            Nítida hace lo contrario. Forma nítida, palabra justa, sistemas que
            un equipo hereda sin traducir. Si hay que explicarlo, todavía no
            está listo.
          </p>
        </div>
      </Reveal>

      <section className="wrap pb-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="eyebrow">Trabajo</p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.03em] md:text-5xl">
              Encargos recientes
            </h2>
          </div>
          <Link href="/trabajo" className="hidden link-line text-sm text-muted md:inline">
            Todo el trabajo
          </Link>
        </div>
        <div className="grid gap-16 md:gap-20">
          <ProjectTeaser project={featured} index={0} featured />
          <div className="grid gap-16 md:grid-cols-3 md:gap-8">
            {rest.map((project, index) => (
              <ProjectTeaser key={project.slug} project={project} index={index + 1} />
            ))}
          </div>
        </div>
        <Link
          href="/trabajo"
          className="mt-12 inline-flex text-sm tracking-[0.06em] text-norte md:hidden"
        >
          Todo el trabajo →
        </Link>
      </section>

      <Reveal as="section" className="wrap grid gap-6 py-24 md:grid-cols-2 md:py-32">
        <div className="img-frame relative aspect-[4/5] md:aspect-auto md:min-h-[640px]">
          <Image
            src="/images/ventana.jpg"
            alt="Luz de mañana sobre un muro de yeso y una cortina de lino."
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div className="flex flex-col justify-between bg-paper-2 px-8 py-12 md:px-14 md:py-16">
          <p className="eyebrow">Oficio</p>
          <blockquote className="mt-10 font-display text-[clamp(1.8rem,3.2vw,2.7rem)] leading-[1.15] tracking-[-0.03em]">
            “En Chile el norte es el sol de la casa. Diseñamos con esa luz:
            abundante, clara, sin teatro.”
          </blockquote>
          <p className="mt-10 max-w-md text-[1.02rem] leading-relaxed text-muted">
            Amparo Vidal fundó Nítida después de ver, una y otra vez, marcas que
            se veían brillantes en un pitch y se deshacían en un sitio. El
            estudio existe para cerrar esa distancia.
          </p>
        </div>
      </Reveal>

      <section className="wrap py-8 md:py-12">
        <p className="eyebrow">Cómo entra un encargo</p>
        <h2 className="mt-3 max-w-xl font-display text-4xl tracking-[-0.03em] md:text-5xl">
          Cuatro pasos. Ninguno es un workshop.
        </h2>
        <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-8">
          {method.map((step, index) => (
            <Reveal as="li" key={step.index} delay={index * 80} className="border-t border-line pt-6">
              <p className="font-display text-3xl text-norte">{step.index}</p>
              <h3 className="mt-4 font-display text-2xl tracking-[-0.03em]">
                {step.title}
              </h3>
              <p className="mt-1 text-xs tracking-[0.14em] text-muted uppercase">
                {step.days}
              </p>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">
                {step.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="wrap py-20 md:py-28">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">Oficio</p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.03em] md:text-5xl">
              Qué hacemos
            </h2>
          </div>
          <Link href="/oficio" className="link-line text-sm text-muted">
            El oficio
          </Link>
        </div>
        <ul className="mt-12 divide-y divide-line border-y border-line">
          {oficios.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/oficio/${item.slug}`}
                className="group grid grid-cols-12 items-baseline gap-4 py-7"
              >
                <span className="col-span-2 eyebrow text-norte md:col-span-1">
                  {item.index}
                </span>
                <span className="col-span-10 font-display text-2xl tracking-[-0.03em] md:col-span-4 md:text-3xl">
                  {item.title}
                </span>
                <span className="col-span-10 col-start-3 text-[0.98rem] leading-relaxed text-muted md:col-span-6 md:col-start-auto">
                  {item.lede}
                </span>
                <span className="col-span-1 hidden text-right text-norte transition-transform duration-300 group-hover:translate-x-1 md:block">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-line bg-foam/40">
        <div className="wrap grid grid-cols-2 gap-8 py-16 md:grid-cols-4 md:py-20">
          {stats.map((stat) => (
            <Reveal key={stat.label}>
              <p className="font-display nums text-4xl tracking-[-0.03em] md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </Reveal>
          ))}
        </div>
        <div className="border-t border-line">
          <Marquee items={clients} />
        </div>
      </section>

      <section className="wrap py-24 md:py-32">
        <p className="eyebrow">Criterio</p>
        <h2 className="mt-3 max-w-xl font-display text-4xl tracking-[-0.03em] md:text-5xl">
          Cómo pensamos, escrito.
        </h2>
        <ul className="mt-14 grid gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-14">
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

      <Reveal as="section" className="wrap grid gap-10 py-8 md:grid-cols-12 md:py-16">
        <div className="img-frame relative aspect-[16/11] md:col-span-7 md:aspect-auto md:min-h-[520px]">
          <Image
            src="/images/equipo.jpg"
            alt="El equipo de Nítida reunido en la mesa del estudio, Ñuñoa."
            fill
            className="object-cover"
            sizes="(min-width: 768px) 60vw, 100vw"
          />
        </div>
        <div className="flex flex-col justify-between md:col-span-5 md:py-4">
          <div>
            <p className="eyebrow">El estudio</p>
            <h2 className="mt-4 font-display text-4xl tracking-[-0.03em] md:text-5xl">
              Seis personas. Una mesa. Avenida Italia.
            </h2>
            <p className="mt-6 text-[1.05rem] leading-relaxed text-muted">
              No somos una fábrica de tickets. Somos un estudio chico que toma
              pocos encargos y los lleva hasta que el sistema es de ustedes.
              Identidad, producto y sitios en la misma conversación, siempre.
            </p>
          </div>
          <Link
            href="/estudio"
            className="mt-10 inline-flex items-center gap-2 text-sm tracking-[0.06em] text-norte"
          >
            Conocer Nítida
            <span aria-hidden>→</span>
          </Link>
        </div>
      </Reveal>

      <section className="wrap py-24 md:py-32">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="eyebrow">Honorarios</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl tracking-[-0.03em] md:text-5xl">
              En UF. Por escrito. Sin teatro.
            </h2>
          </div>
          <Link href="/contacto" className="hidden link-line text-sm text-muted md:inline">
            Pedir un diagnóstico
          </Link>
        </div>
        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {fees.map((fee, index) => (
            <Reveal as="li" key={fee.name} delay={index * 80} className="border-t border-line pt-6">
              <p className="eyebrow">{fee.name}</p>
              <p className="mt-3 font-display text-3xl tracking-[-0.03em] md:text-4xl">
                {fee.price}
              </p>
              <p className="mt-2 text-sm text-muted">{fee.note}</p>
              <ul className="mt-6 space-y-2 text-[0.95rem] leading-relaxed text-ink">
                {fee.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-norte" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </section>

      <Cta />
    </>
  );
}
