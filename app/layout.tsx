import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { site } from "@/data/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://circlewise.org"),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  keywords: [
    "women health",
    "girl-child health",
    "menstrual health education",
    "period tracker",
    "reproductive health awareness",
    "community outreach",
    "menstrual dignity"
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    locale: "en_US",
    url: "https://circlewise.org",
    siteName: site.name,
    images: [
      {
        url: "/images/circlewise-hero.png",
        width: 1200,
        height: 800,
        alt: "Women and girls learning together in a community health session"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/images/circlewise-hero.png"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: site.name,
    description: site.description,
    slogan: site.tagline,
    url: "https://circlewise.org",
    areaServed: "Underserved communities",
    knowsAbout: [
      "Menstrual health",
      "Girl-child wellness",
      "Reproductive health awareness",
      "Hygiene education",
      "Community outreach"
    ]
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
