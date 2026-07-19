import { Footer } from "@/components/layout/footer";
import { SiteShell } from "@/components/layout/site-shell";
import { AboutSection } from "@/components/sections/about-section";
import { TeamSection } from "@/components/sections/team-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Salik Groups & Co",
  description: "Learn more about Salik Groups & Co, our engineering leadership, project delivery standards, and technical support team across Pakistan.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <SiteShell>
      <AboutSection />
      <TeamSection />
      <Footer />
    </SiteShell>
  );
}
