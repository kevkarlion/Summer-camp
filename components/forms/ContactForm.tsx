"use client";

import { CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const inputClassName =
  "min-h-12 w-full rounded-2xl border border-subtle bg-overlay-soft px-4 py-3 text-base text-main placeholder:text-muted/70 transition-[border-color,opacity] duration-300 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/25 motion-reduce:transition-none";

export function ContactForm() {
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
      nextErrors.name = "Ingresá el nombre de la familia.";
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      nextErrors.email = "Ingresá un correo electrónico válido.";
    }
    if (message.length < 10) {
      nextErrors.message = "Contanos brevemente qué información necesitás.";
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
      <div
        className="flex min-h-[32rem] flex-col items-center justify-center rounded-[2rem] border border-primary/30 bg-primary/8 p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <span className="grid size-16 place-items-center rounded-full bg-primary/15 text-primary-accent">
          <CheckCircle2 aria-hidden="true" size={30} />
        </span>
        <h2 className="mt-6 text-3xl font-semibold tracking-tight text-main">Mensaje preparado</h2>
        <p className="mt-4 max-w-md leading-7 text-muted">
          La interfaz quedó completada. El envío se habilitará cuando se conecte el canal real de contacto.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-8"
          onClick={() => setIsSubmitted(false)}
        >
          Escribir otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-[2rem] border border-subtle bg-card/90 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.28)] sm:p-9 lg:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="contact-name" className="text-sm font-semibold text-main">
            Nombre de la familia <span aria-hidden="true" className="text-primary-accent">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={cn(inputClassName, "mt-2", errors.name && "border-red-400/70")}
            placeholder="Cómo podemos llamarte"
          />
          {errors.name ? <p id="contact-name-error" className="mt-2 text-sm text-red-300">{errors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="contact-email" className="text-sm font-semibold text-main">
            Correo electrónico <span aria-hidden="true" className="text-primary-accent">*</span>
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
            className={cn(inputClassName, "mt-2", errors.email && "border-red-400/70")}
            placeholder="nombre@ejemplo.com"
          />
          {errors.email ? <p id="contact-email-error" className="mt-2 text-sm text-red-300">{errors.email}</p> : null}
        </div>

        <div>
          <label htmlFor="contact-phone" className="text-sm font-semibold text-main">
            Teléfono <span className="font-normal text-muted">(opcional)</span>
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
          <label htmlFor="contact-interest" className="text-sm font-semibold text-main">
            ¿Qué te gustaría conocer?
          </label>
          <select
            id="contact-interest"
            name="interest"
            className={cn(inputClassName, "mt-2")}
            defaultValue=""
          >
            <option value="" disabled>Seleccioná una opción</option>
            <option value="fechas-y-disponibilidad">Fechas y disponibilidad</option>
            <option value="programa-ingles">Programa de inglés</option>
            <option value="actividades">Actividades y Experiencias</option>
            <option value="alojamiento-y-transporte">Alojamiento y transporte</option>
            <option value="seguridad-y-guia">Seguridad y guía para familias</option>
            <option value="otro">Otro consulta</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="text-sm font-semibold text-main">
            Mensaje <span aria-hidden="true" className="text-primary-accent">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : "contact-message-help"}
            className={cn(inputClassName, "mt-2 min-h-36 resize-y", errors.message && "border-red-400/70")}
            placeholder="Contanos qué información necesitás"
          />
          {errors.message ? (
            <p id="contact-message-error" className="mt-2 text-sm text-red-300">{errors.message}</p>
          ) : (
            <p id="contact-message-help" className="mt-2 text-sm text-muted">Los detalles de precio, cobertura y logística se confirman antes de la inscripción.</p>
          )}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-xs leading-5 text-muted">
          Al enviar, aceptás que la organización use estos datos únicamente para responder tu consulta.
        </p>
        <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? (
            <>
              <LoaderCircle aria-hidden="true" className="animate-spin" size={18} /> Preparando mensaje
            </>
          ) : (
            <>
              Enviar consulta <Send aria-hidden="true" size={17} />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
