import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, useEffect, useRef } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import contactVideo from "@/assets/gallery-12.MOV";

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

import { createServerFn } from "@tanstack/react-start";

const submitInquiry = createServerFn({ method: "POST" })
  .handler(async (ctx: any) => {
    const data = ctx.data;
    console.log("------------------------------------------");
    console.log("🔥 SERVER FUNCTION TRIGGERED: submitInquiry");
    console.log("Data received:", JSON.stringify(data, null, 2));
    console.log("API Key present:", !!process.env.RESEND_API_KEY);
    console.log("------------------------------------------");

    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, phone, event, date, guests, location, message } = data;

    try {
      // 1. Send inquiry notification to RS Group
      const adminEmail = await resend.emails.send({
        from: "RS Group Inquiries <hello@rsgroupevent.com>",
        to: ["sanjeev@rsgroupevent.com"],
        subject: `New Event Inquiry: ${event} — ${name}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #1a1a1a;">
            <h2 style="border-bottom: 1px solid #d4af37; padding-bottom: 10px;">New Event Lead</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Contact:</strong> ${phone} | ${email}</p>
            <p><strong>Event:</strong> ${event}</p>
            <p><strong>Date:</strong> ${date || "Not specified"}</p>
            <p><strong>Guests:</strong> ${guests || "Not specified"}</p>
            <p><strong>Location:</strong> ${location || "Not specified"}</p>
            <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #d4af37;">
              <strong>Vision:</strong><br/>${message || "No message provided."}
            </div>
          </div>
        `,
      });

      console.info("SERVER LOG: Admin notification sent successfully.", adminEmail.data?.id);

      // 2. Send "Thank You" confirmation to the sender
      const userEmail = await resend.emails.send({
        from: "RS Group Events <Bookings@rsgroupevent.com>",
        to: [email],
        subject: `Namaste — We've received your inquiry`,
        html: `
          <div style="font-family: serif; color: #1a1a1a; max-width: 600px; margin: 0 auto; padding: 40px; border: 1px solid #e5e5e5;">
            <h1 style="font-size: 24px; font-weight: normal; margin-bottom: 24px;">Namaste ${name},</h1>
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
              Thank you for reaching out to RS Group Events. We have received your inquiry regarding your upcoming <strong>${event}</strong>.
            </p>
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
              Our creative team is currently reviewing your details. We pride ourselves on architectural precision and bespoke storytelling, and we look forward to discussing how we can bring your vision to life.
            </p>
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
              A member of our lead planning team will contact you personally within the next <strong>24 hours</strong>.
            </p>
            <hr style="border: 0; border-top: 1px solid #d4af37; margin: 40px 0;" />
            <p style="font-size: 14px; color: #666;">
              Warm regards,<br />
              <strong>RS Group Events Team</strong><br />
              Taj Hotel, Surajkund, Delhi NCR
            </p>
          </div>
        `,
      });

      console.info("SERVER LOG: Confirmation email sent to user.", userEmail.data?.id);

      return { success: true, adminId: adminEmail.data?.id, userId: userEmail.data?.id };
    } catch (error) {
      console.error("SERVER ERROR: Resend delivery failed:", error);
      throw error;
    }
  });

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx: gsap.Context;

    // Add a tiny delay to ensure fonts and layout are ready
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        // Info Cards Stagger
        gsap.from(".info-card", {
          y: 40,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          clearProps: "all" // Ensure they stay visible
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
    }, 50);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, []);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await submitInquiry({ data });
      console.log("SUCCESS: Inquiry sent to server successfully.", response);
      setSent(true);
      // Add success animation
      gsap.from(".success-message", {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
      });
    } catch (error) {
      console.error("CRITICAL FAILURE: Submission failed to reach server or Resend crashed:", error);
      // Don't setSent(true) here! Show an error state instead.
      alert("Submission failed. Please check the server logs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div ref={containerRef}>
        <PageHero
          eyebrow="Contact"
          title={<span className="hero-title">Plan your event <span className="italic text-gold">with us.</span></span>}
          subtitle="Tell us about your celebration. We'll respond within 24 hours."
          video={contactVideo}
        />

        <section className="container-luxe py-20 md:py-32 grid lg:grid-cols-5 gap-16 lg:gap-24">
          {/* Info Side */}
          <div className="lg:col-span-2 space-y-10">
            <div className="space-y-6">
              <div className="gold-divider !justify-start"><span className="eyebrow">The Connection</span></div>
              <h2 className="font-display text-4xl md:text-5xl text-text-main leading-tight">Let's talk about your vision.</h2>
              <p className="text-text-muted text-lg leading-relaxed">Whether you have a fully formed concept or just the spark of an idea, we're here to listen and elevate.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 info-grid">
              {[
                { icon: Phone, label: "Direct Call", val: "+91 99535 95353", href: "tel:+919953595353" },
                { icon: MessageCircle, label: "WhatsApp", val: "Chat with us", href: "https://wa.me/919953595353" },
                { icon: Mail, label: "Inquiries", val: "sanjeev@rsgroupevent.com", href: "mailto:sanjeev@rsgroupevent.com" },
                { icon: Mail, label: "General", val: "hello@rsgroupevent.com", href: "mailto:hello@rsgroupevent.com" },
                { icon: MapPin, label: "The Studio", val: "Taj Hotel, Surajkund" },
                { icon: Clock, label: "Studio Hours", val: "Mon–Sat · 10am – 7pm" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href ?? "#"}
                  className="info-card group bg-navy-deep border border-white/5 p-8 hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 block relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-1000" />
                  <c.icon className="text-gold mb-6 group-hover:scale-110 transition-transform relative z-10" size={32} />
                  <div className="text-[10px] uppercase tracking-[0.3em] text-ivory/40 font-bold mb-2 relative z-10">{c.label}</div>
                  <div className="text-ivory font-display text-xl md:text-2xl mt-1 relative z-10">{c.val}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3">
            <div className="contact-form bg-card border border-border/50 p-8 md:p-12 shadow-[var(--shadow-luxe)] glass-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />

              <h3 className="font-display text-3xl text-text-main mb-8">Event Inquiry</h3>

              {sent ? (
                <div className="success-message py-12 text-center">
                  <div className="h-20 w-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-gold" size={40} />
                  </div>
                  <h4 className="font-display text-3xl text-text-main">Inquiry Received</h4>
                  <p className="text-text-muted mt-4 max-w-sm mx-auto">Thank you for sharing your event details. A member of our creative team will reach out within 24 hours.</p>
                  <button onClick={() => setSent(false)} className="mt-8 text-xs uppercase tracking-widest text-gold font-bold hover:text-navy transition-colors">Send another inquiry</button>
                </div>
              ) : (
                <form onSubmit={submit} className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="form-field"><Field label="Full Name" name="name" required placeholder="Arjun Sharma" /></div>
                  <div className="form-field"><Field label="Contact Number" name="phone" type="tel" required placeholder="+91 99535 95353" /></div>
                  <div className="form-field"><Field label="Email Address" name="email" type="email" required placeholder="arjun@example.com" /></div>
                  <div className="form-field">
                    <Field label="Event Type" name="event">
                      <select name="event" required className="w-full bg-transparent border-b border-input py-3 text-sm text-text-main focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer">
                        <option value="" className="bg-[#0A0A0A] text-[#F1F1EE]">Select type…</option>
                        <option className="bg-[#0A0A0A] text-[#F1F1EE]">Wedding / Shaadi</option>
                        <option className="bg-[#0A0A0A] text-[#F1F1EE]">Reception</option>
                        <option className="bg-[#0A0A0A] text-[#F1F1EE]">Sangeet / Haldi</option>
                        <option className="bg-[#0A0A0A] text-[#F1F1EE]">Corporate Event</option>
                        <option className="bg-[#0A0A0A] text-[#F1F1EE]">Decoration Only</option>
                      </select>
                    </Field>
                  </div>
                  <div className="form-field"><Field label="Proposed Date" name="date" type="date" /></div>
                  <div className="form-field"><Field label="Estimated Guests" name="guests" type="number" placeholder="250" /></div>
                  <div className="sm:col-span-2 form-field"><Field label="Venue Location" name="location" placeholder="e.g., ITC Grand Bharat, Manesar" /></div>
                  <div className="sm:col-span-2 form-field">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-text-muted mb-2 font-bold italic">Tell us about your vision</label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full bg-transparent border-b border-input py-3 text-sm text-text-main focus:outline-none focus:border-gold transition-colors resize-none placeholder:text-text-muted/40"
                      placeholder="Share any specific themes, traditions, or inspirations..."
                    />
                  </div>
                  <div className="sm:col-span-2 pt-4 form-field">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group w-full bg-gold text-bg-main py-5 text-xs uppercase tracking-[0.3em] font-bold hover:bg-gold-light hover:text-bg-main transition-all duration-500 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span>{loading ? "Sending..." : "Submit Inquiry"}</span>
                      {!loading && <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
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
      <label className="block text-[10px] uppercase tracking-[0.2em] text-text-muted mb-2 font-bold italic group-focus-within:text-gold transition-colors">{label}{required && <span className="text-gold"> *</span>}</label>
      {children ?? (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className="w-full bg-transparent border-b border-input py-3 text-sm text-text-main focus:outline-none focus:border-gold transition-colors placeholder:text-text-muted/40"
        />
      )}
    </div>
  );
}

