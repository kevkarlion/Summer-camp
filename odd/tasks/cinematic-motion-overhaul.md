# Overhaul visual y motion de la Home

Elevar la Home y los componentes UI compartidos con una dirección visual cinemática, orgánica y accesible, sin alterar el contenido, el SEO, las rutas ni los contratos del proyecto.

## Specs

### S1 — Alcance y restricciones

> Actúa como Lead Creative Developer y Director de Arte galardonado en Awwwards. Vamos a refactorizar la Home (`app/page.tsx`) y los componentes UI para transformar una maquetación estándar en una experiencia cinemática, orgánica e impactante.

> Mantén intacta toda la información del proyecto, los datos SEO, la estructura de rutas y la accesibilidad. Tu objetivo es ELEVAR LA CAPA VISUAL Y EL MOTION DESIGN.

### S2 — Atmósfera visual y fondos dinámicos

> 1. Textura Ambient: Añadir un overlay global de grano/ruido SVG en `globals.css` con `pointer-events-none opacity-[0.03]` para dar textura editorial.
> 2. Ambient Glow Orbs: Inyectar en el fondo de las secciones clave (Hero, Residencia, Historia) esferas de luz desenfocadas (`bg-emerald-500/10` y `bg-amber-500/10` con `blur-[120px]`) que tengan una animación sutil de flotación/respiración (`animate-pulse-slow`).

### S3 — Tipografía cinemática y máscaras

> 1. Reemplazar los fade-ins simples de los titulares H1 y H2 por un componente `<TextReveal>`:
>    - Envuelve las palabras o líneas en spans con `inline-block overflow-hidden`.
>    - Anima la posición `y` desde `100%` a `0%` con la curva `cubic-bezier(0.16, 1, 0.3, 1)` y escalonamiento (`staggerChildren: 0.05`).

### S4 — Smooth scroll y parallax

> 1. Integrar Lenis Scroll (`@studio-freight/react-lenis` o implementación vía hook) en `layout.tsx` para sincronizar el desplazamiento del ratón con las animaciones.
> 2. Aplicar Parallax Diferencial en las imágenes de la Residencia y Villa La Angostura:
>    - Usa `useScroll` y `useTransform` de Framer Motion para que las imágenes se muevan a distinta velocidad que los textos contenedores (`y: [-30, 30]`).

### S5 — Micro-interacciones de alto valor percibido

> 1. Cursor Contextual: Crear un componente `<CustomCursor>` que siga al ratón con física de resorte (`useSpring`). Al pasar sobre el Bento Grid o la galería de imágenes, debe expandirse y mostrar el texto `"EXPLORAR"` o `"PATAGONIA"`.
> 2. Magnetic Buttons: Actualizar el componente `Button` principal para que atraiga ligeramente la posición del puntero dentro de un radio de 40px al hacer hover (`translate-x` / `translate-y` dinámico).
> 3. Cards con Tilt 3D & Spotlight Gradient: En las tarjetas de la filosofía y el Bento Grid, agregar un efecto de luz donde un gradiente radial blanco/dorado siga la posición exacta del cursor (`onMouseMove` actualizando variables CSS `--mouse-x` y `--mouse-y`).

### S6 — Ejecución y calidad

> - Realiza los cambios por módulos: primero la atmósfera y smooth scroll, luego el texto cinemático y finalmente las interacciones de tarjetas/cursor.
> - Revisa que todas las animaciones cumplan con GPU Acceleration (`opacity`, `transform`) y respeten `prefers-reduced-motion`.
> - Entrega los componentes actualizados y el refactor de `app/page.tsx`.

### S7 — Contrato de motion vigente

> - Zero Reflow / Repaint: Animar ÚNICAMENTE `transform` (`translate3d`, `scale`, `rotate`) y `opacity`. Prohibido animar `width`, `height`, `margin`, `padding`, `top` o `left`.
> - Hardware Acceleration: Aplicar `transform: translateZ(0)` o `will-change: transform, opacity` solo durante secuencias de interacción intensas.
> - Curva de Movimiento Standard: Usar `cubic-bezier(0.16, 1, 0.3, 1)` para desaceleración suave.
> - Accesibilidad Obligatoria: Respetar la preferencia `prefers-reduced-motion` del usuario mediante el hook `useReducedMotion` en Framer Motion o modificadores Tailwind `motion-safe:` / `motion-reduce:`.

## Tasks

- T1 — S2, S4, S6, S7 — Add global grain, ambient glow foundations, slow breathing motion, and Lenis smooth-scroll integration. Route: delegated writer. Commit: `b254baf` (`feat: add cinematic atmosphere and smooth scroll`).
- T2 — S3, S6, S7 — Build the reusable kinetic `TextReveal` component and integrate semantic H1/H2 typography without losing heading levels. Route: delegated writer. Commit: `44d3778` (`feat: add kinetic text reveals`).
- T3 — S5, S6, S7 — Build the contextual cursor, magnetic Button behavior, and interactive Card tilt/spotlight system. Route: delegated writer. Commit: `560b298` (`feat: add high-value motion interactions`).
- T4 — S1-S7 — Refactor the actual Home route at `app/(site)/page.tsx` into the cinematic composition with preserved content, SEO, residence/history atmosphere, bento interactions, and differential parallax. Route: delegated writer. Commit: `558aa60` (`feat: redesign home as cinematic experience`).
- T5 — S1-S7 — Verify metadata parity, semantic structure, interaction fallbacks, reduced motion, typecheck, lint, build, and visual smoke evidence. Route: inline. Commit: `chore: verify cinematic motion overhaul`.
- T6 — S1, S6, S7 — Integrate the supplied `public/patagonia-summer-camp-logo.svg` into the header and footer through transparent dark-surface variants while preserving the supplied geometry and excluding Windows Zone.Identifier metadata. Route: inline. Commit: `a2fcfb0` (`feat: integrate supplied brand logo`).
- T7 — S1, S11 — Reconcile public claims, metadata, structured data, and internal links with `docs/content/authoritative-brief.md`; permanently redirect `/programa-ingles/ninos` to the 13–17 program and remove unsupported claims. Route: delegated writer. Commit: `feat: align site content with authoritative brief`.

