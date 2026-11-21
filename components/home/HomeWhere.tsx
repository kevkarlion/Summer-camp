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
    <section className="site-section site-section--camp-green home-where" aria-labelledby="home-where-title">
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
                <g className="home-where__marker home-where__marker--north">
                  <circle cx="470" cy="74" r="7" />
                </g>
                <g className="home-where__marker home-where__marker--south">
                  <circle cx="520" cy="428" r="7" />
                </g>
                <g className="home-where__marker home-where__marker--town">
                  <circle cx="396" cy="236" r="10" />
                  <circle cx="396" cy="236" r="19" className="home-where__marker-ring" />
                </g>

                {/* every place name uses the same paper plate treatment */}
                <g className="home-where__place-label home-where__place-label--town">
                  <rect x="196" y="176" width="184" height="36" rx="2" />
                  <text x="210" y="201">{where.map.town}</text>
                </g>

                {/* north */}
                <g className="home-where__north">
                  <path d="M56 92 L68 56 L80 92 Z" />
                </g>
                <g className="home-where__place-label home-where__place-label--compact">
                  <rect x="52" y="98" width="32" height="24" rx="2" />
                  <text x="68" y="115" textAnchor="middle">
                    N
                  </text>
                </g>

                {/* labels: paper plates keep the two reference towns legible on every ground */}
                <g className="home-where__place-label">
                  <rect x="250" y="48" width="200" height="32" rx="2" />
                  <text x="438" y="70" textAnchor="end">
                    {where.map.north}
                  </text>
                </g>
                <g className="home-where__place-label">
                  <rect x="450" y="440" width="140" height="32" rx="2" />
                  <text x="520" y="462" textAnchor="middle">
                    {where.map.south}
                  </text>
                </g>
                <g className="home-where__place-label">
                  <rect x="450" y="304" width="180" height="30" rx="2" />
                  <text x="460" y="326">
                    {where.map.lake}
                  </text>
                </g>
                <g className="home-where__place-label">
                  <rect x="24" y="430" width="150" height="30" rx="2" />
                  <text x="36" y="452">
                    {where.map.range}
                  </text>
                </g>
              </svg>
              <figcaption>{where.mapNote}</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
