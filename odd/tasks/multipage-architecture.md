# Arquitectura multipágina de Patagonia Summer Camp

Reorganizar el sitio en una Home concisa con accesos y cuatro páginas internas canónicas: /programa, /residencia, /nosotros y /familias.

## Specs

### S1 — Rutas

- `/` → Home: resumen y accesos.
- `/programa` → actividades, enfoque pedagógico y timeline interactivo "A typical day".
- `/residencia` → galería e infraestructura de la residencia.
- `/nosotros` → historia completa de Hernán Paulitti y filosofía.
- `/familias` → FAQs, lista de equipaje, normativas y descarga del PDF.

### S2 — Home liviana

La Home no contiene timeline, historia extendida, FAQs ni equipaje. Hero con título directo, subtítulo de inmersión en inglés para 13–17 años, badges de fechas (4 al 12 de diciembre de 2027, Villa La Angostura) y CTA primario; un párrafo editorial que define el campamento; cuatro enlaces internos.

### S3 — Navegación

Navbar con Inicio, Programa, Residencia, Nosotros y Familias, más el selector EN/ES fijado en EN por defecto.

### S4 — Rutas anteriores

`/programa-ingles`, `/programa-ingles/adolescentes`, `/destino/villa-la-angostura`, `/sobre-nosotros`, `/guia-familias` y `/preguntas-frecuentes` responden 301 hacia las rutas canónicas.

### S5 — PDF

El CTA de /familias descarga un PDF real con la guía publicada.

## Tasks

- T1 — S3, S4 — Navegación directa, redirects 301 y sitemap actualizado. Route: delegated writer. Commit: pending.
- T2 — S2 — Home liviana: Hero, resumen editorial y grilla de accesos. Route: delegated writer. Commit: pending.
- T3 — S1 — Página /programa con metodología, actividades y timeline. Route: delegated writer. Commit: pending.
- T4 — S1 — Página /residencia con infraestructura y galería. Route: delegated writer. Commit: pending.
- T5 — S1 — Página /nosotros con historia completa y valores. Route: delegated writer. Commit: pending.
- T6 — S1, S5 — Página /familias con FAQs, equipaje, normativas y PDF. Route: delegated writer. Commit: pending.
- T7 — S1-S5 — Verificación de build, lint, typecheck, gate visual y链 de PRs. Route: inline. Commit: pending.

## Log

### L1

> hagamos el siguiente refactor. # TASK: Refactorización a Arquitectura Multipágina Organizada para Patagonia Summer Camp

### L2 — Decisiones

- The project uses app/ (no src/). New canonical routes live under app/(site)/.
- Legacy routes answer 301 to the new canonical ones to avoid duplicate content.
- The family guide PDF is generated from the published guide content.
