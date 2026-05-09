import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CtaButton } from "@/components/site/CtaButton";
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
      { name: "description", content: "Browse real weddings, corporate events, decor and private celebrations created by RS Group Events across Delhi NCR." },
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
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <Layout>
      <PageHero
        eyebrow="Gallery"
        title={<>Our work — every event, a <span className="italic text-gold">masterpiece.</span></>}
        subtitle="A curated collection from celebrations across Delhi NCR."
        image={g4}
      />

      <section className="container-luxe py-12 sticky top-20 z-30 bg-ivory/95 backdrop-blur">
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-5 py-2 text-xs uppercase tracking-[0.2em] border transition-colors ${
                active === t ? "bg-navy text-ivory border-navy" : "border-border text-charcoal/70 hover:border-gold hover:text-navy"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      <section className="container-luxe pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filtered.map((it, i) => (
            <div key={i} className={`relative overflow-hidden group ${i % 5 === 0 ? "row-span-2 aspect-[3/4] md:aspect-[3/5]" : "aspect-square"}`}>
              <img src={it.src} alt={it.label} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-navy-deep/0 group-hover:bg-navy-deep/55 transition-colors flex items-end p-5">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="eyebrow text-gold-light">{it.cat}</div>
                  <div className="font-display text-ivory text-xl mt-1">{it.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-deep text-ivory py-20">
        <div className="container-luxe text-center">
          <div className="gold-divider mx-auto mb-4"><span className="eyebrow">Instagram</span></div>
          <h2 className="font-display text-3xl md:text-4xl text-ivory">See more on Instagram <span className="text-gold">@rsgroupevents</span></h2>
          <div className="mt-10 grid grid-cols-3 md:grid-cols-6 gap-2">
            {items.slice(0, 6).map((it, i) => (
              <a key={i} href="https://instagram.com" className="aspect-square overflow-hidden">
                <img src={it.src} alt="" className="h-full w-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
              </a>
            ))}
          </div>
          <div className="mt-10"><CtaButton href="https://instagram.com" variant="outline">Follow @rsgroupevents</CtaButton></div>
        </div>
      </section>

      <section className="bg-gold">
        <div className="container-luxe py-16 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-navy">Love what you see? Let's create your event.</h2>
          <div className="mt-8"><CtaButton to="/contact" variant="navy">Start Planning</CtaButton></div>
        </div>
      </section>
    </Layout>
  );
}
