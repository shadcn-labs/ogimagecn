import type { ControlConfig } from "@/lib/customizer-config";

export const simpleConfig: ControlConfig = {
  accent: { default: "#7c3aed", label: "Accent Color", type: "color" },
  brand: { default: "ogimagecn", label: "Brand", type: "text" },
  description: {
    default:
      "A shadcn registry of social card components you can copy, paste, and ship.",
    label: "Description",
    type: "text",
  },
  label: { default: "Open Graph", label: "Label", type: "text" },
  title: {
    default: "Beautiful OG images, built on Satori",
    label: "Title",
    type: "text",
  },
};
