import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Props = {
  to?: string;
  href?: string;
  variant?: "gold" | "outline" | "navy";
  children: ReactNode;
  className?: string;
};

const styles = {
  gold: "bg-gold text-[#0A0A0A] hover:bg-gold-light font-bold",
  outline: "border border-gold/40 text-gold hover:border-gold hover:bg-gold/10",
  navy: "bg-bg-accent text-text-main hover:bg-white/5 border border-white/5",
};

export function CtaButton({ to, href, variant = "gold", children, className = "" }: Props) {
  const cls = `inline-flex items-center justify-center rounded-sm px-7 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${styles[variant]} ${className}`;
  if (href)
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  return (
    <Link to={to ?? "/"} className={cls}>
      {children}
    </Link>
  );
}
