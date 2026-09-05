import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HousePlan } from "@/components/house-plan";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "La casa",
  description:
    "Casa ETER en Los Leones 1180, Providencia. Pabellón de espera, ocho salas, laboratorio propio y un patio con olivo.",
};

const rooms = [
  {
    title: "El pabellón",
    text: "Se espera sin televisor. Dos sillas de lino, la cordillera al fondo, el tiempo de quitarse el abrigo. No hay fila de sillas plásticas.",
    image: "/images/espera.jpg",
    alt: "Pabellón de espera ETER con sillas de lino y ventanal",
  },
  {
    title: "Ocho salas",
    text: "Luz norte, camilla de lino, una mesa para la ficha. Treinta a cuarenta minutos reales: la puerta no se abre porque el siguiente ya llegó.",
    image: "/images/consulta.jpg",
    alt: "Sala de consulta con camilla de lino y mesa de roble",
  },
  {
    title: "El pasillo",
    text: "Una franja de sol sobre el roble. Las salas tienen número, no nombre de marca. El laboratorio está al final, no en otro recinto.",
    image: "/images/corridor.jpg",
    alt: "Pasillo luminoso de la casa ETER",
  },
  {
    title: "El patio",
    text: "Un olivo. Se ve desde la espera y desde cardiología. No es un jardín terapéutico: es el aire de una casa.",
    image: "/images/patio.jpg",
    alt: "Patio interior con olivo visto desde la ventana",
  },
];

export default function LaCasaPage() {
  return (
    <>
      <PageIntro
        kicker="La casa"
        title="Una casa. No un local de avenida."
        lead="Los Leones 1180, Providencia. Pabellón, ocho salas, laboratorio, un patio. Luz que no necesita lámpara a las once de la mañana."
      />

      <section className="pb-8">
        <div className="shell">
          <div className="frame relative aspect-[16/9] min-h-[280px]">
            <Image
              src="/images/fachada.jpg"
              alt="Fachada de la casa ETER: yeso hueso, ventanales altos y un olivo en la vereda"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-gris">
            Los Leones 1180 · Providencia · {site.metro}
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-4xl font-light tracking-tight md:text-5xl">
              El cuerpo se trata mejor donde hay aire.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={80}>
            <p className="text-lg leading-relaxed text-tinta-suave">
              ETER ocupa una casa de dos pisos. No hay recepción con vidrio
              antibalas ni música de spa. Hay roble, lino, un olivo, y el
              tiempo de una consulta que no se recorta.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-tinta-suave">
              {site.parking}. El metro está a cuatro minutos. Si el caso pide
              telemedicina de control, se hace con la misma ficha — no por un
              chat sin historia.
            </p>
            <dl className="mt-10 grid gap-6 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
                  Dirección
                </dt>
                <dd className="mt-2 text-tinta-suave">
                  {site.address.line1}
                  <br />
                  {site.address.commune}, {site.address.city}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
                  Horario
                </dt>
                <dd className="mt-2 text-tinta-suave">
                  {site.hours.map((row) => (
                    <p key={row.days}>
                      {row.days}: {row.time}
                    </p>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-linea py-24 lg:py-32">
        <div className="shell">
          <Reveal>
            <p className="kicker">Planta</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-light tracking-tight md:text-5xl">
              Ocho salas. Un laboratorio. Un patio.
            </h2>
          </Reveal>
          <div className="mt-12">
            <HousePlan />
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="shell grid gap-16 md:grid-cols-2">
          {rooms.map((room, index) => (
            <Reveal key={room.title} delay={index * 80}>
              <div className="frame relative aspect-[16/10]">
                <Image
                  src={room.image}
                  alt={room.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-6 font-display text-3xl font-light tracking-tight">
                {room.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-tinta-suave">
                {room.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-linea bg-papel-2 py-20">
        <div className="shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="kicker">Llegar</p>
            <h2 className="mt-4 font-display text-4xl font-light tracking-tight">
              La hora, en esta casa.
            </h2>
          </div>
          <Link href="/agenda" className="btn btn-ink">
            Agendar hora
            <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
