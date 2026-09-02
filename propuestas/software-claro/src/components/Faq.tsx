import { useState } from "react";

const ITEMS: Array<{ q: string; a: string }> = [
  {
    q: "¿El código queda para nosotros?",
    a: "Sí. Repo, CI/CD y credenciales tuyos desde día 1. Contrato lo deja explícito.",
  },
  {
    q: "¿Pueden trabajar con nuestro equipo interno?",
    a: "Sí, squad mixto o staff augmentation. Hacemos code review y definimos estándares juntos.",
  },
  {
    q: "¿Qué pasa si el alcance crece?",
    a: "Se estima por puntos. Si crece, se mueve a siguiente sprint con tu OK escrito, sin sorpresas.",
  },
  {
    q: "¿Facturan con IVA? ¿Boleta?",
    a: "Factura afecta. Si necesitas boleta, lo vemos caso a caso.",
  },
  {
    q: "¿Hacen mantención?",
    a: "Sí, bolsa de horas desde $480.000 CLP/20h o squad reducido.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <div className="grid">
        <div style={{ gridColumn: "3 / span 8" }} className="faq-wrap">
          <h2 className="section-h2">Preguntas frecuentes.</h2>
          <div className="faq-list" role="list">
            {ITEMS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className={`faq-item ${isOpen ? "is-open" : ""}`} role="listitem">
                  <button
                    className="faq-question"
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    id={`faq-q-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className="faq-icon" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    id={`faq-a-${i}`}
                    role="region"
                    aria-labelledby={`faq-q-${i}`}
                    className="faq-answer"
                    style={{ display: isOpen ? "block" : "none" }}
                  >
                    {item.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
