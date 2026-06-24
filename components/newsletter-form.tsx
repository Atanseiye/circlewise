"use client";

import * as React from "react";
import { CheckCircle, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function NewsletterForm() {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccess(false);

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    setError("");
    setSuccess(true);
    setEmail("");
  }

  return (
    <form onSubmit={onSubmit} className="mt-6">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <div className="relative flex-1">
          <Mail
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-plum-700/60"
          />
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email address"
            className={cn(
              "focus-ring min-h-12 w-full rounded-full border bg-white px-11 text-sm text-ink shadow-sm",
              error ? "border-rose-500" : "border-rose-100"
            )}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? "newsletter-error" : success ? "newsletter-success" : undefined}
          />
        </div>
        <button
          type="submit"
          className="focus-ring min-h-12 rounded-full bg-plum-900 px-6 text-sm font-bold text-white transition hover:bg-rose-600"
        >
          Join updates
        </button>
      </div>
      {error ? (
        <p id="newsletter-error" className="mt-3 text-sm font-semibold text-rose-700">
          {error}
        </p>
      ) : null}
      {success ? (
        <p
          id="newsletter-success"
          className="mt-3 flex items-center gap-2 text-sm font-semibold text-sage-700"
        >
          <CheckCircle aria-hidden="true" className="h-4 w-4" />
          Thank you. You are on the update list.
        </p>
      ) : null}
    </form>
  );
}
