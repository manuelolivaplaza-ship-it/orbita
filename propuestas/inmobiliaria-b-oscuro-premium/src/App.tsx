import { useEffect } from "react";
import { Router, useRuta } from "./lib/router";
import { Navbar, Footer, ProgressBar, Grain, CtaMovil } from "./components/Chrome";
import { Inicio } from "./pages/Inicio";
import { Catalogo } from "./pages/Catalogo";
import { Ficha } from "./pages/Ficha";
import { Vender } from "./pages/Vender";
import { Nosotros } from "./pages/Nosotros";
import { Contacto } from "./pages/Contacto";
import { rutas, marca } from "./lib/datos";

function Vistas() {
  const ruta = useRuta();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    document.documentElement.classList.toggle("is-static", params.has("static"));
  }, []);

  useEffect(() => {
    const base = `${marca.nombre} ${marca.sufijo}`;
    if (ruta === rutas.inicio) document.title = `${base} — Corretaje premium en Santiago`;
    else if (ruta.startsWith(rutas.ficha)) document.title = `${base} — Ficha`;
    else {
      const nombrePagina =
        ruta.startsWith(rutas.catalogo)
          ? "Propiedades"
          : ruta.startsWith(rutas.captacion)
            ? "Vender su propiedad"
            : ruta.startsWith(rutas.nosotros)
              ? "La corredora"
              : "Contacto";
      document.title = `${base} — ${nombrePagina}`;
    }
  }, [ruta]);

  let vista = <Inicio />;
  if (ruta.startsWith(rutas.ficha + "/")) {
    vista = <Ficha id={ruta.slice(rutas.ficha.length + 1)} />;
  } else if (ruta.startsWith(rutas.catalogo)) {
    vista = <Catalogo />;
  } else if (ruta.startsWith(rutas.captacion)) {
    vista = <Vender />;
  } else if (ruta.startsWith(rutas.nosotros)) {
    vista = <Nosotros />;
  } else if (ruta.startsWith(rutas.contacto)) {
    vista = <Contacto />;
  }

  return (
    <div className="app" key={ruta.startsWith(rutas.ficha) ? ruta : ruta.split("/")[1] || "inicio"}>
      <Navbar />
      <main className="vista">{vista}</main>
      <Footer />
      <CtaMovil />
    </div>
  );
}

export function App() {
  return (
    <Router>
      <ProgressBar />
      <Vistas />
      <Grain />
    </Router>
  );
}
