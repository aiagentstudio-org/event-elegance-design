import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PageHero } from "@/components/site/PageHero";
import { ShieldCheck, Zap, Heart } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import teamImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet the Team — RS Group Events | Luxury Planners" },
      { name: "description", content: "The visionary artisans and meticulous planners behind RS Group Events." },
    ],
  }),
  component: TeamPage,
});

const values = [
  { icon: Heart, title: "Heart-Led", desc: "We don't just plan events; we care for your memories." },
  { icon: Zap, title: "Artistic Edge", desc: "Pushing the boundaries of conventional event decor." },
  { icon: ShieldCheck, title: "Absolute Trust", desc: "A decades-long reputation for reliability and excellence." },
];

const teamMembers = [
  { name: "Rajiv Sharma", role: "Creative Director", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
  { name: "Sonia Kapoor", role: "Lead Wedding Planner", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop" },
  { name: "Amit Verma", role: "Head of Operations", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop" },
  { name: "Neha Singh", role: "Floral Designer", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop" },
];

function TeamPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Hero Title Animation
      const heroTitle = new SplitType(".hero-title", { types: "chars,words" });
      gsap.from(heroTitle.chars, {
        y: 40,
        opacity: 0,
        rotateX: -45,
        stagger: 0.02,
        duration: 1,
        ease: "power4.out",
        delay: 0.2
      });

      // Founder Image Parallax
      gsap.to(".founder-image", {
        scrollTrigger: {
          trigger: ".founder-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        },
        y: -50,
        ease: "none"
      });

      // Values Stagger
      gsap.from(".value-card", {
        scrollTrigger: {
          trigger: ".values-grid",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out"
      });

      // Team Members Stagger
      gsap.from(".team-card", {
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 80%",
        },
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out"
      });

      // Generic Reveal for Sections
      const revealSections = document.querySelectorAll("[data-reveal]");
      revealSections.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power2.out"
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      <div ref={containerRef}>
        <PageHero 
          title={<span className="hero-title">The Artisans</span>} 
          subtitle="Meet the visionary team behind the region's most celebrated events." 
          image={teamImg} 
        />

        {/* FOUNDER SPOTLIGHT */}
        <section className="container-luxe py-20 md:py-32 founder-section overflow-hidden">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative perspective-container" data-reveal>
              <div className="isometric-card overflow-hidden glass-card p-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                  alt="Founder" 
                  className="founder-image w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                />
              </div>
              <div className="absolute -top-10 -left-10 bg-gold text-navy p-8 glass-card hidden lg:block z-20">
                <div className="font-display text-4xl leading-tight italic">"Design is not just what it looks like, it's how it feels."</div>
              </div>
            </div>
            <div data-reveal>
              <div className="gold-divider mb-6 !justify-start"><span className="eyebrow">The Visionary</span></div>
              <h2 className="font-display text-5xl md:text-6xl text-navy">Rajesh Singh</h2>
              <p className="mt-8 text-xl text-charcoal/80 leading-relaxed font-light">
                With over 15 years in the hospitality and luxury sector, Rajesh founded RS Group with a singular mission: to bring world-class event production to Delhi NCR.
              </p>
              <p className="mt-6 text-charcoal/70 leading-relaxed">
                His eye for detail and uncompromising standard for excellence have made RS Group a name synonymous with prestige. Rajesh personally oversees the creative direction of every major project, ensuring the RS signature is present in every floral arrangement and lighting cue.
              </p>
              <div className="mt-12 flex items-center gap-6">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Jon_Kirsch%27s_Signature.png" alt="Signature" className="h-16 opacity-60 invert dark:invert-0" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-gold font-bold">Rajesh Singh</div>
                  <div className="text-[10px] uppercase tracking-widest text-charcoal/50 mt-1">Founder & CEO, RS Group</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE ARTISAN COLLECTIVE */}
        <section className="bg-navy py-32 md:py-48 relative overflow-hidden" data-animate>
          <div className="container-luxe">
            <div className="max-w-2xl mb-24">
               <div className="gold-divider !justify-start mb-10"><span className="eyebrow text-gold/60">Our Network</span></div>
               <h2 className="font-display text-5xl md:text-7xl text-white tracking-tighter leading-tight">
                 The Artisan <br />
                 <span className="italic text-gold">Collective.</span>
               </h2>
               <p className="mt-8 text-white/50 text-xl leading-relaxed font-light">
                 RS Group isn't just a team; it's a curated hub of the world's most talented florists, set designers, and lighting technicians.
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-white/10 border border-white/10">
               {[
                 { role: "Visual Artists", count: "12+", desc: "Sculpting light and space" },
                 { role: "Floral Architects", count: "08", desc: "Organic structural design" },
                 { role: "Logistic Strategists", count: "15", desc: "The precision engine" },
                 { role: "Storytellers", count: "05", desc: "Capturing the intangible" }
               ].map((item, idx) => (
                 <div key={idx} className="bg-navy p-12 hover:bg-navy-deep transition-colors group">
                    <div className="text-gold font-display text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">{item.count}</div>
                    <div className="text-white text-lg font-medium mb-2">{item.role}</div>
                    <div className="text-white/40 text-sm">{item.desc}</div>
                 </div>
               ))}
            </div>
          </div>
          <div className="decorative-text -bottom-10 right-0 opacity-[0.03]">CRAFT</div>
        </section>

        {/* CORE VALUES */}
        <section className="bg-navy py-24 text-ivory relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="container-luxe relative z-10">
            <div className="grid md:grid-cols-3 gap-12 values-grid">
              {values.map((v, i) => (
                <div key={i} className="value-card group p-10 glass-card border-gold/10 hover:border-gold/40 transition-all duration-500">
                  <div className="h-16 w-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-500">
                    <v.icon className="text-gold group-hover:text-navy" size={32} />
                  </div>
                  <h3 className="font-display text-3xl mb-4">{v.title}</h3>
                  <p className="text-ivory/60 leading-relaxed text-sm">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM GRID */}
        <section className="container-luxe py-20 md:py-32">
          <SectionHeading 
            eyebrow="Our Experts" 
            title="Mastering the craft of celebration" 
            subtitle="A collective of designers, planners, and strategists working in harmony." 
          />
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 team-grid">
            {teamMembers.map((member, i) => (
              <div key={i} className="team-card group relative">
                <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 glass-card p-2">
                  <img src={member.img} alt={member.name} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="mt-6 text-center">
                  <h4 className="text-xl text-navy font-display">{member.name}</h4>
                  <div className="h-px w-8 bg-gold/30 mx-auto my-3" />
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RECOGNITION */}
        <section className="bg-pale-gold/20 py-20 border-t border-border" data-reveal>
          <div className="container-luxe text-center">
            <p className="eyebrow mb-12">Global Recognition</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale">
              <span className="font-display text-2xl md:text-3xl tracking-tight">WeddingWire</span>
              <span className="font-display text-2xl md:text-3xl tracking-tight">Vogue Weddings</span>
              <span className="font-display text-2xl md:text-3xl tracking-tight">Condé Nast</span>
              <span className="font-display text-2xl md:text-3xl tracking-tight">ET Panache</span>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

