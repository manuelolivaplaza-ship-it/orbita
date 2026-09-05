import type { Metadata } from "next";
import { Cta } from "@/components/cta";
import { PageIntro } from "@/components/page-intro";
import { ProjectTeaser } from "@/components/project-teaser";
import { projects } from "@/lib/work";

export const metadata: Metadata = {
  title: "Trabajo",
  description:
    "Encargos de Nítida: identidad, producto y sitios para marcas chilenas. Loica, Matta 980, Atalaya, Pliego.",
};

export default function TrabajoPage() {
  const [featured, ...rest] = projects;

  return (
    <>
      <PageIntro
        kicker="Trabajo"
        title="Encargos que se pueden defender."
        lead="Identidad, producto y sitios. Pocos, llevados hasta el final. Cada uno con una frase, un sistema y un criterio para seguir sin nosotros."
      />
      <section className="wrap grid gap-16 pb-24 md:gap-20 md:pb-32">
        <ProjectTeaser project={featured} index={0} featured />
        <div className="grid gap-16 md:grid-cols-2 md:gap-10">
          {rest.map((project, index) => (
            <ProjectTeaser key={project.slug} project={project} index={index + 1} />
          ))}
        </div>
      </section>
      <Cta />
    </>
  );
}
