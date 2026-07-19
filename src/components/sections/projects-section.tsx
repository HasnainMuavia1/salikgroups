import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { projects } from "@/content/projects";
import { getProjectPath } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <section id="projects" className="sg-section-x pb-16 pt-5 sm:pb-[110px]">
      <div className="mx-auto max-w-[var(--spacing-container)]">
        <Reveal>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-[46px] sm:gap-6">
            <div className="max-w-[620px]">
              <div className="sg-eyebrow mb-3 sm:mb-4">Proven delivery</div>
              <h2 className="sg-heading text-[clamp(24px,3.4vw,42px)] leading-[1.1]">
                Featured projects
              </h2>
            </div>
            <p className="max-w-[340px] text-sm text-sg-text-dim sm:text-[15px]">
              Government, courts and industry — delivered through survey, installation,
              testing and structured handover.
            </p>
          </div>
        </Reveal>

        <div className="sg-grid-cards-wide">
          {projects.map((project, index) => {
            const photoCount = project.gallery.length;
            const hasGallery = photoCount > 1;
            const projectHref = hasGallery
              ? `${getProjectPath(project.slug)}#gallery`
              : getProjectPath(project.slug);

            return (
              <Reveal key={project.id} delay={index * 60} className="h-full">
                <TiltCard className="group relative h-full min-h-[260px] overflow-hidden rounded-sg-xl border border-white/10 bg-sg-surface sm:min-h-[320px]">
                  <div className="relative flex h-full min-h-[260px] flex-col sm:min-h-[320px]">
                    <Link
                      href={projectHref}
                      className="relative min-h-[180px] flex-1 overflow-hidden sm:min-h-[220px]"
                    >
                      <Image
                        src={project.coverImage || project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(8,16,40,0.55)] to-transparent" />
                      {hasGallery ? (
                        <span className="absolute right-3 top-3 rounded-sg-pill border border-white/12 bg-[rgba(10,20,48,0.78)] px-2.5 py-1 text-[10px] font-bold text-sg-accent backdrop-blur-sm sm:text-xs">
                          {photoCount} photos
                        </span>
                      ) : null}
                    </Link>

                    <div className="relative border-t border-white/10 bg-[rgba(10,20,48,0.92)] p-4 sm:p-[26px]">
                      <Badge className="mb-2.5 text-[10px] sm:mb-3 sm:text-sm">{project.tag}</Badge>
                      <h3 className="font-display text-base font-bold leading-snug text-white sm:text-[21px]">
                        {project.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-xs leading-[1.6] text-[#d8e0f0] sm:line-clamp-2 sm:text-sm">
                        {project.description}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 sm:mt-4">
                        {hasGallery ? (
                          <Link
                            href={`${getProjectPath(project.slug)}#gallery`}
                            className="text-xs font-bold text-sg-accent sm:text-sm"
                          >
                            View {photoCount} site photos →
                          </Link>
                        ) : null}
                        <Link
                          href={getProjectPath(project.slug)}
                          className="text-xs font-bold text-sg-text-dim transition hover:text-sg-accent sm:text-sm"
                        >
                          Project details →
                        </Link>
                      </div>
                    </div>
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
