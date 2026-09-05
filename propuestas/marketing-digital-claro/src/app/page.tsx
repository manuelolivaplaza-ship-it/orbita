import Image from "next/image";
import Link from "next/link";
import { BriefForm } from "@/components/brief-form";
import { Marquee } from "@/components/marquee";
import { Reveal } from "@/components/reveal";
import { SunArc } from "@/components/sun-arc";
import {
  clients,
  fees,
  marquee,
  principles,
  services,
  stats,
  steps,
  team,
  voices,
  works,
} from "@/lib/data";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="border-y border-ink/10 bg-sol py-3.5 text-ink">
        <Marquee items={marquee} />
      </div>
      <Trust />
      <Trabajo />
      <Manifiesto />
      <Oficio />
      <Metodo />
      <Voces />
      <Mesa />
      <Honorarios />
      <Cierre />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="relative h-[46vh] lg:hidden">
        <Image
          src="/images/estudio.jpg"
          alt="El estudio de FARO en Lastarria: mesa de roble y un haz de sol sobre el muro"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="sun-beam pointer-events-none absolute inset-0"
        />
      </div>

      <div className="shell relative grid lg:min-h-[100svh] lg:grid-cols-12">
        <div className="flex flex-col justify-end py-10 lg:col-span-5 lg:justify-center lg:py-0 lg:pr-10">
          <p className="kicker">Agencia · Lastarria · Santiago</p>
          <h1 className="font-display mt-5 text-[clamp(3.2rem,8.6vw,7.6rem)] font-medium leading-[0.86] tracking-tight">
            Señales
            <br />
            <em className="italic text-cobre">claras.</em>
          </h1>
          <p className="mt-7 max-w-[36ch] text-[17px] leading-relaxed text-muted">
            Marketing digital para marcas que ya facturan. Estrategia, pauta y
            contenido que se pueden explicar en un ascensor — y defender frente
            a un directorio.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contacto"
              className="inline-flex h-12 items-center bg-sol px-6 text-[0.92rem] font-semibold text-ink transition-colors hover:bg-sol-deep"
            >
              Pedir un brief
            </Link>
            <a
              href={site.whatsapp}
              className="inline-flex h-12 items-center border border-ink px-6 text-[0.92rem] font-semibold transition-colors hover:border-cobre hover:text-cobre"
            >
              WhatsApp
            </a>
          </div>
          <p className="mt-5 max-w-[40ch] text-[13px] leading-relaxed text-muted lg:hidden">
            {site.address.line} · {site.address.city}
          </p>
        </div>

        <div className="relative hidden min-h-[100svh] lg:col-span-4 lg:block">
          <Image
            src="/images/estudio.jpg"
            alt=""
            fill
            priority
            sizes="34vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="sun-beam pointer-events-none absolute inset-0"
          />
        </div>

        <div className="hidden lg:col-span-3 lg:flex lg:flex-col lg:justify-end lg:pb-16 lg:pl-8">
          <SunArc />
          <p className="mt-8 text-[15px] leading-relaxed text-muted">
            {site.address.line}
            <br />
            {site.address.city}
            <br />
            {site.metro}
          </p>
          <p className="mt-4 text-[13px] tracking-wide text-mar">
            RUT {site.rut}
          </p>
          <p className="mt-1 text-[13px] text-muted">{site.hoursShort}</p>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <div className="border-b border-line bg-luz-2">
      <div className="shell grid grid-cols-2 gap-y-8 py-9 sm:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label}>
            <p className="font-display nums text-3xl font-medium tracking-tight lg:text-4xl">
              {item.value}
            </p>
            <p className="mt-1 text-[12px] tracking-[0.14em] text-muted uppercase">
              {item.label}
            </p>
          </div>
        ))}
      </div>
      <div className="border-t border-line py-3 text-muted">
        <Marquee items={clients} />
      </div>
    </div>
  );
}

