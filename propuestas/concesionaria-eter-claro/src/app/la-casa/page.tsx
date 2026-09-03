import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "La casa",
  description:
    "Casa ETER en Lo Barnechea: un showroom de luz, piedra y silencio. Visitas con cita.",
};

const people = [
  {
    name: "Elena Vidal",
    role: "Directora de casa",
    note: "Recibe, ordena el tiempo y decide qué entra al piso.",
  },
  {
    name: "Tomás Herrera",
    role: "Curador de piezas",
    note: "Busca, prueba y deja ir. Nada llega por volumen.",
  },
];

const principles = [
  {
    title: "Pocas, enteras",
    text: "Nunca más de nueve. Si no hay espacio en la luz, no hay auto. Preferimos una lista de espera a un patio lleno.",
  },
  {
    title: "El crédito no se grita",
    text: "Estructuramos pie y cuotas con tu banco. No vendemos CAE: ordenamos el camino para que la pieza llegue limpia, con transferencia y permiso al día.",
  },
  {
    title: "La montaña como filtro",
    text: "Lo Barnechea no es un accidente. Quien sube hasta aquí ya decidió no comprar entre neón y globos. El valle hace el resto.",
  },
];

export default function LaCasaPage() {
  return (
    <>
      <section className="relative h-[70svh] min-h-[480px] overflow-hidden bg-ink text-paper">
        <Image
          src="/images/showroom.jpg"
          alt="Interior de Casa ETER, con un sedán blanco y jardín de niebla"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/10 to-ink/25" />
        <div className="relative mx-auto flex h-full max-w-[1440px] flex-col justify-end px-6 pb-12 md:px-10 lg:px-16">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-paper/70">
            Lo Barnechea · Santiago
          </p>
          <h1 className="mt-4 font-display text-6xl font-light tracking-tight md:text-8xl">
            La casa
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32 lg:px-16">
        <Reveal className="md:col-span-6">
          <h2 className="font-display text-5xl font-light leading-[1.05] tracking-tight md:text-6xl">
            Una sala. Una hora. Un auto.
          </h2>
        </Reveal>
        <Reveal className="md:col-span-5 md:col-start-8" delay={100}>
          <p className="text-lg leading-relaxed text-ink-soft">
            ETER nace de una idea simple: el automóvil de lujo en Chile se volvió
            ruido. Nosotros abrimos una casa en la ladera, con vidrio hacia el
            valle, y dejamos que la luz haga el trabajo que otros hacen con
            globos y financiamiento en letra chica.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Curamos eléctricas, una híbrida de montaña y, cuando aparece, un
            clásico que merezca el piso. No representamos una marca. Representamos
            una atmósfera.
          </p>
        </Reveal>
      </section>

      <section className="grid md:grid-cols-2">
        <div className="relative min-h-[360px] md:min-h-[640px]">
          <Image
            src="/images/reception.jpg"
            alt="Recepción de Casa ETER, orquídea blanca y autos en vitrina"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="relative min-h-[360px] md:min-h-[640px]">
          <Image
            src="/images/andes.jpg"
            alt="Valle andino con niebla al amanecer, cerca de la casa"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <Reveal>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Cómo se habita
          </p>
        </Reveal>
        <div className="mt-14 grid gap-16 md:grid-cols-3">
          {principles.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-gold">
                {(index + 1).toString().padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-display text-3xl font-light">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-paper-2/50">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-20 md:grid-cols-12 md:px-10 lg:px-16">
          <div className="md:col-span-5">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
              Quiénes reciben
            </p>
            <h2 className="mt-4 font-display text-4xl font-light tracking-tight">
              Dos personas. Nadie más en la sala.
            </h2>
          </div>
          <div className="grid gap-12 md:col-span-6 md:col-start-7">
            {people.map((person) => (
              <div key={person.name} className="border-t border-line pt-8">
                <h3 className="font-display text-3xl font-light">{person.name}</h3>
                <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
                  {person.role}
                </p>
                <p className="mt-4 text-sm text-ink-soft">{person.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-16 px-6 py-24 md:grid-cols-12 md:px-10 lg:px-16">
        <div className="md:col-span-6">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Dónde
          </p>
          <h2 className="mt-4 font-display text-5xl font-light tracking-tight">
            {site.address.line1}
          </h2>
          <p className="mt-4 text-ink-soft">
            {site.address.commune}, {site.address.city}
          </p>
          <a
            href={site.address.maps}
            className="link-line mt-6 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
          >
            Abrir en mapas
            <Arrow />
          </a>
          <p className="mt-10 max-w-md text-sm leading-relaxed text-muted">
            Estacionamiento cubierto para visitas. Si vienes de oriente, el
            camino es el de siempre. Si vienes del centro, deja treinta minutos
            más: la casa no se merece llegar apurado.
          </p>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Horario
          </p>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {site.hours.map((row) => (
              <li
                key={row.days}
                className="flex items-baseline justify-between gap-6 py-4 text-sm"
              >
                <span>{row.days}</span>
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                  {row.time}
                </span>
              </li>
            ))}
          </ul>
          <Link href="/visita" className="btn btn-gold mt-10">
            Agendar visita
            <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
