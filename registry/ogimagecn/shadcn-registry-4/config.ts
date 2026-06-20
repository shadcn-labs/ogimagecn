import type { ControlConfig } from "@/lib/customizer-config";

export const shadcnRegistry4Config: ControlConfig = {
  accent: { default: "#ffffff", label: "Accent", type: "color" },
  logo: { default: "", label: "Logo", type: "image" },
  name: { default: "Animate UI", label: "Name", type: "text" },
  title: {
    default:
      "Discover animated primitives, components, and icons for building expressive, modern UIs",
    label: "Title",
    type: "text",
  },
  url: { default: "animate-ui.com", label: "URL", type: "text" },
};
