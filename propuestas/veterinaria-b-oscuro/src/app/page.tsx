import Image from "next/image";
import Link from "next/link";
import { BookingForm } from "@/components/booking-form";
import { NightClock } from "@/components/night-clock";
import { Reveal } from "@/components/reveal";
import { Triage } from "@/components/triage";
import {
  faqs,
  nightDay,
  principles,
  services,
  site,
  stats,
  team,
  testimonials,
  trust,
  ward,
} from "@/lib/site";

export default function Home() {
  const featured = services.filter((s) => s.featured);

  return (
    <>
      <Hero />
      <Trust />
      <Idea />
      <Turnos />
      <Servicios featured={featured} />
      <Ward />
      <Equipo />
      <Triaje />
      <Voces />
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
        alt="Fachada de Farol de noche en Irarrázaval: un farol cálido sobre la puerta y la calle mojada"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[60%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-void/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/50" />

      <div className="shell relative flex min-h-[100svh] flex-col justify-end pb-0 pt-28">
        <div className="max-w-3xl pb-10 sm:pb-14">
          <p className="kicker">Ñuñoa · 24 horas</p>
          <h1 className="mt-5 font-display text-[clamp(2.7rem,7.4vw,6.4rem)] leading-[0.9] tracking-[-0.04em] text-balance">
            La luz que queda{" "}
            <em className="italic text-lantern">prendida.</em>
          </h1>
          <p className="mt-6 max-w-[38ch] text-[1.08rem] leading-relaxed text-paper-dim">
            Hospital veterinario en Irarrázaval. Consulta de día. Guardia de
            noche. La puerta no se cierra.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/hora" className="btn btn-primary">
              Pedir hora
            </Link>
            <Link href="/urgencias" className="btn btn-urgent">
              Es urgente
            </Link>
          </div>
          <NightClock className="mt-8 text-[0.82rem] tracking-wide text-paper-dim" />
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
              <dd className="mt-2 font-display text-[1.85rem] leading-none tabular tracking-tight">
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
        {trust.map((item, i) => (
          <span key={item} className="inline-flex items-center">
            {i > 0 ? <span className="px-3 text-muted">·</span> : null}
            {item}
          </span>
        ))}
      </p>
    </section>
  );
}

function Idea() {
  return (
    <section className="py-20 sm:py-28">
      <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="kicker">La idea</p>
          <h2 className="mt-4 max-w-[14ch] font-display text-[clamp(2rem,4.2vw,3.5rem)] leading-[0.95]">
            Un hospital chico que no se va a dormir.
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-paper-dim">
            Farol nació de una molestia: clínicas que apuran y hospitales que
            asustan. Acá hay quirófano, laboratorio e internación — y también
            un farol en la puerta para que, a las tres, sepas dónde ir.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-paper-dim">
            No somos un pet shop con estetoscopio. Somos cinco médicos que se
            hablan, un criterio, y una guardia presencial las veinticuatro
            horas.
          </p>
          <Link href="/hospital" className="mt-6 inline-block link-line text-paper">
            El hospital →
          </Link>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={0.08}>
          <div className="img-zoom relative aspect-[4/3]">
            <Image
              src="/images/recepcion.jpg"
              alt="Recepción de Farol de noche, banca de madera y lámpara encendida"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-sm text-muted">
            Irarrázaval 2940. El farol se ve desde la vereda.
          </p>
        </Reveal>
      </div>

      <div className="shell mt-20 grid gap-10 border-t border-line pt-14 sm:grid-cols-3">
        {principles.map((p) => (
          <Reveal key={p.k}>
            <p className="kicker tabular">{p.k}</p>
            <h3 className="mt-4 font-display text-2xl leading-tight">{p.title}</h3>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-paper-dim">
              {p.text}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Turnos() {
  return (
    <section className="border-y border-line bg-ink py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">Dos ritmos, una casa</p>
          <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(2rem,4vw,3.3rem)] leading-[0.95]">
            De día se agenda. De noche se queda.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-px bg-line sm:grid-cols-2">
          {nightDay.map((block) => (
            <div key={block.k} className="bg-ink p-8 sm:p-10">
              <p className="kicker">{block.k}</p>
              <p className="mt-3 font-mono text-[0.8rem] tabular tracking-wide text-lantern">
                {block.hours}
              </p>
              <h3 className="mt-5 font-display text-3xl leading-tight">
                {block.title}
              </h3>
              <p className="mt-4 max-w-[36ch] text-paper-dim">{block.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Servicios({ featured }: { featured: typeof services }) {
  return (
    <section className="py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">Lo que hacemos</p>
          <h2 className="mt-4 max-w-[14ch] font-display text-[clamp(2rem,4vw,3.3rem)] leading-[0.95]">
            Medicina de hospital, no de pasillo.
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-px bg-line sm:grid-cols-2">
          {featured.map((s) => (
            <li key={s.slug} className="bg-void">
              <Link
                href={`/servicios/${s.slug}`}
                className="group grid gap-0 sm:grid-cols-5"
              >
                <div className="img-zoom relative aspect-[4/3] sm:col-span-2 sm:aspect-auto">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(min-width: 640px) 20vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between p-6 sm:col-span-3 sm:p-8">
                  <div>
                    <p className="kicker tabular">{s.folio}</p>
                    <h3 className="mt-3 font-display text-[1.7rem] leading-tight group-hover:text-lantern">
                      {s.name}
                    </h3>
                    <p className="mt-3 max-w-[36ch] text-paper-dim">{s.short}</p>
                  </div>
                  <p className="mt-6 font-mono text-[0.72rem] tracking-[0.14em] text-muted uppercase">
                    {s.price} · ver →
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/servicios" className="mt-8 inline-block link-line">
          Todos los servicios
        </Link>
      </div>
    </section>
  );
}

function Ward() {
  return (
    <section className="relative overflow-hidden border-y border-line">
      <Image
        src="/images/ronda.jpg"
        alt="Ronda de noche en el pasillo de Farol"
        fill
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-void via-void/88 to-void/70" />
      <div className="shell relative py-20 sm:py-28">
        <Reveal>
          <p className="kicker">Esta noche</p>
          <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(2rem,4vw,3.3rem)] leading-[0.95]">
            La ronda de las 03:00 no es un lema.
          </h2>
          <p className="mt-5 max-w-[42ch] text-paper-dim">
            Tres internados. Un médico en el pasillo. Los nombres son reales
            en la pizarra; acá van cambiados. El parte llega a la familia dos
            veces al día.
          </p>
        </Reveal>
        <ol className="mt-12 grid gap-8 lg:grid-cols-3">
          {ward.map((w, i) => (
            <li key={w.name} className="border-t border-paper/20 pt-6">
              <p className="kicker tabular">0{i + 1}</p>
              <p className="mt-3 font-display text-3xl leading-none">{w.name}</p>
              <p className="mt-2 text-sm text-lantern">{w.detail}</p>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-paper-dim">
                {w.note}
              </p>
            </li>
          ))}
        </ol>
        <Link href="/internacion" className="mt-10 inline-block link-line">
          Cómo internamos →
        </Link>
      </div>
    </section>
  );
}

function Equipo() {
  return (
    <section className="py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">La mesa</p>
          <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(2rem,4vw,3.3rem)] leading-[0.95]">
            Cinco médicos. Un criterio. Turnos que se hablan.
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((v) => (
            <li key={v.slug}>
              <Link href={`/equipo/${v.slug}`} className="group block">
                <div className="img-zoom relative aspect-[3/4]">
                  <Image
                    src={v.image}
                    alt={`Retrato de ${v.name}`}
                    fill
                    sizes="(min-width: 1024px) 18vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 font-display text-xl leading-tight group-hover:text-lantern">
                  {v.name}
                </p>
                <p className="mt-1 text-sm text-muted">{v.role}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Triaje() {
  return (
    <section className="border-y border-line bg-ink py-20 sm:py-28">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="kicker">Triaje</p>
          <h2 className="mt-4 max-w-[14ch] font-display text-[clamp(2rem,4vw,3.3rem)] leading-[0.95]">
            ¿Puede esperar al día, o es ahora?
          </h2>
          <p className="mt-5 max-w-[38ch] text-paper-dim">
            Esto no reemplaza una llamada. Sirve para no dudar en la cocina a
            las 2:40. Si tu animal no calza, llama: {site.phone}.
          </p>
        </Reveal>
        <div className="lg:col-span-7">
          <Triage />
        </div>
      </div>
    </section>
  );
}

function Voces() {
  return (
    <section className="py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">De quienes vinieron de noche</p>
          <h2 className="mt-4 max-w-[14ch] font-display text-[clamp(2rem,4vw,3.2rem)] leading-[0.95]">
            No es marketing. Es gente despierta.
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-px bg-line sm:grid-cols-2">
          {testimonials.map((t) => (
            <li key={t.name} className="bg-void p-8 sm:p-10">
              <p className="font-display text-[1.35rem] leading-snug text-paper">
                “{t.quote}”
              </p>
              <p className="mt-6 text-sm text-muted">
                {t.name}
                <span className="text-lantern"> · {t.detail}</span>
              </p>
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
          <h2 className="mt-4 font-display text-[clamp(2rem,3.5vw,3rem)] leading-[0.95]">
            Lo que preguntan a las tres de la mañana.
          </h2>
        </Reveal>
        <div className="lg:col-span-8">
          <dl>
            {faqs.map((f) => (
              <div key={f.q} className="border-t border-line py-6">
                <dt className="font-display text-xl leading-snug">{f.q}</dt>
                <dd className="mt-2 max-w-[52ch] text-paper-dim">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Cierre() {
  return (
    <section className="border-t border-line bg-ink py-20 sm:py-28">
      <div className="shell grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="kicker">La hora</p>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.4rem)] leading-[0.95]">
            Si puede esperar al día, pídela. Si no, llama.
          </h2>
          <p className="mt-5 max-w-[38ch] text-paper-dim">
            {site.address.line}, {site.address.city}. {site.metro}. El farol de
            la puerta se ve desde la vereda.
          </p>
          <p className="mt-6 tabular text-lg">{site.phone}</p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
