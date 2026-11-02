"use client";

import Image, { type ImageProps } from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export interface ParallaxImageProps extends Omit<ImageProps, "className"> {
  className?: string;
  containerClassName?: string;
  imageClassName?: string;
}

/**
 * A semantic Next.js image with a small, transform-only parallax movement.
 * Reduced-motion users receive the same image at its resting position.
 */
export function ParallaxImage({
  className,
  containerClassName,
  imageClassName,
  alt,
  ...imageProps
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const y = shouldReduceMotion ? 0 : parallaxY;

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", containerClassName)}
    >
      <motion.div
        className={cn(
          imageProps.fill
            ? "absolute inset-x-0 -top-[10%] h-[120%] will-change-transform motion-reduce:will-change-auto"
            : "relative",
        )}
        style={{ y }}
      >
        <Image
          {...imageProps}
          alt={alt}
          className={cn("object-cover", className, imageClassName)}
        />
      </motion.div>
    </div>
  );
}
