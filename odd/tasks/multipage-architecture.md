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

### L3 — Delivery slices de la arquitectura multipágina

| PR | Rama | Alcance | Líneas |
| --- | --- | --- | --- |
| 43a1 | `feat/43a1-redirect-programa` | 308 permanente de /programa-ingles | 129 |
| 43a2 | `feat/43a2-redirect-programa-adolescentes` | 308 permanente de /programa-ingles/adolescentes | 190 |
| 43a3 | `feat/43a3-redirect-destino` | 308 permanente de /destino/villa-la-angostura | 263 |
| 43a4 | `feat/43a4-redirect-sobre-nosotros` | 308 permanente de /sobre-nosotros | 158 |
| 43a5 | `feat/43a5-redirect-guia` | 308 permanente de /guia-familias | 186 |
| 43a6 | `feat/43a6-redirect-preguntas` | 308 permanente de /preguntas-frecuentes | 210 |
| 43a7 | `feat/43a7-canonical-sitemap` | Sitemap con las cinco rutas canónicas | 35 |
| 43b1 | `feat/43b1-dictionary-model` | Modelo de copy por página | 96 |
| 43b2 | `feat/43b2-dictionary-en` | Copy en inglés | 235 |
| 43b3 | `feat/43b3-dictionary-es` | Copy en español | 235 |
| 43c1 | `feat/43c1-canonical-navigation` | Navbar con las cinco rutas y el switcher | 65 |
| 43c2 | `feat/43c2-lean-home` | Home: hero, resumen y cuatro accesos | 374 |
| 43d1 | `feat/43d1-remove-orphan-home-parts` | Se retiran las secciones que pasaron a rutas internas | 377 |
| 43e1 | `feat/43e1-remove-orphan-home-styles` | Se retiran los CSS huérfanos | 251 |
| 44 | `feat/44-programa-page` | Página /programa con la timeline interactiva | 850 |
| 45 | `feat/45-residencia-page` | Página /residencia con galería | 540 |
| 46 | `feat/46-nosotros-page` | Página /nosotros con la historia completa | 458 |
| 47 | `feat/47-familias-content` | Copy de la guía y generador del PDF | 767 |
| 48 | `feat/48-familias-page` | Página /familias con FAQs, equipaje y políticas | 447 |
| 49 | `feat/49-footer-and-pdf` | Footer canónico y PDF publicado | 324 |
| 51 | `feat/51-bilingual-timeline` | La timeline habla EN/ES | 81 |
| 52 | `feat/52-instant-top-navigation` | Cada enlace interno salta al top al instante | 60 |
| 53a | `feat/53a-programa-polish` | Contraste, motion y fotos de /programa | 238 |
| 53b | `feat/53b-residencia-polish` | Contraste, motion y titular de /residencia | 207 |
| 53c | `feat/53c-nosotros-polish` | Contraste, motion, fotos y titular de /nosotros | 203 |
| 53d | `feat/53d-familias-polish` | Sin hairlines, equipaje como campo único, motion y fotos | 308 |
| 53e | `feat/53e-home-hero-and-skip-link` | Frame de la Home y retiro del skip link | 132 |
| 54 | `feat/54-hero-and-reveal-fixes` | Hero visible al cargar y Reveal honesto con reduced motion | 79 |

Desviación registrada: PR44, PR45, PR46, PR47 y PR48 superan el límite de 400 líneas porque una ruta (copy + vista + CSS) es indivisible sin stubs intermedios.

Los redirects legacy responden 308 permanente (permanentRedirect): Next.js 16 no admite 301 en next.config.ts ni en App Router.
