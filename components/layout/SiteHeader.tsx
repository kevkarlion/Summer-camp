"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/programa-ingles", label: "Programa" },
  { href: "/programa-ingles/adolescentes", label: "13–17 años" },
  { href: "/itinerario-y-actividades", label: "Experiencias" },
  { href: "/destino/villa-la-angostura", label: "Destino" },
  { href: "/seguridad-y-coordinacion", label: "Seguridad" },
  { href: "/guia-familias", label: "Guía" },
  { href: "/preguntas-frecuentes", label: "FAQ" },
  { href: "/sobre-nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

const mobileGroups = [
  {
    label: "La experiencia",
    items: navigation.slice(1, 5),
  },
  {
    label: "Para las familias",
    items: navigation.slice(5, 8),
  },
  {
    label: "El proyecto",
    items: navigation.slice(8),
  },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full isolate bg-main">
      <Container className="flex h-20 items-center justify-between gap-5 xl:gap-8">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3"
          aria-label="Patagonia Summer Camp 2027, inicio"
        >
          <Image
            src="/patagonia-summer-camp-mark-new.png"
            alt=""
            width={40}
            height={40}
            className="size-10 shrink-0 transition-transform duration-300 ease-expo group-hover:-translate-y-0.5"
          />
          <span className="leading-tight">
            <span className="block text-[15px] font-bold tracking-[0.08em] text-main">PATAGONIA</span>
            <span className="block text-[13px] font-semibold tracking-[0.2em] text-secondary-accent">SUMMER CAMP</span>
          </span>
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-end gap-1 xl:flex" aria-label="Navegación principal">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const isContact = item.href === "/contacto";

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-2.5 py-2 text-[13px] font-medium text-white/90 transition-[color,background-color,opacity] duration-300 hover:bg-overlay-soft hover:text-white 2xl:px-3",
                  isActive ? "bg-overlay-soft text-white" : "text-white/90",
                  isContact &&
                    "ml-1 rounded-[0.2rem] border border-[var(--scout-oxblood)] bg-[var(--scout-oxblood)] px-3 py-2 font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--scout-parchment)] shadow-none before:pointer-events-none before:absolute before:inset-[2px] before:border before:border-dashed before:border-current/40 before:content-[''] hover:bg-[color-mix(in_srgb,var(--scout-oxblood)_86%,black)] hover:text-[var(--scout-parchment)]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="grid size-11 shrink-0 place-items-center rounded-full border border-subtle bg-overlay-soft text-main xl:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </Container>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-navigation"
            className="max-h-[calc(100svh_-_5rem)] overflow-y-auto border-t border-subtle bg-main/98 px-5 pb-[calc(1.25rem_+_env(safe-area-inset-bottom))] pt-5 backdrop-blur-xl xl:hidden"
            initial={shouldReduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="mx-auto max-w-7xl" aria-label="Navegación móvil">
              <Link
                href="/"
                onClick={closeMenu}
                aria-current={pathname === "/" ? "page" : undefined}
                className="mb-5 flex items-center justify-between border-b border-subtle pb-4 text-base font-semibold text-main"
              >
                Inicio
                <span aria-hidden="true" className="text-primary-accent">→</span>
              </Link>

              {mobileGroups.map((group) => (
                <div key={group.label} className="mb-6 last:mb-0">
                  <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.16em] text-secondary-accent">
                    {group.label}
                  </p>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {group.items.map((item) => {
                      const isActive = pathname === item.href;

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={closeMenu}
                          aria-current={isActive ? "page" : undefined}
                          className={cn(
                            "rounded-xl border border-subtle bg-overlay-soft px-3 py-3 text-sm font-medium text-white/90 transition-colors hover:border-primary/30 hover:text-white",
                            isActive && "border-primary/35 bg-primary/10 text-primary-accent",
                          )}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}

              <Button
                href="/contacto"
                onClick={closeMenu}
                className="relative mt-6 w-full rounded-[0.2rem] border border-[var(--scout-oxblood)] bg-[var(--scout-oxblood)] font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--scout-parchment)] shadow-none before:pointer-events-none before:absolute before:inset-[3px] before:border before:border-dashed before:border-current/40 before:content-[''] hover:bg-[color-mix(in_srgb,var(--scout-oxblood)_86%,black)] hover:text-[var(--scout-parchment)]"
              >
                Consultar información
              </Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
