"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "@/hooks/use-theme";
import { getScenePalette } from "@/lib/scene-colors";
import {
  ExpressIcon,
  FirebaseIcon,
  GitIcon,
  JavaScriptIcon,
  MongoDBIcon,
  NextjsIcon,
  NodejsIcon,
  PostgresqlIcon,
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "@/components/ui/tech-icons";

const ORBIT_TOOLS = [
  { name: "Next.js", Icon: NextjsIcon, color: "var(--foreground)" },
  { name: "TypeScript", Icon: TypeScriptIcon, color: "#3178c6" },
  { name: "React", Icon: ReactIcon, color: "#61dafb" },
  { name: "Node.js", Icon: NodejsIcon, color: "#5fa04e" },
  { name: "Express.js", Icon: ExpressIcon, color: "var(--foreground)" },
  { name: "PostgreSQL", Icon: PostgresqlIcon, color: "#4169e1" },
  { name: "MongoDB", Icon: MongoDBIcon, color: "#47a248" },
  { name: "Firebase", Icon: FirebaseIcon, color: "#ffca28" },
  { name: "JavaScript", Icon: JavaScriptIcon, color: "#f7df1e" },
  { name: "Tailwind CSS", Icon: TailwindIcon, color: "#06b6d4" },
  { name: "Git", Icon: GitIcon, color: "#f05032" },
];

function ToolOrbit() {
  const spin = useRef<THREE.Group>(null);
  const { viewport, size } = useThree();

  // Keep the ring inside the viewport on every screen size.
  const radius = Math.min(viewport.width, viewport.height) * 0.4;
  const step = (Math.PI * 2) / ORBIT_TOOLS.length;

  const yOffset = size.height ? -(50 / size.height) * viewport.height : 0;

  useFrame((_, delta) => {
    if (spin.current) spin.current.rotation.z -= delta * 0.28;
  });

  return (
    <group position={[0, yOffset, 0]} rotation={[0.42, 0, 0]}>
      <group ref={spin}>
        {ORBIT_TOOLS.map(({ name, Icon, color }, i) => {
          const angle = i * step;
          return (
            <Html
              key={name}
              position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}
              distanceFactor={7}
              zIndexRange={[30, 0]}
              wrapperClass="pointer-events-none select-none"
            >
              <div
                style={{ color }}
                className="flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-border bg-card/75 shadow-lg backdrop-blur-md sm:h-12 sm:w-12 sm:rounded-2xl"
              >
                <Icon size={18} className="h-4 w-4 sm:h-5.5 sm:w-5.5" />
              </div>
            </Html>
          );
        })}
      </group>
    </group>
  );
}

const PARTICLE_COUNT = 400;

const particlePositions = (() => {
  const pos = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 14;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
  }
  return pos;
})();

function ParticleField({ color }: { color: string }) {
  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.04;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlePositions, 3]}
          count={PARTICLE_COUNT}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color={color}
        transparent
        opacity={0.65}
        sizeAttenuation
      />
    </points>
  );
}

export function HeroScene() {
  const { theme } = useTheme();
  const palette = getScenePalette(theme);

  return (
    <>
      <ParticleField color={palette.particle} />
      <ToolOrbit />

      <Sparkles
        count={70}
        scale={[12, 8, 4]}
        size={1.4}
        speed={0.6}
        color={palette.sparkle}
        opacity={theme === "dark" ? 0.5 : 0.35}
      />
    </>
  );
}
