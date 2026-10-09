"use client";

import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "@/hooks/use-theme";
import { getScenePalette } from "@/lib/scene-colors";

function InteractiveShape({
  geometry,
  position,
  rotationSpeed = 0.5,
  wireframe = false,
  palette,
}: {
  geometry: React.ReactNode;
  position: [number, number, number];
  rotationSpeed?: number;
  wireframe?: boolean;
  palette: ReturnType<typeof getScenePalette>;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const impulse = useRef(0);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * rotationSpeed * (hovered ? 1.4 : 0.5);
    meshRef.current.rotation.y += delta * rotationSpeed * (hovered ? 1.2 : 0.6);
    if (impulse.current > 0) {
      meshRef.current.rotation.z += delta * impulse.current;
      impulse.current = THREE.MathUtils.lerp(impulse.current, 0, 0.92);
    }
    const targetScale = hovered ? 1.15 : 1;
    meshRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.12
    );
  });

  return (
    <Float speed={hovered ? 2.5 : 1.8} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh
        ref={meshRef}
        position={position}
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
          impulse.current = 4;
        }}
      >
        {geometry}
        <meshStandardMaterial
          color={wireframe ? palette.wire : palette.solid}
          wireframe={wireframe}
          metalness={wireframe ? 0 : 0.55}
          roughness={wireframe ? 1 : 0.3}
          emissive={hovered ? palette.solid : "#000000"}
          emissiveIntensity={hovered ? 0.25 : 0}
        />
      </mesh>
    </Float>
  );
}

function ShapeCluster({ palette }: { palette: ReturnType<typeof getScenePalette> }) {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      pointer.x * 0.9,
      0.1
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      pointer.y * 0.55,
      0.1
    );
    groupRef.current.position.y = Math.sin(t * 0.8) * 0.2;
    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      pointer.x * 0.4,
      0.06
    );
  });

  return (
    <group ref={groupRef}>
      <InteractiveShape
        position={[-1.8, 0.3, 0]}
        rotationSpeed={0.35}
        wireframe
        palette={palette}
        geometry={<icosahedronGeometry args={[0.75, 1]} />}
      />
      <InteractiveShape
        position={[1.6, -0.2, -0.5]}
        rotationSpeed={0.45}
        palette={palette}
        geometry={<torusKnotGeometry args={[0.55, 0.16, 128, 24]} />}
      />
      <InteractiveShape
        position={[0.2, 1.1, -0.8]}
        rotationSpeed={0.3}
        wireframe
        palette={palette}
        geometry={<octahedronGeometry args={[0.65, 0]} />}
      />
      <InteractiveShape
        position={[2.2, 0.8, 0.3]}
        rotationSpeed={0.5}
        palette={palette}
        geometry={<boxGeometry args={[0.9, 0.9, 0.9]} />}
      />
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
      <ambientLight intensity={theme === "dark" ? 0.4 : 0.55} />
      <directionalLight
        position={[4, 6, 4]}
        intensity={1.2}
        color={palette.lightMain}
      />
      <directionalLight
        position={[-4, -2, -3]}
        intensity={0.5}
        color={palette.lightAccent}
      />
      <pointLight position={[0, 2, 3]} intensity={0.7} color={palette.sparkle} />

      <ParticleField color={palette.particle} />
      <ShapeCluster palette={palette} />

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
