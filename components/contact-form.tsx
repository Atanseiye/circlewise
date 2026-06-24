"use client";

import * as React from "react";
import { CheckCircle, Send } from "lucide-react";
import { cn } from "@/lib/utils";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  interest: "",
  message: ""
};

export function ContactForm() {
  const [values, setValues] = React.useState<FormValues>(initialValues);
  const [errors, setErrors] = React.useState<Partial<FormValues>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const interest = params.get("interest");

    if (interest) {
      setValues((current) => ({ ...current, interest }));
    }
  }, []);

  function updateField(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
    setSuccess(false);
  }

  function validate() {
    const nextErrors: Partial<FormValues> = {};

    if (values.name.trim().length < 2) {
      nextErrors.name = "Enter your name.";
    }

    if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (values.phone.trim() && values.phone.trim().length < 7) {
      nextErrors.phone = "Enter a valid phone number or leave this blank.";
    }

    if (!values.interest) {
      nextErrors.interest = "Choose an interest type.";
    }

    if (values.message.trim().length < 10) {
      nextErrors.message = "Share a little more detail.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setValues(initialValues);
    }, 650);
  }

  const fieldClass =
    "focus-ring min-h-12 w-full rounded-lg border border-rose-100 bg-white px-4 text-sm text-ink shadow-sm placeholder:text-ink/45";

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-lg border border-rose-100 bg-white p-5 shadow-soft sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-bold text-plum-900">
            Name
          </label>
          <input
            id="name"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            className={cn(fieldClass, "mt-2", errors.name && "border-rose-500")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p id="name-error" className="mt-2 text-sm font-semibold text-rose-700">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-bold text-plum-900">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={cn(fieldClass, "mt-2", errors.email && "border-rose-500")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="mt-2 text-sm font-semibold text-rose-700">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-bold text-plum-900">
            Phone
          </label>
          <input
            id="phone"
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="+234 000 000 0000"
            className={cn(fieldClass, "mt-2", errors.phone && "border-rose-500")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone ? (
            <p id="phone-error" className="mt-2 text-sm font-semibold text-rose-700">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="interest" className="text-sm font-bold text-plum-900">
            Interest type
          </label>
          <select
            id="interest"
            value={values.interest}
            onChange={(event) => updateField("interest", event.target.value)}
            className={cn(fieldClass, "mt-2", errors.interest && "border-rose-500")}
            aria-invalid={Boolean(errors.interest)}
            aria-describedby={errors.interest ? "interest-error" : undefined}
          >
            <option value="">Select one</option>
            <option>Volunteer</option>
            <option>Partnership</option>
            <option>Sponsorship</option>
            <option>School or Community Invitation</option>
            <option>Health Education Question</option>
            <option>Other</option>
          </select>
          {errors.interest ? (
            <p id="interest-error" className="mt-2 text-sm font-semibold text-rose-700">
              {errors.interest}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-bold text-plum-900">
          Message
        </label>
        <textarea
          id="message"
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          rows={6}
          className={cn(fieldClass, "mt-2 py-3", errors.message && "border-rose-500")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm font-semibold text-rose-700">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="focus-ring mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-rose-600 px-6 text-sm font-bold text-white transition hover:bg-plum-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Send aria-hidden="true" className="h-4 w-4" />
        {isSubmitting ? "Sending..." : "Send message"}
      </button>

      {success ? (
        <p className="mt-4 flex items-center gap-2 rounded-lg bg-sage-50 px-4 py-3 text-sm font-semibold text-sage-700">
          <CheckCircle aria-hidden="true" className="h-4 w-4" />
          Thank you. Your message has been prepared successfully.
        </p>
      ) : null}
    </form>
  );
}
