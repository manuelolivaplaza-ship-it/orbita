import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Cuarteles } from "./components/Cuarteles";
import { Vinos } from "./components/Vinos";
import { Cata } from "./components/Cata";
import { Club } from "./components/Club";
import { Despacho } from "./components/Despacho";
import { Reserva } from "./components/Reserva";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <Header />
      <Hero />
      <Cuarteles />
      <Vinos />
      <Cata />
      <Club />
      <Despacho />
      <Reserva />
      <Footer />
      <div className="sticky-bottom" aria-label="Acciones rápidas">
        <a href="tel:+56932204418" className="sticky-bottom__phone">
          +56 9 3220 4418
        </a>
        <a href="#reserva-cata" className="sticky-bottom__cta">
          Reservar cata
        </a>
      </div>
    </>
  );
}
