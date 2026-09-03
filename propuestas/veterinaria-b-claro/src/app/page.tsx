import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FaqList } from "@/components/faq-list";
import { HoursLive } from "@/components/hours-live";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import {
  clinic,
  services,
  species,
  stats,
  team,
  testimonials,
  visits,
} from "@/lib/clinic";

export default function HomePage() {
  const featured = services.filter((service) =>
    ["consulta", "cirugia", "felinos", "urgencias", "diagnostico", "internacion"].includes(
      service.slug,
    ),
  );

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24">
        <p className="kicker">Palermo · Buenos Aires</p>
        <h1 className="display mt-6 max-w-4xl text-[2.55rem] leading-[1.05] text-foreground sm:text-6xl lg:text-[5.2rem]">
          Medicina de precisión.{" "}
          <span className="block">Cariño de casa.</span>
        </h1>
        <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {clinic.lede}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button asChild className="h-12 rounded-full px-7 text-[0.95rem]">
            <Link href="/turnos">Pedir un turno</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 rounded-full px-7 text-[0.95rem]"
          >
            <Link href="/urgencias">Si es urgente</Link>
          </Button>
        </div>
        <div className="mt-8">
          <HoursLive />
        </div>
      </section>

      <section className="relative">
        <div className="relative mx-auto max-w-[88rem] overflow-hidden sm:px-5">
          <div className="relative aspect-[4/5] sm:aspect-[16/9] sm:rounded-[1.6rem]">
            <Image
              src="/images/hero-dog.jpg"
              alt="Golden retriever en la mesa de consulta, acompañado por una veterinaria de Alba"
              fill
              preload
              sizes="100vw"
              className="object-cover sm:rounded-[1.6rem]"
            />
          </div>
        </div>
        <p className="mx-auto mt-4 max-w-6xl px-5 text-sm text-muted-foreground sm:px-8">
          Consulta. Otto, siete años. El tiempo que un animal necesita, no el que
          entra en una grilla.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 80}>
            <p className="display text-4xl text-foreground sm:text-5xl">{stat.value}</p>
            <p className="mt-3 max-w-[14rem] text-sm leading-relaxed text-muted-foreground">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-24 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="kicker">La idea</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl">
            Un hospital chico, con las luces de una casa.
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            Alba nació de una molestia: clínicas que apuran, hospitales que
            asustan. Acá hay quirofano, laboratorio e internación — y también una
            banca de roble, un olivo y cuarenta minutos de consulta.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            No somos un pet shop con estetoscopio. Somos cuatro médicos que se
            hablan, un criterio, y una puerta verde que se abre de noche.
          </p>
          <Button asChild variant="link" className="mt-4 h-auto px-0 text-base">
            <Link href="/la-clinica">
              La clínica <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={120}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem]">
            <Image
              src="/images/exam-room.jpg"
              alt="Consultorio de Alba con mesa de roble, olivo y luz de tarde"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <Reveal>
            <p className="kicker">Qué hacemos</p>
            <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="display max-w-xl text-4xl sm:text-5xl">
                De la vacuna al quirofano, sin cambiar de edificio.
              </h2>
              <Link
                href="/servicios"
                className="text-sm text-foreground underline-offset-4 hover:underline"
              >
                Ver todos los servicios
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[1.4rem] border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {featured.map((service) => (
              <Link
                key={service.slug}
                href={`/servicios/${service.slug}`}
                className="group bg-background p-8 transition-colors hover:bg-card"
              >
                <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                  {service.duration}
                </p>
                <h3 className="mt-6 font-heading text-2xl italic">{service.name}</h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {service.short}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm text-foreground">
                  Conocer
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="relative min-h-[28rem] sm:min-h-[34rem]">
          <Image
            src="/images/waiting.jpg"
            alt="Sala de espera de Alba, con banca de roble, olivo y un beagle dormido"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-5 py-12 sm:px-8">
            <p className="max-w-lg font-heading text-3xl text-balance text-white italic sm:text-4xl">
              “Sin televisión. Sin apuro. El animal llega menos asustado, y el
              examen sale mejor.”
            </p>
            <p className="mt-4 text-sm text-white/80">Dra. Emilia Rivas, directora</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <p className="kicker">La primera visita</p>
          <h2 className="display mt-4 max-w-2xl text-4xl sm:text-5xl">
            Un ritual simple, para que nada se sienta improvisado.
          </h2>
        </Reveal>
        <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {visits.map((step, index) => (
            <Reveal key={step.n} delay={index * 70}>
              <li>
                <p className="font-heading text-3xl italic text-brass">{step.n}</p>
                <h3 className="mt-4 text-lg">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="kicker">A quiénes vemos</p>
            <h2 className="display mt-4 text-4xl">No solo perros y gatos.</h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Cada especie tiene un metabolismo, un miedo y un protocolo. No
              improvisamos el de un perro sobre un conejo.
            </p>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:col-span-8">
            {species.map((item) => (
              <li key={item.name} className="bg-background px-6 py-6">
                <p className="font-heading text-xl italic">{item.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="kicker">El equipo</p>
              <h2 className="display mt-4 text-4xl sm:text-5xl">Cuatro médicos, un criterio.</h2>
            </div>
            <Link
              href="/equipo"
              className="hidden text-sm underline-offset-4 hover:underline sm:inline"
            >
              Conocerlos
            </Link>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person, index) => (
            <Reveal key={person.slug} delay={index * 80}>
              <article>
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.2rem]">
                  <Image
                    src={person.image}
                    alt={person.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 font-heading text-xl italic">{person.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{person.role}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <p className="kicker !text-primary-foreground/60">Voces</p>
          <div className="mt-10 grid gap-12 lg:grid-cols-2">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="max-w-xl">
                <p className="font-heading text-2xl leading-snug italic sm:text-3xl">
                  {item.quote}
                </p>
                <footer className="mt-6 text-sm text-primary-foreground/70">
                  {item.name}
                  <span className="mx-2">·</span>
                  {item.detail}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-16 px-5 py-24 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="kicker">Preguntas</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl">
            Lo que suele preguntarse antes de cruzar la puerta.
          </h2>
          <p className="mt-5 text-pretty text-muted-foreground">
            Si no está acá, escríbanos. El teléfono de guardia también sirve para
            una duda chica.
          </p>
        </div>
        <div className="lg:col-span-7">
          <FaqList />
        </div>
      </section>
    </>
  );
}
