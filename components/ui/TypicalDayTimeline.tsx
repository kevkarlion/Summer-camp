"use client";

import Image from "next/image";
import {
  BedDouble,
  Coffee,
  CookingPot,
  Droplets,
  Flame,
  Languages,
  Moon,
  Soup,
  Sunrise,
  Utensils,
} from "lucide-react";
import { useState } from "react";

import { IMAGE_BLUR_DATA_URL } from "@/components/image/placeholder";
import { CampIcon } from "@/components/ui/CampIcon";
import { cn } from "@/lib/utils";

interface DayBlock {
  time: string;
  title: string;
  titleEs: string;
  description: string;
  icon: typeof Coffee;
  src?: string;
  alt?: string;
}

const dayBlocks: DayBlock[] = [
  {
    time: "8:00",
    title: "Wake up",
    titleEs: "Despertar",
    description: "A slow start for teens: beds, bags and a bit of stretching.",
    icon: Sunrise,
  },
  {
    time: "8:30",
    title: "Breakfast",
    titleEs: "Desayuno",
    description: "Full board at the residencia.",
    icon: Coffee,
    src: "/camp-media/grupo-jugando.webp",
    alt: "Fotografía real del campamento: adolescents en el patio de la residencia",
  },
  {
    time: "9:15",
    title: "Morning briefing (45 min)",
    titleEs: "Misión del día",
    description: "The day's challenge, explained in English in small groups.",
    icon: Languages,
  },
  {
    time: "10:00",
    title: "Adventure block",
    titleEs: "Aventura",
    description: "Trekking or kayak on adventure days. Sports and art at the residencia on the others.",
    icon: Soup,
    src: "/camp-media/kayak-en-el-lago.webp",
    alt: "Fotografía real del campamento: grupo en kayaks sobre el lago",
  },
  {
    time: "13:30",
    title: "Lunch",
    titleEs: "Almuerzo",
    description: "Picnic on the trail or at the residencia.",
    icon: Utensils,
    src: "/camp-media/senderismo-con-villa-al-fondo.webp",
    alt: "Fotografía real del campamento: sendero con Villa La Angostura al fondo",
  },
  {
    time: "15:00",
    title: "Rest & free time",
    titleEs: "Descanso y tiempo libre",
    description: "Quiet hour, games, reading, calls home.",
    icon: BedDouble,
  },
  {
    time: "16:00",
    title: "English in action",
    titleEs: "Inglés en acción",
    description: "Real-life challenges: ordering, directions, teamwork missions.",
    icon: Languages,
    src: "/camp-media/grupo-caminando.webp",
    alt: "Fotografía real del campamento: grupo caminando con mochilas por el bosque",
  },
  {
    time: "18:00",
    title: "Showers",
    titleEs: "Duchas",
    description: "Freshen up after a full day outdoors.",
    icon: Droplets,
  },
  {
    time: "19:30",
    title: "Dinner",
    titleEs: "Cena",
    description: "Everyone together.",
    icon: CookingPot,
  },
  {
    time: "21:00",
    title: "Evening activity",
    titleEs: "Actividad nocturna",
    description: "Stargazing, storytelling, games. The big bonfire is on the last night.",
    icon: Flame,
    src: "/camp-media/fogata-en-el-bosque.webp",
    alt: "Fotografía real del campamento: fogata con marshmallows en el bosque",
  },
  {
    time: "22:30",
    title: "Lights out",
    titleEs: "A dormir",
    description: "Everyone goes to bed after a full day. Sweet dreams!",
    icon: Moon,
  },
];

export function TypicalDayTimeline() {
  const [expandedTime, setExpandedTime] = useState<string | null>(null);

  return (
    <div>
      <ol className="relative grid gap-4 sm:grid-cols-2 xl:grid-cols-3" aria-label="Un día típico en el campamento">
        {dayBlocks.map((block) => {
          const Icon = block.icon;
          const isExpanded = expandedTime === block.time;

          return (
            <li key={block.time} className="relative">
              <article className="group relative isolate flex h-full min-h-[13rem] flex-col overflow-hidden rounded-[1.5rem] border border-subtle bg-card transition-[transform,border-color] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-secondary/35 focus-within:-translate-y-1 focus-within:border-secondary/35 motion-reduce:transform-none motion-reduce:transition-none">
                {block.src ? (
                  <div className="absolute inset-0 -z-10 overflow-hidden">
                    <Image
                      src={block.src}
                      alt={block.alt ?? ""}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL={IMAGE_BLUR_DATA_URL}
                      className={cn(
                        "object-cover transition-[opacity,transform] duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105 group-focus-within:scale-105 motion-reduce:transform-none motion-reduce:transition-none",
                        isExpanded ? "opacity-55" : "opacity-0",
                      )}
                    />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/80 to-bg-main/45" />
                  </div>
                ) : null}

                <button
                  type="button"
                  className="flex h-full w-full flex-col items-start gap-4 p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-4 focus-visible:ring-offset-card"
                  aria-expanded={isExpanded}
                  onClick={() => setExpandedTime(isExpanded ? null : block.time)}
                >
                  <div className="flex w-full items-center justify-between gap-4">
                    <CampIcon icon={Icon} size="md" tone="oxblood" />
                    <span className="font-display text-3xl leading-none text-main/15 transition-colors duration-500 group-hover:text-secondary/35 group-focus-within:text-secondary/35">
                      {block.time}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-secondary-accent">
                      {block.time} · {block.titleEs}
                    </p>
                    <p className="mt-1.5 text-lg font-semibold leading-tight text-main [text-wrap:balance]">
                      {block.title}
                    </p>
                    <p className="mt-2 max-w-[34ch] break-words text-sm leading-6 text-muted">
                      {block.description}
                    </p>
                  </div>
                </button>
              </article>
            </li>
          );
        })}
      </ol>

      <div className="mt-8 rounded-[1.5rem] border border-secondary/25 bg-secondary/8 px-6 py-5">
        <p className="text-sm font-semibold text-main">Un día típico · Times are approximate</p>
        <p className="mt-2 text-sm leading-6 text-muted">
          Los horarios son aproximados y pueden variar según el clima, los requisitos de cada actividad y la organización de cada día.
        </p>
      </div>
    </div>
  );
}
