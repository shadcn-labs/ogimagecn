import type { ControlConfig } from "@/lib/customizer-config";

export const shioriConfig: ControlConfig = {
  accent: { default: "#f97316", label: "Accent Color", type: "color" },
  accentSecondary: {
    default: "#ea580c",
    label: "Secondary Accent",
    type: "color",
  },
  description: {
    default: "A beautifully simple read-it-later app",
    label: "Description",
    type: "text",
  },
  title: { default: "Shiori", label: "Title", type: "text" },
};
