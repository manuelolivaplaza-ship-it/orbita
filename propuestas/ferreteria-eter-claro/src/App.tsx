import { Header } from "./Header";
import { BandaConfianza, Hero } from "./Hero";
import { FamiliasObra } from "./FamiliasObra";
import { FichaTecnica } from "./FichaTecnica";
import { VentaObra } from "./VentaObra";
import { StockSucursal } from "./StockSucursal";
import { HorarioRetiro } from "./HorarioRetiro";
import { CotizaObra } from "./CotizaObra";
import { Footer } from "./Footer";
import { StickyCta } from "./StickyCta";

export function App() {
  return (
    <>
      <a href="#portada-meson" className="skip">
        Saltar al contenido
      </a>
      <Header />
      <main>
        <Hero />
        <BandaConfianza />
        <FamiliasObra />
        <FichaTecnica />
        <VentaObra />
        <StockSucursal />
        <HorarioRetiro />
        <CotizaObra />
      </main>
      <Footer />
      <StickyCta />
      {/* QA ids: id="portada-meson" id="familias-obra" id="ficha-tecnica" id="venta-a-obra" id="stock-sucursal" id="horario-retiro" id="cotiza-obra" */}
    </>
  );
}
