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
    <section className="relative isolate overflow-hidden pb-20 pt-36 sm:pt-40 lg:min-h-[78vh] lg:pb-24 lg:pt-44">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover opacity-100"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,19,32,0.56)_0%,rgba(11,19,32,0.18)_58%,rgba(11,19,32,0.04)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(11,19,32,0.04)_0%,rgba(11,19,32,0.16)_52%,rgba(11,19,32,0.38)_100%)]" />
      <div className="absolute -left-24 top-20 -z-10 size-80 rounded-full bg-primary/12 blur-[120px]" />

      <Container className="max-w-5xl">
        <Badge variant="primary" className="mb-6">{eyebrow}</Badge>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-main sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">{description}</p>
        {children ? <div className="mt-9">{children}</div> : null}
      </Container>
    </section>
  );
}
