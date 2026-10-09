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
    solid: "#8b7e6e",
    wire: "#a39a8c",
    particle: "#b5a898",
    sparkle: "#9a8f7d",
    deviceBody: "#6b6358",
    deviceScreen: "#f5f0e8",
    lightMain: "#faf8f5",
    lightAccent: "#c4b8a8",
  };
}
