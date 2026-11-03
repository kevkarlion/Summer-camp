# Home Redesign — Visual Critique Rounds

## ROUND 1

Seen in one second: A calm outdoor summer-camp campaign split between a large landscape photograph and a left-aligned editorial message.

Idea (one sentence): The Home makes English visible as something adolescents live and use while exploring Villa La Angostura.

Live thing: The route was not yet a live thing; it was a row of seven near-identical day cards.

Layout words by section: hero=split / benefits=split / day-route=card-row / principles=split-plus-cards / founder=split / residence=gallery / program=split-plus-card / safety=split / closing=statement

Scores: design 6.5 · usability 7.5 · creativity 5.5 · content 7 → overall 6.4

Caps applied: Creativity was limited to 6 because the first screen could have belonged to a generic outdoor camp; no live thing was present.

Top three problems (most visible first), each with the screenshot it shows in and the fix:

1. `desktop-fold.jpg` — the Home frame used a 1760px content width while the shared header used 1280px, so the page read off-centre. Match the Home container and margins to the shared chrome.
2. `desktop-fold.jpg` — the Georgia display face made the redesign feel like a generic editorial template. Source and self-host a practical display face with campaign energy.
3. `mobile-page-01.jpg` — the seven day cards were identical, cramped units and failed the two-line headline rule on mobile. Replace them with one editorial route list and give each title enough measure.

## ROUND 2

Seen in one second: A confident family-camp campaign with a strong condensed headline, a real Patagonia photograph, one primary action, and a compact facts panel.

Idea (one sentence): The page frames English immersion as an outdoor way of living rather than a syllabus delivered outdoors.

Live thing: The daily route is now the signature content device, though it remains a navigable editorial sequence rather than an interactive widget.

Layout words by section: hero=split / mechanism=split / route=editorial-list / principles=split-plus-tonal-list / founder=split / residence=mosaic / safety=split / closing=statement

Scores: design 7.5 · usability 8 · creativity 6 · content 7 → overall 7.1

Caps applied: Creativity was limited to 6 because the user deliberately chose the canonical category execution; the page has no separate live widget.

Top three problems (most visible first), each with the screenshot it shows in and the fix:

1. `mobile-page-01.jpg` — “Bloque de aventura” and “Inglés en acción” still wrapped to three lines because the action link shared the title row. Give the title the full remaining measure and move the action below it.
2. `mobile-page-01.jpg` — the three program principles still appeared as repeated boxed cards. Remove the mobile card fills and use spacing and type hierarchy instead.
3. The route reveal supplied the required motion count but the inspector still described the page as having little motion. Keep the authored route sequence as the single signature moment rather than adding repetitive section fades that would burden iOS Safari.

## ROUND 3

Seen in one second: A clear Patagonia summer camp for families: adolescents, dates, location, English immersion, and a direct availability action are all readable immediately.

Idea (one sentence): “Inglés para vivir en Patagonia” turns the camp’s core mechanism into the promise of the whole Home.

Live thing: The daily route is the memorable content device: seven published moments make the lived structure of a camp day tangible.

Layout words by section: hero=split / mechanism=split / route=editorial-ledger / principles=split-plus-tonal-list / founder=split / residence=mosaic / safety=split / closing=statement

Scores: design 8 · usability 8.5 · creativity 6 · content 7 → overall 7.7

Caps applied: Creativity was limited to 7 because the user chose the familiar category execution and the page has no independently interactive live widget.

Top three problems (most visible first), each with the screenshot it shows in and the fix:

1. `desktop-page-02.jpg` and `mobile-page-01.jpg` — the mixed photography library still needs a human classification before launch so real documentary images and editorial references are never conflated. Keep the residence disclaimer until that inventory is supplied.
2. `desktop-page-03.jpg` — no honest camp footage exists in the current asset library. Adding unrelated Patagonia stock footage would misstate the product; obtain a real short loop before adding video.
3. `desktop-page-01.jpg` — twelve computed type sizes remain across the Home plus shared header/footer. The current hierarchy is intentional, but a future site-wide typography pass can consolidate the secondary 13–17px steps without changing this Home.

Final inspector result: **0 FAIL, 3 WARN** at 1440, 768, and 390px on the production build.

Warning defenses:

- **Size count:** the twelve sizes include shared chrome plus the deliberate Home display/headline/lead/body/small hierarchy. No element depends on an arbitrary one-off size.
- **No footage:** no honest camp clip exists; stock footage would violate the product-truth requirement.
- **Little motion:** the Home deliberately uses one authored route reveal plus one slow hero image instead of repetitive section fades, preserving iOS compositor performance while meeting the motion floor.
