"use client";

import { motion } from "framer-motion";
import { skills } from "../data/portfolio-data";
import { FadeIn } from "@/components/effects/motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-22 bg-section/80">
      <Container>
        <FadeIn>
          <SectionHeading
            index="02"
            label="Skills"
            title="Tools I ship with daily"
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {skills.map((skill, index) => (
            <FadeIn key={skill.name} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -2 }}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md dark:hover:shadow-[0_8px_30px_rgba(37,99,235,0.12)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="font-mono text-xs text-muted">{skill.level}%</span>
                </div>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-section">
                  <motion.div
                    className="h-full rounded-full bg-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{
                      duration: 1,
                      delay: 0.15 + index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
