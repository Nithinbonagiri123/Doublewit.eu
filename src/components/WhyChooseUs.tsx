"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Wrench,
  Users,
  BadgeCheck,
  Handshake,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: BrainCircuit,
    title: "Strategic Expertise",
    description:
      "Seasoned advisors translate complex business problems into focused, executable strategy.",
  },
  {
    icon: Wrench,
    title: "Practical Business Solutions",
    description:
      "Recommendations you can actually implement — grounded in operational reality, not theory.",
  },
  {
    icon: Users,
    title: "Client-Focused Approach",
    description:
      "Every engagement is shaped around your goals, your team, and your market.",
  },
  {
    icon: BadgeCheck,
    title: "Measurable Results",
    description:
      "We define success up-front and track it through clear metrics and milestones.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "We invest in relationships that outlast the initial project and compound in value.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="container-edge">
        <SectionHeading
          eyebrow="Why Choose Doublewit"
          title="A consultancy partner built around your outcomes"
          description="What you can count on when you work with us — from the first conversation to long after the engagement ends."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass-card group relative overflow-hidden p-6"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent-500/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-accent-500/20 to-transparent text-accent-400">
                  <reason.icon size={20} strokeWidth={1.7} />
                </div>
                <h3 className="mt-5 font-display text-lg text-ink-50">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
