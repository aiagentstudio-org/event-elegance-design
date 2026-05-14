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
import venueHero from "@/assets/venue-hero.jpg";
import about from "@/assets/about-team.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import v6 from "@/assets/gallery-6.MOV";
import v12 from "@/assets/gallery-12.MOV";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RS Group Events | Luxury Wedding & Corporate Event Planners Delhi NCR" },
      { name: "description", content: "Award-winning luxury event planners in Delhi NCR. Specializing in bespoke weddings, high-end corporate galas, and elite private celebrations with architectural precision." },
      { name: "keywords", content: "luxury wedding planner delhi, corporate event organizers delhi, event management surajkund, luxury events ncr, rs group events" },
      { property: "og:title", content: "RS Group Events — The Architecture of Elite Celebrations" },
      { property: "og:description", content: "Bespoke luxury events designed in exquisite detail across Delhi, Noida, and Gurgaon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "RS Group Events",
          "url": "https://rsgroupevents.com",
          "logo": "https://rsgroupevents.com/assets/logo.png",
          "description": "Luxury wedding and corporate event planners in Delhi NCR.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Surajkund",
            "addressRegion": "Delhi NCR",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9953595353",
            "contactType": "customer service"
          }
        })
      }
    ]
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

const galleryImgs = [
  { src: v12, type: "video", alt: "Royal wedding entrance ceremony with floral arch" },
  { src: g2, type: "image", alt: "Luxury wedding reception table setting" },
  { src: g3, type: "image", alt: "Bespoke floral decoration at corporate gala" },
  { src: v6, type: "video", alt: "Cinematic wedding ceremony highlights" },
  { src: weddingDecor, type: "image", alt: "Luxury mandap wedding decoration design" },
  { src: corporate, type: "image", alt: "Corporate product launch event setup" }
];

