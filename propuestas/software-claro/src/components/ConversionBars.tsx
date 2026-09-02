export function ConversionBars() {
  return (
    <>
      {/* Barra sticky móvil inferior 56px Llamar | WhatsApp */}
      <div className="conv-sticky-bar" aria-label="Contacto rápido">
        <a href="tel:+56912345678" className="conv-sticky-btn">
          Llamar
        </a>
        <a href="https://wa.me/56912345678?text=Hola%20Cordillera%2C%20quiero%20agendar%20discovery%2030%20min" className="conv-sticky-btn" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </div>

      {/* CTA persistente bottom-right 16px sobre barra sticky */}
      <a href="#reserva" className="conv-persistente" aria-label="Agenda discovery 30 min">
        Agenda discovery 30 min
      </a>
    </>
  );
}
