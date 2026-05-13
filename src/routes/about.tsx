import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaButton } from "@/components/site/CtaButton";
import { Sparkles, ShieldCheck, Palette, Users } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import about from "@/assets/about-team.jpg";
import venue from "@/assets/venue-hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About RS Group Events — Luxury Event Planners in Delhi NCR" },
      {
        name: "description",
        content:
          "Meet RS Group Events — a boutique luxury event planning studio in Surajkund, designing weddings and corporate events across Delhi NCR for over a decade.",
      },
      { property: "og:title", content: "About RS Group Events" },
      { property: "og:description", content: "Our story, our mission and the team behind unforgettable celebrations." },
      { property: "og:image", content: venue },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Sparkles, title: "Elegance", desc: "A refined aesthetic in every choice we make." },
  { icon: ShieldCheck, title: "Reliability", desc: "We deliver on every promise — without exception." },
  { icon: Palette, title: "Customization", desc: "No two events alike. Each one designed for you." },
  { icon: Users, title: "Guest Experience", desc: "We design for the people who walk through the door." },
];

const stats = [
  { n: "500+", l: "Events Done" },
  { n: "300+", l: "Couples Served" },
  { n: "12", l: "Years Active" },
  { n: "20+", l: "Event Types" },
];

const steps = [
  { n: "01", t: "Consultation", d: "We listen to your vision, your story and your guests." },
  { n: "02", t: "Design & Planning", d: "Mood boards, layouts, vendors and timelines, fully curated." },
  { n: "03", t: "Flawless Execution", d: "On the day, our team makes every detail look effortless." },
];

