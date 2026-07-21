import { Reveal } from "@/components/ui/reveal";
import { whyUsItems } from "@/content/why-us";
import Image from "next/image";

export function WhyUsSection() {
  return (
    <section className="sg-section-x pb-16 pt-5 sm:pb-[100px] sm:pt-[30px]">
      <div className="relative mx-auto max-w-[var(--spacing-container)] overflow-hidden rounded-sg-2xl border border-white/10 bg-gradient-to-br from-[rgba(31,55,106,0.55)] to-[rgba(10,20,48,0.2)] p-6 text-[#f3f6fc] sm:p-[clamp(34px,5vw,64px)]">
        <Image
          src="/media/ai/why_us_background.webp"
          alt=""
          fill
          className="object-cover opacity-[0.38]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(10,20,48,0.38)] to-[rgba(10,20,48,0.75)]" />
        <div className="pointer-events-none absolute -right-[10%] -top-[40%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(244,159,28,0.16),transparent_60%)]" />

        <Reveal>
          <div className="relative mb-8 max-w-[620px] sm:mb-[46px]">
            <div className="sg-eyebrow mb-3 sm:mb-4">Why Salik Groups & Co</div>
            <h2 className="font-display text-[clamp(22px,3.2vw,40px)] font-bold leading-[1.12] tracking-[-0.04em]">
              Engineering quality and one-vendor accountability.
            </h2>
          </div>
        </Reveal>

        <div className="relative sg-grid-2 lg:grid-cols-4">
          {whyUsItems.map((item, index) => (
            <Reveal key={item.number} delay={index * 80}>
              <div>
                <div className="mb-2 font-display text-sm font-extrabold text-sg-accent sm:mb-2.5 sm:text-[15px]">
                  {item.number}
                </div>
                <h4 className="font-display text-[15px] font-semibold sm:text-[17px]">{item.title}</h4>
                <p className="mt-1.5 text-[13px] leading-[1.6] text-sg-text-2 sm:mt-2 sm:text-[14.5px]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
