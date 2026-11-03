"use client";

import { useLanguage } from "./LanguageProvider";

export function HomeSummary() {
  const { dictionary } = useLanguage();

  return (
    <section className="site-section site-section--paper">
      <div className="site-wrap">
        <p className="site-body home-summary">{dictionary.home.summary}</p>
      </div>
    </section>
  );
}
