"use client";

import { CalendarDays, CheckCircle2, ChevronDown, Clock, LoaderCircle } from "lucide-react";
import { useMemo, useRef, useState, useSyncExternalStore, type FormEvent } from "react";

import type { AgendaFormCopy, SlotsCopy } from "./video-call-types";
import { cn } from "@/lib/utils";

const TIME_SLOTS = ["09:00", "11:00", "14:00", "17:00"];
const WORKING_DAYS = 8;

type DayOption = {
  iso: string;
  weekday: string;
  dayNumber: string;
  month: string;
  longLabel: string;
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

function buildDays(locale: string): DayOption[] {
  const weekday = new Intl.DateTimeFormat(locale, { weekday: "short", timeZone: "UTC" });
  const month = new Intl.DateTimeFormat(locale, { month: "short", timeZone: "UTC" });
  const long = new Intl.DateTimeFormat(locale, { weekday: "long", day: "numeric", month: "long", timeZone: "UTC" });
  const days: DayOption[] = [];

  const cursor = new Date();
  cursor.setUTCHours(12, 0, 0, 0);
  cursor.setUTCDate(cursor.getUTCDate() + 1);

  while (days.length < WORKING_DAYS) {
    const weekdayIndex = cursor.getUTCDay();
    if (weekdayIndex !== 0 && weekdayIndex !== 6) {
      days.push({
        iso: cursor.toISOString().slice(0, 10),
        weekday: weekday.format(cursor),
        dayNumber: String(cursor.getUTCDate()),
        month: month.format(cursor),
        longLabel: long.format(cursor),
      });
    }
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }

  return days;
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
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [summary, setSummary] = useState<RequestSummary | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const isClient = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

  const days = useMemo(() => (isClient ? buildDays(locale) : []), [isClient, locale]);

  const selectedDay = useMemo(
    () => days.find((day) => day.iso === slot?.iso) ?? null,
    [days, slot?.iso],
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

  const slotsPanel = (
    <div className="agenda-slots">
      <div className="agenda-slots__group">
        <p className="agenda-slots__legend">
          <CalendarDays aria-hidden="true" size={18} />
          {slotsCopy.dayLabel}
        </p>
        <div className="agenda-days" role="group" aria-label={slotsCopy.dayLabel}>
          {days.map((day) => {
            const isSelected = slot?.iso === day.iso;
            return (
              <button
                key={day.iso}
                type="button"
                className={cn("agenda-day", isSelected && "agenda-day--selected")}
                aria-pressed={isSelected}
                onClick={() =>
                  setSlot((current) =>
                    current?.iso === day.iso
                      ? current
                      : {
                          iso: day.iso,
                          time: current?.time ?? TIME_SLOTS[0],
                          longLabel: day.longLabel,
                        },
                  )
                }
              >
                <span className="agenda-day__weekday">{day.weekday}</span>
                <span className="agenda-day__number">{day.dayNumber}</span>
                <span className="agenda-day__month">{day.month}</span>
              </button>
            );
          })}
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
            return (
              <button
                key={time}
                type="button"
                className={cn("agenda-time", isSelected && "agenda-time--selected")}
                aria-pressed={isSelected}
                onClick={() =>
                  setSlot((current) => {
                    const iso = current?.iso ?? days[0]?.iso ?? "";
                    const longLabel = current?.longLabel ?? days[0]?.longLabel ?? "";
                    return { iso, time, longLabel };
                  })
                }
              >
                {time}
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
            {selectedDay ? `${selectedDay.longLabel} · ${slot.time}` : slot.time}
          </span>
          <button type="button" className="agenda-bar__button" onClick={focusForm}>
            {slotsCopy.continueCta}
          </button>
        </div>
      ) : null}
    </div>
  );
}
