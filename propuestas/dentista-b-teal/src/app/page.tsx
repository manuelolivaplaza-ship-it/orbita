import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
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
      <section className="relative min-h-[100svh] overflow-hidden">
        <Image
          src="/images/facade.jpg"
          alt="Fachada de Bruma al amanecer, junto a la laguna del Parque Bicentenario"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tide via-tide/45 to-tide/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-tide/50 via-transparent to-transparent" />
        <Container className="relative flex min-h-[100svh] flex-col justify-end pb-16 pt-32 sm:pb-20">
          <p className="text-[0.72rem] tracking-[0.28em] uppercase text-lagoon">
            Bruma · {site.neighborhood}, Santiago
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[3rem] leading-[0.95] tracking-tight text-primary-foreground text-balance sm:text-7xl lg:text-[6.2rem]">
            La calma
            <span className="block italic text-lagoon">también es clínica.</span>
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-primary-foreground/80">
            Odontología de precisión frente a la laguna del Bicentenario.
            Suites privadas, escáner 3D, reembolso Isapre.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              asChild
              className="h-12 rounded-full bg-primary-foreground px-6 text-tide hover:bg-primary-foreground/90"
            >
              <Link href="/primera-hora">Agendar primera hora</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-primary-foreground/30 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="/casos">Ver resultados</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/65">
            {site.rating} en Google · {site.reviews} reseñas · {site.phoneIntl}
          </p>
          <a
            href="#clinica"
            className="mt-10 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.2em] uppercase text-primary-foreground/70"
          >
            Bajar
            <ArrowDown className="size-3.5" />
          </a>
        </Container>
      </section>

      <section className="tide-band text-primary-foreground">
        <Container>
          <div className="grid grid-cols-2 gap-px md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="px-5 py-10 sm:px-7">
                <p className="font-display text-4xl tracking-tight sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm leading-snug text-primary-foreground/70">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-28 sm:mt-36">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.8rem]">
                <Image
                  src="/images/hero.jpg"
                  alt="Paciente de Bruma junto al vidrio, con la laguna al fondo"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[0.72rem] tracking-[0.22em] uppercase text-lagoon">
                Manifiesto
              </p>
              <h2 className="mt-4 font-display text-4xl tracking-tight text-balance sm:text-[3.4rem] sm:leading-[1.05]">
                No es un spa. Tampoco un quirófano de pasillo.
                <span className="italic text-lagoon">
                  {" "}
                  Es el punto donde la precisión deja de asustar.
                </span>
              </h2>
              <p className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-muted-foreground">
                En Chile hay clínicas de volumen y hay clínicas de mármol
                vacío. Bruma está en otro sitio: tiempo de sillón real, un
                plan en pesos, y una laguna que te recuerda que puedes
                respirar.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="clinica" className="mt-28 sm:mt-36">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="text-[0.72rem] tracking-[0.22em] uppercase text-lagoon">
                01 · La clínica
              </p>
              <h2 className="mt-4 font-display text-4xl tracking-tight text-balance sm:text-5xl">
                Un pabellón de vidrio
                <span className="italic text-lagoon"> sobre el agua.</span>
              </h2>
              <p className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-muted-foreground">
                Piedra teal, roble claro, una laguna y los Andes al fondo. El
                espacio no es decoración: es la primera prueba de que nadie va
                a tratarte como un número de ficha. Cuatro suites privadas.
                Estacionamiento en el edificio.
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
                  alt="Recepción de Bruma: piedra teal, roble y la laguna"
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
            <p className="text-[0.72rem] tracking-[0.22em] uppercase text-lagoon">
              02 · Tratamientos
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">
              Lo que hacemos, y lo que no.
            </h2>
            <p className="mt-5 max-w-lg text-muted-foreground leading-relaxed">
              Un menú corto. Hecho a conciencia. Cada ficha con rango de
              honorarios en pesos y un plan por escrito.
            </p>
          </Reveal>
          <div className="mt-12 divide-y divide-border border-y border-border">
            {treatments.map((t, i) => (
              <Reveal key={t.slug} delay={i * 0.03}>
                <Link
                  href={`/tratamientos/${t.slug}`}
                  className="group grid gap-3 py-7 sm:grid-cols-[4.5rem_1fr_auto] sm:items-baseline sm:gap-8"
                >
                  <span className="font-display text-lg text-lagoon">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl tracking-tight sm:text-3xl">
                      {t.name}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {t.short}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm text-lagoon transition-transform group-hover:translate-x-1">
                    {t.price.split("·")[0].trim()}
                    <ArrowRight className="size-4" />
                  </span>
                </Link>
              </Reveal>
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
                beforeAlt={`${featured.name}, antes del tratamiento`}
                afterAlt={`${featured.name}, después del tratamiento`}
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[0.72rem] tracking-[0.22em] uppercase text-lagoon">
                03 · Casos
              </p>
              <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
                {featured.name}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {featured.age} · {featured.treatment}
              </p>
              <blockquote className="mt-6 font-display text-2xl leading-snug tracking-tight text-balance sm:text-3xl">
                “{featured.quote}”
              </blockquote>
              <Button asChild variant="link" className="mt-6 px-0 text-base">
                <Link href="/casos">
                  Ver más casos
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="mt-28 sm:mt-36">
        <Container>
          <Reveal>
            <p className="text-[0.72rem] tracking-[0.22em] uppercase text-lagoon">
              04 · Equipo
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl tracking-tight sm:text-5xl">
              Cuatro doctores. Un mismo pulso.
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
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                    />
                  </div>
                  <p className="mt-4 font-display text-xl tracking-tight">
                    {m.name}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-28 sm:mt-36">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <p className="text-[0.72rem] tracking-[0.22em] uppercase text-lagoon">
                05 · Primera hora
              </p>
              <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
                Cómo es venir por primera vez.
              </h2>
              <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">
                Noventa minutos. Escáner. Un plan por escrito. Boleta para tu
                Isapre. Sin silicona en la boca.
              </p>
              <Button asChild className="mt-8 h-12 rounded-full px-6">
                <Link href="/primera-hora">Reservar esa hora</Link>
              </Button>
            </Reveal>
            <div className="space-y-0">
              {visitSteps.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.05}>
                  <div className="grid grid-cols-[4rem_1fr] gap-4 border-t border-border py-6">
                    <span className="font-display text-xl text-lagoon">
                      {s.n}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl tracking-tight">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {s.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-28 sm:mt-36">
        <Container>
          <Reveal>
            <p className="text-[0.72rem] tracking-[0.22em] uppercase text-lagoon">
              Voces
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
              Lo que se dice cuando nadie vende.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="h-full rounded-[1.5rem] border border-border bg-card p-7">
                  <blockquote className="font-display text-xl leading-snug tracking-tight">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="mt-6 text-sm text-muted-foreground">
                    <span className="block text-foreground">{t.name}</span>
                    {t.meta}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-28 sm:mt-36">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="text-[0.72rem] tracking-[0.22em] uppercase text-lagoon">
                Preguntas
              </p>
              <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
                Sin letra chica.
              </h2>
            </Reveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="font-display text-left text-xl">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      <section className="mt-28 sm:mt-36">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] tide-band px-8 py-16 text-primary-foreground sm:px-14 sm:py-20">
            <div className="relative max-w-xl">
              <p className="text-[0.72rem] tracking-[0.22em] uppercase text-lagoon">
                Vitacura
              </p>
              <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
                Un hueco esta semana, si el caso lo permite.
              </h2>
              <p className="mt-5 text-primary-foreground/75 leading-relaxed">
                Recepción confirma por teléfono o WhatsApp. Si hay dolor, no
                uses el formulario: llama.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-12 rounded-full bg-primary-foreground px-6 text-tide hover:bg-primary-foreground/90"
                >
                  <Link href="/primera-hora">Agendar hora</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-primary-foreground/30 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <a href={site.whatsapp}>WhatsApp</a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="h-24 sm:h-32" />
    </>
  );
}
