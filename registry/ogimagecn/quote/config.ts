import type { ControlConfig } from "@/lib/customizer-config";

export const quoteConfig: ControlConfig = {
  accent: { default: "#f472b6", label: "Accent Color", type: "color" },
  author: { default: "Grace Hopper", label: "Author", type: "text" },
  avatar: { default: "", label: "Avatar", type: "image" },
  handle: { default: "@gracehopper", label: "Handle", type: "text" },
  quote: {
    default: "This is hands down the fastest way to ship beautiful OG images.",
    label: "Quote",
    type: "text",
  },
};
