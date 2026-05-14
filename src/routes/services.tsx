import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaButton } from "@/components/site/CtaButton";
import { Check, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import wedding from "@/assets/wedding-decor.jpg";
import corporate from "@/assets/corporate-event.jpg";
import privateImg from "@/assets/private-celebration.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g1 from "@/assets/gallery-1.jpg";
import alchemyEnquiry from "@/assets/alchemy-enquiry.png";
import alchemyConsultation from "@/assets/alchemy-consultation.png";
import alchemyPlanning from "@/assets/alchemy-planning.png";
import alchemyExecution from "@/assets/alchemy-execution.png";
import alchemyFollowup from "@/assets/alchemy-followup.png";
import ctaJourney from "@/assets/cta-journey.png";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Luxury Event Planning, Decor & Coordination | RS Group Events" },
      {
        name: "description",
        content:
          "Wedding planning, corporate events, decoration, private celebrations and on-ground coordination across Delhi NCR.",
      },
      { property: "og:title", content: "Luxury Event Services in Delhi NCR" },
      { property: "og:description", content: "End-to-end planning, decor and coordination — bespoke for every event." },
      { property: "og:image", content: wedding },
    ],
  }),
  component: ServicesPage,
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How far in advance should we book a wedding planner in Delhi NCR?",
      "acceptedAnswer": { "@type": "Answer", "text": "For weddings, 6–12 months ahead is ideal. During peak season (November–February), we recommend 12–18 months. For corporate and private events, 4–8 weeks is comfortable." }
    },
    {
      "@type": "Question",
      "name": "How much does luxury wedding planning cost in Delhi NCR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Fees depend on event scale and services. RS Group offers modular packages — from day-of coordination to full-service planning — tailored to your budget and vision. Contact us for a bespoke quote." }
    },
    {
      "@type": "Question",
      "name": "Do you handle smaller, intimate events?",
      "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We design with the same care for an intimate 30-guest dinner as for a 1,000-guest wedding." }
    },
    {
      "@type": "Question",
      "name": "Which cities do you serve?",
      "acceptedAnswer": { "@type": "Answer", "text": "Surajkund, Faridabad, South Delhi, Gurgaon, Noida, Greater Noida, Ghaziabad, and across Delhi NCR. We also manage destination weddings across India and internationally." }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a wedding planner and a decorator?",
      "acceptedAnswer": { "@type": "Answer", "text": "A decorator focuses on visual design — florals, lighting, and staging. A planner manages the entire event lifecycle: vendor coordination, timelines, hospitality, and day-of execution. RS Group provides both under one roof." }
    },
    {
      "@type": "Question",
      "name": "Can I hire RS Group for day-of coordination only?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer modular packages including day-of coordination, where our team manages every vendor, timeline cue, and detail while you celebrate." }
    }
  ]
};

const detail = [
  {
    img: wedding,
    eyebrow: "Wedding Planning",
    title: "Weddings designed around your love story",
    desc: "From the mandap to the morning farewell — we plan, style and coordinate every ritual with precision and warmth.",
    bullets: ["Stage & Mandap design", "Floral & decor styling", "Vendor coordination", "Guest journey & hospitality"],
  },
  {
    img: corporate,
    reverse: true,
    eyebrow: "Corporate Events",
    title: "Brand experiences that make an impression",
    desc: "Product launches, conferences, gala dinners and team celebrations — executed with corporate discipline and creative flair.",
    bullets: ["Launches & conferences", "Award nights & galas", "Team off-sites & retreats", "Brand activations"],
  },
  {
    img: g4,
    eyebrow: "Decoration Services",
    title: "Decor that transforms a space",
    desc: "Our in-house design studio creates original concepts in florals, fabric, light and form.",
    bullets: ["Stage & backdrop design", "Floral installations", "Entrance & walkways", "Table styling & lighting"],
  },
  {
    img: privateImg,
    reverse: true,
    eyebrow: "Private Celebrations",
    title: "Intimate moments, beautifully styled",
    desc: "Birthdays, anniversaries, festive parties and milestone celebrations — designed for closeness and joy.",
    bullets: ["Custom themes & decor", "Curated catering partners", "Entertainment & music", "Photography coordination"],
  },
  {
    img: g3,
    eyebrow: "On-Ground Coordination",
    title: "Calm command on the day itself",
    desc: "While you celebrate, our team manages every vendor, every cue and every detail.",
    bullets: ["Vendor management", "Run-of-show timeline", "Setup & breakdown supervision", "On-site problem solving"],
  },
];

