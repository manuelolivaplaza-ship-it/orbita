import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { WorkIndex } from "@/components/work-index";

export const metadata: Metadata = {
  title: "Trabajo",
  description:
    "Sistemas a medida construidos en Chile: viña, minería, cultura, fintech y comercio.",
};

export default function TrabajoPage() {
  return (
    <>
      <PageIntro kicker="Archivo" title="Trabajo.">
        <p>
          Encargos con nombre, lugar y consecuencia. No un portafolio de
          pantallas bonitas: sistemas que siguen corriendo cuando nosotros ya
          no estamos en la sala.
        </p>
      </PageIntro>
      <WorkIndex />
      <p className="mx-auto max-w-[1600px] px-5 py-16 font-mono text-[11px] tracking-[0.18em] text-mute uppercase md:px-10">
        Una selección. El resto está bajo acuerdo.
      </p>
    </>
  );
}
