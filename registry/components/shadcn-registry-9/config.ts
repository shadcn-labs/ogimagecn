import type { ControlConfig } from "@/lib/customizer-config";

export const shadcnRegistry9Config: ControlConfig = {
  activeTab: {
    default: "0",
    label: "Active Tab",
    options: ["0", "1", "2"],
    type: "select",
  },
  brand: { default: "", label: "Brand", type: "text" },
  brandColor: {
    default: "#2563eb",
    label: "Brand Color",
    type: "color",
  },
  logo: { default: "", label: "Logo", type: "image" },
  tabs: {
    default: ["Components", "Toolbox", "Logs"],
    label: "Tabs",
    type: "array",
  },
  title: {
    default: "The hub for rebellious thinkers",
    label: "Tagline",
    type: "text",
  },
};
