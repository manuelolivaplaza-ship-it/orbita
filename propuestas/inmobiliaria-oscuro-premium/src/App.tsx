import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Propiedades } from "./components/Propiedades";
import { FichaAltamar } from "./components/FichaAltamar";
import { BordeCostero } from "./components/BordeCostero";
import { EnVerde } from "./components/EnVerde";
import { VisitaNocturna } from "./components/VisitaNocturna";
import { Footer, MobileCtaBar } from "./components/Footer";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Propiedades />
        <FichaAltamar />
        <BordeCostero />
        <EnVerde />
        <VisitaNocturna />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
