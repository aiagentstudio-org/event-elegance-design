import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CtaButton } from "@/components/site/CtaButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import wedding from "@/assets/wedding-decor.jpg";
import corporate from "@/assets/corporate-event.jpg";
import privateImg from "@/assets/private-celebration.jpg";
import hero from "@/assets/hero-wedding.jpg";
import v6 from "@/assets/gallery-6.MOV";
import v7 from "@/assets/gallery-7.MOV";
import v9 from "@/assets/gallery-9.MOV";
import v12 from "@/assets/gallery-12.MOV";
import g5 from "@/assets/gallery-5.jpg";
import v13 from "@/assets/gallery-13.MOV";
import v14 from "@/assets/gallery-14.MOV";
import v15 from "@/assets/gallery-15.MOV";
import v16 from "@/assets/gallery-16.MOV";
import v17 from "@/assets/gallery-17.MOV";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Real Weddings & Events by RS Group Events" },
      {
        name: "description",
        content:
          "Browse real weddings, corporate events, decor and private celebrations created by RS Group Events across Delhi NCR.",
      },
      { property: "og:title", content: "Our Work — Every Event, a Masterpiece" },
      { property: "og:description", content: "A gallery of weddings, corporate events and celebrations." },
      { property: "og:image", content: g1 },
    ],
  }),
  component: GalleryPage,
});

type Cat = "All" | "Weddings" | "Corporate" | "Decoration" | "Private";
const items: { src: string; cat: Exclude<Cat, "All">; label: string; type?: "video" | "image" }[] = [
  { src: g1, cat: "Decoration", label: "Floral Aisle" },
  { src: v12, cat: "Weddings", label: "Royal Entrance", type: "video" },
  { src: hero, cat: "Weddings", label: "Royal Mandap" },
  { src: v6, cat: "Weddings", label: "Cinematic Ceremony", type: "video" },
  { src: g2, cat: "Decoration", label: "Table Detail" },
  { src: v7, cat: "Corporate", label: "Event Highlights", type: "video" },
  { src: g3, cat: "Decoration", label: "Luxe Decor" },
  { src: v9, cat: "Weddings", label: "Celebration", type: "video" },
  { src: g4, cat: "Weddings", label: "Grand Ballroom" },
  { src: g5, cat: "Weddings", label: "Bespoke Styling" },
  { src: v13, cat: "Decoration", label: "Atmosphere", type: "video" },
  { src: v14, cat: "Weddings", label: "The Vow", type: "video" },
  { src: v15, cat: "Corporate", label: "Brand Story", type: "video" },
  { src: v16, cat: "Weddings", label: "Celebration", type: "video" },
  { src: v17, cat: "Decoration", label: "Grand Entrance", type: "video" },
  { src: privateImg, cat: "Weddings", label: "Evening Setup" },
  { src: wedding, cat: "Weddings", label: "Sangeet Stage" },
  { src: corporate, cat: "Corporate", label: "Annual Gala" }
];

const tabs: Cat[] = ["All", "Weddings", "Corporate", "Decoration", "Private"];

