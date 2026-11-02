# Replace stock fallbacks with real camp photography and the real typical day

Use the authentic photography supplied in `public/Patagonia Summer Camp 2027 -last.docx` across the site, and rebuild the daily itinerary from the real "A typical day" infographic.

## Specs

### S1 — Authentic asset source

> deje un nuevo doc que se llama Patagonia Summer Camp 2027 -last, en public. en el podes ver que hay imagnes increibles y a typical day.

- The 12 media files inside that DOCX are real camp photography and must replace the editorial Unsplash fallbacks wherever they match the content.
- The "A typical day" infographic carries the real daily rhythm and must drive the itinerary component.
- The founder portrait under the northern lights is a real photograph of Hernán Paulitti and may be used as such.

### S2 — Real typical day

- The infographic defines: 8:00 Wake up, 8:30 Breakfast, 9:15 Morning briefing (45 min), 10:00 Adventure block, 13:30 Lunch, 15:00 Rest & free time, 16:00 English in action, 18:00 Showers, 19:30 Dinner, 21:00 Evening activity, 22:30 Lights out.
- It is labelled: "Un día típico · Times are approximate / Los horarios son aproximados · Explore Beyond / Explorá más allá".
- The itinerary must keep the bilingual EN/ES pairing and the "times are approximate" caveat.

### S3 — Asset naming and delivery

- Rename the extracted media to semantic filenames under `public/camp-media/`.
- Optimize large PNGs to WebP where it pays off, keeping quality high.
- Serve them through `next/image` with `fill`, accurate `sizes`, and blur placeholders.

### S4 — Placement map

- Home: philosophy pillars, founder diptych, residence gallery, and the Hero photographic mood.
- `/destino/villa-la-angostura`: lake, forest overlook with the town, residence exteriors, water.
- `/itinerario-y-actividades`: kayak, trekking group, local producers, group coexistence, lookout, campfire.
- `/programa-ingles`: the real typical-day itinerary.
- `/sobre-nosotros`: the real founder portrait under the aurora and the campfire image.

### S5 — Honesty

- Real camp photography is no longer labelled "imagen editorial de referencia"; it is the actual program.
- Keep the "times are approximate" caveat and keep pending operational details pending.
- Do not claim the campfire, evening activity or any block is confirmed beyond the infographic's own wording.

### S6 — Performance and accessibility

- One priority image per page (the LCP Hero image); everything else lazy.
- Descriptive alt text that reflects the real subject.
- Reduced-motion and keyboard behavior preserved.

## Tasks

- T1 — S1-S3 — Extract, rename, and optimize the real camp media into `public/camp-media/`. Route: inline. Commit: `e26a291` (`feat: add authentic camp photography assets`).
- T2 — S2, S5-S6 — Rebuild the daily itinerary as the real 11-block camp schedule with bilingual labels and approximate-time caveat. Route: inline. Commit: `eb74b9a` (`feat: use real camp photography and typical day across site`).
- T3 — S1, S4-S6 — Replace stock fallbacks with the real photography across Home, destination, activities, program, about, safety, guide and FAQ. Route: inline. Commit: `eb74b9a` (`feat: use real camp photography and typical day across site`).
- T4 — S1-S6 — Verify asset delivery, alt text, metadata parity, accessibility, typecheck, lint, and production build. Route: inline. Commit: `d97f00b` (`chore: keep client reference artwork out of the build`).

### L3 — Verification evidence

- 12 embedded media files were extracted from the DOCX and converted to WebP; the shipped set is 2.8 MB versus 7.1 MB of original media.
- 11 shipped assets are referenced across the site; every referenced path exists in `public/camp-media/`.
- Zero Unsplash references remain in `app/` and `components/`.
- Zero "imagen editorial de referencia" labels remain: every photograph is now real camp photography.
- Every `next/image` usage of a camp-media asset carries an `alt` attribute.
- The infographic `a-typical-day-reference.png` is client reference artwork and is excluded from the build via `.gitignore`.
- `npm run typecheck`, `npm run lint`, and the 16-route production build pass.

## Log

### L1

> deje un nuevo doc que se llama Patagonia Summer Camp 2027 -last, en public. en el podes ver que hay imagnes increibles y a typical day.

### L2 — Implementation decisions

- Extract the 12 embedded media files and keep them as local, versioned assets.
- Use the real founder portrait with an explicit real-photo credit-free caption, since it comes from the owner's own document.
- Replace the previously added "Imagen editorial de referencia" labels wherever genuine camp photography is now used.
