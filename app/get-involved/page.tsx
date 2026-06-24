import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { involvementOptions } from "@/data/content";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, partner, sponsor a girl, or invite CircleWise Initiative to your school or community."
};

export default function GetInvolvedPage() {
  return (
    <>
      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Get Involved"
            title="Help more girls and women receive knowledge, dignity, and care."
            text="There are meaningful ways for volunteers, donors, schools, health workers, and partners to support CircleWise outreach."
            align="center"
          />
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {involvementOptions.map((item, index) => {
              const Icon = item.icon;

              return (
                <AnimatedSection key={item.title} delay={index * 0.05}>
                  <Link
                    href={item.href}
                    className="focus-ring group flex h-full flex-col rounded-lg border border-rose-100 bg-cream p-5 shadow-sm transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-soft"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-rose-700 shadow-sm">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <h2 className="mt-5 text-xl font-extrabold text-plum-900">{item.title}</h2>
                    <p className="mt-3 flex-1 text-sm leading-7 text-ink/72">{item.text}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-rose-700">
                      {item.action}
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 transition group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-blush py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeader
              eyebrow="Who can help"
              title="Different supporters can strengthen different parts of the mission."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Volunteers can help with outreach logistics, education sessions, mentoring, and kit packing.",
                "Donors can fund dignity kits, school materials, transport, and community sessions.",
                "Schools can host safe menstrual health and girl-child wellness programs.",
                "Health workers can support referrals, preventive education, and community trust.",
                "Partners can help scale programs through shared networks, supplies, venues, or sponsorship.",
                "Community leaders can reduce stigma and make safe learning spaces possible."
              ].map((item) => (
                <AnimatedSection
                  key={item}
                  className="flex gap-3 rounded-lg border border-rose-100 bg-white p-4 text-sm leading-7 text-ink/75 shadow-sm"
                >
                  <CheckCircle
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-sage-700"
                  />
                  {item}
                </AnimatedSection>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
