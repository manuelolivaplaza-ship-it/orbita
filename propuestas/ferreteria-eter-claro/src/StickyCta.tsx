import { useEffect, useState } from "react";

export function StickyCta() {
  const [show, setShow] = useState(false);
  const [hideBottom, setHideBottom] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("portada-meson");
    const cotiza = document.getElementById("cotiza-obra");
    if (!hero) return;
    const obsHero = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        // show when hero not intersecting (scrolled past)
        setShow(!e.isIntersecting);
      },
      { threshold: 0, rootMargin: "-30% 0px 0px 0px" }
    );
    obsHero.observe(hero);

    let obsCotiza: IntersectionObserver | null = null;
    if (cotiza) {
      obsCotiza = new IntersectionObserver(
        (entries) => {
          setHideBottom(entries[0].isIntersecting);
        },
        { threshold: 0.1 }
      );
      obsCotiza.observe(cotiza);
    }

    return () => {
      obsHero.disconnect();
      obsCotiza?.disconnect();
    };
  }, []);

  if (!show) return null;

  return (
    <>
      {/* top sticky bar 44px mobile only */}
      <div className="sticky-top" role="complementary" aria-label="Contacto rápido">
        <span className="phone-mono">+56 2 2840 3315</span>
        <a href="#cotiza-obra" className="btn-accent" style={{ padding: "8px 14px", fontSize: 13 }}>Cotizar</a>
      </div>
      {/* bottom bar 56px mobile only, hidden in cotiza */}
      {!hideBottom && (
        <div className="sticky-bottom" role="complementary" aria-label="Cotizar">
          <a href="#cotiza-obra" className="btn-accent" style={{ width: "100%", height: 44, fontSize: 14, fontWeight: 600 }}>Cotizar por WhatsApp</a>
        </div>
      )}
    </>
  );
}
