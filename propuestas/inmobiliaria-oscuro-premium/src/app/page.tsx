import Image from "next/image";
import Link from "next/link";
import { ConsultForm } from "@/components/consult-form";
import { PropertyCard, PropertyRow } from "@/components/property-card";
import { Reveal } from "@/components/reveal";
import { properties, territories } from "@/lib/properties";
import { faqs, principles, site, stats, steps, team } from "@/lib/site";

const featured = properties.filter((p) => p.featured);
const lead = featured[0];
const restFeatured = featured.slice(1, 3);

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Seleccion />
      <Territorio />
      <Metodo />
      <Inventario />
      <Estudio />
      <Faq />
      <Cierre />
    </>
  );
}

function Hero() {
  return (
    <section className="relative -mt-[4.5rem] min-h-[100svh] overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Casa de piedra y vidrio en la precordillera de Santiago al anochecer"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-void via-void/78 to-void/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/50" />

      <div className="shell relative flex min-h-[100svh] flex-col justify-end pb-0 pt-28">
        <div className="max-w-3xl pb-10 sm:pb-14">
          <p className="kicker">{site.coords} · Vitacura</p>
          <h1 className="mt-5 font-display text-[clamp(2.7rem,7.4vw,6.4rem)] leading-[0.88] tracking-[-0.04em] text-balance">
            No publicamos casas.{" "}
            <em className="italic text-brass">Las presentamos.</em>
          </h1>
          <p className="mt-6 max-w-[38ch] text-[1.08rem] leading-relaxed text-paper-dim">
            Inventario privado en el oriente de Santiago, Zapallar y los lagos
            del sur. Mandato escrito. Valores en UF. La calle, en persona.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/consulta" className="btn btn-primary">
              Solicitar presentación
            </Link>
            <Link href="/propiedades" className="btn btn-ghost">
              Ver la mesa
            </Link>
          </div>
        </div>

        <dl className="grid border-t border-paper/15 sm:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={
                i === 0
                  ? "border-paper/15 py-6 sm:border-r sm:pr-8"
                  : i === 3
                    ? "border-paper/15 py-6 sm:pl-8"
                    : "border-paper/15 py-6 sm:border-r sm:px-8"
              }
            >
              <dt className="kicker">{s.label}</dt>
              <dd className="mt-2 font-display text-[1.8rem] leading-none tabular tracking-tight">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="border-b border-line bg-ink">
      <p className="shell flex flex-wrap items-center justify-center gap-x-0 gap-y-2 py-5 text-center font-mono text-[0.72rem] tracking-[0.12em] text-paper-dim uppercase">
        <span>RUT {site.rut}</span>
        <span className="px-3 text-muted">·</span>
        <span>{site.cbr}</span>
        <span className="px-3 text-muted">·</span>
        <span>Honorario en UF, por escrito</span>
        <span className="px-3 text-muted">·</span>
        <span>Sin portales</span>
      </p>
    </section>
  );
}

