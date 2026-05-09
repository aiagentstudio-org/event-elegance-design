import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaButton } from "@/components/site/CtaButton";
import { Crown, Sparkles, MapPin, Heart, Briefcase, PartyPopper, Star, Quote } from "lucide-react";
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

const why = [
  { icon: Crown, title: "Luxury Experience", desc: "Five-star hospitality woven through every detail." },
  { icon: Sparkles, title: "Custom Decor", desc: "Original concepts — never templated, always tailored." },
  { icon: MapPin, title: "Delhi NCR Experts", desc: "Deep vendor and venue network across the region." },
  { icon: Star, title: "End-to-End Planning", desc: "From first idea to final farewell, we handle it all." },
];

const testimonials = [
  { name: "Aanya & Rohan", event: "Wedding · Surajkund", quote: "RS Group turned our wedding into a dream. Every detail, from the floral mandap to the guest experience, was flawless." },
  { name: "Karan Mehta", event: "Corporate Gala · Gurgaon", quote: "Professional, creative and remarkably calm under pressure. Our launch event was the talk of the industry." },
  { name: "Priya S.", event: "Anniversary · Delhi", quote: "An evening we will never forget. The attention to detail was simply exquisite." },
];

const galleryImgs = [g1, g2, g3, g4, weddingDecor, corporate];

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden -mt-20">
        <img src={heroImg} alt="Luxury wedding stage" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy-deep/60 to-navy-deep/95" />
        <div className="relative container-luxe min-h-[100vh] flex flex-col justify-center pt-24 pb-20 text-center">
          <div className="gold-divider mx-auto mb-6"><span className="eyebrow">Luxury Event Planners · Delhi NCR</span></div>
          <h1 className="font-display text-5xl md:text-7xl text-ivory leading-[1.05] max-w-5xl mx-auto">
            Crafting Memories <br className="hidden md:block" />
            <span className="italic text-gold">that last a lifetime.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-ivory/85 text-lg">
            Bespoke weddings, corporate galas and private celebrations — designed in exquisite detail across Surajkund and Delhi NCR.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <CtaButton to="/contact" variant="gold">Book Consultation</CtaButton>
            <CtaButton to="/services" variant="outline">View Services</CtaButton>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-navy text-ivory">
        <div className="container-luxe py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl md:text-5xl text-gold">{s.n}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.25em] text-ivory/75">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="container-luxe py-20 md:py-28">
        <SectionHeading eyebrow="What We Do" title="Three pillars of impeccable event design" subtitle="Every celebration is unique — and so is our approach." />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group bg-card p-8 border border-border hover:border-gold transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-luxe)]">
              <div className="h-14 w-14 rounded-sm bg-pale-gold flex items-center justify-center mb-5 group-hover:bg-gold transition-colors">
                <s.icon className="text-navy" size={26} />
              </div>
              <h3 className="text-2xl text-navy">{s.title}</h3>
              <p className="mt-2 text-charcoal/75 text-sm leading-relaxed">{s.desc}</p>
              <Link to="/services" className="mt-5 inline-block text-sm uppercase tracking-[0.2em] text-gold hover:text-navy">Discover →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section className="bg-pale-gold/40">
        <div className="container-luxe py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={about} alt="RS Group Events team" className="w-full h-[480px] object-cover" loading="lazy" />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-gold text-navy p-6 max-w-[200px]">
              <div className="font-display text-3xl">12+</div>
              <div className="text-xs uppercase tracking-[0.2em]">Years of crafting unforgettable moments</div>
            </div>
          </div>
          <div>
            <div className="gold-divider mb-4 !justify-start"><span className="eyebrow">About RS Group</span></div>
            <h2 className="font-display text-4xl md:text-5xl text-navy">Where every detail tells a story.</h2>
            <p className="mt-5 text-charcoal/80 leading-relaxed">
              From a passion for celebration grew RS Group Events — a boutique studio for couples, families and brands who want more than an event. We design experiences. Each setup is hand-curated, each timeline meticulously planned, each guest moment considered.
            </p>
            <p className="mt-3 text-charcoal/80 leading-relaxed">
              Based in Surajkund and serving all of Delhi NCR, we bring together the region's finest artisans, florists and venues — orchestrated by a team that loves what it does.
            </p>
            <div className="mt-8"><CtaButton to="/about" variant="navy">Our Story</CtaButton></div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="container-luxe py-20 md:py-28">
        <SectionHeading eyebrow="Featured Work" title="Moments we've created" subtitle="A glimpse of recent celebrations across Delhi NCR." />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImgs.map((src, i) => (
            <Link to="/gallery" key={i} className={`relative overflow-hidden group ${i === 0 ? "md:row-span-2 md:col-span-2 aspect-square md:aspect-auto" : "aspect-square"}`}>
              <img src={src} alt="Event" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-navy-deep/0 group-hover:bg-navy-deep/40 transition-colors flex items-end p-4">
                <span className="text-ivory text-xs uppercase tracking-[0.25em] opacity-0 group-hover:opacity-100 transition-opacity">View Gallery</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center"><CtaButton to="/gallery" variant="navy">See Full Gallery</CtaButton></div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-ivory">
        <div className="container-luxe py-20 md:py-28">
          <SectionHeading eyebrow="Why RS Group" title="Trusted across Delhi NCR" />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {why.map((w) => (
              <div key={w.title} className="text-center p-6 border-t-2 border-gold bg-card hover:shadow-[var(--shadow-luxe)] transition-shadow">
                <div className="mx-auto h-14 w-14 rounded-full bg-navy text-gold flex items-center justify-center mb-4">
                  <w.icon size={24} />
                </div>
                <h3 className="text-xl text-navy">{w.title}</h3>
                <p className="mt-2 text-sm text-charcoal/75">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative" style={{ background: "var(--gradient-navy)" }}>
        <div className="container-luxe py-20 md:py-28">
          <SectionHeading eyebrow="Kind Words" title="Loved by our clients" light />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="border border-gold/30 p-8 bg-navy-deep/40 backdrop-blur">
                <Quote className="text-gold" size={28} />
                <p className="mt-4 text-ivory/90 leading-relaxed italic font-display text-lg">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <div className="mt-3">
                  <div className="text-ivory text-sm font-medium">{t.name}</div>
                  <div className="text-ivory/60 text-xs uppercase tracking-[0.2em]">{t.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="bg-navy-deep text-ivory py-20">
        <div className="container-luxe text-center">
          <div className="gold-divider mx-auto mb-4"><span className="eyebrow">Instagram</span></div>
          <h2 className="font-display text-3xl md:text-4xl text-ivory">Follow our work <span className="text-gold">@rsgroupevents</span></h2>
          <p className="mt-3 text-ivory/70">Real events, real decor, real moments.</p>
          <div className="mt-10 grid grid-cols-3 md:grid-cols-6 gap-2">
            {galleryImgs.concat(galleryImgs).slice(0, 6).map((src, i) => (
              <a key={i} href="https://instagram.com" target="_blank" rel="noreferrer" className="aspect-square overflow-hidden group">
                <img src={src} alt="Instagram post" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </a>
            ))}
          </div>
          <div className="mt-10"><CtaButton href="https://instagram.com" variant="outline">Follow on Instagram</CtaButton></div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-gold">
        <div className="container-luxe py-16 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-navy">Planning an event in Delhi NCR? Let's talk.</h2>
          <p className="mt-3 text-navy/80">We'll respond within 24 hours.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CtaButton href="tel:+919876543210" variant="navy">Call Now</CtaButton>
            <CtaButton to="/contact" variant="navy" className="!bg-navy-deep">Send Enquiry</CtaButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}
