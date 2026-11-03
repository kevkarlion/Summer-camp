"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const route = [
  {
    time: "08:30",
    title: "Desayuno",
    detail: "Desayuno completo en la residencia.",
    href: "/programa-ingles",
  },
  {
    time: "09:15",
    title: "Misión del día",
    detail: "El desafío explicado en inglés en grupos pequeños.",
    href: "/programa-ingles",
  },
  {
    time: "10:00",
    title: "Bloque de aventura",
    detail: "Trekking o kayak en los días de aventura.",
    href: "/itinerario-y-actividades",
  },
  {
    time: "15:00",
    title: "Tiempo libre",
    detail: "Calma, juegos, lectura y llamadas a casa.",
    href: "/itinerario-y-actividades",
  },
  {
    time: "16:00",
    title: "Inglés en acción",
    detail: "Pedir, orientarse y trabajar en equipo.",
    href: "/programa-ingles",
  },
  {
    time: "19:30",
    title: "Cena",
    detail: "Todos juntos alrededor de la mesa.",
    href: "/programa-ingles/adolescentes",
  },
  {
    time: "21:00",
    title: "Actividad nocturna",
    detail: "Observación de estrellas, relatos y juegos.",
    href: "/itinerario-y-actividades",
  },
];

export function WeekRoute() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="home-route-wrap">
      <ol className="home-route" aria-label="Recorrido de un día dentro de la semana del campamento">
        {route.map((stop, index) => (
          <motion.li
            key={stop.time}
            className="home-route__stop"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.72,
              delay: shouldReduceMotion ? 0 : index * 0.075,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Link href={stop.href} className="home-route__link">
              <span className="home-route__time">{stop.time}</span>
              <span className="home-route__title">{stop.title}</span>
              <span className="home-route__detail">{stop.detail}</span>
              <span className="home-route__action" aria-hidden="true">
                Ver detalle <ArrowRight size={15} />
              </span>
            </Link>
          </motion.li>
        ))}
      </ol>
      <motion.p
        className="home-route__note"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.72,
          delay: shouldReduceMotion ? 0 : route.length * 0.075,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        Horarios aproximados: pueden variar según el clima, los requisitos de cada actividad y la organización de cada día.
      </motion.p>
    </div>
  );
}
