"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Images,
  RotateCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "../types/portfolio.types";

export function ProjectCard({ project }: { project: Project }) {
  const [flipped, setFlipped] = useState(false);
  const [active, setActive] = useState(0);
  const count = project.images.length;

  useEffect(() => {
    if (!flipped || count <= 1) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % count);
    }, 3000);
    return () => clearInterval(timer);
  }, [flipped, count, active]);

  function step(direction: number) {
    setActive((prev) => (prev + direction + count) % count);
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="h-full perspective-distant"
    >
      <div
        className={cn(
          "relative h-full w-full transition-transform duration-700 transform-3d",
          flipped && "transform-[rotateY(180deg)]"
        )}
      >
        {/* Front — details */}
        <div
          className={cn(
            "relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 backface-hidden transition-shadow hover:shadow-lg dark:hover:shadow-[0_8px_32px_rgba(37,99,235,0.15)]",
            flipped && "pointer-events-none"
          )}
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-medium text-foreground">
              {project.title}
            </h3>
            <button
              type="button"
              onClick={() => setFlipped(true)}
              aria-label={`View ${project.title} screenshots`}
              title="View screenshots"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Images size={16} />
            </button>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-medium text-accent transition-opacity hover:opacity-80"
          >
            Visit project
            <ArrowUpRight size={15} />
          </a>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Back — auto-playing screenshots */}
        <div
          className={cn(
            "absolute inset-0 overflow-hidden rounded-2xl border border-border bg-card backface-hidden transform-[rotateY(180deg)]",
            !flipped && "pointer-events-none"
          )}
        >
          <Image
            src={project.images[active]}
            alt={`${project.title} screenshot ${active + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />

          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-black/40" />

          <p className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/80">
            {project.title}
          </p>

          <button
            type="button"
            onClick={() => setFlipped(false)}
            aria-label="Back to project details"
            title="Back to details"
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
          >
            <RotateCcw size={15} />
          </button>

          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
          >
            <ChevronRight size={18} />
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
            {project.images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Go to image ${index + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  index === active ? "w-5 bg-white" : "w-1.5 bg-white/50"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
