import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
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
      {eyebrow ? (
        <Badge variant="primary" className="mb-5">
          {eyebrow}
        </Badge>
      ) : null}
      <TextReveal
        as="h2"
        className="text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-main sm:text-4xl lg:text-5xl"
      >
        {title}
      </TextReveal>
      {description ? (
        <p className="mt-5 text-base leading-7 text-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
