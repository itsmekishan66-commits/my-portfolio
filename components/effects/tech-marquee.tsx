"use client";

import { motion } from "framer-motion";

const tech = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "Firebase",
  "REST APIs",
  "PostgreSQL",
  "MongoDB",
];

export function TechMarquee() {
  const items = [...tech, ...tech];

  return (
    <div className="overflow-hidden border-y border-border bg-card/50 py-4">
      <motion.div
        className="flex w-max gap-12 whitespace-nowrap px-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="font-mono text-sm text-muted">
            {item}
            <span className="mx-6 text-border">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
