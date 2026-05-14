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
import founderImg from "@/assets/founder.jpeg";
import vElegance from "@/assets/values-elegance.png";
import vReliability from "@/assets/values-reliability.png";
import vCustomization from "@/assets/values-customization.png";
import vGuest from "@/assets/values-guest.png";
import pHeart from "@/assets/philosophy-heart.png";
import pArtistic from "@/assets/philosophy-artistic.png";
import pTrust from "@/assets/philosophy-trust.png";


export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet the Team — RS Group Events | Luxury Planners" },
      { name: "description", content: "The visionary artisans and meticulous planners behind RS Group Events." },
    ],
  }),
  component: TeamPage,
});

const philosophies = [
  { img: pHeart, title: "Heart-Led", desc: "We don't just plan events; we care for your memories. Every decision is filtered through the emotional heartbeat of your celebration.", tint: "from-rose-500/40" },
  { img: pArtistic, title: "Artistic Edge", desc: "Pushing the boundaries of conventional event decor. We architect spaces that challenge the expected and embrace the avant-garde.", tint: "from-emerald-500/40" },
  { img: pTrust, title: "Absolute Trust", desc: "A decades-long reputation for reliability and excellence. Our word is our bond, and our execution is our signature.", tint: "from-gold/40" },
];

// We use a collective of experts on a contract basis
const collectiveStats = [
  { role: "Visual Artists", count: "12+", desc: "Sculpting light and space" },
  { role: "Floral Architects", count: "08", desc: "Organic structural design" },
  { role: "Logistic Strategists", count: "15", desc: "The precision engine" },
  { role: "Storytellers", count: "05", desc: "Capturing the intangible" }
];

function TeamPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx: gsap.Context;

    // Add a tiny delay to ensure fonts and layout are ready
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
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
        // Generic Reveal for Sections
        const revealSections = document.querySelectorAll("[data-reveal]");
        revealSections.forEach((el) => {
          gsap.from(el, {
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            clearProps: "all"
          });
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
          title={
            <span className="team-main-title !text-white !opacity-100 drop-shadow-2xl">
              The Artisans
            </span>
          } 
          subtitle={
            <span className="!text-white/90 !opacity-100 drop-shadow-lg">
              Meet the visionary team behind the region's most celebrated events.
            </span>
          } 
          image={teamImg} 
        />

        {/* FOUNDER SPOTLIGHT */}
        <section className="container-luxe py-20 md:py-32 founder-section overflow-hidden">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative" data-reveal>
              <div className="overflow-hidden rounded-sm border border-white/10 shadow-2xl">
                <img 
                  src={founderImg} 
                  alt="Sanjeev - Founder" 
                  className="founder-image w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 md:-right-12 bg-gold text-navy p-6 md:p-10 shadow-2xl z-20 max-w-[280px] md:max-w-sm">
                <div className="font-display text-2xl md:text-3xl leading-tight italic">"Design is not just what it looks like, it's how it feels."</div>
                <div className="mt-4 h-px w-12 bg-navy/20" />
                <div className="mt-2 text-[10px] uppercase tracking-[0.3em] font-bold opacity-60 italic">— The RS Signature</div>
              </div>
            </div>
            <div data-reveal>
              <div className="gold-divider mb-6 !justify-start"><span className="eyebrow">The Visionary</span></div>
              <h2 className="font-display text-5xl md:text-6xl text-text-main">Sanjeev</h2>
              <p className="mt-8 text-xl text-text-muted leading-relaxed font-light">
                With over 15 years in the hospitality and luxury sector, Sanjeev founded RS Group with a singular mission: to bring world-class event production to Delhi NCR.
              </p>
              <p className="mt-6 text-text-muted leading-relaxed">
                His eye for detail and uncompromising standard for excellence have made RS Group a name synonymous with prestige. Sanjeev personally oversees the creative direction of every major project, ensuring the RS signature is present in every floral arrangement and lighting cue.
              </p>
              <div className="mt-12 flex items-center gap-6">
                <div className="h-16 w-32 border-b border-gold/30 flex items-center justify-center">
                  <span className="font-display text-2xl italic text-gold opacity-60">Sanjeev</span>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-gold font-bold">Sanjeev</div>
                  <div className="text-[10px] uppercase tracking-widest text-text-muted mt-1">Founder & CEO, RS Group</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE ARTISAN COLLECTIVE */}
        <section className="bg-bg-accent py-32 md:py-48 relative overflow-hidden">
          <div className="container-luxe">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="max-w-2xl">
                 <div className="gold-divider !justify-start mb-10"><span className="eyebrow text-gold/80">Our Network</span></div>
                 <h2 className="font-display text-5xl md:text-8xl text-white tracking-tighter leading-tight mb-8">
                   The Artisan <br />
                   <span className="italic text-gold">Collective.</span>
                 </h2>
                 <p className="text-white/80 text-xl leading-relaxed font-light">
                   RS Group isn't just a team; it's a curated hub of the region's most talented florists, set designers, and lighting technicians.
                 </p>
                 
                 <div className="mt-16 grid grid-cols-2 gap-px bg-white/10 border border-white/10">
                    {collectiveStats.map((item, idx) => (
                      <div key={idx} className="bg-bg-main p-8 hover:bg-white/5 transition-colors group">
                         <div className="text-gold font-display text-3xl mb-2 group-hover:scale-110 transition-transform origin-left">{item.count}</div>
                         <div className="text-white text-sm uppercase tracking-widest mb-1">{item.role}</div>
                         <div className="text-white/40 text-[10px]">{item.desc}</div>
                      </div>
                    ))}
                 </div>
              </div>

              {/* CREATIVE RIGHT SIDE: Bespoke Grid */}
              <div className="grid grid-cols-2 gap-4 h-full py-8">
                <div className="space-y-4">
                  <div className="aspect-[4/5] bg-bg-card overflow-hidden rounded-sm border border-white/5 grayscale hover:grayscale-0 transition-all duration-1000">
                    <img src={vElegance} className="w-full h-full object-cover" alt="Artisan 1" />
                  </div>
                  <div className="aspect-square bg-bg-card overflow-hidden rounded-sm border border-white/5 grayscale hover:grayscale-0 transition-all duration-1000">
                    <img src={vReliability} className="w-full h-full object-cover" alt="Artisan 2" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="aspect-square bg-bg-card overflow-hidden rounded-sm border border-white/5 grayscale hover:grayscale-0 transition-all duration-1000">
                    <img src={vCustomization} className="w-full h-full object-cover" alt="Artisan 3" />
                  </div>
                  <div className="aspect-[4/5] bg-bg-card overflow-hidden rounded-sm border border-white/5 grayscale hover:grayscale-0 transition-all duration-1000">
                    <img src={vGuest} className="w-full h-full object-cover" alt="Artisan 4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="decorative-text -bottom-10 right-0 opacity-[0.03]">CRAFT</div>
        </section>

        {/* CINEMATIC PHILOSOPHY */}
        <section className="bg-bg-main relative">
          {philosophies.map((p, i) => (
            <div key={i} className="relative min-h-[600px] md:min-h-[80vh] flex items-center overflow-hidden group border-b border-white/5">
              <div className="absolute inset-0">
                <img src={p.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" alt={p.title} />
                <div className={`absolute inset-0 bg-gradient-to-r ${p.tint} via-bg-main/90 to-bg-main`} />
              </div>
              
              <div className="container-luxe relative z-10 py-20">
                <div className="max-w-2xl" data-reveal>
                  <div className="font-display text-[8rem] md:text-[12rem] text-white/5 absolute -top-16 -left-10 select-none pointer-events-none group-hover:text-gold/10 transition-colors duration-1000">
                    0{i + 1}
                  </div>
                  <h3 className="font-display text-5xl md:text-8xl text-white mb-8 tracking-tighter leading-none">
                    {p.title}
                  </h3>
                  <p className="text-white/70 text-xl md:text-2xl font-light leading-relaxed max-w-xl">
                    {p.desc}
                  </p>
                  <div className="mt-12 h-px w-24 bg-gold group-hover:w-48 transition-all duration-700" />
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* COLLECTIVE IMAGE */}
        <section className="container-luxe py-20 md:py-32">
          <SectionHeading 
            eyebrow="The Collective" 
            title="A dynamic assembly of artisans" 
            subtitle="We maintain an elite network of contract-based specialists, refreshed every 2-3 years to ensure cutting-edge creativity and operational excellence." 
          />
            <div className="mt-20 relative group">
            <div className="aspect-[21/9] overflow-hidden rounded-2xl border border-white/5 shadow-2xl">
              <img 
                src={teamImg} 
                alt="RS Group Artisan Collective" 
                className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main/90 via-bg-main/40 to-transparent" />
            </div>
            <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row justify-between items-end md:items-center gap-6">
              <div className="max-w-xl">
                <h3 className="font-display text-4xl text-white mb-4 italic">Bespoke Talent Procurement</h3>
                <p className="text-white/80 leading-relaxed">
                  Every project at RS Group is unique. We don't believe in a one-size-fits-all team. Instead, we assemble a bespoke collective of artisans specifically chosen for the architectural and emotional requirements of your event.
                </p>
              </div>
              <div className="hidden md:block">
                <span className="px-6 py-3 rounded-full border border-gold bg-gold/10 backdrop-blur-md text-gold text-[10px] uppercase tracking-[0.3em] font-bold shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  Refreshed Bi-Annually
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* RECOGNITION */}
        <section className="bg-bg-accent py-20 border-t border-white/5 overflow-hidden relative">
          <div className="container-luxe text-center">
            <p className="eyebrow mb-12">Regional Prestige</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              <span className="font-display text-2xl md:text-3xl tracking-tight text-white/60">Delhi NCR Planners</span>
              <span className="font-display text-2xl md:text-3xl tracking-tight text-white/60">Surajkund Elite</span>
              <span className="font-display text-2xl md:text-3xl tracking-tight text-white/60">Faridabad Luxury</span>
              <span className="font-display text-2xl md:text-3xl tracking-tight text-white/60">ET Panache</span>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

