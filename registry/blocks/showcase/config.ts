import type { ControlConfig } from "@/registry/lib/customizer-config";

export const showcaseConfig: ControlConfig = {
  accent: { default: "#6366f1", label: "Accent Color", type: "color" },
  subtitle: {
    default: "The dashboard that brings every metric into one calm view.",
    label: "Subtitle",
    type: "textarea",
  },
  title: {
    default: "Run your business smarter",
    label: "Title",
    type: "text",
  },
  url: { default: "app.ogimagecn.com", label: "URL", type: "text" },
  variant: {
    default: "dark",
    label: "Variant",
    options: ["dark", "light"],
    type: "select",
  },
};
