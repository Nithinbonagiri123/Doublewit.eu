"use client";

import { motion } from "framer-motion";

export function AnimatedGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Spotlight radial */}
      <div className="absolute inset-0 bg-radial-spotlight" />

      {/* Grid mesh */}
      <div className="absolute inset-0 bg-grid-mesh bg-grid mask-radial-fade" />

      {/* Animated orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ duration: 2 }}
        className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent-500/30 blur-3xl animate-pulse-glow"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 2.4, delay: 0.2 }}
        className="absolute bottom-0 left-[10%] h-[360px] w-[360px] rounded-full bg-accent-glow/20 blur-3xl animate-float-slow"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2.4, delay: 0.4 }}
        className="absolute right-[8%] top-1/3 h-[300px] w-[300px] rounded-full bg-cyan-400/15 blur-3xl animate-float-slow"
      />

      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-midnight-950" />
    </div>
  );
}
