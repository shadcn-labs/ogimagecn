import type { ControlConfig } from "@/lib/customizer-config";

export const shadcnRegistry8Config: ControlConfig = {
  badges: {
    default: ["Open Source", "MIT license"],
    label: "Badges",
    type: "array",
  },
  brand: { default: "AI Canvas", label: "Brand", type: "text" },
  features: {
    default: ["CLI install", "MCP ready", "shadcn registry"],
    label: "Features",
    type: "array",
  },
  logo: { default: "", label: "Logo", type: "image" },
  subtitle: {
    default: "Design Systems & Templates",
    label: "Subtitle",
    type: "text",
  },
  title: {
    default: "AI Native Components,",
    label: "Title",
    type: "text",
  },
};
