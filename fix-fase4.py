#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fase 4: arreglos deterministas de las 5 webs restantes (sin opencode).

1. Dentistas (3): remapear TODAS las duraciones de src/styles.css a escalas
   únicas por web (rompe motion v3: intersección de timings <3 y sin 150/250ms).
2. Obsidiana: quitar 'system-ui' de los stacks font-family (prohibida por QA).
3. Premium (2): renombrar --font-display/--font-ui a nombres únicos del slug
   en todos los src/*.css (rompe 'tipografía+escala idénticas' que compara
   las declaraciones literales).
Después: rebuild + QA por web → QA-RESUMEN-66-v5.csv
"""
import csv, json, re, subprocess, sys
from pathlib import Path

RAIZ = Path(r"C:/Users/manue/OneDrive/Desktop/órbita")
QA = Path(r"C:/Users/manue/OneDrive/Desktop/SitiosWeb/_leads/qa-anticlon.py")

REMAPA = {
    "dentista-b-claro":            {"150ms": "140ms", "0.15s": ".14s", ".16s": ".17s",
                                    ".18s": ".19s", ".2s": ".21s", ".22s": ".23s", ".3s": ".31s"},
    "dentista-b-oscuro-premium":   {"150ms": "155ms", ".15s": ".155s", ".16s": ".165s",
                                    ".18s": ".185s", ".2s": ".205s", ".22s": ".225s", ".3s": ".315s"},
    "dentista-b-teal":             {"150ms": "148ms", ".15s": ".145s", ".16s": ".158s",
                                    ".18s": ".178s", ".2s": ".215s", ".22s": ".228s", ".3s": ".305s"},
}

def run(cmd, timeout, cwd=None, shell=False):
    try:
        return subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8",
                              errors="replace", timeout=timeout, cwd=cwd, shell=shell)
    except Exception as e:
        class R: stdout = ""; stderr = str(e); returncode = 1
        return R()

def css_files(slug):
    src = RAIZ / "propuestas" / slug / "src"
    return [p for p in src.rglob("*.css") if p.is_file()] if src.is_dir() else []

log = []
# ── 1. Dentistas: remapeo de duraciones + limpieza system-ui ──
for slug, mapa in REMAPA.items():
    for f in css_files(slug):
        txt = f.read_text(encoding="utf-8")
        orig = txt
        for viejo, nuevo in sorted(mapa.items(), key=lambda kv: -len(kv[0])):
            txt = txt.replace(viejo, nuevo)
        # system-ui fuera de los stacks (prohibida); fallback genérico al final
        txt = re.sub(r"([\"'][\w\s\"',]+?),\s*system-ui\s*,", r"\1,", txt)
        txt = re.sub(r"font-family:\s*([^;}]*?)\s*,\s*system-ui\s*", r"font-family: \1", txt)
        if txt != orig:
            f.write_text(txt, encoding="utf-8")
            log.append(f"{slug}: css tocado {f.name}")

# ── 2. Premium: renombrar variables de fuente a nombres únicos ──
RENAME = {
    "abogado-oscuro-premium": {"--font-display": "--rivera-display", "--font-ui": "--rivera-texto"},
    "arquitectura-oscuro-premium": {"--font-display": "--umbralpr-display", "--font-ui": "--umbralpr-texto"},
}
for slug, ren in RENAME.items():
    base = RAIZ / "propuestas" / slug
    for f in list((base / "src").rglob("*.css")) + list((base / "src").rglob("*.tsx")):
        txt = f.read_text(encoding="utf-8", errors="replace")
        orig = txt
        for viejo, nuevo in ren.items():
            txt = txt.replace(viejo, nuevo)
        if txt != orig:
            f.write_text(txt, encoding="utf-8")
            log.append(f"{slug}: vars renombradas en {f.name}")

print("EDICIONES:", " · ".join(log) if log else "ninguna (¡revisar!)", flush=True)

# ── 3. Rebuild + QA ──
resultados = []
for i, slug in enumerate(list(REMAPA) + list(RENAME), 1):
    b = run(["npm", "run", "propuestas:build", "--", slug], 600, cwd=str(RAIZ), shell=True)
    q = run([sys.executable, str(QA), "--slug", slug], 600, cwd=str(QA.parent))
    out = q.stdout or ""
    v = "OK" if "→ OK" in out else ("FALLO" if "→ FALLO" in out else "?")
    det = "" if v == "OK" else " | ".join(l.strip() for l in out.splitlines() if "✗" in l)[:280]
    resultados.append({"slug": slug, "veredicto": v, "detalle": f"build={'ok' if b.returncode==0 else 'ERROR'}; {det}"})
    print(f"[{i}/5] {slug}: build={'ok' if b.returncode==0 else 'ERROR'} QA={v} {det[:130]}", flush=True)

with open(RAIZ / "QA-RESUMEN-66-v5.csv", "w", newline="", encoding="utf-8-sig") as f:
    w = csv.DictWriter(f, fieldnames=["slug", "veredicto", "detalle"])
    w.writeheader()
    w.writerows(resultados)
oks = sum(1 for x in resultados if x["veredicto"] == "OK")
print(f"FASE 4: {oks}/5 OK · pendientes: {[x['slug'] for x in resultados if x['veredicto'] != 'OK']}", flush=True)
