# Build the first Patagonia Summer Camp 2027 site version

Deliver the first complete, conversion-oriented institutional website for Patagonia Summer Camp 2027, including the public route map, shared UI foundations, SEO metadata, JSON-LD, and responsive motion-safe experiences.

## Specs

### S1 — Product and audience

> Vamos a desarrollar el sitio web institucional y landing page de conversión para un Summer Camp 2027 de inmersión en inglés y aventura en Villa La Angostura (Patagonia Argentina). El sitio debe destacar por una UI visualmente deslumbrante, cinemática, moderna y orientada a la conversión de familias.

### S2 — Mandatory stack

> - Framework: Next.js (App Router, versión LTS estable).
> - Lenguaje: TypeScript (modo estricto).
> - Estilos: Tailwind CSS (última versión estable) + CSS Custom Properties para Design Tokens.
> - Iconos: Lucide React (o equivalente ligero).
> - Animaciones: Framer Motion / GSAP (se integrarán por módulos).

### S3 — Development methodology

> 1. Principio fundamental: Mobile-First estricto en todos los layouts y componentes.
> 2. Arquitectura de diseño: Sistema modular reinterpretable mediante tokens CSS centralizados en `globals.css`.
> 3. Abstracción DRY: Crear componentes altamente reutilizables (Botones CTA, Badges, Cards, Section Headers) con variaciones bien tipadas vía props.

### S4 — Current scope boundary

> En este momento NO generes componentes complejos de UI ni páginas completas. Confirmá que has procesado este contexto, las restricciones del stack y la arquitectura de tokens.

The current scope boundary was satisfied during context confirmation. The user's later instruction to create the first site version authorizes implementation of the complete first version.

### S5 — Mobile-first and atomic UI coding rules

> 1. MOBILE-FIRST PARADIGM:
>    - Todo código Tailwind DEBE escribirse partiendo de pantallas móviles (por defecto, sin prefijo).
>    - Los breakpoints (`sm:`, `md:`, `lg:`, `xl:`) se usan únicamente para escalar o reorganizar layouts a pantallas más grandes.
>    - Ejemplo obligatorio: `className="flex flex-col gap-4 md:flex-row md:items-center"`
>
> 2. USO DE VARIABLES CSS Y DESIGN TOKENS:
>    - Utilizar las variables definidas en `globals.css` (ej: `var(--color-primary)`, `bg-card`, `glass-panel`) en lugar de colores estáticos inline desvinculados del tema.
>
> 3. ARQUITECTURA DE COMPONENTES ATÓMICOS:
>    - Los componentes base (Button, Badge, Card, SectionHeader) deben residir en `@/components/ui`.
>    - Utilizar la utilidad `cn()` (clsx + tailwind-merge) para fusionar clases por defecto con las pasadas por `props`.
>    - Tipar explícitamente las variantes usando interfaces TypeScript legibles.
>
> 4. ACCESIBILIDAD Y RENDIMIENTO:
>    - Incluir soporte nativo para teclado y atributos `aria-*`.
>    - Soporte para `prefers-reduced-motion` en animaciones.

### S6 — Centralized theme tokens

> ```css
> @import "tailwindcss";
>
> @layer base {
>   :root {
>     /* Superficies y Fondos */
>     --bg-main: #0b1320;         /* Azul Noche / Dark Obsidian principal */
>     --bg-surface: #0f172a;      /* Capa secundaria (Secciones / Canvas) */
>     --bg-card: #1e293b;         /* Fondo de tarjetas / Contenedores */
>     --bg-card-hover: #26354a;   /* Hover en tarjetas */
>
>     /* Acentos y Marca */
>     --color-primary: #10b981;   /* Verde Esmeralda / Bosque */
>     --color-primary-hover: #059669;
>     --color-secondary: #e6b255; /* Dorado Cálido / Sol de Verano */
>     --color-secondary-hover: #d99f3b;
>
>     /* Textos */
>     --text-main: #f8fafc;       /* Blanco Slate principal */
>     --text-muted: #94a3b8;      /* Gris lectura / Subtítulos */
>     --text-inverse: #020617;    /* Texto sobre fondos claros o botones dorados */
>
>     /* Bordes y Divisores */
>     --border-subtle: rgba(255, 255, 255, 0.08);
>     --border-accent: rgba(16, 185, 129, 0.3);
>
>     /* Sombras y Efectos */
>     --shadow-glow-emerald: 0 0 25px rgba(16, 185, 129, 0.15);
>     --shadow-glow-gold: 0 0 25px rgba(230, 178, 85, 0.15);
>     --glass-background: rgba(30, 41, 59, 0.7);
>     --glass-blur: 12px;
>   }
> }
>
> /* Clases de utilidad personalizadas vinculadas a las variables */
> @utility bg-main { background-color: var(--bg-main); }
> @utility bg-surface { background-color: var(--bg-surface); }
> @utility bg-card { background-color: var(--bg-card); }
> @utility text-main { color: var(--text-main); }
> @utility text-muted { color: var(--text-muted); }
> @utility text-primary-accent { color: var(--color-primary); }
> @utility text-secondary-accent { color: var(--color-secondary); }
> @utility border-subtle { border-color: var(--border-subtle); }
> @utility glass-panel {
>   background-color: var(--glass-background);
>   backdrop-filter: blur(var(--glass-blur));
>   border: 1px solid var(--border-subtle);
> }
> ```

