"use client";

import { Footer } from "@/components/layout/footer";
import { SiteShell } from "@/components/layout/site-shell";
import { ContactSection } from "@/components/sections/contact-section";
import { FeaturedReviewsSection } from "@/components/sections/featured-reviews-section";
import { FeaturesStripSection } from "@/components/sections/features-strip-section";
import { FieldWorkSection } from "@/components/sections/field-work-section";
import { HeroSection } from "@/components/sections/hero-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { PlatformRatingsSection } from "@/components/sections/platform-ratings-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ServicesSection } from "@/components/sections/services-section";

import { TrustStatsSection } from "@/components/sections/trust-stats-section";
import { WhyUsSection } from "@/components/sections/why-us-section";

export function HomePage() {
  return (
    <SiteShell>
      <main>
        <HeroSection />
        <PlatformRatingsSection />
        <TrustStatsSection />
        <ServicesSection />
        <FeaturesStripSection />
        <WhyUsSection />
        <ProcessSection />
        <ProjectsSection />
        <FieldWorkSection />
        <IndustriesSection />
        <PartnersSection />
        <FeaturedReviewsSection />
        <ContactSection />
        <Footer />
      </main>
    </SiteShell>
  );
}
