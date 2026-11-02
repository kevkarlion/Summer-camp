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
  period: string;
  title: string;
  description: string;
  icon: typeof Coffee;
  src?: string;
  alt?: string;
}

const dayBlocks: DayBlock[] = [
  {
    time: "8:00",
    period: "Primera luz",
    title: "Despertar",
    description: "Un comienzo tranquilo: camas, mochilas y un poco de estiramiento.",
    icon: Sunrise,
  },
  {
    time: "8:30",
    period: "Mañana",
    title: "Desayuno",
    description: "Desayuno completo en la residencia.",
    icon: Coffee,
    src: "/camp-media/grupo-jugando.webp",
    alt: "Fotografía real del campamento: el grupo durante el desayuno en la residencia",
  },
  {
    time: "9:15",
    period: "Mañana",
    title: "Misión del día",
    description: "El desafío del día, explicado en inglés en grupos pequeños.",
    icon: Languages,
  },
  {
    time: "10:00",
    period: "Mañana",
    title: "Bloque de aventura",
    description: "Trekking o kayak en los días de aventura; deportes y arte en la residencia los demás días.",
    icon: Soup,
    src: "/camp-media/kayak-en-el-lago.webp",
    alt: "Fotografía real del campamento: grupo en kayaks sobre el lago",
  },
  {
    time: "13:30",
    period: "Mediodía",
    title: "Almuerzo",
    description: "Picnic en el sendero o en la residencia.",
    icon: Utensils,
    src: "/camp-media/senderismo-con-villa-al-fondo.webp",
    alt: "Fotografía real del campamento: sendero con Villa La Angostura al fondo",
  },
  {
    time: "15:00",
    period: "Tarde",
    title: "Descanso y tiempo libre",
    description: "Una hora de calma, juegos, lectura y llamadas a casa.",
    icon: BedDouble,
  },
  {
    time: "16:00",
    period: "Tarde",
    title: "Inglés en acción",
    description: "Desafíos reales: pedir, orientarse y trabajar en equipo.",
    icon: Languages,
    src: "/camp-media/grupo-caminando.webp",
    alt: "Fotografía real del campamento: grupo caminando con mochilas por el bosque",
  },
  {
    time: "18:00",
    period: "Tarde",
    title: "Duchas",
    description: "Un buen baño después de un día entero al aire libre.",
    icon: Droplets,
  },
  {
    time: "19:30",
    period: "Noche",
    title: "Cena",
    description: "Todos juntos, alrededor de la mesa.",
    icon: CookingPot,
  },
  {
    time: "21:00",
    period: "Noche",
    title: "Actividad nocturna",
    description: "Observación de estrellas, relatos y juegos. La gran fogata es la última noche.",
    icon: Flame,
    src: "/camp-media/fogata-en-el-bosque.webp",
    alt: "Fotografía real del campamento: fogata con marshmallows en el bosque",
  },
  {
    time: "22:30",
    period: "Noche",
    title: "A dormir",
    description: "Todos a dormir después de un día completo. ¡Dulces sueños!",
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
  const photoOpacity = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0, 0.55, 0.55, 0]);

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
          "group relative isolate col-start-2 row-start-1 overflow-hidden rounded-[1.75rem] border border-subtle bg-card/95 p-6 backdrop-blur-sm transition-[transform,border-color] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-secondary/35 focus-within:-translate-y-1 focus-within:border-secondary/35 sm:p-7",
          side === "left" ? "md:col-start-1" : "md:col-start-3",
        )}
        style={{
          y: shouldReduceMotion ? 0 : cardY,
          opacity: shouldReduceMotion ? 1 : opacity,
          scale: shouldReduceMotion ? 1 : scale,
        }}
      >
        {block.src ? (
          <motion.div
            className="absolute inset-0 -z-10 overflow-hidden"
            style={{ opacity: shouldReduceMotion ? 0.5 : photoOpacity }}
          >
            <Image
              src={block.src}
              alt={block.alt ?? ""}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 42vw"
              placeholder="blur"
              blurDataURL={IMAGE_BLUR_DATA_URL}
              className="scale-110 object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-100 group-focus-within:scale-100 motion-reduce:transform-none motion-reduce:transition-none"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/92 to-bg-main/70"
            />
          </motion.div>
        ) : null}

        <div className="relative">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-secondary-accent">
            {block.period}
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
        <p className="text-sm font-semibold text-main">Un día típico · Los horarios son aproximados</p>
        <p className="mt-2 text-sm leading-6 text-muted">
          Los horarios pueden variar según el clima, los requisitos de cada actividad y la organización de cada día.
        </p>
        <p className="mt-4 font-display text-sm italic tracking-[0.08em] text-secondary-accent">
          Explorá más allá
        </p>
      </div>
    </div>
  );
}
