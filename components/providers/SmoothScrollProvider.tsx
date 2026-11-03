"use client";

import Lenis from "lenis";
import { type ReactNode, useEffect } from "react";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    let lenis: Lenis | null = null;
    let animationFrame = 0;

    const stop = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      lenis?.destroy();
      lenis = null;
    };

    const start = () => {
      if (reducedMotionQuery.matches || !finePointerQuery.matches || lenis) {
        return;
      }

      lenis = new Lenis({
        autoRaf: false,
        smoothWheel: true,
        syncTouch: false,
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        animationFrame = window.requestAnimationFrame(raf);
      };

      animationFrame = window.requestAnimationFrame(raf);
    };

    const handleMotionPreferenceChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        stop();
      } else {
        start();
      }
    };

    const handlePointerCapabilityChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        start();
      } else {
        stop();
      }
    };

    start();
    reducedMotionQuery.addEventListener("change", handleMotionPreferenceChange);
    finePointerQuery.addEventListener("change", handlePointerCapabilityChange);

    return () => {
      reducedMotionQuery.removeEventListener("change", handleMotionPreferenceChange);
      finePointerQuery.removeEventListener("change", handlePointerCapabilityChange);
      stop();
    };
  }, []);

  return children;
}
