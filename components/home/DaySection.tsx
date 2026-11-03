"use client";

import { DayTimeline } from "@/components/site/DayTimeline";
import { useLanguage } from "./LanguageProvider";

export function DaySection() {
  const { dictionary } = useLanguage();
  const { day } = dictionary;

  return (
    <section className="site-section site-section--paper home-day" aria-labelledby="home-day-title">
      <div className="site-wrap">
        <div className="site-section__intro site-section__intro--wide">
          <div>
            <h2 id="home-day-title" className="site-heading">
              {day.heading}
            </h2>
            <p className="site-lead site-lead--dark">{day.lead}</p>
          </div>
          <p className="site-section__aside site-section__aside--dark">{day.aside}</p>
        </div>

        <DayTimeline />
      </div>
    </section>
  );
}
