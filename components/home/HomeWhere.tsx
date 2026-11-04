"use client";

import { MapPin } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";

import { useLanguage } from "./LanguageProvider";

/**
 * Where the camp is: a short description of Villa La Angostura for visitors
 * who do not know the place, next to a schematic locator drawn with the site
 * palette. The map is schematic on purpose, so it says so.
 */
export function HomeWhere() {
  const { dictionary } = useLanguage();
  const { where } = dictionary.home;

  return (
    <section className="site-section site-section--forest home-where" aria-labelledby="home-where-title">
      <div className="site-wrap">
        <div className="home-where__grid">
          <div className="home-where__copy">
            <Reveal>
              <h2 id="home-where-title" className="site-heading site-heading--light home-where__title">
                {where.title}
              </h2>
              <p className="site-lead site-lead--light home-where__lead">{where.lead}</p>
            </Reveal>

            <dl className="home-where__points">
              {where.points.map((point, index) => (
                <Reveal key={point.label} delay={0.08 + index * 0.08} className="home-where__point">
                  <dt>{point.label}</dt>
                  <dd>{point.text}</dd>
                </Reveal>
              ))}
            </dl>

            <Reveal delay={0.32}>
              <p className="home-where__residence">
                <MapPin aria-hidden="true" size={18} />
                {where.residence}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <figure className="home-where__map">
              <svg
                className="home-where__canvas"
                viewBox="0 0 640 480"
                role="img"
                aria-label={where.mapLabel}
              >
                <rect className="home-where__ground" x="0" y="0" width="640" height="480" />

                {/* the mountain range to the west */}
                <path
                  className="home-where__range"
                  d="M0 336 L58 244 L104 300 L158 208 L206 268 L248 232 L288 336 L288 480 L0 480 Z"
                />
                <path
                  className="home-where__range home-where__range--back"
                  d="M0 386 L46 316 L86 356 L128 296 L176 352 L220 318 L258 386 L258 480 L0 480 Z"
                />

                {/* Lake Nahuel Huapi */}
                <path
                  className="home-where__lake"
                  d="M420 16
                     C478 34 512 82 506 134
                     C500 184 530 206 540 250
                     C552 304 524 340 544 382
                     C558 414 550 444 526 466
                     L418 466
                     C448 432 456 404 436 372
                     C410 328 432 294 422 248
                     C410 196 380 176 388 126
                     C394 80 372 42 352 16 Z"
                />

                {/* reference points */}
                <g className="home-where__marker">
                  <circle cx="470" cy="74" r="6" />
                </g>
                <g className="home-where__marker">
                  <circle cx="520" cy="428" r="6" />
                </g>
                <g className="home-where__marker home-where__marker--town">
                  <circle cx="396" cy="236" r="10" />
                  <circle cx="396" cy="236" r="19" className="home-where__marker-ring" />
                </g>

                {/* the town gets a label plate so it reads on any ground */}
                <g className="home-where__town-label">
                  <rect x="196" y="176" width="184" height="36" rx="2" />
                  <text x="210" y="201">{where.map.town}</text>
                </g>

                {/* north */}
                <g className="home-where__north">
                  <path d="M56 92 L68 56 L80 92 Z" />
                  <text x="68" y="112" textAnchor="middle">
                    N
                  </text>
                </g>

                {/* labels */}
                <text className="home-where__label" x="440" y="66" textAnchor="end">
                  {where.map.north}
                </text>
                <text className="home-where__label home-where__label--water" x="520" y="456" textAnchor="middle">
                  {where.map.south}
                </text>
                <text className="home-where__label home-where__label--water" x="466" y="326">
                  {where.map.lake}
                </text>
                <text className="home-where__label home-where__label--light" x="36" y="452">
                  {where.map.range}
                </text>
              </svg>
              <figcaption>{where.mapNote}</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
