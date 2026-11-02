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
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function TextReveal({ as, children, className }: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const Heading = as;
  const words = children.split(/\s+/).filter(Boolean);

  return (
    <Heading className={className}>
      <motion.span
        initial={shouldReduceMotion ? false : "hidden"}
        variants={containerVariants}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
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
      </motion.span>
    </Heading>
  );
}
