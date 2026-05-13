import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    if (!cursor || !follower) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      
      gsap.to(cursor, {
        x,
        y,
        duration: 0.1,
        ease: "power2.out",
      });
      
      gsap.to(follower, {
        x,
        y,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const onMouseEnter = () => {
      gsap.to([cursor, follower], { opacity: 1, duration: 0.3 });
    };

    const onMouseLeave = () => {
      gsap.to([cursor, follower], { opacity: 0, duration: 0.3 });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest("a, button, [role='button'], input, select, textarea");
      
      if (isClickable) {
        setIsHovering(true);
        gsap.to(cursor, { scale: 1.5, duration: 0.3 });
        gsap.to(follower, { scale: 2.5, backgroundColor: "rgba(201, 162, 39, 0.15)", border: "1px solid rgba(201, 162, 39, 0.5)", duration: 0.3 });
      } else {
        setIsHovering(false);
        gsap.to(cursor, { scale: 1, duration: 0.3 });
        gsap.to(follower, { scale: 1, backgroundColor: "transparent", border: "1px solid rgba(201, 162, 39, 0.3)", duration: 0.3 });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-gold rounded-full pointer-events-none z-[9999] opacity-0 mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-gold/30 rounded-full pointer-events-none z-[9998] opacity-0"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}
