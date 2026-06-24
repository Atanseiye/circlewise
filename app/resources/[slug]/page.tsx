import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { resources } from "@/data/content";

type ResourcePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export function generateMetadata({ params }: ResourcePageProps): Metadata {
  const resource = resources.find((item) => item.slug === params.slug);

  if (!resource) {
    return {
      title: "Resource"
    };
  }

  return {
    title: resource.title,
    description: resource.description
  };
}

export default function ResourceDetailPage({ params }: ResourcePageProps) {
  const resource = resources.find((item) => item.slug === params.slug);

  if (!resource) {
    notFound();
  }

  const Icon = resource.icon;

  return (
    <article className="bg-cream py-16 sm:py-20">
      <Container>
        <Link
          href="/resources"
          className="focus-ring inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-4 py-2 text-sm font-bold text-plum-900 transition hover:bg-rose-50"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Back to resources
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.72fr_0.28fr] lg:items-start">
          <div className="rounded-lg border border-rose-100 bg-white p-6 shadow-soft sm:p-10">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-rose-50 text-rose-700">
              <Icon aria-hidden="true" className="h-6 w-6" />
            </span>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.08em] text-rose-600">
              {resource.category}
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-plum-900 sm:text-5xl">
              {resource.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-ink/75">{resource.description}</p>

            <div className="article-content mt-8">
              {resource.article.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  <p>{section.body}</p>
                </section>
              ))}
            </div>
          </div>

          <aside className="rounded-lg border border-rose-100 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-extrabold text-plum-900">Helpful reminders</h2>
            <div className="mt-5 grid gap-3">
              {resource.tips.map((tip) => (
                <p key={tip} className="flex gap-3 text-sm leading-6 text-ink/72">
                  <CheckCircle
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-sage-700"
                  />
                  {tip}
                </p>
              ))}
            </div>
            <div className="mt-7 border-t border-rose-100 pt-5">
              <p className="text-sm leading-6 text-ink/70">
                For severe pain, heavy bleeding, signs of infection, or urgent concerns,
                speak with a qualified health worker.
              </p>
              <div className="mt-5">
                <ButtonLink href="/contact" variant="primary" className="w-full">
                  Ask for Support
                </ButtonLink>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </article>
  );
}
