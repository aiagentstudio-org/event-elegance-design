import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaButton } from "@/components/site/CtaButton";
import { Crown, Sparkles, MapPin, Heart, Briefcase, PartyPopper, Star, Quote } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

import heroImg from "@/assets/hero-wedding.jpg";
import weddingDecor from "@/assets/wedding-decor.jpg";
import corporate from "@/assets/corporate-event.jpg";
import privateImg from "@/assets/private-celebration.jpg";
import about from "@/assets/about-team.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RS Group Events — Luxury Wedding & Corporate Event Planners in Delhi NCR" },
      { name: "description", content: "Award-winning luxury event planners in Surajkund, Delhi NCR. Weddings, corporate events and private celebrations crafted in exquisite detail." },
      { property: "og:title", content: "RS Group Events — Luxury Event Planners Delhi NCR" },
      { property: "og:description", content: "Weddings, corporate galas and private celebrations across Delhi NCR." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { n: "500+", l: "Events Organised" },
  { n: "12", l: "Years Experience" },
  { n: "300+", l: "Happy Couples" },
  { n: "8", l: "Cities Served" },
];

const services = [
  { icon: Heart, title: "Weddings", desc: "Bespoke wedding design — from intimate ceremonies to grand celebrations." },
  { icon: Briefcase, title: "Corporate Events", desc: "Launches, conferences, dinners and brand experiences with precision." },
  { icon: PartyPopper, title: "Private Celebrations", desc: "Birthdays, anniversaries and festive parties styled with elegance." },
];

const testimonials = [
  { name: "Aanya & Rohan", event: "Wedding · Surajkund", quote: "RS Group turned our wedding into a dream. Every detail, from the floral mandap to the guest experience, was flawless." },
  { name: "Karan Mehta", event: "Corporate Gala · Gurgaon", quote: "Professional, creative and remarkably calm under pressure. Our launch event was the talk of the industry." },
  { name: "Priya S.", event: "Anniversary · Delhi", quote: "An evening we will never forget. The attention to detail was simply exquisite." },
];

const galleryImgs = [g1, g2, g3, g4, weddingDecor, corporate];

