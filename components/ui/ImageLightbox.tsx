"use client";

import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

import { IMAGE_BLUR_DATA_URL } from "@/components/image/placeholder";
import { cn } from "@/lib/utils";

export interface ImageLightboxItem {
  src: string;
  alt: string;
  title: string;
  description: string;
  sizes: string;
}

interface ImageLightboxProps {
  items: ImageLightboxItem[];
  className?: string;
}

export function ImageLightbox({ items, className }: ImageLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activeTriggerRef = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();
  const descriptionId = useId();
  const selectedItem = selectedIndex === null ? null : items[selectedIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || selectedIndex === null) {
      return;
    }

    if (!dialog.open) {
      dialog.showModal();
    }

    closeButtonRef.current?.focus();
  }, [selectedIndex]);

  const closeLightbox = () => {
    const trigger = activeTriggerRef.current;
    dialogRef.current?.close();
    setSelectedIndex(null);
    requestAnimationFrame(() => trigger?.focus());
  };

  return (
    <>
      <div
        className={cn(
          "grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[18rem_18rem_18rem]",
          className,
        )}
      >
        {items.map((item, index) => (
          <figure
            key={item.title}
            className={cn(
              "group relative min-h-[20rem] overflow-hidden rounded-[1.75rem] border border-subtle bg-surface",
              index === 0 && "lg:col-span-7 lg:row-span-2",
              index === 1 && "lg:col-span-5 lg:row-start-1",
              index === 2 && "lg:col-span-5 lg:row-span-2 lg:row-start-2",
              index === 3 && "lg:col-span-7 lg:row-start-3",
            )}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes={item.sizes}
              placeholder="blur"
              blurDataURL={IMAGE_BLUR_DATA_URL}
              className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
            />
            <figcaption className="absolute inset-x-4 bottom-4 copy-scrim rounded-2xl p-5 sm:inset-x-6 sm:bottom-6 sm:p-6">
              <h3 className="text-xl font-semibold tracking-tight text-main sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-main/90">
                {item.description}
              </p>
            </figcaption>
            <button
              type="button"
              onClick={(event) => {
                activeTriggerRef.current = event.currentTarget;
                setSelectedIndex(index);
              }}
              className="absolute right-4 top-4 inline-flex min-h-11 items-center gap-2 rounded-full border border-subtle bg-bg-main/70 px-4 text-sm font-semibold text-main shadow-lg backdrop-blur-md transition-[transform,opacity] duration-300 ease-[var(--ease-out-expo)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary motion-reduce:transform-none motion-reduce:transition-none"
              aria-label={`Ampliar imagen: ${item.title}`}
            >
              <Maximize2 aria-hidden="true" size={16} />
              Ampliar
            </button>
          </figure>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="m-auto h-[min(90svh,54rem)] w-[min(94vw,72rem)] max-w-none overflow-hidden rounded-[2rem] border border-subtle bg-bg-main p-0 text-main backdrop:bg-bg-main/85 backdrop:backdrop-blur-sm"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onCancel={(event) => {
          event.preventDefault();
          closeLightbox();
        }}
        onClose={() => {
          const trigger = activeTriggerRef.current;
          setSelectedIndex(null);
          requestAnimationFrame(() => trigger?.focus());
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeLightbox();
          }
        }}
      >
        {selectedItem ? (
          <div className="relative h-full">
            <Image
              src={selectedItem.src}
              alt={selectedItem.alt}
              fill
              sizes="(max-width: 768px) 94vw, 72rem"
              placeholder="blur"
              blurDataURL={IMAGE_BLUR_DATA_URL}
              className="object-contain"
            />
            <div className="absolute inset-x-4 bottom-4 copy-scrim rounded-2xl px-5 py-4 sm:inset-x-8 sm:bottom-8 sm:px-6 sm:py-5">
              <h2 id={titleId} className="text-xl font-semibold text-main sm:text-2xl">
                {selectedItem.title}
              </h2>
              <p id={descriptionId} className="mt-2 max-w-2xl text-sm leading-6 text-main/90">
                {selectedItem.description}
              </p>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeLightbox}
              className="absolute right-4 top-4 grid size-11 place-items-center rounded-full border border-subtle bg-bg-main/75 text-main backdrop-blur-md transition-transform duration-300 ease-[var(--ease-out-expo)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary motion-reduce:transform-none motion-reduce:transition-none"
              aria-label="Cerrar imagen ampliada"
            >
              <X aria-hidden="true" size={20} />
            </button>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
