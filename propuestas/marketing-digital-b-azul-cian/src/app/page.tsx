import Link from "next/link";
import { Frame } from "@/components/frame";
import { LecturaForm } from "@/components/lectura-form";
import { Reveal } from "@/components/reveal";
import { TideTable } from "@/components/tide-table";
import {
  accounts,
  channels,
  fees,
  mesa,
  principles,
  questions,
} from "@/lib/data";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Puerto />
      <Oficio />
      <Canales />
      <Cuentas />
      <Honorarios />
      <Preguntas />
      <Escribir />
    </>
  );
}

function Hero() {
  return (
    <section className="pt-[4.75rem]">
      <div className="shell grid gap-10 py-10 lg:grid-cols-12 lg:gap-12 lg:py-16">
        <div className="lg:col-span-7">
          <h1 className="font-display text-[clamp(3.1rem,8.4vw,6.6rem)] font-medium leading-[0.9] tracking-tight">
            La pauta tiene marea.
          </h1>
          <p className="mt-7 max-w-[42ch] text-[17px] leading-relaxed text-muted">
            Agencia de marketing digital en Valparaíso. Leemos la demanda antes
            de gastar. Pauta sin markup, piezas que se entienden a una mano,
            sitios donde el clic paga.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/lectura"
              className="inline-flex h-12 items-center bg-navy px-6 text-[0.92rem] font-semibold text-foam transition-colors hover:bg-ink"
            >
              Pedir una lectura
            </Link>
            <a
              href={site.whatsapp}
              className="inline-flex h-12 items-center border border-ink px-6 text-[0.92rem] font-semibold transition-colors hover:border-cyan-deep hover:text-cyan-deep"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-end lg:col-span-5">
          <p className="font-mono nums text-[13px] leading-relaxed text-muted">
            {site.address.line}
            <br />
            {site.barrio}, {site.address.city}
            <br />
            {site.hoursShort}
            <br />
            Lectura {site.lecturaPrice} · retainer desde {site.retainerFrom}
          </p>
        </div>
      </div>
      <div className="shell pb-6 lg:pb-10">
        <TideTable />
      </div>
    </section>
  );
}

function Puerto() {
  return (
    <section className="py-6 lg:py-10">
      <div className="shell">
        <Frame
          src="/images/hero.jpg"
          alt="Mirador de Valparaíso sobre la bahía, con grúas del puerto y el Pacífico al fondo"
          caption="Estación Valparaíso · Barrio Puerto · Cochrane 412"
          ratio="aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9]"
          sizes="100vw"
          priority
        />
      </div>
    </section>
  );
}

