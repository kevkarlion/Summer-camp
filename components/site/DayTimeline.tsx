"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { useLanguage } from "@/components/home/LanguageProvider";
import { dayBlocks, dayNote } from "./day-timeline-copy";
import { TimelineClock } from "./TimelineClock";

// Day blocks live in day-timeline-copy.ts so the timeline speaks both site languages.
const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

export function DayTimeline() {
  const { language } = useLanguage();
  const blocks = dayBlocks[language];
  const note = dayNote[language];
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const rail = root.querySelector<HTMLElement>("[data-timeline-rail]");
    const fill = root.querySelector<HTMLElement>("[data-timeline-fill]");
    const marker = root.querySelector<HTMLElement>("[data-timeline-marker]");
    const blocks = Array.from(root.querySelectorAll<HTMLElement>("[data-timeline-block]"));
    const media = Array.from(root.querySelectorAll<HTMLElement>("[data-timeline-media]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;

    const drawTimeline = () => {
      animationFrame = 0;
      if (reducedMotion.matches || !rail || !fill || !marker) return;
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const railRect = rail.getBoundingClientRect();
      const railDocumentTop = railRect.top + scrollPosition;
      const railProgress = clamp01((scrollPosition + viewportHeight * 0.56 - railDocumentTop) / Math.max(1, railRect.height));
      const isAlternating = window.innerWidth >= 900;
      fill.style.transform = `scaleY(${railProgress})`;
      marker.style.transform = `translate3d(-50%, ${railProgress * railRect.height}px, 0)`;
      blocks.forEach((block, index) => {
        const rect = block.getBoundingClientRect();
        const blockDocumentTop = rect.top + scrollPosition;
        const travel = Math.max(1, rect.height + viewportHeight * 0.76);
        const progress = clamp01((scrollPosition + viewportHeight * 0.88 - blockDocumentTop) / travel);
        // Parallax drift: the card travels with the scroll while staying legible.
        // On the single column layout the card and its photograph stay together.
        if (!isAlternating) {
          block.style.opacity = "1";
          block.style.transform = "none";
          const photo = media[index];
          if (photo) photo.style.transform = "none";
          return;
        }
        const drift = 96 - progress * 192;
        const scale = progress < 0.25 ? 0.96 + (progress / 0.25) * 0.04 : progress > 0.75 ? 1 - ((progress - 0.75) / 0.25) * 0.04 : 1;
        block.style.opacity = "1";
        block.style.transform = `translate3d(0, ${drift}px, 0) scale(${scale})`;
        const photo = media[index];
        if (photo) {
          // The photograph travels the other way: the pair reads as depth.
          const photoDrift = progress * 128 - 64;
          photo.style.transform = `translate3d(0, ${photoDrift}px, 0) scale(${1.04 - (progress < 0.5 ? progress * 0.08 : (1 - progress) * 0.08)})`;
        }
      });
    };
    const scheduleDraw = () => {
      if (animationFrame === 0) animationFrame = window.requestAnimationFrame(drawTimeline);
    };
    const syncMotionPreference = () => {
      if (!fill || !marker) {
        return;
      }
      if (reducedMotion.matches) {
        root.classList.remove("day-timeline--motion");
        fill.style.transform = "scaleY(0)";
        marker.style.transform = "translate3d(-50%, 0, 0)";
        blocks.forEach((block) => { block.style.opacity = "1"; block.style.transform = "none"; });
        media.forEach((photo) => { photo.style.transform = "none"; });
        return;
      }
      root.classList.add("day-timeline--motion");
      scheduleDraw();
    };

    syncMotionPreference();
    window.addEventListener("scroll", scheduleDraw, { passive: true });
    window.addEventListener("resize", scheduleDraw, { passive: true });
    reducedMotion.addEventListener("change", syncMotionPreference);
    return () => {
      if (animationFrame !== 0) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleDraw);
      window.removeEventListener("resize", scheduleDraw);
      reducedMotion.removeEventListener("change", syncMotionPreference);
    };
  }, []);

  return (
    <div ref={rootRef} className="day-timeline">
      <div className="day-timeline__body">
        <div className="day-timeline__track" aria-hidden="true">
          <div data-timeline-rail className="day-timeline__rail" />
          <div data-timeline-fill className="day-timeline__rail-fill" />
          <div data-timeline-marker className="day-timeline__travelling-marker" />
        </div>
        <ol className="day-timeline__list">
        {blocks.map((block, index) => (
          <li key={block.time} className={`day-timeline__item day-timeline__item--${index % 2 === 0 ? "left" : "right"}`}>
            <div className="day-timeline__stop">
              <TimelineClock time={block.time} />
            </div>
            <figure className="day-timeline__media" data-timeline-media>
              <Image
                src={block.src}
                alt={block.alt}
                fill
                sizes="(max-width: 899px) 100vw, 38vw"
                className="object-cover"
              />
            </figure>
            <article data-timeline-block className="day-timeline__block site-card site-card--paper">
              <h3 className="day-timeline__title">{block.title}</h3>
              <p className="day-timeline__meta">
                <span className="day-timeline__period">{block.period}</span>
              </p>
              <p className="day-timeline__description">{block.description}</p>
            </article>
          </li>
        ))}
        </ol>
      </div>
      <aside className="day-timeline__note" aria-label={note.label}>
        <p className="day-timeline__note-title">{note.title}</p>
        <p>{note.body}</p>
        <p className="day-timeline__closing-note">Explorá más allá</p>
        <p className="day-timeline__credit">{note.credit}</p>
      </aside>
    </div>
  );
}
