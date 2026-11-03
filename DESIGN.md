---
name: Patagonia Summer Camp 2027
description: A field-notebook campaign system for a residential English and adventure camp in Patagonia.
colors:
  lenga-forest: "#12372a"
  lenga-forest-deep: "#0b291f"
  lake-verde: "#1f6068"
  piedra-patagonia: "#e8ece9"
  piedra-patagonia-deep: "#dbe2df"
  ink-bosque: "#17221c"
  muted-sierra: "#4f5f56"
  paper-light: "#f4f6f2"
  paper-muted: "#d2ddd7"
  night-blue: "#0b1320"
  surface-blue: "#0f172a"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(3.5rem, 6vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.9
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(2.4rem, 4.3vw, 4rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(1.7rem, 2.6vw, 2.35rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.62
  lead:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "clamp(1.2rem, 1.6vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.42
  label:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 700
    lineHeight: 1.4
rounded:
  sm: "0.2rem"
  none: "0"
  pill: "9999px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2.5rem"
  xl: "5rem"
  section: "clamp(5rem, 10vw, 9rem)"
components:
  button-primary:
    backgroundColor: "{colors.lenga-forest}"
    textColor: "{colors.paper-light}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1.15rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.lenga-forest-deep}"
  button-paper:
    backgroundColor: "{colors.piedra-patagonia}"
    textColor: "{colors.lenga-forest-deep}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1.15rem"
  text-link:
    textColor: "{colors.lenga-forest}"
    typography: "{typography.label}"
  facts-panel:
    backgroundColor: "{colors.lenga-forest}"
    textColor: "{colors.paper-light}"
    padding: "1rem"
  program-principle:
    backgroundColor: "{colors.piedra-patagonia-deep}"
    padding: "clamp(1.4rem, 2.6vw, 2rem)"
  gallery-item:
    backgroundColor: "{colors.piedra-patagonia-deep}"
    height: "17rem"
---

# Design System: Patagonia Summer Camp 2027

## Overview

**Creative North Star: "El cuaderno de campo"**

The system is a field notebook: the working surface of a summer expedition where facts are recorded plainly, days are read as a route, and the landscape is shown honestly rather than staged. It is clear and adventurous — the confidence of a well-run camp, not the noise of a marketing campaign.

Its voice comes from a single condensed display face (Barlow Condensed, self-hosted) against a plain reading face (Arial). Headlines behave like printed signage on a trail marker: short, upright, and impossible to misread. Body copy behaves like a briefing note: measured, specific, and never decorative.

Depth is tonal. Surfaces change by color field — mineral paper, lenga forest, lake green — and by spacing, not by shadow. The only imagery that carries emotion is real photography of the place and the people; editorial reference material is labeled as such.

**Key Characteristics:**

- One decisive condensed display voice, one plain reading voice.
- A 1280px shared frame with equal margins, matched to header and footer.
- Full color fields instead of decorative cards, gradients, and hairlines.
- Photography as evidence, with editorial reference material disclosed.
- One authored motion moment per surface, transform and opacity only.

## Colors

The palette is a low-chroma landscape: forest for authority, lake for context, mineral stone for reading.

### Primary

- **Bosque de lenga** (#12372a): the primary surface and action color. It carries the facts panel, primary buttons, and the full-field dark sections.
- **Bosque profundo** (#0b291f): the deepest forest tone, used for the closing statement and hover states.

### Secondary

- **Verde lago** (#1f6068): a single large field per surface — the founder story on the Home — never a scattered accent.

### Tertiary

- **Piedra de Patagonia** (#e8ece9) and **piedra profunda** (#dbe2df): the mineral reading ground and the slightly deeper field that separates program principles from it.

### Neutral

- **Tinta bosque** (#17221c): body text on mineral ground.
- **Gris sierra** (#4f5f56): secondary text on mineral ground.
- **Papel claro** (#f4f2ea family, #f4f6f2): text on forest and lake fields.
- **Papel atenuado** (#d2ddd7): secondary text on forest and lake fields.
- **Azul noche** (#0b1320): shared header and footer chrome.
- **Superficie azul** (#0f172a): shared footer surface.

**The One Field Rule.** Verde lago appears once per surface as a full field. It is a place, not a decoration.

**The Rarity Rule.** The bright brand emerald and gold survive only inside the shared heritage chrome (the contact badge and scout insignia). The Home body never uses them.

## Typography

**Display Font:** Barlow Condensed (fallback: Arial Narrow, Arial, sans-serif), self-hosted through `next/font`. **Body Font:** Arial (fallback: Helvetica, sans-serif). **Label/Mono Font:** Arial only; no monospace costume.

**Character:** the condensed display face carries outdoor signage energy and holds two lines at every width; the reading face stays plain so the photography and the facts do the work.

### Hierarchy

- **Display** (600, clamp(3.5rem, 6vw, 6rem), 0.9): the hero statement only, two lines maximum.
- **Headline** (600, clamp(2.4rem, 4.3vw, 4rem), 0.98): section titles, two lines maximum.
- **Title** (600, clamp(1.7rem, 2.6vw, 2.35rem), 1.05): program principles and route stops.
- **Body** (400, 1rem, 1.62): running text, 62 characters maximum measure.
- **Lead** (400, clamp(1.2rem, 1.6vw, 1.5rem), 1.42): the sentence directly under a heading, 39 characters maximum measure.
- **Label** (700, 0.9rem): times, values, and short labels. Never uppercase tracking.

**The Two-Line Rule.** Every headline fits two lines at 1440, 768, and 390 px. Cut words before shrinking type.

**The Condensed Voice Rule.** Only the display, headline, and title roles use Barlow Condensed. Body copy never switches faces.

## Layout

The page sits on a single 1280px frame with equal margins, matched to the shared header and footer so nothing drifts off the axis. The hero is a two-column split: copy on the left, a full-height photograph on the right, with the facts panel anchored to the bottom of the copy column. On phones the photograph moves above the copy and the facts panel closes the first screen.

Sections alternate between split, editorial list, tonal list, and mosaic — never the same layout twice in a row. Section spacing runs from 5rem to 9rem (clamp), with internal groupings kept tight by comparison.

**The Shared Frame Rule.** Home, header, and footer share one 1280px frame and one pair of margins at every width.

**The One Dominant Thing Rule.** Each screen carries one element that wins: a headline, a photograph, or a statement. Everything else supports it.

## Elevation & Depth

The system is flat and tonal. Depth comes from full color fields, tonal steps between surfaces, and spacing — not from shadows. Resting elements carry no box-shadow and no hairline border; borders appear only where a real data table or form field needs one.

**The Flat-At-Rest Rule.** No shadow and no decorative hairline on anything that is simply sitting there. Shadow is reserved for genuine overlays such as menus and dialogs.

**The Field Rule.** Separate surfaces with a tone change or with space, never with a line.

## Shapes

Corners are square to almost square: buttons and framed surfaces use a small 0.2rem radius, photographs and mosaic tiles are fully square, and pills are reserved for small shared controls such as the contact badge. Clipping is used to crop photographs to their frame, never to fake an organic silhouette.

**The Square Corner Rule.** The Home does not use rounded cards, glass panels, or floating pills.

**The Honest Crop Rule.** A masked photographic edge is only used when the mask comes from the real subject, not from a radial-gradient approximation.

## Components

### Buttons

- **Shape:** square-cornered (0.2rem radius), 3.25rem minimum height.
- **Primary:** Bosque de lenga fill with paper-light text, padding 0.85rem 1.15rem.
- **Hover / Focus:** deepens to Bosque profundo and lifts 2px on fine pointers only; focus shows a 2px lake outline with a 4px offset.
- **Secondary / Ghost:** an underlined paper-on-forest link, or a mineral button on forest fields.

### Cards / Containers

- **Corner Style:** square (0).
- **Background:** mineral stone fields and tonal program blocks; never a shadowed floating card.
- **Shadow Strategy:** none at rest.
- **Border:** none.
- **Internal Padding:** clamp(1.4rem, 2.6vw, 2rem).

### Navigation

Fixed, 80px tall, night-blue chrome, 13px labels, and a paper-filled contact badge as the only accent. The mobile menu opens as a night-blue panel with a safe-area-aware bottom inset. On the Home the frame and margins match the header exactly.

### Facts Panel

A four-cell Bosque de lenga field that states age, dates, format, and place. Labels sit above values, both at a readable size. It is the first screen's proof strip, not a metric row.

### Route Ledger

Seven published moments of a camp day read as an editorial ledger: time, title, detail, and a link. It enters as one staggered sequence (transform and opacity only) and falls back to a visible, non-animated list without JavaScript.

### Program Principles

Three tonal blocks on mineral ground — Explore, Use English, Live Together. On phones the fills are removed and spacing and type carry the grouping.

## Do's and Don'ts

### Do:

- **Do** keep every headline to two lines, and cut words before shrinking type.
- **Do** use Bosque de lenga for the primary action and the facts panel.
- **Do** label editorial reference photography as reference in the same frame where it appears.
- **Do** keep one authored motion moment per surface, using transform and opacity only.
- **Do** match the shared 1280px frame across Home, header, and footer.

### Don't:

- **Don't** add resting shadows, glass panels, or decorative hairlines.
- **Don't** use gradients, gradient text, or glows.
- **Don't** repeat the same section layout twice in a row.
- **Don't** present provisional photography as documentary evidence of the camp.
- **Don't** add a stock Patagonia clip to fill a video slot; use real footage or none.
- **Don't** animate layout properties, filters, or backdrop filters.
