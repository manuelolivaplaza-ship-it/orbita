import Image from "next/image";
import Link from "next/link";
import { BriefForm } from "@/components/brief-form";
import { Crop } from "@/components/crop";
import { NorthMeter } from "@/components/north-meter";
import { Reveal } from "@/components/reveal";
import {
  clients,
  fees,
  hours,
  practices,
  principles,
  stats,
  team,
  voices,
  works,
} from "@/lib/data";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pulso />
      <Obra />
      <Manifiesto />
      <Practica />
      <Horas />
      <Voces />
      <Mesa />
      <Honorarios />
      <Escribir />
    </>
  );
}

function Hero() {
  return (
    <section id="norte" className="relative overflow-hidden">
      <div className="relative h-[42vh] lg:hidden">
        <Image
          src="/images/ventana.jpg"
          alt="Muro de ventanas al norte en el estudio de Providencia: yeso blanco, acero y cielo cubierto"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="shell grid lg:grid-cols-12 lg:pt-20">
        <div className="relative hidden min-h-[78vh] lg:col-span-3 lg:block">
          <Image
            src="/images/pozo.jpg"
            alt=""
            fill
            priority
            sizes="24vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-end py-10 lg:col-span-6 lg:justify-center lg:px-12 lg:py-24">
          <p className="kicker">Agencia · Providencia · Santiago</p>
          <h1 className="font-display mt-6 text-[clamp(3.4rem,9vw,8.2rem)] leading-[0.86] tracking-tight">
            Claridad,
            <br />
            <em className="italic text-norte">no brillo.</em>
          </h1>
          <div className="horizon mt-8 max-w-28" />
          <p className="mt-7 max-w-[38ch] text-[17px] leading-relaxed text-muted">
            Marketing digital para marcas que ya facturan. Estrategia, pauta y
            sitios con luz de norte: se ve lo que hay, a las once de la mañana,
            delante de un directorio.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contacto"
              className="inline-flex h-12 items-center bg-norte px-6 text-[0.82rem] font-semibold tracking-[0.12em] text-nieve uppercase transition-colors hover:bg-norte-deep"
            >
              Pedir una lectura
            </Link>
            <a
              href={site.whatsapp}
              className="inline-flex h-12 items-center border border-tinta px-6 text-[0.82rem] font-semibold tracking-[0.12em] uppercase transition-colors hover:border-norte hover:text-norte"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="hidden lg:col-span-3 lg:flex lg:flex-col lg:justify-end lg:py-24">
          <NorthMeter />
          <p className="mt-10 text-[15px] leading-relaxed text-muted">
            {site.address.line}
            <br />
            {site.address.city}
            <br />
            {site.metro}
          </p>
          <p className="mt-4 text-[13px] tracking-wide text-cielo">
            RUT {site.rut}
          </p>
        </div>
      </div>

      <div className="relative mt-2 hidden aspect-[16/9] lg:block">
        <Image
          src="/images/ventana.jpg"
          alt="Muro de ventanas al norte: tres paños de acero, yeso blanco y árboles de Providencia"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <p className="absolute bottom-6 left-[max(1.25rem,calc((100%-1280px)/2+1.25rem))] text-[12px] tracking-[0.16em] text-nieve uppercase">
          Santa Beatriz 184 · Luz de norte
        </p>
      </div>
    </section>
  );
}

