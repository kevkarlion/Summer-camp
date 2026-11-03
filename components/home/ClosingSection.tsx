"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useLanguage } from "./LanguageProvider";

export function ClosingSection() {
  const { dictionary } = useLanguage();
  const { closing } = dictionary;

  return (
    <section className="home-closing" aria-labelledby="home-closing-title">
      <div className="site-wrap home-closing__grid">
        <div>
          <h2 id="home-closing-title">{closing.heading}</h2>
        </div>
        <div className="home-closing__action">
          <p>{closing.text}</p>
          <Link className="site-button site-button--paper" href="/contacto">
            {closing.cta} <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
