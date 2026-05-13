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
const items: { src: string; cat: Exclude<Cat, "All">; label: string }[] = [
  { src: g1, cat: "Decoration", label: "Floral Aisle" },
  { src: hero, cat: "Weddings", label: "Royal Mandap" },
  { src: wedding, cat: "Weddings", label: "Sangeet Stage" },
  { src: corporate, cat: "Corporate", label: "Annual Gala" },
  { src: g2, cat: "Weddings", label: "Garden Ceremony" },
  { src: g3, cat: "Decoration", label: "Table Styling" },
  { src: privateImg, cat: "Private", label: "Birthday Suite" },
  { src: g4, cat: "Decoration", label: "Ballroom Drape" },
  { src: g1, cat: "Weddings", label: "Reception Entrance" },
  { src: corporate, cat: "Corporate", label: "Award Night" },
  { src: wedding, cat: "Weddings", label: "Floral Mandap" },
  { src: g3, cat: "Decoration", label: "Royal Tablescape" },
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
      // Hero Title Animation
      const heroTitle = new SplitType(".hero-title", { types: "chars,words" });
      gsap.from(heroTitle.chars, {
        y: 60,
        opacity: 0,
        rotateX: -45,
        stagger: 0.02,
        duration: 1.2,
        ease: "power4.out"
      });

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

        <section className="sticky top-[72px] z-30 bg-ivory/95 backdrop-blur-xl border-b border-border/10">
          <div className="container-luxe py-8 overflow-x-auto no-scrollbar">
            <div className="flex justify-center gap-6 min-w-max">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setActive(t)}
                  className={`relative px-10 py-4 text-[11px] uppercase tracking-[0.4em] font-bold transition-all duration-700 ${
                    active === t
                      ? "text-navy-deep scale-110"
                      : "text-charcoal/40 hover:text-gold"
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
                  <img
                    src={it.src}
                    alt={it.label}
                    className="gallery-img h-[130%] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    loading="lazy"
                  />
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
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square overflow-hidden group border border-ivory/10"
                >
                  <img
                    src={it.src}
                    alt=""
                    className="h-full w-full object-cover group-hover:scale-110 grayscale group-hover:grayscale-0 transition-all duration-1000"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
            <div className="mt-24">
              <CtaButton href="https://instagram.com" variant="outline" className="px-16 py-6 border-gold/30 hover:border-gold scale-125">
                Follow the Story
              </CtaButton>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden" data-animate>
          <div className="absolute inset-0 bg-gold/10" />
          <div className="container-luxe py-32 md:py-48 text-center relative">
            <h2 className="font-display text-5xl md:text-8xl text-navy-deep mb-16 leading-tight">
              Love what you see?<br />Let's create <span className="italic">yours</span>.
            </h2>
            <CtaButton to="/contact" variant="navy" className="px-20 py-6 text-xl scale-110">
              Start Planning
            </CtaButton>
          </div>
        </section>
      </div>
    </Layout>
  );
}
