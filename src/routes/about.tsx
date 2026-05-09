import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaButton } from "@/components/site/CtaButton";
import { Sparkles, ShieldCheck, Palette, Users } from "lucide-react";
import about from "@/assets/about-team.jpg";
import venue from "@/assets/venue-hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About RS Group Events — Luxury Event Planners in Delhi NCR" },
      { name: "description", content: "Meet RS Group Events — a boutique luxury event planning studio in Surajkund, designing weddings and corporate events across Delhi NCR for over a decade." },
      { property: "og:title", content: "About RS Group Events" },
      { property: "og:description", content: "Our story, our mission and the team behind unforgettable celebrations." },
      { property: "og:image", content: venue },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Sparkles, title: "Elegance", desc: "A refined aesthetic in every choice we make." },
  { icon: ShieldCheck, title: "Reliability", desc: "We deliver on every promise — without exception." },
  { icon: Palette, title: "Customization", desc: "No two events alike. Each one designed for you." },
  { icon: Users, title: "Guest Experience", desc: "We design for the people who walk through the door." },
];

const stats = [
  { n: "500+", l: "Events Done" },
  { n: "300+", l: "Couples Served" },
  { n: "12", l: "Years Active" },
  { n: "20+", l: "Event Types" },
];

const steps = [
  { n: "01", t: "Consultation", d: "We listen to your vision, your story and your guests." },
  { n: "02", t: "Design & Planning", d: "Mood boards, layouts, vendors and timelines, fully curated." },
  { n: "03", t: "Flawless Execution", d: "On the day, our team makes every detail look effortless." },
];

function AboutPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="About Us"
        title={<>The studio behind every <span className="italic text-gold">unforgettable</span> moment.</>}
        subtitle="Boutique. Bespoke. Built on twelve years of obsessive craft."
        image={venue}
      />

      <section className="container-luxe py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <img src={about} alt="RS Group Events team" className="w-full h-[520px] object-cover" loading="lazy" />
        <div>
          <div className="gold-divider mb-4 !justify-start"><span className="eyebrow">Our Story</span></div>
          <h2 className="font-display text-4xl md:text-5xl text-navy">A passion that became a craft.</h2>
          <p className="mt-5 text-charcoal/80 leading-relaxed">
            RS Group Events began with a single, simple belief: every celebration deserves to be remembered. What started as a small wedding studio in Surajkund has grown into a trusted partner for hundreds of couples, families and brands across Delhi NCR.
          </p>
          <p className="mt-3 text-charcoal/80 leading-relaxed">
            Today, our team brings together planners, stylists, florists and coordinators — all united by a love for the moments that matter.
          </p>
        </div>
      </section>

      <section className="bg-pale-gold/40 py-20 md:py-28">
        <div className="container-luxe grid md:grid-cols-2 gap-6">
          <div className="bg-card p-10 border-l-4 border-gold">
            <div className="eyebrow mb-3">Our Mission</div>
            <p className="font-display text-2xl md:text-3xl text-navy leading-snug">
              To turn every milestone into a masterpiece — through design, detail and devotion.
            </p>
          </div>
          <div className="bg-card p-10 border-l-4 border-gold">
            <div className="eyebrow mb-3">Our Vision</div>
            <p className="font-display text-2xl md:text-3xl text-navy leading-snug">
              To be Delhi NCR's most loved luxury event studio — known for elegance, integrity and care.
            </p>
          </div>
        </div>
      </section>

      <section className="container-luxe py-20 md:py-28">
        <SectionHeading eyebrow="What We Believe" title="Our core values" />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-card p-8 text-center border border-border hover:border-gold transition-colors">
              <div className="mx-auto h-14 w-14 rounded-full bg-pale-gold flex items-center justify-center mb-4 text-navy">
                <v.icon size={24} />
              </div>
              <h3 className="text-xl text-navy">{v.title}</h3>
              <p className="mt-2 text-sm text-charcoal/75">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="container-luxe">
          <SectionHeading eyebrow="Our Approach" title="Three steps to a flawless event" />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="p-8 bg-card border border-border">
                <div className="font-display text-5xl text-gold">{s.n}</div>
                <h3 className="mt-3 text-2xl text-navy">{s.t}</h3>
                <p className="mt-2 text-sm text-charcoal/75">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="bg-gold">
        <div className="container-luxe py-16 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-navy">Plan your event with us.</h2>
          <div className="mt-8"><CtaButton to="/contact" variant="navy">Get in Touch</CtaButton></div>
        </div>
      </section>
    </Layout>
  );
}
