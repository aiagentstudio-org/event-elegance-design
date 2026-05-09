import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className={`gold-divider mb-4 ${align === "center" ? "" : "!justify-start"}`}>
          <span className="eyebrow">{eyebrow}</span>
        </div>
      )}
      <h2 className={`font-display text-3xl md:text-5xl ${light ? "text-ivory" : "text-navy"}`}>{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg ${light ? "text-ivory/80" : "text-charcoal/75"}`}>{subtitle}</p>
      )}
    </div>
  );
}
