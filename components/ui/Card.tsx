"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import type { CSSProperties, HTMLAttributes, PointerEvent as ReactPointerEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type CardVariant = "solid" | "glass" | "elevated";

interface CardCustomProperties {
  "--mouse-x"?: string;
  "--mouse-y"?: string;
  "--tilt-x"?: string;
  "--tilt-y"?: string;
}

export interface CardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children" | "style">,
    CardCustomProperties {
  variant?: CardVariant;
  children: ReactNode;
  interactive?: boolean;
  style?: CSSProperties & CardCustomProperties;
}

const variantClasses: Record<CardVariant, string> = {
  solid: "site-card--solid",
  glass: "site-card--paper",
  elevated: "site-card--forest",
};

function useFinePointer() {
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updatePointerType = () => setIsFinePointer(mediaQuery.matches);

    updatePointerType();
    mediaQuery.addEventListener("change", updatePointerType);

    return () => mediaQuery.removeEventListener("change", updatePointerType);
  }, []);

  return isFinePointer;
}

export function Card({
  variant = "solid",
  className,
  children,
  interactive = false,
  style,
  onPointerEnter,
  onPointerLeave,
  onPointerMove,
  ...props
}: CardProps) {
  const shouldReduceMotion = useReducedMotion();
  const isFinePointer = useFinePointer();
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightOpacityTarget = useMotionValue(0);
  const spotlightOpacity = useSpring(spotlightOpacityTarget, {
    stiffness: 260,
    damping: 26,
    mass: 0.4,
  });

  const resetTilt = () => {
    const card = cardRef.current;
    if (!card) {
      return;
    }

    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  };

  useEffect(() => {
    if (!interactive || !isFinePointer || shouldReduceMotion) {
      spotlightOpacityTarget.set(0);
      resetTilt();
    }
  }, [interactive, isFinePointer, shouldReduceMotion, spotlightOpacityTarget]);

  const handlePointerEnter = (event: ReactPointerEvent<HTMLDivElement>) => {
    onPointerEnter?.(event);

    if (interactive && isFinePointer && !shouldReduceMotion && event.pointerType === "mouse") {
      spotlightOpacityTarget.set(1);
    }
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    onPointerMove?.(event);

    const card = cardRef.current;
    if (
      !interactive ||
      !card ||
      !isFinePointer ||
      shouldReduceMotion ||
      event.pointerType !== "mouse"
    ) {
      return;
    }

    const bounds = card.getBoundingClientRect();
    const mouseX = event.clientX - bounds.left;
    const mouseY = event.clientY - bounds.top;
    const normalizedX = (mouseX / bounds.width - 0.5) * 2;
    const normalizedY = (mouseY / bounds.height - 0.5) * 2;

    card.style.setProperty("--mouse-x", `${mouseX}px`);
    card.style.setProperty("--mouse-y", `${mouseY}px`);
    card.style.setProperty("--tilt-x", `${(-normalizedY * 3).toFixed(2)}deg`);
    card.style.setProperty("--tilt-y", `${(normalizedX * 3).toFixed(2)}deg`);
  };

  const handlePointerLeave = (event: ReactPointerEvent<HTMLDivElement>) => {
    onPointerLeave?.(event);
    spotlightOpacityTarget.set(0);
    resetTilt();
  };

  const interactiveStyle = interactive
    ? {
        "--mouse-x": "50%",
        "--mouse-y": "50%",
        "--tilt-x": "0deg",
        "--tilt-y": "0deg",
        ...style,
        transform: "perspective(900px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))",
      }
    : style;

  return (
    <div
      ref={cardRef}
      className={cn(
        "site-card motion-reduce:transform-none motion-reduce:transition-none",
        interactive ? "relative" : null,
        variantClasses[variant],
        className,
      )}
      style={interactiveStyle}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      {...props}
    >
      {interactive ? (
        <motion.span
          aria-hidden="true"
          className="site-card__spotlight pointer-events-none absolute inset-0 z-10"
          style={{ opacity: spotlightOpacity }}
        />
      ) : null}
      {children}
    </div>
  );
}
