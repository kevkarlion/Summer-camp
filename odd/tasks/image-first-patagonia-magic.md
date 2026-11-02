# Transform the Home into an image-first Patagonia experience

Build a deeply visual, editorial Home experience that connects the Patagonia Summer Camp story with the real content brief, while preserving accessibility, SEO, route stability, mobile-first behavior, and the GPU-only motion contract.

## Specs

### S1 — Creative direction and scope

> Actúa como Director de Arte y Lead Creative Developer. Vamos a transformar la Home Page (`app/page.tsx`) y los componentes UI para que la experiencia sea profundamente visual, artística y conmovedora, capturando la magia de un campamento de verano en la naturaleza de Villa La Angostura, Patagonia.

> Cada sección que pueda llevar una imagen, un encuadre artístico o una narrativa visual DEBE integrarlo mediante máscaras orgánicas, parallax diferencial y componentes fotográficos de alto impacto.

The public Home is implemented at `app/(site)/page.tsx`; preserve the `/` route and do not create a conflicting `app/page.tsx`.

### S2 — Visual narrative and photography

> - Atmósfera: Contraste entre el verde esmeralda de los bosques nativos, el turquesa cristalino del Lago Nahuel Huapi, la calidez dorada de los fogones nocturnos y la madera de las cabañas de montaña.
> - Formatos de Imagen: Reemplazar bordes rectangulares aburridos por máscaras SVG con bordes orgánicos suaves (`mask-image` con curvas de montaña o arcos alpinos), superposiciones (*overlapping photos*) y tarjetas con efecto *Glassmorphism*.

### S3 — Photographic components

> 1. `<ParallaxImageContainer>` (`@/components/ui/ParallaxImage.tsx`):
>    - Contenedor con `overflow-hidden` donde la imagen interna tenga una escala inicial (`scale-110`) y se desplace suavemente en sentido opuesto al scroll usando `useTransform` de Framer Motion.
>
> 2. `<OrganicMaskImage>` (`@/components/ui/OrganicMaskImage.tsx`):
>    - Renderiza fotografías envueltas en máscaras con formas de siluetas naturales o esquinas redondeadas asimétricas (`rounded-[2rem] rounded-tl-[5rem]`), logrando una estética de libro de viajes o revista editorial.
>
> 3. `<HoverRevealImageCard>` (`@/components/ui/HoverRevealCard.tsx`):
>    - Tarjeta donde la imagen de fondo está ligeramente desaturada u oscurecida, y al hacer hover cobra vida con color pleno, un ligero `zoom` (`scale-105`) y despliega capas de texto explicativo con animación elástica.

### S4 — Home visual composition

> 1. HERO SECTION (La Entrada Mágica):
>    - Fondo: Fotografía de alta resolución / video en loop de Villa La Angostura (lago y montañas) con degradado dinámico hacia `#0b1320`.
>    - Elemento Fotográfico Flotante: Tarjeta superpuesta en la esquina con efecto *Glassmorphism* que muestra una foto de jóvenes alrededor del fogón al atardecer con el badge: *"Diciembre 2027 · Nahuel Huapi"*.
>
> 2. NUESTRA FILOSOFÍA (Tarjetas Ilustradas / Fotográficas):
>    - Cada uno de los 5 pilares (*Aventura y Confianza*, *Aprender Haciendo*, *Libertad*, *Comunidad*, *Cuerpo y Mente*) debe incluir un fondo fotográfico contextual (ej. senderos en el bosque, kayak en aguas cristalinas, talleres al aire libre).
>
> 3. DE LAPONIA A LA PATAGONIA (Storytelling del Fundador):
>    - Layout de díptico fotográfico:
>      * Foto 1: Hernán Paulitti en Laponia bajo Auroras Boreales / nieve.
>      * Foto 2 (Superpuesta en diagonal): Hernán y el grupo en el fogón / montaña patagónica con luz cálida.
>    - Transición visual: Efecto de fusión entre el frío del norte europeo y el calor de la aventura patagónica.
>
> 4. ALOJAMIENTO & PREDIO (Bento Grid Fotográfico de 26 Hectáreas):
>    - Galería Bento cinemática con 4 fotos principales del predio:
>      1. Vista panorámica del Lago Nahuel Huapi desde la propiedad (Card grande).
>      2. La residencia de piedra y madera integrada en el bosque nativo.
>      3. El gran salón comedor iluminado para momentos de convivencia.
>      4. El sector deportivo y espacios al aire libre al atardecer.
>    - Cada foto incluye un botón en la esquina para abrir vista ampliada o lightbox.
>
> 5. A TYPICAL DAY (Línea de Tiempo con Iconos y Micro-Fotografías):
>    - Al pasar el cursor por cada bloque horario del día (*Breakfast*, *Adventure Block*, *English in Action*, *Evening Bonfire*), se revela una miniatura fotográfica emergente (*tooltip photo preview*) mostrando exactamente la actividad en vivo.

