"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What types of businesses do you work with?",
    a: "We partner with entrepreneurs, startups, small and medium businesses, and established organizations across multiple sectors. Engagements are tailored to the stage and ambition of each client.",
  },
  {
    q: "How does a typical engagement begin?",
    a: "Every engagement begins with a discovery conversation where we explore your goals, challenges, and constraints. From there we propose a scoped plan with clear objectives, deliverables, and success metrics.",
  },
  {
    q: "Do you work with clients outside of Ireland?",
    a: "Yes. While we are based in Ireland, we support clients across the EU and beyond, working remotely and on-site as the engagement requires.",
  },
  {
    q: "How do you measure success?",
    a: "We define success up-front with each client — the specific metrics depend on the engagement, but always tie back to measurable business outcomes such as efficiency gains, revenue growth, or operational improvements.",
  },
  {
    q: "Can you support ongoing advisory work?",
    a: "Absolutely. Beyond project-based engagements, we offer ongoing advisory partnerships for organizations that want consistent strategic support over time.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="container-edge">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers to common questions"
          description="Don't see what you're looking for? Reach out — we'd be glad to discuss your specific situation."
        />

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-white/[0.06] rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
                >
                  <span className="text-[15px] font-medium text-ink-50">
                    {item.q}
                  </span>
                  <span
                    className={cn(
                      "grid h-7 w-7 flex-none place-items-center rounded-full border border-white/10 bg-white/[0.04] text-ink-300 transition-transform duration-300",
                      isOpen && "rotate-45 border-accent-500/40 text-accent-400",
                    )}
                  >
                    <Plus size={14} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm leading-relaxed text-ink-300">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
