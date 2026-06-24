"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeartPulse, Menu, X } from "lucide-react";
import { navItems, site } from "@/data/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rose-100/80 bg-cream/92 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="focus-ring flex items-center gap-3 rounded-full"
          onClick={() => setIsOpen(false)}
        >
          <span className="grid h-11 w-11 place-items-center rounded-full bg-plum-900 text-white shadow-soft">
            <HeartPulse aria-hidden="true" className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-extrabold text-plum-900 sm:text-base">
              {site.name}
            </span>
            <span className="hidden text-xs font-semibold text-rose-600 sm:block">
              Health, dignity, knowledge
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring rounded-full px-4 py-2 text-sm font-bold text-ink/75 transition hover:bg-white hover:text-plum-900",
                  active && "bg-white text-plum-900 shadow-sm"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-rose-200 bg-white text-plum-900 shadow-sm lg:hidden"
        >
          {isOpen ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-rose-100 bg-white lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:px-6">
            {navItems.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "focus-ring rounded-lg px-4 py-3 text-sm font-bold text-ink/75",
                    active && "bg-rose-50 text-plum-900"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