### S5 — Technical and asset requirements

> - Utiliza el componente optimizado `<Image>` de Next.js (`next/image`) con `fill`, `sizes`, `priority` (en Hero) y `placeholder="blur"`.
> - Configura imágenes de prueba/fallback de alta calidad (vía Unsplash/Pexels con temática de *Patagonia mountains*, *alpine lakes*, *campfires*, *kayaking*, *teens trekking*) para visualizar el impacto de inmediato.
> - Revisa que la carga de imágenes no afecte el Core Web Vitals (LCP/CLS) ni la fluidez del scroll.

### S6 — Authoritative content constraints

> - The DOCX brief defines a residential camp for adolescents aged 13–17, planned for 4–12 December 2027, with kayak, trekking, visits to local producers, short participatory English sessions each morning, and a residence 2 km from Villa La Angostura's center with 26 hectares of park and native forest, a Nahuel Huapi shoreline, a sports area, and a large dining room.
> - Price, staff ratio, bilingual status, 24/7 medical coverage, final insurance details, room assignments, and other operational/legal details remain unconfirmed and must be described as pending.
> - Any fallback image depicting a person is an editorial placeholder, not a real photograph of Hernán Paulitti. Alt text and implementation must not identify an Unsplash subject as Hernán.
> - The "typical day" is an illustrative visual journey, not a confirmed schedule. Confirmed English sessions occur each morning; the exact times, evening bonfire, and remaining schedule require approval before being presented as program facts.

### S7 — Motion and accessibility contract

> - Zero Reflow / Repaint: Animar ÚNICAMENTE `transform` (`translate3d`, `scale`, `rotate`) y `opacity`. Prohibido animar `width`, `height`, `margin`, `padding`, `top` o `left`.
> - Curva de Movimiento Standard: Usar `cubic-bezier(0.16, 1, 0.3, 1)` para desaceleración suave.
> - Accesibilidad Obligatoria: Respetar la preferencia `prefers-reduced-motion` del usuario mediante el hook `useReducedMotion` en Framer Motion o modificadores Tailwind `motion-safe:` / `motion-reduce:`.
> - Preserve semantic headings, descriptive image alternatives, keyboard-visible focus, native keyboard behavior, reduced-motion fallbacks, and touch usability.
> - The lightbox must be keyboard operable, dismissible with Escape, labelled, and must restore focus to its trigger.

## Tasks

