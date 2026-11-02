"use client";

import Image from "next/image";
import { Coffee, Flame, Languages, Mountain } from "lucide-react";
import { useState } from "react";

import { IMAGE_BLUR_DATA_URL } from "@/components/image/placeholder";
import { CampIcon } from "@/components/ui/CampIcon";
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
      <ol className="relative grid gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6" aria-label="Jornada ilustrativa del campamento">
        {timelineItems.map((item, index) => {
          const Icon = item.icon;
          const isExpanded = expandedTitle === item.title;

          return (
            <li key={item.title} className="relative">
              {index < timelineItems.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute left-12 top-11 hidden h-px w-[calc(100%-1.5rem)] bg-gradient-to-r from-secondary/55 via-secondary/30 to-secondary/10 xl:block"
                />
              ) : null}

              <article className="group relative isolate flex h-full min-h-[22rem] flex-col overflow-hidden rounded-[1.75rem] border border-subtle bg-card transition-[transform,border-color] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-secondary/35 focus-within:-translate-y-1 focus-within:border-secondary/35 motion-reduce:transform-none motion-reduce:transition-none">
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
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    placeholder="blur"
                    blurDataURL={IMAGE_BLUR_DATA_URL}
                    className="scale-105 object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-110 group-focus-within:scale-110 motion-reduce:transform-none motion-reduce:transition-none"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/75 to-bg-main/40" />
                </div>

                <div className="relative z-10 flex h-full flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <CampIcon icon={Icon} size="lg" tone="oxblood" />
                    <span
                      aria-hidden="true"
                      className="font-display text-4xl leading-none text-main/15 transition-colors duration-500 group-hover:text-secondary/30 group-focus-within:text-secondary/30"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="mt-7 w-full min-w-0 rounded-2xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-4 focus-visible:ring-offset-card"
                    aria-expanded={isExpanded}
                    aria-controls={`timeline-preview-${index}`}
                    onClick={() => setExpandedTitle(isExpanded ? null : item.title)}
                  >
                    <span className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-secondary-accent">
                      Bloque {index + 1}
                    </span>
                    <span className="mt-2 block whitespace-normal break-normal text-xl font-semibold leading-tight text-main [text-wrap:balance]">
                      {item.title}
                    </span>
                  </button>

                  <p className="mt-4 max-w-[30ch] break-words text-sm leading-6 text-muted transition-colors duration-300 group-hover:text-main/90 group-focus-within:text-main/90">
                    {item.description}
                  </p>

                  <p className="mt-auto pt-6 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-main/45 [text-shadow:0_1px_12px_var(--bg-main)]">
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
