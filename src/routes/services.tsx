import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaButton } from "@/components/site/CtaButton";
import { Check } from "lucide-react";
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
      { name: "description", content: "Wedding planning, corporate events, decoration, private celebrations and on-ground coordination across Delhi NCR." },
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
    img: corporate, reverse: true,
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
    img: privateImg, reverse: true,
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
  { q: "How far in advance should we book?", a: "For weddings, 6–12 months ahead is ideal. For corporate and private events, 4–8 weeks is comfortable." },
  { q: "Do you handle smaller, intimate events?", a: "Absolutely. We design with the same care for an intimate 30-guest dinner as for a 1,000-guest wedding." },
  { q: "Which cities do you serve?", a: "Surajkund, Faridabad, South Delhi, Gurgaon, Noida and across Delhi NCR." },
];

function ServicesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Services"
        title={<>Luxury event services in <span className="italic text-gold">Delhi NCR</span></>}
        subtitle="Weddings · Corporate · Decor · Private Celebrations · On-Ground Coordination"
        image={g1}
      >
        <CtaButton to="/contact" variant="gold">Book Consultation</CtaButton>
        <CtaButton to="/gallery" variant="outline">View Our Work</CtaButton>
      </PageHero>

      {detail.map((d, i) => (
        <section key={d.title} className={i % 2 === 1 ? "bg-pale-gold/30" : ""}>
          <div className={`container-luxe py-20 md:py-24 grid md:grid-cols-2 gap-12 items-center ${d.reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
            <img src={d.img} alt={d.title} className="w-full h-[440px] object-cover" loading="lazy" />
            <div>
              <div className="gold-divider mb-4 !justify-start"><span className="eyebrow">{d.eyebrow}</span></div>
              <h2 className="font-display text-3xl md:text-4xl text-navy">{d.title}</h2>
              <p className="mt-4 text-charcoal/80 leading-relaxed">{d.desc}</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {d.bullets.map((b) => (
                  <li key={b} className="flex gap-2 items-start text-sm text-charcoal/85">
                    <Check size={18} className="text-gold mt-0.5 shrink-0" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* PROCESS */}
      <section className="bg-navy text-ivory py-20 md:py-28">
        <div className="container-luxe">
          <SectionHeading eyebrow="How It Works" title="Five steps from idea to celebration" light />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <div key={s} className="text-center">
                <div className="mx-auto h-14 w-14 rounded-full border-2 border-gold text-gold flex items-center justify-center font-display text-xl">{i + 1}</div>
                <div className="mt-3 text-ivory text-sm uppercase tracking-[0.2em]">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="container-luxe py-20 md:py-28 grid lg:grid-cols-2 gap-12">
        <div>
          <SectionHeading eyebrow="FAQ" title="Common questions" align="left" />
          <div className="mt-8 space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-card border border-border p-5 cursor-pointer">
                <summary className="font-display text-lg text-navy list-none flex justify-between items-center">
                  {f.q}<span className="text-gold group-open:rotate-45 transition-transform text-2xl">+</span>
                </summary>
                <p className="mt-3 text-charcoal/75 text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
        <div className="bg-pale-gold p-10 md:p-14 flex flex-col justify-center">
          <div className="eyebrow mb-3">Ready to begin?</div>
          <h3 className="font-display text-3xl md:text-4xl text-navy">Let's design something unforgettable.</h3>
          <p className="mt-3 text-charcoal/80">Free consultation. No obligations.</p>
          <div className="mt-6"><CtaButton to="/contact" variant="navy">Book Consultation</CtaButton></div>
        </div>
      </section>
    </Layout>
  );
}
