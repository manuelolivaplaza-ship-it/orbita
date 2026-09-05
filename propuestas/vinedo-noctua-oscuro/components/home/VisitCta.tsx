import Image from "next/image";
import Link from "next/link";

export function VisitCta() {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="relative min-h-[420px] lg:min-h-[560px]">
        <Image
          src="/images/mesa.jpg"
          alt="Mesa de cata al aire libre bajo las estrellas"
          fill
          className="object-cover"
          sizes="50vw"
        />
      </div>
      <div className="flex flex-col justify-center bg-night px-6 py-16 md:px-14">
        <p className="kicker">Visitas</p>
        <h2 className="mt-4 font-display text-4xl font-light md:text-5xl">
          El viñedo abre cuando baja el sol.
        </h2>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-parchment">
          Cata de medianoche, recorrido de parcelas y una mesa de fuego los
          viernes. No recibimos de día: el Elqui ya tiene suficiente luz.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/visitas" className="btn">
            Reservar visita
          </Link>
          <Link href="/circulo" className="btn-ghost">
            Unirse al Círculo
          </Link>
        </div>
      </div>
    </section>
  );
}
