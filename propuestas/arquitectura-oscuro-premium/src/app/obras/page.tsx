import type { Metadata } from "next";
import { ProjectFilter } from "@/components/project-filter";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Obras",
  description:
    "Casas, bodegas, pabellones y escuelas. El índice de obras de ORILLA, de Calama a Petrohué.",
};

export default function ObrasPage() {
  return (
    <div className="shell pb-24 pt-28 md:pt-32">
      <Reveal>
        <p className="kicker">Índice · {projects.length} obras</p>
        <h1 className="mt-4 font-display text-5xl leading-none md:text-7xl">
          Obras
        </h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-paper-dim">
          Cada proyecto es un corte distinto del mismo oficio: leer el predio,
          elegir la materia, calibrar el sismo y la luz.
        </p>
      </Reveal>
      <div className="mt-12">
        <ProjectFilter projects={projects} />
      </div>
    </div>
  );
}
