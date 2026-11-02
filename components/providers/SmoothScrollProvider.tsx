"use client";

import Lenis from "lenis";
import { type ReactNode, useEffect } from "react";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;
    let animationFrame = 0;

    const stop = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      lenis?.destroy();
      lenis = null;
    };

    const start = () => {
      if (reducedMotionQuery.matches || lenis) {
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

    start();
    reducedMotionQuery.addEventListener("change", handleMotionPreferenceChange);

    return () => {
      reducedMotionQuery.removeEventListener("change", handleMotionPreferenceChange);
      stop();
    };
  }, []);

  return children;
}
