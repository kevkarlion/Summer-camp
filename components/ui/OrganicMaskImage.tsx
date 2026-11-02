import Image from "next/image";

import { IMAGE_BLUR_DATA_URL } from "@/components/image/placeholder";
import { cn } from "@/lib/utils";

export type OrganicMaskVariant = "asymmetric" | "arch" | "mountain";

export interface OrganicMaskImageProps {
  src: string;
  alt: string;
  variant?: OrganicMaskVariant;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
}

const maskStyles: Record<OrganicMaskVariant, string> = {
  asymmetric: "rounded-[2rem] rounded-tl-[5rem]",
  arch: "rounded-t-full",
  mountain:
    "[mask-image:linear-gradient(to_bottom,#000_0_72%,transparent_72%),radial-gradient(ellipse_at_50%_100%,#000_0_42%,transparent_43%)] [mask-composite:intersect] [mask-size:100%_100%]",
};

export function OrganicMaskImage({
  src,
  alt,
  variant = "asymmetric",
  className,
  imageClassName,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: OrganicMaskImageProps) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden bg-surface",
        maskStyles[variant],
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        blurDataURL={IMAGE_BLUR_DATA_URL}
        className={cn("object-cover", imageClassName)}
      />
    </div>
  );
}
