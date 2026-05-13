import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/90 backdrop-blur-xl border-b border-white/5 py-1 shadow-2xl"
          : "bg-transparent py-3"
      }`}
    >
      <div className="container-luxe flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <Logo className="h-12 w-12 transition-transform duration-700 group-hover:rotate-[15deg]" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-xl font-semibold text-ivory tracking-wide">RS Group</div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold">Artisans of Events</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-xs uppercase tracking-widest text-ivory/80 hover:text-gold transition-all duration-300 relative group"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center justify-center rounded-sm bg-gold px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] font-bold text-navy hover:bg-ivory hover:text-navy transition-all duration-500 shadow-[var(--shadow-gold)]"
          >
            Inquire
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
        <div className="lg:hidden bg-navy-deep/95 backdrop-blur-2xl border-t border-gold/20 h-screen overflow-hidden">
          <nav className="container-luxe flex flex-col py-10 gap-2">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-4 text-2xl font-display text-ivory/90 hover:text-gold border-b border-white/5"
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
