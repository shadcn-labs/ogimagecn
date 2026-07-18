import type { ControlConfig } from "@/lib/customizer-config";

export const ditherRegistryConfig: ControlConfig = {
  accent: { default: "#28d26e", label: "Accent", type: "color" },
  command: {
    default: "npx shadcn@latest add @acme/button",
    label: "Command",
    type: "text",
  },
  description: {
    default:
      "Composable components your team and coding agents can install in one command.",
    label: "Description",
    type: "text",
  },
  registry: { default: "@acme/ui", label: "Registry", type: "text" },
  title: {
    default: "Ship your design system as code.",
    label: "Title",
    type: "text",
  },
};
