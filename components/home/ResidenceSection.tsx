"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useLanguage } from "./LanguageProvider";
import { ResidenceGallery } from "./ResidenceGallery";

export function ResidenceSection() {
  const { dictionary } = useLanguage();
  const { residence } = dictionary;

  return (
    <section className="site-section site-section--stone home-residence" aria-labelledby="home-residence-title">
      <div className="site-wrap home-residence__intro">
        <div>
          <h2 id="home-residence-title" className="site-heading">
            {residence.heading}
          </h2>
          <p className="site-lead site-lead--dark">{residence.lead}</p>
        </div>
        <div className="home-residence__links">
          <Link className="site-text-link site-text-link--dark" href="/destino/villa-la-angostura">
            {residence.linkDestination} <ArrowRight aria-hidden="true" size={17} />
          </Link>
          <Link className="site-text-link site-text-link--dark" href="/itinerario-y-actividades">
            {residence.linkActivities} <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </div>
      <ResidenceGallery />
    </section>
  );
}
