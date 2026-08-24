import { BandaBeneficios, Hero, Nav } from './secciones/top';
import { BandaEditorial, Cifras, Coleccion, Metodo, Precios } from './secciones/medio';
import { Contacto, Faq } from './secciones/fin';
import { useRevealOnScroll, useScrollUI } from './hooks';

export function App() {
  const { progreso, oculto, pasadoHero } = useScrollUI();

  useRevealOnScroll();

  return (
    <div className="pagina" id="arriba">
      <Nav oculto={oculto} progreso={progreso} />
      <main>
        <Hero />
        <BandaBeneficios />
        <Coleccion />
        <Precios />
        <Cifras />
        <BandaEditorial />
        <Metodo />
        <Faq />
      </main>
      <Contacto />

      <a
        className={`cta-fija ${pasadoHero ? 'cta-fija--visible' : ''}`}
        href="#coleccion"
      >
        Ver catálogo
      </a>
    </div>
  );
}
