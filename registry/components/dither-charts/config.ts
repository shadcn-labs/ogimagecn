import type { ControlConfig } from "@/lib/customizer-config";

export const ditherChartsConfig: ControlConfig = {
  command: {
    default: "npx @dither-kit/cli add dither-kit",
    label: "Command",
    type: "text",
  },
  name: { default: "dither-kit", label: "Name", type: "text" },
  primary: { default: "#358ff3", label: "Primary", type: "color" },
  secondary: { default: "#966eff", label: "Secondary", type: "color" },
  tagline: {
    default: "five chart types · one tiny canvas engine",
    label: "Tagline",
    type: "text",
  },
};