function Oficio() {
  return (
    <section className="py-20 lg:py-28">
      <div className="shell grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="mark">Oficio</p>
          <h2 className="font-display mt-4 max-w-[12ch] text-[clamp(2.1rem,4.4vw,3.4rem)] font-medium leading-[0.96] tracking-tight">
            No se rema contra.
          </h2>
          <p className="mt-6 max-w-[36ch] text-[16px] leading-relaxed text-muted">
            La demanda chilena tiene hora. El CPC también. Gastar en bajamar es
            un vicio caro. Nueve cuentas, una mesa, corte semanal.
          </p>
        </Reveal>
        <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
          {principles.map((item, i) => (
            <Reveal key={item.folio} delay={0.06 * i}>
              <p className="font-mono nums text-[13px] text-cyan-deep">
                {item.folio}
              </p>
              <h3 className="font-display mt-3 text-[1.55rem] leading-tight tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Canales() {
  return (
    <section className="border-y border-line py-20 lg:py-28">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mark">Canales</p>
            <h2 className="font-display mt-4 text-[clamp(2.1rem,4.4vw,3.4rem)] font-medium leading-[0.96] tracking-tight">
              Cinco estaciones.
            </h2>
          </div>
          <Link
            href="/canales"
            className="text-[0.92rem] font-semibold link-line"
          >
            Ver el derrotero
          </Link>
        </div>
        <ul className="mt-12">
          {channels.map((item, i) => (
            <li key={item.slug}>
              <Reveal delay={0.04 * i}>
                <Link
                  href={`/canales/${item.slug}`}
                  className="group grid items-baseline gap-2 border-t border-line py-5 sm:grid-cols-12 sm:gap-6"
                >
                  <span className="font-mono nums text-[13px] text-cyan-deep sm:col-span-1">
                    {item.station}
                  </span>
                  <span className="font-display text-[1.7rem] leading-none tracking-tight group-hover:text-blue sm:col-span-3">
                    {item.title}
                  </span>
                  <span className="text-[15px] text-muted sm:col-span-5">
                    {item.short}
                  </span>
                  <span className="font-mono nums text-[13px] text-ink sm:col-span-3 sm:text-right">
                    {item.price}
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Cuentas() {
  const featured = accounts.slice(0, 3);

  return (
    <section className="py-20 lg:py-28">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mark">Cuentas</p>
            <h2 className="font-display mt-4 max-w-[14ch] text-[clamp(2.1rem,4.4vw,3.4rem)] font-medium leading-[0.96] tracking-tight">
              Lo que se sostuvo.
            </h2>
          </div>
          <Link
            href="/cuentas"
            className="text-[0.92rem] font-semibold link-line"
          >
            Bitácora completa
          </Link>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {featured.map((item, i) => (
            <Reveal key={item.slug} delay={0.06 * i}>
              <Link href={`/cuentas/${item.slug}`} className="group block">
                <Frame
                  src={item.image}
                  alt=""
                  ratio="aspect-[4/3]"
                  sizes="(min-width: 1024px) 30vw, 100vw"
                />
                <p className="font-mono mt-4 text-[12px] tracking-[0.08em] text-muted uppercase">
                  {item.tx} · {item.place}
                </p>
                <h3 className="font-display mt-2 text-[1.55rem] leading-tight tracking-tight group-hover:text-blue">
                  {item.title}
                </h3>
                <p className="mt-3 font-mono nums text-[1.35rem] text-cyan-deep">
                  {item.metric}
                  <span className="ml-2 text-[12px] tracking-normal text-muted">
                    {item.metricLabel}
                  </span>
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Honorarios() {
  return (
    <section className="border-y border-line py-20 lg:py-28">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="mark">Honorarios</p>
          <h2 className="font-display mt-4 max-w-[10ch] text-[clamp(2.1rem,4.4vw,3.4rem)] font-medium leading-[0.96] tracking-tight">
            Desde, no un catálogo.
          </h2>
          <p className="mt-6 max-w-[36ch] text-[16px] leading-relaxed text-muted">
            Valores referenciales, en UF + IVA salvo la lectura. Se confirman en
            la minuta. La pauta de media la paga usted, directo a la plataforma.
          </p>
        </Reveal>
        <div className="lg:col-span-8">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-line">
                <th className="mark pb-3 font-medium">Servicio</th>
                <th className="mark pb-3 font-medium">Desde</th>
                <th className="mark hidden pb-3 font-medium sm:table-cell">
                  Nota
                </th>
              </tr>
            </thead>
            <tbody>
              {fees.map((row) => (
                <tr key={row.servicio} className="border-b border-line align-top">
                  <td className="py-4 pr-4 text-[15px]">{row.servicio}</td>
                  <td className="font-mono nums py-4 pr-4 text-[15px] text-cyan-deep">
                    {row.precio}
                  </td>
                  <td className="hidden py-4 text-[14px] text-muted sm:table-cell">
                    {row.nota}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Preguntas() {
  const [first, ...rest] = questions;

  return (
    <section className="py-20 lg:py-28">
      <div className="shell grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="mark">Antes de escribir</p>
          <h2 className="font-display mt-4 max-w-[12ch] text-[clamp(2.1rem,4.4vw,3.4rem)] font-medium leading-[0.96] tracking-tight">
            {first.q}
          </h2>
          <p className="mt-6 max-w-[42ch] text-[17px] leading-relaxed text-muted">
            {first.a}
          </p>
        </Reveal>
        <div className="lg:col-span-6 lg:col-start-7">
          {rest.map((item, i) => (
            <Reveal key={item.q} delay={0.04 * i}>
              <div className="border-t border-line py-5">
                <h3 className="text-[17px] font-medium">{item.q}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {item.a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Escribir() {
  return (
    <section className="border-t border-line py-20 lg:py-28">
      <div className="shell grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="mark">Lectura</p>
          <h2 className="font-display mt-4 max-w-[12ch] text-[clamp(2.1rem,4.4vw,3.4rem)] font-medium leading-[0.96] tracking-tight">
            Pida que leamos la cuenta.
          </h2>
          <p className="mt-6 max-w-[38ch] text-[16px] leading-relaxed text-muted">
            {site.lecturaPrice}, cuarenta y cinco minutos. Minuta en 48 horas.
            Si el mes está lleno —somos {site.people} para {site.accounts}{" "}
            cuentas— se lo decimos.
          </p>
          <address className="mt-8 not-italic text-[16px] leading-relaxed">
            {site.address.line}
            <br />
            {site.address.city}
            <br />
            {site.metro}
          </address>
          <p className="mt-5 text-[16px]">
            <a href={site.phoneHref} className="link-line">
              {site.phone}
            </a>
            <br />
            <a href={`mailto:${site.email}`} className="link-line">
              {site.email}
            </a>
          </p>
          <p className="mt-8">
            <span className="mark">Mesa</span>
            <span className="mt-3 flex flex-col text-[15px] text-muted">
              {mesa.map((person) => (
                <Link
                  key={person.slug}
                  href={`/mesa/${person.slug}`}
                  className="link-line w-fit py-0.5 text-ink/80"
                >
                  {person.name} · {person.role}
                </Link>
              ))}
            </span>
          </p>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-6 lg:col-start-7">
          <LecturaForm />
        </Reveal>
      </div>
    </section>
  );
}
