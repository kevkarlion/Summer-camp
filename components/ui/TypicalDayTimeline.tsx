"use client";

import Image from "next/image";
import { Coffee, Flame, Languages, Mountain } from "lucide-react";
import { useState } from "react";

import { IMAGE_BLUR_DATA_URL } from "@/components/image/placeholder";
import { cn } from "@/lib/utils";

interface TimelineItem {
  title: "Breakfast" | "Adventure Block" | "English in Action" | "Evening Bonfire";
  description: string;
  src: string;
  alt: string;
  icon: typeof Coffee;
}

const timelineItems: TimelineItem[] = [
  {
    title: "Breakfast",
    description: "Un comienzo tranquilo para encontrarse antes de la aventura.",
    src: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=640&q=76",
    alt: "Imagen editorial de referencia: desayuno en un entorno natural",
    icon: Coffee,
  },
  {
    title: "Adventure Block",
    description: "Kayak, trekking y exploración del entorno con curiosidad y respeto.",
    src: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=640&q=76",
    alt: "Imagen editorial de referencia: actividad acuática en aguas de montaña",
    icon: Mountain,
  },
  {
    title: "English in Action",
    description: "Inglés en conversaciones, actividades y sesiones breves cada mañana.",
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=640&q=76",
    alt: "Imagen editorial de referencia: adolescentes participando en una actividad compartida",
    icon: Languages,
  },
  {
    title: "Evening Bonfire",
    description: "Un encuentro alrededor del fuego, sujeto a confirmación del programa.",
    src: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&w=640&q=76",
    alt: "Imagen editorial de referencia: fogata al aire libre durante la tarde",
    icon: Flame,
  },
];

export function TypicalDayTimeline() {
  const [expandedTitle, setExpandedTitle] = useState<string | null>(null);

  return (
    <div>
      <ol className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-7" aria-label="Jornada ilustrativa del campamento">
        {timelineItems.map((item, index) => {
          const Icon = item.icon;
          const isExpanded = expandedTitle === item.title;

          return (
            <li key={item.title} className="relative">
              {index < timelineItems.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute left-11 top-6 hidden h-px w-[calc(100%+1.75rem)] bg-gradient-to-r from-secondary/60 to-secondary/15 xl:block"
                />
              ) : null}
              <article className="group relative isolate min-h-72 overflow-hidden rounded-[1.75rem] border border-subtle bg-card transition-[transform,opacity] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 focus-within:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none">
                <div
                  id={`timeline-preview-${index}`}
                  className={cn(
                    "absolute inset-0 -z-10 overflow-hidden bg-surface transition-opacity duration-500 ease-[var(--ease-out-expo)] group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none",
                    isExpanded ? "opacity-100" : "opacity-0",
                  )}
                  aria-hidden={!isExpanded}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    placeholder="blur"
                    blurDataURL={IMAGE_BLUR_DATA_URL}
                    className="scale-105 object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-110 group-focus-within:scale-110 motion-reduce:transform-none motion-reduce:transition-none"
                  />
                </div>
                <div className="relative z-10 flex h-full min-h-72 flex-col p-5 before:absolute before:inset-0 before:-z-10 before:rounded-[1.5rem] before:bg-[var(--copy-scrim-bg)] before:opacity-0 before:transition-opacity before:duration-500 before:content-[''] before:group-hover:opacity-100 before:group-focus-within:opacity-100 motion-reduce:before:transition-none">
                  <button
                    type="button"
                    className="flex w-full min-w-0 items-center gap-4 rounded-2xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-4 focus-visible:ring-offset-card"
                    aria-expanded={isExpanded}
                    aria-controls={`timeline-preview-${index}`}
                    onClick={() => setExpandedTitle(isExpanded ? null : item.title)}
                  >
                    <span className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full border border-secondary/30 bg-bg-main text-secondary-accent">
                      <Icon aria-hidden="true" size={21} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-secondary-accent">
                        Bloque {index + 1}
                      </span>
                      <span className="mt-1 block whitespace-normal break-normal text-[1.05rem] font-semibold leading-6 text-main [text-wrap:balance]">
                        {item.title}
                      </span>
                    </span>
                  </button>
                  <p className="mt-4 max-w-[32ch] break-words text-sm leading-6 text-muted transition-colors duration-300 group-hover:text-main group-focus-within:text-main">
                    {item.description}
                  </p>
                  <p className="mt-auto pt-5 text-xs font-semibold text-secondary-accent [text-shadow:0_1px_12px_var(--bg-main)]">
                    Vista editorial de referencia
                  </p>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
      <p className="mt-6 text-sm leading-6 text-muted">
        Los horarios exactos y el fogón de la tarde son ilustrativos y están pendientes de confirmación.
      </p>
    </div>
  );
}
