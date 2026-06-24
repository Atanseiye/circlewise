import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { navItems, site } from "@/data/content";
import { Container } from "@/components/container";

export function Footer() {
  return (
    <footer className="border-t border-rose-100 bg-plum-900 text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.3fr_0.8fr_1fr]">
        <div>
          <p className="text-xl font-extrabold">{site.name}</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/75">{site.tagline}</p>
          <div className="mt-6 flex gap-3">
            {[
              { label: "Instagram", icon: Instagram },
              { label: "LinkedIn", icon: Linkedin },
              { label: "WhatsApp", icon: MessageCircle }
            ].map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href="#"
                  aria-label={item.label}
                  className="focus-ring grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-plum-900"
                >
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-rose-200">
            Quick links
          </p>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-md py-1 text-sm text-white/75 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-rose-200">
            Contact
          </p>
          <div className="mt-4 grid gap-3 text-sm text-white/75">
            <p className="flex gap-3">
              <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-rose-200" />
              hello@circlewise.org
            </p>
            <p className="flex gap-3">
              <Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-rose-200" />
              WhatsApp: +234 000 000 0000
            </p>
            <p className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-rose-200" />
              Community outreach office, location placeholder
            </p>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10 py-5">
        <Container className="flex flex-col gap-2 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CircleWise Initiative. All rights reserved.</p>
          <p>Privacy-first education. Community-rooted care.</p>
        </Container>
      </div>
    </footer>
  );
}
