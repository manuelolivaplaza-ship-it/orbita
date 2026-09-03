import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BeforeAfter } from "@/components/ui/before-after";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/reveal";
import {
  cases,
  faqs,
  site,
  stats,
  team,
  testimonials,
  treatments,
  visitSteps,
} from "@/lib/site";

export default function Home() {
  const featured = cases[0];

  return (
    <>
      <section className="relative overflow-hidden pt-6 sm:pt-10">
        <Container>
          <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="pb-4 lg:pb-10">
              <p className="text-[0.72rem] tracking-[0.24em] uppercase text-sage">
                Alba · {site.neighborhood}, Madrid
              </p>
              <h1 className="mt-5 font-display text-[2.7rem] leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-[5.1rem]">
                Diseñamos sonrisas
                <span className="block italic text-sage">
                  que no se anuncian.
                </span>
              </h1>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-muted-foreground">
                Un atelier en Salamanca donde la precisión clínica se vive como
                hospitalidad. Sin prisa. Sin ruido. Con luz.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild className="h-12 rounded-full px-6">
                  <Link href="/cita">Reservar primera visita</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full px-6"
                >
                  <Link href="/casos">Ver resultados</Link>
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                {site.rating} en Google · {site.reviews} reseñas · {site.phone}
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem] sm:rounded-[2.2rem]">
                <Image
                  src="/images/hero.jpg"
                  alt="Paciente de Alba, sonrisa natural con luz de mañana"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
              </div>
              <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-border/70 bg-card/90 p-4 shadow-sm backdrop-blur-md sm:left-auto sm:right-[-1.2rem] sm:w-64">
                <p className="font-display text-lg leading-snug">
                  Primera visita con escáner 3D
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Plan por escrito. Cifras claras. 95 € revisión.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-24 sm:mt-32">
        <Container>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[1.6rem] bg-border md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card px-5 py-7 sm:px-7">
                <p className="font-display text-3xl tracking-tight sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm leading-snug text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-28 sm:mt-36">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="text-[0.72rem] tracking-[0.22em] uppercase text-sage">
                01 · La clínica
              </p>
              <h2 className="mt-4 font-display text-4xl tracking-tight text-balance sm:text-5xl">
                No es un consultorio.
                <span className="italic text-sage"> Es un atelier.</span>
              </h2>
              <p className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-muted-foreground">
                Caliza, lino, un olivo y silencio. El espacio no es decoración:
                es la primera prueba de que nadie va a tratarte como un número
                de ficha. Cuatro suites privadas. Un equipo que se presenta por
                su nombre.
              </p>
              <Button asChild variant="link" className="mt-4 px-0 text-base">
                <Link href="/clinica">
                  Conocer el espacio
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[16/11] overflow-hidden rounded-[1.8rem]">
                <Image
                  src="/images/reception.jpg"
                  alt="Recepción de Alba: piedra, lino y un olivo"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="mt-28 sm:mt-36">
        <Container>
          <Reveal>
            <p className="text-[0.72rem] tracking-[0.22em] uppercase text-sage">
              02 · Tratamientos
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">
              Lo que hacemos, y lo que no.
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed">
              No producimos sonrisas iguales. Cada ficha tiene un autor, un
              plan y un precio dicho en voz alta.
            </p>
          </Reveal>
          <div className="mt-12 divide-y divide-border border-y border-border">
            {treatments.map((t, i) => (
              <Link
                key={t.slug}
                href={`/tratamientos/${t.slug}`}
                className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-4 py-6 sm:grid-cols-[4.5rem_1fr_auto] sm:gap-8"
              >
                <span className="font-display text-sm text-clay">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-display text-2xl tracking-tight group-hover:text-primary sm:text-3xl">
                    {t.name}
                  </span>
                  <span className="mt-1 block max-w-xl text-sm text-muted-foreground sm:text-base">
                    {t.short}
                  </span>
                </span>
                <span className="hidden text-sm text-muted-foreground sm:block">
                  {t.price}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-28 sm:mt-36">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <BeforeAfter
                before={featured.before}
                after={featured.after}
                beforeAlt={`Antes · ${featured.name}`}
                afterAlt={`Después · ${featured.name}`}
              />
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-[0.72rem] tracking-[0.22em] uppercase text-sage">
                03 · Casos
              </p>
              <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
                El cambio se arrastra, no se exhibe.
              </h2>
              <p className="mt-5 font-display text-xl italic leading-snug text-foreground/80">
                “{featured.quote}”
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                {featured.name} · {featured.treatment}
              </p>
              <Button asChild className="mt-8 h-12 rounded-full px-6">
                <Link href="/casos">Ver más resultados</Link>
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="mt-28 sm:mt-36">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
            <div className="relative min-h-[420px] overflow-hidden rounded-[1.8rem]">
              <Image
                src="/images/suite.jpg"
                alt="Suite de tratamiento, sillón beige y luz natural"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className="rounded-[1.8rem] border border-border bg-card px-8 py-10 sm:px-12 sm:py-14">
              <p className="text-[0.72rem] tracking-[0.22em] uppercase text-sage">
                04 · Primera visita
              </p>
              <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
                Cinco pasos. Ninguno duele.
              </h2>
              <ol className="mt-10 space-y-6">
                {visitSteps.map((s) => (
                  <li key={s.n} className="grid grid-cols-[3rem_1fr] gap-4">
                    <span className="font-display text-clay">{s.n}</span>
                    <span>
                      <span className="block font-medium">{s.title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                        {s.text}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
              <Button asChild className="mt-10 h-12 rounded-full px-6">
                <Link href="/primera-visita">Cómo es venir</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-28 sm:mt-36">
        <Container>
          <Reveal>
            <p className="text-[0.72rem] tracking-[0.22em] uppercase text-sage">
              05 · Equipo
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
              Caras, no batas.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.06}>
                <Link href="/equipo" className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[1.4rem]">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(min-width: 1024px) 22vw, 50vw"
                    />
                  </div>
                  <p className="mt-4 font-display text-xl">{m.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-28 sm:mt-36">
        <Container>
          <div className="horizon mb-14" />
          <div className="grid gap-10 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.name}>
                <p className="font-display text-2xl leading-snug tracking-tight">
                  {t.text}
                </p>
                <footer className="mt-5 text-sm text-muted-foreground">
                  {t.name} · {t.meta}
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-28 sm:mt-36">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[0.72rem] tracking-[0.22em] uppercase text-sage">
                Preguntas
              </p>
              <h2 className="mt-4 font-display text-4xl tracking-tight">
                Lo que suele preocupar antes de llamar.
              </h2>
            </div>
            <Accordion type="single" collapsible className="border-t border-border">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`q-${i}`}>
                  <AccordionTrigger className="py-5 text-left font-display text-lg hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      <section className="mt-28 mb-8 sm:mt-36">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem]">
            <div className="relative min-h-[28rem] sm:min-h-[32rem]">
              <Image
                src="/images/lifestyle.jpg"
                alt="Paseo por Salamanca, luz de mañana"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="absolute inset-0 flex items-end p-5 sm:items-center sm:p-12">
              <div className="max-w-lg rounded-[1.6rem] border border-border/70 bg-card/95 p-7 shadow-sm backdrop-blur-md sm:p-10">
                <p className="text-[0.72rem] tracking-[0.22em] uppercase text-sage">
                  Reserva
                </p>
                <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-5xl">
                  La luz entra a las nueve. Tú también puedes.
                </h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  Huecos esta semana para primera visita. Si hay dolor, llama
                  ahora.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild className="h-12 rounded-full px-6">
                    <Link href="/cita">Pedir cita</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-12 rounded-full px-6"
                  >
                    <a href={site.phoneHref}>Llamar {site.phone}</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
