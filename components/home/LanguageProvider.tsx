"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import { dictionary, type Dictionary, type Language } from "./dictionary";
import {
  getLanguageSnapshot,
  getServerLanguageSnapshot,
  hydrateLanguage,
  setLanguage,
  subscribeToLanguage,
  toggleLanguage,
} from "./language-store";

export type LanguageContextValue = {
  language: Language;
  dictionary: Dictionary;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: Readonly<{ children: ReactNode }>) {
  const language = useSyncExternalStore(
    subscribeToLanguage,
    getLanguageSnapshot,
    getServerLanguageSnapshot,
  );

  useEffect(() => {
    hydrateLanguage();
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      dictionary: dictionary[language],
      setLanguage,
      toggleLanguage,
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

/**
 * Reads the active language. Components rendered inside the provider use the context;
 * the shared header, which lives outside the site layout, falls back to the same store.
 */
export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  const language = useSyncExternalStore(
    subscribeToLanguage,
    getLanguageSnapshot,
    getServerLanguageSnapshot,
  );

  return useMemo<LanguageContextValue>(
    () =>
      context ?? {
        language,
        dictionary: dictionary[language],
        setLanguage,
        toggleLanguage,
      },
    [context, language],
  );
}
