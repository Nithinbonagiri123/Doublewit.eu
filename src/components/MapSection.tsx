"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

const ADDRESS = "49 North Main Street, Wexford Town, Y35 YT44";
const MAPS_QUERY = encodeURIComponent(ADDRESS);
const EMBED_SRC = `https://maps.google.com/maps?q=${MAPS_QUERY}&z=16&output=embed`;
const DIRECTIONS_HREF = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`;

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
          <div className="relative aspect-[16/9] w-full sm:aspect-[16/7]">
            <iframe
              src={EMBED_SRC}
              title="Doublewit Consultancy Limited — office location on Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 grayscale-[40%] contrast-110 invert-[0.92] hue-rotate-180 saturate-[0.85]"
              allowFullScreen
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight-950/40 via-transparent to-transparent" />
          </div>

          <div className="flex flex-col items-start gap-3 border-t border-white/[0.06] bg-midnight-950/60 px-6 py-5 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid h-9 w-9 flex-none place-items-center rounded-lg border border-white/10 bg-accent-500/20 text-accent-400">
                <MapPin size={16} />
              </span>
              <div>
                <div className="text-sm font-medium text-ink-50">
                  Doublewit Consultancy Limited
                </div>
                <div className="mt-0.5 text-xs text-ink-300">{ADDRESS}</div>
              </div>
            </div>
            <a
              href={DIRECTIONS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-ink-100 transition-colors hover:border-accent-500/40 hover:bg-white/[0.06]"
            >
              Get directions
              <ExternalLink size={12} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
