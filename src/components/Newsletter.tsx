"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const NEWSLETTER_INBOX = "seamus@doublewit.eu";

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = String(new FormData(form).get("email") || "");
    if (!email) return;

    window.location.href = `mailto:${NEWSLETTER_INBOX}?subject=${encodeURIComponent(
      "Newsletter subscription",
    )}&body=${encodeURIComponent(`Please add me to the Doublewit newsletter.\n\nEmail: ${email}`)}`;

    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section className="relative py-20 sm:py-24">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card relative overflow-hidden p-8 sm:p-12"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl" />

          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-ink-300">
                <Mail size={12} className="text-accent-400" />
                Newsletter
              </div>
              <h3 className="mt-4 font-display text-2xl text-ink-50 sm:text-3xl">
                Insights from our consultancy practice
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                Practical strategy, operations, and growth thinking — delivered
                to your inbox every few weeks. No noise.
              </p>
            </div>

            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-3 sm:flex-row"
              noValidate
            >
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                aria-label="Email address"
                className="flex-1 rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-3 text-sm text-ink-50 placeholder:text-ink-400 transition-all focus:border-accent-500/50 focus:bg-white/[0.04]"
              />
              <button type="submit" className="btn-primary">
                {submitted ? "Subscribed" : "Subscribe"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
