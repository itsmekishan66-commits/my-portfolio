"use client";

import { motion } from "framer-motion";
import { profile } from "../data/portfolio-data";
import { FadeIn, StaggerIn, StaggerItem } from "@/components/effects/motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const stats = [
  { label: "Experience", value: profile.experience },
  { label: "Stack", value: "Next.js · Node.js" },
  { label: "Backend", value: "Express.js · Firebase" },
  { label: "Focus", value: "Full Stack" },
];

export function About() {
  return (
    <section id="about" className="px-6 py-28">
      <Container>
        <FadeIn>
          <SectionHeading index="01" label="About" />
        </FadeIn>

        <div className="mt-8 grid gap-12 md:grid-cols-2 md:items-start">
          <FadeIn delay={0.05}>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Full-stack developer with a focus on craft.
            </h2>
            <motion.div
              className="mt-6 h-0.5 origin-left bg-accent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            />
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I&apos;m{" "}
                <strong className="font-medium text-foreground">{profile.name}</strong>, a{" "}
                {profile.role} with {profile.experience} of hands-on experience building
                cross-platform apps.
              </p>
              <p>
                I work across the stack — from responsive Next.js frontends and
                REST APIs to Express.js services, Firebase, and SQL/NoSQL
                databases — so products ship fast and stay maintainable.
              </p>
              <p>{profile.tagline}</p>
            </div>
          </FadeIn>
        </div>

        <StaggerIn
          className="mt-16 grid auto-rows-fr grid-cols-2 gap-4 sm:grid-cols-4"
          delay={0.1}
        >
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="h-full">
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="flex h-full flex-col justify-center rounded-2xl border border-border bg-card p-5 backdrop-blur-sm"
              >
                <p className="text-xs text-muted">{stat.label}</p>
                <p className="mt-2 text-sm font-medium text-foreground">{stat.value}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerIn>
      </Container>
    </section>
  );
}
