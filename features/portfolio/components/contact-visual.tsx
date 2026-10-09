"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const CURVES: { d: string; width: number; opacity: number }[] = [
  { d: "M 14 184 C 44 126 76 120 98 98 C 122 74 112 22 184 14", width: 3, opacity: 0.9 },
  { d: "M 28 192 C 56 144 92 136 112 114 C 136 88 132 40 192 32", width: 1.5, opacity: 0.55 },
  { d: "M 4 158 C 32 106 68 102 86 82 C 106 58 104 18 158 6", width: 1.5, opacity: 0.4 },
  { d: "M 66 196 C 84 164 112 152 132 132", width: 2, opacity: 0.5 },
];

function CircularPhoto() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="absolute inset-5 overflow-hidden rounded-full border border-border bg-card">
      {imageError ? (
        <div className="flex h-full w-full items-center justify-center font-mono text-4xl tracking-tight text-foreground">
          KS
        </div>
      ) : (
        <Image
          src="/kishan shah.png"
          alt="Kishan Shah"
          fill
          sizes="256px"
          className="object-cover"
          onError={() => setImageError(true)}
        />
      )}
    </div>
  );
}

export function ContactVisualCurve() {
  return (
    <div className="relative mx-auto aspect-square w-64 sm:w-72">
      <svg
        aria-hidden
        viewBox="0 0 200 200"
        fill="none"
        className="absolute inset-0 h-full w-full overflow-visible text-accent/70"
      >
        <g transform="translate(100 100) scale(1.06) translate(-100 -100)">
          {CURVES.map((curve) => (
            <motion.path
              key={curve.d}
              d={curve.d}
              stroke="currentColor"
              strokeWidth={curve.width}
              strokeLinecap="round"
              opacity={curve.opacity}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          ))}
          <circle cx="14" cy="184" r="4" fill="currentColor" />
          <circle cx="184" cy="14" r="4" fill="currentColor" />
          <circle cx="28" cy="192" r="3" fill="currentColor" />
          <circle cx="192" cy="32" r="3" fill="currentColor" />
        </g>
      </svg>

      <CircularPhoto />
    </div>
  );
}
