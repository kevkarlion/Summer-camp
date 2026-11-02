"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PointerEvent as ReactPointerEvent,
  PointerEventHandler,
  ReactNode,
} from "react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

const MAGNETIC_RADIUS = 40;
const MAGNETIC_TRANSLATION = 6;

interface ButtonStyleProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

interface ButtonLinkProps
  extends ButtonStyleProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href"> {
  href: string;
  external?: boolean;
}

interface NativeButtonProps
  extends ButtonStyleProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children" | "href"> {}

export type ButtonProps = ButtonLinkProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-primary text-ink shadow-[0_12px_40px_rgba(16,185,129,0.22)] hover:bg-brand-primary-hover hover:-translate-y-0.5",
  secondary:
    "bg-brand-secondary text-ink shadow-[0_12px_40px_rgba(230,178,85,0.18)] hover:bg-brand-secondary-hover hover:-translate-y-0.5",
  ghost: "bg-transparent text-main hover:bg-overlay-hover",
  outline: "border border-subtle bg-overlay-soft text-main hover:border-primary/50 hover:bg-overlay-hover",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-12 px-5 py-3 text-sm",
  lg: "min-h-14 px-6 py-4 text-base",
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

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
  } = props;

  const shouldReduceMotion = useReducedMotion();
  const isFinePointer = useFinePointer();
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);
  const contentX = useSpring(targetX, { stiffness: 280, damping: 22, mass: 0.35 });
  const contentY = useSpring(targetY, { stiffness: 280, damping: 22, mass: 0.35 });

  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[0.01em] transition-[transform,opacity,background-color,border-color] duration-300 ease-[var(--ease-out-expo)] motion-reduce:transform-none motion-reduce:transition-none",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  const resetMagneticOffset = () => {
    targetX.set(0);
    targetY.set(0);
  };

  useEffect(() => {
    if (!isFinePointer || shouldReduceMotion) {
      targetX.set(0);
      targetY.set(0);
    }
  }, [isFinePointer, shouldReduceMotion, targetX, targetY]);

  const updateMagneticOffset = (
    event: ReactPointerEvent<HTMLElement>,
    currentTarget: HTMLElement,
  ) => {
    if (!isFinePointer || shouldReduceMotion || event.pointerType !== "mouse") {
      return;
    }

    const bounds = currentTarget.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;
    const distance = Math.hypot(deltaX, deltaY);

    if (distance > MAGNETIC_RADIUS || distance === 0) {
      resetMagneticOffset();
      return;
    }

    const influence = 1 - distance / MAGNETIC_RADIUS;
    targetX.set((deltaX / MAGNETIC_RADIUS) * MAGNETIC_TRANSLATION * influence);
    targetY.set((deltaY / MAGNETIC_RADIUS) * MAGNETIC_TRANSLATION * influence);
  };

  const content = (
    <motion.span
      className="inline-flex items-center justify-center gap-2"
      style={{ x: contentX, y: contentY }}
    >
      {children}
    </motion.span>
  );

  if ("href" in props) {
    const {
      href,
      external,
      onPointerMove,
      onPointerLeave,
      variant: _variant,
      size: _size,
      className: _className,
      children: _children,
      ...linkProps
    } = props;
    void _variant;
    void _size;
    void _className;
    void _children;

    const handlePointerMove: PointerEventHandler<HTMLAnchorElement> = (event) => {
      onPointerMove?.(event);
      updateMagneticOffset(event, event.currentTarget);
    };

    const handlePointerLeave: PointerEventHandler<HTMLAnchorElement> = (event) => {
      onPointerLeave?.(event);
      resetMagneticOffset();
    };

    return (
      <Link
        href={href}
        className={classes}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        {...linkProps}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {content}
      </Link>
    );
  }

  const {
    onPointerMove,
    onPointerLeave,
    disabled,
    variant: _variant,
    size: _size,
    className: _className,
    children: _children,
    ...buttonProps
  } = props;
  void _variant;
  void _size;
  void _className;
  void _children;

  const handlePointerMove: PointerEventHandler<HTMLButtonElement> = (event) => {
    onPointerMove?.(event);
    if (!disabled) {
      updateMagneticOffset(event, event.currentTarget);
    }
  };

  const handlePointerLeave: PointerEventHandler<HTMLButtonElement> = (event) => {
    onPointerLeave?.(event);
    resetMagneticOffset();
  };

  return (
    <button
      className={classes}
      disabled={disabled}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      {...buttonProps}
    >
      {content}
    </button>
  );
}
