"use client";

import { defaultLanguage, type Language } from "./dictionary";

export const LANGUAGE_STORAGE_KEY = "psc-language";

let currentLanguage: Language = defaultLanguage;

const listeners = new Set<() => void>();

function notify() {
  for (const listener of listeners) listener();
}

export function subscribeToLanguage(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getLanguageSnapshot(): Language {
  return currentLanguage;
}

export function getServerLanguageSnapshot(): Language {
  return defaultLanguage;
}

export function setLanguage(next: Language) {
  if (next === currentLanguage) return;
  currentLanguage = next;
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, next);
  } catch {
    // Storage can be unavailable (private mode); the language still switches for the session.
  }
  notify();
}

export function toggleLanguage() {
  setLanguage(currentLanguage === "en" ? "es" : "en");
}

/** Reads the stored preference once, after mount, so the server render stays on the default language. */
export function hydrateLanguage() {
  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored === "en" || stored === "es") currentLanguage = stored;
  } catch {
    // Ignore unreadable storage and keep the default language.
  }
  notify();
}
