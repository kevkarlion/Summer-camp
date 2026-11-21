"use client";

import {
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  LoaderCircle,
} from "lucide-react";
import { useMemo, useRef, useState, useSyncExternalStore, type FormEvent } from "react";

import type { AgendaFormCopy, SlotsCopy } from "./video-call-types";
import { cn } from "@/lib/utils";

const TIME_SLOTS = [
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
];

/**
 * The front-end demo needs a real reserved state so the interaction can be
 * understood without a booking service. A production API can replace this
 * map without changing the calendar or its public controls.
 */
const RESERVED_TIMES_BY_WEEKDAY: Record<number, string[]> = {
  1: ["18:30"],
  2: ["17:00", "20:30"],
  3: ["19:00"],
  4: ["17:30", "21:30"],
  5: ["18:00"],
};

type DayOption = {
  iso: string;
  dayNumber: string;
  month: string;
  longLabel: string;
  isCurrentMonth: boolean;
  isBookable: boolean;
};

type SelectedSlot = {
  iso: string;
  time: string;
  longLabel: string;
};

type FieldErrors = Partial<Record<"name" | "email" | "topic" | "slot", string>>;

type RequestSummary = {
  slot: string;
  name: string;
  email: string;
  phone: string;
  topic: string;
  language: string;
  message: string;
};

/** The day sheet is read on the client only: the server cannot know the visitor's day. */
const noopSubscribe = () => () => {};

function startOfUtcMonth(date: Date) {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1, 12));
}

function toIso(date: Date) {
  return date.toISOString().slice(0, 10);
}

function buildCalendarMonth(month: Date, locale: string): DayOption[] {
  const shortMonth = new Intl.DateTimeFormat(locale, { month: "short", timeZone: "UTC" });
  const long = new Intl.DateTimeFormat(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "UTC",
  });
  const firstDay = startOfUtcMonth(month);
  const mondayOffset = (firstDay.getUTCDay() + 6) % 7;
  const gridStart = new Date(firstDay);
  gridStart.setUTCDate(firstDay.getUTCDate() - mondayOffset);
  const today = new Date();
  const todayIso = toIso(
    new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), 12)),
  );

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(gridStart);
    date.setUTCDate(gridStart.getUTCDate() + index);
    const iso = toIso(date);
    const weekdayIndex = date.getUTCDay();

    return {
      iso,
      dayNumber: String(date.getUTCDate()),
      month: shortMonth.format(date),
      longLabel: long.format(date),
      isCurrentMonth: date.getUTCMonth() === month.getUTCMonth(),
      isBookable:
        date.getUTCMonth() === month.getUTCMonth() &&
        weekdayIndex >= 1 &&
        weekdayIndex <= 5 &&
        iso >= todayIso,
    };
  });
}

