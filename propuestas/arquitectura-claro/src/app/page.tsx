import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectIndex } from "@/components/ProjectIndex";
import { Reveal } from "@/components/Reveal";
import { getFeatured, projects } from "@/lib/projects";
import { principles, studio } from "@/lib/studio";

export default function HomePage() {
  const featured = getFeatured();
  const [lead, ...more] = featured;
  const rest = projects.filter((project) => !project.featured);

  return (
    <>
      <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-hero text-paper">
        <Image
          src="/images/casa-atuel.jpg"
          alt="Casa Atuel, Valle de Uco, Mendoza"
          fill
          priority
          sizes="100vw"
          className="hero-ken object-cover object-[68%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hero/80 via-hero/20 to-hero/35" />

        <div className="hero-copy absolute inset-x-0 bottom-0 mx-auto max-w-[1600px] px-5 pb-10 md:px-8 md:pb-14 lg:px-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-paper/70">
            Buenos Aires · Est. {studio.founded}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[3.4rem] font-light leading-[0.9] tracking-tight sm:text-7xl md:text-[6.4rem]">
            El lugar tiene
            <br />
            <em>una veta.</em>
          </h1>
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-sm leading-7 text-paper/80 md:text-base">
              Atelier de arquitectura. Casas, bodegas, cultura y espacio
              público. Seguimos la línea que el sitio ya tiene.
            </p>
            <div className="flex items-center gap-8 text-[11px] uppercase tracking-[0.22em] text-paper/80">
              <Link href="/obras" className="link-line">
                Ver obras
              </Link>
              <span className="scroll-hint hidden sm:inline">↓</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
              Estudio
            </p>
            <p className="mt-4 font-display text-3xl leading-tight md:text-4xl">
              {studio.tagline}
            </p>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:col-start-6" delay={120}>
            <p className="max-w-2xl text-lg leading-8 text-ink-soft md:text-[1.35rem] md:leading-9">
              {studio.about[0]}
            </p>
            <Link
              href="/estudio"
              className="mt-8 inline-block text-[11px] uppercase tracking-[0.22em] link-line"
            >
              Conocer el atelier
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 pb-8 md:px-8 lg:px-10">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-4xl italic md:text-5xl">
            Obras recientes
          </h2>
          <Link
            href="/obras"
            className="text-[11px] uppercase tracking-[0.22em] text-muted link-line"
          >
            Índice completo
          </Link>
        </div>
        <div className="grid gap-10">
          {lead ? <ProjectCard project={more[0] ?? lead} large /> : null}
          <div className="grid gap-10 md:grid-cols-2">
            {more.slice(1, 3).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            Índice
          </p>
          <h2 className="mt-3 font-display text-4xl italic md:text-5xl">
            Todas las obras
          </h2>
        </Reveal>
        <div className="mt-12">
          <ProjectIndex projects={projects} />
        </div>
      </section>

      <section className="border-y border-line bg-paper-2">
        <div className="mx-auto grid max-w-[1600px] gap-px bg-line md:grid-cols-3">
          {principles.map((item, index) => (
            <Reveal
              key={item.number}
              delay={index * 90}
              className="bg-paper-2 px-8 py-14 md:px-10 md:py-16"
            >
              <p className="font-mono text-[11px] tracking-[0.2em] text-accent">
                {item.number}
              </p>
              <h3 className="mt-5 font-display text-4xl italic">{item.title}</h3>
              <p className="mt-5 max-w-sm text-sm leading-7 text-ink-soft">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-24 md:px-8 md:py-32 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[16/10] overflow-hidden bg-paper-2">
              <Image
                src="/images/estudio.jpg"
                alt="Atelier VETA en Palermo, Buenos Aires"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                loading="eager"
              />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-8" delay={100}>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
              Atelier
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              Un estudio pequeño,
              <br />
              <em>obras largas.</em>
            </h2>
            <p className="mt-6 text-sm leading-7 text-ink-soft">
              Dieciocho personas en Palermo. Maquetas sobre la mesa, oficios en
              la obra, y un modo de trabajar que no se apura. Tomamos pocos
              encargos para poder estar en cada uno.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
              {[
                { n: String(studio.founded), l: "Fundación" },
                { n: `${studio.works}`, l: "Obras" },
                { n: `${studio.people}`, l: "Personas" },
              ].map((stat) => (
                <div key={stat.l}>
                  <p className="font-display text-3xl">{stat.n}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted">
                    {stat.l}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/enfoque"
              className="mt-10 inline-block text-[11px] uppercase tracking-[0.22em] link-line"
            >
              Cómo trabajamos
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 pb-24 md:px-8 lg:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          {rest.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index + 5} />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/images/pabellon-este-noche.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            loading="eager"
          />
        </div>
        <div className="relative mx-auto max-w-[1600px] px-5 py-28 md:px-8 md:py-36 lg:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-paper/60">
              Encargo
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl">
              Si hay un predio
              <br />
              <em>y una pregunta,</em>
              <br />
              empecemos.
            </h2>
            <Link
              href="/contacto"
              className="mt-10 inline-flex h-12 items-center bg-paper px-8 text-[11px] uppercase tracking-[0.22em] text-ink transition hover:bg-brass hover:text-ink"
            >
              Escribir al estudio
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
