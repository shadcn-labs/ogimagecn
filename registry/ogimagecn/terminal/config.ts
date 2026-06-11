import type { ControlConfig } from "@/lib/customizer-config";

export const terminalConfig: ControlConfig = {
  accent: { default: "#22c55e", label: "Accent Color", type: "color" },
  brand: { default: "ogimagecn", label: "Brand", type: "text" },
  caption: {
    default: "npx shadcn@latest add ogimagecn",
    label: "Caption",
    type: "text",
  },
  title: {
    default: "Ship beautiful OG images",
    label: "Title",
    type: "text",
  },
};
