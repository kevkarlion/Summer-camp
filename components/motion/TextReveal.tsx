"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { Fragment } from "react";

export type TextRevealLevel = "h1" | "h2" | "h3";

export interface TextRevealProps {
  as: TextRevealLevel;
  children: string;
  className?: string;
}

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
    y: "100%",
  },
  visible: {
    y: "0%",
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

export function TextReveal({ as, children, className }: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionHeading = motionHeadings[as];
  const isAboveTheFold = as === "h1";
  const words = children.split(/\s+/).filter(Boolean);

  return (
    <MotionHeading
      className={className}
      initial={shouldReduceMotion ? false : "hidden"}
      animate={shouldReduceMotion || !isAboveTheFold ? undefined : "visible"}
      whileInView={shouldReduceMotion || isAboveTheFold ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      style={{
        WebkitFontSmoothing: "antialiased",
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
        transform: "translateZ(0)",
        willChange: "transform, opacity",
      }}
    >
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom [contain:paint]">
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
