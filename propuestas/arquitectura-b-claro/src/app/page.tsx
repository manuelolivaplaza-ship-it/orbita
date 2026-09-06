import Image from "next/image";
import Link from "next/link";
import { CotaLabel, Datum } from "@/components/cota-mark";
import { CotaRail } from "@/components/cota-rail";
import { EncargoForm } from "@/components/encargo-form";
import { NorthArrow } from "@/components/north-arrow";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SunSection } from "@/components/sun-section";
import { faqs, getFeatured, principles, projects, steps } from "@/lib/data";
import { site, stats } from "@/lib/site";

export default function HomePage() {
  const featured = getFeatured();
  const rest = projects.filter((project) => !project.featured);

  return (
    <>
      <CotaRail />
      <Hero />
      <Trust />
      <Norte />
      <Obras featured={featured} rest={rest} />
      <Oficio />
      <Taller />
      <Preguntas />
      <Encargo />
    </>
  );
}

function Hero() {
  return (
    <section
      id="cota-12"
      className="relative min-h-[100svh] pt-[var(--header)]"
    >
      <div className="shell grid min-h-[calc(100svh-var(--header))] lg:grid-cols-12">
        <div className="flex flex-col justify-end py-10 lg:col-span-5 lg:py-16 lg:pr-10">
          <div className="flex items-end justify-between gap-6">
            <p className="kicker">Estudio · Providencia</p>
            <CotaLabel value="+12.40" className="lg:hidden" />
          </div>
          <h1 className="font-display mt-6 text-[clamp(3.2rem,8.4vw,7.4rem)] font-semibold leading-[0.86] tracking-tight">
            El corte
            <br />
            es el
            <br />
            <span className="text-cobre">proyecto.</span>
          </h1>
          <p className="font-serif mt-7 max-w-[36ch] text-[1.2rem] leading-relaxed text-muted italic">
            {site.sentence}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contacto"
              className="font-display inline-flex h-12 items-center bg-cobre px-6 text-[0.92rem] font-semibold text-cal transition-colors hover:bg-cobre-deep"
            >
              Encargar un predio
            </Link>
            <Link
              href="/obras"
              className="font-display inline-flex h-12 items-center border border-ink px-6 text-[0.92rem] font-semibold transition-colors hover:border-cobre hover:text-cobre"
            >
              Ver obras
            </Link>
          </div>
          <p className="mt-6 text-[13px] text-muted lg:hidden">
            {site.address.line} · {site.address.city}
          </p>
        </div>

        <div className="relative hidden lg:col-span-6 lg:block">
          <div className="absolute inset-x-0 top-10 bottom-24">
            <div className="relative h-full overflow-hidden bg-cal-2">
              <Image
                src="/images/casa-lo-curro.jpg"
                alt="Casa Lo Curro, Vitacura: tres plataformas sobre el talud"
                fill
                priority
                sizes="50vw"
                className="object-cover object-[50%_60%]"
              />
            </div>
            <Datum className="mt-0" />
            <div className="mt-3 flex items-center justify-between">
              <p className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                C-24-03 · Casa Lo Curro
              </p>
              <CotaLabel value="+842.60" align="right" />
            </div>
          </div>
        </div>

        <div className="hidden flex-col items-end justify-between py-16 pl-6 lg:col-span-1 lg:flex">
          <div className="text-right">
            <NorthArrow className="ml-auto" />
            <p className="font-mono mt-6 text-[10px] leading-relaxed tracking-wide text-oxido">
              {site.coords}
              <br />
              cota {site.cota}
            </p>
          </div>
          <ol className="font-mono nums space-y-3 text-[11px] tracking-wide text-muted">
            {["+12.40", "+9.20", "+6.00", "+3.20", "±0.00"].map((value) => (
              <li key={value} className="flex items-center justify-end gap-2">
                {value}
                <span className="h-px w-4 bg-line" />
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="relative h-[42vh] min-h-[260px] lg:hidden">
        <Image
          src="/images/casa-lo-curro.jpg"
          alt="Casa Lo Curro, Vitacura: tres plataformas sobre el talud"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-cobre" />
      </div>
    </section>
  );
}

function Trust() {
  return (
    <div className="border-y border-line bg-cielo/35">
      <div className="shell grid grid-cols-2 gap-y-8 py-8 sm:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label}>
            <p className="font-display nums text-3xl font-semibold tracking-tight lg:text-4xl">
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

function Norte() {
  return (
    <section id="cota-9" className="py-24 md:py-32">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="flex items-end justify-between gap-4 border-b border-line pb-4">
            <p className="kicker">Manifiesto</p>
            <CotaLabel value="+9.20" align="right" />
          </div>
          <h2 className="font-display mt-8 text-[clamp(2.4rem,5vw,4.2rem)] font-semibold leading-[0.92] tracking-tight">
            El norte
            <br />
            no es un
            <br />
            estilo.
          </h2>
          <p className="font-serif mt-6 max-w-md text-[1.25rem] leading-relaxed text-muted italic">
            Es una hora del día, una latitud y un alero. En Chile, quien pone el
            estar al sur está diseñando de memoria europea.
          </p>
        </Reveal>
        <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.12}>
          <SunSection />
        </Reveal>
      </div>

      <div className="shell mt-16 grid gap-px bg-line md:grid-cols-3">
        {principles.slice(0, 3).map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 0.08}
            className="bg-cal px-7 py-12"
          >
            <CotaLabel value={item.cota} />
            <h3 className="font-display mt-5 text-3xl font-semibold tracking-tight">
              {item.title}
            </h3>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted">
              {item.text}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Obras({
  featured,
  rest,
}: {
  featured: ReturnType<typeof getFeatured>;
  rest: typeof projects;
}) {
  const [lead, ...more] = featured;
  return (
    <section id="cota-6" className="pb-24 md:pb-32">
      <div className="shell">
        <Reveal>
          <div className="flex items-end justify-between gap-4 border-b border-line pb-4">
            <div>
              <p className="kicker">Láminas</p>
              <h2 className="font-display mt-3 text-[clamp(2.4rem,5vw,4.2rem)] font-semibold leading-[0.92] tracking-tight">
                Obras que se sientan.
              </h2>
            </div>
            <div className="hidden text-right sm:block">
              <CotaLabel value="+6.00" align="right" />
              <Link
                href="/obras"
                className="link-line mt-3 inline-block text-[12px] tracking-[0.16em] uppercase"
              >
                Índice completo
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-14">
          {lead ? <ProjectCard project={lead} large index={0} /> : null}
          <div className="grid gap-10 md:grid-cols-2">
            {more.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>

        <div className="mt-16 overflow-x-auto border-y border-line">
          <table className="w-full min-w-[640px] text-left">
            <caption className="sr-only">Índice de obras</caption>
            <thead>
              <tr className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                <th className="py-3 pr-4 font-medium">Lámina</th>
                <th className="py-3 pr-4 font-medium">Obra</th>
                <th className="py-3 pr-4 font-medium">Comuna</th>
                <th className="py-3 pr-4 font-medium">Año</th>
                <th className="py-3 font-medium">Cota</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.slug} className="border-t border-line transition-colors hover:bg-cal-2">
                  <td className="font-mono py-3 pr-4 text-[12px] text-cobre">
                    <Link href={`/obras/${project.slug}`} className="link-line">
                      {project.code}
                    </Link>
                  </td>
                  <td className="py-3 pr-4">
                    <Link href={`/obras/${project.slug}`} className="link-line">
                      {project.title}
                    </Link>
                  </td>
                  <td className="py-3 pr-4 text-[14px] text-muted">
                    {project.comuna}
                  </td>
                  <td className="font-mono nums py-3 pr-4 text-[13px]">
                    {project.year}
                  </td>
                  <td className="font-mono nums py-3 text-[12px] text-oxido">
                    {project.cota}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {rest.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <Link
          href="/obras"
          className="font-display mt-10 inline-flex h-12 items-center border border-ink px-6 text-[0.92rem] font-semibold sm:hidden"
        >
          Índice completo
        </Link>
      </div>
    </section>
  );
}

function Oficio() {
  return (
    <section id="cota-3" className="border-y border-line bg-cal-2 py-24 md:py-32">
      <div className="shell grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <div className="flex items-end justify-between gap-4 border-b border-line pb-4">
            <p className="kicker">Oficio</p>
            <CotaLabel value="+3.20" align="right" />
          </div>
          <h2 className="font-display mt-8 text-[clamp(2.2rem,4vw,3.4rem)] font-semibold leading-[0.94] tracking-tight">
            Del predio
            <br />
            a la recepción
            <br />
            final.
          </h2>
          <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-muted">
            DOM, NCh433, informe de suelo, oficios. El permiso no es un extra.
            La obra no se dirige por WhatsApp.
          </p>
          <Link
            href="/oficio"
            className="link-line mt-8 inline-block text-[12px] tracking-[0.16em] uppercase"
          >
            Cómo trabajamos
          </Link>
        </Reveal>
        <div className="lg:col-span-8">
          <ol>
            {steps.map((step, index) => (
              <Reveal key={step.cota} delay={index * 0.06}>
                <li className="grid gap-4 border-t border-line py-6 sm:grid-cols-12">
                  <p className="font-mono nums text-[12px] tracking-wide text-cobre sm:col-span-2">
                    {step.cota}
                  </p>
                  <h3 className="font-display text-2xl font-semibold tracking-tight sm:col-span-3">
                    {step.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted sm:col-span-7">
                    {step.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Taller() {
  return (
    <section className="py-24 md:py-32">
      <div className="shell grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <div className="img-zoom relative aspect-[4/3] bg-cal-2">
            <Image
              src="/images/taller.jpg"
              alt="Taller COTA en Pedro de Valdivia Norte, con maquetas sobre mesas de roble"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-px bg-cobre" />
          </div>
        </Reveal>
        <Reveal className="lg:col-span-5 lg:col-start-8" delay={0.1}>
          <p className="kicker">Taller</p>
          <h2 className="font-display mt-4 text-[clamp(2.2rem,4vw,3.4rem)] font-semibold leading-[0.94] tracking-tight">
            Seis mesas.
            <br />
            Un talud.
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-muted">
            Una casa de los setenta en El Cerro, abierta al norte en 2018. Las
            maquetas se fotografían a las 11:00. Quien viene a encargar un
            predio se sienta con el corte delante, no con un flythrough.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
            {[
              { n: String(site.founded), l: "Primera cota" },
              { n: String(site.works), l: "Obras" },
              { n: String(site.people), l: "Mesas" },
            ].map((stat) => (
              <div key={stat.l}>
                <p className="font-display nums text-3xl font-semibold">
                  {stat.n}
                </p>
                <p className="mt-1 text-[11px] tracking-[0.14em] text-muted uppercase">
                  {stat.l}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/estudio"
            className="link-line mt-10 inline-block text-[12px] tracking-[0.16em] uppercase"
          >
            Conocer el estudio
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="kicker">Antes de escribir</p>
          <h2 className="font-display mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[0.94] tracking-tight">
            Cinco respuestas
            <br />
            de la mesa.
          </h2>
        </Reveal>
        <div className="lg:col-span-8">
          {faqs.map((item, index) => (
            <Reveal key={item.q} delay={index * 0.05}>
              <details className="group border-t border-line py-6">
                <summary className="font-display cursor-pointer list-none text-xl font-semibold tracking-tight marker:content-none">
                  <span className="flex items-start justify-between gap-6">
                    {item.q}
                    <span className="font-mono text-[12px] text-cobre transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Encargo() {
  return (
    <section id="cota-0" className="border-t border-line bg-cal-2 py-24 md:py-32">
      <div className="shell grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="flex items-end justify-between gap-4 border-b border-line pb-4">
            <p className="kicker">Ficha</p>
            <CotaLabel value="±0.00" align="right" />
          </div>
          <h2 className="font-display mt-8 text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[0.92] tracking-tight">
            Si hay un predio
            <br />
            y una cota,
            <br />
            empecemos.
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-muted">
            Cuéntenos la pendiente, el norte, los árboles, el número en UF. Si
            no somos el estudio, se lo diremos en 24 horas hábiles.
          </p>
          <p className="mt-8 text-[15px] leading-relaxed">
            {site.address.line}
            <br />
            {site.address.city}
            <br />
            <a href={site.phoneHref} className="link-line">
              {site.phone}
            </a>
            <br />
            <a href={`mailto:${site.email}`} className="link-line">
              {site.email}
            </a>
          </p>
        </Reveal>
        <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
          <EncargoForm />
        </Reveal>
      </div>
    </section>
  );
}
