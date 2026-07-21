import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { SurfaceCard } from "@/components/ui/surface-card";
import { processSteps } from "@/content/process";

export function ProcessSection() {
  return (
    <section className="sg-section-x pb-16 pt-5 sm:pb-[100px]">
      <div className="mx-auto max-w-[var(--spacing-container)]">
        <Reveal>
          <SectionHeader
            eyebrow="How we work"
            title="A disciplined path from survey to support."
            className="mb-8 max-w-[620px] sm:mb-14"
            align="left"
          />
        </Reveal>

        <div className="sg-grid-2 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 100} className="h-full">
              <SurfaceCard className="flex h-full flex-col">
                <div className="font-display text-[34px] font-extrabold leading-none text-sg-accent sm:text-[46px]">
                  {step.step}
                </div>
                <h4 className="mt-2.5 font-display text-base font-bold sm:mt-3.5 sm:text-lg">
                  {step.title}
                </h4>
                <p className="mt-2 text-[13px] leading-[1.6] text-sg-text-2 sm:text-[14.5px]">
                  {step.description}
                </p>
              </SurfaceCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
