"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile } from "../data/portfolio-data";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/brand-icons";
import { TextReveal } from "@/components/effects/motion";
import { Hero3D } from "./hero-3d";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24">
      <Hero3D />
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs text-muted backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {profile.experience} hands-on experience
        </motion.div>

        <h1 className="max-w-4xl text-center text-4xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          <TextReveal text={profile.name} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 max-w-xl text-center text-lg text-muted sm:text-xl"
        >
          {profile.role} crafting{" "}
          <span className="text-highlight">Next.js</span>,{" "}
          <span className="text-highlight">Node.js</span>,{" "}
          <span className="text-highlight">Express.js</span> &{" "}
          <span className="text-highlight">Firebase</span> web apps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects">
            <Button type="button">View work</Button>
          </a>
          <a href="#contact">
            <Button type="button" variant="outline">
              Get in touch
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-14 flex gap-4"
        >
          {[
            { icon: GitHubIcon, href: profile.social.github, label: "GitHub" },
            { icon: LinkedInIcon, href: profile.social.linkedin, label: "LinkedIn" },
            { icon: MailIcon, href: `mailto:${profile.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
              aria-label={label}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-16 z-10 text-muted"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
