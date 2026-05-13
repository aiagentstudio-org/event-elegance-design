import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, useEffect, useRef } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact RS Group Events — Book Your Event in Delhi NCR" },
      { name: "description", content: "Plan your wedding, corporate event or celebration with RS Group Events. Call, WhatsApp or send an enquiry — we respond within 24 hours." },
      { property: "og:title", content: "Contact RS Group Events" },
      { property: "og:description", content: "Plan your event with us — Surajkund, Delhi NCR." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Hero Animation
      const heroTitle = new SplitType(".hero-title", { types: "chars,words" });
      gsap.from(heroTitle.chars, {
        y: 40,
        opacity: 0,
        stagger: 0.02,
        duration: 1,
        ease: "power4.out"
      });

      // Info Cards Stagger
      gsap.from(".info-card", {
        scrollTrigger: {
          trigger: ".info-grid",
          start: "top 85%",
        },
        x: -40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out"
      });

      // Form Fields Stagger
      gsap.from(".form-field", {
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    // Add success animation
    gsap.from(".success-message", {
      scale: 0.9,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.7)"
    });
  };

  return (
    <Layout>
      <div ref={containerRef}>
        <PageHero
          eyebrow="Contact"
          title={<span className="hero-title">Plan your event <span className="italic text-gold">with us.</span></span>}
          subtitle="Tell us about your celebration. We'll respond within 24 hours."
        />

        <section className="container-luxe py-20 md:py-32 grid lg:grid-cols-5 gap-16 lg:gap-24">
          {/* Info Side */}
          <div className="lg:col-span-2 space-y-10">
            <div className="space-y-6">
              <div className="gold-divider !justify-start"><span className="eyebrow">The Connection</span></div>
              <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight">Let's talk about your vision.</h2>
              <p className="text-charcoal/70 text-lg leading-relaxed">Whether you have a fully formed concept or just the spark of an idea, we're here to listen and elevate.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 info-grid">
              {[
                { icon: Phone, label: "Direct Call", val: "+91 99535 95353", href: "tel:+919953595353" },
                { icon: MessageCircle, label: "WhatsApp", val: "Chat with us", href: "https://wa.me/919953595353" },
                { icon: Mail, label: "Inquiries", val: "sanjeev@rsgroupevent.com", href: "mailto:sanjeev@rsgroupevent.com" },
                { icon: Mail, label: "General", val: "hello@rsgroupevent.com", href: "mailto:hello@rsgroupevent.com" },
                { icon: MapPin, label: "The Studio", val: "Surajkund, Faridabad" },
                { icon: Clock, label: "Studio Hours", val: "Mon–Sat · 10am – 7pm" },
              ].map((c) => (
                <a 
                  key={c.label} 
                  href={c.href ?? "#"} 
                  className="info-card group bg-card border border-border/50 p-6 glass-card hover:border-gold transition-all duration-500 hover:-translate-y-1 block"
                >
                  <c.icon className="text-gold mb-4 group-hover:scale-110 transition-transform" size={24} />
                  <div className="text-[10px] uppercase tracking-[0.25em] text-charcoal/50 font-bold">{c.label}</div>
                  <div className="text-navy font-display text-lg mt-1">{c.val}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3">
            <div className="contact-form bg-card border border-border/50 p-8 md:p-12 shadow-[var(--shadow-luxe)] glass-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <h3 className="font-display text-3xl text-navy mb-8">Inquiry Studio</h3>
              
              {sent ? (
                <div className="success-message py-12 text-center">
                  <div className="h-20 w-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-gold" size={40} />
                  </div>
                  <h4 className="font-display text-3xl text-navy">Vision Received</h4>
                  <p className="text-charcoal/70 mt-4 max-w-sm mx-auto">Thank you for sharing your event details. A member of our creative team will reach out within 24 hours.</p>
                  <button onClick={() => setSent(false)} className="mt-8 text-xs uppercase tracking-widest text-gold font-bold hover:text-navy transition-colors">Send another inquiry</button>
                </div>
              ) : (
                <form onSubmit={submit} className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="form-field"><Field label="Full Name" name="name" required placeholder="John Doe" /></div>
                  <div className="form-field"><Field label="Contact Number" name="phone" type="tel" required placeholder="+91 ..." /></div>
                  <div className="form-field"><Field label="Email Address" name="email" type="email" required placeholder="john@example.com" /></div>
                  <div className="form-field">
                    <Field label="Event Type" name="event">
                      <select name="event" required className="w-full bg-transparent border-b border-input py-3 text-sm focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer">
                        <option value="" className="bg-ivory text-charcoal">Select type…</option>
                        <option className="bg-ivory text-charcoal">Wedding</option>
                        <option className="bg-ivory text-charcoal">Corporate Gala</option>
                        <option className="bg-ivory text-charcoal">Private Celebration</option>
                        <option className="bg-ivory text-charcoal">Floral Design Only</option>
                      </select>
                    </Field>
                  </div>
                  <div className="form-field"><Field label="Proposed Date" name="date" type="date" /></div>
                  <div className="form-field"><Field label="Estimated Guests" name="guests" type="number" placeholder="50" /></div>
                  <div className="sm:col-span-2 form-field"><Field label="Venue Location" name="location" placeholder="e.g., ITC Grand Bharat" /></div>
                  <div className="sm:col-span-2 form-field">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-bold italic">Tell us about your vision</label>
                    <textarea 
                      name="message" 
                      rows={4} 
                      className="w-full bg-transparent border-b border-input py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none placeholder:text-charcoal/20" 
                      placeholder="Share any specific themes or inspirations..." 
                    />
                  </div>
                  <div className="sm:col-span-2 pt-4 form-field">
                    <button 
                      type="submit" 
                      className="group w-full bg-navy text-ivory py-5 text-xs uppercase tracking-[0.3em] font-bold hover:bg-gold hover:text-navy transition-all duration-500 flex items-center justify-center gap-3"
                    >
                      <span>Submit Vision</span>
                      <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Studio Location Map */}
        <section className="bg-navy py-20 relative overflow-hidden" data-reveal>
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="container-luxe relative z-10">
            <div className="grid md:grid-cols-3 gap-12 items-center">
              <div className="md:col-span-1">
                <div className="gold-divider !justify-start mb-6"><span className="eyebrow !text-ivory/50">Visit Us</span></div>
                <h3 className="font-display text-4xl text-ivory mb-6">The Studio</h3>
                <p className="text-ivory/60 leading-relaxed">
                  Located in the heart of Surajkund, our creative studio is where magic begins. We welcome scheduled consultations for a bespoke planning experience.
                </p>
                <div className="mt-8 flex items-center gap-4 text-gold">
                  <MapPin size={20} />
                  <span className="text-sm tracking-wide">Surajkund, Faridabad, Delhi NCR</span>
                </div>
              </div>
              <div className="md:col-span-2 aspect-[16/7] overflow-hidden glass-card border-gold/20 grayscale hover:grayscale-0 transition-all duration-1000">
                <iframe
                  title="RS Group Events location"
                  src="https://www.google.com/maps?q=Surajkund,Faridabad&output=embed"
                  className="w-full h-full opacity-70"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

function Field({
  label, name, type = "text", required, children, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; children?: React.ReactNode; placeholder?: string }) {
  return (
    <div className="group">
      <label className="block text-[10px] uppercase tracking-[0.2em] text-charcoal/50 mb-2 font-bold italic group-focus-within:text-gold transition-colors">{label}{required && <span className="text-gold"> *</span>}</label>
      {children ?? (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className="w-full bg-transparent border-b border-input py-3 text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-charcoal/20"
        />
      )}
    </div>
  );
}

