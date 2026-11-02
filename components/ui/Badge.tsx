import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "primary" | "secondary" | "neutral" | "outline";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: "bg-[var(--scout-navy)] text-[var(--scout-parchment)]",
  secondary: "bg-[var(--scout-oxblood)] text-[var(--scout-parchment)]",
  neutral: "bg-[var(--scout-khaki)] text-[var(--scout-navy)]",
  outline: "border border-[var(--scout-khaki)]/60 bg-transparent text-[var(--scout-khaki)]",
};

export function Badge({ variant = "neutral", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "relative isolate inline-flex min-h-7 items-center gap-2 overflow-hidden px-4 py-1.5 font-sans text-[0.65rem] font-bold uppercase leading-none tracking-[0.16em] shadow-[0_5px_18px_rgba(2,6,23,0.24)] before:pointer-events-none before:absolute before:inset-[3px] before:border before:border-dashed before:border-current/40 before:content-['']",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </span>
  );
}
