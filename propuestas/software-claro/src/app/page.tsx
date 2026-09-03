import Image from "next/image";
import Link from "next/link";
import { Cta } from "@/components/cta";
import { ClientMarquee } from "@/components/marquee";
import { ProjectTeaser } from "@/components/project-teaser";
import { Reveal } from "@/components/reveal";
import { SantiagoClock } from "@/components/santiago-clock";
import { projects } from "@/lib/projects";
import { method, services, stats } from "@/lib/site";

export default function Home() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <>
      <section className="wrap pb-10 pt-10 md:pb-16 md:pt-16">
        <p className="eyebrow rise" style={{ animationDelay: "0.05s" }}>
          Estudio de software · Santiago
        </p>
        <h1
          className="display rise mt-6 max-w-[18ch] text-[clamp(3.1rem,9.2vw,8.4rem)]"
          style={{ animationDelay: "0.12s" }}
        >
          El software debería sentirse{" "}
          <em className="italic text-copper">obvio</em>.
        </h1>
        <div
          className="rise mt-10 flex max-w-2xl flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between md:gap-16"
          style={{ animationDelay: "0.28s" }}
        >
          <p className="text-[1.12rem] leading-[1.7] text-muted md:text-[1.22rem]">
            Diseñamos y construimos productos, plataformas y sistemas internos
            para empresas que operan de verdad. Sin teatro. Con la claridad de
            la primera luz.
          </p>
          <div className="flex shrink-0 flex-col gap-4">
            <Link
              href="/contacto"
              className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-sm tracking-[0.04em] text-foam transition-colors hover:bg-copper"
            >
              Conversemos
            </Link>
            <SantiagoClock className="eyebrow" />
          </div>
        </div>
      </section>

      <section className="wrap pb-8 md:pb-12">
        <div
          className="img-frame relative aspect-[16/10] rise md:aspect-[16/8]"
          style={{ animationDelay: "0.4s" }}
        >
          <Image
            src="/images/hero.jpg"
            alt="Estudio en Santiago al amanecer, ventanales hacia la cordillera y un sofá de lino."
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="mt-4 flex flex-col gap-1 text-sm text-muted md:flex-row md:justify-between">
          <p>El estudio, Lastarria. Primera luz sobre los Andes.</p>
          <p>Desde 2016.</p>
        </div>
      </section>

      <ClientMarquee />

      <Reveal as="section" className="wrap grid gap-12 py-24 md:grid-cols-12 md:gap-8 md:py-32">
        <p className="eyebrow md:col-span-4">Por qué existimos</p>
        <div className="md:col-span-8">
          <h2 className="font-display text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.08] tracking-[-0.04em]">
            Hay demasiado software que pide explicación. Interfaces que se
            esconden. Plataformas que se inflan. Reuniones para entender lo que
            debería ser evidente.
          </h2>
          <p className="mt-8 max-w-xl text-[1.08rem] leading-[1.75] text-muted">
            Nosotros hacemos lo contrario. Trabajamos con empresas que operan
            —salud, puertos, finanzas, campo— y les entregamos herramientas que
            un turno entiende sin un manual. Si hay que explicarlo, todavía no
            está listo.
          </p>
        </div>
      </Reveal>

      <section className="wrap pb-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="eyebrow">Trabajo</p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] md:text-5xl">
              Casos recientes
            </h2>
          </div>
          <Link href="/trabajo" className="hidden link-line text-sm text-muted md:inline">
            Todo el trabajo
          </Link>
        </div>
        <div className="grid gap-20">
          <ProjectTeaser project={featured} index={0} featured />
          <div className="grid gap-16 md:grid-cols-1">
            {rest.map((project, index) => (
              <ProjectTeaser key={project.slug} project={project} index={index + 1} />
            ))}
          </div>
        </div>
        <Link
          href="/trabajo"
          className="mt-12 inline-flex text-sm tracking-[0.06em] text-copper md:hidden"
        >
          Todo el trabajo →
        </Link>
      </section>

      <Reveal as="section" className="wrap grid gap-6 py-24 md:grid-cols-2 md:py-32">
        <div className="img-frame relative aspect-[4/5] md:aspect-auto md:min-h-[640px]">
          <Image
            src="/images/caustics.jpg"
            alt="Cáusticas de luz dorada sobre un muro de yeso."
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div className="flex flex-col justify-between bg-paper-2 px-8 py-12 md:px-14 md:py-16">
          <p className="eyebrow">Oficio</p>
          <blockquote className="mt-10 font-display text-[clamp(1.8rem,3.2vw,2.7rem)] leading-[1.15] tracking-[-0.03em]">
            “No hacemos slides. Hacemos el software que una empresa usa cuando
            nadie está mirando.”
          </blockquote>
          <p className="mt-10 max-w-md text-[1.02rem] leading-relaxed text-muted">
            Camila Riquelme y Tomás Vidal fundaron Alba después de ver, una y
            otra vez, sistemas que se veían bien en una sala y se caían en un
            turno. El estudio existe para cerrar esa distancia.
          </p>
        </div>
      </Reveal>

      <section className="wrap py-8 md:py-12">
        <p className="eyebrow">Cómo entra un encargo</p>
        <h2 className="mt-3 max-w-xl font-display text-4xl tracking-[-0.04em] md:text-5xl">
          Cuatro pasos. Ninguno es teatro.
        </h2>
        <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-8">
          {method.map((step, index) => (
            <Reveal as="li" key={step.index} delay={index * 80} className="border-t border-line pt-6">
              <p className="font-display text-3xl text-copper">{step.index}</p>
              <h3 className="mt-4 font-display text-2xl tracking-[-0.03em]">{step.title}</h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="wrap py-20 md:py-28">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">Oficio</p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] md:text-5xl">
              Qué hacemos
            </h2>
          </div>
          <Link href="/servicios" className="link-line text-sm text-muted">
            Los servicios
          </Link>
        </div>
        <ul className="mt-12 divide-y divide-line border-y border-line">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href="/servicios"
                className="group grid grid-cols-12 items-baseline gap-4 py-7"
              >
                <span className="col-span-2 eyebrow text-copper md:col-span-1">
                  {service.index}
                </span>
                <span className="col-span-10 font-display text-2xl tracking-[-0.03em] md:col-span-4 md:text-3xl">
                  {service.title}
                </span>
                <span className="col-span-10 col-start-3 text-[0.98rem] leading-relaxed text-muted md:col-span-6 md:col-start-auto">
                  {service.lede}
                </span>
                <span className="col-span-1 hidden text-right text-copper transition-transform duration-300 group-hover:translate-x-1 md:block">
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
              <p className="font-display text-4xl tracking-[-0.04em] md:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="wrap grid gap-10 py-24 md:grid-cols-12 md:py-32">
        <div className="img-frame relative aspect-[16/11] md:col-span-7 md:aspect-auto md:min-h-[520px]">
          <Image
            src="/images/studio.jpg"
            alt="El equipo de Alba reunido en una mesa de roble, ventanales hacia Santiago."
            fill
            className="object-cover"
            sizes="(min-width: 768px) 60vw, 100vw"
          />
        </div>
        <div className="flex flex-col justify-between md:col-span-5 md:py-4">
          <div>
            <p className="eyebrow">El estudio</p>
            <h2 className="mt-4 font-display text-4xl tracking-[-0.04em] md:text-5xl">
              Ocho personas. Una mesa. Lastarria.
            </h2>
            <p className="mt-6 text-[1.05rem] leading-relaxed text-muted">
              No somos una fábrica de tickets. Somos un estudio chico que toma
              pocos encargos y los lleva hasta que el software es de ustedes.
              Diseño e ingeniería en la misma conversación, siempre.
            </p>
          </div>
          <Link
            href="/estudio"
            className="mt-10 inline-flex items-center gap-2 text-sm tracking-[0.06em] text-copper"
          >
            Conocer Alba
            <span aria-hidden>→</span>
          </Link>
        </div>
      </Reveal>

      <Cta />
    </>
  );
}
