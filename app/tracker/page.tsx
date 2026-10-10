import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Period Tracker",
  description: "Open the Ilera Her period tracker app from CircleWise Initiative."
};

export default function TrackerPage() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.08em] text-rose-600">
            Period Tracker
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-plum-900 sm:text-5xl">
            Get to know your cycle with Ilera Her.
          </h1>
          <p className="mt-5 text-base leading-8 text-ink/75 sm:text-lg">
            Visit our period tracker app to start tracking your cycle.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="https://ilera-her-ai.onrender.com">
              Open Period Tracker
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
