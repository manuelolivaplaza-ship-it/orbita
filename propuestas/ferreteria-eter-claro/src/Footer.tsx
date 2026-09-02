export function Footer() {
  return (
    <footer className="site-footer" aria-label="Pie">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col">
            <strong className="footer-logo">ETER</strong>
            <span>RUT 76.123.456-7</span>
            <span>Ferretería industrial · Santiago · despacho RM</span>
          </div>
          <div className="footer-col">
            <a href="#familias-obra">Familias obra</a>
            <a href="#ficha-tecnica">Ficha técnica</a>
            <a href="#venta-a-obra">Venta a obra</a>
            <a href="#horario-retiro">Horario retiro</a>
            <a href="#cotiza-obra">Cotizar</a>
          </div>
          <div className="footer-col">
            <span className="contact-mono">+56 2 2840 3315</span>
            <span>ventas@eter-ferreteria.cl</span>
            <span>10 de Julio 1234 · Puente Alto Eyzaguirre</span>
            <span>Lun–Vie 7:30–18:00 · Sáb 8–13</span>
            <span>Boleta o factura</span>
          </div>
        </div>
        <div className="footer-legal">© 2026 ETER Ferretería Industrial · Precios con IVA · Despacho por comuna · Corte/doblado incluido</div>
      </div>
    </footer>
  );
}