- T1 — S2-S5, S7 — Build reusable `ParallaxImageContainer`, `OrganicMaskImage`, and `HoverRevealImageCard` components with typed props, optimized images, blur placeholders, and reduced-motion fallbacks. Route: inline. Commit: `189f37d` (`feat: add editorial photography components`).
- T2 — S1-S5, S7 — Refactor `app/(site)/page.tsx` into the image-first composition: cinematic Hero, five photographic philosophy pillars, Laponia-to-Patagonia diptych, 26-hectare photographic residence gallery with accessible lightbox, and typical-day visual timeline. Route: delegated writer. Commit: `be4a563` (`feat: redesign home as image-first patagonia story`).
- T3 — S1-S7 — Reconcile the visual composition with the authoritative brief, ensure fallback imagery is not presented as authentic documentary photography, and preserve all current factual corrections from T7 of the cinematic feature. Route: inline. Commits: `63c2c69`, `7de3c80` (token-safe reveal and single-priority image corrections).
- T4 — S1-S7 — Verify image loading, Core Web Vitals safeguards, responsive behavior, keyboard lightbox, reduced motion, metadata parity, typecheck, lint, and production build. Route: inline. Commit: `chore: verify image-first home quality gates`.

## Log

### L1

> [TASK: IMAGE-FIRST & PATAGONIA MAGIC OVERHAUL]
>
> Actúa como Director de Arte y Lead Creative Developer. Vamos a transformar la Home Page (`app/page.tsx`) y los componentes UI para que la experiencia sea profundamente visual, artística y conmovedora, capturando la magia de un campamento de verano en la naturaleza de Villa La Angostura, Patagonia.
>
> Cada sección que pueda llevar una imagen, un encuadre artístico o una narrativa visual DEBE integrarlo mediante máscaras orgánicas, parallax diferencial y componentes fotográficos de alto impacto.
>
> ---
>
> ### 1. NARRATIVA VISUAL & ESTÉSTICA FOTOGRÁFICA
> - Atmósfera: Contraste entre el verde esmeralda de los bosques nativos, el turquesa cristalino del Lago Nahuel Huapi, la calidez dorada de los fogones nocturnos y la madera de las cabañas de montaña.
> - Formatos de Imagen: Reemplazar bordes rectangulares aburridos por máscaras SVG con bordes orgánicos suaves (`mask-image` con curvas de montaña o arcos alpinos), superposiciones (*overlapping photos*) y tarjetas con efecto *Glassmorphism*.
>
> ---
>
> ### 2. COMPONENTES VISUALES Y FOTOGRÁFICOS A IMPLEMENTAR
>
> 1. `<ParallaxImageContainer>` (`@/components/ui/ParallaxImage.tsx`):
>    - Contenedor con `overflow-hidden` donde la imagen interna tenga una escala inicial (`scale-110`) y se desplace suavemente en sentido opuesto al scroll usando `useTransform` de Framer Motion.
>
> 2. `<OrganicMaskImage>` (`@/components/ui/OrganicMaskImage.tsx`):
>    - Renderiza fotografías envueltas en máscaras con formas de siluetas naturales o esquinas redondeadas asimétricas (`rounded-[2rem] rounded-tl-[5rem]`), logrando una estética de libro de viajes o revista editorial.
>
> 3. `<HoverRevealImageCard>` (`@/components/ui/HoverRevealCard.tsx`):
>    - Tarjeta donde la imagen de fondo está ligeramente desaturada u oscurecida, y al hacer hover cobra vida con color pleno, un ligero `zoom` (`scale-105`) y despliega capas de texto explicativo con animación elástica.
>
> ---
>
> ### 3. INTEGRACIÓN VISUAL SECCIÓN POR SECCIÓN EN LA HOME
>
> 1. HERO SECTION (La Entrada Mágica):
>    - Fondo: Fotografía de alta resolución / video en loop de Villa La Angostura (lago y montañas) con degradado dinámico hacia `#0b1320`.
>    - Elemento Fotográfico Flotante: Tarjeta superpuesta en la esquina con efecto *Glassmorphism* que muestra una foto de jóvenes alrededor del fogón al atardecer con el badge: *"Diciembre 2027 · Nahuel Huapi"*.
>
> 2. NUESTRA FILOSOFÍA (Tarjetas Ilustradas / Fotográficas):
>    - Cada uno de los 5 pilares (*Aventura y Confianza*, *Aprender Haciendo*, *Libertad*, *Comunidad*, *Cuerpo y Mente*) debe incluir un fondo fotográfico contextual (ej. senderos en el bosque, kayak en aguas cristalinas, talleres al aire libre).
>
> 3. DE LAPONIA A LA PATAGONIA (Storytelling del Fundador):
>    - Layout de díptico fotográfico:
>      * Foto 1: Hernán Paulitti en Laponia bajo Auroras Boreales / nieve.
>      * Foto 2 (Superpuesta en diagonal): Hernán y el grupo en el fogón / montaña patagónica con luz cálida.
>    - Transición visual: Efecto de fusión entre el frío del norte europeo y el calor de la aventura patagónica.
>
> 4. ALOJAMIENTO & PREDIO (Bento Grid Fotográfico de 26 Hectáreas):
>    - Galería Bento cinemática con 4 fotos principales del predio:
>      1. Vista panorámica del Lago Nahuel Huapi desde la propiedad (Card grande).
>      2. La residencia de piedra y madera integrada en el bosque nativo.
>      3. El gran salón comedor iluminado para momentos de convivencia.
>      4. El sector deportivo y espacios al aire libre al atardecer.
>    - Cada foto incluye un botón en la esquina para abrir vista ampliada o lightbox.
>
> 5. A TYPICAL DAY (Línea de Tiempo con Iconos y Micro-Fotografías):
>    - Al pasar el cursor por cada bloque horario del día (*Breakfast*, *Adventure Block*, *English in Action*, *Evening Bonfire*), se revela una miniatura fotográfica emergente (*tooltip photo preview*) mostrando exactamente la actividad en vivo.
>
> ---
>
> ### 4. INSTRUCCIONES TÉCNICAS Y ASSETS
> - Utiliza el componente optimizado `<Image>` de Next.js (`next/image`) con `fill`, `sizes`, `priority` (en Hero) y `placeholder="blur"`.
> - Configura imágenes de prueba/fallback de alta calidad (vía Unsplash/Pexels con temática de *Patagonia mountains*, *alpine lakes*, *campfires*, *kayaking*, *teens trekking*) para visualizar el impacto de inmediato.
> - Revisa que la carga de imágenes no afecte el Core Web Vitals (LCP/CLS) ni la fluidez del scroll.
>
> Entrega los componentes fotográficos actualizados y la estructura refactorizada de `app/page.tsx` con toda la carga visual integrada.

