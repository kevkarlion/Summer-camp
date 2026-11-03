import { cn } from "@/lib/utils";

import { TextReveal } from "@/components/motion/TextReveal";

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <p className="site-label">{eyebrow}</p> : null}
      <TextReveal
        as="h2"
        className="site-heading"
      >
        {title}
      </TextReveal>
      {description ? (
        <p className="site-lead">{description}</p>
      ) : null}
    </div>
  );
}
