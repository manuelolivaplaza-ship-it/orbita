import Image from "next/image";
import Link from "next/link";
import { BookingForm } from "@/components/booking-form";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/reveal";
import { TariffRow } from "@/components/tariff-row";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  coverage,
  evaluationSteps,
  faqs,
  honestLine,
  protocol,
  site,
  specialties,
  tariff,
  team,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />
      <Evaluacion />
      <Arancel />
      <Isapre />
      <Especialidades />
      <Equipo />
      <FaqYReserva />
    </>
  );
}

function Hero() {
  return (
    <section className="relative -mt-[4.25rem] min-h-[100svh] overflow-hidden">
      <Image
        src="/images/sillon.jpg"
        alt="Box dental nocturno de Obsidiana: sillón de cuero oscuro iluminado por la lámpara operatoria"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/80 to-carbon/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-carbon/40" />

      <Container className="relative flex min-h-[100svh] flex-col justify-end pb-0 pt-28">
        <div className="max-w-2xl pb-10 sm:pb-14">
          <p className="kicker">Obsidiana · Vitacura</p>
          <h1 className="mt-5 font-display text-[clamp(2.4rem,6vw,4.6rem)] leading-[0.95] tracking-[-0.02em] text-balance">
            Odontología de especialista,{" "}
            <em className="italic text-champagne">sin apuro ni sorpresas.</em>
          </h1>
          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-hueso/80">
            Diagnóstico con scanner, plan fotografiado y presupuesto por
            escrito. El mismo especialista te acompaña de principio a fin.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              asChild
              className="h-12 rounded-none px-6 text-[0.72rem] tracking-[0.16em] uppercase"
            >
              <Link href="/agenda">Agendar evaluación</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-none border-hueso/25 bg-transparent px-6 text-[0.72rem] tracking-[0.16em] text-hueso uppercase hover:bg-hueso/5"
            >
              <Link href="#tratamientos-arancel">Ver valores</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            +{site.years} años en Vitacura · +{site.patients} pacientes ·{" "}
            {site.recommend} nos recomienda · {site.specialists} especialistas,
            siempre los mismos
          </p>
        </div>

        <div className="grid border-t border-hueso/15 sm:grid-cols-3">
          {protocol.map((p, i) => (
            <div
              key={p.k}
              className={
                i === 0
                  ? "border-hueso/15 py-6 sm:border-r sm:pr-8"
                  : i === 1
                    ? "border-hueso/15 py-6 sm:border-r sm:px-8"
                    : "border-hueso/15 py-6 sm:pl-8"
              }
            >
              <p className="kicker">
                {p.k} · {p.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-hueso/75">
                {p.text}
              </p>
            </div>
          ))}
        </div>
        <p className="border-t border-hueso/15 py-3 text-[0.72rem] tracking-[0.08em] text-muted-foreground">
          Atención con hora o por urgencia · Convenios con las principales
          isapres · Boleta reembolsable
        </p>
      </Container>
    </section>
  );
}

function Evaluacion() {
  return (
    <section
      id="primera-evaluacion"
      className="band-hueso py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="kicker">Primera evaluación · 45 min</p>
              <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.05] tracking-tight">
                Qué pasa el día 1.
              </h2>
              <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-carbon/70">
                Scanner, radiografía, diagnóstico en palabras simples y un
                presupuesto por escrito. {honestLine}
              </p>
              <p className="mt-8 font-display text-4xl tabular tracking-tight">
                $32.900
              </p>
              <p className="mt-1 text-sm text-carbon/60">
                Se descuenta si partes el tratamiento.
              </p>
              <Button
                asChild
                className="mt-8 h-12 rounded-none bg-carbon px-6 text-[0.72rem] tracking-[0.16em] text-hueso uppercase hover:bg-carbon/90"
              >
                <Link href="/primera-evaluacion">Ver el protocolo</Link>
              </Button>
            </div>
            <ol className="divide-y divide-carbon/12 border-y border-carbon/12">
              {evaluationSteps.map((s) => (
                <li key={s.n} className="grid grid-cols-[3.5rem_1fr] gap-4 py-5">
                  <span className="font-display text-xl text-[#8a6e52] tabular">
                    {s.n}
                  </span>
                  <div>
                    <p className="font-display text-xl tracking-tight">
                      {s.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-carbon/70">
                      {s.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Arancel() {
  return (
    <section id="tratamientos-arancel" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="kicker">Carta de prestaciones</p>
              <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.05] tracking-tight">
                Valores desde, en pesos.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Referenciales. El valor final se confirma tras diagnóstico. Sin
              sorpresas.
            </p>
          </div>
          <div className="mt-12 border-t border-line">
            {tariff.map((item) => (
              <TariffRow key={item.slug} item={item} />
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Valores referenciales; el valor final se confirma tras diagnóstico.
            Sin sorpresas.{" "}
            <Link href="/tratamientos" className="text-champagne hover:underline">
              Ver ficha de cada prestación
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

function Isapre() {
  return (
    <section id="isapre-reembolso" className="band-hueso py-20 sm:py-24">
      <Container>
        <Reveal>
          <p className="kicker">Cómo pagas</p>
          <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.05] tracking-tight">
            Fonasa, isapre o particular.
          </h2>
          <div className="mt-12 grid border border-carbon/12 md:grid-cols-3">
            {coverage.map((c) => (
              <article
                key={c.name}
                className="border-carbon/12 p-7 md:border-r md:last:border-r-0"
              >
                <p className="text-[0.68rem] tracking-[0.14em] text-[#8a6e52] uppercase">
                  {c.kicker}
                </p>
                <h3 className="mt-3 font-display text-2xl tracking-tight">
                  {c.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-carbon/70">
                  {c.text}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Especialidades() {
  return (
    <section id="especialidades-reales" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="kicker">Oficio</p>
              <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.05] tracking-tight">
                Cuatro especialidades. No doce genéricas.
              </h2>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-muted-foreground">
                El box está pensado para esto. Si tu caso pide otra cosa, te
                lo decimos — y te derivamos con nombre y apellido.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2">
                {specialties.map((s) => (
                  <Link
                    key={s.n}
                    href={s.href}
                    className="border-t border-line py-8 pr-8 transition-colors duration-160 last:border-b hover:bg-foreground/[0.03] sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
                  >
                    <p className="font-display text-sm text-champagne tabular">
                      {s.n}
                    </p>
                    <h3 className="mt-3 font-display text-2xl tracking-tight">
                      {s.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {s.text}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-20 grid gap-3 md:grid-cols-12">
            <div className="relative aspect-[16/9] md:col-span-7 md:aspect-auto md:min-h-[22rem]">
              <Image
                src="/images/pasillo.jpg"
                alt="Pasillo nocturno de la clínica, con un box iluminado al fondo"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 58vw, 100vw"
              />
            </div>
            <div className="relative aspect-[3/4] md:col-span-5 md:aspect-auto">
              <Image
                src="/images/lampara.jpg"
                alt="Detalle de la lámpara operatoria, brazo articulado sobre el box"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Equipo() {
  return (
    <section id="equipo" className="band-hueso py-20 sm:py-28">
      <Container>
        <Reveal>
          <p className="kicker">Los mismos tres</p>
          <h2 className="mt-4 max-w-xl font-display text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.05] tracking-tight">
            3 especialistas, siempre los mismos — no rotamos tu caso.
          </h2>
          <div className="mt-12 grid border border-carbon/12 md:grid-cols-3">
            {team.map((person) => (
              <article
                key={person.slug}
                className="border-carbon/12 p-7 md:border-r md:last:border-r-0"
              >
                <p className="text-[0.68rem] tracking-[0.14em] text-[#8a6e52] uppercase">
                  {person.creds}
                </p>
                <h3 className="mt-4 font-display text-2xl tracking-tight">
                  {person.name}
                </h3>
                <p className="mt-2 text-sm text-carbon/70">{person.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-carbon/70">
                  {person.bio}
                </p>
              </article>
            ))}
          </div>
          <Link
            href="/especialistas"
            className="mt-8 inline-block text-sm tracking-[0.08em] text-carbon/80 uppercase hover:text-teal"
          >
            Conocer al equipo →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

function FaqYReserva() {
  return (
    <section id="reserva" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="kicker">Preguntas</p>
            <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.05] tracking-tight">
              Lo que preguntan antes de agendar.
            </h2>
            <Accordion type="single" collapsible className="mt-8">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`} className="border-line">
                  <AccordionTrigger className="py-5 text-left font-display text-lg hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="lg:col-span-7">
            <p className="kicker">Agenda</p>
            <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.05] tracking-tight">
              Pide tu evaluación.
            </h2>
            <p className="mt-4 mb-8 max-w-md text-sm leading-relaxed text-muted-foreground">
              Recepción confirma la hora el mismo día. Si hay dolor, no uses
              este formulario: llama al {site.phone}.
            </p>
            <BookingForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
