/**
 * Generates the public family guide PDF from the same copy the /familias page renders.
 *
 * Dependency free: it writes a plain PDF 1.4 file with the standard Helvetica
 * fonts and WinAnsi text encoding, so the result opens in any standard viewer
 * and keeps selectable text.
 *
 * Usage: node "app/(site)/familias/scripts/generate-guia-familias.mjs"
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { familiasCopy } from "../copy.ts";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, "../../../..");
const outputPath = resolve(repoRoot, "public/guia-familias.pdf");

const PAGE_WIDTH = 595;
const PAGE_HEIGHT = 842;
const MARGIN = 56;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

const REGULAR = "F1";
const BOLD = "F2";
const FONT_REGULAR = "Helvetica";
const FONT_BOLD = "Helvetica-Bold";

/** Text metrics: Helvetica averages 0.5 em per character, close enough for wrapping. */
function textWidth(text, size) {
  return text.length * size * 0.5;
}

function wrap(text, size, maxWidth) {
  const words = text.split(/\s+/).filter(Boolean);
  const lines = [];
  let line = "";
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (line && textWidth(candidate, size) > maxWidth) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return lines.length > 0 ? lines : [""];
}

/** Escapes a string for a PDF literal and folds it into WinAnsi bytes. */
function pdfString(text) {
  const transliterated = text
    .replace(/[\u2018\u2019\u201B]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/\u2026/g, "...")
    .replace(/[\u00AB\u00BB]/g, '"')
    .replace(/\u2192/g, "->");
  let out = "";
  for (const char of transliterated) {
    const code = char.codePointAt(0);
    if (code > 255) {
      out += "?";
      continue;
    }
    if (char === "(" || char === ")" || char === "\\") {
      out += `\\${char}`;
      continue;
    }
    out += `\\${code.toString(8).padStart(3, "0")}`;
  }
  return out;
}

class PdfWriter {
  constructor() {
    this.pages = [];
    this.current = null;
    this.y = PAGE_HEIGHT - MARGIN;
  }

  addPage() {
    this.current = [];
    this.pages.push(this.current);
    this.y = PAGE_HEIGHT - MARGIN;
  }

  ensure(leading) {
    if (!this.current) this.addPage();
    if (this.y - leading < MARGIN) this.addPage();
  }

  text(text, { size = 10, font = REGULAR, leading = size * 1.35, x = MARGIN, indent = 0 } = {}) {
    const lines = wrap(text, size, CONTENT_WIDTH - indent);
    for (const line of lines) {
      this.ensure(leading);
      this.current.push(
        `BT /${font} ${size} Tf ${x + indent} ${this.y.toFixed(2)} Td (${pdfString(line)}) Tj ET`,
      );
      this.y -= leading;
    }
  }

  rule(gapBefore = 14, gapAfter = 14) {
    this.space(gapBefore);
    this.current.push(
      `${MARGIN} ${this.y.toFixed(2)} m ${(PAGE_WIDTH - MARGIN).toFixed(2)} ${this.y.toFixed(2)} l S`,
    );
    this.space(gapAfter);
  }

  space(amount) {
    this.y -= amount;
  }
}

const writer = new PdfWriter();
writer.addPage();

function heading(text, { size = 15, gapBefore = 22, gapAfter = 8 } = {}) {
  writer.space(gapBefore);
  writer.text(text, { size, font: BOLD, leading: size * 1.2 });
  writer.space(gapAfter);
}

function paragraph(text, { size = 10, indent = 0, gapAfter = 6 } = {}) {
  writer.text(text, { size, indent });
  writer.space(gapAfter);
}

function bullet(text, { size = 9.5, indent = 14 } = {}) {
  writer.text(`\u00b7 ${text}`, { size, indent });
  writer.space(2);
}

/** Estimated vertical space a block needs, so a group is never split across pages. */
function blockHeight(lines, leading = 13) {
  return lines * leading;
}

function groupFits(group, leading = 13) {
  const lines =
    1 + group.items.reduce((total, item) => total + wrap(item, 9.5, CONTENT_WIDTH - 14).length, 0);
  return writer.y - blockHeight(lines, leading) - 12 >= MARGIN;
}

function faqFits(item) {
  const lines =
    1 + wrap(item.answer, 9.5, CONTENT_WIDTH).length;
  return writer.y - blockHeight(lines, 13) - 12 >= MARGIN;
}

function buildPart(copy, labels) {
  if (labels.newPage) writer.addPage();
  writer.text(labels.title, { size: 24, font: BOLD, leading: 27 });
  writer.space(4);
  writer.text(labels.subtitle, { size: 11, leading: 15 });
  writer.space(2);
  writer.rule(8, 12);

  paragraph(labels.intro, { size: 10, gapAfter: 4 });
  paragraph(labels.introNote, { size: 9, gapAfter: 10 });

  heading(labels.packingHeading, { size: 14 });
  for (const group of copy.packing.groups) {
    if (!groupFits(group)) writer.addPage();
    writer.space(6);
    writer.text(group.title, { size: 11, font: BOLD, leading: 14 });
    writer.space(3);
    for (const item of group.items) bullet(item);
    writer.space(4);
  }
  writer.space(4);
  paragraph(copy.packing.note, { size: 9, gapAfter: 8 });

  heading(labels.policiesHeading, { size: 14 });
  for (const group of copy.policies.groups) {
    if (!groupFits(group)) writer.addPage();
    writer.space(6);
    writer.text(group.title, { size: 11, font: BOLD, leading: 14 });
    writer.space(3);
    for (const item of group.items) bullet(item);
    writer.space(4);
  }

  heading(labels.faqHeading, { size: 14 });
  for (const item of copy.faq.items) {
    if (!faqFits(item)) writer.addPage();
    writer.space(8);
    writer.text(item.question, { size: 10.5, font: BOLD, leading: 13.5 });
    writer.space(2);
    paragraph(item.answer, { size: 9.5, gapAfter: 2 });
  }
}

