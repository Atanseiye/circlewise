import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition duration-200",
        variant === "primary" &&
          "bg-rose-600 text-white shadow-soft hover:bg-plum-800",
        variant === "secondary" &&
          "border border-plum-200 bg-white text-plum-800 hover:border-rose-300 hover:bg-rose-50",
        variant === "light" &&
          "bg-white text-plum-900 shadow-soft hover:bg-rose-50",
        className
      )}
    >
      <span>{children}</span>
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}
