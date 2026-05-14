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
import vElegance from "@/assets/values-elegance.png";
import vReliability from "@/assets/values-reliability.png";
import vCustomization from "@/assets/values-customization.png";
import vGuest from "@/assets/values-guest.png";
import aConsultation from "@/assets/alchemy-consultation.png";
import aDesign from "@/assets/alchemy-design.png";
import aExecution from "@/assets/alchemy-execution.png";
import ctaJourney from "@/assets/cta-journey.png";

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
  { img: vElegance, title: "Elegance", desc: "A refined aesthetic in every choice we make.", color: "from-purple-500/20" },
  { img: vReliability, title: "Reliability", desc: "We deliver on every promise — without exception.", color: "from-blue-500/20" },
  { img: vCustomization, title: "Customization", desc: "No two events alike. Each one designed for you.", color: "from-gold/20" },
  { img: vGuest, title: "Guest Experience", desc: "We design for the people who walk through the door.", color: "from-rose-500/20" },
];

const stats = [
  { n: "500+", l: "Events Done" },
  { n: "300+", l: "Couples Served" },
  { n: "12", l: "Years Active" },
  { n: "20+", l: "Event Types" },
];

const steps = [
  { n: "01", t: "The Consultation", d: "A deep dive into your dreams, preferences and must-haves.", img: aConsultation },
  { n: "02", t: "The Design Phase", d: "Bringing concepts to life with mood boards and 3D renders.", img: aDesign },
  { n: "03", t: "The Execution", d: "On-site management that ensures a flawless guest experience.", img: aExecution },
];

const palette = [
  { name: "Royal Gold", feeling: "Prestige & Warmth", color: "bg-[#D4AF37]", img: vElegance, desc: "The foundation of luxury, evoking a sense of timeless celebration and architectural grandeur." },
  { name: "Deep Amethyst", feeling: "Mystery & Depth", color: "bg-[#663399]", img: vReliability, desc: "A soulful choice for evening galas, where shadows and light dance in perfect cinematic harmony." },
  { name: "Crimson Love", feeling: "Passion & Energy", color: "bg-[#DC143C]", img: vGuest, desc: "The heartbeat of a celebration, bringing a vibrant, pulse-pounding energy to every corner." },
];

