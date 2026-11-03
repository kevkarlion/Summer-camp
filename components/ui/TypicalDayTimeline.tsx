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
import {
  motion,
  type MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

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
    src: "/camp-media/grupo-jugando.webp",
    alt: "Fotografía real del campamento: el grupo en el patio de la residencia",
  },
  {
    time: "8:30",
    period: "Mañana",
    title: "Desayuno",
    description: "Desayuno completo en la residencia.",
    icon: Coffee,
    src: "/camp-media/grupo-caminando.webp",
    alt: "Fotografía real del campamento: el grupo con sus mochilas antes de salir",
  },
  {
    time: "9:15",
    period: "Mañana",
    title: "Misión del día",
    description: "El desafío del día, explicado en inglés en grupos pequeños.",
    icon: Languages,
    src: "/camp-media/productores-locales.webp",
    alt: "Fotografía real del campamento: encuentro con productores locales",
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
    src: "/camp-media/residencia-y-parque.png",
    alt: "Fotografía real del campamento: la residencia con su parque",
  },
  {
    time: "16:00",
    period: "Tarde",
    title: "Inglés en acción",
    description: "Desafíos reales: pedir, orientarse y trabajar en equipo.",
    icon: Languages,
    src: "/camp-media/hernan-bajo-las-auroras.webp",
    alt: "Fotografía real de Hernán Paulitti bajo las auroras boreales en Laponia",
  },
  {
    time: "18:00",
    period: "Tarde",
    title: "Duchas",
    description: "Un buen baño después de un día entero al aire libre.",
    icon: Droplets,
    src: "/camp-media/lago-al-atardecer.png",
    alt: "Fotografía real del campamento: el lago al atardecer con las montañas de fondo",
  },
  {
    time: "19:30",
    period: "Noche",
    title: "Cena",
    description: "Todos juntos, alrededor de la mesa.",
    icon: CookingPot,
    src: "/camp-media/residencia-de-piedra-y-madera.png",
    alt: "Fotografía real del campamento: la residencia de piedra y madera",
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
    src: "/camp-media/mirando-el-valle.webp",
    alt: "Fotografía real del campamento: un adolescente contemplando el valle al atardecer",
  },
];

interface TimelineRowProps {
  block: DayBlock;
  side: "left" | "right";
  registry: TimelineMotionRegistry;
}

interface TimelineMotionValues {
  cardY: MotionValue<number>;
  markerY: MotionValue<number>;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
  photoOpacity: MotionValue<number>;
}

interface TimelineMotionState extends TimelineMotionValues {
  element: HTMLLIElement;
  documentTop: number;
  height: number;
}

type TimelineMotionRegistry = Map<string, TimelineMotionState>;

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

function TimelineRow({ block, side, registry }: TimelineRowProps) {
  const rowRef = useRef<HTMLLIElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const cardY = useMotionValue(88);
  const markerY = useMotionValue(-30);
  const opacity = useMotionValue(0);
  const scale = useMotionValue(0.94);
  const photoOpacity = useMotionValue(0);

  useLayoutEffect(() => {
    const element = rowRef.current;
    if (!element) {
      return;
    }

    registry.set(block.time, {
      element,
      documentTop: 0,
      height: 0,
      cardY,
      markerY,
      opacity,
      scale,
      photoOpacity,
    });

    return () => {
      registry.delete(block.time);
    };
  }, [block.time, cardY, markerY, opacity, photoOpacity, registry, scale]);

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
        <CampIcon icon={Icon} size="lg" tone="oxblood" className="shadow-none" />
        <span className="font-display text-base leading-none tracking-[0.12em] text-secondary-accent">
          {block.time}
        </span>
      </motion.div>

      <motion.article
        className={cn(
          "group relative isolate col-start-2 row-start-1 overflow-hidden rounded-[1.75rem] border border-subtle bg-card/95 p-6 backface-hidden transition-transform duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-secondary/35 focus-within:-translate-y-1 focus-within:border-secondary/35 sm:p-7",
          side === "left" ? "md:col-start-1" : "md:col-start-3",
        )}
        style={{
          y: shouldReduceMotion ? 0 : cardY,
          opacity: shouldReduceMotion ? 1 : opacity,
          scale: shouldReduceMotion ? 1 : scale,
        }}
      >
        {block.src ? (
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div
              className="absolute inset-0 transform-gpu backface-hidden"
              style={{ opacity: shouldReduceMotion ? 1 : photoOpacity }}
            >
              <Image
                src={block.src}
                alt={block.alt ?? ""}
                fill
                sizes="(max-width: 767px) calc(100vw - 7rem), (max-width: 1279px) 42vw, 37vw"
                decoding="async"
                placeholder="blur"
                blurDataURL={IMAGE_BLUR_DATA_URL}
                className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105 group-focus-within:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
              />
            </motion.div>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/90 to-bg-main/60"
            />
          </div>
        ) : null}

        <div className="relative p-6 sm:p-7">
          <p className="text-outlined text-[0.65rem] font-bold uppercase tracking-[0.22em] text-secondary-accent">
            {block.period}
          </p>
          <h3 className="text-outlined mt-2.5 text-xl font-semibold leading-tight text-white [text-wrap:balance] sm:text-2xl">
            {block.title}
          </h3>
          <p className="text-outlined mt-3 max-w-[40ch] break-words text-base leading-7 text-white/95">
            {block.description}
          </p>
        </div>
      </motion.article>
    </li>
  );
}

