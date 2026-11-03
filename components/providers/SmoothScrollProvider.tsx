"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect, useRef } from "react";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

/**
 * Internal navigation always lands at the top of the page, instantly.
 * Lenis animates wheel scrolling, but it must never animate a route change:
 * a click has to read as a cut, not as a fast scripted scroll.
 */
export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    let lenis: Lenis | null = null;
    let animationFrame = 0;

    const jumpToTop = () => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
        lenisRef.current.resize();
        return;
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    };

    const stop = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      lenis?.destroy();
      lenis = null;
      lenisRef.current = null;
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
        lenisRef.current = lenis;
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

    const handleDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) {
        return;
      }
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target instanceof Element ? event.target.closest("a") : null;
      if (!target || target.target === "_blank") {
        return;
      }

      const href = target.getAttribute("href");
      if (!href || href.startsWith("#")) {
        return;
      }
      if (!href.startsWith("/") && !href.startsWith(window.location.hostname)) {
        return;
      }

      jumpToTop();
    };

    start();
    reducedMotionQuery.addEventListener("change", handleMotionPreferenceChange);
    finePointerQuery.addEventListener("change", handlePointerCapabilityChange);
    document.addEventListener("click", handleDocumentClick);

    return () => {
      reducedMotionQuery.removeEventListener("change", handleMotionPreferenceChange);
      finePointerQuery.removeEventListener("change", handlePointerCapabilityChange);
      document.removeEventListener("click", handleDocumentClick);
      stop();
    };
  }, []);

  useEffect(() => {
    // A route change always starts at the top, without an animated scroll.
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
      lenisRef.current.resize();
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return children;
}
