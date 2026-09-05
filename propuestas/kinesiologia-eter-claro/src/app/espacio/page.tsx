import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { comunas } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "El espacio",
  description:
    "Casa ETER en San Damián 1280, Las Condes. Luz norte, tres box, patio y kinesiología a domicilio en Santiago.",
};

const rooms = [
  {
    title: "Tres box",
    text: "Luz norte, camilla de lino, una mesa para el plan. Sesenta minutos reales: la puerta no se abre antes.",
    image: "/images/box.jpg",
    alt: "Box de kinesiología con camilla de lino y ventanal",
  },
  {
    title: "El pasillo",
    text: "Se espera sin televisor. Una silla, un patio, el tiempo de quitarse el abrigo. No hay fila de sillas plásticas.",
    image: "/images/corridor.jpg",
    alt: "Pasillo luminoso de la casa ETER",
  },
  {
    title: "La entrada",
    text: "San Damián 1280. Estacionamiento en el predio, tres cupos. Manquehue a nueve minutos a pie.",
    image: "/images/reception.jpg",
    alt: "Entrada de la casa: banco de roble, cuenco de cerámica y puerta de vidrio",
  },
];

export default function EspacioPage() {
  return (
    <>
      <PageIntro
        kicker="El espacio"
        title="Una casa. No un local de avenida."
        lead="San Damián 1280, Las Condes. Tres box, un patio, luz que no necesita lámpara a las once de la mañana. También vamos a la tuya."
      />

      <section className="pb-8">
        <div className="shell">
          <div className="frame relative aspect-[16/9] min-h-[280px]">
            <Image
              src="/images/box.jpg"
              alt="Box ETER con camilla de lino, jardín detrás del vidrio y luz norte"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-gris">
            Box 02 · luz norte · 60 min
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
              ETER ocupa una casa de un piso. No hay recepción con vidrio
              antibalas ni música de spa. Hay roble, lino, un jardín que se ve
              desde el box 2, y el tiempo de una sesión que no se recorta porque
              el siguiente ya llegó.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-tinta-suave">
              Si no puedes salir —post operatorio, neurológico, respiratorio,
              adulto mayor— el box se muda. Llevamos el material. El kinesiólogo
              es el mismo.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-linea">
        {rooms.map((room, index) => (
          <article
            key={room.title}
            className="grid border-b border-linea md:grid-cols-12"
          >
            <div
              className={`relative min-h-[320px] md:col-span-6 md:min-h-[480px] ${index % 2 === 1 ? "md:order-2" : ""}`}
            >
              <Image
                src={room.image}
                alt={room.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-14 md:col-span-6 md:px-12 lg:px-16">
              <Reveal>
                <p className="kicker">0{index + 1}</p>
                <h2 className="mt-4 font-display text-4xl font-light tracking-tight">
                  {room.title}
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-tinta-suave">
                  {room.text}
                </p>
              </Reveal>
            </div>
          </article>
        ))}
      </section>

      <section className="py-24 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">Domicilio</p>
            <h2 className="mt-4 font-display text-4xl font-light tracking-tight md:text-5xl">
              Seis comunas. Un kinesiólogo.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-tinta-suave">
              Las Condes, Vitacura, Providencia, Ñuñoa, La Reina, Santiago Centro.
              Ventana horaria acordada. Si el edificio no tiene estacionamiento,
              lo resolvemos antes.
            </p>
          </Reveal>
          <ul className="grid grid-cols-2 gap-px bg-linea lg:col-span-6 lg:col-start-7">
            {comunas.map((comuna) => (
              <li
                key={comuna}
                className="bg-papel px-6 py-8 font-display text-2xl font-light"
              >
                {comuna}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-linea py-20">
        <div className="shell grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="kicker">Cómo llegar</p>
            <p className="mt-5 text-lg leading-relaxed text-tinta-suave">
              {site.address.line1}
              <br />
              {site.address.commune}, {site.address.city}
              <br />
              {site.metro}
              <br />
              {site.parking}
            </p>
            <a
              href={site.address.maps}
              className="link-line mt-6 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
            >
              Abrir en Maps
              <Arrow />
            </a>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="kicker">Horario de casa</p>
            <ul className="mt-5 space-y-2 text-tinta-suave">
              {site.hours.map((row) => (
                <li key={row.days}>
                  {row.days}: {row.time}
                </li>
              ))}
            </ul>
            <Link href="/agenda" className="btn btn-ink mt-8 w-fit">
              Agendar evaluación
              <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
