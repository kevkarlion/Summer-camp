"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { Fragment, useSyncExternalStore } from "react";

import { cn } from "@/lib/utils";

export type TextRevealLevel = "h1" | "h2" | "h3";

export interface TextRevealProps {
  as: TextRevealLevel;
  children: string;
  className?: string;
}

const MOBILE_QUERY = "(max-width: 767px)";
const WORD_OFFSET_PX = 35;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: WORD_OFFSET_PX,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const motionHeadings = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
};

function subscribeToMobileViewport(callback: () => void) {
  const mediaQuery = window.matchMedia(MOBILE_QUERY);
  mediaQuery.addEventListener("change", callback);

  return () => {
    mediaQuery.removeEventListener("change", callback);
  };
}

function useIsMobileViewport() {
  return useSyncExternalStore(
    subscribeToMobileViewport,
    () => window.matchMedia(MOBILE_QUERY).matches,
    () => false,
  );
}

export function TextReveal({ as, children, className }: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const isMobileViewport = useIsMobileViewport();
  const MotionHeading = motionHeadings[as];
  const isAboveTheFold = as === "h1";
  const useUnifiedMobileHeading = isAboveTheFold && isMobileViewport;
  const words = children.split(/\s+/).filter(Boolean);

  const rasterStyle = {
    WebkitFontSmoothing: "antialiased" as const,
    WebkitBackfaceVisibility: "hidden" as const,
    backfaceVisibility: "hidden" as const,
    transform: "translateZ(0)",
    willChange: "transform, opacity",
  };

  if (useUnifiedMobileHeading) {
    return (
      <MotionHeading
        className={cn("m-0", className)}
        initial={shouldReduceMotion ? false : { opacity: 0, y: WORD_OFFSET_PX }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{
          type: "tween",
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={rasterStyle}
        transformTemplate={(_, generatedTransform) => `${generatedTransform} translateZ(0)`}
      >
        {children}
      </MotionHeading>
    );
  }

  return (
    <MotionHeading
      className={cn("m-0", className)}
      initial={shouldReduceMotion ? false : "hidden"}
      animate={shouldReduceMotion || !isAboveTheFold ? undefined : "visible"}
      whileInView={shouldReduceMotion || isAboveTheFold ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      style={rasterStyle}
    >
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
            <motion.span className="inline-block" variants={wordVariants}>
              {word}
            </motion.span>
          </span>
          {index < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </MotionHeading>
  );
}
