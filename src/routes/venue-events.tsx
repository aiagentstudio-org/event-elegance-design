import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaButton } from "@/components/site/CtaButton";
import { MapPin, Plane, Car, Hotel, Globe } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
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
      {
        name: "description",
        content:
          "Discover luxury event venues in Surajkund and Delhi NCR — perfectly placed for weddings and corporate gatherings.",
      },
      { property: "og:title", content: "Venue & Events — Surajkund, Delhi NCR" },
      { property: "og:description", content: "Where luxury meets occasion." },
      { property: "og:image", content: venue },
    ],
  }),
  component: VenuePage,
});

const cities = [
  { name: "Surajkund", code: "SRJ" },
  { name: "Faridabad", code: "FBD" },
  { name: "South Delhi", code: "DEL" },
  { name: "Gurgaon", code: "GGN" },
  { name: "Noida", code: "NDA" },
  { name: "Greater Noida", code: "GRN" },
  { name: "Ghaziabad", code: "GZB" },
  { name: "Delhi NCR", code: "NCR" },
];

function VenuePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx: gsap.Context;

    // Add a tiny delay to ensure fonts and layout are ready
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        // Section Reveals
        const reveals = document.querySelectorAll("[data-animate]");
        reveals.forEach((el) => {
          gsap.from(el, {
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            clearProps: "all",
          });
        });

        // Parallax Images
        const parallaxImgs = document.querySelectorAll(".parallax-img");
        parallaxImgs.forEach((img) => {
          gsap.to(img, {
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
            y: -40,
            ease: "none",
          });
        });

        // City Grid Stagger
        gsap.from(".city-tag", {
          scrollTrigger: {
            trigger: ".city-grid",
            start: "top 80%",
          },
          scale: 0.8,
          opacity: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: "back.out(1.7)",
          clearProps: "all",
        });
      }, containerRef);
    }, 50);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <Layout>
      <div ref={containerRef}>
        <PageHero
          eyebrow="Venue & Events"
          title={
            <span className="hero-title">
              Where luxury meets <span className="italic text-gold">occasion.</span>
            </span>
          }
          subtitle="Surajkund · Delhi NCR — perfectly placed for celebrations of every scale."
          image={venue}
        />

        <section className="relative overflow-hidden py-24 md:py-40" data-animate>
          <div className="decorative-text -top-20 -left-40 opacity-[0.02]">SURR</div>
          <div className="container-luxe grid lg:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
            <div>
              <div className="gold-divider mb-6 !justify-start">
                <span className="eyebrow">Location Advantage</span>
              </div>
              <h2 className="font-display text-5xl md:text-7xl text-text-main leading-[1.05]">
                The Prestige of <br />
                <span className="italic text-gold">Surajkund.</span>
              </h2>
              <p className="mt-8 text-xl text-text-muted leading-relaxed font-light">
                Situated at the southern edge of the capital, Surajkund offers a unique blend of
                heritage grandeur and modern convenience.
              </p>

              <div className="mt-12 grid grid-cols-2 gap-y-10 gap-x-8">
                {[
                  { icon: Plane, label: "IGI Airport", val: "45 Mins" },
                  { icon: Car, label: "South Delhi", val: "35 Mins" },
                  { icon: Hotel, label: "Premium Stay", val: "5+ Hotels" },
                  { icon: Globe, label: "Connectivity", val: "High-Speed" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="group glass-card p-6 border-none bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <item.icon
                      className="text-gold mb-4 group-hover:rotate-12 transition-transform"
                      size={24}
                    />
                    <div className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-bold">
                      {item.label}
                    </div>
                    <div className="text-text-main font-display text-2xl mt-1">{item.val}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative perspective-container">
              <div className="isometric-card glass-card p-4">
                <div className="aspect-[4/5] overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop"
                    alt="Luxury Hotel"
                    className="parallax-img w-full h-[120%] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
              </div>
              <div className="absolute -top-10 -right-10 bg-gold text-navy-deep p-10 glass-card shadow-2xl z-20 hidden lg:block">
                <MapPin size={40} />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-navy-deep py-24 md:py-40 relative overflow-hidden" data-animate>
          <div className="decorative-text top-0 right-0 opacity-5">RS</div>
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="container-luxe relative z-10">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-32">
              <div className="group glass-card border-white/5 p-12 hover:border-gold/30 transition-all duration-1000">
                <div className="aspect-[16/9] overflow-hidden mb-10 rounded-lg">
                  <img
                    src={wedding}
                    alt="Wedding venue"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  />
                </div>
                <div className="eyebrow mb-4">Celebrations</div>
                <h3 className="font-display text-4xl text-ivory mb-6">A canvas for tradition.</h3>
                <p className="text-ivory/60 text-lg leading-relaxed font-light">
                  From floral mandaps under the stars to grand banquet halls, our venues provide the
                  scale and flexibility your wedding demands.
                </p>
              </div>

              <div className="group glass-card border-white/5 p-12 hover:border-gold/30 transition-all duration-1000 md:translate-y-32">
                <div className="aspect-[16/9] overflow-hidden mb-10 rounded-lg">
                  <img
                    src={corporate}
                    alt="Corporate venue"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  />
                </div>
                <div className="eyebrow mb-4">Corporate</div>
                <h3 className="font-display text-4xl text-ivory mb-6">Polished & Professional.</h3>
                <p className="text-ivory/60 text-lg leading-relaxed font-light">
                  Executive retreats and product launches benefit from the quiet prestige and
                  meticulous coordination of our regional venues.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container-luxe py-32 md:py-48 relative" data-animate>
          <SectionHeading
            eyebrow="Showcase"
            title="Regional Masterpieces"
            subtitle="A visual journey through the events that defined our reputation in Surajkund."
            bgText="LUXE"
          />
          <div className="mt-28 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {[g1, g2, g4].map((src, i) => (
              <div
                key={i}
                className={`group relative glass-card p-1.5 overflow-hidden transition-all duration-700 hover:shadow-gold/20 ${i === 0 ? "md:row-span-2" : ""}`}
              >
                <div className="h-full w-full overflow-hidden rounded-sm">
                  <img
                    src={src}
                    alt={`RS Group Events luxury celebration ${i + 1}`}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-bg-main py-24 md:py-48 relative overflow-hidden" data-animate>
          <div className="absolute inset-0 bg-gradient-to-b from-bg-main via-gold/5 to-bg-main opacity-50" />
          <div className="decorative-text -bottom-20 left-1/2 -translate-x-1/2 opacity-[0.02]">
            RS GROUP
          </div>

          <div className="container-luxe text-center relative z-10">
            <div className="gold-divider mx-auto mb-10">
              <span className="eyebrow">Service Coverage</span>
            </div>
            <h2 className="font-display text-6xl md:text-9xl text-white mb-20 leading-tight">
              Spanning the <span className="italic text-gold">Capital.</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8 city-grid max-w-6xl mx-auto">
              {cities.map((c) => (
                <div
                  key={c.name}
                  className="city-tag px-10 py-6 glass-card border-white/10 hover:border-gold/50 bg-white/[0.03] hover:bg-gold/10 transition-all duration-700 cursor-default group backdrop-blur-md"
                >
                  <div className="text-[10px] text-gold font-bold mb-3 tracking-[0.4em] group-hover:tracking-[0.6em] transition-all duration-700">
                    {c.code}
                  </div>
                  <div className="text-white font-display text-2xl group-hover:text-gold transition-colors duration-700">
                    {c.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="bg-navy-deep relative overflow-hidden border-t border-white/5"
          data-animate
        >
          <div className="container-luxe py-32 md:py-56 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12 text-left">
                <div className="gold-divider !justify-start">
                  <span className="eyebrow">Studio Experience</span>
                </div>
                <h2 className="font-display text-6xl md:text-8xl text-white italic leading-[1.1]">
                  Visit the <span className="text-gold">studio.</span>
                </h2>
                <p className="text-ivory/60 text-xl font-light leading-relaxed max-w-xl">
                  Architecture, moodboards, and venue portfolios come alive in our Surajkund
                  creative hub. Experience our process before you book your date.
                </p>
                <div className="pt-6">
                  <CtaButton
                    to="/contact"
                    variant="gold"
                    className="px-16 py-7 scale-110 shadow-[0_0_50px_rgba(212,175,55,0.15)]"
                  >
                    Request Site Visit
                  </CtaButton>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-4 bg-gold/10 -rotate-2 rounded-2xl group-hover:rotate-0 transition-transform duration-1000" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                  <img
                    src={g4}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-1000"
                    alt="Studio tour"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </section>
      </div>
    </Layout>
  );
}