function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Hero Title Animation
      const heroTitle = new SplitType(".hero-title", { types: "chars,words" });
      gsap.from(heroTitle.chars, {
        y: 40,
        opacity: 0,
        rotateX: -30,
        stagger: 0.02,
        duration: 1,
        ease: "power4.out"
      });

      // Reveal sections using unified data-animate
      const reveals = document.querySelectorAll("[data-animate]");
      reveals.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          opacity: 0,
          y: 40,
          duration: 1.2,
          ease: "power3.out",
        });
      });

      // Stagger stats
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 85%",
        },
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)",
      });

      // Stagger value cards
      gsap.from(".value-card", {
        scrollTrigger: {
          trigger: ".values-grid",
          start: "top 80%",
        },
        scale: 0.95,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      <div ref={containerRef}>
        <PageHero
          eyebrow="Our Legacy"
          title={
            <span className="hero-title">
              The studio behind every <span className="italic text-gold">unforgettable</span> moment.
            </span>
          }
          subtitle="Boutique. Bespoke. Built on twelve years of obsessive craft."
          image={venue}
        />

        <section className="container-luxe py-24 md:py-40 grid md:grid-cols-2 gap-16 items-center relative overflow-hidden" data-animate>
          <div className="decorative-text -top-10 -right-20 opacity-[0.03]">EST. 2012</div>
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={about}
              alt="RS Group Events team"
              className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 to-transparent" />
          </div>
          <div className="space-y-8 relative z-10">
            <div className="gold-divider !justify-start">
              <span className="eyebrow">Our Story</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-navy-deep leading-tight">A passion that became a craft.</h2>
            <div className="space-y-6 text-charcoal/80 text-lg font-light leading-relaxed">
              <p>
                RS Group Events began with a single, simple belief: every celebration deserves to be remembered. What
                started as a small wedding studio in Surajkund has grown into a trusted partner for hundreds of couples,
                families and brands across Delhi NCR.
              </p>
              <p>
                Today, our team brings together planners, stylists, florists and coordinators — all united by a love for
                the moments that matter. We don't just plan events; we architect memories that defy the ordinary.
              </p>
            </div>
          </div>
        </section>

        {/* VISION BENTO - STUDIO BRUTALIST */}
        <section className="bg-ivory py-32 md:py-56 border-t border-charcoal/5 relative overflow-hidden" data-animate>
          <div className="container-luxe">
            <div className="grid lg:grid-cols-12 gap-12">
               <div className="lg:col-span-5">
                  <div className="gold-divider !justify-start mb-8"><span className="eyebrow">The Vision</span></div>
                  <h2 className="font-display text-6xl md:text-8xl text-navy leading-[0.9] tracking-tighter mb-10">
                    Boutique <br />
                    <span className="italic text-gold">by Choice.</span>
                  </h2>
               </div>
               <div className="lg:col-span-7 grid md:grid-cols-2 gap-8">
                  <div className="bg-navy p-10 text-white rounded-tr-[4rem] group hover:bg-navy-deep transition-all">
                     <div className="text-gold mb-6 font-display text-4xl">01.</div>
                     <h3 className="text-2xl font-display mb-4">Precision Logic</h3>
                     <p className="text-white/50 font-light leading-relaxed">We apply architectural rigor to logistics, ensuring every second of your event is accounted for.</p>
                  </div>
                  <div className="bg-white p-10 border border-charcoal/10 group hover:border-gold transition-all">
                     <div className="text-navy mb-6 font-display text-4xl">02.</div>
                     <h3 className="text-2xl font-display mb-4 text-navy">Emotional Design</h3>
                     <p className="text-charcoal/50 font-light leading-relaxed">Design is a feeling. We manipulate textures and colors to evoke specific emotional responses.</p>
                  </div>
               </div>
            </div>
          </div>
          <div className="decorative-text -bottom-10 -right-20 opacity-[0.02] -rotate-12">STUDIO</div>
        </section>

        <section className="relative py-24 md:py-40 overflow-hidden" data-animate>
          <div className="absolute inset-0 bg-navy-deep -skew-y-3 origin-right scale-110" />
          <div className="container-luxe relative grid md:grid-cols-2 gap-8">
            <div className="glass-card p-12 border-l-4 border-gold group hover:bg-white/10 transition-all duration-500">
              <div className="eyebrow mb-6 text-gold/80">Our Mission</div>
              <p className="font-display text-3xl md:text-4xl text-ivory leading-tight group-hover:translate-x-2 transition-transform">
                To turn every milestone into a masterpiece — through design, detail and devotion.
              </p>
            </div>
            <div className="glass-card p-12 border-l-4 border-gold group hover:bg-white/10 transition-all duration-500">
              <div className="eyebrow mb-6 text-gold/80">Our Vision</div>
              <p className="font-display text-3xl md:text-4xl text-ivory leading-tight group-hover:translate-x-2 transition-transform">
                To be Delhi NCR's most loved luxury event studio — known for elegance, integrity and care.
              </p>
            </div>
          </div>
        </section>

        <section className="container-luxe py-24 md:py-40 relative" data-animate>
          <SectionHeading eyebrow="What We Believe" title="Our core values" bgText="ETHOS" />
          <div className="values-grid mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="value-card glass-card p-10 text-center group hover:-translate-y-2 transition-all duration-700 hover:border-gold/50"
              >
                <div className="mx-auto h-16 w-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-8 text-gold group-hover:bg-gold group-hover:text-navy-deep transition-colors duration-500">
                  <v.icon size={28} />
                </div>
                <h3 className="text-2xl font-display text-navy-deep mb-4">{v.title}</h3>
                <p className="text-charcoal/70 leading-relaxed font-light">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-ivory py-24 md:py-40 relative overflow-hidden" data-animate>
          <div className="decorative-text -bottom-20 -left-20 opacity-[0.02]">ALCHMY</div>
          <div className="container-luxe relative z-10">
            <SectionHeading eyebrow="Our Approach" title="The Alchemy of Planning" />
            <div className="mt-24 grid md:grid-cols-3 gap-10">
              {steps.map((s) => (
                <div key={s.n} className="group relative">
                  <div className="absolute -top-10 -left-6 font-display text-[120px] text-gold/10 group-hover:text-gold/20 transition-colors pointer-events-none">
                    {s.n}
                  </div>
                  <div className="relative glass-card p-12 border-t-2 border-transparent hover:border-gold transition-all duration-700 bg-white/40">
                    <h3 className="text-3xl font-display text-navy-deep mb-6">{s.t}</h3>
                    <p className="text-charcoal/75 leading-relaxed font-light">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy-deep text-ivory overflow-hidden relative" data-animate>
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="container-luxe relative py-24 md:py-32 stats-grid grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((s) => (
              <div key={s.l} className="stat-item group">
                <div className="font-display text-5xl md:text-8xl text-gold mb-3 group-hover:scale-110 transition-transform">
                  {s.n}
                </div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-ivory/40 group-hover:text-gold transition-colors">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden" data-animate>
          <div className="absolute inset-0 bg-gold" />
          <div className="container-luxe py-28 text-center relative">
            <h2 className="font-display text-5xl md:text-8xl text-navy-deep mb-12 italic leading-tight">Plan your event with us.</h2>
            <CtaButton to="/contact" variant="navy" className="scale-110 px-12 py-5">
              Begin the Journey
            </CtaButton>
          </div>
        </section>
      </div>
    </Layout>
  );
}