buildPart(familiasCopy.en, {
  title: "Family guide",
  subtitle: "Patagonia Summer Camp 2027 - Villa La Angostura - 4 to 12 December 2027",
  intro:
    "The operational guidance families need before the camp. Pending procedures are confirmed before the experience.",
  introNote:
    "Teenagers aged 13 to 17. Residential programme in Villa La Angostura, Neuquén, Argentina.",
  packingHeading: "What to pack",
  policiesHeading: "What we ask of every family",
  faqHeading: "Frequent questions",
});

buildPart(familiasCopy.es, {
  newPage: true,
  title: "Guía para familias",
  subtitle: "Patagonia Summer Camp 2027 - Villa La Angostura - 4 al 12 de diciembre de 2027",
  intro:
    "La orientación operativa que las familias necesitan antes del campamento. Los procedimientos pendientes se confirman antes de la experiencia.",
  introNote:
    "Adolescentes de 13 a 17 años. Programa residencial en Villa La Angostura, Neuquén, Argentina.",
  packingHeading: "Qué llevar",
  policiesHeading: "La organización familiar, paso a paso",
  faqHeading: "Preguntas frecuentes",
});

/* Assemble the PDF file. */
const entries = new Map();
let nextId = 1;
const addEntry = (entry) => {
  const id = nextId;
  nextId += 1;
  entries.set(id, entry);
  return id;
};

const catalogId = addEntry({ body: "" });
const pagesId = addEntry({ body: "" });
const fontRegularId = addEntry({
  body: `<< /Type /Font /Subtype /Type1 /BaseFont /${FONT_REGULAR} /Encoding /WinAnsiEncoding >>`,
});
const fontBoldId = addEntry({
  body: `<< /Type /Font /Subtype /Type1 /BaseFont /${FONT_BOLD} /Encoding /WinAnsiEncoding >>`,
});

const kids = [];
for (const page of writer.pages) {
  const pageId = addEntry({ body: "" });
  const contentId = addEntry({ stream: page.join("\n") });
  kids.push(`${pageId} 0 R`);
  entries.get(pageId).body =
    `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] ` +
    `/Resources << /Font << /${REGULAR} ${fontRegularId} 0 R /${BOLD} ${fontBoldId} 0 R >> >> ` +
    `/Contents ${contentId} 0 R >>`;
}

entries.get(pagesId).body =
  `<< /Type /Pages /Kids [ ${kids.join(" ")} ] /Count ${writer.pages.length} >>`;
entries.get(catalogId).body = `<< /Type /Catalog /Pages ${pagesId} 0 R >>`;

const chunks = [];
let offset = 0;
const pushText = (text) => {
  const buffer = Buffer.from(text, "latin1");
  chunks.push(buffer);
  offset += buffer.length;
};

pushText("%PDF-1.4\n%\u00E2\u00E3\u00CF\u00D3\n");

const offsets = [];
for (let id = 1; id <= entries.size; id += 1) {
  const entry = entries.get(id);
  offsets[id] = offset;
  if (entry.stream !== undefined) {
    const data = Buffer.from(entry.stream, "latin1");
    const header = `${id} 0 obj\n<< /Length ${data.length} >>\nstream\n`;
    chunks.push(Buffer.from(header, "latin1"));
    offset += Buffer.byteLength(header, "latin1");
    chunks.push(data);
    offset += data.length;
    const footer = "\nendstream\nendobj\n";
    chunks.push(Buffer.from(footer, "latin1"));
    offset += Buffer.byteLength(footer, "latin1");
  } else {
    const text = `${id} 0 obj\n${entry.body}\nendobj\n`;
    chunks.push(Buffer.from(text, "latin1"));
    offset += Buffer.byteLength(text, "latin1");
  }
}

const xrefOffset = offset;
let xref = `xref\n0 ${entries.size + 1}\n0000000000 65535 f \n`;
for (let id = 1; id <= entries.size; id += 1) {
  xref += `${String(offsets[id]).padStart(10, "0")} 00000 n \n`;
}
xref +=
  `trailer\n<< /Size ${entries.size + 1} /Root ${catalogId} 0 R ` +
  `/Info << /Title (Patagonia Summer Camp 2027 - Family guide) ` +
  `/Author (Patagonia Summer Camp 2027) ` +
  `/Subject (Family guide: packing, family policies and frequent questions) ` +
  `/Producer (Patagonia Summer Camp guide generator) >> >>\n` +
  `startxref\n${xrefOffset}\n%%EOF\n`;
chunks.push(Buffer.from(xref, "latin1"));

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, Buffer.concat(chunks));

console.log(`Wrote ${outputPath}`);
console.log(`Pages: ${writer.pages.length}`);
