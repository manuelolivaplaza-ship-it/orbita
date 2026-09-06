import Image from "next/image";
import Link from "next/link";
import { Compass } from "@/components/compass";
import { ConsultForm } from "@/components/consult-form";
import { PropertyCard } from "@/components/property-card";
import { Reveal } from "@/components/reveal";
import { barrios, properties, team } from "@/lib/data";
import { faqs, principles, site, stats, steps } from "@/lib/site";

const featured = properties.filter((item) => item.featured);

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Manifiesto />
      <Lista />
      <Criterio />
      <Barrios />
      <Oficio />
      <Mesa />
      <Preguntas />
      <Cierre />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh]">
      <div className="relative h-[58vh] min-h-[320px] lg:absolute lg:inset-0 lg:h-auto">
        <Image
          src="/images/hero.jpg"
          alt="Living con ventanal norte, la cordillera al fondo y un rectángulo de sol sobre el piso de roble"
          fill
          priority
          sizes="100vw"
          className="hero-ken object-cover object-[60%_center]"
        />
      </div>

      <div className="relative lg:flex lg:min-h-[100svh] lg:items-end">
        <div className="bg-gradient-to-t from-luz via-luz to-luz lg:w-full lg:from-luz lg:via-luz/92 lg:to-transparent lg:pt-48">
          <div className="hero-copy shell py-10 lg:pb-12 lg:pt-0">
            <div className="grid items-end gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className="kicker">Corredora · Providencia</p>
                <h1 className="font-display mt-4 text-[clamp(3.2rem,8.4vw,7.4rem)] font-medium leading-[0.88] tracking-tight">
                  La luz es
                  <br />
                  <em className="text-sol italic">el dato.</em>
                </h1>
                <p className="mt-6 max-w-[42ch] text-[17px] leading-relaxed text-muted">
                  Departamentos y casas en Providencia, Ñuñoa y Las Condes.
                  Publicamos solo lo que recibe el norte. Valores en UF. Visitas
                  a la hora en que entra el sol.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link href="/visita" className="btn btn-sol">
                    Agendar visita
                  </Link>
                  <Link href="/lista" className="btn btn-line">
                    Ver la lista
                  </Link>
                </div>
              </div>
              <div className="hidden lg:col-span-4 lg:flex lg:flex-col lg:items-end lg:pb-2">
                <Compass bearing="N" label="33°25′ S · Providencia" />
                <p className="mt-5 max-w-[28ch] text-right text-[14px] leading-relaxed text-muted">
                  {site.address.line}
                  <br />
                  {site.address.city}
                  <br />
                  {site.metro}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <div className="border-y border-line bg-luz-2/70">
      <div className="shell grid grid-cols-2 gap-y-8 py-8 sm:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label}>
            <p className="font-display nums text-3xl font-medium tracking-tight lg:text-4xl">
              {item.value}
            </p>
            <p className="font-mono mt-1 text-[11px] tracking-[0.14em] text-muted uppercase">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Manifiesto() {
  return (
    <section className="py-20 lg:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">A 33° sur</p>
          <h2 className="font-display mt-4 max-w-[18ch] text-[clamp(2.2rem,5vw,4.2rem)] font-medium leading-[0.95] tracking-tight">
            En Santiago el sol de invierno entra solo por el norte.
          </h2>
          <p className="mt-6 max-w-[48ch] text-[17px] leading-relaxed text-muted">
            Un departamento más grande, al sur, es más oscuro en julio. Por eso
            no entra a esta lista. El metro cuadrado no se ilumina solo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Lista() {
  return (
    <section className="pb-20 lg:pb-28">
      <div className="shell">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker">En lista ahora</p>
            <h2 className="font-display mt-3 text-[clamp(2rem,4vw,3.4rem)] font-medium tracking-tight">
              Plantas que amanecen.
            </h2>
          </div>
          <Link
            href="/lista"
            className="font-mono text-[12px] tracking-[0.14em] uppercase link-line"
          >
            Toda la lista
          </Link>
        </Reveal>
        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          {featured.map((item) => (
            <Reveal key={item.slug}>
              <PropertyCard property={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Criterio() {
  return (
    <section className="border-y border-line bg-luz-2/50 py-20 lg:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">Tres reglas</p>
          <h2 className="font-display mt-4 max-w-[14ch] text-[clamp(2rem,4vw,3.4rem)] font-medium leading-[0.95] tracking-tight">
            El criterio cabe en una ficha.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px bg-line md:grid-cols-3">
          {principles.map((item) => (
            <Reveal key={item.n} className="bg-luz px-6 py-8 lg:px-8 lg:py-10">
              <p className="font-mono text-[11px] tracking-[0.18em] text-sol">
                {item.n}
              </p>
              <h3 className="font-display mt-4 text-2xl font-medium tracking-tight">
                {item.title}
              </h3>
              <p className="mt-4 text-[16px] leading-relaxed text-muted">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Link href="/criterio" className="font-mono text-[12px] tracking-[0.14em] uppercase link-line">
            Cómo medimos el norte
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Barrios() {
  return (
    <section className="py-20 lg:py-28">
      <div className="shell">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker">Radio</p>
            <h2 className="font-display mt-3 text-[clamp(2rem,4vw,3.4rem)] font-medium tracking-tight">
              Cinco barrios. Un rumbo.
            </h2>
          </div>
          <Link
            href="/barrios"
            className="font-mono text-[12px] tracking-[0.14em] uppercase link-line"
          >
            Todos los barrios
          </Link>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {barrios.slice(0, 3).map((item) => (
            <Reveal key={item.slug}>
              <Link href={`/barrios/${item.slug}`} className="group block">
                <div className="img-zoom relative aspect-[4/3] bg-luz-2">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 30vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <p className="kicker mt-4">
                  {item.n} · {item.comuna}
                </p>
                <h3 className="font-display mt-1 text-2xl font-medium tracking-tight group-hover:text-sol">
                  {item.name}
                </h3>
                <p className="mt-2 text-[15px] text-muted">{item.kicker}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Oficio() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[48vh]">
          <Image
            src="/images/oficina.jpg"
            alt="Mesa de la oficina con planos y un haz de sol sobre el roble"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center bg-luz-2 px-8 py-16 lg:px-16 lg:py-24">
          <Reveal>
            <p className="kicker">Oficio</p>
            <h2 className="font-display mt-4 max-w-[12ch] text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[0.95] tracking-tight">
              Cuatro pasos. Ninguno es un portal.
            </h2>
            <ol className="mt-10 space-y-6">
              {steps.map((item) => (
                <li key={item.n} className="grid grid-cols-[3rem_1fr] gap-4">
                  <span className="font-mono text-[11px] tracking-[0.16em] text-sol">
                    {item.n}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-medium">{item.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-muted">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Mesa() {
  return (
    <section className="py-20 lg:py-28">
      <div className="shell">
        <Reveal>
          <p className="kicker">Mesa</p>
          <h2 className="font-display mt-3 text-[clamp(2rem,4vw,3.4rem)] font-medium tracking-tight">
            Quienes leen la planta.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person) => (
            <Reveal key={person.slug}>
              <Link href={`/mesa/${person.slug}`} className="group block">
                <div className="img-zoom relative aspect-[3/4] bg-luz-2">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(min-width: 1024px) 22vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <p className="kicker mt-4">{person.role}</p>
                <h3 className="font-display mt-1 text-2xl font-medium tracking-tight group-hover:text-sol">
                  {person.name}
                </h3>
                <p className="mt-1 text-[14px] text-muted">{person.beat}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section className="border-t border-line py-20 lg:py-28">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="kicker">Preguntas</p>
          <h2 className="font-display mt-3 text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[0.95] tracking-tight">
            Lo que siempre nos preguntan.
          </h2>
        </Reveal>
        <div className="lg:col-span-8">
          {faqs.map((item) => (
            <Reveal
              key={item.q}
              className="border-t border-line py-6 first:border-t-0 first:pt-0"
            >
              <h3 className="font-display text-xl font-medium tracking-tight">
                {item.q}
              </h3>
              <p className="mt-3 max-w-[58ch] text-[16px] leading-relaxed text-muted">
                {item.a}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cierre() {
  return (
    <section className="border-t border-line bg-luz-2/60">
      <div className="shell grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
        <Reveal className="lg:col-span-5">
          <p className="kicker">Encargo</p>
          <h2 className="font-display mt-4 text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[0.95] tracking-tight">
            Si el norte es irrenunciable, empecemos por ahí.
          </h2>
          <p className="mt-5 max-w-[40ch] text-[16px] leading-relaxed text-muted">
            {site.honorario} Respondemos en 24 horas hábiles.
          </p>
        </Reveal>
        <div className="lg:col-span-7">
          <ConsultForm />
        </div>
      </div>
    </section>
  );
}
