"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "Doublewit reshaped how we approach growth. The strategy was practical, the execution was disciplined, and the results were exactly what we needed.",
    name: "Client Name",
    role: "Managing Director, SME",
  },
  {
    quote:
      "Working with the Doublewit team felt like adding a senior advisor to our leadership group. Their insight into operations gave us months of progress in weeks.",
    name: "Client Name",
    role: "Founder, Startup",
  },
  {
    quote:
      "The process improvements they identified continue to pay off well after the engagement closed. A genuine long-term partner.",
    name: "Client Name",
    role: "Operations Lead, Mid-market firm",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-midnight-950 py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container-edge">
        <SectionHeading
          eyebrow="Client Voices"
          title="Trusted by leaders building real businesses"
          description="A selection of placeholder client perspectives — to be replaced with verified, attributable testimonials."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass-card flex h-full flex-col p-7"
            >
              <Quote
                size={28}
                strokeWidth={1.4}
                className="text-accent-400/80"
              />
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-ink-100">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-white/[0.06] pt-5">
                <div className="text-sm font-medium text-ink-50">{t.name}</div>
                <div className="text-xs text-ink-400">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
