"use client";

import { Reveal } from "@/components/ui/reveal";
import { serviceFormOptions } from "@/content/services";
import { siteConfig } from "@/config/site";
import { useState, type FormEvent } from "react";

export function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;
    const details = formData.get("details") as string;

    try {
      await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, phone, service, details }),
      });

      const textMessage = `Hi Salik Groups & Co, I would like to request a technical survey.\n\n*Name:* ${name}\n*Company:* ${company || "N/A"}\n*Phone:* ${phone}\n*Service:* ${service}\n*Details:* ${details}`;
      const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(textMessage)}`;

      window.open(whatsappUrl, "_blank");

      setSubmitted(true);
    } catch (error) {
      console.error("Survey submission failed:", error);
      alert("Failed to submit survey. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="sg-section-x pb-16 pt-5 sm:pb-[100px]">
      <div className="mx-auto grid max-w-[var(--spacing-container)] overflow-hidden rounded-sg-2xl border border-white/10 bg-gradient-to-br from-[rgba(31,55,106,0.55)] to-[rgba(10,20,48,0.3)] text-[#f3f6fc] lg:grid-cols-[0.85fr_1.15fr]">
        <div className="border-b border-white/8 p-6 sm:p-[clamp(34px,4vw,56px)] lg:border-b-0 lg:border-r">
          <Reveal>
            <div className="sg-eyebrow mb-4">Let&apos;s talk</div>
            <h2 className="font-display text-[clamp(26px,3vw,38px)] font-bold leading-[1.1] tracking-[-0.04em]">
              Plan your next infrastructure project.
            </h2>
            <p className="mt-[18px] text-base leading-[1.65] text-[#aab4cf]">
              Tell us your requirements — our technical team starts with a site survey
              and assessment.
            </p>

            <div className="mt-[34px] flex flex-col gap-[18px]">
              <ContactLink
                href={siteConfig.contact.phoneHref}
                label="Call us"
                value={siteConfig.contact.phone}
                icon="phone"
              />
              <ContactLink
                href={siteConfig.contact.emailHref}
                label="Email"
                value={siteConfig.contact.email}
                icon="email"
              />
              <ContactDetail
                label="Head office"
                value={siteConfig.contact.address}
                icon="location"
              />
              <div className="mt-1.5 border-t border-white/8 pt-[18px] text-[13px] text-sg-text-faint">
                Office 2 — Sadar, Karachi{" "}
                <span className="text-sg-accent">· Coming Soon</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="p-6 sm:p-[clamp(34px,4vw,56px)]">
          {submitted ? (
            <div className="px-5 py-10 text-center">
              <div className="mx-auto mb-[18px] grid h-16 w-16 place-items-center rounded-full border border-sg-success/40 bg-sg-success/15 text-sg-success">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-display text-[22px] font-bold">Thank you!</h3>
              <p className="mt-2 text-[15px] text-[#aab4cf]">
                Your enquiry has been received. Our technical team will be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField label="Full name" name="name" required placeholder="Your name" />
              <FormField label="Company" name="company" placeholder="Organisation" />
              <FormField label="Phone" name="phone" required placeholder="+92 …" />
              <div className="flex flex-col gap-[7px]">
                <label className="text-[13px] font-semibold text-[#aab4cf]">
                  Service required
                </label>
                <select name="service" className="rounded-sg-sm border border-white/13 bg-[rgba(10,20,48,0.6)] px-[15px] py-[13px] text-[15px] text-white outline-none">
                  {serviceFormOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-[7px] sm:col-span-2">
                <label className="text-[13px] font-semibold text-[#aab4cf]">
                  Project details
                </label>
                <textarea
                  name="details"
                  required
                  rows={4}
                  placeholder="Tell us about your site and requirements…"
                  className="resize-y rounded-sg-sm border border-white/13 bg-[rgba(10,20,48,0.6)] px-[15px] py-[13px] text-[15px] text-white outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="sm:col-span-2 rounded-xl border-none bg-sg-accent px-4 py-4 text-base font-bold text-sg-hero shadow-[0_12px_30px_rgba(244,159,28,0.28)] transition-transform hover:-translate-y-0.5 disabled:opacity-50"
              >
                {submitting ? "Requesting Survey..." : "Request a Technical Survey"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-[7px]">
      <label htmlFor={name} className="text-[13px] font-semibold text-[#aab4cf]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        required={required}
        placeholder={placeholder}
        className="rounded-sg-sm border border-white/13 bg-[rgba(10,20,48,0.6)] px-[15px] py-[13px] text-[15px] text-white outline-none"
      />
    </div>
  );
}

function ContactIcon({ type }: { type: "phone" | "email" | "location" }) {
  const className = "h-5 w-5";

  if (type === "phone") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" />
      </svg>
    );
  }

  if (type === "email") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
        <path d="m3 6 9 6 9-6" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ContactLink({
  href,
  label,
  value,
  icon,
}: {
  href: string;
  label: string;
  value: string;
  icon: "phone" | "email";
}) {
  return (
    <a href={href} className="flex items-center gap-3.5">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sg-sm border border-sg-accent/28 bg-sg-accent/13 text-sg-accent">
        <ContactIcon type={icon} />
      </span>
      <span>
        <span className="block text-xs text-sg-text-dim">{label}</span>
        <span className="font-display font-semibold">{value}</span>
      </span>
    </a>
  );
}

function ContactDetail({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: "location";
}) {
  return (
    <div className="flex items-center gap-3.5">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sg-sm border border-sg-accent/28 bg-sg-accent/13 text-sg-accent">
        <ContactIcon type={icon} />
      </span>
      <span>
        <span className="block text-xs text-sg-text-dim">{label}</span>
        <span className="font-display font-semibold">{value}</span>
      </span>
    </div>
  );
}
