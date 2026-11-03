# Rollout del sistema canónico a todo el sitio

Aplicar el sistema visual de la Home (el “cuaderno de campo”) a todas las rutas públicas, preservando el efecto de timeline del itinerario diario en `/programa-ingles` y sin alterar los hechos, claims ni disclaimers del producto.

## Specs

### S1 — Alcance

> apliquemos estos cambios a todo el sitio

Rutas públicas a convertir: `/programa-ingles`, `/programa-ingles/adolescentes`, `/destino/villa-la-angostura`, `/itinerario-y-actividades`, `/seguridad-y-coordinacion`, `/guia-familias`, `/preguntas-frecuentes`, `/sobre-nosotros`, `/contacto`. `/programa-ingles/ninos` permanece como redirect.

### S2 — Itinerario diario

> en /programa-ingles, esta el itinerario diario que es un scroll donde se ve en forma de timeline, dejemos ese efecto, podemos cambiar el diseño.

El efecto de timeline scroll-driven de `TypicalDayTimeline` se conserva como comportamiento: rail vertical, marcador que viaja, entrada y salida de cada bloque y reveal por `transform`/`opacity`. Su diseño se reescribe con el sistema canónico.

### S3 — Verdad del producto

Se preservan verbatim fechas, edad, datos de la residencia, disclaimers, las 14 respuestas de FAQ, las 11 secciones de la guía, la biografía del fundador, las etiquetas de procedencia fotográfica y los JSON-LD. No se inventan claims.

### S4 — Sistema visual

Se aplican `DESIGN.md`: Bosque de lenga, Verde lago, Piedra de Patagonia, Barlow Condensed para display, corners cuadrados, profundidad tonal sin sombras en reposo, sin gradientes decorativos, sin glass, márgenes iguales, tipografía de dos líneas y motion con `transform`/`opacity` únicamente.

### S5 — Entrega

Cada PR queda por debajo de 400 líneas contra su base inmediata.

## Tasks

- T1 — S4 — Crear el kit compartido `components/site/**`, el layout `(site)` y migrar los primitivos compartidos (Button, Badge, Card, SectionHeader, PageHero) al sistema canónico. Route: inline. Commit: pending.
- T2 — S2, S3 — Rediseñar `/programa-ingles` preservando el timeline scroll-driven. Route: delegated writer. Commit: pending.
- T3 — S3, S4 — Rediseñar `/programa-ingles/adolescentes`. Route: delegated writer. Commit: pending.
- T4 — S3, S4 — Rediseñar `/itinerario-y-actividades`. Route: delegated writer. Commit: pending.
- T5 — S3, S4 — Rediseñar `/destino/villa-la-angostura`. Route: delegated writer. Commit: pending.
- T6 — S3, S4 — Rediseñar `/seguridad-y-coordinacion`. Route: delegated writer. Commit: pending.
- T7 — S3, S4 — Rediseñar `/guia-familias`. Route: delegated writer. Commit: pending.
- T8 — S3, S4 — Rediseñar `/preguntas-frecuentes`. Route: delegated writer. Commit: pending.
- T9 — S3, S4 — Rediseñar `/sobre-nosotros`. Route: delegated writer. Commit: pending.
- T10 — S3, S4 — Rediseñar `/contacto` preservando el formulario y sus estados. Route: delegated writer. Commit: pending.
- T11 — S1-S5 — Verificar el sitio completo con lint, typecheck, build, inspection por viewport y corregir los hallazgos. Route: inline. Commit: pending.

## Log

### L1

> vamos a integrar. npx skills add emilkowalski/skill

### L2

> probemos tambien con npx impeccable install

### L3

> vamos con npx skills add Leonxlnx/taste-skill

### L4

> apliquemos estos cambios a todo el sitio. me encantaron. en /programa-ingles, esta el itinerario diario que es un scroll donde se ve en forma de timeline, dejemos ese efecto, podemos cambiar el diseño.

### L5 — Dirección heredada

La Home ya define el sistema canónico y su brief (`odd/tasks/summer-camp-home-redesign.md`, `.impeccable/surfaces/app-site-page-tsx.md`, `DESIGN.md`). El rollout extiende ese sistema; no crea un segundo lenguaje visual.

### L6 — Delivery slices del rollout

Cada PR queda por debajo de 400 líneas contra su base inmediata:

| PR | Rama | Alcance | Líneas |
| --- | --- | --- | --- |
| 8 | `feat/08-site-kit` | Kit canónico compartido, layout `(site)` y tokens globales | 373 |
| 9 | `feat/09-shared-primitives` | Button, Badge, Card, SectionHeader y CSS responsive | 156 |
| 10 | `feat/10-page-hero` | Hero compartido canónico | 59 |
| 11 | `feat/11-section-layouts` | Layouts compartidos de sección | 64 |
| 12 | `feat/12-seguridad` | Ruta de seguridad y coordinación | 276 |
| 13 | `feat/13-itinerario-styles` | CSS de la ruta de actividades | 126 |
| 14 | `feat/14-itinerario-page` | Ruta de actividades | 291 |
| 15 | `feat/15-destino-styles` | CSS de la ruta de destino | 147 |
| 16 | `feat/16-destino-page` | Ruta de destino | 288 |
| 17 | `feat/17-programa-timeline` | Timeline diario scroll-driven con imagen y fallback sin JS | 210 |
| 18 | `feat/18-programa-page` | Ruta de programa de inglés | 173 |
| 19 | `feat/19-adolescentes` | Ruta del programa para adolescentes | 398 |
| 20 | `feat/20-guia-familias` | Ruta de guía para familias | 378 |
| 21 | `feat/21-preguntas` | Ruta de preguntas frecuentes | 288 |
| 22 | `feat/22-sobre-nosotros` | Ruta de quiénes somos | 318 |
| 23 | `feat/23-contacto` | Ruta de contacto con el formulario intacto | 186 |
| 24 | `feat/24-programa-polish` | Imágenes, contraste y jerarquía del itinerario diario | 56 |
| 25 | `feat/25-timeline-legible` | Legibilidad del timeline con drift de transform | 20 |
| 26 | `feat/26-contact-form` | Formulario de contacto legible sobre superficie canónica | 236 |
| 27 | `feat/27-real-photography` | Fotografía real del campamento en itinerario y timeline | 56 |
| 28 | `feat/28-faq-contrast` | Contraste del cierre de preguntas frecuentes | 4 |
| 29 | `feat/29-remove-illustrations` | Retiro de las ilustraciones y capturas de diagnóstico | binarios |
