import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { NewsletterForm } from "@/components/newsletter-form";
import { SectionHeader } from "@/components/section-header";
import { impactHighlights, programPreviews, site } from "@/data/content";

export const metadata: Metadata = {
  title: "Home",
  description:
    "CircleWise Initiative provides menstrual education, period tracking tools, health resources, and community-based care for underserved women and girls."
};

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-plum-900 text-white">
        <Image
          src="/images/circlewise-hero.png"
          alt="Women and adolescent girls learning together in a community health education setting"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-plum-900/72" />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-plum-900 via-plum-900/82 to-plum-900/25" />
        <Container className="relative flex min-h-[calc(100svh-5rem)] items-center py-20 sm:py-24">
          <AnimatedSection className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.08em] text-rose-100">
              {site.name}
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Helping girls and women understand their bodies, protect their health,
              and live with dignity.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              CircleWise provides menstrual education, privacy-first period tracking,
              practical health resources, and community-based care for underserved women
              and girls.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/tracker" variant="light">
                Track Your Period
              </ButtonLink>
              <ButtonLink
                href="/resources"
                variant="secondary"
                className="border-white/35 bg-white/[0.12] text-white hover:bg-white hover:text-plum-900"
              >
                Learn About Your Health
              </ButtonLink>
              <ButtonLink
                href="/get-involved"
                variant="secondary"
                className="border-white/35 bg-transparent text-white hover:bg-white hover:text-plum-900"
              >
                Support the Mission
              </ButtonLink>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Our focus"
            title="Reliable care and education where girls need it most."
            text="We combine body literacy, practical hygiene support, and community trust so girls and women can make informed choices without fear or shame."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impactHighlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <AnimatedSection
                  key={item.title}
                  delay={index * 0.05}
                  className="rounded-lg border border-rose-100 bg-white p-5 shadow-sm"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-rose-50 text-rose-700">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold text-plum-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/70">{item.text}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <SectionHeader
              eyebrow="Programs"
              title="Practical support for schools, homes, and communities."
              text="CircleWise programs are designed to be clear, respectful, and easy to bring into local spaces."
            />
            <div className="flex lg:justify-end">
              <ButtonLink href="/programs" variant="secondary">
                Explore Programs
              </ButtonLink>
            </div>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {programPreviews.map((program, index) => (
              <AnimatedSection key={program.title} delay={index * 0.06}>
                <Link
                  href={program.href}
                  className="focus-ring group block h-full rounded-lg border border-rose-100 bg-cream p-6 shadow-sm transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-soft"
                >
                  <h3 className="text-xl font-extrabold text-plum-900">{program.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/72">{program.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-rose-700">
                    Learn more
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-blush py-16 sm:py-20">
        <Container>
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <Quote aria-hidden="true" className="mx-auto h-10 w-10 text-rose-600" />
            <blockquote className="mt-6 text-2xl font-extrabold leading-10 text-plum-900 sm:text-3xl">
              “When girls understand their bodies, fear becomes knowledge, shame becomes
              dignity, and health becomes something they can protect.”
            </blockquote>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.08em] text-rose-700">
              CircleWise community promise
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 rounded-lg border border-rose-100 bg-cream p-6 shadow-soft md:grid-cols-[1fr_0.9fr] md:p-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.08em] text-rose-600">
                Stay connected
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-plum-900">
                Get outreach updates, health notes, and ways to help.
              </h2>
              <p className="mt-4 text-base leading-8 text-ink/72">
                Join the CircleWise update list for practical education and community
                opportunities. No tracker data is collected through this form.
              </p>
            </div>
            <div className="md:self-center">
              <NewsletterForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
