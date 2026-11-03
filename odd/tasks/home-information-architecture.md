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
