# Reestructuración de información y bilingüe de la Home

Reestructurar la Home para reducir saturación de información, eliminar duplicación de secciones, sumar un selector de idioma EN/ES en tiempo de ejecución y reorganizar la logística en una guía para familias.

## Specs

### S1 — Sección única de experiencia

> Eliminar las secciones individuales redundantes ("La Experiencia", "Nuestra Filosofía", "Destinos" y "13 a 17 años").

Un único componente `ExperienceSection` combina en tres columnas: aprendizaje activo (inglés en situación real), entorno natural (Villa La Angostura, lago Nahuel Huapi) y comunidad y edades (13–17 años, autonomía, trabajo en equipo).

### S2 — Selector de idioma

> Agregar un selector de idioma (`EN` / `ES`) en la barra de navegación principal. Idioma por defecto: Inglés (`EN`). Permitir alternar a Español (`ES`) en tiempo de ejecución.

### S3 — Snippet del fundador

> Reducir el texto inicial en la Home a un snippet corto enfocado exclusivamente en la promesa del proyecto en Patagonia. Mover el relato extendido a una vista dedicada (`/sobre-nosotros`) o un modal desplegable.

### S4 — Lista de equipaje visual

> Reemplazar el listado de texto plano por tarjetas visuales interactivas o grilla categorizada, con iconos para ropa y abrigo, calzado, equipamiento de aventura y documentación e higiene.

### S5 — Guía para familias encapsulada

> Retirar de la landing principal las normativas detalladas sobre dinero personal, custodia de celulares, reglas de convivencia y emergencias médicas. Crear un botón flotante o CTA estratégico "Descargar / Ver Guía para las Familias" y mostrar esos datos en un modal estructurado.

### S6 — Copy y tipografía

> Reemplazar "Inglés para vivir en Patagonia" por "Patagonia Summer Camp: Adventure & English Immersion in Villa La Angostura". Asegurar que la primera impresión transmita con claridad que es un campamento residencial de verano en inglés.

### S7 — Preservación

> Conservar intacto el componente interactivo deslizable de la rutina diaria (`A typical day`). Mantener clases de Tailwind moduladas y responsivas. Maquetar para 2 o 3 fotografías de alta calidad evitando espacios blancos.

## Tasks

- T1 — S1, S6, S7 — Reemplazar las secciones redundantes por `ExperienceSection` y reescribir el Hero con el copy en inglés por defecto. Route: delegated writer. Commit: pending.
- T2 — S2 — Implementar `LanguageContext` con diccionario EN/ES y `LanguageSwitcher` en la navegación. Route: delegated writer. Commit: pending.
- T3 — S3, S4, S5 — `AboutSnippet`, `PackingList` y `FamilyGuideModal`, con CTA a la guía para familias. Route: delegated writer. Commit: pending.
- T4 — S1-S7 — Verificar build, lint, typecheck, gate visual por viewport y revisar cada captura. Route: inline. Commit: pending.

## Log

### L1

> realizemos los siguientes ajustes. # TASK: Reestructuración y optimización de UI/UX para Patagonia Summer Camp

### L2 — Alcance técnico

- The Home is the surface under work. The daily-routine timeline (components/site/DayTimeline.tsx) must keep its current scroll-driven behaviour and content; it may be labelled "A typical day" in the English dictionary.
- The site metadata and JSON-LD stay canonical in Spanish (es-AR) for SEO; the visible Home and navigation copy switch at runtime.
- Inner routes keep their current content and are not migrated in this feature.

### L3 — Delivery slices de la reestructuración

| PR | Rama | Alcance | Líneas |
| --- | --- | --- | --- |
| 33 | `feat/33-dictionary-en` | Tipos del diccionario y copy en inglés | 320 |
| 34 | `feat/34-dictionary-es` | Copy en español | 228 |
| 35 | `feat/35-language-runtime` | Store, provider, switcher y navegación bilingüe | 243 |
| 36 | `feat/36-home-sections` | ExperienceSection, timeline, residencia y about snippet | 249 |
| 37 | `feat/37-packing-and-guide` | PackingList, FamilyGuideModal y cierre | 186 |
| 38 | `feat/38-home-composition` | Composición de la Home, provider en layout y retiro de WeekRoute | 368 |
| 39 | `feat/39a-home-core-styles` | CSS core de la Home | 310 |
| 40 | `feat/40a-home-hero-timeline-styles` | CSS del hero y del timeline | 264 |
| 41 | `feat/41-home-responsive-styles` | CSS de cierre y responsive | 177 |
| 42 | `feat/42-packing-layout` | Lista de equipaje como un único campo compuesto | 7 |

Gate visual final de la Home (producción, 1440/768/390): **0 FAIL**, 4 WARN defendidos (escala tipográfica, ausencia de video real, movimiento acotado a un momento autoral y tamaño de imagen).
