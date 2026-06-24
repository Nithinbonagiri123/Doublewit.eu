"use client";

import { MeshGradient } from "@paper-design/shaders-react";

export function ShaderBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <MeshGradient
        className="absolute inset-0 h-full w-full"
        colors={["#04060F", "#0B1124", "#2E6FE6", "#3B82F6", "#7AA8FF"]}
        speed={0.25}
        distortion={0.85}
        swirl={0.6}
      />

      <MeshGradient
        className="absolute inset-0 h-full w-full mix-blend-screen opacity-40"
        colors={["#04060F", "#101933", "#4F8CFF", "#04060F"]}
        speed={0.18}
        distortion={1}
        swirl={0.35}
      />

      <div className="absolute inset-0 bg-grid-mesh bg-grid mask-radial-fade opacity-40" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_120%,rgba(4,6,15,0.95),transparent_70%)]" />

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-midnight-950" />
    </div>
  );
}
