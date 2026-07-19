"use client";

import { SiteChrome } from "@/components/layout/site-chrome";
import { useActiveSection } from "@/hooks/use-active-section";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { ReviewsPanelProvider } from "@/providers/reviews-panel-provider";
import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const { progress, scrolled, showBackToTop } = useScrollProgress();
  const activeSection = useActiveSection();
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ReviewsPanelProvider>
      <SiteChrome
        progress={progress}
        scrolled={scrolled}
        showBackToTop={showBackToTop}
        activeSection={activeSection}
      >
        <div className="min-h-screen bg-sg-bg text-sg-text-hi">
          <div aria-hidden className="h-[var(--sg-chrome-height)] shrink-0" />
          {children}
        </div>
      </SiteChrome>
    </ReviewsPanelProvider>
  );
}
