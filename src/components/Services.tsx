"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Briefcase,
  TrendingUp,
  Settings2,
  ClipboardList,
  LineChart,
  Building2,
  Gauge,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Compass,
    title: "Business Strategy & Planning",
    description:
      "Helping businesses develop clear strategies, identify opportunities, and create actionable growth plans.",
  },
  {
    icon: Briefcase,
    title: "Management Consultancy",
    description:
      "Providing expert guidance to improve leadership, decision-making, and organizational performance.",
  },
  {
    icon: TrendingUp,
    title: "Business Development",
    description:
      "Supporting companies in identifying opportunities, expanding markets, and increasing competitiveness.",
  },
  {
    icon: Settings2,
    title: "Process Improvement",
    description:
      "Analyzing workflows and implementing improvements to increase efficiency and productivity.",
  },
  {
    icon: ClipboardList,
    title: "Project Management Support",
    description:
      "Helping organizations successfully plan, manage, and deliver important projects.",
  },
  {
    icon: LineChart,
    title: "Market Research & Analysis",
    description:
      "Providing insights through research, analysis, and market intelligence.",
  },
  {
    icon: Building2,
    title: "Organizational Development",
    description:
      "Helping businesses strengthen structures, culture, and employee performance.",
  },
  {
    icon: Gauge,
    title: "Operational Efficiency Consulting",
    description:
      "Optimizing business operations to reduce waste and improve results.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-midnight-950 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-mesh bg-grid mask-radial-fade opacity-50" />
      <div className="container-edge relative">
        <SectionHeading
          eyebrow="What We Do"
          title="Consulting services built for measurable outcomes"
          description="Eight focused practice areas — each delivered with the same rigor, transparency, and commitment to long-term value."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: (i % 4) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/30 hover:bg-white/[0.04]"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-accent-500/20 to-transparent text-accent-400 transition-all duration-300 group-hover:border-accent-500/40 group-hover:text-accent-500">
                <service.icon size={20} strokeWidth={1.7} />
              </div>
              <h3 className="font-display text-lg leading-snug text-ink-50">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-300">
                {service.description}
              </p>
              <div className="mt-auto pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn more
                  <span aria-hidden>→</span>
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
