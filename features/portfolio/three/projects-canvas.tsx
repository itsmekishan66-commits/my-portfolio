"use client";

import { Canvas } from "@react-three/fiber";
import { ProjectsScene } from "./projects-scene";
import { useTheme } from "@/hooks/use-theme";

export default function ProjectsCanvas() {
  const { theme } = useTheme();

  return (
    <Canvas
      key={theme}
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ProjectsScene />
    </Canvas>
  );
}
