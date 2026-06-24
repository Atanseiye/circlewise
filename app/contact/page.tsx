import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact CircleWise Initiative to volunteer, partner, sponsor, invite the team to a school or community, or ask a health education question."
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Contact"
            title="Tell us how CircleWise can support your school, community, or mission."
            text="Use the form to reach out about volunteering, partnerships, sponsorship, school visits, community outreach, or health education support."
            align="center"
          />
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.64fr_0.36fr] lg:items-start">
            <ContactForm />
            <aside className="grid gap-4">
              {[
                {
                  title: "Email",
                  text: "hello@circlewise.org",
                  icon: Mail
                },
                {
                  title: "WhatsApp",
                  text: "+234 000 000 0000",
                  icon: MessageCircle
                },
                {
                  title: "Phone",
                  text: "+234 000 000 0000",
                  icon: Phone
                },
                {
                  title: "Location",
                  text: "Community outreach office, location placeholder",
                  icon: MapPin
                }
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-lg border border-rose-100 bg-cream p-5 shadow-sm"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-rose-700 shadow-sm">
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <h2 className="mt-4 text-lg font-extrabold text-plum-900">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-ink/72">{item.text}</p>
                  </div>
                );
              })}
              <div className="rounded-lg bg-plum-900 p-5 text-white shadow-soft">
                <h2 className="text-lg font-extrabold">Response note</h2>
                <p className="mt-3 text-sm leading-7 text-white/75">
                  This demo form simulates submission and includes an API route placeholder.
                  Connect it to email, a CRM, or a database when the backend is ready.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
