import { Reveal } from "@/components/ui/reveal";
import Image from "next/image";
import { HeroAnimatedContent } from "./hero-animated-content";
import { HeroGlobe } from "./hero-globe";

export function HeroSection() {
  return (
    <header
      id="top"
      className="relative overflow-hidden bg-sg-hero sg-section-x pb-12 pt-8 text-[#f3f6fc] sm:pb-[90px] sm:pt-12"
    >
      <Image
        src="/media/ai/hero_background.webp"
        alt=""
        fill
        priority
        className="object-cover opacity-[0.14]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,20,48,0.7)] via-[rgba(10,20,48,0.55)] to-sg-hero" />
      <div className="pointer-events-none absolute -right-[5%] -top-[10%] h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle,rgba(244,159,28,0.2),rgba(244,159,28,0)_62%)] animate-[sg-pulse-soft_8s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -bottom-[20%] -left-[10%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(0,165,224,0.14),rgba(0,165,224,0)_64%)] animate-[sg-pulse-soft_10s_ease-in-out_infinite_1s]" />

      <div className="relative mx-auto grid max-w-[var(--spacing-container)] grid-cols-1 items-center gap-8 text-center sm:gap-10 sm:text-left md:grid-cols-[1.05fr_0.95fr]">
        <HeroAnimatedContent />

        <Reveal delay={180}>
          <HeroGlobe />
        </Reveal>
      </div>
    </header>
  );
}
