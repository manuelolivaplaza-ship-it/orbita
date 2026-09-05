import Image from "next/image";
import Link from "next/link";
import { Altar } from "@/components/altar";
import { Arrow } from "@/components/mark";
import { Faq } from "@/components/faq";
import { MedidaComposer } from "@/components/medida-composer";
import { Reveal } from "@/components/reveal";
import { rites, sidewall } from "@/data/content";
import { site } from "@/data/site";
import { priceRows, terrenoList } from "@/data/tires";
import { formatCLP } from "@/lib/format";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-paper">
        <div className="mx-auto grid min-h-[100svh] max-w-[1440px] items-center gap-10 px-6 pb-16 pt-28 md:px-10 lg:grid-cols-12 lg:px-16 lg:pb-10 lg:pt-24">
          <div className="lg:col-span-5">
            <p className="kicker rise" style={{ animationDelay: "0.1s" }}>
              Neumáticos · La Reina · Desde {site.founded}
            </p>
            <h1
              className="rise mt-6 max-w-xl font-display text-[clamp(3.1rem,8vw,6.6rem)] font-light leading-[0.88] tracking-tight"
              style={{ animationDelay: "0.22s" }}
            >
              Cuatro círculos
              <br />
              <em className="italic">de aire.</em>
            </h1>
            <p
              className="rise mt-7 max-w-md text-lg leading-relaxed text-ink-soft"
              style={{ animationDelay: "0.4s" }}
            >
              El resto es conversación. Medida leída, compuesto elegido, montaje
              el mismo día. El único punto donde tu auto toca Chile.
            </p>
            <div
              className="rise mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "0.55s" }}
            >
              <Link href="/medida" className="btn btn-ink">
                Buscar mi medida
                <Arrow />
              </Link>
              <Link href="/cita" className="btn btn-ghost">
                Agendar montaje
              </Link>
            </div>
          </div>

          <div
            className="rise flex justify-center lg:col-span-7 lg:justify-end"
            style={{ animationDelay: "0.28s" }}
          >
            <Altar
              src="/images/hero.jpg"
              alt="Un neumático nuevo, de pie, en un taller vacío de hormigón claro"
            />
          </div>
        </div>

        <p className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 font-mono text-[0.58rem] uppercase tracking-[0.4em] text-muted [writing-mode:vertical-rl] lg:right-10 lg:block">
          Santiago · Chile
        </p>
      </section>

      <section id="medida" className="border-y border-line bg-paper-2/40">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20 lg:px-16">
          <Reveal className="text-center">
            <p className="kicker">Costado</p>
            <h2 className="mt-4 font-display text-4xl font-light tracking-tight md:text-5xl">
              ¿Qué medida lleva tu auto?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-ink-soft">
              Gira los números como se lee el flanco. Si no la tienes a mano,
              tráenos la patente.
            </p>
          </Reveal>
          <MedidaComposer variant="band" />
        </div>
      </section>

      <section id="huella" className="mx-auto grid max-w-[1440px] gap-12 px-6 py-28 md:grid-cols-12 md:px-10 md:py-36 lg:px-16">
        <Reveal className="md:col-span-6">
          <p className="kicker">Manifiesto</p>
          <h2 className="mt-6 max-w-xl font-display text-5xl font-light leading-[1.05] tracking-tight md:text-6xl">
            Todo el auto descansa en el tamaño de una mano.
          </h2>
        </Reveal>
        <Reveal className="md:col-span-5 md:col-start-8 md:pt-16" delay={120}>
          <p className="text-lg leading-relaxed text-ink-soft">
            Un auto de mil cuatrocientos kilos toca Chile en cuatro huellas. Eso
            es todo: la lluvia de Santiago, el ripio del Cajón, la cuesta de
            Farellones. ETER existe para que ese contacto no sea una apuesta.
          </p>
          <Link
            href="/casa"
            className="link-line mt-8 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
          >
            Conocer la casa
            <Arrow />
          </Link>
        </Reveal>
      </section>

      <section className="relative min-h-[52vh] md:min-h-[70vh]">
        <Image
          src="/images/huella.jpg"
          alt="Huella de un neumático sobre asfalto húmedo, con la cordillera al fondo"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </section>

      <section id="compuestos" className="mx-auto max-w-[1440px] px-6 py-28 md:px-10 md:py-36 lg:px-16">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="kicker">Terreno</p>
            <h2 className="mt-4 font-display text-5xl font-light tracking-tight md:text-6xl">
              El compuesto según Chile
            </h2>
          </div>
          <Link
            href="/compuestos"
            className="link-line inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
          >
            Ver el piso
            <Arrow />
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {terrenoList
            .filter((item) =>
              item.slug === "ciudad" || item.slug === "cordillera" || item.slug === "ruta",
            )
            .map((item, index) => (
              <Reveal
                key={item.slug}
                delay={index * 80}
                className={index === 0 ? "md:col-span-2" : undefined}
              >
                <Link href={`/compuestos#${item.slug}`} className="group block">
                  <div
                    className={`frame relative ${index === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.lead}
                      fill
                      sizes={index === 0 ? "100vw" : "50vw"}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-ink/55 via-ink/0 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 text-paper md:p-10">
                      <p className="font-mono text-[0.58rem] uppercase tracking-[0.28em] text-paper/70">
                        {item.kicker}
                      </p>
                      <h3 className="mt-2 font-display text-4xl font-light tracking-tight md:text-5xl">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
        </div>
      </section>

      <section id="costado" className="border-y border-line">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-16">
          <Reveal>
            <p className="kicker">Lectura</p>
            <h2 className="mt-4 max-w-2xl font-display text-5xl font-light tracking-tight">
              El costado no es decoración.
            </h2>
          </Reveal>
          <div className="mt-14 overflow-x-auto">
            <p className="font-display text-[clamp(2.4rem,8vw,6rem)] font-light tracking-tight">
              205<span className="text-muted">/</span>55{" "}
              <span className="text-muted">R</span>16{" "}
              <span className="text-goma">91V</span>
            </p>
          </div>
          <div className="mt-12 grid gap-10 border-t border-line pt-10 md:grid-cols-5">
            {sidewall.map((item, index) => (
              <Reveal key={item.code} delay={index * 70}>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-goma">
                  {item.code}
                </p>
                <p className="mt-3 font-display text-2xl font-light">{item.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="precios" className="mx-auto max-w-[1440px] px-6 py-28 md:px-10 md:py-36 lg:px-16">
        <Reveal>
          <p className="kicker">Referencia</p>
          <h2 className="mt-4 font-display text-5xl font-light tracking-tight md:text-6xl">
            Precios de piso, sin sorpresa.
          </h2>
          <p className="mt-5 max-w-xl text-ink-soft">
            Desde, con montaje, balanceo e IVA. El valor final se confirma con el
            stock del día. Si no hay, te lo decimos ahora.
          </p>
        </Reveal>
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[36rem] text-left">
            <thead>
              <tr className="border-b border-line font-mono text-[0.58rem] uppercase tracking-[0.24em] text-muted">
                <th className="py-4 font-medium">Medida</th>
                <th className="py-4 font-medium">Piso</th>
                <th className="py-4 text-right font-medium">Desde</th>
              </tr>
            </thead>
            <tbody>
              {priceRows.map((row, index) => (
                <tr
                  key={row.size}
                  className={index === 2 ? "border-l-2 border-l-goma" : undefined}
                >
                  <td className="border-b border-line py-5 font-display text-2xl font-light">
                    {row.size}
                  </td>
                  <td className="border-b border-line py-5 text-sm text-ink-soft">
                    {row.note}
                  </td>
                  <td className="border-b border-line py-5 text-right tabular-nums">
                    {formatCLP(row.from)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-muted">
          Fila marcada: la medida que más se pide en Santiago. Valores
          referenciales a septiembre 2026.
        </p>
      </section>

      <section id="montaje" className="border-y border-line">
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-12">
          <div className="relative min-h-[420px] md:col-span-7 md:min-h-[720px]">
            <Image
              src="/images/taller.jpg"
              alt="Taller ETER: desmontadora y librería de neumáticos bajo luz norte"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-paper px-6 py-16 md:col-span-5 md:px-12 lg:px-16">
            <Reveal>
              <p className="kicker">Oficio</p>
              <h2 className="mt-5 font-display text-5xl font-light leading-[1.05] tracking-tight">
                Montaje como se lee el costado: sin prisa falsa.
              </h2>
              <ol className="mt-10 space-y-8">
                {rites.map((rite) => (
                  <li key={rite.n} className="grid grid-cols-[auto_1fr] gap-5">
                    <span className="font-mono text-[0.62rem] text-goma">{rite.n}</span>
                    <div>
                      <p className="font-display text-2xl font-light">{rite.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                        {rite.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <Link href="/montaje" className="btn btn-ink mt-12 w-fit">
                El ritual
                <Arrow />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-px bg-line py-0 md:grid-cols-4">
        {[
          { k: "12", v: "Años en La Reina" },
          { k: "31 mil", v: "Montajes" },
          { k: "94%", v: "En el día" },
          { k: "< 12 min", v: "Cotización hábil" },
        ].map((item) => (
          <div key={item.v} className="bg-paper px-6 py-12 md:px-10">
            <p className="font-display text-4xl font-light tracking-tight md:text-5xl">
              {item.k}
            </p>
            <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
              {item.v}
            </p>
          </div>
        ))}
      </section>

      <section id="faq" className="mx-auto max-w-[1440px] px-6 py-28 md:px-10 md:py-36 lg:px-16">
        <Reveal className="md:grid md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <p className="kicker">Dudas</p>
            <h2 className="mt-4 font-display text-5xl font-light tracking-tight">
              Lo que preguntan antes de subir el auto.
            </h2>
          </div>
          <div className="mt-12 md:col-span-8 md:mt-0">
            <Faq />
          </div>
        </Reveal>
      </section>

      <section className="border-t border-line bg-paper-2/50">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-end md:px-10 md:py-28 lg:px-16">
          <div>
            <p className="kicker">Cita</p>
            <h2 className="mt-4 max-w-xl font-display text-5xl font-light tracking-tight md:text-6xl">
              ¿Llanta ponchada? Hablemos ahora.
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/cita" className="btn btn-ink">
              Agendar montaje
              <Arrow />
            </Link>
            <a href={site.whatsappHref} className="btn btn-ghost">
              WhatsApp {site.whatsapp}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