### L2 — Execution constraints

- Implement sequentially after the authoritative content reconciliation finishes so the Home is not edited concurrently.
- Use `docs/content/authoritative-brief.md` as the factual source of truth.
- Use editorial fallback photography only. Do not claim fallback portraits show Hernán Paulitti or the actual residence.
- Preserve the existing Home metadata, canonical URL, JSON-LD, CTA destinations, and the 13–17 audience correction.
- Reuse or replace the existing `components/motion/ParallaxImage.tsx` through the requested public `components/ui/ParallaxImage.tsx` API without leaving duplicate implementations.

### L3 — Verification evidence

- All 18 distinct Unsplash image URLs returned HTTP 200 during the final availability check.
- The Home contains exactly one explicitly prioritized image, reserved for the LCP Hero background; every `next/image` placement has a responsive `sizes` value.
- The Home retains one semantic H1 through `TextReveal`, the native-dialog lightbox has labelled content and explicit focus entry/restoration, and the typical-day timeline exposes `aria-expanded`/`aria-controls` with touch activation.
- Fallback image alt text identifies editorial references, while residence, founder, and schedule sections disclose that imagery and timing are illustrative rather than documentary or final.
- `npm run typecheck`, `npm run lint`, and `npm run build` pass; all 15 routes prerender successfully.
- The supplied raster `public/logo.png` is preserved as an alternate brand source. The visible header/footer continue using the optimized SVG lockup to avoid duplicate payload weight.
