import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaButton } from "@/components/site/CtaButton";
import { Check, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
      // Reveal service sections
      gsap.utils.toArray<HTMLElement>(".service-section").forEach((section) => {
        const image = section.querySelector(".service-image");
        const content = section.querySelector(".service-content");

        gsap.from(image, {
          scrollTrigger: { trigger: section, start: "top 80%" },
          x: section.classList.contains("reverse") ? 50 : -50,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });

        gsap.from(content, {
          scrollTrigger: { trigger: section, start: "top 80%" },
          x: section.classList.contains("reverse") ? -50 : 50,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });

        // Stagger bullets
        gsap.from(section.querySelectorAll("li"), {
          scrollTrigger: { trigger: section, start: "top 70%" },
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          delay: 0.4,
        });
      });

      // Animate steps
      gsap.from(".step-item", {
        scrollTrigger: { trigger: ".steps-container", start: "top 85%" },
        scale: 0.8,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.7)",
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
            <>
              Luxury event services in <span className="italic text-gold">Delhi NCR</span>
            </>
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
            className={`service-section relative overflow-hidden py-24 md:py-32 ${i % 2 === 1 ? "bg-pale-gold/20" : ""} ${d.reverse ? "reverse" : ""}`}
          >
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
        <section className="bg-navy-deep text-ivory py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="container-luxe relative">
            <SectionHeading eyebrow="How It Works" title="The Alchemy of an Event" light />
            <div className="steps-container mt-20 grid grid-cols-2 md:grid-cols-5 gap-8">
              {steps.map((s, i) => (
                <div key={s} className="step-item group text-center space-y-6">
                  <div className="mx-auto h-20 w-20 rounded-full border border-gold/30 flex items-center justify-center relative overflow-hidden group-hover:border-gold transition-colors duration-500">
                    <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <span className="relative font-display text-3xl text-gold group-hover:text-navy-deep transition-colors duration-500">
                      {i + 1}
                    </span>
                  </div>
                  <div className="text-ivory text-sm uppercase tracking-[0.3em] font-medium opacity-80 group-hover:opacity-100 group-hover:text-gold transition-all">
                    {s}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ + CTA */}
        <section className="container-luxe py-24 md:py-32 grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <SectionHeading eyebrow="FAQ" title="Common queries" align="left" />
            <div className="space-y-6">
              {faqs.map((f) => (
                <details key={f.q} className="group glass-card border border-border/50 overflow-hidden cursor-pointer">
                  <summary className="font-display text-xl text-navy-deep p-6 list-none flex justify-between items-center bg-white/5 hover:bg-white/10 transition-colors">
                    {f.q}
                    <div className="h-8 w-8 rounded-full border border-gold/30 flex items-center justify-center group-open:rotate-180 transition-transform">
                      <ChevronRight size={18} className="text-gold rotate-90" />
                    </div>
                  </summary>
                  <div className="p-6 pt-0 border-t border-border/10">
                    <p className="text-charcoal/75 text-base leading-relaxed font-light mt-6">{f.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
          <div className="glass-card p-12 md:p-20 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gold/5 scale-110 -rotate-3 translate-x-12 translate-y-12 group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000" />
            <div className="relative space-y-6">
              <div className="eyebrow text-gold/80">Ready to begin?</div>
              <h3 className="font-display text-4xl md:text-5xl text-navy-deep leading-tight">
                Let's design something <span className="italic">unforgettable</span>.
              </h3>
              <p className="text-charcoal/80 text-lg font-light">Free consultation. No obligations.</p>
              <div className="pt-6">
                <CtaButton to="/contact" variant="navy" className="w-full sm:w-auto">
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
