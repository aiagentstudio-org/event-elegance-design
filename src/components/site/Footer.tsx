import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-ivory/85 mt-24">
      <div className="container-luxe py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-14 w-14" />
            <div>
              <div className="font-display text-xl text-ivory">RS Group</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Events</div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ivory/70">
            Luxury wedding & corporate event planners crafting unforgettable celebrations across Delhi NCR.
          </p>
        </div>

        <div>
          <h4 className="text-gold text-sm uppercase tracking-[0.25em] mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/venue-events" className="hover:text-gold">Venue & Events</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold text-sm uppercase tracking-[0.25em] mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><Phone size={16} className="text-gold mt-0.5" /> +91 99535 95353</li>
            <li className="flex gap-2"><Mail size={16} className="text-gold mt-0.5" /> sanjeev@rsgroupevent.com</li>
            <li className="flex gap-2"><Mail size={16} className="text-gold mt-0.5" /> hello@rsgroupevent.com</li>
            <li className="flex gap-2"><MapPin size={16} className="text-gold mt-0.5" /> Surajkund, Faridabad, Delhi NCR</li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold text-sm uppercase tracking-[0.25em] mb-4">Follow</h4>
          <div className="flex gap-3">
            <a href="https://instagram.com" aria-label="Instagram" className="p-2.5 border border-gold/40 hover:bg-gold hover:text-navy transition-colors rounded-sm"><Instagram size={18} /></a>
            <a href="https://facebook.com" aria-label="Facebook" className="p-2.5 border border-gold/40 hover:bg-gold hover:text-navy transition-colors rounded-sm"><Facebook size={18} /></a>
          </div>
          <p className="text-xs text-ivory/60 mt-6">Service area: Surajkund · Faridabad · Delhi · Gurgaon · Noida</p>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-luxe py-5 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-ivory/60">
          <p>© {new Date().getFullYear()} RS Group Events. All rights reserved.</p>
          <p>Crafted with elegance for unforgettable moments.</p>
        </div>
      </div>

      {/* WhatsApp float */}
      <a
        href="https://wa.me/919953595353"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp us"
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.494.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
      </a>
    </footer>
  );
}
