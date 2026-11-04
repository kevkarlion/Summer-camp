"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/home/LanguageSwitcher";
import { useLanguage } from "@/components/home/LanguageProvider";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const { dictionary } = useLanguage();
  const navigation = dictionary.nav.items;

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 w-full isolate bg-main">
      <Container className="flex h-20 items-center justify-between gap-5 xl:gap-8">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3"
          aria-label={dictionary.nav.primaryLabel}
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

        <nav className="hidden min-w-0 flex-1 items-center justify-end gap-1 xl:flex" aria-label={dictionary.nav.primaryNavLabel}>
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-2.5 py-2 text-[13px] font-medium text-white/90 transition-[color,background-color,opacity] duration-300 hover:bg-overlay-soft hover:text-white 2xl:px-3",
                  isActive ? "bg-overlay-soft text-white" : "text-white/90",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contacto"
            className="site-header__contact hidden shrink-0 xl:inline-flex"
          >
            {dictionary.nav.contactCta}
          </Link>
          <LanguageSwitcher id="site-language-switcher-desktop" />
        </nav>

        <button
          type="button"
          className="site-header__toggle xl:hidden"
          aria-label={isOpen ? dictionary.nav.closeMenu : dictionary.nav.openMenu}
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
            className="site-menu"
            initial={shouldReduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav aria-label={dictionary.nav.mobileNavLabel}>
              <ul className="site-menu__list">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "site-menu__link",
                          isActive && "site-menu__link--active",
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="site-menu__footer">
              <LanguageSwitcher id="site-language-switcher-mobile" />
              <Link href="/contacto" onClick={closeMenu} className="site-button site-button--paper">
                {dictionary.nav.contactCta}
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
