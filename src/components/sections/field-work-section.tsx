import { fieldWorkShowcases } from "@/content/media";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";
import { getGalleryPath } from "@/lib/galleries";
import Image from "next/image";
import Link from "next/link";

const layoutClasses = [
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-1 sm:row-span-2",
  "sm:col-span-2 sm:row-span-1",
];

export function FieldWorkSection() {
  return (
    <section id="field-work" className="sg-section-x py-16 sm:py-[100px]">
      <div className="mx-auto max-w-[var(--spacing-container)]">
        <Reveal>
          <div className="mb-10 max-w-[720px] sm:mb-14">
            <div className="sg-eyebrow mb-3 sm:mb-4">Work in the field</div>
            <h2 className="sg-heading text-[clamp(24px,3.4vw,42px)] leading-[1.1]">
              Real installations across Pakistan.
            </h2>
            <p className="mt-4 text-sm leading-[1.7] text-sg-text-dim sm:text-[16px]">
              Solar arrays, inverter rooms, generators, perimeter systems and specialised
              security hardware — captured on live project sites.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:auto-rows-[180px] lg:auto-rows-[220px]">
          {fieldWorkShowcases.map((showcase, index) => {
            const hasGallery = showcase.images.length > 1;

            const cardClassName = cn(
              "group relative block h-full min-h-[220px] w-full overflow-hidden rounded-sg-xl border border-white/10 bg-sg-surface text-left transition",
              hasGallery
                ? "cursor-pointer hover:border-sg-accent/45 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
                : "cursor-default",
            );

            const cardContent = (
              <>
                <Image
                  src={showcase.coverImage || showcase.images[0]}
                  alt={showcase.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,16,40,0.95)] via-[rgba(8,16,40,0.45)] to-[rgba(8,16,40,0.15)]" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <Badge className="mb-3 text-[10px] sm:text-xs">{showcase.tag}</Badge>
                  <h3 className="font-display text-lg font-bold leading-snug text-white sm:text-xl">
                    {showcase.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-[1.6] text-[#d4dced] sm:text-sm">
                    {showcase.description}
                  </p>
                  <p className="mt-3 text-xs font-bold text-sg-accent">
                    {hasGallery
                      ? `View ${showcase.images.length} site photos →`
                      : `${showcase.images.length} site photo`}
                  </p>
                </div>
              </>
            );

            return (
              <Reveal
                key={showcase.id}
                delay={index * 60}
                className={cn("min-h-[220px]", layoutClasses[index % layoutClasses.length])}
              >
                {hasGallery ? (
                  <Link href={getGalleryPath(showcase.id)} className={cardClassName}>
                    {cardContent}
                  </Link>
                ) : (
                  <div className={cardClassName}>{cardContent}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
