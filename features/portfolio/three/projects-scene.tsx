"use client";

import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "@/hooks/use-theme";
import { getScenePalette } from "@/lib/scene-colors";

const CODE_LINES = [
  { y: 0.3, width: 0.9, indent: 0.08 },
  { y: 0.15, width: 1.25, indent: 0.22 },
  { y: 0.0, width: 0.6, indent: 0.4 },
  { y: -0.15, width: 1.35, indent: 0.08 },
  { y: -0.3, width: 1.0, indent: 0.22 },
  { y: -0.45, width: 0.75, indent: 0.08 },
];

function Monitor({
  palette,
  hovered,
}: {
  palette: ReturnType<typeof getScenePalette>;
  hovered: boolean;
}) {
  const dotColors = [palette.sparkle, palette.solid, palette.wire];

  return (
    <group position={[0, 0.5, 0]}>
      {/* Bezel */}
      <RoundedBox args={[2.4, 1.5, 0.1]} radius={0.06} smoothness={4}>
        <meshStandardMaterial
          color={palette.deviceBody}
          metalness={0.75}
          roughness={0.2}
          emissive={palette.deviceBody}
          emissiveIntensity={hovered ? 0.15 : 0.05}
        />
      </RoundedBox>

      {/* Screen */}
      <mesh position={[0, 0, 0.055]}>
        <planeGeometry args={[2.24, 1.34]} />
        <meshStandardMaterial
          color={palette.deviceScreen}
          metalness={0.15}
          roughness={0.7}
        />
      </mesh>

      {/* Browser chrome */}
      <mesh position={[0, 0.57, 0.061]}>
        <planeGeometry args={[2.24, 0.26]} />
        <meshStandardMaterial
          color={palette.deviceBody}
          metalness={0.5}
          roughness={0.4}
        />
      </mesh>

      {[-0.98, -0.86, -0.74].map((x, i) => (
        <mesh key={x} position={[x, 0.57, 0.066]}>
          <circleGeometry args={[0.04, 24]} />
          <meshBasicMaterial color={dotColors[i]} />
        </mesh>
      ))}

      {/* Code lines */}
      {CODE_LINES.map((line, i) => (
        <RoundedBox
          key={line.y}
          args={[line.width, 0.06, 0.02]}
          radius={0.02}
          smoothness={3}
          position={[-1.06 + line.indent + line.width / 2, line.y, 0.07]}
        >
          <meshStandardMaterial
            color={i % 2 === 0 ? palette.solid : palette.wire}
            emissive={i % 2 === 0 ? palette.solid : palette.wire}
            emissiveIntensity={0.35}
            metalness={0.1}
            roughness={0.4}
          />
        </RoundedBox>
      ))}
    </group>
  );
}

function Desktop({ palette, hovered }: { palette: ReturnType<typeof getScenePalette>; hovered: boolean }) {
  return (
    <group>
      <Monitor palette={palette} hovered={hovered} />

      {/* Stand neck */}
      <mesh position={[0, -0.5, -0.02]}>
        <boxGeometry args={[0.16, 0.5, 0.12]} />
        <meshStandardMaterial
          color={palette.deviceBody}
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Stand base */}
      <RoundedBox
        args={[0.95, 0.07, 0.5]}
        radius={0.03}
        smoothness={4}
        position={[0, -0.78, 0.04]}
      >
        <meshStandardMaterial
          color={palette.deviceBody}
          metalness={0.7}
          roughness={0.3}
        />
      </RoundedBox>

      {/* Keyboard */}
      <group position={[0, -0.78, 0.62]} rotation={[-0.12, 0, 0]}>
        <RoundedBox args={[1.5, 0.06, 0.42]} radius={0.03} smoothness={4}>
          <meshStandardMaterial
            color={palette.deviceBody}
            metalness={0.5}
            roughness={0.5}
          />
        </RoundedBox>
      </group>
    </group>
  );
}

function DesktopMockup({
  palette,
}: {
  palette: ReturnType<typeof getScenePalette>;
}) {
  const group = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const { pointer } = useThree();
  const spinBoost = useRef(0);

  useFrame((state, delta) => {
    if (!group.current) return;
    const speed = hovered ? 2.2 : 1.4;
    group.current.rotation.y +=
      delta * speed + pointer.x * (hovered ? 0.08 : 0.03);
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      pointer.y * 0.35 + Math.sin(state.clock.elapsedTime * 1.2) * 0.12,
      0.12
    );
    if (spinBoost.current > 0) {
      group.current.rotation.z += delta * spinBoost.current;
      spinBoost.current = THREE.MathUtils.lerp(spinBoost.current, 0, 0.9);
    }
    const s = hovered ? 1.02 : 0.95;
    group.current.scale.lerp(new THREE.Vector3(s, s, s), 0.1);
  });

  return (
    <group
      ref={group}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "grab";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "auto";
      }}
      onClick={(e) => {
        e.stopPropagation();
        spinBoost.current = 6;
      }}
    >
      <Float speed={3} rotationIntensity={0.8} floatIntensity={1}>
        <Desktop palette={palette} hovered={hovered} />
      </Float>
    </group>
  );
}

export function ProjectsScene() {
  const { theme } = useTheme();
  const palette = getScenePalette(theme);

  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 4, 5]} intensity={1} color={palette.lightMain} />
      <pointLight position={[-2, 1, 3]} intensity={0.6} color={palette.lightAccent} />
      <DesktopMockup palette={palette} />
    </>
  );
}
