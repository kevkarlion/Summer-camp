# Give the site iconography a camp insignia treatment

Restyle the iconography across the entire public site so it reads as camp/scout heritage rather than technology product UI, without drawing custom SVG artwork.

## Specs

### S1 — Direction

> los iconos tambien, veamos algo mas tipo insignia. de toda la web. no quiero que luzca como una web de tecnologia.

### S2 — Approach constraint

> no quiero que hagas svg, no suelen quedar bien. es solamente usar iconos pero darles un toque mas tipo campamento.

- Keep the existing icon library and its glyph artwork.
- The camp treatment is achieved through presentation: heritage medallion frames, warm tones, and optical consistency.

### S3 — Camp treatment

- Every decorative content icon sits inside a circular camp medallion: a stitched double ring, warm khaki/oxblood/navy tones, and a heavier rounded stroke.
- The medallion replaces the previous emerald square tiles that read as technology UI.
- Accent glyphs that are not medallion-worthy (arrows, checkmarks, pins) move to the parchment/gold accent so the site stops glowing emerald.
- Optical sizing is consistent across small, medium, and large medallions.

### S4 — Scope

- All public routes under `app/(site)/**` and shared components under `components/**` that render content icons.
- Reusable component: `components/ui/CampIcon.tsx`.
- Lucide stays a dependency; no custom SVG artwork is introduced.

### S5 — Constraints

> - Zero Reflow / Repaint: Animar ÚNICAMENTE `transform` (`translate3d`, `scale`, `rotate`) y `opacity`.
> - Accesibilidad Obligatoria: Respetar la preferencia `prefers-reduced-motion`.

- Icons remain decorative and accessible: default `aria-hidden`, no interactive semantics.
- No layout, content, route, or SEO changes.

## Tasks

- T1 — S1-S5 — Build the `CampIcon` medallion treatment and migrate every decorative content icon across the public site. Route: inline. Commit: `feat: give site icons a camp insignia treatment`.

## Log

### L1

> [TASK] los iconos tambien, veamos algo mas tipo insignia. de toda la web. no quiero que luzca como una web de tecnologia.

### L2 — Implementation decisions

- The first attempt proposed hand-drawn project-owned SVG icons. The user rejected custom SVG artwork because it usually renders poorly, so the direction was corrected to keep the existing icon library and restyle it through camp medallion framing and warm heritage tones.
- The medallion reuses the existing scout palette tokens (`--scout-khaki`, `--scout-oxblood`, `--scout-navy`, `--scout-parchment`).
