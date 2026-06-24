import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PeriodTracker } from "@/components/period-tracker";

export const metadata: Metadata = {
  title: "Period Tracker",
  description:
    "Use CircleWise's privacy-first period tracker to estimate your next period, ovulation day, and fertile window from data stored only in your browser."
};

export default function TrackerPage() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.08em] text-rose-600">
            Privacy-first tool
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-plum-900 sm:text-5xl">
            A simple period tracker for learning your cycle.
          </h1>
          <p className="mt-5 text-base leading-8 text-ink/75 sm:text-lg">
            Enter your last period start date, average cycle length, and period duration
            to see estimated dates. Your information stays on your device.
          </p>
        </div>
        <div className="mt-10">
          <PeriodTracker />
        </div>
      </Container>
    </section>
  );
}
