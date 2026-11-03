# Rediseño de dirección visual de la Home

Rediseñar la Home completa de Patagonia Summer Camp 2027 con una dirección visual nueva, propia y diferenciada, aplicando Impeccable y Taste Skill sin inventar contenido ni romper la experiencia móvil.

## Specs

### S1 — Alcance

> Home completa

La primera superficie de trabajo es la Home completa. Las rutas interiores permanecen fuera del alcance visual inicial, aunque deben conservar su comportamiento, navegación y enlaces.

### S2 — Dirección visual

> Rediseñar la dirección

La identidad visual anterior se usa como evidencia y anti-referencia, no como autoridad. Se reemplaza la dirección de arte de la Home, conservando la verdad del producto, contenido, funciones, nombre, logo, SEO y datos reales.

### S3 — Objetivo principal

> Diferenciar la marca

La nueva Home debe hacer que el campamento sea reconocible por su propio mecanismo y territorio, evitando la estética genérica de una escuela de idiomas o un campamento de aventura.

### S4 — Usuario principal

> Padres y familias

La Home se diseña para adultos que evalúan una experiencia residencial para adolescentes de 13–17 años y necesitan comprenderla, confiar en ella y solicitar información.

### S5 — Fotografía

> Son mixtas

El material fotográfico existente incluye imágenes reales y material provisional o de referencia. La interfaz debe separar honestamente ambos estados y nunca presentar el material provisional como evidencia documental del campamento.

### S6 — Marca base

> Conservar nombre y logo

Se conservan **Patagonia Summer Camp 2027** y el logo existente. La paleta, tipografía, composición, tratamiento fotográfico, motion y sistema de componentes pueden reemplazarse.

### S7 — Workflow de diseño

> apliquemos estas skills en mi proyecto

Impeccable estructura la verdad del producto y el workflow; Taste Skill define la dirección, el argumento visual, la composición y el loop de inspección por screenshots. Las skills de motion, mobile-native y performance deben participar únicamente donde la dirección lo requiera.

### S8 — Calidad visual y WebKit

La Home debe superar las reglas de craft floor de Impeccable y el gate de Taste Skill en 1440, 768 y 390 px. La animación debe usar únicamente `transform` y `opacity`, respetar `prefers-reduced-motion`, mantener el contenido visible sin JavaScript y preservar la geometría correcta en Safari mobile.

## Tasks

- T1 — S1-S6 — Register product truth, audience, evidence constraints, and brand commitments in `PRODUCT.md`. Route: inline. Commit: pending.
- T2 — S2-S3, S7-S8 — Inventory the Home, generate a product-specific visual direction, and record the selected direction contract. Route: inline with Impeccable/Taste tools. Commit: pending.
- T3 — S2-S6, S8 — Rebuild the Home hero and section compositions around the selected direction without inventing claims or evidence. Route: delegated writer. Commit: pending.
- T4 — S2-S4, S8 — Implement purposeful motion, mobile-native behavior, and interaction feedback using compositor-only properties. Route: delegated writer. Commit: pending.
- T5 — S1, S7-S8 — Run Impeccable craft checks, Taste lint/inspect, mobile Safari geometry checks, lint, typecheck, production build, and visual critique rounds. Route: inline plus independent verification. Commit: pending.
- T6 — S1-S8 — Document the shipped design system, provenance, open content swaps, and final verification evidence. Route: inline. Commit: pending.

## Log

### L1

> vamos con npx skills add Leonxlnx/taste-skill

### L2

> vamos a integrar. npx skills add emilkowalski/skill

### L3

> probemos tambien con npx impeccable install

### L4

> vamos a recargar la sesion

### L5

> apliquemos estas skills en mi proyecto

### L6 — Alcance

> Home completa

### L7 — Nivel de intervención

> Rediseñar la dirección

### L8 — Objetivo

> Diferenciar la marca

### L9 — Audiencia principal

> Padres y familias

### L10 — Estado del material fotográfico

> Son mixtas

### L11 — Marca que debe conservarse

> Conservar nombre y logo

### L12 — Dirección visual elegida

> El estándar de la categoría

- The user selected the canonical family-camp execution instead of a novel art direction. The page must therefore win through craft, specificity, photography honesty, and clarity rather than through an unusual visual world.
- `seed:32a966d031c35511` is the recorded seed reference for the direction round.
- Outward Bound is the agreed quality benchmark for clarity, confidence, and family trust; it is a benchmark, not a visual copy.

### L13 — Route reference for the Home

- The Home surface brief lives at `.impeccable/surfaces/app-site-page-tsx.md` and carries the six-block direction contract.
- The memorable moment is the “one week, one daily route” editorial list, built from the already published day schedule.

### L14 — Visual gate rounds

- Inspection round 1 (production build, 1440/768/390): 10 FAIL, 5 WARN.
- Inspection round 2: 1 FAIL, 4 WARN after the correction round.
- The remaining mobile route wrapping and repeated boxed-card findings were corrected; a third production-backed round is required before the design is accepted.

### L15 — Delivery slices (cadena de 7 PRs)
Cada PR queda por debajo del límite de 400 líneas contadas contra su base inmediata:

| PR | Rama | Base | Alcance | Líneas |
| --- | --- | --- | --- | --- |
| 1 | `feat/01-product-context` | `main` | Contexto de producto, brief de superficie, tooling y skills | 385 |
| 2 | `feat/02-design-system` | PR 1 | `DESIGN.md` | 237 |
| 3 | `feat/03-home-components` | PR 2 | `design.json` y componentes `components/home/**` | 383 |
| 4 | `feat/04-home-hero` | PR 3 | CSS base + Hero de la Home | 384 |
| 5 | `feat/05-home-journey` | PR 4 | Ruta diaria, tipografía display y chrome compartido | 245 |
| 6 | `feat/06-home-sections` | PR 5 | Programa, historia, residencia, seguridad, cierre y crítica visual | 337 |
| 7 | `feat/07-home-final` | PR 6 | CSS responsive, motion y página final | 325 |
