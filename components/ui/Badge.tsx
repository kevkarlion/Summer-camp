import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "primary" | "secondary" | "neutral" | "outline";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: "border-primary/35 bg-primary/8 text-primary-accent",
  secondary: "border-secondary/40 bg-secondary/8 text-secondary-accent",
  neutral: "border-subtle bg-overlay-soft text-main",
  outline: "border-subtle bg-transparent text-muted",
};

export function Badge({ variant = "neutral", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-[0.2rem] border px-3.5 py-1.5 font-display text-xs font-medium italic leading-none tracking-[0.06em] shadow-[0_1px_0_rgba(255,255,255,0.04)]",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
