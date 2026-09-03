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

const marquee = [
  "Diagnóstico 3D",
  "Plan por escrito",
  "Cifra en pesos",
  "Reembolso isapre",
  "Sin silicona",
  "Vitacura",
];

export default function Home() {
  const featured = cases[0];

  return (
    <>
      <section className="relative overflow-hidden pt-4 sm:pt-8">
        <Container>
          <div className="grid items-end gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <div className="pb-2 lg:pb-8">
              <p className="text-[0.72rem] tracking-[0.24em] uppercase text-tide">
                Cian · {site.neighborhood}, Santiago
              </p>
              <h1 className="mt-5 font-display text-[2.7rem] leading-[0.98] tracking-tight text-balance sm:text-6xl lg:text-[5rem]">
                Ver para
                <span className="block text-primary">decidir.</span>
              </h1>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-muted-foreground">
                El diagnóstico aparece en pantalla. El plan, en pesos. Una
                clínica en Vitacura donde la claridad no es un eslogan: es el
                protocolo.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild className="h-12 rounded-xl px-6">
                  <Link href="/hora">Agendar primera visita</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-xl px-6"
                >
                  <Link href="/casos">Ver resultados</Link>
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                {site.rating} en Google · {site.reviews} reseñas · {site.phone}
              </p>
            </div>
            <div className="relative">
              <div className="scan-frame relative aspect-[3/4] overflow-hidden rounded-[1.6rem] sm:rounded-[1.9rem] lg:aspect-[4/5]">
                <Image
                  src="/images/hero.jpg"
                  alt="Paciente en Cian, con la cordillera de los Andes al fondo"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                />
              </div>
              <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-border/70 bg-card/90 p-4 shadow-sm backdrop-blur-md sm:left-auto sm:right-[-0.8rem] sm:w-64">
                <p className="font-display text-lg leading-snug">
                  Primera visita con escáner 3D
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Plan por escrito. $49.000. Se descuenta si sigues.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="mt-20 overflow-hidden border-y border-border bg-mist/60 py-3">
        <div className="marquee text-[0.72rem] tracking-[0.22em] uppercase text-tide">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-10">
              {marquee.map((item) => (
                <span key={`${copy}-${item}`} className="flex items-center gap-10">
                  {item}
                  <span className="inline-block size-1 rounded-full bg-cian" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="mt-20 sm:mt-28">
        <Container>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[1.4rem] bg-border md:grid-cols-4">
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
              <p className="text-[0.72rem] tracking-[0.22em] uppercase text-tide">
                01 · La clínica
              </p>
              <h2 className="mt-4 font-display text-4xl tracking-tight text-balance sm:text-5xl">
                Un canal de agua.
                <span className="text-primary"> Un protocolo.</span>
              </h2>
              <p className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-muted-foreground">
                Piedra, vidrio, la cordillera al este. El espacio no es
                decoración: es la primera prueba de que nadie va a tratarte
                como un número de ficha. Cuatro suites privadas. Un equipo que
                se presenta por su nombre.
              </p>
              <Button asChild variant="link" className="mt-4 px-0 text-base">
                <Link href="/clinica">
                  Conocer el espacio
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
            <Reveal delay={80}>
              <div className="relative aspect-[16/11] overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/images/reception.jpg"
                  alt="Recepción de Cian: piedra, madera y un canal de agua cian"
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
            <p className="text-[0.72rem] tracking-[0.22em] uppercase text-tide">
              02 · Tratamientos
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">
              Un menú corto. Hecho a conciencia.
            </h2>
            <p className="mt-5 max-w-lg text-muted-foreground">
              No cubrimos veintidós especialidades para parecer grandes.
              Hacemos bien lo que firmamos.
            </p>
          </Reveal>
          <div className="mt-12 divide-y divide-border border-y border-border">
            {treatments.map((t, i) => (
              <Reveal key={t.slug} delay={i * 40}>
                <Link
                  href={`/tratamientos/${t.slug}`}
                  className="group grid gap-3 py-6 sm:grid-cols-[4.5rem_1fr_auto] sm:items-baseline sm:gap-8"
                >
                  <span className="font-display text-sm tracking-[0.16em] text-cian">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="font-display text-2xl tracking-tight transition-colors group-hover:text-primary sm:text-3xl">
                      {t.name}
                    </span>
                    <span className="mt-1 block max-w-xl text-sm leading-relaxed text-muted-foreground">
                      {t.short}
                    </span>
                  </span>
                  <span className="text-sm text-tide sm:text-right">
                    {t.price.split("·")[0].trim()}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Button asChild variant="outline" className="mt-8 h-11 rounded-xl">
            <Link href="/tratamientos">Ver todos los tratamientos</Link>
          </Button>
        </Container>
      </section>

      <section className="mt-28 sm:mt-36">
        <Container>
          <div className="overflow-hidden rounded-[1.8rem] bg-navy text-background">
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <Image
                  src="/images/scanner.jpg"
                  alt="Escáner intraoral 3D en Cian"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                <p className="text-[0.72rem] tracking-[0.22em] uppercase text-cian">
                  03 · Tecnología
                </p>
                <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
                  Lo que no se ve, se escanea.
                </h2>
                <p className="mt-5 max-w-md leading-relaxed text-background/70">
                  Cero moldes de silicona. Escáner, CBCT y diseño digital. El
                  paciente mira la misma pantalla que el doctor. Esa es la
                  diferencia entre cotizar y diagnosticar.
                </p>
                <Button
                  asChild
                  className="mt-8 h-12 w-fit rounded-xl bg-cian text-navy hover:bg-cian/90"
                >
                  <Link href="/tecnologia">El protocolo digital</Link>
                </Button>
              </div>
            </div>
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
            <Reveal delay={80}>
              <p className="text-[0.72rem] tracking-[0.22em] uppercase text-tide">
                04 · Casos
              </p>
              <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
                {featured.name}
              </h2>
              <p className="mt-2 text-sm text-tide">{featured.treatment}</p>
              <blockquote className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
                “{featured.quote}”
              </blockquote>
              <Button asChild variant="link" className="mt-4 px-0 text-base">
                <Link href="/casos">
                  Más resultados
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
            <p className="text-[0.72rem] tracking-[0.22em] uppercase text-tide">
              05 · Equipo
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl tracking-tight sm:text-5xl">
              Cuatro doctores. Un criterio.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 60}>
                <Link href="/equipo" className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[1.3rem]">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(min-width: 1024px) 22vw, 50vw"
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
          <Reveal>
            <p className="text-[0.72rem] tracking-[0.22em] uppercase text-tide">
              06 · Primera visita
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">
              Cómo es una hora en Cian.
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-[1.4rem] bg-border sm:grid-cols-2 lg:grid-cols-5">
            {visitSteps.map((step) => (
              <li key={step.n} className="bg-card p-6 sm:p-7">
                <p className="font-display text-cian">{step.n}</p>
                <h3 className="mt-3 font-display text-xl tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
          <Button asChild className="mt-8 h-12 rounded-xl px-6">
            <Link href="/primera-visita">Preparar la visita</Link>
          </Button>
        </Container>
      </section>

      <section className="mt-28 sm:mt-36">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="rounded-[1.4rem] border border-border bg-card p-7"
              >
                <p className="text-[1.05rem] leading-relaxed">“{t.text}”</p>
                <footer className="mt-6">
                  <p className="font-display text-lg">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.meta}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-28 sm:mt-36">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-[0.72rem] tracking-[0.22em] uppercase text-tide">
                Preguntas
              </p>
              <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
                Lo que siempre preguntan.
              </h2>
              <p className="mt-5 max-w-sm text-muted-foreground">
                Isapre, cuotas, dolor, años sin ir. Las respuestas, sin letra
                chica.
              </p>
              <Button asChild variant="outline" className="mt-6 h-11 rounded-xl">
                <Link href="/reembolso">Cómo funciona el reembolso</Link>
              </Button>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="text-left font-display text-lg">
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

      <section className="mt-28 mb-8 sm:mt-36">
        <Container>
          <div className="relative overflow-hidden rounded-[1.8rem] bg-primary px-8 py-14 text-primary-foreground sm:px-14 sm:py-20">
            <div className="absolute inset-x-0 top-0 h-px bg-cian" />
            <p className="text-[0.72rem] tracking-[0.22em] uppercase text-cian">
              Vitacura
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl tracking-tight sm:text-5xl">
              Si llevas años evitando el dentista, este es el lugar para
              volver.
            </h2>
            <p className="mt-5 max-w-md text-primary-foreground/75">
              No te vamos a felicitar por el coraje. Te vamos a mostrar qué
              hay, qué no, y cuánto cuesta.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="h-12 rounded-xl bg-cian px-6 text-navy hover:bg-cian/90"
              >
                <Link href="/hora">Agendar hora</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-xl border-primary-foreground/20 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href={site.whatsapp}>Escribir por WhatsApp</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
