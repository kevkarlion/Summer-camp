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
