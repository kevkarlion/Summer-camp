"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
}

/**
 * Scroll entrance used across the site.
 *
 * The element starts slightly lower and transparent, then settles when it
 * reaches the viewport. Visibility is driven by a plain IntersectionObserver
 * instead of the library viewport helper, and the wrapper element never
 * changes identity: rendering a different node for reduced motion used to
 * leave the observer without a target, so whole sections stayed invisible.
 */
export function Reveal({ children, className, delay = 0, distance = 24 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const isVisible = shouldReduceMotion || isInView;

  return (
    <motion.div
      ref={ref}
      className={cn("site-reveal", className)}
      initial={shouldReduceMotion ? false : { opacity: 0, y: distance }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
