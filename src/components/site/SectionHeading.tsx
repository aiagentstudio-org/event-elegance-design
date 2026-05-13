import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  bgText,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  light?: boolean;
  bgText?: string;
}) {
  return (
    <div className={`max-w-3xl relative ${align === "center" ? "mx-auto text-center" : ""}`}>
      {bgText && (
        <div className="decorative-text -top-20 left-1/2 -translate-x-1/2 select-none">
          {bgText}
        </div>
      )}
      <div className="relative z-10">
        {eyebrow && (
          <div className={`gold-divider mb-4 ${align === "center" ? "" : "!justify-start"}`}>
            <span className="eyebrow">{eyebrow}</span>
          </div>
        )}
        <h2 className={`font-display text-4xl md:text-6xl ${light ? "text-ivory" : "text-navy"}`}>{title}</h2>
        {subtitle && (
          <p className={`mt-6 text-lg md:text-xl font-light ${light ? "text-ivory/80" : "text-charcoal/75"}`}>{subtitle}</p>
        )}
      </div>
    </div>
  );
}
