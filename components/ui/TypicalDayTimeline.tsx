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
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

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
    alt: "Fotografía real del campamento: el grupo durante el desayuno en la residencia",
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

interface TimelineRowProps {
  block: DayBlock;
  side: "left" | "right";
}

function TimelineRow({ block, side }: TimelineRowProps) {
  const rowRef = useRef<HTMLLIElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });

  const cardY = useTransform(scrollYProgress, [0, 1], [88, -88]);
  const markerY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.94, 1, 1, 0.94]);

  const Icon = block.icon;

  return (
    <li
      ref={rowRef}
      className="relative grid grid-cols-[3.5rem_minmax(0,1fr)] items-start gap-x-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-x-12"
    >
      <motion.div
        className="col-start-1 row-start-1 flex flex-col items-center gap-3 md:col-start-2"
        style={{
          y: shouldReduceMotion ? 0 : markerY,
          opacity: shouldReduceMotion ? 1 : opacity,
          scale: shouldReduceMotion ? 1 : scale,
        }}
      >
        <CampIcon icon={Icon} size="lg" tone="oxblood" />
        <span className="font-display text-base leading-none tracking-[0.12em] text-secondary-accent">
          {block.time}
        </span>
      </motion.div>

      <motion.article
        className={cn(
          "group relative isolate col-start-2 row-start-1 overflow-hidden rounded-[1.75rem] border border-subtle bg-card/95 p-6 backdrop-blur-sm transition-[transform,border-color] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-secondary/35 focus-within:-translate-y-1 focus-within:border-secondary/35 sm:p-7 md:col-start-1 md:col-start-3",
          side === "left" ? "md:col-start-1" : "md:col-start-3",
          side === "right" && "md:col-start-3",
        )}
        style={{
          y: shouldReduceMotion ? 0 : cardY,
          opacity: shouldReduceMotion ? 1 : opacity,
          scale: shouldReduceMotion ? 1 : scale,
        }}
      >
        {block.src ? (
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <Image
              src={block.src}
              alt={block.alt ?? ""}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 42vw"
              placeholder="blur"
              blurDataURL={IMAGE_BLUR_DATA_URL}
              className="scale-110 object-cover opacity-0 transition-[opacity,transform] duration-700 ease-[var(--ease-out-expo)] group-hover:scale-100 group-hover:opacity-40 group-focus-within:scale-100 group-focus-within:opacity-40 motion-reduce:transform-none motion-reduce:transition-none"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/92 to-bg-main/70"
            />
          </div>
        ) : null}

        <div className="relative">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-secondary-accent">
            {block.titleEs}
          </p>
          <h3 className="mt-2.5 text-xl font-semibold leading-tight text-main [text-wrap:balance] sm:text-2xl">
            {block.title}
          </h3>
          <p className="mt-3 max-w-[40ch] break-words text-base leading-7 text-muted">
            {block.description}
          </p>
        </div>
      </motion.article>
    </li>
  );
}

export function TypicalDayTimeline() {
  const railRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 65%", "end 85%"],
  });
  const railScale = useSpring(scrollYProgress, { stiffness: 110, damping: 30, mass: 0.4 });
  const dotY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div>
      <div ref={railRef} className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[1.6rem] top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2"
        />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-[1.6rem] top-0 h-full w-px origin-top bg-gradient-to-b from-secondary via-primary to-secondary md:left-1/2 md:-translate-x-1/2"
          style={{ scaleY: shouldReduceMotion ? 1 : railScale }}
        />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-full w-0 md:left-1/2 md:-translate-x-1/2"
          style={{ y: shouldReduceMotion ? 0 : dotY }}
        >
          <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 rounded-full bg-secondary shadow-[0_0_18px_var(--color-secondary)]" />
        </motion.div>

        <ol className="relative flex flex-col gap-14 md:gap-20 lg:gap-24">
          {dayBlocks.map((block, index) => (
            <TimelineRow key={block.time} block={block} side={index % 2 === 0 ? "left" : "right"} />
          ))}
        </ol>
      </div>

      <div className="mt-14 rounded-[1.5rem] border border-secondary/25 bg-secondary/8 px-6 py-6">
        <p className="text-sm font-semibold text-main">Un día típico · Times are approximate</p>
        <p className="mt-2 text-sm leading-6 text-muted">
          Los horarios son aproximados y pueden variar según el clima, los requisitos de cada actividad y la organización de cada día.
        </p>
        <p className="mt-4 font-display text-sm italic tracking-[0.08em] text-secondary-accent">
          Explore Beyond · Explorá más allá
        </p>
      </div>
    </div>
  );
}
