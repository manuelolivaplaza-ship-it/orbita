import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { comunasHoy } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Despacho",
  description:
    "Despacho hoy en la Región Metropolitana si cruzas antes de las 13:00. A regiones, Chilexpress 24–48 h.",
};

const reglas = [
  {
    title: "Hoy en la RM",
    body: "Si la ficha queda cruzada antes de las 13:00 y la pieza está en mostrador, sale el mismo día. Después de esa hora, sale al día hábil siguiente.",
  },
  {
    title: "Retiro en Independencia",
    body: "Sin costo. Te avisamos cuando está en mesa. Trae cédula o el nombre de quien cotizó.",
  },
  {
    title: "Regiones",
    body: "Chilexpress 24–48 h. El flete se cotiza con peso y volumen. No despachamos líquidos aéreos.",
  },
  {
    title: "Devolución",
    body: "Pieza sin instalar, empaque original, 7 días. Eléctrico y fluido no se devuelven abiertos. El flete de vuelta va por el cliente si el cruce fue correcto.",
  },
];

export default function DespachoPage() {
  return (
    <>
      <PageIntro
        kicker="Cobertura"
        title="Hoy si cruzas antes de las 13:00."
        lead="La RM se cubre en el día. El resto de Chile, por courier. El precio de flete no se adivina: sale con el peso de la pieza."
      />
      <section className="py-16 lg:py-24">
        <div className="shell grid gap-10 lg:grid-cols-2">
          {reglas.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <article className="border-t border-line pt-8">
                <h2 className="font-display text-3xl tracking-tight">{item.title}</h2>
                <p className="mt-4 max-w-[46ch] text-[16px] leading-relaxed text-muted">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="border-t border-line py-20">
        <div className="shell">
          <p className="kicker">Comunas RM</p>
          <h2 className="font-display mt-4 text-[clamp(2rem,4vw,3.4rem)] tracking-tight">
            El mapa es una lista.
          </h2>
          <ul className="mt-12 grid grid-cols-2 gap-x-8 gap-y-3 text-[16px] sm:grid-cols-3 lg:grid-cols-4">
            {comunasHoy.map((comuna) => (
              <li key={comuna} className="border-b border-line py-2">
                {comuna}
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-[48ch] text-[14px] text-muted">
            Fuera de esta lista, consulta. Algunas comunas de la periferia
            salen al día siguiente. El mostrador: {site.address.line}.
          </p>
        </div>
      </section>
    </>
  );
}