export function TypicalDayTimeline() {
  const railRef = useRef<HTMLDivElement>(null);
  const [registry] = useState<TimelineMotionRegistry>(() => new Map());
  const railMetricsRef = useRef({ documentTop: 0, height: 0 });
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const railProgress = useMotionValue(0);
  const railScale = useSpring(railProgress, { stiffness: 110, damping: 30, mass: 0.4 });
  const dotY = useMotionValue("0%");

  const measureRegistry = useCallback(() => {
    const viewportHeight = window.innerHeight;

    registry.forEach((state) => {
      const rect = state.element.getBoundingClientRect();
      state.documentTop = rect.top + window.scrollY;
      state.height = rect.height;
    });

    const rail = railRef.current;
    if (rail) {
      const railRect = rail.getBoundingClientRect();
      railMetricsRef.current = {
        documentTop: railRect.top + window.scrollY,
        height: railRect.height,
      };
      const railStart = railMetricsRef.current.documentTop - viewportHeight * 0.65;
      const railEnd = railMetricsRef.current.documentTop + railMetricsRef.current.height - viewportHeight * 0.85;
      const railRatio = railEnd === railStart ? 0 : clamp01((window.scrollY - railStart) / (railEnd - railStart));
      railProgress.set(railRatio);
      dotY.set(`${railRatio * 100}%`);
    }
  }, [dotY, railProgress, registry]);

  const updateTimeline = useCallback((latestScrollY: number) => {
    if (shouldReduceMotion) {
      return;
    }

    const viewportHeight = window.innerHeight;

    registry.forEach((state) => {
      const start = state.documentTop - viewportHeight;
      const end = state.documentTop + state.height;

      if (latestScrollY < start - viewportHeight || latestScrollY > end + viewportHeight) {
        return;
      }

      const progress = clamp01((latestScrollY - start) / Math.max(1, end - start));
      const opacityProgress = progress < 0.2 ? progress / 0.2 : progress > 0.8 ? (1 - progress) / 0.2 : 1;
      const scaleProgress = progress < 0.25 ? progress / 0.25 : progress > 0.75 ? (1 - progress) / 0.25 : 1;
      const photoProgress = progress < 0.16 ? progress / 0.16 : progress > 0.84 ? (1 - progress) / 0.16 : 1;

      state.cardY.set(88 - progress * 176);
      state.markerY.set(-30 + progress * 60);
      state.opacity.set(opacityProgress);
      state.scale.set(0.94 + scaleProgress * 0.06);
      state.photoOpacity.set(photoProgress * 0.9);
    });

    const rail = railRef.current;
    if (rail) {
      const railStart = railMetricsRef.current.documentTop - viewportHeight * 0.65;
      const railEnd = railMetricsRef.current.documentTop + railMetricsRef.current.height - viewportHeight * 0.85;
      const progress = clamp01((latestScrollY - railStart) / Math.max(1, railEnd - railStart));
      railProgress.set(progress);
      dotY.set(`${progress * 100}%`);
    }
  }, [dotY, railProgress, registry, shouldReduceMotion]);

  useMotionValueEvent(scrollY, "change", updateTimeline);

  useEffect(() => {
    measureRegistry();
    updateTimeline(scrollY.get());

    const handleResize = () => {
      measureRegistry();
      updateTimeline(scrollY.get());
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [measureRegistry, scrollY, updateTimeline]);

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
          <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 rounded-full bg-secondary" />
        </motion.div>

        <ol className="relative flex flex-col gap-14 md:gap-20 lg:gap-24">
          {dayBlocks.map((block, index) => (
            <TimelineRow
              key={block.time}
              block={block}
              side={index % 2 === 0 ? "left" : "right"}
              registry={registry}
            />
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
