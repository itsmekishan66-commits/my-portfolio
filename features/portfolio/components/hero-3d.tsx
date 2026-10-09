"use client";

import dynamic from "next/dynamic";

const SceneCanvas = dynamic(() => import("../three/scene-canvas"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 animate-pulse bg-section/30" />
  ),
});

export function Hero3D() {
  return (
    <div
      className="pointer-events-auto absolute inset-0 z-0 h-full w-full opacity-90"
      aria-hidden
    >
      <SceneCanvas />
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-(--hero-fade-top) via-transparent to-(--hero-fade-bottom)"
      />
    </div>
  );
}
