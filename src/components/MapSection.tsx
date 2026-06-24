"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function MapSection() {
  return (
    <section id="map" className="relative py-20 sm:py-24">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card relative overflow-hidden"
        >
          {/* Placeholder map. Replace with a real Google Maps embed when ready. */}
          <div className="relative aspect-[16/7] w-full">
            <div className="absolute inset-0 bg-grid-mesh bg-grid opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-br from-midnight-900/40 via-midnight-950/80 to-midnight-950" />

            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
              <div className="relative">
                <span className="absolute inset-0 -m-3 animate-ping rounded-full bg-accent-500/30" />
                <span className="relative grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-accent-500 text-white shadow-[0_10px_40px_-10px_rgba(79,140,255,0.7)]">
                  <MapPin size={18} />
                </span>
              </div>
              <div className="mt-5 font-display text-lg text-ink-50">
                Doublewit Consultancy Limited
              </div>
              <div className="mt-1 text-sm text-ink-300">Dublin, Ireland</div>
              <div className="mt-1 text-xs text-ink-400">
                Google Maps embed placeholder
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
