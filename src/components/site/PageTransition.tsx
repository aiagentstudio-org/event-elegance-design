import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Entrance Animation
    tl.to(overlayRef.current, {
      scaleY: 0,
      transformOrigin: "top",
      duration: 0.8,
      ease: "power4.inOut",
    })
    .fromTo(
      containerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.4"
    );

    return () => {
      // Exit Animation could go here if we were using a more complex router interceptor
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[9999] bg-navy pointer-events-none origin-top"
        style={{ transform: "scaleY(1)" }}
      />
      {children}
    </div>
  );
}
