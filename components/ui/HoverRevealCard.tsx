"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { IMAGE_BLUR_DATA_URL } from "@/components/image/placeholder";
import { cn } from "@/lib/utils";

export interface HoverRevealCardProps {
  src: string;
  alt: string;
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
}

export function HoverRevealCard({
  src,
  alt,
  eyebrow,
  title,
  description,
  action,
  className,
  imageClassName,
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
}: HoverRevealCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className={cn(
        "group relative isolate min-h-96 overflow-hidden rounded-[2rem] border border-subtle bg-card focus-within:ring-2 focus-within:ring-secondary focus-within:ring-offset-2 focus-within:ring-offset-bg-main",
        className,
      )}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 220, damping: 24, mass: 0.7 }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        blurDataURL={IMAGE_BLUR_DATA_URL}
        className={cn("scale-110 object-cover grayscale brightness-[0.68]", imageClassName)}
      />
      <Image
        src={src}
        alt=""
        fill
        sizes={sizes}
        priority={false}
        placeholder="blur"
        blurDataURL={IMAGE_BLUR_DATA_URL}
        className="scale-110 object-cover opacity-0 transition-opacity duration-700 ease-[var(--ease-out-expo)] group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/20 to-transparent" />
      <motion.div
        className="absolute inset-x-0 bottom-0 p-7 sm:p-8"
        initial={shouldReduceMotion ? false : { opacity: 1, y: 16 }}
        whileHover={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        whileFocus={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 22, mass: 0.65 }}
      >
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary-accent">
            {eyebrow}
          </p>
        ) : null}
        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-main">{title}</h3>
        {description ? (
          <p className="mt-3 max-w-md leading-7 text-main/90">{description}</p>
        ) : null}
        {action ? <div className="mt-6">{action}</div> : null}
      </motion.div>
    </motion.article>
  );
}
