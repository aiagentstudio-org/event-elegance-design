import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CtaButton } from "@/components/site/CtaButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
      // Initial reveal
      gsap.from(".gallery-item", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
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
          y: -30,
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
            <>
              Our work — every event, a <span className="italic text-gold">masterpiece.</span>
            </>
          }
          subtitle="A curated collection from celebrations across Delhi NCR."
          image={g4}
        />

        <section className="sticky top-20 z-30 bg-ivory/80 backdrop-blur-xl border-b border-border/10">
          <div className="container-luxe py-6 overflow-x-auto no-scrollbar">
            <div className="flex justify-center gap-3 min-w-max">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setActive(t)}
                  className={`px-8 py-3 text-[10px] uppercase tracking-[0.3em] font-medium transition-all duration-500 rounded-full border ${
                    active === t
                      ? "bg-navy-deep text-ivory border-navy-deep shadow-lg scale-105"
                      : "border-border/50 text-charcoal/60 hover:border-gold hover:text-navy-deep"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="container-luxe py-20 min-h-[60vh]">
          <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((it, i) => (
              <div
                key={`${it.label}-${i}`}
                className={`gallery-item relative overflow-hidden group rounded-xl shadow-sm hover:shadow-2xl transition-shadow duration-700 ${
                  i % 5 === 0 ? "row-span-2 aspect-[3/4] md:aspect-[3/5]" : "aspect-square"
                }`}
              >
                <img
                  src={it.src}
                  alt={it.label}
                  className="gallery-img h-[120%] w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="eyebrow text-gold/90 mb-2">{it.cat}</div>
                    <div className="font-display text-ivory text-2xl tracking-wide">{it.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-navy-deep text-ivory py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="container-luxe text-center relative">
            <div className="gold-divider mx-auto mb-8">
              <span className="eyebrow">Instagram</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl text-ivory mb-16">
              See more on Instagram <span className="text-gold">@rsgroupevents</span>
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {items.slice(0, 6).map((it, i) => (
                <a
                  key={i}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square overflow-hidden rounded-lg group shadow-lg"
                >
                  <img
                    src={it.src}
                    alt=""
                    className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-1000"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
            <div className="mt-20">
              <CtaButton href="https://instagram.com" variant="outline" className="scale-110">
                Follow the Story
              </CtaButton>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gold" />
          <div className="container-luxe py-24 text-center relative">
            <h2 className="font-display text-4xl md:text-6xl text-navy-deep mb-12">
              Love what you see? Let's create yours.
            </h2>
            <CtaButton to="/contact" variant="navy" className="scale-110">
              Start Planning
            </CtaButton>
          </div>
        </section>
      </div>
    </Layout>
  );
}
