import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { resources } from "@/data/content";

export const metadata: Metadata = {
  title: "Health Education Resources",
  description:
    "Simple CircleWise health education resources on menstrual health, puberty, hygiene, fertility awareness, nutrition, mental wellness, reproductive health, and myths."
};

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Health Education"
            title="Simple, respectful health guides for girls, women, and community helpers."
            text="Each resource uses clear language and practical steps. These guides support learning, not medical diagnosis."
            align="center"
          />
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource, index) => {
              const Icon = resource.icon;

              return (
                <AnimatedSection key={resource.slug} delay={index * 0.04}>
                  <Link
                    href={`/resources/${resource.slug}`}
                    className="focus-ring group block h-full rounded-lg border border-rose-100 bg-cream p-5 shadow-sm transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-soft"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-rose-700 shadow-sm">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.08em] text-rose-600">
                      {resource.category}
                    </p>
                    <h2 className="mt-2 text-xl font-extrabold text-plum-900">
                      {resource.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-ink/72">
                      {resource.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-rose-700">
                      Read guide
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
    </>
  );
}
