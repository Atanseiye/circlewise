import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { values } from "@/data/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about CircleWise Initiative's mission, vision, story, and values for menstrual dignity, preventive education, and community care."
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <AnimatedSection className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.08em] text-rose-600">
              About CircleWise
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-plum-900 sm:text-5xl">
              We exist so girls and women can receive health knowledge with dignity,
              privacy, and care.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/75">
              CircleWise Initiative supports underserved communities with menstrual
              education, girl-child wellness, hygiene support, reproductive health
              awareness, nutrition guidance, and safe access to reliable information.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <AnimatedSection className="rounded-lg border border-rose-100 bg-cream p-6 shadow-sm">
              <h2 className="text-2xl font-extrabold text-plum-900">Mission</h2>
              <p className="mt-4 leading-8 text-ink/75">
                To provide girls and women with clear health education, practical period
                support, and community-based care that protects dignity and improves daily
                wellbeing.
              </p>
            </AnimatedSection>
            <AnimatedSection
              className="rounded-lg border border-rose-100 bg-plum-900 p-6 text-white shadow-soft"
              delay={0.06}
            >
              <h2 className="text-2xl font-extrabold">Vision</h2>
              <p className="mt-4 leading-8 text-white/75">
                A future where every girl understands her body, manages her period safely,
                accesses trusted information, and grows into womanhood without shame.
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="bg-blush py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeader
              eyebrow="Why it matters"
              title="Health education can change the rhythm of a girl's life."
              text="Many girls miss school, hide symptoms, use unsafe menstrual materials, or rely on myths because trustworthy information and supplies are not easy to reach."
            />
            <div className="grid gap-4">
              {[
                "School girls need age-appropriate lessons before confusion turns into fear.",
                "Mothers and guardians need tools for gentle, honest conversations.",
                "Communities need preventive education that respects culture while protecting health.",
                "Women in underserved areas need care pathways that feel safe, private, and practical."
              ].map((item) => (
                <AnimatedSection
                  key={item}
                  className="rounded-lg border border-rose-100 bg-white p-5 text-base font-semibold leading-7 text-ink/78 shadow-sm"
                >
                  {item}
                </AnimatedSection>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 rounded-lg border border-rose-100 bg-cream p-6 shadow-soft lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.08em] text-rose-600">
                Founder story
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-plum-900">
                A placeholder for the CircleWise beginning.
              </h2>
            </div>
            <div className="text-base leading-8 text-ink/75">
              <p>
                CircleWise began with a simple conviction: no girl should feel alone,
                ashamed, or uninformed about her body. This section can later include the
                founder&apos;s personal story, the communities that inspired the work, and
                the partners helping the initiative grow.
              </p>
              <div className="mt-6">
                <ButtonLink href="/contact" variant="primary">
                  Share Your Community Need
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Values"
            title="The standards behind every session, tool, and outreach."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <AnimatedSection
                  key={value.title}
                  delay={index * 0.04}
                  className="rounded-lg border border-rose-100 bg-white p-5 shadow-sm"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-plum-50 text-plum-700">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold text-plum-900">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/70">{value.text}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