### S7 — GPU-only motion skill

> - Zero Reflow / Repaint: Animar ÚNICAMENTE `transform` (`translate3d`, `scale`, `rotate`) y `opacity`. Prohibido animar `width`, `height`, `margin`, `padding`, `top` o `left`.
> - Hardware Acceleration: Aplicar `transform: translateZ(0)` o `will-change: transform, opacity` solo durante secuencias de interacción intensas.
> - Curva de Movimiento Standard: Usar `cubic-bezier(0.16, 1, 0.3, 1)` para desaceleración suave.
> - Accesibilidad Obligatoria: Respetar la preferencia `prefers-reduced-motion` del usuario mediante el hook `useReducedMotion` en Framer Motion o modificadores Tailwind `motion-safe:` / `motion-reduce:`.

### S8 — Route architecture

> ```text
> app/
> ├── (site)/
> │   ├── page.tsx                           # / (Home / Landing Principal)
> │   ├── programa-ingles/
> │   │   ├── page.tsx                       # /programa-ingles (Visión general del método)
> │   │   ├── ninos/
> │   │   │   └── page.tsx                   # /programa-ingles/ninos (Landing 8-11 años)
> │   │   └── adolescentes/
> │   │       └── page.tsx                   # /programa-ingles/adolescentes (Landing 13-17 años)
> │   ├── destino/
> │   │   └── villa-la-angostura/
> │   │       └── page.tsx                   # /destino/villa-la-angostura (SEO geolocalizado)
> │   ├── itinerario-y-actividades/
> │   │   └── page.tsx                       # /itinerario-y-actividades (Cronograma, Kayak, Trekking)
> │   ├── seguridad-y-coordinacion/
> │   │   └── page.tsx                       # /seguridad-y-coordinacion (Protocolos, Staff, Ratio)
> │   ├── preguntas-frecuentes/
> │   │   └── page.tsx                       # /preguntas-frecuentes (FAQ interactivo + Schema)
> │   ├── guia-familias/
> │   │   └── page.tsx                       # /guia-familias (Equipamiento, logística y normas)
> │   └── sobre-nosotros/
> │       └── page.tsx                       # /sobre-nosotros (Historia de Hernán Paulitti)
> ├── sitemap.ts                             # Sitemap XML dinámico
> ├── robots.ts                              # Configuración index/follow
> ├── manifest.json                          # PWA / Web App Manifest
> ├── layout.tsx                             # Layout raíz (RootLayout + OpenGraph global)
> └── globals.css                            # Tokens CSS y estilos base
> ```

### S9 — Page metadata, keywords, and JSON-LD

