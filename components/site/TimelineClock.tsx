type TimelineClockProps = {
  /** 24h schedule time, for example "13:30". */
  time: string;
};

function parseTime(time: string) {
  const [rawHours, rawMinutes] = time.split(":");
  const hours = Number(rawHours) % 12;
  const minutes = Number(rawMinutes);
  return { hours, minutes };
}

/**
 * The clock that sits on the timeline rail: the hands show the exact time of
 * the block. Drawn as thin strokes on paper, in the canonical lake and forest
 * tones, so it reads as part of the system and never as a decorative icon.
 */
export function TimelineClock({ time }: TimelineClockProps) {
  const { hours, minutes } = parseTime(time);
  const minuteAngle = minutes * 6;
  const hourAngle = (hours + minutes / 60) * 30;

  return (
    <span className="timeline-clock" aria-hidden="true">
      <svg className="timeline-clock__dial" viewBox="0 0 48 48" focusable="false">
        <circle className="timeline-clock__face" cx="24" cy="24" r="22" />
        <g className="timeline-clock__ticks">
          {Array.from({ length: 12 }, (_, index) => {
            const isCardinal = index % 3 === 0;
            return (
              <line
                key={index}
                x1="24"
                y1={isCardinal ? "6.5" : "8"}
                x2="24"
                y2="10.5"
                transform={`rotate(${index * 30} 24 24)`}
                className={isCardinal ? "timeline-clock__tick timeline-clock__tick--cardinal" : "timeline-clock__tick"}
              />
            );
          })}
        </g>
        <line
          className="timeline-clock__hand timeline-clock__hand--hour"
          x1="24"
          y1="24"
          x2="24"
          y2="15"
          transform={`rotate(${hourAngle} 24 24)`}
        />
        <line
          className="timeline-clock__hand timeline-clock__hand--minute"
          x1="24"
          y1="24"
          x2="24"
          y2="8.5"
          transform={`rotate(${minuteAngle} 24 24)`}
        />
        <circle className="timeline-clock__pin" cx="24" cy="24" r="1.7" />
      </svg>
      <span className="timeline-clock__label">{time}</span>
    </span>
  );
}
