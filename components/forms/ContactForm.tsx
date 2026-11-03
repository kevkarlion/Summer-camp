"use client";

import { CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

type ContactFormCopy = {
  errors: {
    name: string;
    email: string;
    message: string;
  };
  success: {
    title: string;
    text: string;
    button: string;
  };
  fields: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phoneOptional: string;
    interest: string;
    interestPlaceholder: string;
    interestOptions: string[];
    message: string;
    messagePlaceholder: string;
    messageHelp: string;
  };
  submit: {
    consent: string;
    sending: string;
    button: string;
  };
};

const interestValues = [
  "fechas-y-disponibilidad",
  "programa-ingles",
  "actividades",
  "alojamiento-y-transporte",
  "seguridad-y-guia",
  "otro",
] as const;

const inputClassName =
  "contacto-field min-h-12 w-full rounded-[0.2rem] border border-[color-mix(in_srgb,var(--home-ink)_18%,transparent)] bg-[var(--home-paper)] px-4 py-3 text-base text-[var(--home-ink)] placeholder:text-[color-mix(in_srgb,var(--home-muted)_78%,transparent)] transition-colors duration-200 focus:border-[var(--home-lake)] focus:outline-none focus:ring-2 focus:ring-[color-mix(in_srgb,var(--home-lake)_28%,transparent)] motion-reduce:transition-none";

const labelClassName = "block text-[0.95rem] font-bold leading-6 text-[var(--home-ink)]";

const hintClassName = "mt-2 text-[0.95rem] leading-6 text-[var(--home-muted)]";

const errorClassName = "mt-2 text-[0.95rem] leading-6 text-[#a3261f]";

export function ContactForm({ copy }: { copy: ContactFormCopy }) {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const nextErrors: FieldErrors = {};

    if (name.length < 2) {
      nextErrors.name = copy.errors.name;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      nextErrors.email = copy.errors.email;
    }
    if (message.length < 10) {
      nextErrors.message = copy.errors.message;
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      form.reset();
    }, 650);
  };

  if (isSubmitted) {
    return (
      <div className="contacto-form flex min-h-[32rem] flex-col items-center justify-center p-8 text-center" role="status" aria-live="polite">
        <span className="grid size-16 place-items-center rounded-full bg-[color-mix(in_srgb,var(--home-lake)_14%,transparent)] text-[var(--home-lake)]">
          <CheckCircle2 aria-hidden="true" size={30} />
        </span>
        <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-[var(--home-ink)]">
          {copy.success.title}
        </h2>
        <p className="mt-4 max-w-md leading-7 text-[var(--home-muted)]">{copy.success.text}</p>
        <Button
          type="button"
          variant="outline"
          className="mt-8"
          onClick={() => setIsSubmitted(false)}
        >
          {copy.success.button}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="contacto-form p-6 sm:p-9 lg:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="contact-name" className={labelClassName}>
            {copy.fields.name} <span aria-hidden="true" className="text-[var(--home-lake)]">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={cn(inputClassName, "mt-2", errors.name && "border-[#a3261f]")}
            placeholder={copy.fields.namePlaceholder}
          />
          {errors.name ? <p id="contact-name-error" className={errorClassName}>{errors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClassName}>
            {copy.fields.email} <span aria-hidden="true" className="text-[var(--home-lake)]">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={cn(inputClassName, "mt-2", errors.email && "border-[#a3261f]")}
            placeholder={copy.fields.emailPlaceholder}
          />
          {errors.email ? <p id="contact-email-error" className={errorClassName}>{errors.email}</p> : null}
        </div>

        <div>
          <label htmlFor="contact-phone" className={labelClassName}>
            {copy.fields.phone}{" "}
            <span className="font-normal text-[var(--home-muted)]">{copy.fields.phoneOptional}</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className={cn(inputClassName, "mt-2")}
            placeholder="+54 9 ..."
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-interest" className={labelClassName}>
            {copy.fields.interest}
          </label>
          <select
            id="contact-interest"
            name="interest"
            className={cn(inputClassName, "mt-2")}
            defaultValue=""
          >
            <option value="" disabled>{copy.fields.interestPlaceholder}</option>
            {copy.fields.interestOptions.map((option, index) => {
              const value = interestValues[index] ?? "otro";

              return (
                <option key={value} value={value}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className={labelClassName}>
            {copy.fields.message} <span aria-hidden="true" className="text-[var(--home-lake)]">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : "contact-message-help"}
            className={cn(inputClassName, "mt-2 min-h-36 resize-y", errors.message && "border-[#a3261f]")}
            placeholder={copy.fields.messagePlaceholder}
          />
          {errors.message ? (
            <p id="contact-message-error" className={errorClassName}>{errors.message}</p>
          ) : (
            <p id="contact-message-help" className={hintClassName}>{copy.fields.messageHelp}</p>
          )}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-[0.95rem] leading-6 text-[var(--home-muted)]">
          {copy.submit.consent}
        </p>
        <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? (
            <>
              <LoaderCircle aria-hidden="true" size={18} className="animate-spin" />
              {copy.submit.sending}
            </>
          ) : (
            <>
              <Send aria-hidden="true" size={18} />
              {copy.submit.button}
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
