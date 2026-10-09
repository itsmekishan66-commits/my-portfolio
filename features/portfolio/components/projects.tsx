"use client";

import { useState } from "react";
import { projects } from "../data/portfolio-data";
import { FadeIn } from "@/components/effects/motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Projects3D } from "./projects-3d";
import { ProjectCard } from "./project-card";

const PAGE_SIZE = 3;

export function Projects() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [exhausted, setExhausted] = useState(false);

  const hasMore = visibleCount < projects.length;
  const visibleProjects = projects.slice(0, visibleCount);

  function handleShowMore() {
    if (hasMore) {
      setVisibleCount((count) => count + PAGE_SIZE);
      return;
    }
    setExhausted(true);
  }

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
          {visibleProjects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.08} className="h-full">
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>

        <div className="mt-10">
          {exhausted && (
            <p className="text-center text-sm text-muted">
              Admin added this much project only for now. Come after some time to
              view more.
            </p>
          )}
          <div className="mt-3 flex justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={handleShowMore}
              disabled={exhausted}
            >
              Show more
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}