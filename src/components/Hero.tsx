"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { ShaderBackground } from "@/components/ui/ShaderBackground";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.1 },
  }),
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-midnight-950 noise pt-24"
    >
      <ShaderBackground />

      <div className="container-edge relative z-10 py-20 sm:py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-ink-300 backdrop-blur"
          >
            <Sparkles size={12} className="text-accent-400" />
            Strategic Business Consultancy · Ireland
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-7 font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">
              Transforming Business Challenges
            </span>
            <br />
            <span className="text-ink-100">
              Into{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Sustainable Growth</span>
                <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-accent-500/30 blur-md" />
              </span>{" "}
              Opportunities
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-7 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg"
          >
            Doublewit Consultancy Limited provides strategic consulting solutions
            that help businesses improve performance, optimize operations, and
            achieve long-term success.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          >
            <a href="#contact" className="btn-primary group">
              Book a Consultation
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>
            <a href="#services" className="btn-ghost">
              Explore Our Services
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-16 grid w-full max-w-3xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md"
          >
            {[
              { value: "12+", label: "Years of expertise" },
              { value: "200+", label: "Engagements delivered" },
              { value: "98%", label: "Client retention" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-midnight-950/40 px-4 py-6 text-center"
              >
                <div className="font-display text-2xl font-medium text-ink-50 sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
