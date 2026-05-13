import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  image?: string;
  children?: ReactNode;
}) {
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (imageRef.current) {
      gsap.to(imageRef.current, {
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
      gsap.from(titleRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      });
    }
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      {image && (
        <>
          <img
            ref={imageRef}
            src={image}
            alt=""
            className="absolute inset-0 h-[120%] w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/40 to-navy-deep/95" />
        </>
      )}
      {!image && <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy-light" />}

      <div className="relative container-luxe py-32 md:py-48 text-center">
        {eyebrow && (
          <div className="gold-divider mb-6">
            <span className="eyebrow text-gold">{eyebrow}</span>
          </div>
        )}
        <h1 ref={titleRef} className="font-display text-5xl md:text-8xl text-ivory leading-[1.1] max-w-5xl mx-auto">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-8 max-w-2xl mx-auto text-ivory/80 text-lg md:text-xl font-light leading-relaxed">{subtitle}</p>
        )}
        {children && <div className="mt-12 flex flex-wrap justify-center gap-4">{children}</div>}
      </div>
    </section>
  );
}
