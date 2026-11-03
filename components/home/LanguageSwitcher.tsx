"use client";

import { useLanguage } from "./LanguageProvider";

const options = [
  { code: "en" as const, label: "EN", lang: "en" },
  { code: "es" as const, label: "ES", lang: "es" },
];

export function LanguageSwitcher({ id = "site-language-switcher" }: { id?: string }) {
  const { language, setLanguage, dictionary } = useLanguage();

  return (
    <div
      id={id}
      role="group"
      aria-label={dictionary.nav.languageLabel}
      className="flex shrink-0 items-center gap-0.5 rounded-full bg-overlay-soft p-0.5"
    >
      {options.map((option) => {
        const isSelected = language === option.code;

        return (
          <button
            key={option.code}
            type="button"
            lang={option.lang}
            aria-pressed={isSelected}
            onClick={() => setLanguage(option.code)}
            className={
              isSelected
                ? "min-w-9 rounded-full bg-[#f8fafc] px-2 py-1 text-[12px] font-bold text-[#0b1320]"
                : "min-w-9 rounded-full px-2 py-1 text-[12px] font-semibold text-white/70 transition-colors duration-200 hover:text-white"
            }
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