> 1. `/` (Home / Landing Principal)
>    - Title: Patagonia Summer Camp 2027 | Inmersión en Inglés & Aventura
>    - Focus KW: summer camp patagonia, campamento de ingles argentina
>    - Schema JSON-LD: Event, Organization, AggregateRating
>
> 2. `/programa-ingles` (Metodología)
>    - Title: Metodología Learning by Doing | Inmersión Lingüística
>    - Focus KW: inmersion ingles verano, aprender ingles haciendo
>    - Schema JSON-LD: EducationalOccupationalProgram
>
> 3. `/programa-ingles/adolescentes` (Programa 13-17)
>    - Title: Campamento de Inglés para Adolescentes (13-17 años)
>    - Focus KW: campamento adolescentes ingles, viaje verano jovenes patagonia
>    - Schema JSON-LD: Course
>
> 4. `/programa-ingles/ninos` (Programa 8-11)
>    - Title: Campamento de Inglés para Niños (8-11 años)
>    - Focus KW: campamento ninos patagonia, summer camp ninos argentina
>    - Schema JSON-LD: Course
>
> 5. `/destino/villa-la-angostura` (SEO Geolocalizada)
>    - Title: Campamento de Verano en Villa La Angostura | Nahuel Huapi
>    - Focus KW: summer camp villa la angostura, turismo educativo patagonia
>    - Schema JSON-LD: Place, LandmarksOrHistoricalBuildings
>
> 6. `/itinerario-y-actividades` (Experiencias Outdoor)
>    - Title: Itinerario & Aventura al Aire Libre | Kayak y Trekking
>    - Focus KW: actividades verano villa la angostura, trekking kayak campamento
>    - Schema JSON-LD: ItemList
>
> 7. `/seguridad-y-coordinacion` (Confianza & Salud)
>    - Title: Seguridad, Acompañamiento y Salud 24/7 | Summer Camp
>    - Focus KW: seguridad campamentos residenciales, coordinadores bilingues
>    - Schema JSON-LD: MedicalBusiness / SafetyRule
>
> 8. `/preguntas-frecuentes` (FAQ Hub)
>    - Title: Preguntas Frecuentes | Patagonia Summer Camp 2027
>    - Focus KW: dudas campamento ingles, precio summer camp patagonia
>    - Schema JSON-LD: FAQPage
>
> 9. `/guia-familias` (Manual Operativo)
>    - Title: Guía para Familias: Logística, Equipamiento y Normas
>    - Focus KW: que llevar campamento verano, equipamiento summer camp
>    - Schema JSON-LD: Article
>
> 10. `/sobre-nosotros` (Storytelling & Fundador)
>     - Title: De Laponia a la Patagonia | Nuestra Historia
>     - Focus KW: hernan paulitti, fundador patagonia summer camp
>     - Schema JSON-LD: Person

### S10 — Technical metadata and SEO rules

> 1. Dynamic Metadata API: exporta el objeto `generateMetadata` o `metadata` en cada `page.tsx` con títulos, descripciones de 150-160 caracteres, `openGraph` e `image` promocional (1200x630px).
> 2. Canonical URLs: asegura que cada página incluya su enlace canónico mediante `metadataBase`.
> 3. Inyección de Schemas: crea un componente helper `@/components/seo/JsonLd.tsx` que inyecte etiquetas `<script type="application/ld+json">` limpias en cada ruta correspondiente.
> 4. Archivos de Sistema:
>    - Configura `sitemap.ts` para que devuelva la lista de todas las URLs con sus `lastModified` y frecuencias de cambio.
>    - Configura `robots.ts` habilitando el rastreo completo para motores de búsqueda (`allow: '/'`).

### S11 — Integrated delivery rule

> A partir de ahora, cada vez que creemos una subpágina, incorporaremos su configuración de metadatos, palabras clave y Schema correspondiente junto con la UI.

## Tasks

- T1 — S1-S7, S11 — Scaffold the strict Next.js/Tailwind/TypeScript foundation, design tokens, atomic UI components, motion utilities, and shared shell. Route: inline. Commit: `02864a3` (`feat: scaffold summer camp design system`).
- T2 — S1-S7, S9, S11 — Build the conversion landing page with cinematic visual composition, reusable sections, and accessible motion. Route: inline. Commit: `4de28b2` (`feat: build summer camp landing page`).
- T3 — S5, S8-S11 — Build the English-program, age-group, and destination pages with page-specific metadata and JSON-LD. Route: delegated writer. Commit: `70f596e` (`feat: add program and destination pages`).
- T4 — S5, S8-S11 — Build the itinerary, safety, FAQ, family-guide, and about pages with page-specific metadata and JSON-LD. Route: delegated writer. Commit: `a000afe` (`feat: add experience and trust pages`); landing focus metadata correction: `dadc9ba`.
- T5 — S8-S10 — Add root layout metadata, canonical handling, sitemap, robots, manifest, and shared SEO helpers. Route: inline. Commit: `d2bf768` (`feat: configure site-wide seo infrastructure`); root layout and JSON-LD helper were included in `02864a3`.
- T6 — S1-S11 — Verify responsive behavior, metadata, structured data, accessibility, reduced motion, build, and lint; close the feature. Route: inline. Commit: `3d7c332` (`chore: finalize summer camp site quality gates`).

