import Link from "next/link";
import { ButtonLink } from "@/components/button";
import { Container, Section } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { LightNow } from "@/components/light-now";
import { Marquee } from "@/components/marquee";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { coaches, plans, principles, programs, spaces, stats } from "@/lib/data";
import { clp } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <Container wide className="grid items-end gap-12 pt-16 pb-12 lg:grid-cols-12 lg:pt-24 lg:pb-16">
          <div className="lg:col-span-7">
            <p className="kicker">Lo Barnechea · Santiago</p>
            <h1 className="mt-6 font-display text-[3.1rem] leading-[0.95] tracking-[-0.03em] sm:text-7xl lg:text-[6.4rem]">
              El cuerpo,
              <br />
              a plena{" "}
              <em className="text-copper">luz.</em>
            </h1>
            <p className="mt-8 max-w-md text-[1.08rem] leading-relaxed text-ink-soft">
              Un club de entrenamiento con salas de yeso claro, cobre chileno y
              ventanas al valle. Clases chicas. Fuerza precisa. Recuperación de
              verdad.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/visita">Reservar visita</ButtonLink>
              <ButtonLink href="/entrenamiento" variant="ghost">
                Ver el método
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-5 lg:pb-4">
            <LightNow />
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
              {stats.map((item) => (
                <div key={item.label}>
                  <dt className="sr-only">{item.label}</dt>
                  <dd className="font-display text-3xl tracking-tight sm:text-4xl">
                    {item.value}
                    {item.unit ? (
                      <span className="ml-1 text-lg text-ink-soft">{item.unit}</span>
                    ) : null}
                  </dd>
                  <p className="mt-1 max-w-[10rem] text-[0.78rem] leading-snug text-ink-soft">
                    {item.label}
                  </p>
                </div>
              ))}
            </dl>
          </div>
        </Container>

        <Container wide>
          <Photo
            src="/images/salon.jpg"
            alt="Salón principal de ALBA con luz de mañana, mancuernas de cobre y un reformer al fondo"
            className="aspect-[16/9] min-h-[280px]"
            sizes="100vw"
            priority
            caption="El salón, 8:12 de la mañana. El día entra por el este."
          />
        </Container>
      </section>

      <Marquee
        words={["Fuerza", "Reforma", "Pulso", "Tierra", "Cerro", "Frío", "Café"]}
      />

      <Section>
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="kicker">El club</p>
            <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
              No es un gimnasio oscuro.
            </h2>
          </Reveal>
          <Reveal delay={1} className="lg:col-span-7">
            <p className="text-[1.15rem] leading-relaxed text-ink">
              ALBA nace en Lo Barnechea como un lugar para entrenar con la luz
              del valle. Patricia León lo abrió porque se cansó de salas sin
              ventanas, música a todo volumen y planes que no miran a nadie a
              los ojos.
            </p>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
              Aquí las clases son chicas a propósito. El cobre es de Chile. El
              café huele a lúcuma cuando hay. Y el trabajo —fuerza, reforma,
              cerro— se toma en serio, sin teatro.
            </p>
            <blockquote className="mt-10 border-l-2 border-copper pl-5 font-display text-2xl italic leading-snug tracking-tight">
              “La luz no es decoración. Es parte del entrenamiento.”
              <cite className="mt-3 block font-sans text-sm not-italic tracking-normal text-ink-soft">
                Patricia León, directora
              </cite>
            </blockquote>
          </Reveal>
        </Container>

        <Container className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item) => (
            <Reveal key={item.n}>
              <article className="h-full border border-line bg-cream p-6">
                <p className="font-display text-sm text-copper">{item.n}</p>
                <h3 className="mt-6 font-display text-2xl tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </Container>
      </Section>

      <section className="pb-8">
        <Container className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="kicker">Recorrido</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
              Las salas
            </h2>
          </div>
          <Link
            href="/espacios"
            className="hidden text-[0.72rem] font-medium uppercase tracking-[0.18em] text-copper sm:inline link-underline"
          >
            Ver todos los espacios
          </Link>
        </Container>
        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-10 sm:px-8 lg:px-12">
          {spaces.slice(0, 6).map((space) => (
            <Link
              key={space.slug}
              href="/espacios"
              className="w-[78vw] shrink-0 snap-start sm:w-[46vw] lg:w-[28vw]"
            >
              <Photo
                src={space.image}
                alt={space.name}
                className="aspect-[4/5]"
                sizes="(min-width: 1024px) 28vw, (min-width: 640px) 46vw, 78vw"
              />
              <p className="mt-4 text-[0.68rem] uppercase tracking-[0.18em] text-copper">
                {space.kicker}
              </p>
              <h3 className="mt-1 font-display text-3xl tracking-tight">
                {space.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {space.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <Section className="bg-cream">
        <Container>
          <Reveal>
            <p className="kicker">Método</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">
              Seis prácticas. Un mismo criterio.
            </h2>
          </Reveal>
          <div className="mt-14 divide-y divide-line border-y border-line">
            {programs.map((program) => (
              <Link
                key={program.slug}
                href="/entrenamiento"
                className="group grid items-center gap-4 py-7 sm:grid-cols-12"
              >
                <p className="kicker sm:col-span-2">{program.duration}</p>
                <h3 className="font-display text-3xl tracking-tight group-hover:text-copper sm:col-span-4">
                  {program.name}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft sm:col-span-5">
                  {program.lead}
                </p>
                <p className="text-[0.72rem] uppercase tracking-[0.16em] text-ink-soft sm:col-span-1 sm:text-right">
                  {program.cupo} pax
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/entrenamiento" variant="ghost">
              Cómo entrenamos
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Photo
              src="/images/entrenamiento.jpg"
              alt="Dos personas entrenando con kettlebells en una sala llena de sol"
              className="aspect-[4/5]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </Reveal>
          <Reveal delay={1} className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
            <p className="kicker">El trabajo</p>
            <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
              Se ve lo que se hace.
            </h2>
            <p className="mt-6 text-[1.05rem] leading-relaxed text-ink-soft">
              No hay espejos de muro a muro ni recetas milagrosas. Hay un plan,
              un cupo chico y alguien que te corrige. El resto —la luz, el
              silencio, el café— está para que quieras volver mañana.
            </p>
            <div className="mt-8">
              <ButtonLink href="/clases" variant="ghost">
                Horario de clases
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="kicker">Quienes te ven</p>
              <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
                El equipo
              </h2>
            </div>
            <Link
              href="/equipo"
              className="hidden text-[0.72rem] font-medium uppercase tracking-[0.18em] text-copper sm:inline link-underline"
            >
              Conocer al equipo
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {coaches.map((coach) => (
              <Link key={coach.slug} href="/equipo" className="group">
                <Photo
                  src={coach.image}
                  alt={`Retrato de ${coach.name}`}
                  className="aspect-[3/4]"
                  sizes="(min-width: 1024px) 18vw, (min-width: 640px) 45vw, 100vw"
                />
                <h3 className="mt-4 font-display text-xl tracking-tight group-hover:text-copper">
                  {coach.name}
                </h3>
                <p className="mt-1 text-sm text-ink-soft">{coach.focus}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container>
          <Reveal>
            <p className="kicker">Pertenecer</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
              Membresías, en claro.
            </h2>
            <p className="mt-4 max-w-lg text-ink-soft">
              Sin matrícula de incorporación. Precios en pesos chilenos. Mes a
              mes, o un 10% menos al pagar el trimestre.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {plans.map((plan) => (
              <article
                key={plan.slug}
                className={
                  plan.highlight
                    ? "flex flex-col bg-ink p-7 text-cream"
                    : "flex flex-col border border-line bg-paper p-7"
                }
              >
                <p
                  className={
                    plan.highlight
                      ? "text-[0.68rem] font-medium uppercase tracking-[0.22em] text-copper-soft"
                      : "kicker"
                  }
                >
                  {plan.name}
                </p>
                <p className="mt-6 font-display text-4xl tracking-tight">
                  {clp(plan.price)}
                </p>
                <p
                  className={
                    plan.highlight
                      ? "mt-1 text-sm text-cream/60"
                      : "mt-1 text-sm text-ink-soft"
                  }
                >
                  {plan.period}
                </p>
                <p
                  className={
                    plan.highlight
                      ? "mt-5 text-sm leading-relaxed text-cream/75"
                      : "mt-5 text-sm leading-relaxed text-ink-soft"
                  }
                >
                  {plan.lead}
                </p>
                <ul
                  className={
                    plan.highlight
                      ? "mt-6 flex-1 space-y-2 text-sm text-cream/80"
                      : "mt-6 flex-1 space-y-2 text-sm text-ink-soft"
                  }
                >
                  {plan.includes.slice(0, 4).map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/membresias" variant="ghost">
              Comparar planes
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Photo
              src="/images/exterior.jpg"
              alt="Fachada de ALBA al atardecer, con olivos, travertino y los Andes al fondo"
              className="aspect-[16/10]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </Reveal>
          <Reveal delay={1}>
            <p className="kicker">Dónde estamos</p>
            <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
              Av. El Rodeo 12890,
              <br />
              Lo Barnechea.
            </h2>
            <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-ink-soft">
              Veinte minutos desde Escuela Militar. Estacionamiento en el
              recinto. El café abre con la primera clase. Si vienes en bici, hay
              ganchos de cobre junto a la terraza.
            </p>
            <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-ink-soft">Lunes a viernes</dt>
                <dd className="mt-1 font-display text-xl">5:45 – 21:30</dd>
              </div>
              <div>
                <dt className="text-ink-soft">Sábado</dt>
                <dd className="mt-1 font-display text-xl">8:00 – 18:00</dd>
              </div>
              <div>
                <dt className="text-ink-soft">Domingo</dt>
                <dd className="mt-1 font-display text-xl">9:00 – 14:00</dd>
              </div>
              <div>
                <dt className="text-ink-soft">WhatsApp</dt>
                <dd className="mt-1 font-display text-xl">+56 9 4218 7703</dd>
              </div>
            </dl>
          </Reveal>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