const alchemySteps = [
  { 
    n: "01", 
    title: "Enquiry", 
    img: alchemyEnquiry, 
    desc: "Your journey begins with a conversation about your vision and requirements." 
  },
  { 
    n: "02", 
    title: "Consultation", 
    img: alchemyConsultation, 
    desc: "A deep dive into your aesthetic preferences, guest count, and lifestyle." 
  },
  { 
    n: "03", 
    title: "Planning", 
    img: alchemyPlanning, 
    desc: "Architectural floor plans, floral selections, and precise vendor curation." 
  },
  { 
    n: "04", 
    title: "Execution", 
    img: alchemyExecution, 
    desc: "Our on-ground team orchestrates every detail while you celebrate." 
  },
  { 
    n: "05", 
    title: "Follow-up", 
    img: alchemyFollowup, 
    desc: "Ensuring every memory is preserved and every expectation exceeded." 
  }
];

const faqs = [
  {
    q: "How far in advance should we book a wedding planner?",
    a: "For weddings, 6–12 months ahead is ideal. During peak season (November–February), we recommend 12–18 months to secure your preferred vendors and venues. For corporate and private events, 4–8 weeks is comfortable.",
  },
  {
    q: "How much does luxury wedding planning cost in Delhi NCR?",
    a: "Fees depend on event scale and services required. RS Group offers modular packages — from day-of coordination to full-service production — tailored to your budget and vision. Contact us for a bespoke quote.",
  },
  {
    q: "Do you handle smaller, intimate events?",
    a: "Absolutely. We design with the same care for an intimate 30-guest dinner as for a 1,000-guest wedding.",
  },
  { q: "Which cities do you serve?", a: "Surajkund, Faridabad, South Delhi, Gurgaon, Noida, Greater Noida, Ghaziabad, and across Delhi NCR. We also manage destination weddings across India and internationally." },
  {
    q: "What is the difference between a wedding planner and a decorator?",
    a: "A decorator focuses on visual design — florals, lighting, and staging. A planner manages the entire event lifecycle: vendor coordination, timelines, hospitality, and day-of execution. RS Group provides both under one roof.",
  },
  {
    q: "Can I hire you for day-of coordination only?",
    a: "Yes. We offer modular packages including day-of coordination, where our team manages every vendor, timeline cue, and detail while you celebrate.",
  },
];