function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero Animation - Targeted & Clean
      const hTitle = containerRef.current?.querySelector(".hero-title");
      if (hTitle) {
        const split = new SplitType(hTitle as HTMLElement, { types: "words,chars" });
        gsap.from(split.chars, {
          y: 40,
          opacity: 0,
          rotateX: -20,
          stagger: 0.02,
          duration: 1.2,
          ease: "power4.out",
          delay: 0.3
        });
      }

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
        <section className="relative isolate overflow-hidden min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img src={heroImg} alt="Luxury wedding stage" className="h-full w-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-bg-main via-transparent to-bg-main" />
          </div>

          <div className="relative z-10 container-luxe text-center">
            <div className="flex justify-center mb-8">
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] uppercase tracking-[0.4em] text-gold">
                Bespoke Event Design
              </span>
            </div>

            <h1 className="hero-title font-display text-7xl md:text-[10rem] leading-[0.9] tracking-tighter text-text-main">
              Crafting <br />
              <span className="text-white italic">Masterpieces.</span>
            </h1>

            <p className="hero-sub mt-12 max-w-2xl mx-auto text-text-muted text-xl md:text-2xl font-light">
              We design complex intersections of space, light, and emotion.
              The visionary creators of grandeur in Delhi NCR.
            </p>

            <div className="hero-cta mt-16 flex flex-wrap justify-center gap-6">
              <CtaButton to="/contact" variant="gold" className="px-12 py-5 text-sm uppercase tracking-widest font-bold">Plan Your Event</CtaButton>
              <CtaButton to="/gallery" variant="outline" className="px-12 py-5 text-sm uppercase tracking-widest font-bold backdrop-blur-sm">View Portfolio</CtaButton>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
            <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent" />
          </div>
        </section>

        {/* BENTO SERVICES */}
        <section className="py-32 md:py-48 bg-bg-main relative overflow-hidden" data-animate>
          <div className="container-luxe">
            <SectionHeading
              eyebrow="The Studio"
              title="Bespoke Capabilities"
              subtitle="Our multi-disciplinary approach ensures every detail is rendered with elite precision."
              light
            />

            <div className="bento-grid mt-24">
              {/* Feature 1: Large - Weddings */}
              <div className="bento-card span-2 bg-bg-accent flex flex-col justify-between group overflow-hidden relative min-h-[400px]">
                <img src={weddingDecor} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000" alt="Luxury Weddings" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/40 to-transparent" />

                <div className="space-y-4 relative z-10">
                  <div className="h-12 w-12 rounded-xl bg-gold/20 flex items-center justify-center backdrop-blur-md">
                    <Heart className="text-gold" size={24} />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-display text-white">Luxury Weddings</h3>
                  <p className="text-text-muted max-w-md">From concept to execution, we curate weddings that are as unique as the love they celebrate. Specializing in grand celebrations across Faridabad and Surajkund.</p>
                </div>
                <div className="mt-8 flex items-center gap-4 relative z-10">
                  <Link to="/services" className="text-gold text-xs uppercase tracking-widest font-bold hover:text-white transition-colors">View Wedding Portfolio →</Link>
                </div>
              </div>

              {/* Feature 2: Tall - Corporate */}
              <div className="bento-card row-2 bg-bg-card border-gold/20 flex flex-col justify-between group overflow-hidden relative">
                <img src={corporate} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-1000" alt="Corporate Excellence" />
                <div className="absolute inset-0 bg-gradient-to-b from-bg-card via-transparent to-bg-card" />

                <div className="h-full flex flex-col justify-between relative z-10">
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-xl bg-gold/20 flex items-center justify-center backdrop-blur-md">
                      <Briefcase className="text-gold" size={24} />
                    </div>
                    <h3 className="text-4xl font-display text-white">Corporate <br /> Excellence</h3>
                    <p className="text-text-muted">High-stakes product launches and industry summits delivered with architectural precision in Delhi NCR.</p>
                  </div>
                  <div className="mt-20">
                    <div className="text-6xl md:text-7xl font-display text-gold">100%</div>
                    <div className="text-[10px] uppercase tracking-widest text-text-muted mt-2">Precision Delivery Rate</div>
                    <p className="mt-6 text-sm text-text-muted/60 leading-relaxed italic">"The seamless execution of joy in every boardroom."</p>
                  </div>
                </div>
              </div>

              {/* Feature 3: Small - Private Parties */}
              <div className="bento-card bg-bg-card/50 backdrop-blur-sm group overflow-hidden relative">
                <img src={privateImg} className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-110 transition-transform duration-1000" alt="Private Parties" />
                <div className="space-y-4 relative z-10">
                  <div className="h-10 w-10 rounded-xl bg-gold/20 flex items-center justify-center">
                    <PartyPopper className="text-gold" size={20} />
                  </div>
                  <h4 className="text-2xl font-display text-white">Private Parties</h4>
                  <p className="text-text-muted text-sm">Elegant celebrations for the moments that matter most in the Surajkund region.</p>
                </div>
              </div>

              {/* Feature 4: Small - Destination */}
              <div className="bento-card bg-gold/5 border-gold/10 group overflow-hidden relative">
                <img src={venueHero} className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-110 transition-transform duration-1000" alt="Destination" />
                <div className="space-y-4 relative z-10">
                  <div className="h-10 w-10 rounded-xl bg-gold/20 flex items-center justify-center">
                    <MapPin className="text-gold" size={20} />
                  </div>
                  <h4 className="text-2xl font-display text-white">Destination</h4>
                  <p className="text-text-muted text-sm">We handle the complexity of global logistics and design, starting from our base in Taj Surajkund.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SNAPSHOT */}
        <section className="bg-bg-accent/30 overflow-hidden relative" data-animate>
          <div className="container-luxe py-32 md:py-48 grid md:grid-cols-2 gap-24 items-center text-left">
            <div className="relative perspective-container">
              <div className="isometric-card bg-bg-card p-4 border border-white/5 rounded-2xl">
                <img src={about} alt="RS Group Events team" className="w-full h-[600px] object-cover rounded-xl" loading="lazy" />
              </div>
              <div className="absolute -bottom-12 -right-12 hidden lg:block bg-bg-card text-text-main p-12 max-w-[280px] border border-gold/30 shadow-3xl z-20 rounded-2xl backdrop-blur-xl">
                <div className="font-display text-7xl text-gold">6+</div>
                <div className="text-[11px] uppercase tracking-[0.3em] mt-4 font-bold text-text-muted leading-relaxed">Years of Masterful Craftsmanship</div>
              </div>
            </div>
            <div className="space-y-10">
              <div className="gold-divider !justify-start"><span className="eyebrow">The Ethos</span></div>
              <h2 className="font-display text-6xl md:text-8xl text-text-main leading-[1.05]">Where every detail <br /> becomes a <span className="italic text-gold">legacy.</span></h2>
              <p className="text-xl text-text-muted leading-relaxed font-light max-w-xl">
                Founded on the principles of architectural precision and artistic flair, RS Group Events is a boutique production studio. We don't just plan; we curate. Every texture, every lighting cue, and every guest interaction is designed to evoke a sense of wonder.
              </p>
              <div className="pt-6"><CtaButton to="/about" variant="navy" className="px-16 py-5 scale-110">Our Story</CtaButton></div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="container-luxe py-32 md:py-48 relative overflow-hidden" data-animate>
          <SectionHeading eyebrow="The Portfolio" title="Exquisite Moments" subtitle="A collection of recent celebrations that define our signature aesthetic." light />
          <div className="mt-20 grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6">
            {galleryImgs.map((item, i) => {
              const isLarge = i === 0 || i === 5;
              return (
                <Link
                  to="/gallery"
                  key={i}
                  className={`relative overflow-hidden group bento-card !p-0 border-white/5 ${isLarge ? "md:col-span-8 aspect-video" : "md:col-span-4 aspect-square"
                    }`}
                >
                  {item.type === "video" ? (
                    <video src={item.src} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" autoPlay muted loop playsInline />
                  ) : (
                    <img src={item.src} alt={item.alt} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
                  )}
                  <div className="absolute inset-0 bg-bg-main/60 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-center p-8 text-center backdrop-blur-[2px]">
                    <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold">View Project</span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-24 text-center"><CtaButton to="/gallery" variant="outline" className="px-20 py-6 text-lg scale-110">Explore Full Archive</CtaButton></div>
        </section>

        {/* TESTIMONIALS */}
        <section className="relative overflow-hidden bg-bg-card" data-animate>
          <div className="container-luxe py-32 relative z-10">
            <SectionHeading eyebrow="Client Voice" title="Testimonials of Excellence" light />
            <div className="mt-20 grid md:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <div key={t.name} className="bento-card bg-white/5 border-white/5 p-12 group">
                  <Quote className="text-gold opacity-10 absolute top-8 right-8 group-hover:opacity-30 transition-opacity" size={48} />
                  <p className="text-text-main/90 leading-relaxed italic font-display text-2xl">"{t.quote}"</p>
                  <div className="mt-10 flex items-center gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <div className="mt-6">
                    <div className="text-text-main text-sm font-bold tracking-widest">{t.name}</div>
                    <div className="text-gold/40 text-[9px] uppercase tracking-[0.4em] mt-2">{t.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="relative overflow-hidden" data-animate>
          <div className="absolute inset-0 bg-gradient-to-br from-gold to-gold-light opacity-95" />
          <div className="container-luxe py-32 text-center relative z-10">
            <h2 className="font-display text-5xl md:text-9xl text-bg-main leading-[0.8] tracking-tighter">
              Let's craft your <br />
              <span className="italic">masterpiece.</span>
            </h2>
            <p className="mt-12 text-bg-main/70 text-xl md:text-2xl font-light max-w-2xl mx-auto">Available for exclusive bookings across Delhi NCR and destination weddings.</p>
            <div className="mt-16 flex flex-wrap justify-center gap-6">
              <CtaButton href="tel:+919953595353" variant="gold" className="!bg-white !text-bg-main px-12 py-6 text-sm uppercase tracking-[0.3em] font-bold">Call Representative</CtaButton>
              <CtaButton to="/contact" variant="outline" className="!border-white text-white/70 !text-bg-main px-12 py-6 text-sm uppercase tracking-[0.3em] font-bold">Send Inquiry</CtaButton>
            </div>
          </div>
          <div className="decorative-text bottom-0 right-0 !text-bg-main opacity-[0.05]">RS GROUP</div>
        </section>
      </div>
    </Layout>
  );
}

