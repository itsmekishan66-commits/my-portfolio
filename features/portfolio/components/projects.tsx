"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolio-data";
import { FadeIn } from "@/components/effects/motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Projects3D } from "./projects-3d";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-22 bg-section/80">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_280px]">
          <FadeIn>
            <SectionHeading
              index="04"
              label="Projects"
              title="Selected work"
              description="Hover & click the model — it spins faster on interaction."
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <Projects3D />
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.08}>
              <motion.a
                href="#"
                whileHover={{ y: -4 }}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg dark:hover:shadow-[0_8px_32px_rgba(37,99,235,0.15)]"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-medium text-foreground group-hover:text-accent">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </div>
                <p className="mt-3 flex-1 text-sm text-muted leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
