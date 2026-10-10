import type { Theme } from "@/providers/theme-provider";

export type ScenePalette = {
  solid: string;
  wire: string;
  particle: string;
  sparkle: string;
  deviceBody: string;
  deviceScreen: string;
  lightMain: string;
  lightAccent: string;
};

export function getScenePalette(theme: Theme): ScenePalette {
  if (theme === "dark") {
    return {
      solid: "#60a5fa",
      wire: "#93c5fd",
      particle: "#3b82f6",
      sparkle: "#38bdf8",
      deviceBody: "#1e3a5f",
      deviceScreen: "#7dd3fc",
      lightMain: "#93c5fd",
      lightAccent: "#2563eb",
    };
  }

  return {
    solid: "#2563eb",
    wire: "#60a5fa",
    particle: "#3b82f6",
    sparkle: "#38bdf8",
    deviceBody: "#1e3a5f",
    deviceScreen: "#dbeafe",
    lightMain: "#ffffff",
    lightAccent: "#bfdbfe",
  };
}
