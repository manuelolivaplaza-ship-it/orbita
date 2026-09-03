import { ComoPartimos } from "@/components/como-partimos";
import { Hero } from "@/components/hero";
import { Honorarios } from "@/components/honorarios";
import { Materias } from "@/components/materias";
import { Reserva } from "@/components/reserva";
import { SiteHeader } from "@/components/site-header";
import { StickyCta } from "@/components/sticky-cta";
import { Urgencia } from "@/components/urgencia";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <div id="top" />
        <Hero />
        <Materias />
        <ComoPartimos />
        <Honorarios />
        <Urgencia />
        <Reserva />
      </main>
      <StickyCta />
    </>
  );
}
