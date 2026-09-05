import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { Arrow } from "@/components/mark";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";
import { formatCLP } from "@/lib/format";

export const metadata: Metadata = {
  title: "Corte y doblado",
  description:
    "Corte y doblado de fierro y perfiles en patio. Tira de 6 m incluida. Lista antes de las 14:00, sale al día siguiente.",
};

const pasos = [
  {
    n: "01",
    title: "Escribe la medida",
    text: "Diámetro, largo, cantidad de curvas. En el formulario, por WhatsApp o en el mesón. Sin medida, no hay corte.",
  },
  {
    n: "02",
    title: "Se marca la tira",
    text: "La sierra no adivina. Se marca, se corta, se dobla. El sobrante queda rotulado por si la obra lo pide.",
  },
  {
    n: "03",
    title: "Sale con la guía",
    text: "Lista antes de las 14:00, retiro o despacho al día siguiente. El corte viaja atado, no suelto en la caja.",
  },
];

export default function CortePage() {
  return (
    <div className="pt-[4.4rem]">
      <header className="mx-auto grid max-w-[1480px] gap-12 px-5 py-16 md:grid-cols-12 md:px-10 md:py-24 lg:px-16">
        <Reveal className="md:col-span-7">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Oficio
          </p>
          <h1 className="mt-5 font-display text-[clamp(2.8rem,6vw,6.4rem)] font-light leading-[0.9] tracking-tight">
            El corte es
            <br />
            <em className="italic">la promesa.</em>
          </h1>
        </Reveal>
        <Reveal className="md:col-span-5 md:pt-20" delay={80}>
          <p className="max-w-md text-base leading-relaxed text-ink-soft">
            No cortamos de oído. La tira de seis metros entra entera; si la
            losa pide 3.150, se corta acá. El precio del corte está a la vista.
          </p>
        </Reveal>
      </header>

      <section className="border-y border-line">
        <div className="grid md:grid-cols-12">
          <div className="relative min-h-[22rem] md:col-span-7 md:min-h-[42rem]">
            <Image
              src="/images/corte.jpg"
              alt="Perfil cuadrado recién cortado, viruta clara sobre hormigón pálido"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
          <div className="px-5 py-14 md:col-span-5 md:px-10 md:py-16 lg:px-16">
            <Reveal>
              <dl className="space-y-8">
                <div>
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                    Tira incluida
                  </dt>
                  <dd className="mt-2 font-display text-4xl font-light">
                    {site.corteIncluidoHasta}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                    Corte extra
                  </dt>
                  <dd className="mt-2 font-display text-4xl font-light">
                    {formatCLP(site.corteExtra)}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                    Doblado / curva
                  </dt>
                  <dd className="mt-2 font-display text-4xl font-light">
                    {formatCLP(site.dobladoCurva)}
                  </dd>
                </div>
              </dl>
              <p className="mt-10 text-xs leading-relaxed text-muted">
                Valores con IVA, referenciales. Listas de corte antes de las{" "}
                {site.corteHora}. Fierro, perfil, plancha y tablero.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <Reveal>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Cómo
          </p>
          <h2 className="mt-5 max-w-xl font-display text-4xl font-light tracking-tight md:text-5xl">
            Tres pasos. Ninguno es un mail.
          </h2>
        </Reveal>
        <ol className="mt-14 grid gap-0 border-t border-line md:grid-cols-3">
          {pasos.map((paso, index) => (
            <Reveal
              key={paso.n}
              delay={index * 80}
              className="border-line py-10 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <li>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-steel">
                  {paso.n}
                </p>
                <h3 className="mt-4 font-display text-3xl font-light tracking-tight">
                  {paso.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
                  {paso.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-12">
          <Link href="/cotizar" className="btn btn-ink">
            Mandar lista de corte
            <Arrow />
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1480px] px-5 pb-24 md:px-10 md:pb-32 lg:px-16">
        <Reveal>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Preguntas del mesón
          </p>
          <h2 className="mt-5 font-display text-4xl font-light tracking-tight">
            Lo que preguntan a las siete y media.
          </h2>
        </Reveal>
        <Reveal className="mt-10" delay={80}>
          <FaqList />
        </Reveal>
      </section>
    </div>
  );
}