function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
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
          start: "top 90%",
        },
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)",
      });

      // Stagger value cards
      gsap.from(".value-card", {
        scrollTrigger: {
          trigger: ".values-grid",
          start: "top 90%",
        },
        y: 30,
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
            <span className="about-main-title !text-white !opacity-100 drop-shadow-2xl">
              The studio behind every <span className="italic !text-gold !opacity-100">unforgettable</span> moment.
            </span>
          }
          subtitle={
            <span className="!text-white/90 !opacity-100 drop-shadow-lg">
              Boutique. Bespoke. Built on twelve years of obsessive craft.
            </span>
          }
          image={venue}
        />

        <section className="container-luxe py-24 md:py-40 grid md:grid-cols-2 gap-16 items-center relative overflow-hidden">
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
            <h2 className="font-display text-5xl md:text-7xl text-white leading-tight">A passion that became a craft.</h2>
            <div className="space-y-6 text-white/80 text-lg font-light leading-relaxed">
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
        <section className="bg-bg-accent py-32 md:py-56 border-t border-white/5 relative overflow-hidden">
          <div className="container-luxe">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <div className="gold-divider !justify-start mb-8"><span className="eyebrow">The Vision</span></div>
                <h2 className="font-display text-6xl md:text-8xl text-white leading-[0.9] tracking-tighter mb-10">
                  Boutique <br />
                  <span className="italic text-gold">by Choice.</span>
                </h2>
              </div>
              <div className="lg:col-span-7 grid md:grid-cols-2 gap-8">
                <div className="bg-bg-card p-10 text-white rounded-tr-[4rem] group hover:bg-white/5 transition-all">
                  <div className="text-gold mb-6 font-display text-4xl">01.</div>
                  <h3 className="text-2xl font-display mb-4">Precision Logic</h3>
                  <p className="text-white/60 font-light leading-relaxed">We apply architectural rigor to logistics, ensuring every second of your event is accounted for.</p>
                </div>
                <div className="bg-bg-card p-10 border border-white/10 group hover:border-gold transition-all">
                  <div className="text-gold mb-6 font-display text-4xl">02.</div>
                  <h3 className="text-2xl font-display mb-4 text-white">Emotional Design</h3>
                  <p className="text-white/60 font-light leading-relaxed">Design is a feeling. We manipulate textures and colors to evoke specific emotional responses.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="decorative-text -bottom-10 -right-20 opacity-[0.02] -rotate-12">STUDIO</div>
        </section>

        <section className="relative py-24 md:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-bg-accent/50 -skew-y-3 origin-right scale-110" />
          <div className="container-luxe relative grid md:grid-cols-2 gap-8">
            <div className="glass-card p-12 border-l-4 border-gold group hover:bg-white/10 transition-all duration-500">
              <div className="eyebrow mb-6 text-gold">Our Mission</div>
              <p className="font-display text-3xl md:text-4xl text-white leading-tight group-hover:translate-x-2 transition-transform">
                To turn every milestone into a masterpiece — through design, detail and devotion.
              </p>
            </div>
            <div className="glass-card p-12 border-l-4 border-gold group hover:bg-white/10 transition-all duration-500">
              <div className="eyebrow mb-6 text-gold">Our Vision</div>
              <p className="font-display text-3xl md:text-4xl text-white leading-tight group-hover:translate-x-2 transition-transform">
                To be Delhi NCR's most loved luxury event studio — known for elegance, integrity and care.
              </p>
            </div>
          </div>
        </section>

        <section className="container-luxe py-24 md:py-40 relative bg-bg-main">
          <SectionHeading eyebrow="The RS Ethos" title="Our core values" bgText="BELIEF" light />
          <div className="values-grid mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="value-card group relative overflow-hidden rounded-3xl aspect-[4/5] flex flex-col justify-end p-8 border border-white/5"
              >
                <img src={v.img} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" alt={v.title} />
                <div className={`absolute inset-0 bg-gradient-to-t ${v.color} via-bg-main/90 to-transparent`} />

                <div className="relative z-10">
                  <h3 className="text-3xl font-display text-white mb-3">{v.title}</h3>
                  <p className="text-white/80 leading-relaxed font-light text-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-bg-accent py-32 md:py-56 relative overflow-hidden">
          <div className="container-luxe relative z-10">
            <SectionHeading eyebrow="Our Process" title="The Alchemy of Planning" />

            <div className="mt-32 space-y-32 md:space-y-64">
              {steps.map((s, idx) => (
                <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}>
                  <div className="flex-1 relative group w-full">
                    <div className="absolute -inset-4 bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-white/10 shadow-2xl">
                      <img src={s.img} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt={s.t} />
                      <div className="absolute inset-0 bg-bg-main/20 group-hover:bg-transparent transition-colors duration-700" />
                    </div>
                    <div className="absolute -bottom-10 -right-6 md:-right-12 font-display text-8xl md:text-[180px] text-white/5 group-hover:text-gold/20 transition-all duration-700 pointer-events-none select-none italic">
                      {s.n}
                    </div>
                  </div>

                  <div className="flex-1 max-w-xl text-center md:text-left">
                    <div className="gold-divider !justify-center md:!justify-start mb-8">
                      <span className="eyebrow text-gold">Phase {s.n}</span>
                    </div>
                    <h3 className="font-display text-4xl md:text-6xl text-white mb-8 leading-[1.1]">{s.t}</h3>
                    <p className="!text-white/80 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-md">
                      {s.d}
                    </p>
                    <div className="h-px w-24 bg-gold/30 mx-auto md:mx-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-bg-accent py-32 md:py-56 relative overflow-hidden">
          <div className="container-luxe relative z-10">
            <SectionHeading eyebrow="Our Aesthetic" title="The Language of Color" />
            <div className="mt-20 grid lg:grid-cols-3 gap-1px bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
              {palette.map((item) => (
                <div key={item.name} className="group relative bg-bg-main p-12 lg:p-16 min-h-[500px] flex flex-col justify-between overflow-hidden transition-all duration-700">
                  <div className={`absolute top-0 right-0 w-32 h-32 ${item.color} opacity-20 blur-[60px] group-hover:opacity-40 transition-opacity`} />
                  
                  <div className="relative z-10">
                    <div className={`w-4 h-24 ${item.color} mb-8 rounded-full`} />
                    <h3 className="font-display text-4xl text-white mb-2">{item.name}</h3>
                    <div className="text-gold eyebrow text-xs tracking-[0.3em] uppercase">{item.feeling}</div>
                  </div>

                  <div className="relative z-10">
                    <p className="text-white/60 font-light leading-relaxed mb-8 max-w-xs group-hover:text-white/90 transition-colors">
                      {item.desc}
                    </p>
                    <div className="h-px w-12 bg-white/20 group-hover:w-full transition-all duration-700" />
                  </div>

                  {/* HOVER IMAGE PREVIEW */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 scale-110 group-hover:scale-100 transition-all duration-1000 pointer-events-none">
                    <img src={item.img} className="w-full h-full object-cover" alt={item.name} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy-deep text-ivory overflow-hidden relative">
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

        <section className="relative overflow-hidden bg-bg-main border-t border-white/5">
          <div className="grid lg:grid-cols-12 min-h-[600px]">
            {/* TEXT SIDE */}
            <div className="lg:col-span-5 flex flex-col justify-center p-10 md:p-20 relative z-10 bg-bg-main">
              <div className="gold-divider mb-8 !justify-start">
                <span className="eyebrow">The Next Chapter</span>
              </div>
              <h2 className="font-display text-6xl md:text-8xl text-white leading-[0.9] tracking-tighter mb-12">
                Plan your <br />
                <span className="italic text-gold">event</span> <br />
                with us.
              </h2>
              <div className="flex flex-col sm:flex-row gap-6">
                <CtaButton 
                  to="/contact" 
                  variant="outline" 
                  className="!rounded-none !px-12 !py-6 !text-gold !border-gold hover:!bg-gold hover:!text-bg-main font-bold tracking-[0.2em] transition-all duration-500 w-full sm:w-auto text-center"
                >
                  BEGIN THE JOURNEY
                </CtaButton>
              </div>
              <p className="mt-12 text-white/40 text-sm uppercase tracking-widest font-light">
                Serving the Elite of Delhi NCR & Surajkund
              </p>
            </div>

            {/* IMAGE SIDE */}
            <div className="lg:col-span-7 relative min-h-[400px] lg:min-h-full overflow-hidden">
              <img 
                src={ctaJourney} 
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100" 
                alt="Luxury Event Journey" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-bg-main via-bg-main/20 to-transparent" />
              <div className="absolute inset-0 border-l border-white/10 hidden lg:block" />
            </div>
          </div>
          
          {/* DECORATIVE BACKGROUND TEXT */}
          <div className="decorative-text bottom-0 left-0 opacity-[0.02] -translate-x-1/4 translate-y-1/4 rotate-12">JOURNEY</div>
        </section>
      </div>
    </Layout>
  );
}
