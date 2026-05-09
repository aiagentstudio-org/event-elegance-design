import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaButton } from "@/components/site/CtaButton";
import { MapPin } from "lucide-react";
import venue from "@/assets/venue-hero.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g4 from "@/assets/gallery-4.jpg";
import wedding from "@/assets/wedding-decor.jpg";
import corporate from "@/assets/corporate-event.jpg";

export const Route = createFileRoute("/venue-events")({
  head: () => ({
    meta: [
      { title: "Venue & Events — Luxury Wedding Venues in Surajkund, Delhi NCR" },
      { name: "description", content: "Discover luxury event venues in Surajkund and Delhi NCR — perfectly placed for weddings and corporate gatherings." },
      { property: "og:title", content: "Venue & Events — Surajkund, Delhi NCR" },
      { property: "og:description", content: "Where luxury meets occasion." },
      { property: "og:image", content: venue },
    ],
  }),
  component: VenuePage,
});

const cities = ["Surajkund", "Faridabad", "South Delhi", "Gurgaon", "Noida", "Greater Noida", "Ghaziabad", "Delhi NCR"];

function VenuePage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Venue & Events"
        title={<>Where luxury meets <span className="italic text-gold">occasion.</span></>}
        subtitle="Surajkund · Delhi NCR — perfectly placed for celebrations of every scale."
        image={venue}
      />

      <section className="container-luxe py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="gold-divider mb-4 !justify-start"><span className="eyebrow">Why This Location</span></div>
          <h2 className="font-display text-3xl md:text-4xl text-navy">A premium location, exceptional connectivity.</h2>
          <p className="mt-5 text-charcoal/80 leading-relaxed">
            Surajkund sits at the southern edge of Delhi NCR — close enough for guests from across the city, yet wrapped in the calm and grandeur that the most memorable events deserve. Easy access from IGI Airport, the metro and major NCR highways makes outstation hospitality effortless.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-charcoal/85">
            <li className="flex gap-2"><MapPin size={18} className="text-gold mt-0.5" /> 35 min from South Delhi</li>
            <li className="flex gap-2"><MapPin size={18} className="text-gold mt-0.5" /> 45 min from IGI Airport</li>
            <li className="flex gap-2"><MapPin size={18} className="text-gold mt-0.5" /> Premium hotel inventory for guest stays</li>
          </ul>
        </div>
        <div className="bg-pale-gold/50 aspect-[4/3] flex items-center justify-center">
          <div className="text-center p-8">
            <MapPin className="mx-auto text-navy mb-3" size={36} />
            <div className="font-display text-2xl text-navy">Surajkund, Faridabad</div>
            <div className="text-charcoal/70 text-sm mt-1">Delhi NCR · India</div>
          </div>
        </div>
      </section>

      <section className="bg-pale-gold/30 py-20 md:py-28">
        <div className="container-luxe grid md:grid-cols-2 gap-10">
          <div>
            <img src={wedding} alt="Wedding venue" className="w-full h-80 object-cover mb-6" loading="lazy" />
            <div className="eyebrow mb-2">For Weddings</div>
            <h3 className="font-display text-2xl text-navy">A canvas for every wedding tradition</h3>
            <p className="mt-3 text-charcoal/80">Spacious lawns and ornate ballrooms host everything from intimate ceremonies to grand baraats — with the flexibility to design freely.</p>
          </div>
          <div>
            <img src={corporate} alt="Corporate venue" className="w-full h-80 object-cover mb-6" loading="lazy" />
            <div className="eyebrow mb-2">For Corporate Events</div>
            <h3 className="font-display text-2xl text-navy">Polished, professional, premium</h3>
            <p className="mt-3 text-charcoal/80">Executive dinners, product launches and conferences benefit from quiet elegance and full A/V support.</p>
          </div>
        </div>
      </section>

      <section className="container-luxe py-20 md:py-28">
        <SectionHeading eyebrow="Showcase" title="Past events at this location" />
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {[g1, g2, g4].map((src, i) => (
            <div key={i} className="aspect-[4/5] overflow-hidden">
              <img src={src} alt="Event" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy text-ivory py-20">
        <div className="container-luxe text-center">
          <SectionHeading eyebrow="Service Area" title="Cities we serve" light />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {cities.map((c) => (
              <span key={c} className="px-5 py-2 border border-gold/40 text-gold-light text-sm uppercase tracking-[0.15em]">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gold">
        <div className="container-luxe py-16 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-navy">Visit the venue. Imagine your event.</h2>
          <div className="mt-8"><CtaButton to="/contact" variant="navy">Request a Site Visit</CtaButton></div>
        </div>
      </section>
    </Layout>
  );
}
