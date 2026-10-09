"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { experience } from "../data/portfolio-data";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/effects/motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-28">
      <Container>
        <FadeIn>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionHeading
                index="03"
                label="Experience"
                title="Where I've built"
              />
            </div>
            <a href="/Kishan-Shah-Resume.pdf" download className="shrink-0">
              <Button type="button" variant="outline">
                <Download size={16} />
                Download resume
              </Button>
            </a>
          </div>
        </FadeIn>

        <div className="mt-12 space-y-0">
          {experience.map((item, index) => (
            <FadeIn key={`${item.title}-${item.company}`} delay={index * 0.1}>
              <motion.article
                whileHover={{ x: 4 }}
                className="group relative border-t border-border py-10 first:border-t-0 md:grid md:grid-cols-[140px_1fr] md:gap-8"
              >
                <p className="font-mono text-sm text-muted">{item.period}</p>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-xl font-medium text-foreground">
                      {item.title}
                    </h3>
                    <span className="text-sm text-muted">· {item.company}</span>
                  </div>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">
                    {item.type} · {item.location}
                  </p>

                  <ul className="mt-4 max-w-2xl space-y-2 text-muted leading-relaxed">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                    {item.link ? (
                      <a
                        href={item.link}
                        className="ml-1 inline-flex items-center gap-1 text-xs text-accent transition-opacity hover:opacity-80"
                      >
                        View
                        <ArrowUpRight size={14} />
                      </a>
                    ) : null}
                  </div>
                </div>
                <div className="absolute left-0 top-10 hidden h-px w-0 bg-accent transition-all duration-500 group-hover:w-full md:block" />
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
