import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { VisitForm } from "@/components/VisitForm";
import { experiences } from "@/lib/experiences";
import { clp } from "@/lib/format";

export const metadata: Metadata = {
  title: "Visitas",
  description:
    "Cata de medianoche, recorrido de parcelas y Mesa Noctua en el Valle del Elqui.",
};

export default function VisitasPage() {
  return (
    <>
      <PageIntro
        kicker="Visitas"
        title="El viñedo abre cuando baja el sol."
        lede="Jueves a domingo, de 21:00 a 00:30. Abrigo grueso, calzado cerrado. No hay visitas de día."
      />

      <section className="px-6 md:px-12 lg:px-16">
        <div className="relative aspect-[16/8] overflow-hidden">
          <Image
            src="/images/winery.jpg"
            alt="Bodega de piedra de Noctua de noche"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-3">
          {experiences.map((item) => (
            <article key={item.id}>
              <div className="relative aspect-[4/5] overflow-hidden bg-dusk">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="30vw"
                />
              </div>
              <p className="kicker mt-5">
                {item.time} · {item.duration}
              </p>
              <h2 className="mt-2 font-display text-3xl">{item.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-parchment">
                {item.detail}
              </p>
              <p className="mt-5 text-brass">{clp(item.price)} por persona</p>
              <p className="mt-1 text-xs text-mist">{item.people}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="bg-night px-6 py-16 md:px-12 lg:px-16">
          <p className="kicker">Cómo llegar</p>
          <h2 className="mt-4 font-display text-4xl font-light">
            Paihuano, camino a Alcohuaz.
          </h2>
          <p className="mt-6 text-[15px] leading-[1.85] text-parchment">
            Desde La Serena, dos horas por el valle. Desde Santiago, vuelo a
            La Serena o seis horas por la Ruta 5 y el cruce a Vicuña. La última
            parte es ripio: un auto alto ayuda, no es obligatorio.
          </p>
          <p className="mt-5 text-[15px] leading-[1.85] text-parchment">
            Hay dos piezas para quedarse la noche, con reserva. Si vienes por
            Mesa Noctua, conviene dormir: el camino de vuelta es oscuro de
            verdad.
          </p>
          <dl className="mt-10 space-y-3">
            <div>
              <dt className="kicker">Dirección</dt>
              <dd className="mt-1 text-sm">Camino a Alcohuaz s/n, Paihuano</dd>
            </div>
            <div>
              <dt className="kicker">WhatsApp</dt>
              <dd className="mt-1 text-sm">+56 9 8765 4321</dd>
            </div>
          </dl>
        </div>
        <div className="px-6 py-16 md:px-12 lg:px-16">
          <VisitForm />
        </div>
      </section>
    </>
  );
}
