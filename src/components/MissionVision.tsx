"use client";

import { motion } from "framer-motion";
import { Target, Telescope } from "lucide-react";

const cards = [
  {
    icon: Target,
    label: "Our Mission",
    title:
      "Empower businesses through expert consultancy that drives growth, innovation, and operational success.",
  },
  {
    icon: Telescope,
    label: "Our Vision",
    title:
      "Be a trusted consultancy partner recognized for practical solutions, professional excellence, and lasting business value.",
  },
];

export function MissionVision() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-edge">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {cards.map((card, i) => (
            <motion.article
              key={card.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass-card group relative overflow-hidden p-8 sm:p-10"
            >
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-500/15 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />

              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-accent-500/20 to-accent-glow/5 text-accent-400">
                  <card.icon size={22} strokeWidth={1.6} />
                </div>

                <div className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-accent-400">
                  {card.label}
                </div>

                <p className="mt-3 font-display text-2xl leading-snug text-ink-50 sm:text-[26px]">
                  {card.title}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
