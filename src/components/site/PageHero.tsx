import type { ReactNode } from "react";

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
  return (
    <section className="relative isolate overflow-hidden">
      {image && (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy/70 to-navy-deep/90" />
        </>
      )}
      {!image && <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy-light" />}

      <div className="relative container-luxe py-28 md:py-36 text-center">
        {eyebrow && (
          <div className="gold-divider mb-5">
            <span className="eyebrow text-gold">{eyebrow}</span>
          </div>
        )}
        <h1 className="font-display text-4xl md:text-6xl text-ivory leading-tight max-w-4xl mx-auto">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl mx-auto text-ivory/80 text-base md:text-lg">{subtitle}</p>
        )}
        {children && <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>}
      </div>
    </section>
  );
}