function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Hero Animation
      const heroTitle = new SplitType(".hero-title", { types: "lines,words" });
      gsap.from(heroTitle.words, {
        y: 60,
        opacity: 0,
        rotateX: -30,
        stagger: 0.05,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.4
      });

      gsap.from(".hero-sub", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out",
        delay: 1.2
      });

      gsap.from(".hero-cta", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out",
        delay: 1.4
      });

      // Stats Counting Effect (Simplified)
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 85%",
        },
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out"
      });

      // Section Reveals
      const revealSections = document.querySelectorAll("[data-animate]");
      revealSections.forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });

      // Parallax on Gallery
      const galleryItems = document.querySelectorAll(".gallery-item");
      galleryItems.forEach((item) => {
        gsap.to(item.querySelector("img"), {
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          },
          y: -60,
          ease: "none"
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      <div ref={containerRef}>
        {/* HERO */}
        <section className="relative isolate overflow-hidden -mt-20">
          <img src={heroImg} alt="Luxury wedding stage" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/90 via-navy-deep/50 to-navy-deep/95" />
          <div className="relative container-luxe min-h-[100vh] flex flex-col justify-center pt-24 pb-20 text-center">
            <div className="gold-divider mx-auto mb-6"><span className="eyebrow">The Silent Architect of Grandeur</span></div>
            <h1 className="hero-title font-display text-5xl md:text-9xl text-ivory leading-[1.05] max-w-6xl mx-auto">
              Crafting Memories <br />
              <span className="italic text-gold">that last a lifetime.</span>
            </h1>
            <p className="hero-sub mt-8 max-w-2xl mx-auto text-ivory/80 text-lg md:text-xl font-light">
              Bespoke weddings, corporate galas and private celebrations — designed in exquisite detail across Surajkund and Delhi NCR.
            </p>
            <div className="hero-cta mt-12 flex flex-wrap justify-center gap-4">
              <CtaButton to="/contact" variant="gold" className="px-10 py-5">Book Consultation</CtaButton>
              <CtaButton to="/gallery" variant="outline" className="px-10 py-5">View Portfolio</CtaButton>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-pulse">
            <div className="text-[10px] uppercase tracking-[0.4em] text-ivory">Scroll</div>
            <div className="w-px h-12 bg-ivory" />
          </div>
        </section>

        {/* STATS */}
        <section className="bg-navy text-ivory relative z-10 stats-section border-y border-white/5">
          <div className="container-luxe py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.l} className="stat-item group">
                <div className="font-display text-5xl md:text-7xl text-gold transition-transform duration-700 group-hover:scale-110">{s.n}</div>
                <div className="mt-3 text-[10px] uppercase tracking-[0.3em] text-ivory/50 font-bold">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="container-luxe py-20 md:py-32" data-animate>
          <SectionHeading eyebrow="Our Core" title="Bespoke Event Architecture" subtitle="We specialize in events that demand perfection, creativity, and flawless execution." />
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="group glass-card p-10 border border-white/5 hover:border-gold transition-all duration-1000 hover:-translate-y-4">
                <div className="h-16 w-16 rounded-full bg-gold/10 flex items-center justify-center mb-8 group-hover:bg-gold transition-colors duration-700">
                  <s.icon className="text-gold group-hover:text-navy" size={30} />
                </div>
                <h3 className="text-3xl font-display text-navy">{s.title}</h3>
                <p className="mt-6 text-charcoal/70 text-sm leading-relaxed">{s.desc}</p>
                <div className="h-px w-12 bg-gold/30 mt-8 mb-4 group-hover:w-full transition-all duration-700" />
                <Link to="/services" className="inline-block text-[10px] uppercase tracking-[0.4em] text-gold font-bold">Discover More</Link>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT SNAPSHOT */}
        <section className="bg-pale-gold/20 overflow-hidden" data-animate>
          <div className="container-luxe py-20 md:py-32 grid md:grid-cols-2 gap-20 items-center">
            <div className="relative perspective-container">
              <div className="isometric-card glass-card p-3">
                <img src={about} alt="RS Group Events team" className="w-full h-[600px] object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-10 -right-10 hidden lg:block bg-navy text-ivory p-10 max-w-[260px] glass-card border-gold/20 shadow-2xl z-20">
                <div className="font-display text-6xl text-gold">12+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] mt-3 font-bold text-ivory/60">Years of Masterful Craftsmanship</div>
              </div>
            </div>
            <div>
              <div className="gold-divider mb-8 !justify-start"><span className="eyebrow">The Studio</span></div>
              <h2 className="font-display text-5xl md:text-7xl text-navy leading-[1.1]">Where every detail <br/> becomes a legacy.</h2>
              <p className="mt-10 text-lg text-charcoal/70 leading-relaxed font-light">
                Founded on the principles of architectural precision and artistic flair, RS Group Events is a boutique production studio. We don't just plan; we curate. Every texture, every lighting cue, and every guest interaction is designed to evoke a sense of wonder.
              </p>
              <div className="mt-12"><CtaButton to="/about" variant="navy" className="px-12">Our Story</CtaButton></div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="container-luxe py-20 md:py-32" data-animate>
          <SectionHeading eyebrow="The Portfolio" title="Exquisite Moments" subtitle="A collection of recent celebrations that define our signature aesthetic." />
          <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {galleryImgs.map((src, i) => (
              <Link to="/gallery" key={i} className={`relative overflow-hidden group gallery-item glass-card p-1 ${i === 0 ? "md:row-span-2 md:col-span-2 aspect-square md:aspect-auto" : "aspect-[4/5]"}`}>
                <div className="h-full w-full overflow-hidden">
                  <img src={src} alt="Event" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
                </div>
                <div className="absolute inset-0 bg-navy-deep/0 group-hover:bg-navy-deep/80 transition-all duration-700 flex flex-col items-center justify-center p-8 text-center">
                  <span className="text-gold text-[10px] uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-y-4 group-hover:translate-y-0">View Case Study</span>
                  <div className="h-px w-0 bg-gold/50 mt-4 group-hover:w-16 transition-all duration-700" />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-20 text-center"><CtaButton to="/gallery" variant="navy" className="px-14">Explore Full Portfolio</CtaButton></div>
        </section>

        {/* TESTIMONIALS */}
        <section className="relative overflow-hidden bg-navy-deep" data-animate>
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="container-luxe py-20 md:py-32 relative z-10">
            <SectionHeading eyebrow="Client Voice" title="Testimonials of Excellence" light />
            <div className="mt-20 grid md:grid-cols-3 gap-10">
              {testimonials.map((t) => (
                <div key={t.name} className="glass-card border-white/5 p-12 hover:border-gold/30 transition-all duration-700 relative">
                  <Quote className="text-gold opacity-20 absolute top-8 right-8" size={48} />
                  <p className="text-ivory/80 leading-relaxed italic font-display text-2xl">"{t.quote}"</p>
                  <div className="mt-10 flex items-center gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <div className="mt-6">
                    <div className="text-ivory text-sm font-bold tracking-widest">{t.name}</div>
                    <div className="text-gold/40 text-[9px] uppercase tracking-[0.4em] mt-2">{t.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="bg-gold relative overflow-hidden" data-animate>
          <div className="container-luxe py-28 text-center relative z-10">
            <h2 className="font-display text-5xl md:text-8xl text-navy leading-tight">Let's craft your <br/> next masterpiece.</h2>
            <p className="mt-8 text-navy/70 text-lg md:text-xl font-light">Available for exclusive bookings across Delhi NCR and destination weddings.</p>
            <div className="mt-14 flex flex-wrap justify-center gap-6">
              <CtaButton href="tel:+919876543210" variant="navy" className="px-12 py-5 shadow-2xl">Call Representative</CtaButton>
              <CtaButton to="/contact" variant="navy" className="!bg-navy-deep px-12 py-5 shadow-2xl">Send Inquiry</CtaButton>
            </div>
          </div>
          <div className="absolute top-0 right-0 h-full w-1/3 bg-white/5 -skew-x-12 translate-x-32" />
          <div className="absolute bottom-0 left-0 h-1/2 w-1/4 bg-navy/5 skew-x-12 -translate-x-20" />
        </section>
      </div>
    </Layout>
  );
}

