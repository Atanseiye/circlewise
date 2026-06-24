import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <section className="bg-cream py-20">
      <Container className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.08em] text-rose-600">
          Page not found
        </p>
        <h1 className="mt-4 text-4xl font-extrabold text-plum-900">This page is not available.</h1>
        <p className="mx-auto mt-4 max-w-xl leading-8 text-ink/72">
          The link may have changed, or the resource may no longer be available.
        </p>
        <Link
          href="/"
          className="focus-ring mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-rose-600 px-5 text-sm font-bold text-white transition hover:bg-plum-800"
        >
          Return home
        </Link>
      </Container>
    </section>
  );
}
