# Agenda tu videollamada

## Specs

- **S1**: "dejemos creada tambien una nueva pagina donde se pueda agendar videollamadas."
- **S2**: "un nuevo item en el navbar que me lleve a esta pagina. 'agenda tu videollamada'."
- **S3**: "trabajemos la parte de front." Front only: the booking flow runs entirely in the browser, with no backend call and no invented confirmation.
- **S4**: "usemos los skills pro que tenemos de front para diseñarlo." The design follows the front-end skills available in the project (`design-taste-frontend` house style and look-and-fix loop, `impeccable` UX rules) and stays inside the existing field-notebook design system.
- **S5**: The new page belongs to the camp: one edition, 4 to 12 December 2027, Villa La Angostura, adolescents aged 13 to 17. Copy uses only facts the site already states.
- **S6**: The page is bilingual, like the rest of the site: Spanish and English copy live in the route copy file and the navbar item follows the shared dictionary.

## Tasks

- **T1** (S4, S5, S6) — Design direction and copy deck for `/agenda`: inventory, claims, a direction drawn with the taste skill keeping the brand palette and type, then the full ES/EN copy. Route: inline. Commit: pending user request.
- **T2** (S1, S4, S5) — Build the `/agenda` page in the field-notebook system: route, view, copy file, CSS, hero, what happens in the call, how it works, what to expect, closing. Route: inline. Commit: pending user request.
- **T3** (S1, S3) — Build the front-end scheduling form: day and time-slot picker, contact details, topic, validation, and a confirmation state that never claims a real booking was made. Route: inline. Commit: pending user request.
- **T4** (S2) — Plumb the navbar item, the sitemap entry, the route JSON-LD and the shared metadata. Route: inline. Commit: pending user request.
- **T5** (S1, S4) — Verify: lint, typecheck, build, screenshots at 1440/768/390, the taste-skill inspector, and the look-and-fix loop. Route: inline. Commit: pending user request.

## Log

- **L1** (user, verbatim): "dejemos creada tambien una nueva pagina donde se pueda agendar videollamadas. trabajemos la parte de front. una nuevo item en el navbar que me lleve a esta pagina. 'agenda tu videollamada'. usemos los skills pro que tenemos de front para diseñarlo."
- **L2** (decision): The booking flow is front only. The submit state is an honest in-browser confirmation ("your request is ready, the team will confirm the slot"), never a fake booking confirmation.
- **L3** (decision): The nav item label is "Agendá tu videollamada" (ES) / "Book your video call" (EN). If the 1280px header crowds, the label shortens to "Videollamada" and the full phrase stays as the page title.
- **L4** (evidence): The site's real photography lives in `public/camp-media/` (13 files). The page uses those photographs, not invented ones.
- **L5** (evidence): The real FAQ content lives in `app/(site)/familias/copy.ts`. The new page links to `/familias` for details instead of duplicating the answers.
- **L6** (design): The taste skill dealt three directions; the page takes `page-is-the-object` with the artefact of the coordinator's paper slot sheet: one continuous sheet on a forest desk, the slot grid on it, a perforated line, the details form and a tear-off receipt. The idea sentence: on this page, the coordinator's printed call sheet becomes the booking calendar. The nearest competitor (a generic booking widget) cannot carry it; this one can.
- **L7** (deviation): The shared header, footer and 1280px frame stay, because they are canonical for this site. The direction's "no navigation outside the card" was not taken. The palette and the type come from the brand (`--keep palette,type`), so the sheet is paper on forest green and the type is Barlow Condensed over Arial.
- **L8** (deviation): No video. The camp has no honest clip of itself, and a stock clip of another place would misstate the client's own world. The motion layer is instead the scroll-driven photograph move, the sheet head receding, and the entrance of every section.
- **L9** (evidence): The inspector (`inspect.mjs`) was run on the route at 1440, 768 and 390. The remaining findings that were fixed: a headline that wrapped past two lines, an eyebrow-like action label, an off-centre closing card and a gradient-built select arrow.
- **L10** (evidence): The booking is honest about being front only. The receipt says the request is assembled on the device and does not travel to a server yet. No invented scarcity, no invented confirmation, no invented testimonials.
- **L11** (evidence): The inspector ends with 0 FAIL and 3 WARN on `/agenda` (1440, 768, 390): the size count matches the site's own scale, no video is defended (the camp has no honest clip of itself) and the motion floor is answered by the scroll-driven photograph, the receding sheet head and the entrance of every section. The same inspector reports 4 WARN and 0 FAIL on the existing `/programa`.
- **L12** (evidence): `npm run lint`, `npx tsc --noEmit` and `npm run build` pass; `/agenda` prerenders as a static route. The native review could not assess the candidate while it stays uncommitted with new untracked files, and the risk-gated plan requires no separate verifier for it.
- **L13** (user correction, verbatim): "no me gusta la separacion del titulo 'agenda tu videollamada' en desktop". The title was split in two lines and the second one was pushed to the right edge of the sheet (the direction's spread-the-words move). The title is now a single line, left aligned, like the other heroes of the site: ES `["Agenda tu videollamada"]`, EN `["Book your video call"]`. The lead below it gained air.
