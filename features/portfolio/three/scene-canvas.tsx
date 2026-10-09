"use client";

import { Canvas } from "@react-three/fiber";
import { HeroScene } from "./hero-scene";
import { useTheme } from "@/hooks/use-theme";

export default function SceneCanvas() {
  const { theme } = useTheme();

  return (
    <Canvas
      key={theme}
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <HeroScene />
    </Canvas>
  );
}
