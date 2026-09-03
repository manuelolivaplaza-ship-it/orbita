import type { Metadata } from "next";
import { ProjectFilter } from "@/components/ProjectFilter";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Obras",
  description:
    "Casas, bodegas, pabellones, hoteles y escuelas. El índice de obras de VETA Atelier.",
};

export default function ObrasPage() {
  return (
    <div className="mx-auto max-w-[1600px] px-5 pb-24 pt-28 md:px-8 md:pt-32 lg:px-10">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
          Índice · {projects.length} obras
        </p>
        <h1 className="mt-4 font-display text-5xl leading-none md:text-7xl">
          Obras
        </h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-ink-soft">
          Cada proyecto es un corte distinto del mismo oficio: leer el sitio,
          elegir la materia, calibrar la luz.
        </p>
      </Reveal>
      <div className="mt-12">
        <ProjectFilter projects={projects} />
      </div>
    </div>
  );
}
