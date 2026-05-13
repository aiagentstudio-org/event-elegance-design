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

const steps = ["Enquiry", "Consultation", "Planning", "Execution", "Follow-up"];

const faqs = [
  {
    q: "How far in advance should we book?",
    a: "For weddings, 6–12 months ahead is ideal. For corporate and private events, 4–8 weeks is comfortable.",
  },
  {
    q: "Do you handle smaller, intimate events?",
    a: "Absolutely. We design with the same care for an intimate 30-guest dinner as for a 1,000-guest wedding.",
  },
  { q: "Which cities do you serve?", a: "Surajkund, Faridabad, South Delhi, Gurgaon, Noida and across Delhi NCR." },
];

function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Hero Title Animation
      const heroTitle = new SplitType(".hero-title", { types: "chars,words" });
      gsap.from(heroTitle.chars, {
        y: 40,
        opacity: 0,
        rotateX: -30,
        stagger: 0.02,
        duration: 1,
        ease: "power4.out"
      });

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
        });

        gsap.from(content, {
          scrollTrigger: { trigger: section, start: "top 80%" },
          x: section.classList.contains("reverse") ? -60 : 60,
          opacity: 0,
          duration: 1.4,
          ease: "power3.out",
        });

        // Stagger bullets
        gsap.from(section.querySelectorAll("li"), {
          scrollTrigger: { trigger: section, start: "top 70%" },
          y: 20,
          opacity: 0,
          stagger: 0.08,
          duration: 0.8,
          delay: 0.4,
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      <div ref={containerRef}>
        <PageHero
          eyebrow="Services"
          title={
            <span className="hero-title">
              Luxury event services in <span className="italic text-gold">Delhi NCR</span>
            </span>
          }
          subtitle="Weddings · Corporate · Decor · Private Celebrations · On-Ground Coordination"
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
                <h2 className="font-display text-4xl md:text-5xl text-navy-deep leading-tight">{d.title}</h2>
                <p className="text-charcoal/80 text-lg leading-relaxed font-light">{d.desc}</p>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {d.bullets.map((b) => (
                    <li key={b} className="flex gap-3 items-center text-charcoal/85">
                      <div className="h-2 w-2 rounded-full bg-gold shrink-0" />
                      <span className="text-base font-light tracking-wide">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}

        {/* PROCESS */}
        <section className="bg-navy-deep text-ivory py-32 md:py-48 relative overflow-hidden" data-animate>
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="container-luxe relative">
            <SectionHeading eyebrow="How It Works" title="The Alchemy of an Event" bgText="PROCESS" light />
            <div className="steps-container mt-24 grid grid-cols-2 md:grid-cols-5 gap-8">
              {steps.map((s, i) => (
                <div key={s} className="step-item group text-center space-y-8">
                  <div className="mx-auto h-24 w-24 rounded-full border border-gold/30 flex items-center justify-center relative overflow-hidden group-hover:border-gold transition-all duration-700">
                    <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                    <span className="relative font-display text-4xl text-gold group-hover:text-navy-deep transition-colors duration-700">
                      {i + 1}
                    </span>
                  </div>
                  <div className="text-ivory text-xs uppercase tracking-[0.4em] font-medium opacity-40 group-hover:opacity-100 group-hover:text-gold transition-all duration-500">
                    {s}
                  </div>
                </div>
              ))}
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
                  <summary className="font-display text-2xl text-navy-deep p-8 list-none flex justify-between items-center bg-white/5 hover:bg-gold/5 transition-colors">
                    {f.q}
                    <div className="h-10 w-10 rounded-full border border-gold/30 flex items-center justify-center group-open:rotate-180 transition-all duration-500">
                      <ChevronRight size={20} className="text-gold rotate-90" />
                    </div>
                  </summary>
                  <div className="p-8 pt-0 border-t border-border/10">
                    <p className="text-charcoal/70 text-lg leading-relaxed font-light mt-8">{f.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
          <div className="glass-card p-12 md:p-24 flex flex-col justify-center relative overflow-hidden group border-gold/10 hover:border-gold/30 transition-all duration-1000">
            <div className="absolute inset-0 bg-gold/5 scale-110 -rotate-3 translate-x-12 translate-y-12 group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000" />
            <div className="relative space-y-10">
              <div className="eyebrow text-gold">Ready to begin?</div>
              <h3 className="font-display text-5xl md:text-7xl text-navy-deep leading-tight italic">
                Let's design something <span className="text-gold">unforgettable</span>.
              </h3>
              <p className="text-charcoal/70 text-xl font-light">Free consultation. No obligations.</p>
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