## Log

### L1

> [TASK: VISUAL POLISH & CINEMATIC MOTION ENGINE OVERHAUL]
>
> Actúa como Lead Creative Developer y Director de Arte galardonado en Awwwards. Vamos a refactorizar la Home (`app/page.tsx`) y los componentes UI para transformar una maquetación estándar en una experiencia cinemática, orgánica e impactante.
>
> Mantén intacta toda la información del proyecto, los datos SEO, la estructura de rutas y la accesibilidad. Tu objetivo es ELEVAR LA CAPA VISUAL Y EL MOTION DESIGN.
>
> ---
>
> ### FASE 1: ATMÓSFERA VISUAL & FONDOS DINÁMICOS
> 1. Textura Ambient: Añadir un overlay global de grano/ruido SVG en `globals.css` con `pointer-events-none opacity-[0.03]` para dar textura editorial.
> 2. Ambient Glow Orbs: Inyectar en el fondo de las secciones clave (Hero, Residencia, Historia) esferas de luz desenfocadas (`bg-emerald-500/10` y `bg-amber-500/10` con `blur-[120px]`) que tengan una animación sutil de flotación/respiración (`animate-pulse-slow`).
>
> ---
>
> ### FASE 2: ANIMACIÓN DE TEXTOS Y MÁSCARAS (KINETIC TYPOGRAPHY)
> 1. Reemplazar los fade-ins simples de los titulares H1 y H2 por un componente `<TextReveal>`:
>    - Envuelve las palabras o líneas en spans con `inline-block overflow-hidden`.
>    - Anima la posición `y` desde `100%` a `0%` con la curva `cubic-bezier(0.16, 1, 0.3, 1)` y escalonamiento (`staggerChildren: 0.05`).
>
> ---
>
> ### FASE 3: SMOOTH SCROLL & PARALLAX EN SECCIONES
> 1. Integrar Lenis Scroll (`@studio-freight/react-lenis` o implementación vía hook) en `layout.tsx` para sincronizar el desplazamiento del ratón con las animaciones.
> 2. Aplicar Parallax Diferencial en las imágenes de la Residencia y Villa La Angostura:
>    - Usa `useScroll` y `useTransform` de Framer Motion para que las imágenes se muevan a distinta velocidad que los textos contenedores (`y: [-30, 30]`).
>
> ---
>
> ### FASE 4: INTERACCIONES DE ALTO VALOR PERCIBIDO (MICRO-INTERACTIONS)
> 1. Cursor Contextual: Crear un componente `<CustomCursor>` que siga al ratón con física de resorte (`useSpring`). Al pasar sobre el Bento Grid o la galería de imágenes, debe expandirse y mostrar el texto `"EXPLORAR"` o `"PATAGONIA"`.
> 2. Magnetic Buttons: Actualizar el componente `Button` principal para que atraiga ligeramente la posición del puntero dentro de un radio de 40px al hacer hover (`translate-x` / `translate-y` dinámico).
> 3. Cards con Tilt 3D & Spotlight Gradient: En las tarjetas de la filosofía y el Bento Grid, agregar un efecto de luz donde un gradiente radial blanco/dorado siga la posición exacta del cursor (`onMouseMove` actualizando variables CSS `--mouse-x` y `--mouse-y`).
>
> ---
>
> ### INSTRUCCIONES DE EJECUCION
> - Realiza los cambios por módulos: primero la atmósfera y smooth scroll, luego el texto cinemático y finalmente las interacciones de tarjetas/cursor.
> - Revisa que todas las animaciones cumplan con GPU Acceleration (`opacity`, `transform`) y respeten `prefers-reduced-motion`.
> - Entrega los componentes actualizados y el refactor de `app/page.tsx`.

### L2 — Decisiones de implementación

- The repository implements the Home route at `app/(site)/page.tsx`; preserve the public `/` route and refactor that file rather than creating a conflicting `app/page.tsx`.
- Use the current maintained `lenis` package because `@studio-freight/react-lenis` is deprecated in favor of `lenis`.
- Use Motion's current `motion/react` API already installed in the project.
- Keep custom cursor behavior behind fine-pointer and reduced-motion checks so keyboard, touch, and assistive-technology users retain the native interaction model.
- Keep all existing Home copy, metadata, JSON-LD, CTA destinations, and route structure intact.

### L3 — Identidad de marca supplied

> tambien te deje en public el logo svg

- The supplied SVG is preserved as the canonical brand source. A transparent full lockup and a compact emblem crop are generated from its geometry for dark surfaces.
- The Windows Zone.Identifier sidecar is excluded from version control.

### L4 — Contenido autoritativo supplied

> te deje en public un doc con la info real del sitio web. analizalo

- `public/Patagonia Summer Camp 2027.docx` is treated as the authoritative content source for a subsequent factual reconciliation pass.
- The product decision is to redirect `/programa-ingles/ninos` permanently to `/programa-ingles/adolescentes`; the 2027 program will not advertise an 8–11 cohort.
- The structured source brief is maintained at `docs/content/authoritative-brief.md`.