function Pulso() {
  return (
    <div id="pulso" className="border-b border-linea bg-nieve-2">
      <div className="shell grid grid-cols-2 gap-y-8 py-10 sm:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label}>
            <p className="font-display nums text-3xl tracking-tight lg:text-[2.6rem]">
              {item.value}
            </p>
            <p className="mt-1 text-[12px] tracking-[0.14em] text-muted uppercase">
              {item.label}
            </p>
          </div>
        ))}
      </div>
      <div className="border-t border-linea">
        <div className="shell flex flex-wrap gap-x-6 gap-y-2 py-4 text-[13px] tracking-[0.08em] text-muted uppercase">
          {clients.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Obra() {
  const featured = works.filter((item) => item.featured);
  return (
    <section id="obra" className="py-20 lg:py-28">
      <div className="shell">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="kicker">Obra</p>
              <h2 className="font-display mt-3 max-w-[12ch] text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.94] tracking-tight">
                Casos que se pueden contar en números.
              </h2>
            </div>
            <Link
              href="/obra"
              className="hidden text-[0.78rem] font-semibold tracking-[0.16em] text-norte uppercase link-line lg:inline"
            >
              Ver toda la obra
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          {featured.map((item, index) => (
            <Reveal
              key={item.slug}
              delay={index * 0.08}
              className={index === 0 ? "lg:col-span-12" : "lg:col-span-6"}
            >
              <Link href={`/obra/${item.slug}`} className="group block">
                <Crop
                  src={item.cover}
                  alt=""
                  className={index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}
                  sizes={index === 0 ? "100vw" : "50vw"}
                />
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <p className="kicker">{item.client}</p>
                  <p className="text-[12px] tracking-[0.12em] text-muted uppercase">
                    {item.year}
                  </p>
                </div>
                <h3 className="font-display mt-2 max-w-[22ch] text-[1.85rem] leading-[1.05] tracking-tight group-hover:text-norte lg:text-[2.15rem]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[48ch] text-[15px] leading-relaxed text-muted">
                  {item.excerpt}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Link
          href="/obra"
          className="mt-10 inline-flex text-[0.78rem] font-semibold tracking-[0.16em] text-norte uppercase link-line lg:hidden"
        >
          Ver toda la obra
        </Link>
      </div>
    </section>
  );
}

function Manifiesto() {
  return (
    <section id="manifiesto" className="border-y border-linea bg-nieve-2 py-20 lg:py-28">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="kicker">Manifiesto</p>
          <h2 className="font-display mt-3 max-w-[10ch] text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[0.95] tracking-tight">
            El overcast de Santiago es un lujo.
          </h2>
          <p className="mt-6 max-w-[36ch] text-[16px] leading-relaxed text-muted">
            Los fotógrafos esperan la luz de norte porque no maquilla. Nosotros
            también. Si la oferta no se sostiene a las once, no se sostiene.
          </p>
        </Reveal>
        <div className="grid gap-px bg-linea lg:col-span-8">
          {principles.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06} className="bg-nieve-2">
              <article className="grid gap-4 bg-nieve-2 py-8 lg:grid-cols-12 lg:gap-8">
                <p className="font-display nums text-norte lg:col-span-2">
                  0{index + 1}
                </p>
                <div className="lg:col-span-10">
                  <h3 className="font-display text-[1.7rem] leading-tight tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[52ch] text-[16px] leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Practica() {
  return (
    <section id="practica" className="py-20 lg:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">Práctica</p>
          <h2 className="font-display mt-3 max-w-[14ch] text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.94] tracking-tight">
            Seis oficios. Un mismo criterio.
          </h2>
        </Reveal>
        <ul className="mt-12 divide-y divide-linea border-y border-linea">
          {practices.map((item, index) => (
            <li key={item.slug}>
              <Reveal delay={index * 0.04}>
                <Link
                  href={`/practica/${item.slug}`}
                  className="group grid items-baseline gap-2 py-6 sm:grid-cols-12 sm:gap-6"
                >
                  <span className="font-display nums text-[13px] text-norte sm:col-span-2">
                    {item.kicker}
                  </span>
                  <span className="font-display text-[1.7rem] leading-none tracking-tight group-hover:text-norte sm:col-span-4 lg:text-[2rem]">
                    {item.title}
                  </span>
                  <span className="text-[15px] leading-relaxed text-muted sm:col-span-5">
                    {item.short}
                  </span>
                  <span className="hidden text-right text-[12px] tracking-[0.16em] text-norte uppercase sm:col-span-1 sm:block">
                    →
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

function Horas() {
  return (
    <section id="horas" className="border-y border-linea bg-nieve-2 py-20 lg:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">El día</p>
          <h2 className="font-display mt-3 max-w-[14ch] text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.94] tracking-tight">
            Un encargo, leído en horas de luz.
          </h2>
        </Reveal>
        <ol className="mt-14 grid gap-px bg-linea sm:grid-cols-2 lg:grid-cols-4">
          {hours.map((item, index) => (
            <li key={item.n} className="bg-nieve-2">
              <Reveal delay={index * 0.07} className="flex h-full flex-col p-7">
                <p className="font-display nums text-[2rem] text-norte">{item.n}</p>
                <h3 className="font-display mt-6 text-[1.8rem] leading-none tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-[12px] tracking-[0.14em] text-muted uppercase">
                  {item.days}
                </p>
                <p className="mt-5 text-[15px] leading-relaxed text-muted">{item.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Voces() {
  return (
    <section id="voces" className="py-20 lg:py-28">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="kicker">Voces</p>
          <h2 className="font-display mt-3 max-w-[10ch] text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[0.95] tracking-tight">
            Lo que se puede repetir.
          </h2>
        </Reveal>
        <div className="grid gap-10 lg:col-span-8">
          {voices.map((item, index) => (
            <Reveal key={item.author} delay={index * 0.08}>
              <blockquote className="border-t border-linea pt-8">
                <p className="font-display text-[1.65rem] leading-[1.2] tracking-tight lg:text-[1.9rem]">
                  “{item.text}”
                </p>
                <footer className="mt-5 text-[14px] text-muted">
                  <span className="text-tinta">{item.author}</span>
                  <span aria-hidden> · </span>
                  {item.role}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mesa() {
  return (
    <section id="mesa" className="border-y border-linea bg-nieve-2 py-20 lg:py-28">
      <div className="shell">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="kicker">Mesa</p>
              <h2 className="font-display mt-3 max-w-[12ch] text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.94] tracking-tight">
                Cinco personas. Ningún piso fantasma.
              </h2>
            </div>
            <Link
              href="/mesa"
              className="hidden text-[0.78rem] font-semibold tracking-[0.16em] text-norte uppercase link-line lg:inline"
            >
              La mesa completa
            </Link>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {team.map((person, index) => (
            <Reveal key={person.slug} delay={index * 0.05}>
              <Link href={`/mesa/${person.slug}`} className="group block">
                <Crop
                  src={person.image}
                  alt={person.name}
                  className="aspect-[3/4]"
                  sizes="20vw"
                />
                <p className="mt-3 text-[15px] font-semibold tracking-tight group-hover:text-norte">
                  {person.name}
                </p>
                <p className="mt-0.5 text-[13px] text-muted">{person.role}</p>
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
    <section id="honorarios" className="py-20 lg:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">Honorarios</p>
          <h2 className="font-display mt-3 max-w-[14ch] text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.94] tracking-tight">
            Cifras antes de firmar. Siempre.
          </h2>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-muted">
            En UF + IVA. El tramo se escribe en la lectura. Si el encargo no es
            nuestro, te lo decimos en esa llamada.
          </p>
        </Reveal>
        <div className="mt-12 divide-y divide-linea border-y border-linea">
          {fees.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.06}>
              <article className="grid gap-6 py-10 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <h3 className="font-display text-[2rem] leading-none tracking-tight">
                    {item.name}
                  </h3>
                  <p className="font-display nums mt-3 text-[1.7rem] text-norte">
                    {item.price}
                  </p>
                  <p className="mt-2 text-[13px] text-muted">{item.note}</p>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
                  {item.items.map((line) => (
                    <li key={line} className="flex gap-3 text-[15px]">
                      <span className="mt-2 h-px w-4 shrink-0 bg-norte" aria-hidden />
                      {line}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Escribir() {
  return (
    <section id="escribir" className="border-t border-linea bg-nieve-2 py-20 lg:py-28">
      <div className="shell grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="kicker">Escribir</p>
          <h2 className="font-display mt-3 max-w-[12ch] text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.94] tracking-tight">
            Pide una lectura.
          </h2>
          <p className="mt-5 max-w-[38ch] text-[16px] leading-relaxed text-muted">
            Un documento. Una llamada. 24 horas hábiles. Si no calzamos, te lo
            decimos — y a quién conviene escribir.
          </p>
          <div className="mt-10">
            <NorthMeter />
          </div>
          <p className="mt-8 text-[15px] leading-relaxed text-muted">
            {site.address.line}
            <br />
            {site.address.city}
            <br />
            <a href={site.phoneHref} className="link-line text-tinta">
              {site.phone}
            </a>
            <br />
            <a href={`mailto:${site.email}`} className="link-line text-tinta">
              {site.email}
            </a>
          </p>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <BriefForm />
        </Reveal>
      </div>
    </section>
  );
}
