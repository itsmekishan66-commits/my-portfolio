import { BackgroundGrid } from "@/components/layout/background-grid";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { TechMarquee } from "@/components/effects/tech-marquee";
import { Hero } from "@/features/portfolio/components/hero";
import { About } from "@/features/portfolio/components/about";
import { Skills } from "@/features/portfolio/components/skills";
import { Experience } from "@/features/portfolio/components/experience";
import { Projects } from "@/features/portfolio/components/projects";
import { Contact } from "@/features/portfolio/components/contact";

export default function Home() {
  return (
    <>
      <BackgroundGrid />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
