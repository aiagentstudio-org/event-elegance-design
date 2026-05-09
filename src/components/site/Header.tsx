import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/venue-events", label: "Venue & Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
          : "bg-navy/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-luxe flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <Logo className="h-12 w-12 transition-transform group-hover:scale-105" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-lg font-semibold text-ivory tracking-wide">RS Group</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Events</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-ivory/85 hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center justify-center rounded-sm bg-gold px-5 py-2.5 text-sm font-medium text-navy hover:bg-gold-light transition-colors shadow-[var(--shadow-gold)]"
          >
            Book Now
          </Link>
          <button
            className="lg:hidden p-2 text-ivory"
            onClick={() => setOpen((s) => !s)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-navy-deep border-t border-gold/20">
          <nav className="container-luxe flex flex-col py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-ivory/90 hover:text-gold border-b border-ivory/10 last:border-0"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
