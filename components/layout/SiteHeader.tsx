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
  { href: "/programa-ingles", label: "Programa" },
  { href: "/itinerario-y-actividades", label: "Experiencias" },
  { href: "/seguridad-y-coordinacion", label: "Seguridad" },
  { href: "/sobre-nosotros", label: "Nosotros" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-subtle bg-main/78 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" className="group flex items-center gap-3" aria-label="Patagonia Summer Camp 2027, inicio">
          <Image
            src="/patagonia-summer-camp-mark-new.png"
            alt=""
            width={40}
            height={40}
            className="size-10 shrink-0 transition-transform duration-300 ease-expo group-hover:-translate-y-0.5"
          />
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-[0.08em] text-main">PATAGONIA</span>
            <span className="block text-[10px] font-semibold tracking-[0.24em] text-secondary-accent">SUMMER CAMP</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-sm font-medium text-muted transition-colors duration-300 hover:text-main",
                  isActive && "text-main",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contacto" size="sm">
            Consultar lugar
          </Button>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-subtle bg-overlay-soft text-main lg:hidden"
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
            className="border-t border-subtle bg-main px-5 py-5 lg:hidden"
            initial={shouldReduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="mx-auto flex max-w-7xl flex-col" aria-label="Navegación móvil">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-subtle py-4 text-base font-medium text-muted transition-colors hover:text-main"
                >
                  {item.label}
                </Link>
              ))}
              <Button href="/contacto" className="mt-5 w-full" onClick={() => setIsOpen(false)}>
                Consultar lugar
              </Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
