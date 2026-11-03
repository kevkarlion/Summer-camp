"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const dayBlocks = [
  { time: "8:00", period: "Primera luz", title: "Despertar", description: "Un comienzo tranquilo: camas, mochilas y un poco de estiramiento.", src: "/camp-media/senderismo-con-villa-la-angostura.webp", alt: "Fotografía real del campamento: grupo en un sendero con Villa La Angostura al fondo" },
  { time: "8:30", period: "Mañana", title: "Desayuno", description: "Desayuno completo en la residencia.", src: "/camp-media/grupo-jugando.webp", alt: "Fotografía real del campamento: grupo de adolescentes jugando al aire libre" },
  { time: "9:15", period: "Mañana", title: "Misión del día", description: "El desafío del día, explicado en inglés en grupos pequeños.", src: "/camp-media/mirando-el-valle.webp", alt: "Fotografía real del campamento: adolescente sobre un tronco caído contemplando el valle" },
  { time: "10:00", period: "Mañana", title: "Bloque de aventura", description: "Trekking o kayak en los días de aventura; deportes y arte en la residencia los demás días.", src: "/camp-media/kayak-en-el-lago.webp", alt: "Fotografía real del campamento: grupo en kayaks sobre el lago con montañas de fondo" },
  { time: "13:30", period: "Mediodía", title: "Almuerzo", description: "Picnic en el sendero o en la residencia.", src: "/camp-media/productores-locales.webp", alt: "Fotografía real del campamento: visita a productores locales y su oficio" },
  { time: "15:00", period: "Tarde", title: "Descanso y tiempo libre", description: "Una hora de calma, juegos, lectura y llamadas a casa.", src: "/camp-media/grupo-caminando.webp", alt: "Fotografía real del campamento: grupo caminando con mochilas por un sendero de bosque" },
  { time: "16:00", period: "Tarde", title: "Inglés en acción", description: "Desafíos reales: pedir, orientarse y trabajar en equipo.", src: "/camp-media/grupo-jugando.webp", alt: "Fotografía real del campamento: grupo de adolescentes jugando al aire libre" },
  { time: "18:00", period: "Tarde", title: "Duchas", description: "Un buen baño después de un día entero al aire libre.", src: "/camp-media/residencia-de-piedra-y-madera.png", alt: "Imagen editorial de referencia: la construcción de piedra y madera de la residencia" },
  { time: "19:30", period: "Noche", title: "Cena", description: "Todos juntos, alrededor de la mesa.", src: "/camp-media/fogata-en-el-bosque.webp", alt: "Fotografía real del campamento: fogata con marshmallows en el bosque" },
  { time: "21:00", period: "Noche", title: "Actividad nocturna", description: "Observación de estrellas, relatos y juegos. La gran fogata es la última noche.", src: "/camp-media/fogata-en-el-bosque.webp", alt: "Fotografía real del campamento: fogata con marshmallows en el bosque" },
  { time: "22:30", period: "Noche", title: "A dormir", description: "Todos a dormir después de un día completo. ¡Dulces sueños!", src: "/camp-media/residencia-y-parque.png", alt: "Imagen editorial de referencia: la residencia con su parque y el bosque nativo alrededor" },
];
const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

export function DayTimeline() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const rail = root.querySelector<HTMLElement>("[data-timeline-rail]");
    const fill = root.querySelector<HTMLElement>("[data-timeline-fill]");
    const marker = root.querySelector<HTMLElement>("[data-timeline-marker]");
    const blocks = Array.from(root.querySelectorAll<HTMLElement>("[data-timeline-block]"));
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
      fill.style.transform = `scaleY(${railProgress})`;
      marker.style.transform = `translate3d(-50%, ${railProgress * railRect.height}px, 0)`;
      blocks.forEach((block) => {
        const rect = block.getBoundingClientRect();
        const blockDocumentTop = rect.top + scrollPosition;
        const travel = Math.max(1, rect.height + viewportHeight * 0.76);
        const progress = clamp01((scrollPosition + viewportHeight * 0.88 - blockDocumentTop) / travel);
        // The text always stays legible: the scroll reads through the drifting
        // offset, the filling rail and the travelling marker.
        block.style.opacity = "1";
        block.style.transform = `translate3d(0, ${(1 - progress) * 28}px, 0)`;
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
      <div className="day-timeline__track" aria-hidden="true">
        <div data-timeline-rail className="day-timeline__rail" />
        <div data-timeline-fill className="day-timeline__rail-fill" />
        <div data-timeline-marker className="day-timeline__travelling-marker" />
      </div>
      <ol className="day-timeline__list">
        {dayBlocks.map((block, index) => (
          <li key={block.time} className={`day-timeline__item day-timeline__item--${index % 2 === 0 ? "left" : "right"}`}>
            <div className="day-timeline__stop" aria-hidden="true"><span className="day-timeline__dot" /></div>
            <figure className="day-timeline__media">
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
                <span className="day-timeline__time">{block.time}</span>
                <span className="day-timeline__period">{block.period}</span>
              </p>
              <p className="day-timeline__description">{block.description}</p>
            </article>
          </li>
        ))}
      </ol>
      <aside className="day-timeline__note" aria-label="Nota sobre los horarios">
        <p className="day-timeline__note-title">Un día típico · Los horarios son aproximados</p>
        <p>Los horarios pueden variar según el clima, los requisitos de cada actividad y la organización de cada día.</p>
        <p className="day-timeline__closing-note">Explorá más allá</p>
      </aside>
    </div>
  );
}
