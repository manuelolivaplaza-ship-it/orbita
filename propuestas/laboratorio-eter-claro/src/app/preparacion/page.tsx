import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Preparación",
  description:
    "Cómo prepararte para tus exámenes en ETER: ayuno, orina, hormonas y toma de muestra en Santiago.",
};

const bloques = [
  {
    t: "Ayuno",
    d: "Ocho horas para glicemia y perfil bioquímico. Doce para el perfil lipídico. Agua está permitida; café, jugo y cigarro no. La cena anterior, liviana. El ayuno no es una hazaña: es un método.",
  },
  {
    t: "Medicamentos",
    d: "Sigue tu indicación médica. No suspendas nada por tu cuenta. Si tomas levotiroxina, ven en ayunas de hormona: la pastilla, después de la muestra. La biotina interfiere en algunos inmunoensayos: avísanos.",
  },
  {
    t: "Orina",
    d: "Primera de la mañana, chorro medio, envase estéril. Higiene con agua. Si menstruas, espera dos días o dínoslo: hay formas de no ensuciar el examen.",
  },
  {
    t: "Hormonas del ciclo",
    d: "Estradiol, FSH, progesterona: el día del ciclo no es un detalle, es el dato. Anótalo. Si no lo recuerdas, lo estimamos juntos.",
  },
  {
    t: "Cortisol y prolactina",
    d: "Cortisol entre 7:00 y 9:00. Prolactina con veinte minutos de reposo, sin apuro, sin haber entrenado la noche anterior. El estrés de llegar tarde altera el número.",
  },
  {
    t: "Niños y agujas",
    d: "Diles la verdad, breve. Trae agua y algo de comer para después. Pedimos la sala más quieta. Si hace falta, nos tomamos el tiempo que el adulto también necesitaba y no pedía.",
  },
];

export default function PreparacionPage() {
  return (
    <>
      <PageHero
        kicker="Preparación"
        title="Lo que el examen necesita de ti."
        lead="Un número mal tomado es peor que no tomarlo. Estas son las reglas, dichas en voz baja."
      />
      <div className="wrap-wide grid gap-12 pb-8 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <div className="img-frame aspect-[4/5]">
            <Image
              src="/images/waiting.jpg"
              alt="Sala de espera de madera clara, lino y un olivo."
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <div className="md:col-span-6 md:col-start-7">
          {bloques.map((item, index) => (
            <Reveal key={item.t} delay={index * 40} className="border-t border-line py-7">
              <h2 className="font-serif text-3xl">{item.t}</h2>
              <p className="mt-3 text-ink-soft">{item.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
      <p className="wrap py-16 text-center">
        <Link href="/contacto" className="btn btn-ink">
          Agendar con preparación incluida
        </Link>
      </p>
    </>
  );
}
