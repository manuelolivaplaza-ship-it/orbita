import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { labTests } from "@/lib/data";

export const metadata: Metadata = {
  title: "Laboratorio",
  description:
    "Laboratorio propio en CLARO, Providencia. Hemograma, perfiles, HbA1c, ECG, Holter, MAPA y ecografías. Aranceles a la vista.",
};

export default function LaboratorioPage() {
  return (
    <>
      <PageIntro
        kicker="Laboratorio"
        title="La muestra no viaja una semana."
        lead="Planta baja, junto al pabellón. Toma de muestras en la mañana. ECG en la consulta. Holter, MAPA y eco con hora. El informe se lee con usted."
      />

      <section className="pb-16">
        <div className="shell">
          <Reveal className="relative aspect-[16/9]">
            <Image
              src="/images/laboratorio.jpg"
              alt="Laboratorio de CLARO: mesón de piedra, microscopio y el patio al fondo"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">Cómo funciona</p>
            <h2 className="font-display mt-4 text-[clamp(1.9rem,3.4vw,2.8rem)] font-medium leading-[1.02] tracking-tight">
              Orden médica. Ayunas si corresponde. Resultado en la ficha.
            </h2>
            <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-muted">
              <p>
                Si es paciente de CLARO, la orden sale de la consulta y baja
                con usted. Si viene de otro médico, traiga la orden: no hacemos
                perfiles «por si acaso».
              </p>
              <p>
                Toma de muestras: lunes a viernes, 8:00 a 10:30, en ayunas
                cuando el examen lo pide. Sábado, 9:00 a 11:00. Agua sí. Café
                no.
              </p>
              <p>
                Los informes de sangre del día quedan en su ficha y se los
                comentamos en el control, no por un PDF suelto a las once de la
                noche.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="border border-line">
              <div className="grid grid-cols-[1fr_auto_auto] gap-4 border-b border-line bg-luz-2 px-5 py-3 text-[11px] tracking-[0.16em] text-muted uppercase">
                <span>Prestación</span>
                <span>Valor</span>
                <span className="hidden sm:inline">Plazo</span>
              </div>
              {labTests.map((item) => (
                <div
                  key={item.name}
                  className="grid grid-cols-[1fr_auto] gap-4 border-b border-line px-5 py-4 last:border-b-0 sm:grid-cols-[1fr_auto_auto]"
                >
                  <span>{item.name}</span>
                  <span className="nums text-ink">{item.price}</span>
                  <span className="hidden text-[14px] text-muted sm:inline">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[13px] text-muted">
              Valores referenciales en pesos chilenos. Pueden variar si el caso
              pide un panel distinto. Se confirman al agendar.
            </p>
            <Link
              href="/agenda"
              className="font-sans mt-8 inline-flex h-12 items-center bg-sol px-6 text-[0.88rem] font-semibold tracking-wide text-papel hover:bg-sol-deep"
            >
              Agendar toma de muestra
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
