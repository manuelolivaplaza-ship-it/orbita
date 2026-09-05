import { Reveal } from "@/components/Reveal";

export function Manifesto() {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-16 lg:py-36">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <p className="kicker">Manifiesto</p>
          <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-tight text-bone sm:text-6xl lg:text-7xl">
            En el Elqui la noche no es ausencia: es el instrumento.
          </h2>
        </Reveal>
        <Reveal delay={0.12} className="flex flex-col justify-end lg:col-span-5">
          <p className="text-[15px] leading-[1.85] text-parchment">
            Cosechamos entre las 00:00 y las 05:00, cuando la uva está fría, la
            piel tensa y el valle —por unas horas— pertenece a quienes
            observan. Nueve hectáreas a más de mil trescientos metros. Granito,
            caliza, una amplitud térmica de veintiún grados. El mismo cielo que
            usan los observatorios vecinos.
          </p>
          <p className="mt-6 text-[15px] leading-[1.85] text-parchment">
            Noctua es un viñedo chico. Cada botella lleva la hora de la
            vendimia, la fase de la luna y el número de registro. No hay más
            teatro que eso.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
