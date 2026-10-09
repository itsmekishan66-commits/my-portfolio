"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { profile } from "../data/portfolio-data";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/effects/motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactVisualCurve } from "./contact-visual";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-28">
      <Container>
        <FadeIn>
          <SectionHeading index="05" label="Contact" />
        </FadeIn>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-3xl border border-border bg-card p-8 backdrop-blur-sm sm:p-12 dark:shadow-[0_0_40px_rgba(37,99,235,0.08)]"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Let&apos;s build something together.
              </h2>
              <p className="mt-4 max-w-lg text-muted">
                Open to freelance, full-time, and collaboration on full-stack web
                apps. Drop a line — I typically reply within 24 hours.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href={`mailto:${profile.email}`}>
                  <Button type="button" size="lg" className="w-full sm:w-auto">
                    <Send size={16} />
                    {profile.email}
                  </Button>
                </a>
                <p className="text-center text-sm text-muted sm:text-left">
                  {profile.location}
                </p>
              </div>
            </div>

            <ContactVisualCurve />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
