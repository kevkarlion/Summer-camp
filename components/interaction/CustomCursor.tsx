"use client";

import { motion, useReducedMotion, useSpring } from "motion/react";
import { useEffect, useState } from "react";

const MAX_CURSOR_LABEL_LENGTH = 24;

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

export function CustomCursor() {
  const shouldReduceMotion = useReducedMotion();
  const isFinePointer = useFinePointer();
  const [isVisible, setIsVisible] = useState(false);
  const [isContextual, setIsContextual] = useState(false);
  const [contextLabel, setContextLabel] = useState("");

  const pointerX = useSpring(0, { stiffness: 520, damping: 34, mass: 0.28 });
  const pointerY = useSpring(0, { stiffness: 520, damping: 34, mass: 0.28 });
  const cursorScale = useSpring(0.35, { stiffness: 360, damping: 28, mass: 0.35 });

  useEffect(() => {
    if (!isFinePointer || shouldReduceMotion) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
      setIsVisible(true);

      const target = event.target instanceof Element
        ? event.target.closest<HTMLElement>("[data-cursor]")
        : null;
      const rawLabel = target?.dataset.cursor?.trim().replace(/\s+/g, " ") ?? "";
      const nextLabel = rawLabel.slice(0, MAX_CURSOR_LABEL_LENGTH);

      setIsContextual(Boolean(nextLabel));
      setContextLabel((currentLabel) => currentLabel === nextLabel ? currentLabel : nextLabel);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [isFinePointer, pointerX, pointerY, shouldReduceMotion]);

  useEffect(() => {
    cursorScale.set(isContextual ? 1 : 0.35);
  }, [cursorScale, isContextual]);

  if (!isFinePointer || shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90] h-40 w-40"
      style={{ x: pointerX, y: pointerY, opacity: isVisible ? 1 : 0 }}
    >
      <motion.div
        className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-secondary/60 bg-ink/80 shadow-[0_0_0_1px_rgba(230,178,85,0.12),0_8px_30px_rgba(2,6,23,0.35)] backdrop-blur-sm"
        style={{ scale: cursorScale }}
      >
        <span className="size-2 rounded-full bg-secondary" />
        <motion.span
          className="absolute whitespace-nowrap text-[0.625rem] font-bold tracking-[0.16em] text-secondary"
          animate={{ opacity: isContextual ? 1 : 0 }}
          transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
        >
          {contextLabel}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
