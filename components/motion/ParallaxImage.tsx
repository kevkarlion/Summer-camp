import type { ImageProps } from "next/image";

import { ParallaxImageContainer } from "@/components/ui/ParallaxImage";

export {
  ParallaxImageContainer,
  type ParallaxImageContainerProps,
} from "@/components/ui/ParallaxImage";

export interface ParallaxImageProps extends Omit<ImageProps, "className"> {
  className?: string;
  containerClassName?: string;
  imageClassName?: string;
}

/** @deprecated Use ParallaxImageContainer from @/components/ui/ParallaxImage. */
export function ParallaxImage({
  className,
  containerClassName,
  imageClassName,
  alt,
  ...imageProps
}: ParallaxImageProps) {
  return (
    <ParallaxImageContainer
      src={imageProps.src}
      alt={alt}
      sizes={imageProps.sizes}
      priority={imageProps.priority}
      className={containerClassName}
      imageClassName={imageClassName ?? className}
    />
  );
}
