import Image from "next/image";
import Link from "next/link";
import { Atmosphere } from "@/components/atmosphere";
import { Arrow } from "@/components/mark";
import { Reveal } from "@/components/reveal";
import { SkuNote, SkuTable } from "@/components/sku-table";
import { families, featuredSkus } from "@/data/catalog";
import { site } from "@/data/site";
import { formatCLP } from "@/lib/format";

const cifras = [
  { k: "07:30", v: "Apertura mesón" },
  { k: "1.840", v: "m² de patio" },
  { k: "4.200", v: "SKU rotuladas" },
  { k: "24 h", v: "Despacho RM" },
];

export default function HomePage() {
  const lista = featuredSkus();

  return (
    <>
      <section id="patio-hero" className="hero">
        <picture>
          <source media="(max-width: 767px)" srcSet="/images/hero-m.jpg" />
          <img
            src="/images/hero.jpg"
            alt="Patio de fierro al amanecer: tiras galvanizadas alineadas, pasillo de hormigón pálido a la izquierda"
            width={1920}
            height={1080}
            fetchPriority="high"
            className="float-media absolute inset-0 h-full w-full object-cover"
          />
        </picture>
        <div className="hero-veil absolute inset-0" />
        <Atmosphere />
        <div className="cut left-[38%] hidden md:block" aria-hidden="true" />

        <div className="relative z-20 flex h-full max-w-[1480px] flex-col justify-end px-5 pb-10 pt-28 md:justify-center md:px-10 md:pb-16 lg:px-16">
          <p
            className="rise font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted"
            style={{ animationDelay: "0.12s" }}
          >
            Ferretería industrial · 10 de Julio
          </p>
          <h1
            className="rise mt-5 max-w-3xl font-display text-[clamp(3rem,8.2vw,7.6rem)] font-light leading-[0.88] tracking-tight"
            style={{ animationDelay: "0.28s" }}
          >
            El peso,
            <br />
            <em className="italic">en claro.</em>
          </h1>
          <p
            className="rise mt-6 max-w-md text-base leading-relaxed text-ink-soft md:text-lg"
            style={{ animationDelay: "0.46s" }}
          >
            Corte, doblado y stock rotulado. Cotiza con IVA. Retiro en mesón
            o despacho a obra mañana.
          </p>
          <div
            className="rise mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.62s" }}
          >
            <Link href="/cotizar" className="btn btn-ink">
              Cotizar lista
              <Arrow />
            </Link>
            <Link href="/familias" className="btn btn-ghost">
              Ver familias
            </Link>
          </div>
        </div>

        <p className="measure pointer-events-none absolute bottom-8 left-5 z-20 hidden md:block lg:left-16">
          Patio · 1.840 m² · tiras de 6.000 mm
        </p>
        <p className="pointer-events-none absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 font-mono text-[0.58rem] uppercase tracking-[0.4em] text-ink/50 [writing-mode:vertical-rl] lg:right-10 lg:block">
          Santiago · Chile
        </p>
      </section>

      <section
        id="oficio"
        className="mx-auto grid max-w-[1480px] gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32 lg:px-16"
      >
        <Reveal className="md:col-span-7">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Oficio
          </p>
          <h2 className="mt-6 max-w-2xl font-display text-[clamp(2rem,4.4vw,3.8rem)] font-light leading-[1.08] tracking-tight">
            Una tira de seis metros no espera a que le respondan el correo.
          </h2>
        </Reveal>
        <Reveal className="md:col-span-5 md:pt-16" delay={100}>
          <p className="text-base leading-relaxed text-ink-soft md:text-lg">
            El patio abre a las 07:30. El fierro está rotulado. El corte se
            escribe. Si la lista entra antes de las {site.corteHora}, sale
            mañana. Lo que no hay, se dice.
          </p>
          <Link
            href="/patio"
            className="trace mt-8 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.22em]"
          >
            Cómo se trabaja el patio
            <Arrow />
          </Link>
        </Reveal>
      </section>

      <section id="cifras" className="border-y border-line">
        <div className="mx-auto grid max-w-[1480px] grid-cols-2 md:grid-cols-4">
          {cifras.map((item, index) => (
            <Reveal
              key={item.v}
              delay={index * 70}
              className="border-line px-5 py-10 md:px-10 lg:px-16 [&:nth-child(odd)]:border-r md:[&:not(:last-child)]:border-r"
            >
              <p className="font-display text-4xl font-light tracking-tight md:text-5xl">
                {item.k}
              </p>
              <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                {item.v}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="familias"
        className="mx-auto max-w-[1480px] px-5 py-24 md:px-10 md:py-32 lg:px-16"
      >
        <Reveal className="md:flex md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
              Familias
            </p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-light tracking-tight md:text-6xl">
              Seis calles. Un patio.
            </h2>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-soft md:mt-0">
            No es una vitrina. Es el índice del mesón: fierro, pernos, madera,
            cemento, plancha, herramienta.
          </p>
        </Reveal>

        <div className="mt-14 border-t border-line">
          {families.map((family, index) => (
            <Reveal key={family.id} delay={index * 40}>
              <Link href={`/familias/${family.id}`} className="family-row group">
                <span className="font-mono text-[0.68rem] tracking-[0.16em] text-steel">
                  {family.n}
                </span>
                <span>
                  <span className="block font-display text-2xl font-light tracking-tight md:text-4xl">
                    {family.name}
                  </span>
                  <span className="family-meta mt-2 block font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">
                    {family.corte ? "Corte incluido · " : ""}
                    desde {formatCLP(family.fromIva)}
                  </span>
                </span>
                <span className="hidden font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted md:block">
                  {family.measure}
                </span>
                <span className="hidden text-right font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink-soft md:block">
                  {family.kicker}
                </span>
                <span className="inline-flex items-center justify-end">
                  <Arrow className="transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="lista"
        className="border-y border-line bg-paper-2/40"
      >
        <div className="mx-auto max-w-[1480px] px-5 py-24 md:px-10 md:py-32 lg:px-16">
          <Reveal className="md:flex md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
                Lista de despacho
              </p>
              <h2 className="mt-5 max-w-xl font-display text-4xl font-light tracking-tight md:text-6xl">
                Ocho SKU que salen todas las mañanas.
              </h2>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-soft md:mt-0">
              Precio con IVA. Stock de patio, no de catálogo. El resto se abre
              en la familia.
            </p>
          </Reveal>
          <Reveal className="mt-12" delay={80}>
            <SkuTable items={lista} />
            <SkuNote />
          </Reveal>
        </div>
      </section>

      <section id="corte" className="border-b border-line">
        <div className="grid md:grid-cols-12">
          <div className="relative min-h-[22rem] md:col-span-6 md:min-h-[40rem]">
            <Image
              src="/images/corte.jpg"
              alt="Extremo recién cortado de un perfil cuadrado, viruta pálida sobre hormigón"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-between px-5 py-14 md:col-span-6 md:px-10 md:py-16 lg:px-16">
            <Reveal>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
                Corte y doblado
              </p>
              <h2 className="mt-5 font-display text-4xl font-light tracking-tight md:text-5xl">
                El corte es la promesa.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-soft">
                Tira de 6 m incluida. Corte extra {formatCLP(site.corteExtra)}.
                Doblado {formatCLP(site.dobladoCurva)} por curva. Sin medida
                escrita, no se enciende la sierra.
              </p>
            </Reveal>
            <Reveal className="mt-10" delay={80}>
              <dl className="space-y-4 border-t border-line pt-8">
                <div className="flex items-baseline justify-between gap-6">
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">
                    Corte hasta
                  </dt>
                  <dd>{site.corteIncluidoHasta}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-6">
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">
                    Lista antes de
                  </dt>
                  <dd>{site.corteHora}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-6">
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">
                    Sale
                  </dt>
                  <dd>al día siguiente</dd>
                </div>
              </dl>
              <Link
                href="/corte"
                className="mt-10 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.22em]"
              >
                Ver el oficio de corte
                <Arrow />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="cierre"
        className="mx-auto grid max-w-[1480px] gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32 lg:px-16"
      >
        <Reveal className="md:col-span-7">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Mesón
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,5.4rem)] font-light leading-[0.94] tracking-tight">
            ¿Necesitas fierro para mañana?
          </h2>
          <a
            href={site.phoneHref}
            className="mt-8 block font-display text-4xl font-light tracking-tight text-steel md:text-6xl"
          >
            {site.phone}
          </a>
        </Reveal>
        <Reveal className="md:col-span-4 md:col-start-9 md:pt-16" delay={100}>
          <p className="text-sm leading-relaxed text-ink-soft">
            Manda la lista con medida. Respondemos en horario de patio. Si la
            obra no espera, WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/cotizar" className="btn btn-ink">
              Cotizar lista
              <Arrow />
            </Link>
            <a href={site.whatsappHref} className="btn btn-ghost">
              WhatsApp
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