function GalleryPage() {
  const [active, setActive] = useState<Cat>("All");
  const gridRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Initial reveal
      gsap.from(".gallery-item", {
        y: 60,
        opacity: 0,
        stagger: 0.05,
        duration: 1.2,
        ease: "power3.out",
      });

      // Reveal other sections
      const otherReveals = document.querySelectorAll("[data-animate]");
      otherReveals.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 85%" },
          y: 40,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out"
        });
      });

      // Parallax effect on images
      gsap.utils.toArray<HTMLElement>(".gallery-img").forEach((img) => {
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
    }, containerRef);

    return () => ctx.revert();
  }, [active]); // Re-run when active category changes to re-apply animations to new items

  return (
    <Layout>
      <div ref={containerRef}>
        <PageHero
          eyebrow="Gallery"
          title={
            <span className="hero-title">
              Our work — every event, a <span className="italic text-gold">masterpiece.</span>
            </span>
          }
          subtitle="A curated collection from celebrations across Delhi NCR."
          image={g4}
        />
        {/* SEO Intro */}
        <section className="container-luxe pt-16 pb-8">
          <p className="text-text-muted text-lg leading-relaxed max-w-3xl mx-auto text-center font-light">
            Explore our portfolio of luxury weddings, corporate galas, bespoke floral installations, and private celebrations across Delhi NCR. Each event is designed with architectural precision and creative artistry by the RS Group Events team.
          </p>
        </section>

        <section className="sticky top-[72px] z-30 bg-bg-main/95 backdrop-blur-xl border-b border-border/10">
          <div className="container-luxe py-8 overflow-x-auto no-scrollbar">
            <div className="flex justify-center gap-6 min-w-max">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setActive(t)}
                  className={`relative px-10 py-4 text-[11px] uppercase tracking-[0.4em] font-bold transition-all duration-700 ${
                    active === t
                      ? "text-gold scale-110"
                      : "text-text-muted/60 hover:text-gold"
                  }`}
                >
                  {t}
                  {active === t && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gold" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="container-luxe py-24 md:py-40 min-h-[60vh] relative">
          <div className="decorative-text top-40 right-10 opacity-[0.03] rotate-90 origin-right pointer-events-none select-none">PORTFOLIO</div>
          <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-8">
            {filtered.map((it, i) => {
              // Bento Logic
              const isLarge = i % 7 === 0 || i % 7 === 3;
              const isWide = i % 7 === 5;
              
              return (
                <div
                  key={`${it.label}-${i}`}
                  className={`gallery-item relative overflow-hidden group shadow-sm hover:shadow-3xl transition-all duration-1000 border border-border/10 ${
                    isLarge ? "md:col-span-6 md:row-span-2 aspect-[4/5]" : 
                    isWide ? "md:col-span-8 aspect-[16/9]" :
                    "md:col-span-4 aspect-square"
                  }`}
                >
                  {it.type === "video" ? (
                    <video
                      src={it.src}
                      className="gallery-img h-[130%] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={it.src}
                      alt={it.label}
                      className="gallery-img h-[130%] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-navy-deep/40 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10 backdrop-blur-[2px]">
                    <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                      <div className="eyebrow text-gold mb-3 text-xs tracking-[0.3em]">{it.cat}</div>
                      <div className="font-display text-ivory text-3xl md:text-4xl tracking-tight leading-none">{it.label}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-navy-deep text-ivory py-40 md:py-60 relative overflow-hidden" data-animate>
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="container-luxe text-center relative">
            <div className="gold-divider mx-auto mb-10">
              <span className="eyebrow">Instagram</span>
            </div>
            <h2 className="font-display text-5xl md:text-8xl text-ivory mb-20 leading-none">
              See more on Instagram <span className="text-gold italic">@rsgroupevents</span>
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {items.slice(0, 6).map((it, i) => (
                <a
                  key={i}
                  href="https://www.instagram.com/rsgroupdecors?igsh=dTFwYjVkbzJycnNi&utm_source=rsgroupevent.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square overflow-hidden group border border-ivory/10 relative"
                >
                  {it.type === "video" ? (
                    <video
                      src={it.src}
                      className="h-full w-full object-cover group-hover:scale-110 grayscale group-hover:grayscale-0 transition-all duration-1000"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={it.src}
                      alt=""
                      className="h-full w-full object-cover group-hover:scale-110 grayscale group-hover:grayscale-0 transition-all duration-1000"
                      loading="lazy"
                    />
                  )}
                </a>
              ))}
            </div>
            <div className="mt-24">
              <CtaButton href="https://www.instagram.com/rsgroupdecors?igsh=dTFwYjVkbzJycnNi&utm_source=rsgroupevent.com" variant="outline" className="px-16 py-6 border-gold/30 hover:border-gold scale-125">
                Follow the Story
              </CtaButton>
            </div>
          </div>
        </section>

        {/* FINAL CTA - CINEMATIC & PREMIUM */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-navy-deep" data-animate>
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <video 
              src={v17} 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover opacity-20 scale-110 blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-transparent to-navy-deep" />
            <div className="absolute inset-0 bg-navy-deep/40" />
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.03] select-none pointer-events-none z-0">
            <div className="font-display text-[25vw] leading-none tracking-tighter italic">RS GROUP</div>
          </div>

          <div className="container-luxe relative z-10 text-center">
            <div className="gold-divider mx-auto mb-10"><span className="eyebrow !text-gold/60">The Next Masterpiece</span></div>
            <h2 className="font-display text-6xl md:text-[120px] text-ivory mb-16 leading-[0.85] tracking-tighter">
              Love what you see?<br />
              Let's create <span className="italic text-gold">yours.</span>
            </h2>
            <p className="text-ivory/50 text-xl md:text-2xl font-light mb-16 max-w-2xl mx-auto leading-relaxed">
              Every legacy begins with a single conversation. Our creative team is ready to bring your vision to life with architectural precision.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <CtaButton to="/contact" variant="gold" className="px-20 py-7 text-lg scale-110 shadow-[0_0_50px_rgba(212,175,55,0.2)]">
                Start Planning
              </CtaButton>
              <CtaButton href="tel:+919953595353" variant="outline" className="px-16 py-7 text-lg border-white/20 text-white hover:border-gold">
                Quick Call
              </CtaButton>
            </div>
          </div>

          {/* Decorative Corner */}
          <div className="absolute bottom-10 right-10 flex items-center gap-4 opacity-20">
            <div className="h-px w-20 bg-gold" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold italic">Est. 2012</span>
          </div>
        </section>
      </div>
    </Layout>
  );
}
