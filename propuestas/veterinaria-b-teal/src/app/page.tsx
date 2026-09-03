import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { HoursLive } from "@/components/hours-live";
import { Meander } from "@/components/meander";
import { Reveal } from "@/components/reveal";
import {
  faqs,
  services,
  site,
  stats,
  team,
  testimonials,
  visitSteps,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden">
        <Image
          src="/images/facade.jpg"
          alt="Fachada de Estuario al amanecer, sobre el Calle-Calle, con arrayanes y helechos"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/45 to-deep/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep/55 via-transparent to-transparent" />
        <Container className="relative flex min-h-[100svh] flex-col justify-end pb-16 pt-36 sm:pb-20">
          <p className="text-[0.72rem] tracking-[0.28em] uppercase text-moss">
            Estuario · {site.neighborhood}, {site.city}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[3.05rem] leading-[0.95] tracking-tight text-primary-foreground text-balance sm:text-7xl lg:text-[6rem]">
            Hospital veterinario.
            <span className="block italic text-moss">
              Orilla del Calle-Calle.
            </span>
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-primary-foreground/80">
            UCI las 24 horas. Consultas con hora. Un patio de arrayanes para
            cuando hay que esperar.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              asChild
              className="h-12 rounded-full bg-primary-foreground px-6 text-deep hover:bg-primary-foreground/90"
            >
              <Link href="/primera-hora">Agendar hora</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-primary-foreground/30 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="/urgencias">Duele ahora</Link>
            </Button>
          </div>
          <HoursLive onDark className="mt-6" />
          <a
            href="#dos-orillas"
            className="mt-10 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.2em] uppercase text-primary-foreground/70"
          >
            Bajar
            <ArrowDown className="size-3.5" />
          </a>
        </Container>
      </section>

      <section id="dos-orillas" className="grid lg:grid-cols-2">
        <Link
          href="/urgencias"
          className="group relative min-h-[22rem] overflow-hidden sm:min-h-[28rem]"
        >
          <Image
            src="/images/noche.jpg"
            alt="El pabellón de Estuario de noche, sobre el agua, con lluvia"
            fill
            className="object-cover transition duration-700 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
            <p className="text-[0.7rem] tracking-[0.22em] uppercase text-moss">
              Orilla de noche
            </p>
            <h2 className="mt-3 font-display text-4xl text-primary-foreground sm:text-5xl">
              Duele ahora.
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
              Puerta de urgencias las 24 horas. Estabilizamos primero. La cifra,
              después.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm text-primary-foreground">
              Urgencias 24 h
              <ArrowRight className="size-4" />
            </span>
          </div>
        </Link>
        <Link
          href="/primera-hora"
          className="group relative min-h-[22rem] overflow-hidden sm:min-h-[28rem]"
        >
          <Image
            src="/images/reception.jpg"
            alt="Recepción de Estuario: madera, sofás teal y lluvia en el vidrio"
            fill
            className="object-cover transition duration-700 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
            <p className="text-[0.7rem] tracking-[0.22em] uppercase text-moss">
              Orilla de día
            </p>
            <h2 className="mt-3 font-display text-4xl text-primary-foreground sm:text-5xl">
              Hay hora.
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
              Vacuna, control, un gato que dejó de comer. Treinta minutos
              reales. El tutor se queda adentro.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm text-primary-foreground">
              Agendar
              <ArrowRight className="size-4" />
            </span>
          </div>
        </Link>
      </section>

      <section className="river-band text-primary-foreground">
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
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.8rem]">
                <Image
                  src="/images/perro.jpg"
                  alt="Golden retriever en consulta, con las manos de un veterinario sobre el pecho"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="kicker">Manifiesto</p>
              <h2 className="mt-4 font-display text-4xl tracking-tight text-balance sm:text-[3.35rem] sm:leading-[1.05]">
                En el sur un animal no espera
                <span className="italic text-moss"> a que escampe.</span>
              </h2>
              <p className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-muted-foreground">
                Estuario es hospital de verdad —pabellón, laboratorio,
                internación— con la calma de un edificio que mira el
                Calle-Calle. Ni clínica de volumen ni boutique de Instagram.
                Un pulso, un tutor, un parte a las 18:30.
              </p>
              <Button asChild variant="link" className="mt-4 px-0 text-base">
                <Link href="/clinica">
                  Conocer el hospital
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
            <p className="kicker">El edificio</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">
              Madera, vidrio, lluvia.
              <span className="italic text-moss"> Medicina adentro.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <Reveal className="md:col-span-2">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/images/patio.jpg"
                  alt="Patio de arrayanes de Estuario, con lluvia y un banco de teak"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 66vw, 100vw"
                />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Patio de arrayanes. Cubierto. Para esperar que escampe el
                animal, no tú.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="grid gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/images/pasillo.jpg"
                  alt="Pasillo de madera de Estuario, con luz del río al fondo"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/images/pabellon.jpg"
                  alt="Pabellón quirúrgico de Estuario, vacío y en calma"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="mt-28 sm:mt-36">
        <Container>
          <Reveal>
            <p className="kicker">Servicios</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">
              Lo que hacemos aquí, no en otra ciudad.
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
              Valdivia está lejos de Santiago. Por eso el laboratorio, el
              pabellón y la UCI están en el mismo edificio.
            </p>
          </Reveal>
          <div className="mt-12 divide-y divide-border border-y border-border">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.02}>
                <Link
                  href={`/servicios/${s.slug}`}
                  className="group grid gap-2 py-7 sm:grid-cols-[4.5rem_1fr_auto] sm:items-baseline sm:gap-8"
                >
                  <span className="font-display text-lg text-moss">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl tracking-tight sm:text-3xl">
                      {s.name}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                      {s.short}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm text-moss transition group-hover:translate-x-1">
                    Ver
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
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="kicker">Medicina felina</p>
              <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
                Otra puerta.
                <span className="italic text-moss"> Otro olor.</span>
              </h2>
              <p className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-muted-foreground">
                Un gato que entra por un pasillo de perros ya llegó
                taquicárdico. Sala de espera propia, consultorio propio,
                feromonas, tiempo extra. Paz atiende gatos como se atiende a
                quien eligió no ser social.
              </p>
              <Button asChild variant="link" className="mt-4 px-0 text-base">
                <Link href="/servicios/felinos">
                  Consulta felina
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem]">
                <Image
                  src="/images/gato.jpg"
                  alt="Gato atigrado plateado en el consultorio felino, mirando la lluvia"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="mt-28 sm:mt-36">
        <Container>
          <Reveal>
            <p className="kicker">Equipo</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">
              Cinco médicos. Un hospital que no cierra.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {team.map((m, i) => (
              <Reveal key={m.slug} delay={i * 0.04}>
                <Link href="/equipo" className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[1.4rem]">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                      sizes="(min-width: 1024px) 18vw, 50vw"
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

      <section className="relative mt-28 min-h-[32rem] overflow-hidden sm:mt-36 sm:min-h-[38rem]">
        <Image
          src="/images/uci.jpg"
          alt="UCI de Estuario de noche, con luz teal suave"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/70 to-deep/20" />
        <Container className="relative flex min-h-[32rem] items-end py-16 sm:min-h-[38rem]">
          <Reveal>
            <p className="text-[0.7rem] tracking-[0.22em] uppercase text-moss">
              Internación
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl tracking-tight text-primary-foreground sm:text-6xl">
              Alguien despierto
              <span className="italic text-moss"> a las 3:10.</span>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-primary-foreground/75">
              Seis boxes. Dos de UCI. Un parte a las 9 y otro a las 18:30.
              Visitas. Si un tutor necesita quedarse, se arma una silla.
            </p>
            <Button
              asChild
              className="mt-8 h-12 rounded-full bg-primary-foreground px-6 text-deep hover:bg-primary-foreground/90"
            >
              <Link href="/hospitalizacion">La internación</Link>
            </Button>
          </Reveal>
        </Container>
      </section>

      <section className="mt-28 sm:mt-36">
        <Container>
          <Reveal>
            <p className="kicker">Tutores</p>
            <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
              Lo que se cuenta después.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <figure className="h-full rounded-[1.5rem] border border-border bg-card p-7">
                  <blockquote className="font-display text-xl leading-snug tracking-tight sm:text-[1.35rem]">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="mt-6 text-sm text-muted-foreground">
                    <span className="text-foreground">{t.name}</span>
                    <span className="mt-0.5 block">{t.pet}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-28 sm:mt-36">
        <Container>
          <Reveal>
            <p className="kicker">La primera hora</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">
              Cómo se entra a Estuario.
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {visitSteps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.04}>
                <li>
                  <p className="font-display text-2xl text-moss">{step.n}</p>
                  <h3 className="mt-3 font-display text-xl tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="mt-28 sm:mt-36">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="kicker">Preguntas</p>
              <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
                Lo que se pregunta
                <span className="italic text-moss"> bajo la lluvia.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <Accordion type="single" collapsible>
                {faqs.map((f, i) => (
                  <AccordionItem key={f.q} value={`f-${i}`}>
                    <AccordionTrigger className="text-left font-display text-lg">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="leading-relaxed text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="mt-28 mb-8 sm:mt-36">
        <Container>
          <div className="overflow-hidden rounded-[2rem] river-band px-8 py-14 text-primary-foreground sm:px-14 sm:py-16">
            <Meander className="mb-8 h-5 w-48 text-moss" />
            <h2 className="max-w-xl font-display text-4xl tracking-tight sm:text-5xl">
              Si duele, ven ahora.
              <span className="italic text-moss"> Si no, ven igual.</span>
            </h2>
            <p className="mt-5 max-w-md text-primary-foreground/75">
              {site.fullAddress}. Estacionamiento cubierto. Colectivo a Isla
              Teja. WhatsApp de recepción en horario de consultas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="h-12 rounded-full bg-primary-foreground px-6 text-deep hover:bg-primary-foreground/90"
              >
                <Link href="/primera-hora">Agendar hora</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-primary-foreground/30 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href={site.phoneHref}>Llamar {site.phone}</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
