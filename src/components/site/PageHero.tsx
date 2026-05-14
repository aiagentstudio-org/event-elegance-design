import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  video,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  image?: string;
  video?: string;
  children?: ReactNode;
}) {
  const imageRef = useRef<HTMLImageElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      const mediaRef = imageRef.current || videoRef.current;
      if (mediaRef) {
        gsap.to(mediaRef, {
          scrollTrigger: {
            trigger: "section",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
          y: 100,
          ease: "none",
        });
      }

      if (titleRef.current) {
        const split = new SplitType(titleRef.current, { types: "chars,words" });
        gsap.from(split.chars, {
          y: 40,
          opacity: 0,
          rotateX: -20,
          stagger: 0.02,
          duration: 1.2,
          ease: "power4.out",
          delay: 0.2,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-navy-deep min-h-[60vh] md:min-h-[70vh] flex items-center justify-center">
      {video && (
        <>
          <video
            ref={videoRef}
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-[120%] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/70 to-[#0A0A0A]" />
        </>
      )}
      {image && !video && (
        <>
          <img
            ref={imageRef}
            src={image}
            alt=""
            className="absolute inset-0 h-[120%] w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/80 to-[#0A0A0A]" />
        </>
      )}
      {!image && !video && <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#0A0A0A]" />}

      <div className="relative container-luxe py-32 md:py-48 text-center z-10">
        {eyebrow && (
          <div className="gold-divider mb-6">
            <span className="eyebrow text-gold">{eyebrow}</span>
          </div>
        )}
        <h1 ref={titleRef} className="font-display text-5xl md:text-8xl text-white leading-[1.1] max-w-5xl mx-auto drop-shadow-2xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-8 max-w-2xl mx-auto text-white/90 text-lg md:text-xl font-light leading-relaxed drop-shadow-md">{subtitle}</p>
        )}
        {children && <div className="mt-12 flex flex-wrap justify-center gap-4">{children}</div>}
      </div>
    </section>
  );
}
