#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fase 2: corrige tipografías prohibidas (system-ui/roboto/arial) en webs Órbita.

Para cada web: opencode run (muse-spark-1.2-contributor) con prompt de corrección
tipográfica según su BUILD-01.md → build a 0 errores → QA anti-clon.
Reintento 1x si opencode falla. Resultado → QA-RESUMEN-66-v3.csv
"""
import csv, json, subprocess, sys
from pathlib import Path

RAIZ = Path(r"C:/Users/manue/OneDrive/Desktop/órbita")
QA = Path(r"C:/Users/manue/OneDrive/Desktop/SitiosWeb/_leads/qa-anticlon.py")
MODEL = "opencode-go/muse-spark-1.2-contributor"

WEBS = [
    "dentista-b-claro", "dentista-b-oscuro-premium", "dentista-b-azul-cian",
    "dentista-b-teal", "abogado-b-claro", "abogado-oscuro-premium",
    "software-b-azul-cian", "arquitectura-b-claro", "arquitectura-claro",
    "arquitectura-oscuro-premium", "clinica-claro", "contador-claro",
    "concesionaria-eter-claro", "concesionaria-noctua-oscuro",
]

PROHIBIDAS = ("system-ui, arial, roboto, Inter, Geist, Space Grotesk, Poppins, "
              "Montserrat, Roboto, Open Sans, Lato como fuente principal")


def prompt_correccion(slug):
    return (
        f"Corrige SOLO la tipografía de la web propuestas/{slug}/.\n"
        f"Lee primero propuestas/{slug}/BUILD-01.md, sección 'Tipografía' (y si menciona fuentes en "
        f"DIRECCION_DE_ARTE.md, úsalas). Aplica EXACTAMENTE esa pareja tipográfica: agrega el <link> de "
        f"Google Fonts en index.html (con display=swap y los pesos indicados), define/actualiza las "
        f"variables de fuente en src/styles.css (cualquiera que el sitio ya use: --font-display/--font-ui "
        f"o --display/--text u otras) y aplica font-family correcta a body, headings y botones.\n"
        f"PROHIBIDO dejar {PROHIBIDAS}. Si el fallback necesita serif/sans-serif genérico, va AL FINAL "
        f"después de las fuentes web.\n"
        f"NO cambies nada más: mismos colores, layout, secciones, ids, textos (keep exact layout).\n"
        f"Verifica corriendo desde la raíz C:/Users/manue/OneDrive/Desktop/órbita: "
        f"npm run propuestas:build -- {slug} (0 errores obligatorio).\n"
        f"Reporte corto en español de Chile: fuentes aplicadas y resultado del build.")


def run(cmd, timeout, cwd=None, shell=False):
    try:
        return subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8",
                              errors="replace", timeout=timeout, cwd=cwd, shell=shell)
    except Exception as e:
        class R: stdout = ""; stderr = str(e); returncode = 1
        return R()


def qa_veredicto(slug):
    r = run([sys.executable, str(QA), "--slug", slug], 600, cwd=str(QA.parent))
    out = (r.stdout or "")
    if "→ OK" in out:
        return "OK", ""
    if "→ FALLO" in out:
        det = " | ".join(l.strip() for l in out.splitlines() if "✗" in l)[:280]
        return "FALLO", det
    return "?", (r.stderr or "")[:200]


def build_ok(slug):
    r = run(["npm", "run", "propuestas:build", "--", slug], 600, cwd=str(RAIZ), shell=True)
    return r.returncode == 0


resultados = []
for i, slug in enumerate(WEBS, 1):
    print(f"[{i}/{len(WEBS)}] {slug}: opencode corrigiendo tipografía…", flush=True)
    ok = False
    for intento in (1, 2):
        r = run(["opencode", "run", "--model", MODEL, prompt_correccion(slug)], 900, cwd=str(RAIZ))
        salio = (r.returncode == 0)
        if not salio:
            print(f"   intento {intento}: opencode exit {r.returncode}: {(r.stderr or '')[:150]}", flush=True)
            if intento == 1:
                import time; time.sleep(300)  # cuota free: esperar 5 min y reintentar
            continue
        ok = True
        break
    if not ok:
        resultados.append({"slug": slug, "veredicto": "OPENCODE-FALLO", "detalle": "2 intentos fallidos"})
        continue
    b = build_ok(slug)
    v, det = qa_veredicto(slug)
    resultados.append({"slug": slug, "veredicto": v, "detalle": f"build={'ok' if b else 'ERROR'}; {det}"})
    print(f"   → build={'ok' if b else 'ERROR'} QA={v} {det[:120]}", flush=True)

with open(RAIZ / "QA-RESUMEN-66-v3.csv", "w", newline="", encoding="utf-8-sig") as f:
    w = csv.DictWriter(f, fieldnames=["slug", "veredicto", "detalle"])
    w.writeheader()
    w.writerows(resultados)

oks = sum(1 for x in resultados if x["veredicto"] == "OK")
print(f"FASE TIPOGRAFÍA: {oks}/{len(resultados)} OK · pendientes: "
      f"{[x['slug'] for x in resultados if x['veredicto'] != 'OK']}", flush=True)
