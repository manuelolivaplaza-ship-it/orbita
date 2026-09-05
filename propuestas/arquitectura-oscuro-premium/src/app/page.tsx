import Image from "next/image";
import Link from "next/link";
import { Latitud } from "@/components/latitud";
import { ProjectCard } from "@/components/project-card";
import { ProjectIndex } from "@/components/project-index";
import { Reveal } from "@/components/reveal";
import { getFeatured, projects } from "@/lib/projects";
import { principles, stats, studio } from "@/lib/studio";

export default function HomePage() {
  const featured = getFeatured();
  const [lead, second, third, fourth] = featured;

  return (
    <>
      <section className="relative -mt-[4.5rem] h-[100svh] min-h-[640px] overflow-hidden bg-void">
        <Image
          src="/images/hero.jpg"
          alt="Casa Ladera, Lo Barnechea: hormigón en voladizo sobre el valle de Santiago al anochecer"
          fill
          priority
          sizes="100vw"
          className="hero-ken object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void/80 via-void/25 to-void/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-void/45" />

        <div className="hero-copy shell relative flex h-full flex-col justify-end pb-10 pt-28 md:pb-14">
          <p className="kicker">{studio.coords} · Lastarria</p>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(3rem,8vw,7.2rem)] leading-[0.88] tracking-[-0.04em]">
            Chile es un corte.
            <br />
            <em className="italic text-copper">Lo habitamos.</em>
          </h1>
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-sm leading-7 text-paper-dim md:text-base">
              Estudio de arquitectura en Santiago. Casas, bodegas, cultura y
              espacio público en el borde entre la cordillera y el Pacífico.
            </p>
            <div className="flex items-center gap-8 text-[11px] uppercase tracking-[0.22em] text-paper/80">
              <Link href="/obras" className="link-line">
                Ver obras
              </Link>
              <span className="scroll-hint hidden sm:inline text-copper">↓</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-ink">
        <dl className="shell grid sm:grid-cols-4">
          {stats.map((item, i) => (
            <div
              key={item.label}
              className={
                i === 0
                  ? "border-line py-6 sm:border-r sm:pr-8"
                  : i === 3
                    ? "border-line py-6 sm:pl-8"
                    : "border-line py-6 sm:border-r sm:px-8"
              }
            >
              <dt className="kicker">{item.label}</dt>
              <dd className="mt-2 font-display text-[1.8rem] leading-none tabular tracking-tight">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="py-24 md:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="kicker">Estudio</p>
            <p className="mt-4 font-display text-3xl leading-tight md:text-4xl">
              {studio.tagline}
            </p>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:col-start-6" delay={120}>
            <p className="max-w-2xl text-lg leading-8 text-paper-dim md:text-[1.35rem] md:leading-9">
              {studio.about[0]}
            </p>
            <Link
              href="/estudio"
              className="mt-8 inline-block text-[11px] uppercase tracking-[0.22em] link-line"
            >
              Conocer el estudio
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="pb-8">
        <div className="shell mb-8 flex items-end justify-between">
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
        <div className="shell grid gap-10">
          {lead ? <ProjectCard project={lead} large priority /> : null}
          <div className="grid gap-10 md:grid-cols-2">
            {second ? <ProjectCard project={second} /> : null}
            {third ? <ProjectCard project={third} /> : null}
          </div>
          {fourth ? <ProjectCard project={fourth} large /> : null}
        </div>
      </section>

      <Latitud />

      <section className="py-24 md:py-32">
        <div className="shell">
          <Reveal>
            <p className="kicker">Índice</p>
            <h2 className="mt-3 font-display text-4xl italic md:text-5xl">
              Todas las obras
            </h2>
          </Reveal>
          <div className="mt-12">
            <ProjectIndex projects={projects} />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ink">
        <div className="shell grid gap-px bg-line md:grid-cols-3">
          {principles.map((item, index) => (
            <Reveal
              key={item.number}
              delay={index * 90}
              className="bg-ink px-8 py-14 md:px-10 md:py-16"
            >
              <p className="font-mono text-[11px] tracking-[0.2em] text-copper">
                {item.number}
              </p>
              <h3 className="mt-5 font-display text-4xl italic">{item.title}</h3>
              <p className="mt-5 max-w-sm text-sm leading-7 text-paper-dim">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="shell grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6" variant="img-mask">
            <div className="relative aspect-[16/10] overflow-hidden bg-surface">
              <Image
                src="/images/estudio.jpg"
                alt="Mesa de trabajo de ORILLA en Lastarria"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-8" delay={100}>
            <p className="kicker">Atelier</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              Un estudio pequeño,
              <br />
              <em className="italic text-copper">obras largas.</em>
            </h2>
            <p className="mt-6 text-sm leading-7 text-paper-dim">
              Catorce personas en Lastarria. Maquetas sobre la mesa, oficios en
              la obra, y un modo de trabajar que no se apura. Tomamos pocos
              encargos para poder estar en cada uno.
            </p>
            <Link
              href="/enfoque"
              className="mt-10 inline-block text-[11px] uppercase tracking-[0.22em] link-line"
            >
              Cómo trabajamos
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-void">
        <div className="absolute inset-0">
          <Image
            src="/images/pabellon-mapocho.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/70 to-void/30" />
        <div className="shell relative py-28 md:py-36">
          <Reveal>
            <p className="kicker">Encargo</p>
            <h2 className="mt-5 max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl">
              Si hay un predio
              <br />
              <em className="italic text-copper">y una pregunta,</em>
              <br />
              empecemos.
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contacto" className="btn btn-primary">
                Escribir al estudio
              </Link>
              <Link href="/enfoque" className="btn btn-ghost">
                Ver el enfoque
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