export function VideoCallBooking({
  copy,
  slotsCopy,
  locale,
}: {
  copy: AgendaFormCopy;
  slotsCopy: SlotsCopy;
  locale: string;
}) {
  const [slot, setSlot] = useState<SelectedSlot | null>(null);
  const [visibleMonth, setVisibleMonth] = useState(() => startOfUtcMonth(new Date()));
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [summary, setSummary] = useState<RequestSummary | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const isClient = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

  const days = useMemo(
    () => (isClient ? buildCalendarMonth(visibleMonth, locale) : []),
    [isClient, locale, visibleMonth],
  );

  const monthLabel = useMemo(
    () =>
      new Intl.DateTimeFormat(locale, {
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      }).format(visibleMonth),
    [locale, visibleMonth],
  );

  const weekdayLabels = useMemo(
    () => {
      const monday = new Date(Date.UTC(2024, 0, 1, 12));
      return Array.from({ length: 7 }, (_, index) => {
        const date = new Date(monday);
        date.setUTCDate(monday.getUTCDate() + index);
        return new Intl.DateTimeFormat(locale, {
          weekday: "short",
          timeZone: "UTC",
        }).format(date);
      });
    },
    [locale],
  );

  const chosenLabel = slot
    ? slotsCopy.chosen.replace("{day}", slot.longLabel).replace("{time}", slot.time)
    : slotsCopy.empty;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const topic = String(data.get("topic") ?? "").trim();
    const language = String(data.get("language") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: FieldErrors = {};
    if (name.length < 2) nextErrors.name = copy.errors.name;
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = copy.errors.email;
    if (!topic) nextErrors.topic = copy.errors.topic;
    if (!slot) nextErrors.slot = copy.errors.slot;

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstError = Object.keys(nextErrors)[0];
      form.querySelector<HTMLElement>(`[data-error="${firstError}"]`)?.focus();
      return;
    }

    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSummary({
        slot: slot ? `${slot.longLabel} · ${slot.time}` : "",
        name,
        email,
        phone,
        topic,
        language,
        message,
      });
      form.reset();
    }, 650);
  };

  const focusForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => {
      formRef.current?.querySelector<HTMLInputElement>("input[name='name']")?.focus();
    }, 420);
  };

  const selectedWeekday = slot
    ? new Date(`${slot.iso}T12:00:00Z`).getUTCDay()
    : null;
  const reservedTimes = selectedWeekday
    ? (RESERVED_TIMES_BY_WEEKDAY[selectedWeekday] ?? [])
    : [];

  const slotsPanel = (
    <div className="agenda-slots">
      <div className="agenda-slots__group">
        <div className="agenda-calendar__header">
          <p className="agenda-slots__legend">
            <CalendarDays aria-hidden="true" size={18} />
            {slotsCopy.dayLabel}
          </p>
          <div className="agenda-calendar__nav" aria-label={monthLabel}>
            <button
              type="button"
              className="agenda-calendar__nav-button"
              aria-label={slotsCopy.previousMonth}
              onClick={() =>
                setVisibleMonth(
                  (current) =>
                    new Date(Date.UTC(current.getUTCFullYear(), current.getUTCMonth() - 1, 1, 12)),
                )
              }
            >
              <ChevronLeft aria-hidden="true" size={18} />
            </button>
            <strong className="agenda-calendar__month">{monthLabel}</strong>
            <button
              type="button"
              className="agenda-calendar__nav-button"
              aria-label={slotsCopy.nextMonth}
              onClick={() =>
                setVisibleMonth(
                  (current) =>
                    new Date(Date.UTC(current.getUTCFullYear(), current.getUTCMonth() + 1, 1, 12)),
                )
              }
            >
              <ChevronRight aria-hidden="true" size={18} />
            </button>
          </div>
        </div>

        <div className="agenda-calendar" role="group" aria-label={monthLabel}>
          <div className="agenda-calendar__weekdays">
            {weekdayLabels.map((weekday, index) => (
              <span key={`${weekday}-${index}`}>
                {weekday}
              </span>
            ))}
          </div>
          <div className="agenda-calendar__grid">
            {days.map((day) => {
              const isSelected = slot?.iso === day.iso;
              return (
                <button
                  key={day.iso}
                  type="button"
                  className={cn(
                    "agenda-calendar__day",
                    !day.isCurrentMonth && "agenda-calendar__day--outside",
                    !day.isBookable && "agenda-calendar__day--unavailable",
                    isSelected && "agenda-calendar__day--selected",
                  )}
                  aria-label={day.longLabel}
                  aria-pressed={isSelected}
                  aria-disabled={!day.isBookable}
                  disabled={!day.isBookable}
                  onClick={() =>
                    setSlot((current) =>
                      current?.iso === day.iso
                        ? current
                        : {
                            iso: day.iso,
                            time:
                              (current?.time &&
                              !RESERVED_TIMES_BY_WEEKDAY[
                                new Date(`${day.iso}T12:00:00Z`).getUTCDay()
                              ]?.includes(current.time)
                                ? current.time
                                : null) ??
                              TIME_SLOTS.find(
                                (time) =>
                                  !RESERVED_TIMES_BY_WEEKDAY[
                                    new Date(`${day.iso}T12:00:00Z`).getUTCDay()
                                  ]?.includes(time),
                              ) ??
                              TIME_SLOTS[0],
                            longLabel: day.longLabel,
                          },
                    )
                  }
                >
                  <span className="agenda-calendar__day-number">{day.dayNumber}</span>
                  <span className="agenda-calendar__day-month">{day.month}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="agenda-slots__statuses" aria-label={slotsCopy.available}>
          <span className="agenda-slots__status agenda-slots__status--available">
            <span aria-hidden="true" />
            {slotsCopy.available}
          </span>
          <span className="agenda-slots__status agenda-slots__status--reserved">
            <span aria-hidden="true" />
            {slotsCopy.reserved}
          </span>
        </div>
      </div>

      <div className="agenda-slots__group">
        <p className="agenda-slots__legend">
          <Clock aria-hidden="true" size={18} />
          {slotsCopy.timeLabel}
        </p>
        <div className="agenda-times" role="group" aria-label={slotsCopy.timeLabel}>
          {TIME_SLOTS.map((time) => {
            const isSelected = slot?.time === time;
            const isReserved = reservedTimes.includes(time);
            const isDisabled = !slot || isReserved;
            return (
              <button
                key={time}
                type="button"
                className={cn(
                  "agenda-time",
                  isSelected && "agenda-time--selected",
                  isReserved && "agenda-time--reserved",
                )}
                aria-pressed={isSelected}
                aria-disabled={isDisabled}
                disabled={isDisabled}
                onClick={() =>
                  setSlot((current) =>
                    current ? { ...current, time } : current,
                  )
                }
              >
                {time}
                {isReserved ? <span className="agenda-time__status">{slotsCopy.reserved}</span> : null}
              </button>
            );
          })}
        </div>
      </div>

      <p
        className={cn("agenda-slots__chosen", slot && "agenda-slots__chosen--active")}
        role="status"
        aria-live="polite"
      >
        {chosenLabel}
        <span className="agenda-slots__zone">{slotsCopy.timezoneNote}</span>
      </p>
      {errors.slot ? (
        <p className="agenda-field__error" data-error="slot" tabIndex={-1}>
          {errors.slot}
        </p>
      ) : null}
    </div>
  );

  if (summary) {
    return (
      <div className="agenda-booking">
        {slotsPanel}
        <div className="agenda-stub" role="status" aria-live="polite">
          <span className="agenda-stub__mark" aria-hidden="true">
            <CheckCircle2 size={26} />
          </span>
          <h3 className="agenda-stub__title">{copy.success.title}</h3>
          <p className="agenda-stub__text">{copy.success.text}</p>
          <dl className="agenda-stub__list">
            <div>
              <dt>{slotsCopy.dayLabel}</dt>
              <dd>{summary.slot}</dd>
            </div>
            <div>
              <dt>{copy.fields.name}</dt>
              <dd>{summary.name}</dd>
            </div>
            <div>
              <dt>{copy.fields.email}</dt>
              <dd>{summary.email}</dd>
            </div>
            <div>
              <dt>{copy.fields.topic}</dt>
              <dd>{summary.topic}</dd>
            </div>
            <div>
              <dt>{copy.fields.language}</dt>
              <dd>{summary.language}</dd>
            </div>
            {summary.phone ? (
              <div>
                <dt>{copy.fields.phone}</dt>
                <dd>{summary.phone}</dd>
              </div>
            ) : null}
            {summary.message ? (
              <div>
                <dt>{copy.fields.message}</dt>
                <dd>{summary.message}</dd>
              </div>
            ) : null}
          </dl>
          <p className="agenda-stub__note">{copy.submit.note}</p>
          <button
            type="button"
            className="agenda-stub__again"
            onClick={() => {
              setSummary(null);
              setSlot(null);
              setErrors({});
            }}
          >
            {copy.success.again}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="agenda-booking">
      {slotsPanel}

      <form ref={formRef} className="agenda-form" onSubmit={handleSubmit} noValidate>
        <div className="agenda-field">
          <label className="agenda-field__label" htmlFor="agenda-name">
            {copy.fields.name}
          </label>
          <input
            id="agenda-name"
            name="name"
            type="text"
            className="agenda-field__input"
            placeholder={copy.fields.namePlaceholder}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "agenda-name-error" : undefined}
          />
          {errors.name ? (
            <p className="agenda-field__error" id="agenda-name-error">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="agenda-field">
          <label className="agenda-field__label" htmlFor="agenda-email">
            {copy.fields.email}
          </label>
          <input
            id="agenda-email"
            name="email"
            type="email"
            className="agenda-field__input"
            placeholder={copy.fields.emailPlaceholder}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "agenda-email-error" : undefined}
          />
          {errors.email ? (
            <p className="agenda-field__error" id="agenda-email-error">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="agenda-field">
          <label className="agenda-field__label" htmlFor="agenda-phone">
            {copy.fields.phone}
            <span className="agenda-field__optional">{copy.fields.phoneOptional}</span>
          </label>
          <input
            id="agenda-phone"
            name="phone"
            type="tel"
            className="agenda-field__input"
            placeholder="+54 9 2944 00 00 00"
            autoComplete="tel"
          />
        </div>

        <div className="agenda-field">
          <label className="agenda-field__label" htmlFor="agenda-topic">
            {copy.fields.topic}
          </label>
          <div className="agenda-field__selectwrap">
            <select
              id="agenda-topic"
              name="topic"
              className="agenda-field__input agenda-field__select"
              defaultValue=""
              aria-invalid={Boolean(errors.topic)}
              aria-describedby={errors.topic ? "agenda-topic-error" : undefined}
            >
              <option value="" disabled>
                —
              </option>
              {copy.fields.topicOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown className="agenda-field__chevron" aria-hidden="true" size={18} />
          </div>
          {errors.topic ? (
            <p className="agenda-field__error" id="agenda-topic-error">
              {errors.topic}
            </p>
          ) : null}
        </div>

        <fieldset className="agenda-field agenda-field--group">
          <legend className="agenda-field__label">{copy.fields.language}</legend>
          <div className="agenda-chips">
            {copy.fields.languageOptions.map((option, index) => (
              <label key={option} className="agenda-chip">
                <input type="radio" name="language" value={option} defaultChecked={index === 0} />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="agenda-field">
          <label className="agenda-field__label" htmlFor="agenda-message">
            {copy.fields.message}
          </label>
          <textarea
            id="agenda-message"
            name="message"
            rows={4}
            className="agenda-field__input agenda-field__textarea"
            placeholder={copy.fields.messagePlaceholder}
          />
        </div>

        <button type="submit" className="agenda-submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <LoaderCircle aria-hidden="true" size={18} className="agenda-submit__spinner" />
              {copy.submit.sending}
            </>
          ) : (
            copy.submit.button
          )}
        </button>
        <p className="agenda-submit__note">{copy.submit.note}</p>
      </form>

      {slot ? (
        <div className="agenda-bar" role="status" aria-live="polite">
          <span className="agenda-bar__slot">
            {slot.longLabel} · {slot.time}
          </span>
          <button type="button" className="agenda-bar__button" onClick={focusForm}>
            {slotsCopy.continueCta}
          </button>
        </div>
      ) : null}
    </div>
  );
}
