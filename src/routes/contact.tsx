import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import venue from "@/assets/venue-hero.jpg";

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

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      <PageHero
        eyebrow="Contact"
        title={<>Plan your event <span className="italic text-gold">with us.</span></>}
        subtitle="Tell us about your celebration. We'll respond within 24 hours."
      />

      <section className="container-luxe py-20 md:py-24 grid lg:grid-cols-5 gap-10">
        {/* Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="gold-divider !justify-start"><span className="eyebrow">Get in Touch</span></div>
          <h2 className="font-display text-3xl text-navy">Let's talk about your event.</h2>
          <p className="text-charcoal/75">Reach out by phone, WhatsApp, email or the form — whichever feels easiest.</p>

          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {[
              { icon: Phone, label: "Phone", val: "+91 98765 43210", href: "tel:+919876543210" },
              { icon: MessageCircle, label: "WhatsApp", val: "Chat with us", href: "https://wa.me/919876543210" },
              { icon: Mail, label: "Email", val: "hello@rsgroupevents.com", href: "mailto:hello@rsgroupevents.com" },
              { icon: MapPin, label: "Studio", val: "Surajkund, Faridabad" },
              { icon: Clock, label: "Hours", val: "Mon–Sat · 10am – 7pm" },
              { icon: MapPin, label: "Service Area", val: "Delhi NCR wide" },
            ].map((c) => (
              <a key={c.label} href={c.href ?? "#"} className="bg-card p-5 border border-border hover:border-gold transition-colors block">
                <c.icon className="text-gold mb-2" size={20} />
                <div className="text-xs uppercase tracking-[0.2em] text-charcoal/60">{c.label}</div>
                <div className="text-navy font-medium mt-1 text-sm">{c.val}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          <div className="bg-card border border-border p-8 md:p-10 shadow-[var(--shadow-luxe)]">
            <h3 className="font-display text-2xl text-navy">Enquiry Form</h3>
            {sent ? (
              <div className="mt-6 bg-pale-gold p-6 text-center">
                <div className="font-display text-2xl text-navy">Thank you!</div>
                <p className="text-charcoal/75 mt-2">We've received your enquiry and will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-6 grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Event Type" name="event">
                  <select name="event" required className="w-full bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-gold">
                    <option value="">Select…</option>
                    <option>Wedding</option>
                    <option>Corporate Event</option>
                    <option>Private Celebration</option>
                    <option>Decoration Only</option>
                  </select>
                </Field>
                <Field label="Event Date" name="date" type="date" />
                <Field label="Guest Count" name="guests" type="number" />
                <div className="sm:col-span-2"><Field label="Location" name="location" /></div>
                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-[0.2em] text-charcoal/70 mb-1.5">Message</label>
                  <textarea name="message" rows={4} className="w-full bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-gold" placeholder="Tell us about your vision…" />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="w-full bg-navy text-ivory py-4 text-sm uppercase tracking-[0.25em] hover:bg-gold hover:text-navy transition-colors">
                    Send Enquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-pale-gold/30 py-16">
        <div className="container-luxe">
          <h3 className="font-display text-2xl text-navy text-center mb-8">Find Us</h3>
          <div className="aspect-[16/8] overflow-hidden border border-border">
            <iframe
              title="RS Group Events location"
              src="https://www.google.com/maps?q=Surajkund,Faridabad&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label, name, type = "text", required, children,
}: { label: string; name: string; type?: string; required?: boolean; children?: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-charcoal/70 mb-1.5">{label}{required && <span className="text-gold"> *</span>}</label>
      {children ?? (
        <input
          type={type}
          name={name}
          required={required}
          className="w-full bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-gold"
        />
      )}
    </div>
  );
}
