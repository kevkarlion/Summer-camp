import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export type CampIconSize = "sm" | "md" | "lg";
export type CampIconTone = "khaki" | "oxblood" | "navy" | "parchment";

export interface CampIconProps {
  icon: LucideIcon;
  size?: CampIconSize;
  tone?: CampIconTone;
  className?: string;
  iconClassName?: string;
  label?: string;
}

const frameSizes: Record<CampIconSize, { frame: string; icon: string }> = {
  sm: { frame: "size-10", icon: "size-[1.15rem]" },
  md: { frame: "size-12", icon: "size-5" },
  lg: { frame: "size-14", icon: "size-6" },
};

const tones: Record<CampIconTone, string> = {
  khaki: "border-[var(--scout-khaki)]/40 bg-[var(--scout-khaki)]/8 text-[var(--scout-khaki)]",
  oxblood: "border-[var(--scout-oxblood)]/55 bg-[var(--scout-oxblood)]/15 text-[var(--scout-parchment)]",
  navy: "border-[var(--scout-navy)]/70 bg-[var(--scout-navy)]/60 text-[var(--scout-parchment)]",
  parchment: "border-[var(--scout-navy)]/60 bg-[var(--scout-navy)]/60 text-[var(--scout-parchment)]",
};

/**
 * Wraps a Lucide glyph in a heritage camp-medallion frame: a stitched double
 * ring, warm khaki/oxblood/navy tones and a heavier rounded stroke, so the
 * iconography reads as camp insignia instead of technology UI.
 */
export function CampIcon({
  icon: Icon,
  size = "md",
  tone = "khaki",
  className,
  iconClassName,
  label,
}: CampIconProps) {
  const dimensions = frameSizes[size];

  return (
    <span
      className={cn(
        "relative grid shrink-0 place-items-center rounded-full border shadow-[0_6px_20px_rgba(2,6,23,0.22)] before:pointer-events-none before:absolute before:inset-[3px] before:rounded-full before:border before:border-dashed before:border-current/35 before:content-['']",
        dimensions.frame,
        tones[tone],
        className,
      )}
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      <Icon
        className={cn(dimensions.icon, iconClassName)}
        strokeWidth={1.7}
        aria-hidden="true"
      />
    </span>
  );
}
