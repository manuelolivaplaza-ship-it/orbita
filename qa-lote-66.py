#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""QA anti-clon en LOTE sobre las 66 webs de COLA-V2.json (auditoría independiente).

Corre qa-anticlon.py por cada slug, captura el veredicto de cada uno y escribe:
  - órbita/QA-RESUMEN-66.csv  (slug, veredicto, fallos, detalle)
  - imprime resumen final al terminar.
"""
import csv, subprocess, sys
from pathlib import Path

RAIZ = Path(r"C:/Users/manue/OneDrive/Desktop/órbita")
QA = Path(r"C:/Users/manue/OneDrive/Desktop/SitiosWeb/_leads/qa-anticlon.py")

c = json.loads if False else None
import json
cola = json.loads((RAIZ / "COLA-V2.json").read_text(encoding="utf-8"))
slugs = [r["slug"] for r in cola["rubros"]]

filas = []
for i, s in enumerate(slugs, 1):
    r = subprocess.run([sys.executable, str(QA), "--slug", s],
                       capture_output=True, text=True, encoding="utf-8",
                       errors="replace", timeout=600, cwd=str(QA.parent))
    out = (r.stdout or "") + (r.stderr or "")
    veredicto, detalle = "?", ""
    for line in out.splitlines():
        if "→ OK" in line:
            veredicto = "OK"
        elif "→ FALLO" in line or "→ CLON" in line:
            veredicto = "FALLO"
            detalle = line.strip()[:200]
    if veredicto == "FALLO":
        malas = [l.strip() for l in out.splitlines() if "fallo" in l.lower() or "clone" in l.lower()][:3]
        detalle = " | ".join(malas)[:300]
    filas.append({"slug": s, "veredicto": veredicto, "detalle": detalle})
    print(f"[{i}/{len(slugs)}] {s}: {veredicto}", flush=True)

with open(RAIZ / "QA-RESUMEN-66.csv", "w", newline="", encoding="utf-8-sig") as f:
    w = csv.DictWriter(f, fieldnames=["slug", "veredicto", "detalle"])
    w.writeheader()
    w.writerows(filas)

oks = sum(1 for x in filas if x["veredicto"] == "OK")
malos = [x["slug"] for x in filas if x["veredicto"] != "OK"]
print(f"RESUMEN FINAL: {oks}/{len(filas)} OK · fallos: {malos if malos else 'NINGUNO'}")
