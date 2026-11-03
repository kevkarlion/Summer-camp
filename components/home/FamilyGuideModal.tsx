"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowRight, X } from "lucide-react";

import { useLanguage } from "./LanguageProvider";

export function FamilyGuideModal() {
  const { dictionary } = useLanguage();
  const { safety, guide } = dictionary;
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openGuide = () => {
    dialogRef.current?.showModal();
  };

  const closeGuide = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <section className="site-section site-section--stone home-safety" aria-labelledby="home-safety-title">
        <div className="site-wrap home-safety__grid">
          <div className="home-safety__copy">
            <h2 id="home-safety-title" className="site-heading">
              {safety.heading}
            </h2>
            <p className="site-lead site-lead--dark">{safety.lead}</p>
            <div className="home-safety__actions">
              <button type="button" className="site-button site-button--primary" onClick={openGuide}>
                {safety.cta}
                <ArrowRight aria-hidden="true" size={18} />
              </button>
              <Link className="site-text-link site-text-link--dark" href="/seguridad-y-coordinacion">
                {safety.linkSafety}
              </Link>
              <Link className="site-text-link site-text-link--dark" href="/guia-familias">
                {safety.linkGuide}
              </Link>
              <Link className="site-text-link site-text-link--dark" href="/preguntas-frecuentes">
                {safety.linkFaq}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <dialog
        ref={dialogRef}
        className="home-guide-dialog"
        aria-labelledby="home-guide-title"
        onClick={(event) => {
          if (event.target === dialogRef.current) closeGuide();
        }}
      >
        <div className="home-guide-dialog__head">
          <h2 id="home-guide-title" className="home-guide-dialog__title">
            {guide.title}
          </h2>
          <button type="button" className="home-guide-dialog__close" onClick={closeGuide}>
            <span className="sr-only">{guide.close}</span>
            <X aria-hidden="true" size={20} />
          </button>
        </div>

        <div className="home-guide-dialog__body">
          <p className="home-guide-dialog__intro">{guide.intro}</p>

          <div className="home-guide-dialog__groups">
            {guide.groups.map((group) => (
              <section key={group.title} className="home-guide-dialog__group">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <p className="home-guide-dialog__foot">
            {guide.footnote}{" "}
            <Link className="home-guide-dialog__foot-link" href="/guia-familias">
              {guide.footnoteLink}
            </Link>
          </p>
        </div>
      </dialog>
    </>
  );
}
