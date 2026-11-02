# Make the strategic pages visual and move the daily itinerary

Give Villa La Angostura, the activities page, and the English program the photographic, camp-styled treatment they need as strategic pages, and relocate the illustrative daily timeline from the Home into `/programa-ingles`.

## Specs

### S1 — Destination needs visual support

> quiero que destino/villa-la-angostura tenga apoyo visual, necesito mostrar el lugar de manera mas visual con imagenes.

- `/destino/villa-la-angostura` must show Villa La Angostura and its surroundings through a substantial photographic narrative, not only the current Hero plus text cards.
- The visual support must cover: the Nahuel Huapi lake and turquoise water, native forest and green surroundings, mountains, the town/Patagonia settlement character, and the natural setting of the residence area.
- Images must be clearly framed as editorial references where they do not document the real property.

### S2 — Activities page needs visual support

> aca tambien /itinerario-y-actividades, son paginas estrategicas donde necesita imagenes.

- `/itinerario-y-actividades` must show each confirmed activity with a contextual photograph: kayak on turquoise water, trekking in forest/mountain terrain, local producers, group coexistence, and nature exploration.
- A photographic grid or illustrated activity cards must replace the current icon-only cards as the primary visual treatment.
- Content, metadata, JSON-LD, and the pending-schedule disclaimer must remain accurate.

### S3 — Move the daily itinerary into the English program

> El Itinerario tambien quieor tenerlo de manera grafica, va a quedar muy bien con un estilo campamento, creo que podriamos ponerlo aca /programa-ingles al itinerario diario.

- Move the illustrative daily timeline (`TypicalDayTimeline`) from the Home to `/programa-ingles`, where it becomes the page's daily itinerary section.
- The timeline must read as a graphic camp strip: clear block structure, camp medallions, photographic hover/focus reveals, and the existing pending-confirmation disclaimer.
- The Home keeps its content but no longer duplicates the daily timeline section.

### S4 — Camp art direction

- Every new image surface must use the existing camp language: warm heritage tones, medallion icons, organic masks, local copy scrims, and editorial-reference labels.
- No custom SVG artwork; continue using the existing icon library with `CampIcon`.

### S5 — Performance and accessibility

- Use `next/image` with `fill`, accurate `sizes`, blur placeholders, and `priority` only for the true LCP image.
- Every image needs descriptive alt text; fallback photography must be identified as editorial reference.
- Preserve reduced-motion behavior, keyboard operation, focus visibility, and semantic heading order.

### S6 — Constraints

- Keep all routes, metadata, canonical URLs, JSON-LD, and factual content from the authoritative DOCX intact.
- No new claims about schedules, providers, prices, ratios, or confirmed availability.

## Tasks

- T1 — S1-S6 — Rebuild `/destino/villa-la-angostura` with a photographic landscape narrative of Villa La Angostura and its natural surroundings. Route: inline. Commit: `6dd81b1` (`feat: add photographic strategic pages and camp itinerary`).
- T2 — S2, S4-S6 — Rebuild `/itinerario-y-actividades` with contextual photography for each activity. Route: inline. Commit: `6dd81b1` (`feat: add photographic strategic pages and camp itinerary`).
- T3 — S3-S6 — Move the illustrative daily timeline from the Home to `/programa-ingles` as a graphic camp itinerary strip. Route: inline. Commit: `6dd81b1` (`feat: add photographic strategic pages and camp itinerary`).
- T4 — S1-S6 — Verify image loading, editorial labels, metadata parity, accessibility, typecheck, lint, and production build. Route: inline. Commit: `chore: verify strategic page visual upgrade`.

### L3 — Verification evidence

- All 14 distinct Unsplash URLs used by the two strategic pages returned HTTP 200.
- Both pages keep byte-identical `metadata` exports (title, description, keywords, canonical, OpenGraph, Twitter).
- Destination: 4 photographic scenes (turquoise water, native forest, mountain range, lake landscape) plus a parallax evening scene; 7 editorial-reference labels.
- Activities: 5 contextual activity photographs (kayak, trekking, local producers, group coexistence, landscape exploration) plus the existing Hero; 6 editorial-reference labels.
- The Home no longer imports or renders `TypicalDayTimeline`; `/programa-ingles` renders it as the “El itinerario diario” section.
- Every `next/image` block has a responsive `sizes` value; only the PageHero LCP image is prioritized.
- `npm run typecheck`, `npm run lint`, and the 16-route production build pass.

## Log

### L1

> quiero que destino/villa-la-angostura tenga apoyo visual, necesito mostrar el lugar de manera mas visual con imagenes. aca tambien /itinerario-y-actividades, son paginas estrategicas donde necesita imagenes. El Itinerario tambien quieor tenerlo de manera grafica, va a quedar muy bien con un estilo campamento, creo que podriamos ponerlo aca /programa-ingles al itinerario diario.

### L2 — Implementation decisions

- Reuse `TypicalDayTimeline` as-is where possible so the Home and program pages share one implementation.
- Keep `CampIcon`, `copy-scrim`, `OrganicMaskImage`, `ParallaxImageContainer`, and `ImageLightbox` as the visual system for the new sections.
- Every fallback photograph carries an editorial-reference label so it is never presented as the real residence or real participants.
