import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Preparación",
  description:
    "Cómo prepararte para una toma en NOCTUA: ayuno, ocaso, orina, hormonas y lo que no hay que hacer.",
};

const bloques = [
  {
    title: "Ayuno",
    text: "Agua está permitida. Café, mate, jugos y cigarro, no. El ayuno de 8 horas para un ocaso a las 19:00 significa cenar a las 11:00. Suena extraño. Funciona. El Chequeo Ocaso está armado para eso.",
  },
  {
    title: "Medicamentos",
    text: "Mantén tu medicación habitual, salvo que tu médico diga lo contrario. Levotiroxina: después de la toma, no antes. Hierro oral: no la mañana del examen. Anticoagulantes: dínoslo, no los suspendas por tu cuenta.",
  },
  {
    title: "Orina",
    text: "Primera de la mañana, chorro medio, frasco estéril. Te lo damos en sucursal. Si es domicilio, va en el maletín. No recojas la muestra la noche anterior.",
  },
  {
    title: "Hormonas",
    text: "La TSH tiene ritmo circadiano. Si es un control, ven a la misma hora. Testosterona: mejor de mañana. En el ocaso el valor puede bajar: lo anotamos en el informe.",
  },
  {
    title: "Agujas",
    text: "Si te pesan, lo dices al agendar. Hay recostado, hay tiempo, hay silencio. No es un defecto. Es un dato, como el ayuno.",
  },
  {
    title: "Ocaso",
    text: "Último cupo 21:00. Si llegas en ayunas a las 20:40, hay agua y una silla. No hay fila de las 08:00. Por eso existe el turno.",
  },
];

export default function PreparacionPage() {
  return (
    <>
      <PageIntro
        kicker="Antes"
        title="La muestra se cuida antes de la vena."
        lead="Un número malo por un café no es un diagnóstico. Es un desperdicio. Esto es lo que pedimos, sin letra chica."
      />
      <section className="shell grid gap-px bg-line pb-20 md:grid-cols-2">
        {bloques.map((item, index) => (
          <Reveal key={item.title} delay={index * 50} className="bg-void p-8 md:p-12">
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              {item.title}
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-paper-dim">
              {item.text}
            </p>
          </Reveal>
        ))}
      </section>
      <section className="shell py-20">
        <Reveal>
          <Link href="/hora" className="btn btn-amber">
            Pedir hora
            <Arrow />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
