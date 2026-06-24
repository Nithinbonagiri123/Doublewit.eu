"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Send, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const details = [
  {
    icon: Mail,
    label: "Email",
    value: "seamus@doublewit.eu",
    href: "mailto:seamus@doublewit.eu",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+353 89 453 7395",
    href: "tel:+353894537395",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "49 North Main Street, Wexford Town, Y35 YT44",
    href: "#map",
  },
];

type Status = "idle" | "submitting" | "success";

const INBOX = "seamus@doublewit.eu";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const phone = String(data.get("phone") || "");
    const message = String(data.get("message") || "");

    const subject = `Website enquiry from ${name || "a prospective client"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company && `Company: ${company}`,
      phone && `Phone: ${phone}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    setStatus("submitting");
    window.location.href = `mailto:${INBOX}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 4000);
    }, 400);
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-midnight-950 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-radial-spotlight opacity-60" />

      <div className="container-edge relative">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's discuss how we can help you grow"
          description="Ready to improve your business performance? Let's discuss how Doublewit Consultancy Limited can help you achieve your goals."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="glass-card p-7 sm:p-8">
              <h3 className="font-display text-xl text-ink-50">
                Talk to our team
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">
                Send us a few details about your business and we'll be in touch
                within one business day.
              </p>

              <ul className="mt-8 space-y-5">
                {details.map((d) => (
                  <li key={d.label}>
                    <a
                      href={d.href}
                      className="group flex items-start gap-3.5 rounded-lg transition-colors"
                    >
                      <span className="grid h-10 w-10 flex-none place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-accent-400 transition-colors group-hover:border-accent-500/40">
                        <d.icon size={16} strokeWidth={1.7} />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-xs uppercase tracking-[0.18em] text-ink-400">
                          {d.label}
                        </span>
                        <span className="mt-0.5 text-sm text-ink-100 group-hover:text-white">
                          {d.value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={onSubmit}
              className="glass-card relative grid gap-5 p-7 sm:grid-cols-2 sm:p-8"
              noValidate
            >
              <Field label="Full name" name="name" required type="text" />
              <Field label="Email" name="email" required type="email" />
              <Field label="Company" name="company" type="text" />
              <Field label="Phone" name="phone" type="tel" />

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="text-xs font-medium uppercase tracking-[0.18em] text-ink-400"
                >
                  Message <span className="text-accent-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm text-ink-50 placeholder:text-ink-400 transition-all focus:border-accent-500/50 focus:bg-white/[0.04]"
                  placeholder="Tell us a little about your business and what you're looking to achieve."
                />
              </div>

              <div className="flex flex-col items-start gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-ink-400">
                  By submitting you agree to be contacted about your enquiry.
                </p>
                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="btn-primary min-w-[180px] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {status === "success" ? (
                      <motion.span
                        key="success"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="inline-flex items-center gap-2"
                      >
                        <Check size={16} /> Message sent
                      </motion.span>
                    ) : status === "submitting" ? (
                      <motion.span
                        key="submitting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Sending…
                      </motion.span>
                    ) : (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="inline-flex items-center gap-2"
                      >
                        Send message <Send size={14} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>

              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="sm:col-span-2"
                  >
                    <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-3 text-sm text-emerald-200">
                      Thanks — we'll be in touch shortly.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}

function Field({ label, name, type, required }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-xs font-medium uppercase tracking-[0.18em] text-ink-400"
      >
        {label} {required && <span className="text-accent-400">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm text-ink-50 placeholder:text-ink-400 transition-all focus:border-accent-500/50 focus:bg-white/[0.04]"
        placeholder={label}
      />
    </div>
  );
}