## Log

### L1

> crea la primer version del sitio web! vamos a darle power

### L2 — Context confirmed before implementation

> [CONTEXTO DEL PROYECTO]
> Vamos a desarrollar el sitio web institucional y landing page de conversión para un Summer Camp 2027 de inmersión en inglés y aventura en Villa La Angostura (Patagonia Argentina). El sitio debe destacar por una UI visualmente deslumbrante, cinemática, moderna y orientada a la conversión de familias.

### L3 — Stack constraints confirmed

> [STACK TÉCNICO OBLIGATORIO]
> - Framework: Next.js (App Router, versión LTS estable).
> - Lenguaje: TypeScript (modo estricto).
> - Estilos: Tailwind CSS (última versión estable) + CSS Custom Properties para Design Tokens.
> - Iconos: Lucide React (o equivalente ligero).
> - Animaciones: Framer Motion / GSAP (se integrarán por módulos).

### L4 — UI coding rules confirmed

> [SKILL CONFIGURATION: MOBILE-FIRST & ATOMIC UI]
> Reglas estrictas de codificación para todos los componentes de este proyecto:
> 1. MOBILE-FIRST PARADIGM
> 2. USO DE VARIABLES CSS Y DESIGN TOKENS
> 3. ARQUITECTURA DE COMPONENTES ATÓMICOS
> 4. ACCESIBILIDAD Y RENDIMIENTO

### L5 — Motion skill added

> [SKILL CONFIGURATION: GPU ONLY]
> - Zero Reflow / Repaint: Animar ÚNICAMENTE `transform` (`translate3d`, `scale`, `rotate`) y `opacity`. Prohibido animar `width`, `height`, `margin`, `padding`, `top` o `left`.
> - Hardware Acceleration: Aplicar `transform: translateZ(0)` o `will-change: transform, opacity` solo durante secuencias de interacción intensas.
> - Curva de Movimiento Standard: Usar `cubic-bezier(0.16, 1, 0.3, 1)` para desaceleración suave.
> - Accesibilidad Obligatoria: Respetar la preferencia `prefers-reduced-motion` del usuario mediante el hook `useReducedMotion` en Framer Motion o modificadores Tailwind `motion-safe:` / `motion-reduce:`.

### L6 — SEO and route architecture confirmed

> [CONTEXTO DE ARQUITECTURA WEB & ESTRATEGIA SEO DE NAVEGACIÓN]
> - Configura la estructura del proyecto respetando la jerarquía de directorios dentro de `app/`.
> - Aplica a cada página la siguiente estrategia de metadatos, intención de búsqueda y datos estructurados.
> - Configura `sitemap.ts` para que devuelva la lista de todas las URLs con sus `lastModified` y frecuencias de cambio.
> - Configura `robots.ts` habilitando el rastreo completo para motores de búsqueda (`allow: '/'`).

### L7 — Implementation decisions

- Use the current stable Next.js 16 line with App Router, React 19, TypeScript strict mode, and Tailwind CSS 4.
- Use local shared components and static route metadata so the first version has no runtime dependency on an external content or CMS service.
- Use remote editorial photography from Unsplash through `next/image`, with a documented remote image allowlist.
- Use Framer Motion only through a reduced-motion-aware shared reveal component; no layout-property animation is permitted.

### L8 — Verification evidence

- All 10 public routes exist with the exact S9 titles, focus keywords, canonical URLs, OpenGraph data, and 150–160 character descriptions.
- Route-level JSON-LD covers every schema type required by S9; the safety route includes both `MedicalBusiness` and `SafetyRule`.
- Babel parsed all 25 TypeScript/TSX source files without syntax failures; a separate JSX scope audit found no unresolved components.
- Static checks found no inline hex colors in application TSX, no layout-property animations, and no prohibited static Tailwind palette classes in application components.
- The initial `npm install` timed out during dependency download, so `next build`, ESLint, and the project-local TypeScript binary remain unexecuted in this session; the repository requires a successful install before those runtime gates can be claimed.
