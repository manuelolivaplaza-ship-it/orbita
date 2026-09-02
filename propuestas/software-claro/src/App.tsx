import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Engagement } from "./components/Engagement";
import { StackReal } from "./components/StackReal";
import { Sla } from "./components/Sla";
import { CasosIndustria } from "./components/CasosIndustria";
import { ComoPartimos } from "./components/ComoPartimos";
import { Presupuesto } from "./components/Presupuesto";
import { Reserva } from "./components/Reserva";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { ConversionBars } from "./components/ConversionBars";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Engagement />
        <StackReal />
        <Sla />
        <CasosIndustria />
        <ComoPartimos />
        <Presupuesto />
        <Reserva />
        <Faq />
      </main>
      <Footer />
      <ConversionBars />
    </>
  );
}