function Seleccion() {
  return (
    <section className="py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">En mesa ahora</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-[16ch] font-display text-[clamp(2rem,4vw,3.4rem)] leading-[0.95]">
              Ocho propiedades. No hay más en vitrina.
            </h2>
            <Link href="/propiedades" className="btn btn-ghost">
              Inventario completo
            </Link>
          </div>
        </Reveal>

        {lead ? (
          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <PropertyCard property={lead} featured />
            </div>
            <div className="grid gap-6 lg:col-span-5">
              {restFeatured.map((p) => (
                <PropertyCard key={p.slug} property={p} featured />
              ))}
            </div>
          </div>
        ) : null}

        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties
            .filter((p) => !p.featured)
            .slice(0, 3)
            .map((p) => (
              <li key={p.slug}>
                <PropertyCard property={p} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

function Territorio() {
  return (
    <section className="border-y border-line bg-ink py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">Dónde trabajamos</p>
          <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(2rem,4vw,3.2rem)] leading-[0.95]">
            Cuatro latitudes. El resto, se lo decimos.
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-px bg-line sm:grid-cols-2">
          {territories.map((t, i) => (
            <li key={t.slug} className="bg-ink">
              <Reveal delay={i * 0.05}>
                <Link
                  href={`/territorio/${t.slug}`}
                  className="group grid sm:grid-cols-2"
                >
                  <div className="img-zoom relative aspect-[16/11]">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      sizes="(min-width: 640px) 25vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between border-t border-line p-6 sm:border-t-0 sm:border-l">
                    <div>
                      <p className="kicker">{t.coords}</p>
                      <h3 className="mt-3 font-display text-3xl leading-tight group-hover:text-brass">
                        {t.name}
                      </h3>
                      <p className="mt-3 max-w-[28ch] text-[0.95rem] text-paper-dim">
                        {t.kicker}
                      </p>
                    </div>
                    <p className="mt-8 font-mono text-[0.68rem] tracking-[0.16em] text-brass uppercase">
                      Ver territorio
                    </p>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Metodo() {
  return (
    <section className="py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">Cómo partimos</p>
          <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(2rem,4vw,3.2rem)] leading-[0.95]">
            Cincuenta minutos. Si no hay caso, se lo decimos esa tarde.
          </h2>
        </Reveal>
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {steps.map((s, i) => (
            <li
              key={s.folio}
              className={
                i === 0
                  ? "lg:pr-8"
                  : i === 3
                    ? "lg:border-l lg:border-line lg:pl-8"
                    : "lg:border-l lg:border-line lg:px-8"
              }
            >
              <Reveal delay={i * 0.06}>
                <span className="font-display text-4xl text-brass-deep tabular">
                  {s.folio}
                </span>
                <span className="mt-3 block h-px w-8 bg-brass" />
                <h3 className="mt-4 text-[1.02rem] font-medium">{s.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-paper-dim">
                  {s.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-20 grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="relative aspect-[16/10] overflow-hidden border border-line lg:col-span-7">
            <Image
              src="/images/estudio.jpg"
              alt="Mesa del estudio en Vitacura, lámpara de latón sobre el plano"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <div className="lg:col-span-5 lg:pl-6">
            <Reveal delay={0.08}>
              <blockquote className="font-display text-[clamp(1.6rem,3vw,2.2rem)] leading-[1.15] text-balance">
                «La dirección se entrega en la presentación. No antes.»
              </blockquote>
              <p className="mt-5 text-sm text-muted">
                Amparo Valdés · Socia
              </p>
              <ul className="mt-8 grid gap-5">
                {principles.map((p) => (
                  <li key={p.folio} className="border-t border-line pt-4">
                    <p className="kicker">{p.folio}</p>
                    <p className="mt-2 font-medium">{p.title}</p>
                    <p className="mt-1 text-[0.92rem] text-paper-dim">
                      {p.text}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Inventario() {
  return (
    <section className="border-y border-line bg-ink py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">Índice</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-[14ch] font-display text-[clamp(2rem,4vw,3.2rem)] leading-[0.95]">
              Lo que cabe en esta mesa.
            </h2>
            <p className="max-w-[28ch] text-sm text-muted">{site.ufNota}</p>
          </div>
        </Reveal>
        <div className="mt-10">
          <div className="hidden justify-between border-b border-line pb-3 font-mono text-[0.68rem] tracking-[0.16em] text-brass uppercase sm:grid sm:grid-cols-[5.5rem_1fr_auto_auto] sm:gap-4">
            <span>Folio</span>
            <span>Propiedad</span>
            <span>Útil</span>
            <span>Valor</span>
          </div>
          {properties.map((p) => (
            <PropertyRow key={p.slug} property={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Estudio() {
  return (
    <section className="py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">La mesa</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-[14ch] font-display text-[clamp(2rem,4vw,3.2rem)] leading-[0.95]">
              Quien presenta, firma.
            </h2>
            <Link href="/estudio" className="btn btn-ghost">
              El estudio
            </Link>
          </div>
        </Reveal>
        <ul className="mt-12 grid gap-px bg-line sm:grid-cols-3">
          {team.map((l, i) => (
            <li key={l.slug} className="bg-void">
              <Reveal delay={i * 0.05}>
                <Link href="/estudio" className="group block">
                  <div className="img-zoom relative aspect-[3/4] bg-surface">
                    <Image
                      src={l.image}
                      alt={`Retrato de ${l.name}`}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="border-t border-line px-1 py-5">
                    <p className="kicker">{l.role}</p>
                    <p className="mt-2 font-display text-2xl leading-tight group-hover:text-brass">
                      {l.name}
                    </p>
                    <p className="mt-1 text-sm text-muted">{l.territory}</p>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="border-t border-line py-20 sm:py-28">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="kicker">Preguntas</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] leading-[0.95]">
            Antes de escribir.
          </h2>
        </Reveal>
        <div className="lg:col-span-8">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group border-b border-line py-5 first:border-t"
            >
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 text-[1.05rem] marker:content-none [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="font-display text-2xl text-brass transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-[52ch] text-[0.98rem] leading-relaxed text-paper-dim">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cierre() {
  return (
    <section className="border-t border-line bg-ink">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px]">
          <Image
            src="/images/barrio-vitacura.jpg"
            alt="Precordillera de Santiago al anochecer, una casa encendida"
            fill
            sizes="50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void/85 to-transparent" />
          <div className="absolute right-0 bottom-0 left-0 p-8 sm:p-12">
            <p className="kicker">El piso</p>
            <p className="mt-3 font-display text-3xl leading-tight">
              {site.address.line}
            </p>
            <p className="mt-2 text-paper-dim">
              {site.address.city}
              <br />
              {site.hours}
              <br />
              {site.coords}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center border-t border-line p-8 sm:p-12 lg:border-t-0 lg:border-l">
          <p className="kicker">Presentación</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,3.5vw,2.8rem)] leading-[0.95]">
            Cuéntenos el territorio. Nosotros armamos la mesa.
          </h2>
          <div className="mt-8 max-w-md">
            <ConsultForm />
          </div>
        </div>
      </div>
    </section>
  );
}
