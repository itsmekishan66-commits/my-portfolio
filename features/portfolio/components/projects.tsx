"use client";

import { projects } from "../data/portfolio-data";
import { FadeIn } from "@/components/effects/motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Projects3D } from "./projects-3d";
import { ProjectCard } from "./project-card";

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
            <FadeIn key={project.title} delay={index * 0.08} className="h-full">
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