function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx: gsap.Context;

    // Add a tiny delay to ensure fonts and layout are ready
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        // Reveal service sections
        gsap.utils.toArray<HTMLElement>(".service-section").forEach((section) => {
          const image = section.querySelector(".service-image");
          const content = section.querySelector(".service-content");

          gsap.from(image, {
            scrollTrigger: { trigger: section, start: "top 80%" },
            x: section.classList.contains("reverse") ? 60 : -60,
            opacity: 0,
            duration: 1.4,
            ease: "power3.out",
            clearProps: "all"
          });

          gsap.from(content, {
            scrollTrigger: { trigger: section, start: "top 80%" },
            x: section.classList.contains("reverse") ? -60 : 60,
            opacity: 0,
            duration: 1.4,
            ease: "power3.out",
            clearProps: "all"
          });

          // Stagger bullets
          gsap.from(section.querySelectorAll("li"), {
            scrollTrigger: { trigger: section, start: "top 70%" },
            y: 20,
            opacity: 0,
            stagger: 0.08,
            duration: 0.8,
            delay: 0.4,
            clearProps: "all"
          });
        });

        // Animate steps
        gsap.from(".step-item", {
          scrollTrigger: { trigger: ".steps-container", start: "top 85%" },
          scale: 0.9,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          clearProps: "all"
        });

        // Alchemy Horizontal Scroll - Professional Implementation
        const trigger = document.querySelector(".alchemy-trigger") as HTMLElement;
        const track = document.querySelector(".alchemy-track") as HTMLElement;
        
        if (trigger && track) {
          // MASTER PINNING TIMELINE
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".alchemy-trigger",
              pin: true,
              scrub: 1,
              start: "top top",
              // Dynamic end based on actual content width
              end: () => `+=${track.scrollWidth}`,
              invalidateOnRefresh: true,
              anticipatePin: 1,
              // Use transform for pinning if Lenis is active to avoid 'fixed' context bugs
              pinType: "transform", 
              onUpdate: (self) => {
                gsap.set(".alchemy-progress-bar", { scaleX: self.progress });
              }
            }
          });

          // 1. Move the track horizontally
          tl.to(track, {
            x: () => -(track.scrollWidth - window.innerWidth),
            ease: "none",
          });

          // 2. Individual Card Reveal (Cool Rotation/Scale effect)
          const cards = gsap.utils.toArray<HTMLElement>(".alchemy-card");
          cards.forEach((card) => {
            gsap.from(card, {
              scrollTrigger: {
                trigger: card,
                containerAnimation: tl,
                start: "left 90%",
                toggleActions: "play none none reverse",
              },
              rotateY: 25,
              scale: 0.9,
              opacity: 0,
              duration: 0.6,
              ease: "power2.out"
            });
          });

          // Parallax background text
          gsap.to(".alchemy-bg-text", {
            x: -500,
            scrollTrigger: {
              trigger: ".alchemy-trigger",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            }
          });

          // Professional Refresh Management
          ScrollTrigger.refresh();
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, 100);
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, 500);
        }
      }, containerRef);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <Layout>
      <div ref={containerRef}>
        <PageHero
          eyebrow="Services"
          title={
            <span className="services-main-title !text-white !opacity-100 drop-shadow-2xl">
              Luxury event services in <span className="italic !text-gold !opacity-100">Delhi NCR</span>
            </span>
          }
          subtitle={
            <span className="!text-white/90 !opacity-100 drop-shadow-lg">
              Weddings · Corporate · Decor · Private Celebrations · On-Ground Coordination
            </span>
          }
          image={g1}
        >
          <CtaButton to="/contact" variant="gold">
            Book Consultation
          </CtaButton>
          <CtaButton to="/gallery" variant="outline">
            View Our Work
          </CtaButton>
        </PageHero>

        {detail.map((d, i) => (
          <section
            key={d.title}
            className={`service-section relative overflow-hidden py-24 md:py-40 ${i % 2 === 1 ? "bg-pale-gold/10" : ""} ${d.reverse ? "reverse" : ""}`}
          >
            <div className="decorative-text -top-10 -left-10 opacity-[0.02] pointer-events-none select-none">{d.eyebrow.split(' ')[0].toUpperCase()}</div>
            <div
              className={`container-luxe grid md:grid-cols-2 gap-16 md:gap-24 items-center ${d.reverse ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="service-image relative group">
                <div className="absolute inset-0 bg-gold/10 -rotate-3 rounded-2xl group-hover:rotate-0 transition-transform duration-500" />
                <img
                  src={d.img}
                  alt={d.title}
                  className="relative w-full h-[500px] object-cover rounded-2xl shadow-xl transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="service-content space-y-8">
                <div className="gold-divider !justify-start">
                  <span className="eyebrow">{d.eyebrow}</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">{d.title}</h2>
                <p className="text-white/80 text-lg leading-relaxed font-light">{d.desc}</p>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {d.bullets.map((b) => (
                    <li key={b} className="flex gap-3 items-center text-white/80">
                      <div className="h-2 w-2 rounded-full bg-gold shrink-0" />
                      <span className="text-base font-light tracking-wide">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}

        {/* PROCESS - HORIZONTAL SCROLL WRAPPER */}
        <section className="alchemy-trigger bg-bg-main relative border-t border-white/5">
          <div className="h-screen sticky top-0 flex flex-col justify-center overflow-hidden">
            {/* DECORATIVE BG */}
            <div className="alchemy-bg-text absolute top-1/2 left-0 -translate-y-1/2 font-display text-[40vw] text-white/[0.01] whitespace-nowrap pointer-events-none select-none z-0 uppercase tracking-tighter">
              The Alchemy of Events
            </div>

            <div className="relative z-10 w-full">
              <div className="container-luxe mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="max-w-2xl">
                  <SectionHeading eyebrow="The RS Methodology" title="The Alchemy of an Event" bgText="PROCESS" light align="left" />
                </div>
                <div className="hidden md:flex flex-col items-end gap-4 pb-4">
                  <div className="text-[10px] uppercase tracking-[0.4em] text-gold/60">Scroll Down to Explore</div>
                  <div className="h-10 w-px bg-gradient-to-b from-gold to-transparent animate-bounce" />
                </div>
              </div>
              
              <div className="alchemy-track flex gap-12 px-[10vw] md:px-[15vw] w-max">
              {alchemySteps.map((s) => (
                <div key={s.title} className="alchemy-card group relative flex-shrink-0 w-[75vw] md:w-[50vw] lg:w-[40vw] h-[60vh] md:h-[65vh] overflow-hidden rounded-sm border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl transition-all duration-700 hover:border-gold/40">
                  <img src={s.img} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" alt={s.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/30 to-transparent" />
                  
                  {/* STEP NUMBER */}
                  <div className="absolute top-12 left-12">
                    <span className="font-display text-8xl md:text-[12rem] text-white/5 group-hover:text-gold/10 transition-colors duration-1000 select-none leading-none">{s.n}</span>
                  </div>

                  <div className="absolute inset-0 p-10 md:p-16 flex flex-col justify-end">
                    <div className="gold-divider !justify-start mb-6">
                      <span className="eyebrow !text-gold tracking-[0.4em]">PHASE {s.n}</span>
                    </div>
                    <h3 className="font-display text-5xl md:text-6xl text-white mb-6 leading-tight tracking-tight">{s.title}</h3>
                    <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed max-w-md group-hover:text-white transition-all duration-700">
                      {s.desc}
                    </p>
                    <div className="mt-12 h-px w-12 bg-gold/50 group-hover:w-full transition-all duration-1000" />
                  </div>
                </div>
              ))}

              {/* FINAL CTA CARD */}
              <div className="alchemy-card flex-shrink-0 w-[80vw] md:w-[50vw] lg:w-[40vw] h-[60vh] md:h-[65vh] overflow-hidden rounded-sm border-2 border-gold/20 bg-gold/5 p-8 md:p-12 flex flex-col justify-center items-center text-center backdrop-blur-md">
                <div className="space-y-6 mb-8">
                  <div className="h-12 w-px bg-gold/30 mx-auto" />
                  <h3 className="font-display text-4xl md:text-6xl text-white italic leading-tight">Your masterpiece <br /> starts here.</h3>
                </div>
                <CtaButton to="/contact" variant="gold" className="px-12 py-6 !rounded-none shadow-[0_0_50px_rgba(212,175,55,0.1)]">
                  BOOK YOUR DATE
                </CtaButton>
              </div>
            </div>

            {/* PROGRESS INDICATOR */}
            <div className="absolute bottom-12 left-[10vw] right-[10vw] h-px bg-white/10 z-20 overflow-hidden">
              <div className="alchemy-progress-bar absolute top-0 left-0 w-full h-full bg-gold origin-left scale-x-0" />
            </div>
            </div>
          </div>
        </section>

        {/* FAQ + CTA */}
        <section className="container-luxe py-32 md:py-48 grid lg:grid-cols-2 gap-20 items-start" data-animate>
          <div className="space-y-16">
            <SectionHeading eyebrow="FAQ" title="Common queries" align="left" bgText="HELP" />
            <div className="space-y-8">
              {faqs.map((f) => (
                <details key={f.q} className="group glass-card border border-border/20 overflow-hidden cursor-pointer hover:border-gold/30 transition-all duration-500">
                  <summary className="font-display text-2xl text-text-main p-8 list-none flex justify-between items-center bg-white/5 hover:bg-gold/5 transition-colors">
                    {f.q}
                    <div className="h-10 w-10 rounded-full border border-gold/30 flex items-center justify-center group-open:rotate-180 transition-all duration-500">
                      <ChevronRight size={20} className="text-gold rotate-90" />
                    </div>
                  </summary>
                  <div className="p-8 pt-0 border-t border-border/10">
                    <p className="text-text-muted text-lg leading-relaxed font-light mt-8">{f.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
          <div className="glass-card p-12 md:p-24 flex flex-col justify-center relative overflow-hidden group border-gold/20 hover:border-gold/40 transition-all duration-1000 min-h-[600px]">
            {/* BACKGROUND IMAGE WITH OVERLAY */}
            <div className="absolute inset-0 z-0">
              <img 
                src={ctaJourney} 
                className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-1000" 
                alt="Begin your journey"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-bg-main via-bg-main/80 to-transparent z-10" />
            </div>

            <div className="relative z-20 space-y-10">
              <div className="eyebrow text-gold tracking-[0.3em]">Ready to begin?</div>
              <h3 className="font-display text-5xl md:text-7xl text-text-main leading-tight italic">
                Let's design something <span className="text-gold">unforgettable</span>.
              </h3>
              <p className="text-text-muted text-xl font-light">Free consultation. No obligations.</p>
              <div className="pt-8">
                <CtaButton to="/contact" variant="navy" className="w-full sm:w-auto px-12 py-5 scale-110">
                  Book Consultation
                </CtaButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
