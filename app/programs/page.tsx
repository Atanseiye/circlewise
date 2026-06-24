import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { programs } from "@/data/content";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore CircleWise programs for school menstrual health education, dignity kit distribution, girl-child wellness, community awareness, and mother-daughter conversations."
};

export default function ProgramsPage() {
  return (
    <>
      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Programs"
            title="Health education and dignity support designed for real communities."
            text="CircleWise programs are practical, age-aware, and built for schools, families, community groups, and underserved women."
            align="center"
          />
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <AnimatedSection
                key={program.id}
                delay={index * 0.04}
                className="rounded-lg border border-rose-100 bg-cream p-5 shadow-sm sm:p-7"
              >
                <div
                  id={program.id}
                  className="grid scroll-mt-28 gap-6 lg:grid-cols-[0.45fr_0.55fr] lg:items-start"
                >
                  <div>
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-rose-700 shadow-sm">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </span>
                    <h2 className="mt-5 text-2xl font-extrabold text-plum-900">
                      {program.title}
                    </h2>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg bg-white p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.08em] text-rose-600">
                        Purpose
                      </p>
                      <p className="mt-3 text-sm leading-7 text-ink/72">{program.purpose}</p>
                    </div>
                    <div className="rounded-lg bg-white p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.08em] text-rose-600">
                        Who it serves
                      </p>
                      <p className="mt-3 text-sm leading-7 text-ink/72">{program.serves}</p>
                    </div>
                    <div className="rounded-lg bg-white p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.08em] text-rose-600">
                        Expected impact
                      </p>
                      <p className="mt-3 text-sm leading-7 text-ink/72">{program.impact}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </Container>
      </section>

      <section className="bg-blush py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold leading-tight text-plum-900">
              Bring CircleWise to your school or community.
            </h2>
            <p className="mt-4 text-base leading-8 text-ink/75">
              Tell us what your community needs, the age group you serve, and the type of
              support you would like to explore.
            </p>
            <div className="mt-7">
              <ButtonLink href="/contact?interest=School%20or%20Community%20Invitation">
                Start a Conversation
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
