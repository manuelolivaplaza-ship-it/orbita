---
version: alpha
name: "ÉTER Concesionaria — Patio Claro"
description: Ficha-catálogo industrial para concesionaria de usados chilena. Patio ordenado, precio publicado en celda, confianza sin letra chica.
colors:
  primary: "#121416"
  secondary: "#2F4A5C"
  tertiary: "#9E2B1E"
  neutral: "#F8F5EF"
  state: "#C2851A"
  state-ink: "#7A5210"
typography:
  h1:
    fontFamily: Oswald
    fontSize: 5rem
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "0.02em"
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 1.05rem
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: 0px
  md: 0px
  lg: 0px
spacing:
  sm: 12px
  md: 16px
  lg: 48px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px
  button-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 12px
  ficha-unidad:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 12px
  etiqueta-estado:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.state-ink}"
    rounded: "{rounded.sm}"
---

## Overview

Patio de autos ordenado como catálogo industrial: la ficha de unidad es la unidad de
repetición, el precio vive en la celda. Disciplina de Vendo Autos y PETERSEN: dato limpio,
cero ruido, rojo automotriz desaturado solo en interacción.

## Colors

- **Primary (#121416):** tinta para texto y CTA sólido.
- **Secondary (#2F4A5C):** azul patio, etiquetas de ficha y filtros.
- **Tertiary (#9E2B1E):** rojo automotriz desaturado, <5% del área: kickers, links, estados activos.
- **State (#C2851A):** ámbar "oportunidad / único dueño" como etiqueta de filete 1px.

## Typography

Oswald condensada de taller para display con tracking +0.02em; IBM Plex Sans para datos y cuerpo.
Números de precio en tabular. Prohibidas Inter, Poppins, Roboto.

## Do's and Don'ts

- Radios 0 en TODO. Filetes 1px #E2DDD4, nunca sombras difusas.
- PROHIBIDO #000/#FFF puros, rojo neón #FF1A1A, degradados, orbes.
