"use client";

import dynamic from "next/dynamic";

const ProjectsCanvas = dynamic(
  () => import("../three/projects-canvas"),
  { ssr: false }
);

export function Projects3D() {
  return (
    <div className="relative hidden h-72 w-full lg:block lg:h-80">
      <div className="pointer-events-auto absolute inset-0">
        <ProjectsCanvas />
      </div>
    </div>
  );
}
