import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Reset positions
    gsap.set(wipeRef.current, { scaleY: 1, transformOrigin: "bottom" });
    gsap.set(contentRef.current, { opacity: 0, y: 30 });

    tl.to(wipeRef.current, {
      scaleY: 0,
      duration: 1.2,
      ease: "power4.inOut",
      delay: 0.1,
    }).to(
      contentRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        onComplete: () => {
          // Essential for ScrollTrigger to recalculate after layout shift
          import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
            ScrollTrigger.refresh();
          });
        },
      },
      "-=0.6",
    );

    return () => {
      // Exit animation logic
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Wipe Overlay */}
      <div
        ref={wipeRef}
        className="fixed inset-0 z-[9999] bg-navy-deep pointer-events-none flex items-center justify-center"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="font-display text-gold text-4xl italic tracking-widest opacity-20 animate-pulse">
            RS
          </div>
          <div className="w-48 h-[1px] bg-gold/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gold origin-left animate-progress-fast" />
          </div>
        </div>
      </div>

      <div ref={contentRef}>{children}</div>
    </div>
  );
}