function Trabajo() {
  const featured = works.filter((item) => item.featured);
  return (
    <section className="py-20 lg:py-28">
      <div className="shell">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="kicker">Trabajo</p>
              <h2 className="font-display mt-3 max-w-[14ch] text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[0.95] tracking-tight">
                Casos que se pueden contar con números.
              </h2>
            </div>
            <Link
              href="/trabajo"
              className="link-line text-[0.92rem] font-semibold"
            >
              Ver todo el trabajo
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {featured.map((item, index) => (
            <Reveal
              key={item.slug}
              delay={index * 0.08}
              className={index === 0 ? "lg:col-span-12" : "lg:col-span-6"}
            >
              <Link href={`/trabajo/${item.slug}`} className="group block">
                <div
                  className={`img-zoom relative ${
                    index === 0 ? "aspect-[16/9] lg:aspect-[2.2/1]" : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={item.cover}
                    alt=""
                    fill
                    sizes={index === 0 ? "100vw" : "50vw"}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-luz lg:p-8">
                    <p className="text-[12px] tracking-[0.16em] uppercase opacity-80">
                      {item.client} · {item.year}
                    </p>
                    <h3 className="font-display mt-2 text-[clamp(1.5rem,3vw,2.4rem)] font-medium leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-muted">
                  {item.excerpt}
                </p>
                <p className="mt-3 text-[13px] font-semibold tracking-wide text-cobre">
                  {item.stats[0].value} {item.stats[0].label}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Manifiesto() {
  return (
    <section className="border-y border-line bg-luz-2 py-20 lg:py-28">
      <div className="shell grid items-start gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="kicker">Manifiesto</p>
          <h2 className="font-display mt-3 text-[clamp(2.1rem,4.6vw,3.6rem)] font-medium leading-[0.95] tracking-tight">
            El ruido es barato.{" "}
            <em className="italic text-cobre">La claridad se cobra.</em>
          </h2>
          <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-muted">
            El marketing chileno se llenó de plantillas, de reels con música de
            stock y de reportes que nadie lee. Nosotros hacemos lo contrario:
            una idea, un sistema, un número. Y lo repetimos hasta que la caja se
            mueve.
          </p>
          <div className="relative mt-10 aspect-[4/5] max-w-md">
            <Image
              src="/images/haz.jpg"
              alt="Haz de sol sobre un muro del estudio"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <div className="grid gap-8 lg:col-span-6 lg:col-start-7">
          {principles.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <p className="nums text-[12px] tracking-[0.18em] text-cobre">
                0{index + 1}
              </p>
              <h3 className="font-display mt-2 text-2xl font-medium tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-[16px] leading-relaxed text-muted">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Oficio() {
  return (
    <section className="py-20 lg:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">Oficio</p>
          <h2 className="font-display mt-3 max-w-[16ch] text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[0.95] tracking-tight">
            Seis oficios. Un solo criterio.
          </h2>
        </Reveal>
        <div className="mt-12 divide-y divide-line border-y border-line">
          {services.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.04}>
              <Link
                href={`/oficio/${item.slug}`}
                className="group grid gap-3 py-7 transition-colors hover:bg-luz-2/60 sm:grid-cols-12 sm:items-baseline sm:gap-6"
              >
                <span className="nums text-[13px] tracking-[0.16em] text-muted sm:col-span-1">
                  {item.kicker}
                </span>
                <h3 className="font-display text-2xl font-medium tracking-tight sm:col-span-4 lg:text-3xl">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted sm:col-span-6">
                  {item.short}
                </p>
                <span className="text-[13px] font-semibold tracking-wide text-cobre sm:col-span-1 sm:text-right">
                  Ver
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metodo() {
  return (
    <section className="border-y border-line bg-ink py-20 text-luz lg:py-28">
      <div className="shell">
        <Reveal>
          <p className="text-[0.6875rem] font-semibold tracking-[0.22em] text-sol uppercase">
            Método
          </p>
          <h2 className="font-display mt-3 max-w-[16ch] text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[0.95] tracking-tight">
            Un faro no improvisa el haz.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <Reveal key={item.n} delay={index * 0.08}>
              <p className="font-display nums text-sol text-4xl font-medium">
                {item.n}
              </p>
              <h3 className="font-display mt-4 text-2xl font-medium">{item.title}</h3>
              <p className="mt-1 text-[12px] tracking-[0.16em] text-luz/50 uppercase">
                {item.days}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-luz/70">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Voces() {
  return (
    <section className="py-20 lg:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">Voces</p>
          <h2 className="font-display mt-3 max-w-[14ch] text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[0.95] tracking-tight">
            Lo que se puede repetir en una mesa.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {voices.map((item, index) => (
            <Reveal
              key={item.author}
              delay={index * 0.08}
              className="border border-line bg-luz-2 p-8"
            >
              <p className="font-display text-[1.45rem] leading-snug font-medium tracking-tight">
                “{item.text}”
              </p>
              <p className="mt-8 text-[14px] font-semibold">{item.author}</p>
              <p className="mt-1 text-[13px] text-muted">{item.role}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mesa() {
  return (
    <section className="border-y border-line py-20 lg:py-28">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="kicker">La mesa</p>
          <h2 className="font-display mt-3 text-[clamp(2.2rem,4.4vw,3.4rem)] font-medium leading-[0.95] tracking-tight">
            Cinco personas. Ningún piso de “creatives”.
          </h2>
          <p className="mt-5 max-w-[40ch] text-[16px] leading-relaxed text-muted">
            Si tomamos tu cuenta, la toca alguien que está en esta foto. Sin
            junior fantasma, sin account que no puede decidir.
          </p>
          <Link
            href="/estudio"
            className="mt-8 inline-flex h-12 items-center border border-ink px-6 text-[0.9rem] font-semibold hover:border-cobre hover:text-cobre"
          >
            Conocer el estudio
          </Link>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-5">
          {team.map((person, index) => (
            <Reveal key={person.slug} delay={index * 0.05}>
              <div className="img-zoom relative aspect-[3/4]">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-[14px] font-semibold leading-tight">
                {person.name}
              </p>
              <p className="mt-1 text-[12px] text-muted">{person.role}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Honorarios() {
  return (
    <section className="py-20 lg:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">Honorarios</p>
          <h2 className="font-display mt-3 max-w-[16ch] text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[0.95] tracking-tight">
            Por escrito. En UF. Antes de firmar.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {fees.map((item, index) => (
            <Reveal
              key={item.name}
              delay={index * 0.08}
              className={`border border-line p-8 ${
                index === 1 ? "bg-sol" : "bg-luz-2"
              }`}
            >
              <p className="text-[13px] font-semibold tracking-[0.16em] uppercase">
                {item.name}
              </p>
              <p className="font-display nums mt-4 text-4xl font-medium tracking-tight">
                {item.price}
              </p>
              <p className="mt-2 text-[14px] text-ink/70">{item.note}</p>
              <ul className="mt-8 space-y-2.5 text-[15px]">
                {item.items.map((line) => (
                  <li key={line} className="border-t border-ink/10 pt-2.5">
                    {line}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cierre() {
  return (
    <section className="pb-0">
      <div className="relative min-h-[70vh] overflow-hidden">
        <Image
          src="/images/faro.jpg"
          alt="Faro en la costa del Pacífico al atardecer"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="shell relative flex min-h-[70vh] items-end py-16">
          <Reveal className="max-w-2xl text-luz">
            <p className="text-[0.6875rem] font-semibold tracking-[0.22em] text-sol uppercase">
              Contacto
            </p>
            <h2 className="font-display mt-4 text-[clamp(2.4rem,6vw,4.6rem)] font-medium leading-[0.92] tracking-tight">
              Si la marca no se ve, el resto es ruido.
            </h2>
            <p className="mt-5 max-w-[48ch] text-[17px] leading-relaxed text-luz/80">
              Cuéntanos qué está fallando. Si podemos ayudar, armamos un camino
              y un honorario. Si no, te lo decimos — y a quién conviene llamar.
            </p>
          </Reveal>
        </div>
      </div>
      <div className="bg-luz-2 py-20 lg:py-24">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">Lastarria</p>
            <h3 className="font-display mt-3 text-3xl font-medium tracking-tight">
              El estudio está a cuatro minutos del metro.
            </h3>
            <p className="mt-4 text-[16px] leading-relaxed text-muted">
              {site.address.line}
              <br />
              {site.address.city}
              <br />
              {site.metro}
            </p>
            <p className="mt-6 text-[16px]">
              <a href={site.phoneHref} className="link-line">
                {site.phone}
              </a>
              <br />
              <a href={`mailto:${site.email}`} className="link-line">
                {site.email}
              </a>
            </p>
            <a
              href={site.whatsapp}
              className="mt-8 inline-flex h-12 items-center border border-ink px-6 text-[0.9rem] font-semibold hover:border-cobre hover:text-cobre"
            >
              Escribir por WhatsApp
            </a>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <BriefForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
