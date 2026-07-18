import type { ControlConfig } from "@/lib/customizer-config";

export const showcaseConfig: ControlConfig = {
  accent: { default: "#6366f1", label: "Accent Color", type: "color" },
  subtitle: {
    default: "The dashboard that brings every metric into one calm view.",
    label: "Subtitle",
    type: "text",
  },
  title: {
    default: "Run your business smarter",
    label: "Title",
    type: "text",
  },
  url: { default: "app.ogimagecn.dev", label: "URL", type: "text" },
};
