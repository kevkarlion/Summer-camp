import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";

export interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, image, imageAlt, children }: PageHeroProps) {
  return (
    <section className="relative isolate flex min-h-[100svh] items-start overflow-hidden pb-20 pt-[calc(5rem_+_env(safe-area-inset-top))] sm:min-h-[46rem] sm:pb-24 sm:pt-36 lg:min-h-[100svh] lg:items-start lg:pb-28 lg:pt-32">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center opacity-100"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,19,32,0.56)_0%,rgba(11,19,32,0.18)_58%,rgba(11,19,32,0.04)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(11,19,32,0.04)_0%,rgba(11,19,32,0.16)_52%,rgba(11,19,32,0.38)_100%)]" />
      <div className="absolute -left-24 top-20 -z-10 size-80 rounded-full orb-emerald-glow" />

      <Container className="max-w-6xl">
        <Badge variant="primary" className="mb-6">{eyebrow}</Badge>
        <h1 className="m-0 hero-copy-shadow max-w-5xl text-[clamp(2.75rem,6vw,6.75rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-main">
          {title}
        </h1>
        <p className="hero-copy-shadow mt-6 max-w-2xl text-lg leading-8 text-muted sm:mt-7 sm:text-xl">{description}</p>
        {children ? <div className="mt-7 sm:mt-8">{children}</div> : null}
      </Container>
    </section>
  );
}
