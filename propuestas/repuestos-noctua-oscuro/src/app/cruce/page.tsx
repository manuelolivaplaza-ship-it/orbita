import type { Metadata } from "next";
import { Cruce } from "@/components/cruce";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Cruce",
  description:
    "Cruce por patente chilena, marca, modelo y año. Si la ficha está en bodega, la pieza aparece. Lista hasta las 23:30.",
};

export default function CrucePage() {
  return (
    <div className="pt-[4.5rem]">
      <header className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 md:py-24 lg:px-16">
        <Reveal>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-mute">
            Patente · OEM · motor
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.8rem,6vw,6.2rem)] font-medium leading-[0.88] tracking-wide">
            Sin cruce, no hay mostrador.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-mute">
            El mesón no adivina. Lee la patente, confirma el motor y nombra el
            OEM. Si entra antes de las {site.cruceHora}, está en bahía a las{" "}
            {site.bahiaHora}.
          </p>
        </Reveal>
      </header>

      <section className="mx-auto max-w-[1480px] px-5 pb-24 md:px-10 md:pb-32 lg:px-16">
        <Reveal>
          <Cruce />
        </Reveal>
        <Reveal className="mt-16 grid gap-10 border-t border-line pt-16 md:grid-cols-3" delay={80}>
          {[
            {
              n: "01",
              t: "Patente",
              d: "Nueva ABCD 12 o antigua AB 12.34. Seis caracteres. El resto es ruido.",
            },
            {
              n: "02",
              t: "Motor",
              d: "Cilindrada y código. Un Hilux 2.4 no es un 2.8. El filtro lo sabe.",
            },
            {
              n: "03",
              t: "OEM",
              d: "La referencia del fabricante. Si no calza, no sale. Se busca equivalente.",
            },
          ].map((item) => (
            <article key={item.n}>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-sodium">
                {item.n}
              </p>
              <h2 className="mt-4 font-display text-3xl font-medium tracking-wide">
                {item.t}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-mute">{item.d}</p>
            </article>
          ))}
        </Reveal>
      </section>
    </div>
  );
}
