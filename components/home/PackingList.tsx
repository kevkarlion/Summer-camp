"use client";

import Link from "next/link";
import { ArrowRight, Backpack, FileText, Footprints, Shirt } from "lucide-react";

import { useLanguage } from "./LanguageProvider";
import type { PackingCard } from "./dictionary";

const icons = {
  shirt: Shirt,
  footprints: Footprints,
  backpack: Backpack,
  fileText: FileText,
} as const;

function PackingCardView({ card }: { card: PackingCard }) {
  const Icon = icons[card.icon];

  return (
    <article className="home-packing__card">
      <h3 className="home-packing__header">
        <Icon className="home-packing__icon" aria-hidden="true" size={22} strokeWidth={1.75} />
        <span>{card.title}</span>
      </h3>
      <ul>
        {card.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export function PackingList() {
  const { dictionary } = useLanguage();
  const { packing } = dictionary;

  return (
    <section className="site-section site-section--paper home-packing" aria-labelledby="home-packing-title">
      <div className="site-wrap">
        <div className="site-section__intro site-section__intro--wide">
          <div>
            <h2 id="home-packing-title" className="site-heading">
              {packing.heading}
            </h2>
            <p className="site-lead site-lead--dark">{packing.lead}</p>
          </div>
          <p className="site-section__aside site-section__aside--dark">{packing.note}</p>
        </div>

        <div className="home-packing__grid">
          {packing.cards.map((card) => (
            <PackingCardView key={card.title} card={card} />
          ))}
        </div>

        <p className="home-packing__link">
          <Link className="site-text-link site-text-link--dark" href="/guia-familias">
            {packing.link} <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </p>
      </div>
    </section>
  );
}
