"use client";

import { useEffect, useState } from "react";
import { chapters, site } from "@/lib/site";
import { useActiveChapter } from "@/hooks/use-active-chapter";
import { PhoneIcon } from "./icons";

export function SiteHeader() {
  const active = useActiveChapter();
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (open) {
        setHidden(false);
        last = y;
        return;
      }
      setHidden(y > last && y > 80);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className={`header${hidden ? " is-hidden" : ""}`}>
        <div className="shell header-inner">
          <a className="logo" href="#top">
            {site.name}
          </a>
          <nav className="nav-desktop" aria-label="Capítulos">
            {chapters.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className={`nav-item${active === c.id ? " is-active" : ""}`}
                aria-current={active === c.id ? "true" : undefined}
              >
                <span className="num nums">{c.num}</span>
                <span className="lab">{c.label}</span>
              </a>
            ))}
          </nav>
          <div className="header-end">
            <a
              className="header-phone nums"
              href={site.phoneHref}
              aria-label={`Llamar ${site.phone}`}
            >
              <PhoneIcon />
              <span className="num-full">{site.phone}</span>
            </a>
            <a className="btn btn-primary btn-sm" href="#reserva">
              Agendar reunión
            </a>
            <button
              className={`menu-btn${open ? " is-open" : ""}`}
              type="button"
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      <div
        id="menu-movil"
        className={`drawer${open ? " is-open" : ""}`}
        aria-hidden={!open}
        inert={!open}
      >
        <nav aria-label="Capítulos">
          {chapters.map((c) => (
            <a key={c.id} href={`#${c.id}`} onClick={() => setOpen(false)}>
              <span className="num nums">{c.num}</span>
              <span className="lab">{c.label}</span>
            </a>
          ))}
        </nav>
        <a
          className="btn btn-primary"
          href="#reserva"
          onClick={() => setOpen(false)}
        >
          Agendar reunión
        </a>
      </div>
    </>
  );
}
