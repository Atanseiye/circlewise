"use client";

import * as React from "react";
import { Calendar, CheckCircle, RotateCcw, ShieldCheck } from "lucide-react";
import { addDays, cn, formatDisplayDate, parseLocalDate } from "@/lib/utils";

const STORAGE_KEY = "circlewise-period-tracker";

type TrackerValues = {
  lastPeriodStart: string;
  cycleLength: number;
  periodDuration: number;
};

const defaultValues: TrackerValues = {
  lastPeriodStart: "",
  cycleLength: 28,
  periodDuration: 5
};

export function PeriodTracker() {
  const [values, setValues] = React.useState<TrackerValues>(defaultValues);
  const [hydrated, setHydrated] = React.useState(false);
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);

    if (stored) {
      try {
        setValues({ ...defaultValues, ...JSON.parse(stored) });
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }

    setHydrated(true);
  }, []);

  React.useEffect(() => {
    if (hydrated) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
    }
  }, [hydrated, values]);

  const errors = React.useMemo(() => {
    const nextErrors: string[] = [];
    const startDate = parseLocalDate(values.lastPeriodStart);

    if (!values.lastPeriodStart || !startDate) {
      nextErrors.push("Enter the first day of your last period.");
    }

    if (startDate && startDate > new Date()) {
      nextErrors.push("The last period date cannot be in the future.");
    }

    if (values.cycleLength < 21 || values.cycleLength > 45) {
      nextErrors.push("Average cycle length should be between 21 and 45 days.");
    }

    if (values.periodDuration < 2 || values.periodDuration > 10) {
      nextErrors.push("Period duration should be between 2 and 10 days.");
    }

    return nextErrors;
  }, [values]);

  const estimates = React.useMemo(() => {
    const startDate = parseLocalDate(values.lastPeriodStart);

    if (!startDate || errors.length) {
      return null;
    }

    const nextPeriod = addDays(startDate, values.cycleLength);
    const periodEnd = addDays(nextPeriod, values.periodDuration - 1);
    const ovulation = addDays(nextPeriod, -14);
    const fertileStart = addDays(ovulation, -5);
    const fertileEnd = addDays(ovulation, 1);

    return { nextPeriod, periodEnd, ovulation, fertileStart, fertileEnd };
  }, [values, errors.length]);

  function updateField(field: keyof TrackerValues, value: string) {
    setMessage("");
    setValues((current) => ({
      ...current,
      [field]: field === "lastPeriodStart" ? value : Number(value)
    }));
  }

  function clearData() {
    window.localStorage.removeItem(STORAGE_KEY);
    setValues(defaultValues);
    setMessage("Saved tracker data was cleared from this browser.");
  }

  const fieldClass =
    "focus-ring mt-2 min-h-12 w-full rounded-lg border border-rose-100 bg-white px-4 text-sm text-ink shadow-sm";

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-lg border border-rose-100 bg-white p-5 shadow-soft sm:p-7">
        <div className="flex items-start gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-rose-100 text-rose-700">
            <Calendar aria-hidden="true" className="h-5 w-5" />
          </span>
          <div>
            <h2 className="text-2xl font-extrabold text-plum-900">Track your cycle</h2>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              Your entries are stored only in this browser using localStorage.
            </p>
          </div>
        </div>

        <div className="mt-7 grid gap-5">
          <div>
            <label htmlFor="lastPeriodStart" className="text-sm font-bold text-plum-900">
              Last period start date
            </label>
            <input
              id="lastPeriodStart"
              type="date"
              value={values.lastPeriodStart}
              onChange={(event) => updateField("lastPeriodStart", event.target.value)}
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="cycleLength" className="text-sm font-bold text-plum-900">
              Average cycle length
            </label>
            <div className="mt-2 flex items-center gap-3">
              <input
                id="cycleLength"
                type="range"
                min="21"
                max="45"
                value={values.cycleLength}
                onChange={(event) => updateField("cycleLength", event.target.value)}
                className="w-full accent-rose-600"
              />
              <input
                aria-label="Average cycle length in days"
                type="number"
                min="21"
                max="45"
                value={values.cycleLength}
                onChange={(event) => updateField("cycleLength", event.target.value)}
                className="focus-ring h-12 w-20 rounded-lg border border-rose-100 bg-white text-center text-sm font-bold text-plum-900 shadow-sm"
              />
            </div>
            <p className="mt-2 text-xs font-semibold text-ink/55">Days</p>
          </div>

          <div>
            <label htmlFor="periodDuration" className="text-sm font-bold text-plum-900">
              Period duration
            </label>
            <div className="mt-2 flex items-center gap-3">
              <input
                id="periodDuration"
                type="range"
                min="2"
                max="10"
                value={values.periodDuration}
                onChange={(event) => updateField("periodDuration", event.target.value)}
                className="w-full accent-plum-700"
              />
              <input
                aria-label="Period duration in days"
                type="number"
                min="2"
                max="10"
                value={values.periodDuration}
                onChange={(event) => updateField("periodDuration", event.target.value)}
                className="focus-ring h-12 w-20 rounded-lg border border-rose-100 bg-white text-center text-sm font-bold text-plum-900 shadow-sm"
              />
            </div>
            <p className="mt-2 text-xs font-semibold text-ink/55">Days</p>
          </div>
        </div>

        <button
          type="button"
          onClick={clearData}
          className="focus-ring mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 text-sm font-bold text-plum-900 transition hover:bg-white"
        >
          <RotateCcw aria-hidden="true" className="h-4 w-4" />
          Clear saved data
        </button>
        {message ? <p className="mt-3 text-sm font-semibold text-sage-700">{message}</p> : null}
      </div>

      <div className="rounded-lg bg-plum-900 p-5 text-white shadow-soft sm:p-7">
        <div className="flex items-start gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-white/[0.12] text-rose-100">
            <ShieldCheck aria-hidden="true" className="h-5 w-5" />
          </span>
          <div>
            <h2 className="text-2xl font-extrabold">Estimated dates</h2>
            <p className="mt-2 text-sm leading-6 text-white/70">
              This tool provides estimates only and should not replace medical advice.
            </p>
          </div>
        </div>

        {errors.length ? (
          <div className="mt-7 rounded-lg border border-white/[0.12] bg-white/[0.08] p-4">
            <p className="font-bold text-rose-100">Add your cycle details to see estimates.</p>
            <ul className="mt-3 grid gap-2 text-sm text-white/75">
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {estimates ? (
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {[
              {
                label: "Next period",
                value: formatDisplayDate(estimates.nextPeriod),
                note: `Estimated through ${formatDisplayDate(estimates.periodEnd)}.`
              },
              {
                label: "Ovulation day",
                value: formatDisplayDate(estimates.ovulation),
                note: "Timing can shift from cycle to cycle."
              },
              {
                label: "Fertile window",
                value: `${formatDisplayDate(estimates.fertileStart)} - ${formatDisplayDate(estimates.fertileEnd)}`,
                note: "Use estimates only as a learning guide."
              },
              {
                label: "Health note",
                value: "Listen to changes",
                note:
                  "Seek care for very heavy bleeding, severe pain, unusual discharge, or sudden cycle changes."
              }
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-white/[0.12] bg-white/[0.08] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-rose-100">
                  {item.label}
                </p>
                <p className="mt-2 text-xl font-extrabold leading-tight">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-white/70">{item.note}</p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-6 rounded-lg bg-cream p-4 text-plum-900">
          <p className="flex items-start gap-2 text-sm font-bold">
            <CheckCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-sage-700" />
            Privacy-first note
          </p>
          <p className="mt-2 text-sm leading-6 text-ink/75">
            CircleWise does not receive or store this tracker information. Clearing your
            browser data may also clear these saved entries.
          </p>
        </div>
      </div>
    </div>
  );
}
