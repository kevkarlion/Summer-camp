import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type CardVariant = "solid" | "glass" | "elevated";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  children: ReactNode;
}

const variantClasses: Record<CardVariant, string> = {
  solid: "border-subtle bg-card",
  glass: "glass-panel",
  elevated: "border-subtle bg-card shadow-[0_24px_80px_rgba(2,6,23,0.35)]",
};

export function Card({ variant = "solid", className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border transition-[transform,opacity,background-color,border-color] duration-300 ease-[var(--ease-out-expo)] motion-reduce:transform-none motion-reduce:transition-none",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
