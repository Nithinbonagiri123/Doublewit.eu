"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  "Strategic guidance for entrepreneurs and established firms",
  "Practical industry knowledge paired with innovative solutions",
  "Tailored consultancy across planning, operations, and growth",
  "A commitment to measurable results and long-term value",
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-midnight-950 py-24 sm:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container-edge">
        <SectionHeading
          eyebrow="About Us"
          title="About Doublewit Consultancy Limited"
          description="A professional business consultancy firm based in Ireland, dedicated to helping businesses achieve sustainable growth and operational excellence."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="space-y-5 text-base leading-relaxed text-ink-300">
              <p>
                We work closely with entrepreneurs, startups, and established
                organizations to provide strategic guidance, business planning,
                process improvement, and management support tailored to their
                unique objectives.
              </p>
              <p>
                Our approach combines practical industry knowledge with
                innovative solutions to help clients improve efficiency,
                strengthen performance, and navigate complex business
                challenges.
              </p>
              <p>
                Whether supporting business expansion, organizational
                development, project management, or strategic decision-making,
                we deliver measurable results and long-term value.
              </p>
              <p className="text-ink-100">
                At Doublewit Consultancy Limited, we believe that every business
                has the potential to grow and succeed when equipped with the
                right strategy, expertise, and support.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="glass-card p-7 sm:p-8">
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-accent-400">
                What sets us apart
              </div>
              <ul className="mt-6 space-y-4">
                {pillars.map((pillar) => (
                  <li
                    key={pillar}
                    className="flex items-start gap-3 text-sm leading-relaxed text-ink-100"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 flex-none text-accent-400"
                    />
                    <span>{pillar}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 border-t border-white/[0.06] pt-6">
                <div className="text-sm text-ink-300">
                  Based in Ireland · Serving clients across the EU and beyond
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
