import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { ServiceIcon } from "@/components/ui/icons";
import { TiltCard } from "@/components/ui/tilt-card";
import { services } from "@/content/services";
import { getServicePath } from "@/lib/services";
import Image from "next/image";
import Link from "next/link";

export function ServicesSection() {
  return (
    <section id="services" className="sg-section-x pb-16 pt-10 sm:pb-[110px] sm:pt-[60px]">
      <div className="mx-auto max-w-[var(--spacing-container)]">
        <Reveal>
          <SectionHeader
            eyebrow="What we deliver"
            title="Ten capabilities. One technical team."
            description="Every system is surveyed, designed, supplied, installed, tested and supported by our own engineers."
            className="mb-8 sm:mb-14"
          />
        </Reveal>

        <div className="sg-grid-cards-wide">
          {services.map((service, index) => {
            const photoCount = service.gallery?.length ?? 0;
            const hasGallery = photoCount > 1;
            const galleryHref = `${getServicePath(service.slug)}#gallery`;

            return (
              <Reveal key={service.id} delay={index * 40} className="h-full">
                <TiltCard className="h-full overflow-hidden rounded-sg-lg border border-sg-border bg-sg-panel shadow-[0_12px_32px_rgba(0,0,0,0.28)]">
                  <div className="relative h-full">
                    <div className="relative">
                      <Link
                        href={hasGallery ? galleryHref : getServicePath(service.slug)}
                        className="relative block h-28 w-full overflow-hidden sm:h-36 md:h-40"
                      >
                        <Image
                          src={service.coverImage || service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 320px"
                        />
                        {hasGallery ? (
                          <span className="absolute right-3 top-3 rounded-sg-pill border border-white/12 bg-[rgba(10,20,48,0.78)] px-2.5 py-1 text-[10px] font-bold text-sg-accent backdrop-blur-sm sm:text-xs">
                            {photoCount} photos
                          </span>
                        ) : null}
                      </Link>
                      <div className="absolute bottom-0 left-3 z-10 grid h-10 w-10 translate-y-1/2 place-items-center rounded-sg-md border border-sg-accent/45 bg-sg-surface text-sg-accent shadow-[0_10px_22px_rgba(0,0,0,0.45)] sm:left-6 sm:h-[54px] sm:w-[54px]">
                        <ServiceIcon icon={service.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                    </div>

                    <Link href={getServicePath(service.slug)} className="block px-3 pb-4 pt-7 sm:px-[26px] sm:pb-7 sm:pt-[38px]">
                      <h3 className="font-display text-sm font-bold leading-snug sm:text-[19px]">
                        {service.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-xs leading-[1.55] text-sg-text-2 sm:mt-2.5 sm:line-clamp-none sm:text-[14.5px] sm:leading-[1.6]">
                        {service.description}
                      </p>
                      <span className="mt-3 inline-flex text-xs font-bold text-sg-accent sm:mt-4 sm:text-sm">
                        {hasGallery ? "View photos or details →" : "View details →"}
                      </span>
                    </Link>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
