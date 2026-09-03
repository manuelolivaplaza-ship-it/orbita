#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fase 3: diferenciación real de las 5 webs restantes.

- dentistas (3): reducir similitud CSS entre hermanas <35% (rehacer composición
  de secciones/estructura CSS, manteniendo marca y contenido).
- 2 premium: cambiar pareja tipográfica a una firma distinta de cualquier otra web.
Después: rebuild + QA. Resultado → QA-RESUMEN-66-v4.csv
"""
import csv, subprocess, sys, time
from pathlib import Path

RAIZ = Path(r"C:/Users/manue/OneDrive/Desktop/órbita")
QA = Path(r"C:/Users/manue/OneDrive/Desktop/SitiosWeb/_leads/qa-anticlon.py")
MODEL = "opencode-go/muse-spark-1.2-contributor"

TAREAS = {
    "dentista-b-claro": (
        "Diferencia esta web de sus hermanas dentista (dentista-b-oscuro-premium, dentista-b-teal). "
        "El QA anti-clon mide 48% de líneas CSS idénticas: debes bajarlo bajo 30%.\n"
        "Hazlo REESTRUCTURANDO, no retocando: 1) reordena la composición de secciones en App.tsx "
        "(otro flujo narrativo: p.ej. prueba social antes de especialidades), 2) renombra y reorganiza "
        "las clases CSS en styles.css (otra arquitectura: cambia grid por flex donde tenga sentido, "
        "otro sistema de espaciado, otro tratamiento de bordes/sombras), 3) cambia el patrón visual "
        "de tiles/gallery (otra grilla, otro ritmo). Mantén: marca SERENA DENTAL, textos literales del "
        "BLUEPRINT, colores base, la media en public/media y los ids únicos ya presentes.\n"),
    "dentista-b-oscuro-premium": (
        "Diferencia esta web de dentista-b-claro. El QA mide 40% CSS idéntico: baja bajo 30%. "
        "Método: reordena el flujo de secciones en App.tsx (otra narrativa), reescribe la arquitectura "
        "de clases CSS en styles.css (otro sistema de layout/espaciado/bordes), otro patrón de galería. "
        "Mantén: marca OBSIDIANA, textos literales, paleta oscura base, media en public/media, ids únicos.\n"),
    "dentista-b-teal": (
        "Diferencia esta web de dentista-b-claro y dentista-b-oscuro-premium. El QA mide 47-48% CSS "
        "idéntico: baja bajo 30%. Método: reordena secciones en App.tsx, reescribe arquitectura CSS "
        "en styles.css (otro layout/espaciado/tratamiento visual), otro patrón de galería. "
        "Mantén: marca LAGO AZUL, textos literales, paleta teal base, media en public/media, ids únicos.\n"),
    "abogado-oscuro-premium": (
        "El QA detecta que tu firma tipográfica+escala es IDÉNTICA a otra web (var(--font-display) con "
        "la misma escala). Cambia la pareja tipográfica a una firma PROPIA: usa display 'Marcellus' "
        "(700) + ui 'Nunito Sans' (400,600,700) vía Google Fonts en index.html, ajusta las variables "
        "--font-display/--font-ui en styles.css y la escala del h1 a clamp(2.5rem,5.5vw,4.2rem). "
        "NO toques nada más: mismos colores, layout, secciones, ids, textos.\n"),
    "arquitectura-oscuro-premium": (
        "El QA detecta que tu firma tipográfica+escala es IDÉNTICA a arquitectura-b-oscuro. Cambia la "
        "pareja a una firma PROPIA: usa display 'Fraunces' (600,700) + ui 'Karla' (400,500,700) vía "
        "Google Fonts en index.html, ajusta las variables de fuente en styles.css y la escala del h1 a "
        "clamp(2.6rem,6vw,4.4rem) con tracking -0.03em. NO toques nada más: mismos colores, layout, "
        "secciones, ids, textos.\n"),
}


def run(cmd, timeout, cwd=None, shell=False):
    try:
        return subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8",
                              errors="replace", timeout=timeout, cwd=cwd, shell=shell)
    except Exception as e:
        class R: stdout = ""; stderr = str(e); returncode = 1
        return R()


resultados = []
for i, (slug, extra) in enumerate(TAREAS.items(), 1):
    print(f"[{i}/{len(TAREAS)}] {slug}: diferenciando…", flush=True)
    ok = False
    for intento in (1, 2):
        prompt = (
            f"Trabajas SOLO en propuestas/{slug}/ de la raíz C:/Users/manue/OneDrive/Desktop/órbita.\n"
            + extra +
            f"Después verifica: npm run propuestas:build -- {slug} a 0 errores (obligatorio).\n"
            f"Reporte corto en español de Chile.")
        r = run(["opencode", "run", "--model", MODEL, prompt], 1200, cwd=str(RAIZ))
        if r.returncode == 0:
            ok = True
            break
        print(f"   intento {intento} falló: {(r.stderr or '')[:150]}", flush=True)
        if intento == 1:
            time.sleep(300)
    if not ok:
        resultados.append({"slug": slug, "veredicto": "OPENCODE-FALLO", "detalle": "2 intentos fallidos"})
        continue
    b = run(["npm", "run", "propuestas:build", "--", slug], 600, cwd=str(RAIZ), shell=True).returncode == 0
    q = run([sys.executable, str(QA), "--slug", slug], 600, cwd=str(QA.parent))
    out = q.stdout or ""
    v = "OK" if "→ OK" in out else ("FALLO" if "→ FALLO" in out else "?")
    det = "" if v == "OK" else " | ".join(l.strip() for l in out.splitlines() if "✗" in l)[:280]
    resultados.append({"slug": slug, "veredicto": v, "detalle": f"build={'ok' if b else 'ERROR'}; {det}"})
    print(f"   → build={'ok' if b else 'ERROR'} QA={v} {det[:120]}", flush=True)

with open(RAIZ / "QA-RESUMEN-66-v4.csv", "w", newline="", encoding="utf-8-sig") as f:
    w = csv.DictWriter(f, fieldnames=["slug", "veredicto", "detalle"])
    w.writeheader()
    w.writerows(resultados)
oks = sum(1 for x in resultados if x["veredicto"] == "OK")
print(f"FASE 3: {oks}/{len(resultados)} OK · pendientes: {[x['slug'] for x in resultados if x['veredicto'] != 'OK']}", flush=True)
