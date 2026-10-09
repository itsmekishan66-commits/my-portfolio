"use client";

import { motion } from "framer-motion";
import { profile } from "@/features/portfolio/data/portfolio-data";
import { Container } from "@/components/ui/container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-10">
      <Container className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-between sm:gap-4 sm:text-left">
        <p className="text-balance text-sm text-muted">
          © {year} {profile.name}. Built with Next.js, Framer Motion & Three.js.
        </p>
        <motion.p
          className="font-mono text-xs text-muted sm:text-right"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Next.js · Node.js · Express.js · Firebase
        </motion.p>
      </Container>
    </footer>
  );
}
